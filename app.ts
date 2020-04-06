import setunaURL from './assets/setuna1.png';
import hammerURL from './assets/hammer.png';

(async function () {
  const canvas = <HTMLCanvasElement>document.getElementById("game");
  const scoreboard = <HTMLDivElement>document.getElementById('score');
  const content = <HTMLDivElement>document.getElementById('content');

  canvas.width = 1000;
  canvas.height = 600;

  const context = canvas.getContext('2d');
  const setuna = new Image();
  setuna.src = setunaURL;
  const hammer = new Image();
  hammer.src = hammerURL;

  await Promise.all([
    new Promise((resolve, reject) => {
      setuna.onload = resolve;
      setuna.onerror = reject;
    }),
    new Promise((resolve, reject) => {
      hammer.onload = resolve;
      hammer.onerror = reject;
    }),
  ]);

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
      context.drawImage(setuna, 0, setuna.height*(1-progress), setuna.width, setuna.height, posX, posY+setuna.height*(1-progress), setuna.width, setuna.height);
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

  async function roundLoop() {
    while (true) {
      await sleep(Math.random()*80+100);
      posX = Math.random() * 300 + 350;
      posY = Math.random() * 200 + 150;
      step = 0.01 + Math.random() * 0.08;
      await round();
    }
  }

  function intersect(x: number, y: number) {
    return posX <= x && x <= posX + setuna.width && posY <= y && y <= posY + setuna.height;
  }

  async function round() {
    progress = 0;
    existing = true;
    const wait = (ms: number) => new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
      canvas.onmouseup = (ev) => {
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
      scoreboard.innerText = `总分：${score}`;
      existing = true;      
    } finally {
      existing = false;
    }
  }

  Promise.all([drawLoop(), roundLoop()]).then(() => {
    console.log("game exit.");
  });
})();
