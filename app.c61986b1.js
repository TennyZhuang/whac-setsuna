// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/setuna1.png":[function(require,module,exports) {
module.exports = "/setuna1.9cca44ad.png";
},{}],"assets/hammer.png":[function(require,module,exports) {
module.exports = "/hammer.4d1417ad.png";
},{}],"app.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var setuna1_png_1 = __importDefault(require("./assets/setuna1.png"));

var hammer_png_1 = __importDefault(require("./assets/hammer.png"));

(function () {
  return __awaiter(this, void 0, void 0, function () {
    function draw() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          if (existing) {
            context.drawImage(setuna, 0, setuna.height * (1 - progress), setuna.width, setuna.height, posX, posY + setuna.height * (1 - progress), setuna.width, setuna.height);
          }

          if (beating) {
            context.drawImage(hammer, hammerX - 50, hammerY - 50, 100, 100);
          }

          return [2
          /*return*/
          ];
        });
      });
    }

    function drawLoop() {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!true) return [3
              /*break*/
              , 2];
              return [4
              /*yield*/
              , sleep(20)];

            case 1:
              _a.sent();

              draw();
              return [3
              /*break*/
              , 0];

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function roundLoop() {
      return __awaiter(this, void 0, void 0, function () {
        var baseStep, duration;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!true) return [3
              /*break*/
              , 3];
              baseStep = [level * 0.01, level * 0.03];
              return [4
              /*yield*/
              , sleep(Math.random() * 80 + 100)];

            case 1:
              _a.sent();

              posX = Math.random() * 300 + 350;
              posY = Math.random() * 200 + 150;
              step = baseStep[0] + Math.random() * baseStep[1];
              return [4
              /*yield*/
              , round()];

            case 2:
              _a.sent();

              duration = new Date();
              duration.setMilliseconds(new Date().getTime() - start);

              if (score >= level * 10) {
                alert("\u5173\u5361\uFF1A" + level + " -> " + (level + 1) + "\n\u8017\u65F6\uFF1A" + duration.toISOString().substr(11, 8));
                level++;
              }

              scoreboard.innerText = "\u7B2C" + level + "\u5173 \u603B\u5206\uFF1A" + score;
              return [3
              /*break*/
              , 0];

            case 3:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    function intersect(x, y) {
      return posX <= x && x <= posX + setuna.width && posY <= y && y <= posY + setuna.height;
    }

    function round() {
      return __awaiter(this, void 0, void 0, function () {
        var wait, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              progress = 0;
              existing = true;

              wait = function wait(ms) {
                return new Promise(function (resolve, reject) {
                  setTimeout(resolve, ms);

                  canvas.onmouseup = function (ev) {
                    hit.play();
                    beating = false;

                    if (!intersect(ev.offsetX, ev.offsetY)) {
                      return;
                    }

                    reject();
                  };
                });
              };

              _b.label = 1;

            case 1:
              _b.trys.push([1, 9, 13, 14]);

              _b.label = 2;

            case 2:
              if (!(progress < 1)) return [3
              /*break*/
              , 4];
              progress += step;
              return [4
              /*yield*/
              , wait(20)];

            case 3:
              _b.sent();

              return [3
              /*break*/
              , 2];

            case 4:
              return [4
              /*yield*/
              , wait(Math.random() * 200 + 100)];

            case 5:
              _b.sent();

              _b.label = 6;

            case 6:
              if (!(progress > 0)) return [3
              /*break*/
              , 8];
              progress -= 0.1;
              return [4
              /*yield*/
              , wait(20)];

            case 7:
              _b.sent();

              return [3
              /*break*/
              , 6];

            case 8:
              progress = 0;
              content.innerText = '让雪菜逃走了！';
              return [3
              /*break*/
              , 14];

            case 9:
              _a = _b.sent();
              score += 1;
              content.innerText = '击中雪菜了！';
              _b.label = 10;

            case 10:
              if (!(progress > 0)) return [3
              /*break*/
              , 12];
              progress -= 0.1;
              return [4
              /*yield*/
              , sleep(20)];

            case 11:
              _b.sent();

              return [3
              /*break*/
              , 10];

            case 12:
              progress = 0;
              existing = true;
              return [3
              /*break*/
              , 14];

            case 13:
              existing = false;
              return [7
              /*endfinally*/
              ];

            case 14:
              return [2
              /*return*/
              ];
          }
        });
      });
    }

    var canvas, scoreboard, content, context, setuna, hammer, hit, start, sleep, progress, step, beating, hammerX, hammerY, existing, posX, posY, score, level;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          canvas = document.getElementById("game");
          scoreboard = document.getElementById('score');
          content = document.getElementById('content');
          canvas.width = 1000;
          canvas.height = 600;
          context = canvas.getContext('2d');
          setuna = new Image();
          setuna.src = setuna1_png_1.default;
          hammer = new Image();
          hammer.src = hammer_png_1.default;
          hit = document.getElementById('hit');
          context.font = '50px Georgia';
          context.textAlign = 'center';
          context.fillStyle = "white";
          context.fillText('雪菜没了！就救雪菜', 500, 300);
          context.fillText('敲击空格开始游戏', 500, 400);
          start = new Date().getTime();
          return [4
          /*yield*/
          , Promise.all([new Promise(function (resolve, reject) {
            setuna.onload = resolve;
            setuna.onerror = reject;
          }), new Promise(function (resolve, reject) {
            hammer.onload = resolve;
            hammer.onerror = reject;
          }), new Promise(function (resolve, _) {
            window.onkeypress = function (ev) {
              if (ev.code == "Space") {
                resolve();
              }
            };
          })])];

        case 1:
          _a.sent();

          sleep = function sleep(ms) {
            return new Promise(function (resolve, _) {
              setTimeout(resolve, ms);
            });
          };

          progress = 0;
          step = 0.02;
          beating = false;
          hammerX = 0;
          hammerY = 0;
          existing = false;
          posX = 0;
          posY = 0;

          canvas.onmousedown = function (ev) {
            hammerX = ev.offsetX;
            hammerY = ev.offsetY;
            beating = true;
          };

          score = 0;
          level = 1;
          Promise.all([drawLoop(), roundLoop()]).then(function () {
            console.log("game exit.");
          });
          return [2
          /*return*/
          ];
      }
    });
  });
})();
},{"./assets/setuna1.png":"assets/setuna1.png","./assets/hammer.png":"assets/hammer.png"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52488" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map