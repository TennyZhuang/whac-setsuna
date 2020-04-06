import setsunaURL from './assets/setsuna1.png';
import hammerURL from './assets/hammer.png';
import hitURL from './assets/hit.mp3';

function toHHMMSS(ms: number) {
  var sec_num = ms / 1000; // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  return hours+':'+minutes+':'+seconds;
};

(async function () {
  const canvas = <HTMLCanvasElement>document.getElementById("game");
  const scoreboard = <HTMLDivElement>document.getElementById('score');
  const content = <HTMLDivElement>document.getElementById('content');

  canvas.width = 1000;
  canvas.height = 600;

  const context = canvas.getContext('2d');
  const setsuna = new Image();
  setsuna.src = setsunaURL;
  const hammer = new Image();
  hammer.src = hammerURL;
  const hit = <HTMLAudioElement>document.getElementById('hit');

  context.font = '50px Georgia';
  context.textAlign = 'center';
  context.fillStyle = "white";
  context.fillText('雪菜没了！就救雪菜', 500, 300);
  context.fillText('敲击空格开始游戏', 500, 400);

  await Promise.all([
    new Promise((resolve, reject) => {
      setsuna.onload = resolve;
      setsuna.onerror = reject;
    }),
    new Promise((resolve, reject) => {
      hammer.onload = resolve;
      hammer.onerror = reject;
    }),
    new Promise((resolve, _) => {
      window.onkeypress = (ev: KeyboardEvent) => {
        if (ev.code == "Space") {
          resolve();
        }
      }
    }),
  ]);

  const start = new Date().getTime();

  const sleep = (ms: number) => new Promise((resolve, _) => {
    setTimeout(resolve, ms);
  });

  let progress = 0;
  let step = 0.02;
  let beating = false;
  let hammerX = 0;
  let hammerY = 0;
  let existing = false;
  let posX = 0;
  let posY = 0;

  canvas.onmousedown = (ev) => {
    hammerX = ev.offsetX;
    hammerY = ev.offsetY;
    beating = true;
  }
  let score = 0;

  async function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (existing) {
      context.drawImage(setsuna, 0, setsuna.height*(1-progress), setsuna.width, setsuna.height, posX, posY+setsuna.height*(1-progress), setsuna.width, setsuna.height);
    }
    if (beating) {
      context.drawImage(hammer, hammerX-50, hammerY-50, 100, 100);
    }
  }

  async function drawLoop() {
    while (true) {
      await sleep(20);
      draw();
    }
  }

  let level = 1;
  async function roundLoop() {
    while (true) {
      let baseStep = [level * 0.01, level * 0.03];
      await sleep(Math.random()*80+100);
      posX = Math.random() * 300 + 350;
      posY = Math.random() * 200 + 150;
      step = baseStep[0] + Math.random() * baseStep[1];
      await round();
      const duration = new Date().getTime() - start;
      if (score >= level * 10) {
        alert(`关卡：${level} -> ${level + 1}\n耗时：${toHHMMSS(duration)}`)
        level++;
      }
      scoreboard.innerText = `第${level}关 总分：${score}`;
    }
  }

  function intersect(x: number, y: number) {
    return posX <= x && x <= posX + setsuna.width && posY <= y && y <= posY + setsuna.height;
  }

  async function round() {
    progress = 0;
    existing = true;
    const wait = (ms: number) => new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
      canvas.onmouseup = (ev) => {
        hit.play();
        beating = false;
        if (!intersect(ev.offsetX, ev.offsetY)) {
          return;
        }
        reject();
      };
    });

    try {
      while (progress < 1) {
        progress += step;
        await wait(20);
      }
      await wait(Math.random()*200+100);
      while (progress > 0) {
        progress -= 0.1;
        await wait(20);
      }
      progress = 0;
      content.innerText = '让雪菜逃走了！'
    } catch {
      score += 1;
      content.innerText = '击中雪菜了！'
      while (progress > 0) {
        progress -= 0.1;
        await sleep(20);
      }
      progress = 0;
      existing = true;      
    } finally {
      existing = false;
    }
  }

  Promise.all([drawLoop(), roundLoop()]).then(() => {
    console.log("game exit.");
  });
})();
