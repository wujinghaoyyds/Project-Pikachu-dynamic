// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Ypau":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "e9312995559a911a6f9b63a6bd78eeec";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"30Yv7":[function(require,module,exports) {
require('./style.css');
var _cssJs = require('./css.js');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _cssJsDefault = _parcelHelpers.interopDefault(_cssJs);
const player = {
  id: undefined,
  n: 1,
  time: 0,
  ui: {
    demo1: document.querySelector('#demo1'),
    demo3: document.querySelector('#demo3')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnFast': 'fast'
  },
  init: () => {
    player.ui.demo1.innerText = _cssJsDefault.default.substr(0, player.n);
    player.ui.demo3.innerHTML = _cssJsDefault.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > _cssJsDefault.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo1.innerText = _cssJsDefault.default.substr(0, player.n);
    player.ui.demo3.innerHTML = _cssJsDefault.default.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 70;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();

},{"./style.css":"6eQIz","./css.js":"60uKb","@parcel/transformer-js/lib/esmodule-helpers.js":"3rHaG"}],"6eQIz":[function() {},{}],"60uKb":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
const string = `#demo2 .container .earLeft {
    position: absolute;
    width: 36px;
    height: 160px;
    left: 48px;
    top: 0;
    background: #fed823;
    border-bottom-left-radius: 80px 70%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    transform: rotateZ(25deg);
    border-left: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
    overflow: hidden;
    z-index: 100;
}
#demo2 .container .earLeft::after {
    position: absolute;
    content: '';
    display: block;
    width: 38px;
    height: 55px;
    background: #231815;
    transform: rotateZ(15deg);
    border-bottom: 3px solid #0A0A0A;
}
#demo2 .container .earRight {
    position: absolute;
    width: 30px;
    height: 140px;
    top: 69px;
    right: 80px;
    background: #231815;
    transform: rotateZ(80deg);
    border-bottom-left-radius: 80px 150%;
    border-top-left-radius: 190%;
    border-top-right-radius: 150%;
    border: 3px solid #0A0A0A;
    border-bottom: none;
    overflow: hidden;
    z-index: 200;
}
#demo2 .container .earRight::before {
    position: absolute;
    content: '';
    display: block;
    width: 40px;
    height: 110px;
    bottom: 0;
    right: -5px;
    background: #fed823;
    border-radius: 0 60% 0 0;
    border-top: 3px solid #0A0A0A;
}
#demo2 .container .pikBody {
    position: absolute;
    width: 185px;
    height: 340px;
    bottom: 0;
    transform: rotateZ(-1deg);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 130px 150px 100px 150px /120px 100px 130px 100px;
    z-index: 300;
}
#demo2 .container .pikBody .pikHead {
    position: absolute;
    width: 160px;
    height: 160px;
    background: #fed823;
    right: 7px;
    border: 3px solid #0A0A0A;
    border-radius: 130px 150px 25px 80px/120px 100px 120px 80px;
    border-bottom: none;
}
#demo2 .container .pikBody .pikHead .eyeLeft {
    position: absolute;
    top: 50px;
    left: 10px;
    width: 20px;
    height: 32px;
    background: #0A0A0A;
    border-radius: 50%;
    transform: rotateZ(10deg);
}
#demo2 .container .pikBody .pikHead .eyeLeft::before {
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 13px;
    background: #ffffff;
    border-radius: 50%;
    left: 10px;
    top: 5px;
    transform: rotateZ(8deg);
}
#demo2 .container .pikBody .pikHead .eyeLeft::after {
    content: '';
    position: absolute;
    display: block;
    width: 24px;
    height: 3px;
    background: #000000;
    transform: rotateZ(28deg);
}
#demo2 .container .pikBody .pikHead .eyeRight {
    position: absolute;
    top: 57px;
    right: 36px;
    width: 30px;
    height: 33px;
    background: #0A0A0A;
    border-radius: 50%;
}
#demo2 .container .pikBody .pikHead .eyeRight::before {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 12px;
    background: #ffffff;
    border-radius: 50%;
    left: 8px;
    top: 5px;
}
#demo2 .container .pikBody .pikHead .eyeRight::after {
    content: '';
    position: absolute;
    display: block;
    width: 28px;
    height: 3px;
    background: #000000;
    right: 3px;
    transform: rotateZ(-28deg);
}
#demo2 .container .pikBody .pikHead .nose {
    position: absolute;
    width: 10px;
    height: 11px;
    background: #0A0A0A;
    top: 75px;
    left: 40px;
    border-radius: 0 50% 30% 50%;
    transform: rotateZ(-36deg);
}
#demo2 .container .pikBody .pikHead .mouth {
    position: absolute;
    top: 90px;
    left: 48px;
    width: 25px;
    height: 20px;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    border-radius: 0 0 100% 0;
    transform: rotateZ(55deg);
}
#demo2 .container .pikBody .pikHead .mouth::before {
    content: '';
    position: absolute;
    display: block;
    width: 22px;
    height: 15px;
    border-radius: 0 0 88% 0;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    transform: rotateZ(-25deg);
    top: 20px;
    right: 15px;
}
#demo2 .container .pikBody .pikHead .cheekLeft {
    position: absolute;
    width: 30px;
    height: 70px;
    border-left: 4px solid #0A0A0A;
    background: #fed823;
    border-top-left-radius: 150% 90px;
    border-bottom-left-radius: 150% 90px;
    transform: rotateZ(-20deg);
    left: -10px;
    top: 81px;
}
#demo2 .container .pikBody .pikHead .cheekLeft::after {
    content: '';
    position: absolute;
    display: block;
    width: 23px;
    height: 40px;
    background: #e94e24;
    border-radius: 50%;
    transform: rotateZ(20deg);
    border-right: 3px solid #0A0A0A;
    border-top: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    left: -4px;
}
#demo2 .container .pikBody .pikHead .cheekRight {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e94e24;
    border: 3px solid #0A0A0A;
    top: 90px;
    right: 18px;
}
#demo2 .container .pikBody .pikTrunk {
    position: absolute;
    width: 160px;
    height: 150px;
    border-top-right-radius: 70px 140px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 30px;
    border-bottom: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    top: 165px;
    left: 30px;
    background: #fed823;
    z-index: 1;
}
#demo2 .container .pikBody .pikTrunk::before {
    position: absolute;
    content: '';
    display: block;
    width: 150px;
    height: 40px;
    background: #fed823;
    border-right: 3px solid #0A0A0A;
    transform: rotateZ(-8deg);
    right: 16px;
}
#demo2 .container .pikBody .pikTrunk::after {
    position: absolute;
    content: '';
    display: block;
    width: 70px;
    height: 100px;
    background: #fed823;
    border-left: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
    border-radius: 90% 30% 0 80%;
    bottom: -2px;
    left: -20px;
}
#demo2 .container .pikBody .pikTrunk .neck {
    position: absolute;
    width: 80px;
    height: 10px;
    border-bottom: 2px solid #0A0A0A;
    background: #fed823;
    top: -10px;
    left: 30px;
}
#demo2 .container .pikBody .pikTrunk .backMark1 {
    position: absolute;
    width: 18px;
    height: 12px;
    background: #c76e29;
    border: 2px solid #0A0A0A;
    border-right: none;
    border-top-left-radius: 50px 100%;
    border-bottom-left-radius: 50px 100%;
    transform: rotateZ(-10deg);
    top: 27px;
    right: 13px;
    z-index: 4;
}
#demo2 .container .pikBody .pikTrunk .backMark2 {
    position: absolute;
    width: 28px;
    height: 19px;
    background: #c76e29;
    border: 2px solid #0A0A0A;
    border-right: none;
    border-top-left-radius: 100px 190%;
    border-bottom-left-radius: 50px 130%;
    transform: rotateZ(-10deg);
    top: 82px;
    right: 0;
    z-index: 3;
}
#demo2 .container .pikBody .pikTrunk .handLeft {
    position: absolute;
    width: 65px;
    height: 65px;
    border-left: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
    border-radius: 70% 50% 80% 60%;
    background: #fed823;
    top: -10px;
    left: -20px;
    z-index: 5;
}
#demo2 .container .pikBody .pikTrunk .handLeft::before {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 10px;
    border-radius: 40%;
    border-top: 2px solid #0A0A0A;
    transform: rotateZ(17deg);
    top: 16px;
    left: 17px;
}
#demo2 .container .pikBody .pikTrunk .handRight {
    position: absolute;
    width: 85px;
    height: 65px;
    border-left: 3px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    border-radius: 150px 0 50px 50px/150% 0 70% 70%;
    background: #fed823;
    top: -5px;
    right: 45px;
    z-index: 10;
}
#demo2 .container .pikBody .footLeft {
    position: absolute;
    width: 70px;
    height: 30px;
    bottom: 0;
    border-radius: 75%;
    background: #fed823;
    transform: rotateZ(-18deg);
    border: 3px solid #0A0A0A;
}
#demo2 .container .pikBody .footLeft::before {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 6px;
    border-radius: 40%;
    transform: rotateZ(-15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 7px;
}
#demo2 .container .pikBody .footLeft::after {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 8px;
    border-radius: 50%;
    transform: rotateZ(-15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 11px;
    left: -1px;
}
#demo2 .container .pikBody .footRight {
    position: absolute;
    width: 70px;
    height: 27px;
    bottom: 0;
    right: -12px;
    border-radius: 85%;
    background: #fed823;
    transform: rotateZ(17deg);
    border-bottom: 3px solid #0A0A0A;
    border-left: 3px solid #0A0A0A;
    border-right: 2px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
}
#demo2 .container .pikBody .footRight::before {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 6px;
    border-radius: 40%;
    transform: rotateZ(15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 4px;
    right: 1px;
}
#demo2 .container .pikBody .footRight::after {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 8px;
    border-radius: 50%;
    transform: rotateZ(15deg);
    border-top: 3px solid #0A0A0A;
    bottom: 8px;
    right: -1px;
}
#demo2 .container .pikTail {
    position: absolute;
    width: 150px;
    height: 250px;
    right: 0;
    top: 140px;
    transform-origin: 0 bottom;
    animation: tailMove 3s ease infinite;
}
#demo2 .container .pikTail .part1 {
    position: absolute;
    width: 60px;
    height: 15px;
    border-top: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    background: #983c0d;
    bottom: 18px;
    transform: rotateZ(-50deg);
    z-index: 1;
}
#demo2 .container .pikTail .part2 {
    position: absolute;
    width: 50px;
    height: 18px;
    border-right: 2px solid #0A0A0A;
    background: #983c0d;
    bottom: 48px;
    left: 9px;
    transform: rotateZ(42deg);
    z-index: 2;
}
#demo2 .container .pikTail .part2::before {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 9px solid #fed823;
    border-right: 9px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    border-top: 5px solid rgba(0, 0, 0, 0);
    left: 15px;
    top: -1px;
}
#demo2 .container .pikTail .part2::after {
    position: absolute;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 9px solid #fed823;
    border-right: 9px solid rgba(0, 0, 0, 0);
    border-bottom: 5px solid rgba(0, 0, 0, 0);
    border-top: 5px solid rgba(0, 0, 0, 0);
    left: 14px;
    top: 8px;
}
#demo2 .container .pikTail .part3 {
    position: absolute;
    width: 70px;
    height: 25px;
    background: #fed823;
    bottom: 78px;
    transform: rotateZ(-46deg);
    z-index: 3;
}
#demo2 .container .pikTail .part4 {
    position: absolute;
    width: 80px;
    height: 35px;
    background: #fed823;
    bottom: 105px;
    left: -10px;
    transform: rotateZ(47deg);
    z-index: 5;
}
#demo2 .container .pikTail .part5 {
    position: absolute;
    width: 150px;
    height: 85px;
    border-top-left-radius: 100% 30px;
    border-bottom-right-radius: 20% 10px;
    border-bottom-left-radius: 10% 10px;
    border-top: 3px solid #0A0A0A;
    border-left: 1px solid #0A0A0A;
    border-right: 2px solid #0A0A0A;
    background: #fed823;
    bottom: 142px;
    left: -16px;
    transform: rotateZ(-7deg);
    z-index: 4;
}
@keyframes tailMove {
    0% {transform: rotateZ(0deg)}
    50% {transform: rotateZ(15deg)}
    100% {transform: rotateZ(0deg)}
}
#demo2 .container .pikBody .pikHead .lightLeft {
    display: block;
    position: absolute;
    width: 140px;
    left: -130px;
    top: 70px;
    transform: rotateZ(150deg);
    z-index: 10;
}
#demo2 .container .pikBody .pikHead .lightRight {
    display: block;
    position: absolute;
    right: -100px;
    top: 85px;
    transform: rotateZ(-14deg);
    z-index: 10;
}
`;
exports.default = string;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"3rHaG"}],"3rHaG":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["1Ypau","30Yv7"], "30Yv7", "parcelRequire427e")

//# sourceMappingURL=index.bd78eeec.js.map
