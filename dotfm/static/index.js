// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4WupR":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "346096685fffe125";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5lBMl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stylesCss = require("./styles.css");
var _codeCss = require("./code.css");
var _htmxOrg = require("htmx.org");
var _headSupport = require("htmx.org/dist/ext/head-support");
var _giscus = require("giscus");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
// import mermaidAPI from 'mermaid';
window.htmx = require("htmx.org");
// mermaidAPI.initialize({'theme': 'dark', startOnLoad: true});
window.Alpine = (0, _alpinejsDefault.default);
(0, _alpinejsDefault.default).start();

},{"./styles.css":"4crI5","./code.css":"fqWGW","htmx.org":"kwetm","giscus":"bjhVj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","alpinejs":"69hXP","htmx.org/dist/ext/head-support":"eWisj"}],"4crI5":[function() {},{}],"fqWGW":[function() {},{}],"kwetm":[function(require,module,exports) {
(function(e, t) {
    if (typeof define === "function" && define.amd) define([], t);
    else e.htmx = e.htmx || t();
})(typeof self !== "undefined" ? self : this, function() {
    return function() {
        "use strict";
        var W = {
            onLoad: t,
            process: mt,
            on: X,
            off: F,
            trigger: Q,
            ajax: or,
            find: R,
            findAll: O,
            closest: N,
            values: function(e, t) {
                var r = jt(e, t || "post");
                return r.values;
            },
            remove: q,
            addClass: L,
            removeClass: T,
            toggleClass: H,
            takeClass: A,
            defineExtension: dr,
            removeExtension: vr,
            logAll: C,
            logger: null,
            config: {
                historyEnabled: true,
                historyCacheSize: 10,
                refreshOnHistoryMiss: false,
                defaultSwapStyle: "innerHTML",
                defaultSwapDelay: 0,
                defaultSettleDelay: 20,
                includeIndicatorStyles: true,
                indicatorClass: "htmx-indicator",
                requestClass: "htmx-request",
                addedClass: "htmx-added",
                settlingClass: "htmx-settling",
                swappingClass: "htmx-swapping",
                allowEval: true,
                inlineScriptNonce: "",
                attributesToSettle: [
                    "class",
                    "style",
                    "width",
                    "height"
                ],
                withCredentials: false,
                timeout: 0,
                wsReconnectDelay: "full-jitter",
                disableSelector: "[hx-disable], [data-hx-disable]",
                useTemplateFragments: false,
                scrollBehavior: "smooth",
                defaultFocusScroll: false
            },
            parseInterval: v,
            _: e,
            createEventSource: function(e) {
                return new EventSource(e, {
                    withCredentials: true
                });
            },
            createWebSocket: function(e) {
                return new WebSocket(e, []);
            },
            version: "1.8.4"
        };
        var r = {
            addTriggerHandler: ft,
            bodyContains: te,
            canAccessLocalStorage: E,
            filterValues: zt,
            hasAttribute: o,
            getAttributeValue: G,
            getClosestMatch: h,
            getExpressionVars: rr,
            getHeaders: _t,
            getInputValues: jt,
            getInternalData: Z,
            getSwapSpecification: Gt,
            getTriggerSpecs: Xe,
            getTarget: oe,
            makeFragment: g,
            mergeObjects: re,
            makeSettleInfo: Zt,
            oobSwap: _,
            selectAndSwap: Oe,
            settleImmediately: At,
            shouldCancel: Ve,
            triggerEvent: Q,
            triggerErrorEvent: Y,
            withExtensions: wt
        };
        var n = [
            "get",
            "post",
            "put",
            "delete",
            "patch"
        ];
        var i = n.map(function(e) {
            return "[hx-" + e + "], [data-hx-" + e + "]";
        }).join(", ");
        function v(e) {
            if (e == undefined) return undefined;
            if (e.slice(-2) == "ms") return parseFloat(e.slice(0, -2)) || undefined;
            if (e.slice(-1) == "s") return parseFloat(e.slice(0, -1)) * 1e3 || undefined;
            if (e.slice(-1) == "m") return parseFloat(e.slice(0, -1)) * 60000 || undefined;
            return parseFloat(e) || undefined;
        }
        function f(e, t) {
            return e.getAttribute && e.getAttribute(t);
        }
        function o(e, t) {
            return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t));
        }
        function G(e, t) {
            return f(e, t) || f(e, "data-" + t);
        }
        function u(e) {
            return e.parentElement;
        }
        function J() {
            return document;
        }
        function h(e, t) {
            while(e && !t(e))e = u(e);
            return e ? e : null;
        }
        function a(e, t, r) {
            var n = G(t, r);
            var i = G(t, "hx-disinherit");
            if (e !== t && i && (i === "*" || i.split(" ").indexOf(r) >= 0)) return "unset";
            else return n;
        }
        function $(t, r) {
            var n = null;
            h(t, function(e) {
                return n = a(t, e, r);
            });
            if (n !== "unset") return n;
        }
        function d(e, t) {
            var r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
            return r && r.call(e, t);
        }
        function s(e) {
            var t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var r = t.exec(e);
            if (r) return r[1].toLowerCase();
            else return "";
        }
        function l(e, t) {
            var r = new DOMParser;
            var n = r.parseFromString(e, "text/html");
            var i = n.body;
            while(t > 0){
                t--;
                i = i.firstChild;
            }
            if (i == null) i = J().createDocumentFragment();
            return i;
        }
        function g(e) {
            if (W.config.useTemplateFragments) {
                var t = l("<body><template>" + e + "</template></body>", 0);
                return t.querySelector("template").content;
            } else {
                var r = s(e);
                switch(r){
                    case "thead":
                    case "tbody":
                    case "tfoot":
                    case "colgroup":
                    case "caption":
                        return l("<table>" + e + "</table>", 1);
                    case "col":
                        return l("<table><colgroup>" + e + "</colgroup></table>", 2);
                    case "tr":
                        return l("<table><tbody>" + e + "</tbody></table>", 2);
                    case "td":
                    case "th":
                        return l("<table><tbody><tr>" + e + "</tr></tbody></table>", 3);
                    case "script":
                        return l("<div>" + e + "</div>", 1);
                    default:
                        return l(e, 0);
                }
            }
        }
        function ee(e) {
            if (e) e();
        }
        function p(e, t) {
            return Object.prototype.toString.call(e) === "[object " + t + "]";
        }
        function m(e) {
            return p(e, "Function");
        }
        function x(e) {
            return p(e, "Object");
        }
        function Z(e) {
            var t = "htmx-internal-data";
            var r = e[t];
            if (!r) r = e[t] = {};
            return r;
        }
        function y(e) {
            var t = [];
            if (e) for(var r = 0; r < e.length; r++)t.push(e[r]);
            return t;
        }
        function K(e, t) {
            if (e) for(var r = 0; r < e.length; r++)t(e[r]);
        }
        function b(e) {
            var t = e.getBoundingClientRect();
            var r = t.top;
            var n = t.bottom;
            return r < window.innerHeight && n >= 0;
        }
        function te(e) {
            if (e.getRootNode && e.getRootNode() instanceof ShadowRoot) return J().body.contains(e.getRootNode().host);
            else return J().body.contains(e);
        }
        function w(e) {
            return e.trim().split(/\s+/);
        }
        function re(e, t) {
            for(var r in t)if (t.hasOwnProperty(r)) e[r] = t[r];
            return e;
        }
        function S(e) {
            try {
                return JSON.parse(e);
            } catch (e1) {
                St(e1);
                return null;
            }
        }
        function E() {
            var e = "htmx:localStorageTest";
            try {
                localStorage.setItem(e, e);
                localStorage.removeItem(e);
                return true;
            } catch (e1) {
                return false;
            }
        }
        function e(e) {
            return Qt(J().body, function() {
                return eval(e);
            });
        }
        function t(t) {
            var e = W.on("htmx:load", function(e) {
                t(e.detail.elt);
            });
            return e;
        }
        function C() {
            W.logger = function(e, t, r) {
                if (console) console.log(t, e, r);
            };
        }
        function R(e, t) {
            if (t) return e.querySelector(t);
            else return R(J(), e);
        }
        function O(e, t) {
            if (t) return e.querySelectorAll(t);
            else return O(J(), e);
        }
        function q(e, t) {
            e = D(e);
            if (t) setTimeout(function() {
                q(e);
            }, t);
            else e.parentElement.removeChild(e);
        }
        function L(e, t, r) {
            e = D(e);
            if (r) setTimeout(function() {
                L(e, t);
            }, r);
            else e.classList && e.classList.add(t);
        }
        function T(e, t, r) {
            e = D(e);
            if (r) setTimeout(function() {
                T(e, t);
            }, r);
            else if (e.classList) {
                e.classList.remove(t);
                if (e.classList.length === 0) e.removeAttribute("class");
            }
        }
        function H(e, t) {
            e = D(e);
            e.classList.toggle(t);
        }
        function A(e, t) {
            e = D(e);
            K(e.parentElement.children, function(e) {
                T(e, t);
            });
            L(e, t);
        }
        function N(e, t) {
            e = D(e);
            if (e.closest) return e.closest(t);
            else do {
                if (e == null || d(e, t)) return e;
            }while (e = e && u(e));
        }
        function I(e, t) {
            if (t.indexOf("closest ") === 0) return [
                N(e, t.substr(8))
            ];
            else if (t.indexOf("find ") === 0) return [
                R(e, t.substr(5))
            ];
            else if (t.indexOf("next ") === 0) return [
                k(e, t.substr(5))
            ];
            else if (t.indexOf("previous ") === 0) return [
                M(e, t.substr(9))
            ];
            else if (t === "document") return [
                document
            ];
            else if (t === "window") return [
                window
            ];
            else return J().querySelectorAll(t);
        }
        var k = function(e, t) {
            var r = J().querySelectorAll(t);
            for(var n = 0; n < r.length; n++){
                var i = r[n];
                if (i.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_PRECEDING) return i;
            }
        };
        var M = function(e, t) {
            var r = J().querySelectorAll(t);
            for(var n = r.length - 1; n >= 0; n--){
                var i = r[n];
                if (i.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING) return i;
            }
        };
        function ne(e, t) {
            if (t) return I(e, t)[0];
            else return I(J().body, e)[0];
        }
        function D(e) {
            if (p(e, "String")) return R(e);
            else return e;
        }
        function P(e, t, r) {
            if (m(t)) return {
                target: J().body,
                event: e,
                listener: t
            };
            else return {
                target: D(e),
                event: t,
                listener: r
            };
        }
        function X(t, r, n) {
            pr(function() {
                var e = P(t, r, n);
                e.target.addEventListener(e.event, e.listener);
            });
            var e = m(r);
            return e ? r : n;
        }
        function F(t, r, n) {
            pr(function() {
                var e = P(t, r, n);
                e.target.removeEventListener(e.event, e.listener);
            });
            return m(r) ? r : n;
        }
        var ie = J().createElement("output");
        function j(e, t) {
            var r = $(e, t);
            if (r) {
                if (r === "this") return [
                    ae(e, t)
                ];
                else {
                    var n = I(e, r);
                    if (n.length === 0) {
                        St('The selector "' + r + '" on ' + t + " returned no matches!");
                        return [
                            ie
                        ];
                    } else return n;
                }
            }
        }
        function ae(e, t) {
            return h(e, function(e) {
                return G(e, t) != null;
            });
        }
        function oe(e) {
            var t = $(e, "hx-target");
            if (t) {
                if (t === "this") return ae(e, "hx-target");
                else return ne(e, t);
            } else {
                var r = Z(e);
                if (r.boosted) return J().body;
                else return e;
            }
        }
        function B(e) {
            var t = W.config.attributesToSettle;
            for(var r = 0; r < t.length; r++){
                if (e === t[r]) return true;
            }
            return false;
        }
        function U(t, r) {
            K(t.attributes, function(e) {
                if (!r.hasAttribute(e.name) && B(e.name)) t.removeAttribute(e.name);
            });
            K(r.attributes, function(e) {
                if (B(e.name)) t.setAttribute(e.name, e.value);
            });
        }
        function V(e, t) {
            var r = gr(t);
            for(var n = 0; n < r.length; n++){
                var i = r[n];
                try {
                    if (i.isInlineSwap(e)) return true;
                } catch (e1) {
                    St(e1);
                }
            }
            return e === "outerHTML";
        }
        function _(e, i, a) {
            var t = "#" + i.id;
            var o = "outerHTML";
            if (e === "true") ;
            else if (e.indexOf(":") > 0) {
                o = e.substr(0, e.indexOf(":"));
                t = e.substr(e.indexOf(":") + 1, e.length);
            } else o = e;
            var r = J().querySelectorAll(t);
            if (r) {
                K(r, function(e) {
                    var t;
                    var r = i.cloneNode(true);
                    t = J().createDocumentFragment();
                    t.appendChild(r);
                    if (!V(o, e)) t = r;
                    var n = {
                        shouldSwap: true,
                        target: e,
                        fragment: t
                    };
                    if (!Q(e, "htmx:oobBeforeSwap", n)) return;
                    e = n.target;
                    if (n["shouldSwap"]) Ce(o, e, e, t, a);
                    K(a.elts, function(e) {
                        Q(e, "htmx:oobAfterSwap", n);
                    });
                });
                i.parentNode.removeChild(i);
            } else {
                i.parentNode.removeChild(i);
                Y(J().body, "htmx:oobErrorNoTarget", {
                    content: i
                });
            }
            return e;
        }
        function z(e, t, r) {
            var n = $(e, "hx-select-oob");
            if (n) {
                var i = n.split(",");
                for(let e1 = 0; e1 < i.length; e1++){
                    var a = i[e1].split(":", 2);
                    var o = a[0];
                    if (o.indexOf("#") === 0) o = o.substring(1);
                    var s = a[1] || "true";
                    var l = t.querySelector("#" + o);
                    if (l) _(s, l, r);
                }
            }
            K(O(t, "[hx-swap-oob], [data-hx-swap-oob]"), function(e) {
                var t = G(e, "hx-swap-oob");
                if (t != null) _(t, e, r);
            });
        }
        function se(e) {
            K(O(e, "[hx-preserve], [data-hx-preserve]"), function(e) {
                var t = G(e, "id");
                var r = J().getElementById(t);
                if (r != null) e.parentNode.replaceChild(r, e);
            });
        }
        function le(n, e, i) {
            K(e.querySelectorAll("[id]"), function(e) {
                if (e.id && e.id.length > 0) {
                    var t = n.querySelector(e.tagName + "[id='" + e.id + "']");
                    if (t && t !== n) {
                        var r = e.cloneNode();
                        U(e, t);
                        i.tasks.push(function() {
                            U(e, r);
                        });
                    }
                }
            });
        }
        function ue(e) {
            return function() {
                T(e, W.config.addedClass);
                mt(e);
                ht(e);
                fe(e);
                Q(e, "htmx:load");
            };
        }
        function fe(e) {
            var t = "[autofocus]";
            var r = d(e, t) ? e : e.querySelector(t);
            if (r != null) r.focus();
        }
        function ce(e, t, r, n) {
            le(e, r, n);
            while(r.childNodes.length > 0){
                var i = r.firstChild;
                L(i, W.config.addedClass);
                e.insertBefore(i, t);
                if (i.nodeType !== Node.TEXT_NODE && i.nodeType !== Node.COMMENT_NODE) n.tasks.push(ue(i));
            }
        }
        function he(e, t) {
            var r = 0;
            while(r < e.length)t = (t << 5) - t + e.charCodeAt(r++) | 0;
            return t;
        }
        function de(e) {
            var t = 0;
            for(var r = 0; r < e.attributes.length; r++){
                var n = e.attributes[r];
                if (n.value) {
                    t = he(n.name, t);
                    t = he(n.value, t);
                }
            }
            return t;
        }
        function ve(e) {
            var t = Z(e);
            if (t.webSocket) t.webSocket.close();
            if (t.sseEventSource) t.sseEventSource.close();
            if (t.listenerInfos) K(t.listenerInfos, function(e) {
                if (e.on) e.on.removeEventListener(e.trigger, e.listener);
            });
        }
        function ge(e) {
            Q(e, "htmx:beforeCleanupElement");
            ve(e);
            if (e.children) K(e.children, function(e) {
                ge(e);
            });
        }
        function pe(e, t, r) {
            if (e.tagName === "BODY") return Se(e, t, r);
            else {
                var n;
                var i = e.previousSibling;
                ce(u(e), e, t, r);
                if (i == null) n = u(e).firstChild;
                else n = i.nextSibling;
                Z(e).replacedWith = n;
                r.elts = [];
                while(n && n !== e){
                    if (n.nodeType === Node.ELEMENT_NODE) r.elts.push(n);
                    n = n.nextElementSibling;
                }
                ge(e);
                u(e).removeChild(e);
            }
        }
        function me(e, t, r) {
            return ce(e, e.firstChild, t, r);
        }
        function xe(e, t, r) {
            return ce(u(e), e, t, r);
        }
        function ye(e, t, r) {
            return ce(e, null, t, r);
        }
        function be(e, t, r) {
            return ce(u(e), e.nextSibling, t, r);
        }
        function we(e, t, r) {
            ge(e);
            return u(e).removeChild(e);
        }
        function Se(e, t, r) {
            var n = e.firstChild;
            ce(e, n, t, r);
            if (n) {
                while(n.nextSibling){
                    ge(n.nextSibling);
                    e.removeChild(n.nextSibling);
                }
                ge(n);
                e.removeChild(n);
            }
        }
        function Ee(e, t) {
            var r = $(e, "hx-select");
            if (r) {
                var n = J().createDocumentFragment();
                K(t.querySelectorAll(r), function(e) {
                    n.appendChild(e);
                });
                t = n;
            }
            return t;
        }
        function Ce(e, t, r, n, i) {
            switch(e){
                case "none":
                    return;
                case "outerHTML":
                    pe(r, n, i);
                    return;
                case "afterbegin":
                    me(r, n, i);
                    return;
                case "beforebegin":
                    xe(r, n, i);
                    return;
                case "beforeend":
                    ye(r, n, i);
                    return;
                case "afterend":
                    be(r, n, i);
                    return;
                case "delete":
                    we(r, n, i);
                    return;
                default:
                    var a = gr(t);
                    for(var o = 0; o < a.length; o++){
                        var f = a[o];
                        try {
                            var s = f.handleSwap(e, r, n, i);
                            if (s) {
                                if (typeof s.length !== "undefined") for(var l = 0; l < s.length; l++){
                                    var u = s[l];
                                    if (u.nodeType !== Node.TEXT_NODE && u.nodeType !== Node.COMMENT_NODE) i.tasks.push(ue(u));
                                }
                                return;
                            }
                        } catch (e1) {
                            St(e1);
                        }
                    }
                    if (e === "innerHTML") Se(r, n, i);
                    else Ce(W.config.defaultSwapStyle, t, r, n, i);
            }
        }
        function Re(e) {
            if (e.indexOf("<title") > -1) {
                var t = e.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
                var r = t.match(/<title(\s[^>]*>|>)([\s\S]*?)<\/title>/im);
                if (r) return r[2];
            }
        }
        function Oe(e, t, r, n, i) {
            i.title = Re(n);
            var a = g(n);
            if (a) {
                z(r, a, i);
                a = Ee(r, a);
                se(a);
                return Ce(e, r, t, a, i);
            }
        }
        function qe(e, t, r) {
            var n = e.getResponseHeader(t);
            if (n.indexOf("{") === 0) {
                var i = S(n);
                for(var a in i)if (i.hasOwnProperty(a)) {
                    var o = i[a];
                    if (!x(o)) o = {
                        value: o
                    };
                    Q(r, a, o);
                }
            } else Q(r, n, []);
        }
        var Le = /\s/;
        var Te = /[\s,]/;
        var He = /[_$a-zA-Z]/;
        var Ae = /[_$a-zA-Z0-9]/;
        var Ne = [
            '"',
            "'",
            "/"
        ];
        var Ie = /[^\s]/;
        function ke(e) {
            var t = [];
            var r = 0;
            while(r < e.length){
                if (He.exec(e.charAt(r))) {
                    var n = r;
                    while(Ae.exec(e.charAt(r + 1)))r++;
                    t.push(e.substr(n, r - n + 1));
                } else if (Ne.indexOf(e.charAt(r)) !== -1) {
                    var i = e.charAt(r);
                    var n = r;
                    r++;
                    while(r < e.length && e.charAt(r) !== i){
                        if (e.charAt(r) === "\\") r++;
                        r++;
                    }
                    t.push(e.substr(n, r - n + 1));
                } else {
                    var a = e.charAt(r);
                    t.push(a);
                }
                r++;
            }
            return t;
        }
        function Me(e, t, r) {
            return He.exec(e.charAt(0)) && e !== "true" && e !== "false" && e !== "this" && e !== r && t !== ".";
        }
        function De(e, t, r) {
            if (t[0] === "[") {
                t.shift();
                var n = 1;
                var i = " return (function(" + r + "){ return (";
                var a = null;
                while(t.length > 0){
                    var o = t[0];
                    if (o === "]") {
                        n--;
                        if (n === 0) {
                            if (a === null) i = i + "true";
                            t.shift();
                            i += ")})";
                            try {
                                var s = Qt(e, function() {
                                    return Function(i)();
                                }, function() {
                                    return true;
                                });
                                s.source = i;
                                return s;
                            } catch (e1) {
                                Y(J().body, "htmx:syntax:error", {
                                    error: e1,
                                    source: i
                                });
                                return null;
                            }
                        }
                    } else if (o === "[") n++;
                    if (Me(o, a, r)) i += "((" + r + "." + o + ") ? (" + r + "." + o + ") : (window." + o + "))";
                    else i = i + o;
                    a = t.shift();
                }
            }
        }
        function c(e, t) {
            var r = "";
            while(e.length > 0 && !e[0].match(t))r += e.shift();
            return r;
        }
        var Pe = "input, textarea, select";
        function Xe(e) {
            var t = G(e, "hx-trigger");
            var r = [];
            if (t) {
                var n = ke(t);
                do {
                    c(n, Ie);
                    var f = n.length;
                    var i = c(n, /[,\[\s]/);
                    if (i !== "") {
                        if (i === "every") {
                            var a = {
                                trigger: "every"
                            };
                            c(n, Ie);
                            a.pollInterval = v(c(n, /[,\[\s]/));
                            c(n, Ie);
                            var o = De(e, n, "event");
                            if (o) a.eventFilter = o;
                            r.push(a);
                        } else if (i.indexOf("sse:") === 0) r.push({
                            trigger: "sse",
                            sseEvent: i.substr(4)
                        });
                        else {
                            var s = {
                                trigger: i
                            };
                            var o = De(e, n, "event");
                            if (o) s.eventFilter = o;
                            while(n.length > 0 && n[0] !== ","){
                                c(n, Ie);
                                var l = n.shift();
                                if (l === "changed") s.changed = true;
                                else if (l === "once") s.once = true;
                                else if (l === "consume") s.consume = true;
                                else if (l === "delay" && n[0] === ":") {
                                    n.shift();
                                    s.delay = v(c(n, Te));
                                } else if (l === "from" && n[0] === ":") {
                                    n.shift();
                                    var u = c(n, Te);
                                    if (u === "closest" || u === "find" || u === "next" || u === "previous") {
                                        n.shift();
                                        u += " " + c(n, Te);
                                    }
                                    s.from = u;
                                } else if (l === "target" && n[0] === ":") {
                                    n.shift();
                                    s.target = c(n, Te);
                                } else if (l === "throttle" && n[0] === ":") {
                                    n.shift();
                                    s.throttle = v(c(n, Te));
                                } else if (l === "queue" && n[0] === ":") {
                                    n.shift();
                                    s.queue = c(n, Te);
                                } else if ((l === "root" || l === "threshold") && n[0] === ":") {
                                    n.shift();
                                    s[l] = c(n, Te);
                                } else Y(e, "htmx:syntax:error", {
                                    token: n.shift()
                                });
                            }
                            r.push(s);
                        }
                    }
                    if (n.length === f) Y(e, "htmx:syntax:error", {
                        token: n.shift()
                    });
                    c(n, Ie);
                }while (n[0] === "," && n.shift());
            }
            if (r.length > 0) return r;
            else if (d(e, "form")) return [
                {
                    trigger: "submit"
                }
            ];
            else if (d(e, 'input[type="button"]')) return [
                {
                    trigger: "click"
                }
            ];
            else if (d(e, Pe)) return [
                {
                    trigger: "change"
                }
            ];
            else return [
                {
                    trigger: "click"
                }
            ];
        }
        function Fe(e) {
            Z(e).cancelled = true;
        }
        function je(e, t, r) {
            var n = Z(e);
            n.timeout = setTimeout(function() {
                if (te(e) && n.cancelled !== true) {
                    if (!ze(r, yt("hx:poll:trigger", {
                        triggerSpec: r,
                        target: e
                    }))) t(e);
                    je(e, t, r);
                }
            }, r.pollInterval);
        }
        function Be(e) {
            return location.hostname === e.hostname && f(e, "href") && f(e, "href").indexOf("#") !== 0;
        }
        function Ue(t, r, e) {
            if (t.tagName === "A" && Be(t) && (t.target === "" || t.target === "_self") || t.tagName === "FORM") {
                r.boosted = true;
                var n, i;
                if (t.tagName === "A") {
                    n = "get";
                    i = f(t, "href");
                } else {
                    var a = f(t, "method");
                    n = a ? a.toLowerCase() : "get";
                    n;
                    i = f(t, "action");
                }
                e.forEach(function(e) {
                    We(t, function(e) {
                        lr(n, i, t, e);
                    }, r, e, true);
                });
            }
        }
        function Ve(e, t) {
            if (e.type === "submit" || e.type === "click") {
                if (t.tagName === "FORM") return true;
                if (d(t, 'input[type="submit"], button') && N(t, "form") !== null) return true;
                if (t.tagName === "A" && t.href && (t.getAttribute("href") === "#" || t.getAttribute("href").indexOf("#") !== 0)) return true;
            }
            return false;
        }
        function _e(e, t) {
            return Z(e).boosted && e.tagName === "A" && t.type === "click" && (t.ctrlKey || t.metaKey);
        }
        function ze(e, t) {
            var r = e.eventFilter;
            if (r) try {
                return r(t) !== true;
            } catch (e1) {
                Y(J().body, "htmx:eventFilter:error", {
                    error: e1,
                    source: r.source
                });
                return true;
            }
            return false;
        }
        function We(a, o, e, s, l) {
            var t;
            if (s.from) t = I(a, s.from);
            else t = [
                a
            ];
            K(t, function(n) {
                var i = function(e) {
                    if (!te(a)) {
                        n.removeEventListener(s.trigger, i);
                        return;
                    }
                    if (_e(a, e)) return;
                    if (l || Ve(e, a)) e.preventDefault();
                    if (ze(s, e)) return;
                    var t = Z(e);
                    t.triggerSpec = s;
                    if (t.handledFor == null) t.handledFor = [];
                    var r = Z(a);
                    if (t.handledFor.indexOf(a) < 0) {
                        t.handledFor.push(a);
                        if (s.consume) e.stopPropagation();
                        if (s.target && e.target) {
                            if (!d(e.target, s.target)) return;
                        }
                        if (s.once) {
                            if (r.triggeredOnce) return;
                            else r.triggeredOnce = true;
                        }
                        if (s.changed) {
                            if (r.lastValue === a.value) return;
                            else r.lastValue = a.value;
                        }
                        if (r.delayed) clearTimeout(r.delayed);
                        if (r.throttle) return;
                        if (s.throttle) {
                            if (!r.throttle) {
                                o(a, e);
                                r.throttle = setTimeout(function() {
                                    r.throttle = null;
                                }, s.throttle);
                            }
                        } else if (s.delay) r.delayed = setTimeout(function() {
                            o(a, e);
                        }, s.delay);
                        else o(a, e);
                    }
                };
                if (e.listenerInfos == null) e.listenerInfos = [];
                e.listenerInfos.push({
                    trigger: s.trigger,
                    listener: i,
                    on: n
                });
                n.addEventListener(s.trigger, i);
            });
        }
        var Ge = false;
        var Je = null;
        function $e() {
            if (!Je) {
                Je = function() {
                    Ge = true;
                };
                window.addEventListener("scroll", Je);
                setInterval(function() {
                    if (Ge) {
                        Ge = false;
                        K(J().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e) {
                            Ze(e);
                        });
                    }
                }, 200);
            }
        }
        function Ze(t) {
            if (!o(t, "data-hx-revealed") && b(t)) {
                t.setAttribute("data-hx-revealed", "true");
                var e = Z(t);
                if (e.initHash) Q(t, "revealed");
                else t.addEventListener("htmx:afterProcessNode", function(e) {
                    Q(t, "revealed");
                }, {
                    once: true
                });
            }
        }
        function Ke(e, t, r) {
            var n = w(r);
            for(var i = 0; i < n.length; i++){
                var a = n[i].split(/:(.+)/);
                if (a[0] === "connect") Ye(e, a[1], 0);
                if (a[0] === "send") et(e);
            }
        }
        function Ye(s, r, n) {
            if (!te(s)) return;
            if (r.indexOf("/") == 0) {
                var e = location.hostname + (location.port ? ":" + location.port : "");
                if (location.protocol == "https:") r = "wss://" + e + r;
                else if (location.protocol == "http:") r = "ws://" + e + r;
            }
            var t = W.createWebSocket(r);
            t.onerror = function(e) {
                Y(s, "htmx:wsError", {
                    error: e,
                    socket: t
                });
                Qe(s);
            };
            t.onclose = function(e) {
                if ([
                    1006,
                    1012,
                    1013
                ].indexOf(e.code) >= 0) {
                    var t = tt(n);
                    setTimeout(function() {
                        Ye(s, r, n + 1);
                    }, t);
                }
            };
            t.onopen = function(e) {
                n = 0;
            };
            Z(s).webSocket = t;
            t.addEventListener("message", function(e) {
                if (Qe(s)) return;
                var t = e.data;
                wt(s, function(e) {
                    t = e.transformResponse(t, null, s);
                });
                var r = Zt(s);
                var n = g(t);
                var i = y(n.children);
                for(var a = 0; a < i.length; a++){
                    var o = i[a];
                    _(G(o, "hx-swap-oob") || "true", o, r);
                }
                At(r.tasks);
            });
        }
        function Qe(e) {
            if (!te(e)) {
                Z(e).webSocket.close();
                return true;
            }
        }
        function et(u) {
            var f = h(u, function(e) {
                return Z(e).webSocket != null;
            });
            if (f) u.addEventListener(Xe(u)[0].trigger, function(e) {
                var t = Z(f).webSocket;
                var r = _t(u, f);
                var n = jt(u, "post");
                var i = n.errors;
                var a = n.values;
                var o = rr(u);
                var s = re(a, o);
                var l = zt(s, u);
                l["HEADERS"] = r;
                if (i && i.length > 0) {
                    Q(u, "htmx:validation:halted", i);
                    return;
                }
                t.send(JSON.stringify(l));
                if (Ve(e, u)) e.preventDefault();
            });
            else Y(u, "htmx:noWebSocketSourceError");
        }
        function tt(e) {
            var t = W.config.wsReconnectDelay;
            if (typeof t === "function") return t(e);
            if (t === "full-jitter") {
                var r = Math.min(e, 6);
                var n = 1e3 * Math.pow(2, r);
                return n * Math.random();
            }
            St('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
        }
        function rt(e, t, r) {
            var n = w(r);
            for(var i = 0; i < n.length; i++){
                var a = n[i].split(/:(.+)/);
                if (a[0] === "connect") nt(e, a[1]);
                if (a[0] === "swap") it(e, a[1]);
            }
        }
        function nt(t, e) {
            var r = W.createEventSource(e);
            r.onerror = function(e) {
                Y(t, "htmx:sseError", {
                    error: e,
                    source: r
                });
                ot(t);
            };
            Z(t).sseEventSource = r;
        }
        function it(a, o) {
            var s = h(a, st);
            if (s) {
                var l = Z(s).sseEventSource;
                var u = function(e) {
                    if (ot(s)) {
                        l.removeEventListener(o, u);
                        return;
                    }
                    var t = e.data;
                    wt(a, function(e) {
                        t = e.transformResponse(t, null, a);
                    });
                    var r = Gt(a);
                    var n = oe(a);
                    var i = Zt(a);
                    Oe(r.swapStyle, a, n, t, i);
                    At(i.tasks);
                    Q(a, "htmx:sseMessage", e);
                };
                Z(a).sseListener = u;
                l.addEventListener(o, u);
            } else Y(a, "htmx:noSSESourceError");
        }
        function at(e, t, r) {
            var n = h(e, st);
            if (n) {
                var i = Z(n).sseEventSource;
                var a = function() {
                    if (!ot(n)) {
                        if (te(e)) t(e);
                        else i.removeEventListener(r, a);
                    }
                };
                Z(e).sseListener = a;
                i.addEventListener(r, a);
            } else Y(e, "htmx:noSSESourceError");
        }
        function ot(e) {
            if (!te(e)) {
                Z(e).sseEventSource.close();
                return true;
            }
        }
        function st(e) {
            return Z(e).sseEventSource != null;
        }
        function lt(e, t, r, n) {
            var i = function() {
                if (!r.loaded) {
                    r.loaded = true;
                    t(e);
                }
            };
            if (n) setTimeout(i, n);
            else i();
        }
        function ut(t, i, e) {
            var a = false;
            K(n, function(r) {
                if (o(t, "hx-" + r)) {
                    var n1 = G(t, "hx-" + r);
                    a = true;
                    i.path = n1;
                    i.verb = r;
                    e.forEach(function(e) {
                        ft(t, e, i, function(e, t) {
                            lr(r, n1, e, t);
                        });
                    });
                }
            });
            return a;
        }
        function ft(n, e, t, r) {
            if (e.sseEvent) at(n, r, e.sseEvent);
            else if (e.trigger === "revealed") {
                $e();
                We(n, r, t, e);
                Ze(n);
            } else if (e.trigger === "intersect") {
                var i = {};
                if (e.root) i.root = ne(n, e.root);
                if (e.threshold) i.threshold = parseFloat(e.threshold);
                var a = new IntersectionObserver(function(e) {
                    for(var t = 0; t < e.length; t++){
                        var r = e[t];
                        if (r.isIntersecting) {
                            Q(n, "intersect");
                            break;
                        }
                    }
                }, i);
                a.observe(n);
                We(n, r, t, e);
            } else if (e.trigger === "load") {
                if (!ze(e, yt("load", {
                    elt: n
                }))) lt(n, r, t, e.delay);
            } else if (e.pollInterval) {
                t.polling = true;
                je(n, r, e);
            } else We(n, r, t, e);
        }
        function ct(e) {
            if (e.type === "text/javascript" || e.type === "module" || e.type === "") {
                var t = J().createElement("script");
                K(e.attributes, function(e) {
                    t.setAttribute(e.name, e.value);
                });
                t.textContent = e.textContent;
                t.async = false;
                if (W.config.inlineScriptNonce) t.nonce = W.config.inlineScriptNonce;
                var r = e.parentElement;
                try {
                    r.insertBefore(t, e);
                } catch (e1) {
                    St(e1);
                } finally{
                    r.removeChild(e);
                }
            }
        }
        function ht(e) {
            if (d(e, "script")) ct(e);
            K(O(e, "script"), function(e) {
                ct(e);
            });
        }
        function dt() {
            return document.querySelector("[hx-boost], [data-hx-boost]");
        }
        function vt(e) {
            if (e.querySelectorAll) {
                var t = dt() ? ", a, form" : "";
                var r = e.querySelectorAll(i + t + ", [hx-sse], [data-hx-sse], [hx-ws]," + " [data-hx-ws], [hx-ext], [data-hx-ext]");
                return r;
            } else return [];
        }
        function gt(r) {
            var e = function(e) {
                if (d(e.target, "button, input[type='submit']")) {
                    var t = Z(r);
                    t.lastButtonClicked = e.target;
                }
            };
            r.addEventListener("click", e);
            r.addEventListener("focusin", e);
            r.addEventListener("focusout", function(e) {
                var t = Z(r);
                t.lastButtonClicked = null;
            });
        }
        function pt(e) {
            if (e.closest && e.closest(W.config.disableSelector)) return;
            var t = Z(e);
            if (t.initHash !== de(e)) {
                t.initHash = de(e);
                ve(e);
                Q(e, "htmx:beforeProcessNode");
                if (e.value) t.lastValue = e.value;
                var r = Xe(e);
                var n = ut(e, t, r);
                if (!n && $(e, "hx-boost") === "true") Ue(e, t, r);
                if (e.tagName === "FORM") gt(e);
                var i = G(e, "hx-sse");
                if (i) rt(e, t, i);
                var a = G(e, "hx-ws");
                if (a) Ke(e, t, a);
                Q(e, "htmx:afterProcessNode");
            }
        }
        function mt(e) {
            e = D(e);
            pt(e);
            K(vt(e), function(e) {
                pt(e);
            });
        }
        function xt(e) {
            return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function yt(e, t) {
            var r;
            if (window.CustomEvent && typeof window.CustomEvent === "function") r = new CustomEvent(e, {
                bubbles: true,
                cancelable: true,
                detail: t
            });
            else {
                r = J().createEvent("CustomEvent");
                r.initCustomEvent(e, true, true, t);
            }
            return r;
        }
        function Y(e, t, r) {
            Q(e, t, re({
                error: t
            }, r));
        }
        function bt(e) {
            return e === "htmx:afterProcessNode";
        }
        function wt(e, t) {
            K(gr(e), function(e) {
                try {
                    t(e);
                } catch (e1) {
                    St(e1);
                }
            });
        }
        function St(e) {
            if (console.error) console.error(e);
            else if (console.log) console.log("ERROR: ", e);
        }
        function Q(e, t, r) {
            e = D(e);
            if (r == null) r = {};
            r["elt"] = e;
            var n = yt(t, r);
            if (W.logger && !bt(t)) W.logger(e, t, r);
            if (r.error) {
                St(r.error);
                Q(e, "htmx:error", {
                    errorInfo: r
                });
            }
            var i = e.dispatchEvent(n);
            var a = xt(t);
            if (i && a !== t) {
                var o = yt(a, n.detail);
                i = i && e.dispatchEvent(o);
            }
            wt(e, function(e) {
                i = i && e.onEvent(t, n) !== false;
            });
            return i;
        }
        var Et = location.pathname + location.search;
        function Ct() {
            var e = J().querySelector("[hx-history-elt],[data-hx-history-elt]");
            return e || J().body;
        }
        function Rt(e, t, r, n) {
            if (!E()) return;
            var i = S(localStorage.getItem("htmx-history-cache")) || [];
            for(var a = 0; a < i.length; a++)if (i[a].url === e) {
                i.splice(a, 1);
                break;
            }
            var o = {
                url: e,
                content: t,
                title: r,
                scroll: n
            };
            Q(J().body, "htmx:historyItemCreated", {
                item: o,
                cache: i
            });
            i.push(o);
            while(i.length > W.config.historyCacheSize)i.shift();
            while(i.length > 0)try {
                localStorage.setItem("htmx-history-cache", JSON.stringify(i));
                break;
            } catch (e1) {
                Y(J().body, "htmx:historyCacheError", {
                    cause: e1,
                    cache: i
                });
                i.shift();
            }
        }
        function Ot(e) {
            if (!E()) return null;
            var t = S(localStorage.getItem("htmx-history-cache")) || [];
            for(var r = 0; r < t.length; r++){
                if (t[r].url === e) return t[r];
            }
            return null;
        }
        function qt(e) {
            var t = W.config.requestClass;
            var r = e.cloneNode(true);
            K(O(r, "." + t), function(e) {
                T(e, t);
            });
            return r.innerHTML;
        }
        function Lt() {
            var e = Ct();
            var t = Et || location.pathname + location.search;
            Q(J().body, "htmx:beforeHistorySave", {
                path: t,
                historyElt: e
            });
            if (W.config.historyEnabled) history.replaceState({
                htmx: true
            }, J().title, window.location.href);
            Rt(t, qt(e), J().title, window.scrollY);
        }
        function Tt(e) {
            if (W.config.historyEnabled) history.pushState({
                htmx: true
            }, "", e);
            Et = e;
        }
        function Ht(e) {
            if (W.config.historyEnabled) history.replaceState({
                htmx: true
            }, "", e);
            Et = e;
        }
        function At(e) {
            K(e, function(e) {
                e.call();
            });
        }
        function Nt(a) {
            var e = new XMLHttpRequest;
            var o = {
                path: a,
                xhr: e
            };
            Q(J().body, "htmx:historyCacheMiss", o);
            e.open("GET", a, true);
            e.setRequestHeader("HX-History-Restore-Request", "true");
            e.onload = function() {
                if (this.status >= 200 && this.status < 400) {
                    Q(J().body, "htmx:historyCacheMissLoad", o);
                    var e = g(this.response);
                    e = e.querySelector("[hx-history-elt],[data-hx-history-elt]") || e;
                    var t = Ct();
                    var r = Zt(t);
                    var n = Re(this.response);
                    if (n) {
                        var i = R("title");
                        if (i) i.innerHTML = n;
                        else window.document.title = n;
                    }
                    Se(t, e, r);
                    At(r.tasks);
                    Et = a;
                    Q(J().body, "htmx:historyRestore", {
                        path: a,
                        cacheMiss: true,
                        serverResponse: this.response
                    });
                } else Y(J().body, "htmx:historyCacheMissLoadError", o);
            };
            e.send();
        }
        function It(e) {
            Lt();
            e = e || location.pathname + location.search;
            var t = Ot(e);
            if (t) {
                var r = g(t.content);
                var n = Ct();
                var i = Zt(n);
                Se(n, r, i);
                At(i.tasks);
                document.title = t.title;
                window.scrollTo(0, t.scroll);
                Et = e;
                Q(J().body, "htmx:historyRestore", {
                    path: e,
                    item: t
                });
            } else if (W.config.refreshOnHistoryMiss) window.location.reload(true);
            else Nt(e);
        }
        function kt(e) {
            var t = j(e, "hx-indicator");
            if (t == null) t = [
                e
            ];
            K(t, function(e) {
                var t = Z(e);
                t.requestCount = (t.requestCount || 0) + 1;
                e.classList["add"].call(e.classList, W.config.requestClass);
            });
            return t;
        }
        function Mt(e) {
            K(e, function(e) {
                var t = Z(e);
                t.requestCount = (t.requestCount || 0) - 1;
                if (t.requestCount === 0) e.classList["remove"].call(e.classList, W.config.requestClass);
            });
        }
        function Dt(e, t) {
            for(var r = 0; r < e.length; r++){
                var n = e[r];
                if (n.isSameNode(t)) return true;
            }
            return false;
        }
        function Pt(e) {
            if (e.name === "" || e.name == null || e.disabled) return false;
            if (e.type === "button" || e.type === "submit" || e.tagName === "image" || e.tagName === "reset" || e.tagName === "file") return false;
            if (e.type === "checkbox" || e.type === "radio") return e.checked;
            return true;
        }
        function Xt(t, r, n, e, i) {
            if (e == null || Dt(t, e)) return;
            else t.push(e);
            if (Pt(e)) {
                var a = f(e, "name");
                var o = e.value;
                if (e.multiple) o = y(e.querySelectorAll("option:checked")).map(function(e) {
                    return e.value;
                });
                if (e.files) o = y(e.files);
                if (a != null && o != null) {
                    var s = r[a];
                    if (s) {
                        if (Array.isArray(s)) {
                            if (Array.isArray(o)) r[a] = s.concat(o);
                            else s.push(o);
                        } else if (Array.isArray(o)) r[a] = [
                            s
                        ].concat(o);
                        else r[a] = [
                            s,
                            o
                        ];
                    } else r[a] = o;
                }
                if (i) Ft(e, n);
            }
            if (d(e, "form")) {
                var l = e.elements;
                K(l, function(e) {
                    Xt(t, r, n, e, i);
                });
            }
        }
        function Ft(e, t) {
            if (e.willValidate) {
                Q(e, "htmx:validation:validate");
                if (!e.checkValidity()) {
                    t.push({
                        elt: e,
                        message: e.validationMessage,
                        validity: e.validity
                    });
                    Q(e, "htmx:validation:failed", {
                        message: e.validationMessage,
                        validity: e.validity
                    });
                }
            }
        }
        function jt(e, t) {
            var r = [];
            var n = {};
            var i = {};
            var a = [];
            var o = Z(e);
            var s = d(e, "form") && e.noValidate !== true || G(e, "hx-validate") === "true";
            if (o.lastButtonClicked) s = s && o.lastButtonClicked.formNoValidate !== true;
            if (t !== "get") Xt(r, i, a, N(e, "form"), s);
            Xt(r, n, a, e, s);
            if (o.lastButtonClicked) {
                var l = f(o.lastButtonClicked, "name");
                if (l) n[l] = o.lastButtonClicked.value;
            }
            var u = j(e, "hx-include");
            K(u, function(e) {
                Xt(r, n, a, e, s);
                if (!d(e, "form")) K(e.querySelectorAll(Pe), function(e) {
                    Xt(r, n, a, e, s);
                });
            });
            n = re(n, i);
            return {
                errors: a,
                values: n
            };
        }
        function Bt(e, t, r) {
            if (e !== "") e += "&";
            if (String(r) === "[object Object]") r = JSON.stringify(r);
            var n = encodeURIComponent(r);
            e += encodeURIComponent(t) + "=" + n;
            return e;
        }
        function Ut(e) {
            var t = "";
            for(var r in e)if (e.hasOwnProperty(r)) {
                var n = e[r];
                if (Array.isArray(n)) K(n, function(e) {
                    t = Bt(t, r, e);
                });
                else t = Bt(t, r, n);
            }
            return t;
        }
        function Vt(e) {
            var t = new FormData;
            for(var r in e)if (e.hasOwnProperty(r)) {
                var n = e[r];
                if (Array.isArray(n)) K(n, function(e) {
                    t.append(r, e);
                });
                else t.append(r, n);
            }
            return t;
        }
        function _t(e, t, r) {
            var n = {
                "HX-Request": "true",
                "HX-Trigger": f(e, "id"),
                "HX-Trigger-Name": f(e, "name"),
                "HX-Target": G(t, "id"),
                "HX-Current-URL": J().location.href
            };
            Yt(e, "hx-headers", false, n);
            if (r !== undefined) n["HX-Prompt"] = r;
            if (Z(e).boosted) n["HX-Boosted"] = "true";
            return n;
        }
        function zt(t, e) {
            var r = $(e, "hx-params");
            if (r) {
                if (r === "none") return {};
                else if (r === "*") return t;
                else if (r.indexOf("not ") === 0) {
                    K(r.substr(4).split(","), function(e) {
                        e = e.trim();
                        delete t[e];
                    });
                    return t;
                } else {
                    var n = {};
                    K(r.split(","), function(e) {
                        e = e.trim();
                        n[e] = t[e];
                    });
                    return n;
                }
            } else return t;
        }
        function Wt(e) {
            return f(e, "href") && f(e, "href").indexOf("#") >= 0;
        }
        function Gt(e, t) {
            var r = t ? t : $(e, "hx-swap");
            var n = {
                swapStyle: Z(e).boosted ? "innerHTML" : W.config.defaultSwapStyle,
                swapDelay: W.config.defaultSwapDelay,
                settleDelay: W.config.defaultSettleDelay
            };
            if (Z(e).boosted && !Wt(e)) n["show"] = "top";
            if (r) {
                var i = w(r);
                if (i.length > 0) {
                    n["swapStyle"] = i[0];
                    for(var a = 1; a < i.length; a++){
                        var o = i[a];
                        if (o.indexOf("swap:") === 0) n["swapDelay"] = v(o.substr(5));
                        if (o.indexOf("settle:") === 0) n["settleDelay"] = v(o.substr(7));
                        if (o.indexOf("scroll:") === 0) {
                            var s = o.substr(7);
                            var l = s.split(":");
                            var f = l.pop();
                            var u = l.length > 0 ? l.join(":") : null;
                            n["scroll"] = f;
                            n["scrollTarget"] = u;
                        }
                        if (o.indexOf("show:") === 0) {
                            var c = o.substr(5);
                            var l = c.split(":");
                            var h = l.pop();
                            var u = l.length > 0 ? l.join(":") : null;
                            n["show"] = h;
                            n["showTarget"] = u;
                        }
                        if (o.indexOf("focus-scroll:") === 0) {
                            var d = o.substr(13);
                            n["focusScroll"] = d == "true";
                        }
                    }
                }
            }
            return n;
        }
        function Jt(e) {
            return $(e, "hx-encoding") === "multipart/form-data" || d(e, "form") && f(e, "enctype") === "multipart/form-data";
        }
        function $t(t, r, n) {
            var i = null;
            wt(r, function(e) {
                if (i == null) i = e.encodeParameters(t, n, r);
            });
            if (i != null) return i;
            else {
                if (Jt(r)) return Vt(n);
                else return Ut(n);
            }
        }
        function Zt(e) {
            return {
                tasks: [],
                elts: [
                    e
                ]
            };
        }
        function Kt(e, t) {
            var r = e[0];
            var n = e[e.length - 1];
            if (t.scroll) {
                var i = null;
                if (t.scrollTarget) i = ne(r, t.scrollTarget);
                if (t.scroll === "top" && (r || i)) {
                    i = i || r;
                    i.scrollTop = 0;
                }
                if (t.scroll === "bottom" && (n || i)) {
                    i = i || n;
                    i.scrollTop = i.scrollHeight;
                }
            }
            if (t.show) {
                var i = null;
                if (t.showTarget) {
                    var a = t.showTarget;
                    if (t.showTarget === "window") a = "body";
                    i = ne(r, a);
                }
                if (t.show === "top" && (r || i)) {
                    i = i || r;
                    i.scrollIntoView({
                        block: "start",
                        behavior: W.config.scrollBehavior
                    });
                }
                if (t.show === "bottom" && (n || i)) {
                    i = i || n;
                    i.scrollIntoView({
                        block: "end",
                        behavior: W.config.scrollBehavior
                    });
                }
            }
        }
        function Yt(e, t, r, n) {
            if (n == null) n = {};
            if (e == null) return n;
            var i = G(e, t);
            if (i) {
                var a = i.trim();
                var o = r;
                if (a === "unset") return null;
                if (a.indexOf("javascript:") === 0) {
                    a = a.substr(11);
                    o = true;
                } else if (a.indexOf("js:") === 0) {
                    a = a.substr(3);
                    o = true;
                }
                if (a.indexOf("{") !== 0) a = "{" + a + "}";
                var s;
                if (o) s = Qt(e, function() {
                    return Function("return (" + a + ")")();
                }, {});
                else s = S(a);
                for(var l in s){
                    if (s.hasOwnProperty(l)) {
                        if (n[l] == null) n[l] = s[l];
                    }
                }
            }
            return Yt(u(e), t, r, n);
        }
        function Qt(e, t, r) {
            if (W.config.allowEval) return t();
            else {
                Y(e, "htmx:evalDisallowedError");
                return r;
            }
        }
        function er(e, t) {
            return Yt(e, "hx-vars", true, t);
        }
        function tr(e, t) {
            return Yt(e, "hx-vals", false, t);
        }
        function rr(e) {
            return re(er(e), tr(e));
        }
        function nr(t, r, n) {
            if (n !== null) try {
                t.setRequestHeader(r, n);
            } catch (e) {
                t.setRequestHeader(r, encodeURIComponent(n));
                t.setRequestHeader(r + "-URI-AutoEncoded", "true");
            }
        }
        function ir(t) {
            if (t.responseURL && typeof URL !== "undefined") try {
                var e = new URL(t.responseURL);
                return e.pathname + e.search;
            } catch (e1) {
                Y(J().body, "htmx:badResponseUrl", {
                    url: t.responseURL
                });
            }
        }
        function ar(e, t) {
            return e.getAllResponseHeaders().match(t);
        }
        function or(e, t, r) {
            e = e.toLowerCase();
            if (r) {
                if (r instanceof Element || p(r, "String")) return lr(e, t, null, null, {
                    targetOverride: D(r),
                    returnPromise: true
                });
                else return lr(e, t, D(r.source), r.event, {
                    handler: r.handler,
                    headers: r.headers,
                    values: r.values,
                    targetOverride: D(r.target),
                    swapOverride: r.swap,
                    returnPromise: true
                });
            } else return lr(e, t, null, null, {
                returnPromise: true
            });
        }
        function sr(e) {
            var t = [];
            while(e){
                t.push(e);
                e = e.parentElement;
            }
            return t;
        }
        function lr(e, t, n, r, i, f) {
            var c = null;
            var h = null;
            i = i != null ? i : {};
            if (i.returnPromise && typeof Promise !== "undefined") var d = new Promise(function(e, t) {
                c = e;
                h = t;
            });
            if (n == null) n = J().body;
            var v = i.handler || fr;
            if (!te(n)) return;
            var g = i.targetOverride || oe(n);
            if (g == null || g == ie) {
                Y(n, "htmx:targetError", {
                    target: G(n, "hx-target")
                });
                return;
            }
            if (!f) {
                var p = function() {
                    return lr(e, t, n, r, i, true);
                };
                var m = {
                    target: g,
                    elt: n,
                    path: t,
                    verb: e,
                    triggeringEvent: r,
                    etc: i,
                    issueRequest: p
                };
                if (Q(n, "htmx:confirm", m) === false) return;
            }
            var x = n;
            var a = Z(n);
            var y = $(n, "hx-sync");
            var b = null;
            var w = false;
            if (y) {
                var S = y.split(":");
                var E = S[0].trim();
                if (E === "this") x = ae(n, "hx-sync");
                else x = ne(n, E);
                y = (S[1] || "drop").trim();
                a = Z(x);
                if (y === "drop" && a.xhr && a.abortable !== true) return;
                else if (y === "abort") {
                    if (a.xhr) return;
                    else w = true;
                } else if (y === "replace") Q(x, "htmx:abort");
                else if (y.indexOf("queue") === 0) {
                    var C = y.split(" ");
                    b = (C[1] || "last").trim();
                }
            }
            if (a.xhr) {
                if (a.abortable) Q(x, "htmx:abort");
                else {
                    if (b == null) {
                        if (r) {
                            var R = Z(r);
                            if (R && R.triggerSpec && R.triggerSpec.queue) b = R.triggerSpec.queue;
                        }
                        if (b == null) b = "last";
                    }
                    if (a.queuedRequests == null) a.queuedRequests = [];
                    if (b === "first" && a.queuedRequests.length === 0) a.queuedRequests.push(function() {
                        lr(e, t, n, r, i);
                    });
                    else if (b === "all") a.queuedRequests.push(function() {
                        lr(e, t, n, r, i);
                    });
                    else if (b === "last") {
                        a.queuedRequests = [];
                        a.queuedRequests.push(function() {
                            lr(e, t, n, r, i);
                        });
                    }
                    return;
                }
            }
            var o = new XMLHttpRequest;
            a.xhr = o;
            a.abortable = w;
            var s = function() {
                a.xhr = null;
                a.abortable = false;
                if (a.queuedRequests != null && a.queuedRequests.length > 0) {
                    var e = a.queuedRequests.shift();
                    e();
                }
            };
            var O = $(n, "hx-prompt");
            if (O) {
                var q = prompt(O);
                if (q === null || !Q(n, "htmx:prompt", {
                    prompt: q,
                    target: g
                })) {
                    ee(c);
                    s();
                    return d;
                }
            }
            var L = $(n, "hx-confirm");
            if (L) {
                if (!confirm(L)) {
                    ee(c);
                    s();
                    return d;
                }
            }
            var T = _t(n, g, q);
            if (i.headers) T = re(T, i.headers);
            var H = jt(n, e);
            var A = H.errors;
            var N = H.values;
            if (i.values) N = re(N, i.values);
            var I = rr(n);
            var k = re(N, I);
            var M = zt(k, n);
            if (e !== "get" && !Jt(n)) T["Content-Type"] = "application/x-www-form-urlencoded";
            if (t == null || t === "") t = J().location.href;
            var D = Yt(n, "hx-request");
            var P = Z(n).boosted;
            var l = {
                boosted: P,
                parameters: M,
                unfilteredParameters: k,
                headers: T,
                target: g,
                verb: e,
                errors: A,
                withCredentials: i.credentials || D.credentials || W.config.withCredentials,
                timeout: i.timeout || D.timeout || W.config.timeout,
                path: t,
                triggeringEvent: r
            };
            if (!Q(n, "htmx:configRequest", l)) {
                ee(c);
                s();
                return d;
            }
            t = l.path;
            e = l.verb;
            T = l.headers;
            M = l.parameters;
            A = l.errors;
            if (A && A.length > 0) {
                Q(n, "htmx:validation:halted", l);
                ee(c);
                s();
                return d;
            }
            var X = t.split("#");
            var F = X[0];
            var j = X[1];
            var B = null;
            if (e === "get") {
                B = F;
                var U = Object.keys(M).length !== 0;
                if (U) {
                    if (B.indexOf("?") < 0) B += "?";
                    else B += "&";
                    B += Ut(M);
                    if (j) B += "#" + j;
                }
                o.open("GET", B, true);
            } else o.open(e.toUpperCase(), t, true);
            o.overrideMimeType("text/html");
            o.withCredentials = l.withCredentials;
            o.timeout = l.timeout;
            if (D.noHeaders) ;
            else {
                for(var V in T)if (T.hasOwnProperty(V)) {
                    var _ = T[V];
                    nr(o, V, _);
                }
            }
            var u = {
                xhr: o,
                target: g,
                requestConfig: l,
                etc: i,
                boosted: P,
                pathInfo: {
                    requestPath: t,
                    finalRequestPath: B || t,
                    anchor: j
                }
            };
            o.onload = function() {
                try {
                    var e = sr(n);
                    u.pathInfo.responsePath = ir(o);
                    v(n, u);
                    Mt(z);
                    Q(n, "htmx:afterRequest", u);
                    Q(n, "htmx:afterOnLoad", u);
                    if (!te(n)) {
                        var t = null;
                        while(e.length > 0 && t == null){
                            var r = e.shift();
                            if (te(r)) t = r;
                        }
                        if (t) {
                            Q(t, "htmx:afterRequest", u);
                            Q(t, "htmx:afterOnLoad", u);
                        }
                    }
                    ee(c);
                    s();
                } catch (e1) {
                    Y(n, "htmx:onLoadError", re({
                        error: e1
                    }, u));
                    throw e1;
                }
            };
            o.onerror = function() {
                Mt(z);
                Y(n, "htmx:afterRequest", u);
                Y(n, "htmx:sendError", u);
                ee(h);
                s();
            };
            o.onabort = function() {
                Mt(z);
                Y(n, "htmx:afterRequest", u);
                Y(n, "htmx:sendAbort", u);
                ee(h);
                s();
            };
            o.ontimeout = function() {
                Mt(z);
                Y(n, "htmx:afterRequest", u);
                Y(n, "htmx:timeout", u);
                ee(h);
                s();
            };
            if (!Q(n, "htmx:beforeRequest", u)) {
                ee(c);
                s();
                return d;
            }
            var z = kt(n);
            K([
                "loadstart",
                "loadend",
                "progress",
                "abort"
            ], function(t) {
                K([
                    o,
                    o.upload
                ], function(e) {
                    e.addEventListener(t, function(e) {
                        Q(n, "htmx:xhr:" + t, {
                            lengthComputable: e.lengthComputable,
                            loaded: e.loaded,
                            total: e.total
                        });
                    });
                });
            });
            Q(n, "htmx:beforeSend", u);
            o.send(e === "get" ? null : $t(o, n, M));
            return d;
        }
        function ur(e, t) {
            var r = t.xhr;
            var n = null;
            var i = null;
            if (ar(r, /HX-Push:/i)) {
                n = r.getResponseHeader("HX-Push");
                i = "push";
            } else if (ar(r, /HX-Push-Url:/i)) {
                n = r.getResponseHeader("HX-Push-Url");
                i = "push";
            } else if (ar(r, /HX-Replace-Url:/i)) {
                n = r.getResponseHeader("HX-Replace-Url");
                i = "replace";
            }
            if (n) {
                if (n === "false") return {};
                else return {
                    type: i,
                    path: n
                };
            }
            var a = t.pathInfo.finalRequestPath;
            var o = t.pathInfo.responsePath;
            var s = $(e, "hx-push-url");
            var f = $(e, "hx-replace-url");
            var c = Z(e).boosted;
            var l = null;
            var u = null;
            if (s) {
                l = "push";
                u = s;
            } else if (f) {
                l = "replace";
                u = f;
            } else if (c) {
                l = "push";
                u = o || a;
            }
            if (u) {
                if (u === "false") return {};
                if (u === "true") u = o || a;
                if (t.pathInfo.anchor && u.indexOf("#") === -1) u = u + "#" + t.pathInfo.anchor;
                return {
                    type: l,
                    path: u
                };
            } else return {};
        }
        function fr(s, l) {
            var u = l.xhr;
            var f = l.target;
            var n = l.etc;
            if (!Q(s, "htmx:beforeOnLoad", l)) return;
            if (ar(u, /HX-Trigger:/i)) qe(u, "HX-Trigger", s);
            if (ar(u, /HX-Location:/i)) {
                Lt();
                var e = u.getResponseHeader("HX-Location");
                var c;
                if (e.indexOf("{") === 0) {
                    c = S(e);
                    e = c["path"];
                    delete c["path"];
                }
                or("GET", e, c).then(function() {
                    Tt(e);
                });
                return;
            }
            if (ar(u, /HX-Redirect:/i)) {
                location.href = u.getResponseHeader("HX-Redirect");
                return;
            }
            if (ar(u, /HX-Refresh:/i)) {
                if ("true" === u.getResponseHeader("HX-Refresh")) {
                    location.reload();
                    return;
                }
            }
            if (ar(u, /HX-Retarget:/i)) l.target = J().querySelector(u.getResponseHeader("HX-Retarget"));
            var h = ur(s, l);
            var i = u.status >= 200 && u.status < 400 && u.status !== 204;
            var d = u.response;
            var t = u.status >= 400;
            var r = re({
                shouldSwap: i,
                serverResponse: d,
                isError: t
            }, l);
            if (!Q(f, "htmx:beforeSwap", r)) return;
            f = r.target;
            d = r.serverResponse;
            t = r.isError;
            l.failed = t;
            l.successful = !t;
            if (r.shouldSwap) {
                if (u.status === 286) Fe(s);
                wt(s, function(e) {
                    d = e.transformResponse(d, u, s);
                });
                if (h.type) Lt();
                var a = n.swapOverride;
                if (ar(u, /HX-Reswap:/i)) a = u.getResponseHeader("HX-Reswap");
                var c = Gt(s, a);
                f.classList.add(W.config.swappingClass);
                var o = function() {
                    try {
                        var e = document.activeElement;
                        var t = {};
                        try {
                            t = {
                                elt: e,
                                start: e ? e.selectionStart : null,
                                end: e ? e.selectionEnd : null
                            };
                        } catch (e1) {}
                        var n = Zt(f);
                        Oe(c.swapStyle, f, s, d, n);
                        if (t.elt && !te(t.elt) && t.elt.id) {
                            var r = document.getElementById(t.elt.id);
                            var i = {
                                preventScroll: c.focusScroll !== undefined ? !c.focusScroll : !W.config.defaultFocusScroll
                            };
                            if (r) {
                                if (t.start && r.setSelectionRange) r.setSelectionRange(t.start, t.end);
                                r.focus(i);
                            }
                        }
                        f.classList.remove(W.config.swappingClass);
                        K(n.elts, function(e) {
                            if (e.classList) e.classList.add(W.config.settlingClass);
                            Q(e, "htmx:afterSwap", l);
                        });
                        if (ar(u, /HX-Trigger-After-Swap:/i)) {
                            var a = s;
                            if (!te(s)) a = J().body;
                            qe(u, "HX-Trigger-After-Swap", a);
                        }
                        var o = function() {
                            K(n.tasks, function(e) {
                                e.call();
                            });
                            K(n.elts, function(e) {
                                if (e.classList) e.classList.remove(W.config.settlingClass);
                                Q(e, "htmx:afterSettle", l);
                            });
                            if (h.type) {
                                if (h.type === "push") {
                                    Tt(h.path);
                                    Q(J().body, "htmx:pushedIntoHistory", {
                                        path: h.path
                                    });
                                } else {
                                    Ht(h.path);
                                    Q(J().body, "htmx:replacedInHistory", {
                                        path: h.path
                                    });
                                }
                            }
                            if (l.pathInfo.anchor) {
                                var e = R("#" + l.pathInfo.anchor);
                                if (e) e.scrollIntoView({
                                    block: "start",
                                    behavior: "auto"
                                });
                            }
                            if (n.title) {
                                var t = R("title");
                                if (t) t.innerHTML = n.title;
                                else window.document.title = n.title;
                            }
                            Kt(n.elts, c);
                            if (ar(u, /HX-Trigger-After-Settle:/i)) {
                                var r = s;
                                if (!te(s)) r = J().body;
                                qe(u, "HX-Trigger-After-Settle", r);
                            }
                        };
                        if (c.settleDelay > 0) setTimeout(o, c.settleDelay);
                        else o();
                    } catch (e2) {
                        Y(s, "htmx:swapError", l);
                        throw e2;
                    }
                };
                if (c.swapDelay > 0) setTimeout(o, c.swapDelay);
                else o();
            }
            if (t) Y(s, "htmx:responseError", re({
                error: "Response Status Error Code " + u.status + " from " + l.pathInfo.requestPath
            }, l));
        }
        var cr = {};
        function hr() {
            return {
                init: function(e) {
                    return null;
                },
                onEvent: function(e, t) {
                    return true;
                },
                transformResponse: function(e, t, r) {
                    return e;
                },
                isInlineSwap: function(e) {
                    return false;
                },
                handleSwap: function(e, t, r, n) {
                    return false;
                },
                encodeParameters: function(e, t, r) {
                    return null;
                }
            };
        }
        function dr(e, t) {
            if (t.init) t.init(r);
            cr[e] = re(hr(), t);
        }
        function vr(e) {
            delete cr[e];
        }
        function gr(e, r, n) {
            if (e == undefined) return r;
            if (r == undefined) r = [];
            if (n == undefined) n = [];
            var t = G(e, "hx-ext");
            if (t) K(t.split(","), function(e) {
                e = e.replace(/ /g, "");
                if (e.slice(0, 7) == "ignore:") {
                    n.push(e.slice(7));
                    return;
                }
                if (n.indexOf(e) < 0) {
                    var t = cr[e];
                    if (t && r.indexOf(t) < 0) r.push(t);
                }
            });
            return gr(u(e), r, n);
        }
        function pr(e) {
            if (J().readyState !== "loading") e();
            else J().addEventListener("DOMContentLoaded", e);
        }
        function mr() {
            if (W.config.includeIndicatorStyles !== false) J().head.insertAdjacentHTML("beforeend", "<style>                      ." + W.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + W.config.requestClass + " ." + W.config.indicatorClass + "{opacity:1}                      ." + W.config.requestClass + "." + W.config.indicatorClass + "{opacity:1}                    </style>");
        }
        function xr() {
            var e = J().querySelector('meta[name="htmx-config"]');
            if (e) return S(e.content);
            else return null;
        }
        function yr() {
            var e = xr();
            if (e) W.config = re(W.config, e);
        }
        pr(function() {
            yr();
            mr();
            var e = J().body;
            mt(e);
            var t = J().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
            e.addEventListener("htmx:abort", function(e) {
                var t = e.target;
                var r = Z(t);
                if (r && r.xhr) r.xhr.abort();
            });
            window.onpopstate = function(e) {
                if (e.state && e.state.htmx) {
                    It();
                    K(t, function(e) {
                        Q(e, "htmx:restored", {
                            document: J(),
                            triggerEvent: Q
                        });
                    });
                }
            };
            setTimeout(function() {
                Q(e, "htmx:load", {});
            }, 0);
        });
        return W;
    }();
});

},{}],"bjhVj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GiscusWidget", ()=>r);
var _lit = require("lit");
var _decoratorsJs = require("lit/decorators.js");
var _refJs = require("lit/directives/ref.js");
var S = Object.defineProperty, _ = Object.getOwnPropertyDescriptor, i = (e, t, s, n)=>{
    for(var a = n > 1 ? void 0 : n ? _(t, s) : t, c = e.length - 1, h; c >= 0; c--)(h = e[c]) && (a = (n ? h(t, s, a) : h(a)) || a);
    return n && a && S(t, s, a), a;
};
let r = class extends (0, _lit.LitElement) {
    constructor(){
        super(), this.GISCUS_SESSION_KEY = "giscus-session", this.GISCUS_DEFAULT_HOST = "https://giscus.app", this.ERROR_SUGGESTION = "Please consider reporting this error at https://github.com/giscus/giscus/issues/new.", this.__session = "", this._iframeRef = (0, _refJs.createRef)(), this.messageEventHandler = this.handleMessageEvent.bind(this), this.host = this.GISCUS_DEFAULT_HOST, this.strict = "0", this.reactionsEnabled = "1", this.emitMetadata = "0", this.inputPosition = "bottom", this.theme = "light", this.lang = "en", this.loading = "eager", this.setupSession(), window.addEventListener("message", this.messageEventHandler);
    }
    get iframeRef() {
        return this._iframeRef.value;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback(), window.removeEventListener("message", this.messageEventHandler);
    }
    _formatError(e) {
        return `[giscus] An error occurred. Error message: "${e}".`;
    }
    setupSession() {
        const e = location.href, t = new URL(e), s = localStorage.getItem(this.GISCUS_SESSION_KEY), n = t.searchParams.get("giscus") || "";
        if (n) {
            localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(n)), this.__session = n, t.searchParams.delete("giscus"), history.replaceState(void 0, document.title, t.toString());
            return;
        }
        if (s) try {
            this.__session = JSON.parse(s || "") || "";
        } catch (a) {
            this.__session = "", localStorage.removeItem(this.GISCUS_SESSION_KEY), console.warn(`${this._formatError(a == null ? void 0 : a.message)} Session has been cleared.`);
        }
    }
    handleMessageEvent(e) {
        if (e.origin !== this.host) return;
        const { data: t  } = e;
        if (!(typeof t == "object" && t.giscus) || (this.iframeRef && t.giscus.resizeHeight && (this.iframeRef.style.height = `${t.giscus.resizeHeight}px`), !t.giscus.error)) return;
        const s = t.giscus.error;
        if (s.includes("Bad credentials") || s.includes("Invalid state value")) {
            if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
                localStorage.removeItem(this.GISCUS_SESSION_KEY), this.__session = "", console.warn(`${this._formatError(s)} Session has been cleared.`), this.update(/* @__PURE__ */ new Map());
                return;
            }
            console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`);
        }
        if (s.includes("Discussion not found")) {
            console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`);
            return;
        }
        console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`);
    }
    sendMessage(e) {
        var t, s;
        (s = (t = this.iframeRef) == null ? void 0 : t.contentWindow) == null || s.postMessage({
            giscus: e
        }, this.host);
    }
    updateConfig() {
        const e = {
            setConfig: {
                repo: this.repo,
                repoId: this.repoId,
                category: this.category,
                categoryId: this.categoryId,
                term: this.getTerm(),
                number: +this.getNumber(),
                strict: this.strict === "1",
                reactionsEnabled: this.reactionsEnabled === "1",
                emitMetadata: this.emitMetadata === "1",
                inputPosition: this.inputPosition,
                theme: this.theme,
                lang: this.lang
            }
        };
        this.sendMessage(e);
    }
    requestUpdate(e, t, s) {
        if (!this.hasUpdated || e === "host") {
            super.requestUpdate(e, t, s);
            return;
        }
        this.updateConfig();
    }
    getMetaContent(e, t = !1) {
        const s = t ? `meta[property='og:${e}'],` : "", n = document.querySelector(s + `meta[name='${e}']`);
        return n ? n.content : "";
    }
    _getCleanedUrl() {
        const e = new URL(location.href);
        return e.searchParams.delete("giscus"), e;
    }
    getTerm() {
        switch(this.mapping){
            case "url":
                return `${this._getCleanedUrl()}`;
            case "title":
                return document.title;
            case "og:title":
                return this.getMetaContent("title", !0);
            case "specific":
                return this.term || "";
            case "number":
                return "";
            case "pathname":
            default:
                return location.pathname.length < 2 ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "");
        }
    }
    getNumber() {
        return this.mapping === "number" && this.term || "";
    }
    getIframeSrc() {
        const e = this._getCleanedUrl().toString(), t = `${e}${this.id ? "#" + this.id : ""}`, s = this.getMetaContent("description", !0), n = this.getMetaContent("giscus:backlink") || e, a = {
            origin: t,
            session: this.__session,
            repo: this.repo,
            repoId: this.repoId || "",
            category: this.category || "",
            categoryId: this.categoryId || "",
            term: this.getTerm(),
            number: this.getNumber(),
            strict: this.strict,
            reactionsEnabled: this.reactionsEnabled,
            emitMetadata: this.emitMetadata,
            inputPosition: this.inputPosition,
            theme: this.theme,
            description: s,
            backLink: n
        }, c = this.host || this.GISCUS_DEFAULT_HOST, h = this.lang ? `/${this.lang}` : "", l = new URLSearchParams(a);
        return `${c}${h}/widget?${l}`;
    }
    render() {
        return (0, _lit.html)`
      <iframe
        title="Comments"
        scrolling="no"
        ${(0, _refJs.ref)(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `;
    }
};
r.styles = (0, _lit.css)`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light;
    }
  `;
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "host", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "repo", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "repoId", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "category", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "categoryId", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "mapping", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "term", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "strict", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "reactionsEnabled", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "emitMetadata", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "inputPosition", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "theme", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "lang", 2);
i([
    (0, _decoratorsJs.property)({
        reflect: !0
    })
], r.prototype, "loading", 2);
r = i([
    (0, _decoratorsJs.customElement)("giscus-widget")
], r);

},{"lit":"4antt","lit/decorators.js":"bCPKi","lit/directives/ref.js":"eKwmp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>d);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t1) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
};
class d extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        null !== (i = this.h) && void 0 !== i || (this.h = []), this.h.push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t1 = this.properties, i = [
                ...Object.getOwnPropertyNames(t1),
                ...Object.getOwnPropertySymbols(t1)
            ];
            for (const s of i)this.createProperty(s, t1[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i1 of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i1));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t1 = e.getPropertyOptions(r), h = "function" == typeof t1.converter ? {
                fromAttribute: t1.converter
            } : void 0 !== (null === (s = t1.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t1.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t1.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t1 = this.scheduleUpdate();
        return null != t1 && await t1, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t1) {
            throw i = !1, this._$Ek(), t1;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
d.finalized = !0, d.elementProperties = new Map, d.elementStyles = [], d.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: d
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.4.1");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkZsf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e1 = void 0 !== s && 1 === s.length;
            e1 && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e1 && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1cmQt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L);
parcelHelpers.export(exports, "html", ()=>y);
parcelHelpers.export(exports, "noChange", ()=>x);
parcelHelpers.export(exports, "nothing", ()=>b);
parcelHelpers.export(exports, "render", ()=>Z);
parcelHelpers.export(exports, "svg", ()=>w);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = `lit$${(Math.random() + "").slice(9)}$`, n = "?" + o, l = `<${n}>`, h = document, r = (t = "")=>h.createComment(t), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, c = (t)=>u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), y = g(1), w = g(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap, A = h.createTreeWalker(h, 129, null, !1), E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = v;
    for(let i1 = 0; i1 < s; i1++){
        const s1 = t[i1];
        let e1, u, c = -1, g = 0;
        for(; g < s1.length && (d.lastIndex = g, u = d.exec(s1), null !== u);)g = d.lastIndex, d === v ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e1 = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? p : m) : d === p || d === m ? d = _ : d === a || d === f ? d = v : (d = _, h = void 0);
        const y = d === _ && t[i1 + 1].startsWith("/>") ? " " : "";
        r += d === v ? s1 + l : c >= 0 ? (n.push(e1), s1.slice(0, c) + "$lit$" + s1.slice(c) + o + y) : s1 + o + (-2 === c ? (n.push(void 0), i1) : y);
    }
    const u1 = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== e ? e.createHTML(u1) : u1,
        n
    ];
};
class C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = E(t, i);
        if (this.el = C.createElement(v, e), A.currentNode = this.el.content, 2 === i) {
            const t1 = this.el.content, i1 = t1.firstChild;
            i1.remove(), t1.append(...i1.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t2 = [];
                    for (const i2 of l.getAttributeNames())if (i2.endsWith("$lit$") || i2.startsWith(o)) {
                        const s1 = a[d++];
                        if (t2.push(i2), void 0 !== s1) {
                            const t3 = l.getAttribute(s1.toLowerCase() + "$lit$").split(o), i3 = /([.?@])?(.*)/.exec(s1);
                            c.push({
                                type: 1,
                                index: h,
                                name: i3[2],
                                strings: t3,
                                ctor: "." === i3[1] ? M : "?" === i3[1] ? k : "@" === i3[1] ? H : S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i4 of t2)l.removeAttribute(i4);
                }
                if ($.test(l.tagName)) {
                    const t4 = l.textContent.split(o), i5 = t4.length - 1;
                    if (i5 > 0) {
                        l.textContent = s ? s.emptyScript : "";
                        for(let s2 = 0; s2 < i5; s2++)l.append(t4[s2], r()), A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t4[i5], r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t5 = -1;
                    for(; -1 !== (t5 = l.data.indexOf(o, t5 + 1));)c.push({
                        type: 7,
                        index: h
                    }), t5 += o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === x) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = P(t, r._$AS(t, i.values), r, e)), i;
}
class V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i1;
                2 === d.type ? i1 = new N(n, n.nextSibling, this, t) : 1 === d.type ? i1 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i1 = new I(n, this, t)), this.u.push(i1), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = P(this, t, i), d(t) ? t === b || null == t || "" === t ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== x && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== b && d(this._$AH) ? this._$AA.nextSibling.data = t : this.T(h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t1 = new V(o, this), i1 = t1.v(this.options);
            t1.p(s), this.T(i1), this._$AH = t1;
        }
    }
    _$AC(t) {
        let i = T.get(t.strings);
        return void 0 === i && T.set(t.strings, i = new C(t)), i;
    }
    k(t) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new N(this.O(r()), this.O(r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i1 = t.nextSibling;
            t.remove(), t = i1;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = b;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = P(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
        else {
            const e1 = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = P(this, e1[s + l], i, l), h === x && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === b ? t = b : t !== b && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === b ? void 0 : t;
    }
}
const R = s ? s.emptyScript : "";
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : b) === x) return;
        const e = this._$AH, o = t === b && e !== b || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== b && (e === b || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        P(this, t);
    }
}
const L = {
    P: "$lit$",
    A: o,
    M: n,
    C: 1,
    L: E,
    R: V,
    D: c,
    V: P,
    I: N,
    H: S,
    N: k,
    U: H,
    B: M,
    F: I
}, z = i.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.4.0");
const Z = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t1 = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(r(), t1), t1, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_reactiveElement, exports);
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.2.2");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2OXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMf50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t , elements: s  } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipYYa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    };
function e(e) {
    return (n, t)=>void 0 !== t ? ((i, e, n)=>{
            e.constructor.createProperty(n, i);
        })(e, n, t) : i(e, n);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t(t) {
    return (0, _propertyJs.property)({
        ...t,
        state: !0
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8b5ex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0R9Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), o = ({ finisher: e , descriptor: t  })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n1 = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n1,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n1
            };
            return null != e && (i.finisher = function(t) {
                e(t, n1);
            }), i;
        }
        {
            const r1 = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r1, n);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(i, n) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n1 = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n1] && (this[n1] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n1];
                };
            }
            return t;
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>l);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n;
const e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function l(n) {
    const { slot: l , selector: t  } = null != n ? n : {};
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o);
var _baseJs = require("./base.js");
var _queryAssignedElementsJs = require("./query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, _queryAssignedElementsJs.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, _baseJs.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","./query-assigned-elements.js":"kKpwU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKwmp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _refJs = require("lit-html/directives/ref.js");
parcelHelpers.exportAll(_refJs, exports);

},{"lit-html/directives/ref.js":"dVEkM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVEkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRef", ()=>e);
parcelHelpers.export(exports, "ref", ()=>n);
var _litHtmlJs = require("../lit-html.js");
var _asyncDirectiveJs = require("../async-directive.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = ()=>new o;
class o {
}
const h = new WeakMap, n = (0, _directiveJs.directive)(class extends (0, _asyncDirectiveJs.AsyncDirective) {
    render(t) {
        return 0, _litHtmlJs.nothing;
    }
    update(t, [s]) {
        var e;
        const o = s !== this.Y;
        return o && void 0 !== this.Y && this.rt(void 0), (o || this.lt !== this.ct) && (this.Y = s, this.dt = null === (e = t.options) || void 0 === e ? void 0 : e.host, this.rt(this.ct = t.element)), _litHtmlJs.nothing;
    }
    rt(i) {
        var t;
        if ("function" == typeof this.Y) {
            const s = null !== (t = this.dt) && void 0 !== t ? t : globalThis;
            let e = h.get(s);
            void 0 === e && (e = new WeakMap, h.set(s, e)), void 0 !== e.get(this.Y) && this.Y.call(this.dt, void 0), e.set(this.Y, i), void 0 !== i && this.Y.call(this.dt, i);
        } else this.Y.value = i;
    }
    get lt() {
        var i, t, s;
        return "function" == typeof this.Y ? null === (t = h.get(null !== (i = this.dt) && void 0 !== i ? i : globalThis)) || void 0 === t ? void 0 : t.get(this.Y) : null === (s = this.Y) || void 0 === s ? void 0 : s.value;
    }
    disconnected() {
        this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
        this.rt(this.ct);
    }
});

},{"../lit-html.js":"1cmQt","../async-directive.js":"4f1Uv","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4f1Uv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>(0, _directiveJs.Directive));
parcelHelpers.export(exports, "PartType", ()=>(0, _directiveJs.PartType));
parcelHelpers.export(exports, "directive", ()=>(0, _directiveJs.directive));
parcelHelpers.export(exports, "AsyncDirective", ()=>c);
var _directiveHelpersJs = require("./directive-helpers.js");
var _directiveJs = require("./directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const s = (i, t)=>{
    var e, o;
    const r = i._$AN;
    if (void 0 === r) return !1;
    for (const i1 of r)null === (o = (e = i1)._$AO) || void 0 === o || o.call(e, t, !1), s(i1, t);
    return !0;
}, o = (i)=>{
    let t, e;
    do {
        if (void 0 === (t = i._$AM)) break;
        e = t._$AN, e.delete(i), i = t;
    }while (0 === (null == e ? void 0 : e.size));
}, r = (i)=>{
    for(let t; t = i._$AM; i = t){
        let e = t._$AN;
        if (void 0 === e) t._$AN = e = new Set;
        else if (e.has(i)) break;
        e.add(i), l(t);
    }
};
function n(i) {
    void 0 !== this._$AN ? (o(this), this._$AM = i, r(this)) : this._$AM = i;
}
function h(i, t = !1, e = 0) {
    const r = this._$AH, n = this._$AN;
    if (void 0 !== n && 0 !== n.size) {
        if (t) {
            if (Array.isArray(r)) for(let i1 = e; i1 < r.length; i1++)s(r[i1], !1), o(r[i1]);
            else null != r && (s(r, !1), o(r));
        } else s(this, i);
    }
}
const l = (i)=>{
    var t, s, o, r;
    i.type == (0, _directiveJs.PartType).CHILD && (null !== (t = (o = i)._$AP) && void 0 !== t || (o._$AP = h), null !== (s = (r = i)._$AQ) && void 0 !== s || (r._$AQ = n));
};
class c extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(i, t, e) {
        super._$AT(i, t, e), r(this), this.isConnected = i._$AU;
    }
    _$AO(i, t = !0) {
        var e, r;
        i !== this.isConnected && (this.isConnected = i, i ? null === (e = this.reconnected) || void 0 === e || e.call(this) : null === (r = this.disconnected) || void 0 === r || r.call(this)), t && (s(this, i), o(this));
    }
    setValue(t) {
        if ((0, _directiveHelpersJs.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
        else {
            const i = [
                ...this._$Ct._$AH
            ];
            i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}

},{"./directive-helpers.js":"cJsxz","./directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJsxz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TemplateResultType", ()=>i);
parcelHelpers.export(exports, "clearPart", ()=>a);
parcelHelpers.export(exports, "getCommittedValue", ()=>m);
parcelHelpers.export(exports, "getDirectiveClass", ()=>v);
parcelHelpers.export(exports, "insertPart", ()=>r);
parcelHelpers.export(exports, "isDirectiveResult", ()=>d);
parcelHelpers.export(exports, "isPrimitive", ()=>t);
parcelHelpers.export(exports, "isSingleExpression", ()=>e);
parcelHelpers.export(exports, "isTemplateResult", ()=>n);
parcelHelpers.export(exports, "removePart", ()=>p);
parcelHelpers.export(exports, "setChildPartValue", ()=>u);
parcelHelpers.export(exports, "setCommittedValue", ()=>s);
var _litHtmlJs = require("./lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { I: l  } = (0, _litHtmlJs._$LH), t = (o)=>null === o || "object" != typeof o && "function" != typeof o, i = {
    HTML: 1,
    SVG: 2
}, n = (o, l)=>void 0 === l ? void 0 !== (null == o ? void 0 : o._$litType$) : (null == o ? void 0 : o._$litType$) === l, d = (o)=>void 0 !== (null == o ? void 0 : o._$litDirective$), v = (o)=>null == o ? void 0 : o._$litDirective$, e = (o)=>void 0 === o.strings, c = ()=>document.createComment(""), r = (o, t, i)=>{
    var n;
    const d = o._$AA.parentNode, v = void 0 === t ? o._$AB : t._$AA;
    if (void 0 === i) {
        const t1 = d.insertBefore(c(), v), n1 = d.insertBefore(c(), v);
        i = new l(t1, n1, o, o.options);
    } else {
        const l1 = i._$AB.nextSibling, t2 = i._$AM, e = t2 !== o;
        if (e) {
            let l2;
            null === (n = i._$AQ) || void 0 === n || n.call(i, o), i._$AM = o, void 0 !== i._$AP && (l2 = o._$AU) !== t2._$AU && i._$AP(l2);
        }
        if (l1 !== v || e) {
            let o1 = i._$AA;
            for(; o1 !== l1;){
                const l3 = o1.nextSibling;
                d.insertBefore(o1, v), o1 = l3;
            }
        }
    }
    return i;
}, u = (o, l, t = o)=>(o._$AI(l, t), o), f = {}, s = (o, l = f)=>o._$AH = l, m = (o)=>o._$AH, p = (o)=>{
    var l;
    null === (l = o._$AP) || void 0 === l || l.call(o, !1, !0);
    let t = o._$AA;
    const i = o._$AB.nextSibling;
    for(; t !== i;){
        const o1 = t.nextSibling;
        t.remove(), t = o1;
    }
}, a = (o)=>{
    o._$AR();
};

},{"./lit-html.js":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9lbyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i);
parcelHelpers.export(exports, "PartType", ()=>t);
parcelHelpers.export(exports, "directive", ()=>e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class i {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69hXP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>module_default);
// packages/alpinejs/src/scheduler.js
var flushPending = false;
var flushing = false;
var queue = [];
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
        willProcessRecordQueue = true;
        queueMicrotask(()=>{
            processRecordQueue();
            willProcessRecordQueue = false;
        });
    }
}
function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = new Map();
    let removedAttributes = new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].addedNodes.forEach((node)=>node.nodeType === 1 && addedNodes.push(node));
            mutations[i].removedNodes.forEach((node)=>node.nodeType === 1 && removedNodes.push(node));
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        if (addedNodes.includes(node)) continue;
        onElRemoveds.forEach((i)=>i(node));
        if (node._x_cleanups) while(node._x_cleanups.length)node._x_cleanups.pop()();
    }
    addedNodes.forEach((node)=>{
        node._x_ignoreSelf = true;
        node._x_ignore = true;
    });
    for (let node1 of addedNodes){
        if (removedNodes.includes(node1)) continue;
        if (!node1.isConnected) continue;
        delete node1._x_ignoreSelf;
        delete node1._x_ignore;
        onElAddeds.forEach((i)=>i(node1));
        node1._x_ignore = true;
        node1._x_ignoreSelf = true;
    }
    addedNodes.forEach((node)=>{
        delete node._x_ignoreSelf;
        delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2);
    };
}
function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value])=>{
        existingScope[key] = value;
    });
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
        ownKeys: ()=>{
            return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
        },
        has: (target, name)=>{
            return objects.some((obj)=>obj.hasOwnProperty(name));
        },
        get: (target, name)=>{
            return (objects.find((obj)=>{
                if (obj.hasOwnProperty(name)) {
                    let descriptor = Object.getOwnPropertyDescriptor(obj, name);
                    if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) return true;
                    if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
                        let getter = descriptor.get;
                        let setter = descriptor.set;
                        let property = descriptor;
                        getter = getter && getter.bind(thisProxy);
                        setter = setter && setter.bind(thisProxy);
                        if (getter) getter._x_alreadyBound = true;
                        if (setter) setter._x_alreadyBound = true;
                        Object.defineProperty(obj, name, {
                            ...property,
                            get: getter,
                            set: setter
                        });
                    }
                    return true;
                }
                return false;
            }) || {})[name];
        },
        set: (target, name, value)=>{
            let closestObjectWithKey = objects.find((obj)=>obj.hasOwnProperty(name));
            if (closestObjectWithKey) closestObjectWithKey[name] = value;
            else objects[objects.length - 1][name] = value;
            return true;
        }
    });
    return thisProxy;
}
// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value , enumerable  }])=>{
            if (enumerable === false || value === void 0) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path), (value)=>set(data2, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback])=>{
        Object.defineProperty(obj, `$${name}`, {
            get () {
                let [utilities, cleanup2] = getElementBoundUtilities(el);
                utilities = {
                    interceptor,
                    ...utilities
                };
                onElRemoved(el, cleanup2);
                return callback(el, utilities);
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    Object.assign(error2, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    if (typeof expression === "function") return generateEvaluatorFromFunction(dataStack, expression);
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {} , params =[]  } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            return new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {} , params =[]  } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func(func, completeScope).catch((error2)=>handleError(error2, el, expression));
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)).finally(()=>func.result = void 0);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2)=>handleError(error2, el, value));
        else receiver(result);
    } else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler3.inline && handler3.inline(el, directive2, utilities);
        handler3 = handler3.bind(handler3, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name , value  })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
var into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name , value  })=>{
        let { name: newName , value: newValue  } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name  }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name , value  })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "radio",
    "tabs",
    "switch",
    "disclosure",
    "menu",
    "listbox",
    "list",
    "item",
    "combobox",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
function start() {
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk));
    onElRemoved((el)=>destroyTree(el));
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
function initTree(el, walker = walk) {
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            directives(el2, el2.attributes).forEach((handle)=>handle());
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root) {
    walk(root, (el)=>cleanupAttributes(el));
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value , modifiers , expression  }, { evaluate: evaluate2  })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (!expression) registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        enter: (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        leave: (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: delay,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: delay,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick2(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick2(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i());
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during , start: start2 , end  } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (el.type === "radio") {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) el.checked = checkedAttrLooseCompare(el.value, value);
    } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) el.value = value;
        else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function isBooleanAttr(attrName) {
    const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
    ];
    return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "") return true;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    return attr;
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    callback(alpine_default);
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
    initInterceptors(stores[name]);
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    directives(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.10.5",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var extend = Object.assign;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]";
var isString = (val)=>typeof val === "string";
var isSymbol = (val)=>typeof val === "symbol";
var isObject = (val)=>val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value);
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps  } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.onTrigger) effect3.options.onTrigger({
            effect: effect3,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var shallowGet = /* @__PURE__ */ createGetter(false, true);
var readonlyGet = /* @__PURE__ */ createGetter(true);
var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
var arrayInstrumentations = {};
[
    "includes",
    "indexOf",
    "lastIndexOf"
].forEach((key)=>{
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
        const res = method.apply(arr, args);
        if (res === -1 || res === false) return method.apply(arr, args.map(toRaw));
        else return res;
    };
});
[
    "push",
    "pop",
    "shift",
    "unshift",
    "splice"
].forEach((key)=>{
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
var shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
});
var toReactive = (value)=>isObject(value) ? reactive2(value) : value;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value;
var toShallow = (value)=>value;
var getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2  } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2 , get: get3  } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2 , get: get3  } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : this;
    };
}
var mutableInstrumentations = {
    get (key) {
        return get$1(this, key);
    },
    get size () {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
};
var shallowInstrumentations = {
    get (key) {
        return get$1(this, key, false, true);
    },
    get size () {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
};
var readonlyInstrumentations = {
    get (key) {
        return get$1(this, key, true);
    },
    get size () {
        return size(this, true);
    },
    has (key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
};
var shallowReadonlyInstrumentations = {
    get (key) {
        return get$1(this, key, true, true);
    },
    get size () {
        return size(this, true);
    },
    has (key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
};
var iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
];
iteratorMethods.forEach((method)=>{
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el));
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2 , effect: effect3  })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let firstTime = true;
        let oldValue;
        let effectReference = effect3(()=>evaluate2((value)=>{
                JSON.stringify(value);
                if (!firstTime) queueMicrotask(()=>{
                    callback(value, oldValue);
                    oldValue = value;
                });
                else oldValue = value;
                firstTime = false;
            }));
        el._x_effects.delete(effectReference);
    });
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el));
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el));
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while(currentEl){
        if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
        currentEl = currentEl.parentNode;
    }
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el)=>(name, key = null)=>{
        let root = closestIdRoot(el, name);
        let id = root ? root._x_ids[name] : findAndIncrementId(name);
        return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression  }, { effect: effect3 , evaluateLater: evaluateLater2  })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                __placeholder: val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        effect3(()=>innerSet(outerGet()));
        effect3(()=>outerSet(innerGet()));
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { expression  }, { cleanup: cleanup2  })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    mutateDom(()=>{
        target.appendChild(clone2);
        initTree(clone2);
        clone2._x_ignore = true;
    });
    cleanup2(()=>clone2.remove());
});
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers  }, { cleanup: cleanup2  })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", (el, { expression  }, { effect: effect3  })=>effect3(evaluateLater(el, expression)));
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler3 = (e)=>callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("prevent")) handler3 = wrapHandler(handler3, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler3 = wrapHandler(handler3, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("self")) handler3 = wrapHandler(handler3, (next, e)=>{
        e.target === el && next(e);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler3 = wrapHandler(handler3, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("once")) handler3 = wrapHandler(handler3, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
    });
    handler3 = wrapHandler(handler3, (next, e)=>{
        if (isKeyEvent(event)) {
            if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        }
        next(e);
    });
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier1 = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait1 = isNumeric(nextModifier1.split("ms")[0]) ? Number(nextModifier1.split("ms")[0]) : 250;
        handler3 = throttle(handler3, wait1);
    }
    listenerTarget.addEventListener(event, handler3, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler3, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        ctrl: "control",
        slash: "/",
        space: "-",
        spacebar: "-",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers , expression  }, { effect: effect3 , cleanup: cleanup2  })=>{
    let evaluate2 = evaluateLater(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el, assignmentExpression);
    var event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = on(el, event, modifiers, (e)=>{
        evaluateAssignment(()=>{}, {
            scope: {
                $event: e,
                rightSideOfExpression: assigmentFunction
            }
        });
    });
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]());
    let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
    el._x_model = {
        get () {
            let result;
            evaluate2((value)=>result = value);
            return result;
        },
        set (value) {
            evaluateSetModel(()=>{}, {
                scope: {
                    __placeholder: value
                }
            });
        }
    };
    el._x_forceModelUpdate = ()=>{
        evaluate2((value)=>{
            if (value === void 0 && expression.match(/\./)) value = "";
            window.fromModel = true;
            mutateDom(()=>bind(el, "value", value));
            delete window.fromModel;
        });
    };
    effect3(()=>{
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate();
    });
});
function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    return (event, currentValue)=>{
        return mutateDom(()=>{
            if (event instanceof CustomEvent && event.detail !== void 0) return event.detail || event.target.value;
            else if (el.type === "checkbox") {
                if (Array.isArray(currentValue)) {
                    let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
                    return event.target.checked ? currentValue.concat([
                        newValue
                    ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue));
                } else return event.target.checked;
            } else if (el.tagName.toLowerCase() === "select" && el.multiple) return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            }) : Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
            else {
                let rawValue = event.target.value;
                return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
            }
        });
    };
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak")))));
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression  }, { evaluate: evaluate2  })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression  }, { effect: effect3 , evaluateLater: evaluateLater2  })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression  }, { effect: effect3 , evaluateLater: evaluateLater2  })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
directive("bind", (el, { value , modifiers , expression , original  }, { effect: effect3  })=>{
    if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings)=>{
            applyBindingsObject(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && typeof expression === "string" && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers));
        }));
});
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`);
directive("data", skipDuringClone((el, { expression  }, { cleanup: cleanup2  })=>{
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
}));
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers , expression  }, { effect: effect3  })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = once((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression  }, { effect: effect3 , cleanup: cleanup2  })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>el2.remove());
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>keys.push(value2), {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i = 0; i < items.length; i++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>keys.push(value), {
                scope: {
                    index: i,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i1 = 0; i1 < prevKeys.length; i1++){
            let key = prevKeys[i1];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        for(let i2 = 0; i2 < keys.length; i2++){
            let key1 = keys[i2];
            let prevIndex = prevKeys.indexOf(key1);
            if (prevIndex === -1) {
                prevKeys.splice(i2, 0, key1);
                adds.push([
                    lastKey,
                    i2
                ]);
            } else if (prevIndex !== i2) {
                let keyInSpot = prevKeys.splice(i2, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i2, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key1);
            lastKey = key1;
        }
        for(let i3 = 0; i3 < removes.length; i3++){
            let key2 = removes[i3];
            if (!!lookup[key2]._x_effects) lookup[key2]._x_effects.forEach(dequeueJob);
            lookup[key2].remove();
            lookup[key2] = null;
            delete lookup[key2];
        }
        for(let i4 = 0; i4 < moves.length; i4++){
            let [keyInSpot1, keyForSpot1] = moves[i4];
            let elInSpot = lookup[keyInSpot1];
            let elForSpot = lookup[keyForSpot1];
            let marker = document.createElement("div");
            mutateDom(()=>{
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot1)]);
        }
        for(let i5 = 0; i5 < adds.length; i5++){
            let [lastKey2, index] = adds[i5];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope21 = scopes[index];
            let key3 = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            addScopeToNode(clone2, reactive(scope21), templateEl);
            mutateDom(()=>{
                lastEl.after(clone2);
                initTree(clone2);
            });
            if (typeof key3 === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key3] = clone2;
        }
        for(let i6 = 0; i6 < sames.length; i6++)refreshScope(lookup[sames[i6]], scopes[keys.indexOf(sames[i6])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names1 = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names1.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler2() {}
handler2.inline = (el, { expression  }, { cleanup: cleanup2  })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]);
};
directive("ref", handler2);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression  }, { effect: effect3 , cleanup: cleanup2  })=>{
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            initTree(clone2);
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            walk(clone2, (node)=>{
                if (!!node._x_effects) node._x_effects.forEach(dequeueJob);
            });
            clone2.remove();
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        }));
    cleanup2(()=>el._x_undoIf && el._x_undoIf());
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression  }, { evaluate: evaluate2  })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name));
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value , modifiers , expression  }, { cleanup: cleanup2  })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                $event: e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener());
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName2, slug) {
    directive(directiveName2, (el)=>warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eWisj":[function(require,module,exports) {
//==========================================================
// head-support.js
//
// An extension to htmx 1.0 to add head tag merging.
//==========================================================
(function() {
    var api = null;
    function log() {
    //console.log(arguments);
    }
    function mergeHead(newContent, defaultMergeStrategy) {
        if (newContent && newContent.indexOf("<head") > -1) {
            const htmlDoc = document.createElement("html");
            // remove svgs to avoid conflicts
            var contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
            // extract head tag
            var headTag = contentWithSvgsRemoved.match(/(<head(\s[^>]*>|>)([\s\S]*?)<\/head>)/im);
            // if the  head tag exists...
            if (headTag) {
                var added = [];
                var removed = [];
                var preserved = [];
                var nodesToAppend = [];
                htmlDoc.innerHTML = headTag;
                var newHeadTag = htmlDoc.querySelector("head");
                if (newHeadTag == null) return;
                else {
                    // put all new head elements into a Map, by their outerHTML
                    var srcToNewHeadNodes = new Map();
                    for (const newHeadChild of newHeadTag.children)srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
                }
                // determine merge strategy
                var mergeStrategy = api.getAttributeValue(newHeadTag, "hx-head") || defaultMergeStrategy;
                // get the current head
                var currentHead = document.head;
                for (const currentHeadElt of currentHead.children){
                    // If the current head element is in the map
                    var inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);
                    var isReAppended = currentHeadElt.getAttribute("hx-head") === "re-eval";
                    var isPreserved = api.getAttributeValue(currentHeadElt, "hx-preserve") === "true";
                    if (inNewContent || isPreserved) {
                        if (isReAppended) // remove the current version and let the new version replace it and re-execute
                        removed.push(currentHeadElt);
                        else {
                            // this element already exists and should not be re-appended, so remove it from
                            // the new content map, preserving it in the DOM
                            srcToNewHeadNodes.delete(currentHeadElt.outerHTML);
                            preserved.push(currentHeadElt);
                        }
                    } else {
                        if (mergeStrategy === "append") // we are appending and this existing element is not new content
                        // so if and only if it is marked for re-append do we do anything
                        {
                            if (isReAppended) {
                                removed.push(currentHeadElt);
                                nodesToAppend.push(currentHeadElt);
                            }
                        } else // if this is a merge, we remove this content since it is not in the new head
                        if (api.triggerEvent(document.body, "htmx:removingHeadElement", {
                            headElement: currentHeadElt
                        }) !== false) removed.push(currentHeadElt);
                    }
                }
                // Push the tremaining new head elements in the Map into the
                // nodes to append to the head tag
                nodesToAppend.push(...srcToNewHeadNodes.values());
                log("to append: ", nodesToAppend);
                for (const newNode of nodesToAppend){
                    log("adding: ", newNode);
                    var newElt = document.createRange().createContextualFragment(newNode.outerHTML);
                    log(newElt);
                    if (api.triggerEvent(document.body, "htmx:addingHeadElement", {
                        headElement: newElt
                    }) !== false) {
                        currentHead.appendChild(newElt);
                        added.push(newElt);
                    }
                }
                // remove all removed elements, after we have appended the new elements to avoid
                // additional network requests for things like style sheets
                for (const removedElement of removed)if (api.triggerEvent(document.body, "htmx:removingHeadElement", {
                    headElement: removedElement
                }) !== false) currentHead.removeChild(removedElement);
                api.triggerEvent(document.body, "htmx:afterHeadMerge", {
                    added: added,
                    kept: preserved,
                    removed: removed
                });
            }
        }
    }
    htmx.defineExtension("head-support", {
        init: function(apiRef) {
            // store a reference to the internal API.
            api = apiRef;
            htmx.on("htmx:afterSwap", function(evt) {
                var serverResponse = evt.detail.xhr.response;
                if (api.triggerEvent(document.body, "htmx:beforeHeadMerge", evt.detail)) mergeHead(serverResponse, evt.detail.boosted ? "merge" : "append");
            });
            htmx.on("htmx:historyRestore", function(evt) {
                if (api.triggerEvent(document.body, "htmx:beforeHeadMerge", evt.detail)) {
                    if (evt.detail.cacheMiss) mergeHead(evt.detail.serverResponse, "merge");
                    else mergeHead(evt.detail.item.head, "merge");
                }
            });
            htmx.on("htmx:historyItemCreated", function(evt) {
                var historyItem = evt.detail.item;
                historyItem.head = document.head.outerHTML;
            });
        }
    });
})();

},{}]},["4WupR","5lBMl"], "5lBMl", "parcelRequired3e8")

//# sourceMappingURL=index.js.map
