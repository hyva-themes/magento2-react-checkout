var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var n$1, l$2, u$1, t$2, r$3, o$2, f$2, e$3 = {}, c$2 = [], s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h$2(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v$2(l2, u2, i2) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    o2 == "key" ? t2 = u2[o2] : o2 == "ref" ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i2), typeof l2 == "function" && l2.defaultProps != null)
    for (o2 in l2.defaultProps)
      f2[o2] === void 0 && (f2[o2] = l2.defaultProps[o2]);
  return y$3(l2, f2, t2, r2, null);
}
function y$3(n2, i2, t2, r2, o2) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++u$1 : o2 };
  return o2 == null && l$2.vnode != null && l$2.vnode(f2), f2;
}
function p$2() {
  return { current: null };
}
function d$2(n2) {
  return n2.children;
}
function _$1(n2, l2) {
  this.props = n2, this.context = l2;
}
function k$3(n2, l2) {
  if (l2 == null)
    return n2.__ ? k$3(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? k$3(n2) : null;
}
function b$2(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b$2(n2);
  }
}
function m$3(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !g$3.__r++ || o$2 !== l$2.debounceRendering) && ((o$2 = l$2.debounceRendering) || r$3)(g$3);
}
function g$3() {
  for (var n2; g$3.__r = t$2.length; )
    n2 = t$2.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$2 = [], n2.some(function(n3) {
      var l2, u2, i2, t2, r2, o2;
      n3.__d && (r2 = (t2 = (l2 = n3).__v).__e, (o2 = l2.__P) && (u2 = [], (i2 = a$1({}, t2)).__v = t2.__v + 1, j$2(o2, t2, i2, l2.__n, o2.ownerSVGElement !== void 0, t2.__h != null ? [r2] : null, u2, r2 == null ? k$3(t2) : r2, t2.__h), z$2(u2, t2), t2.__e != r2 && b$2(t2)));
    });
}
function w$3(n2, l2, u2, i2, t2, r2, o2, f2, s2, a2) {
  var h2, v2, p2, _2, b2, m2, g2, w2 = i2 && i2.__k || c$2, A2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y$3(null, _2, null, null, _2) : Array.isArray(_2) ? y$3(d$2, { children: _2 }, null, null, null) : _2.__b > 0 ? y$3(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, (p2 = w2[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A2; v2++) {
          if ((p2 = w2[v2]) && _2.key == p2.key && _2.type === p2.type) {
            w2[v2] = void 0;
            break;
          }
          p2 = null;
        }
      j$2(n2, _2, p2 = p2 || e$3, t2, r2, o2, f2, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p2.ref != v2 && (g2 || (g2 = []), p2.ref && g2.push(p2.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p2.__k ? _2.__d = s2 = x$3(_2, s2, n2) : s2 = P$2(n2, _2, p2, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p2.__e == s2 && s2.parentNode != n2 && (s2 = k$3(p2));
    }
  for (u2.__e = m2, h2 = A2; h2--; )
    w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k$3(i2, h2 + 1)), N$2(w2[h2], w2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      M$2(g2[h2], g2[++h2], g2[++h2]);
}
function x$3(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = typeof i2.type == "function" ? x$3(i2, l2, u2) : P$2(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function A$3(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    A$3(n3, l2);
  }) : l2.push(n2)), l2;
}
function P$2(n2, l2, u2, i2, t2, r2) {
  var o2, f2, e2;
  if (l2.__d !== void 0)
    o2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != r2 || t2.parentNode == null)
    n:
      if (r2 == null || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return o2 !== void 0 ? o2 : t2.nextSibling;
}
function C$1(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    r2 === "children" || r2 === "key" || r2 in l2 || H$2(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && typeof l2[r2] != "function" || r2 === "children" || r2 === "key" || r2 === "value" || r2 === "checked" || u2[r2] === l2[r2] || H$2(n2, r2, l2[r2], u2[r2], i2);
}
function $$1(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s$1.test(l2) ? u2 : u2 + "px";
}
function H$2(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || $$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || $$1(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? T$3 : I$2, r2) : n2.removeEventListener(l2, r2 ? T$3 : I$2, r2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I$2(n2) {
  this.l[n2.type + false](l$2.event ? l$2.event(n2) : n2);
}
function T$3(n2) {
  this.l[n2.type + true](l$2.event ? l$2.event(n2) : n2);
}
function j$2(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, h2, v2, y2, p2, k2, b2, m2, g2, x2, A2, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$2.__b) && s2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i2.__c ? b2 = (h2 = u2.__c = i2.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _$1(m2, x2), h2.constructor = P2, h2.render = O$2), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a$1({}, h2.__s)), a$1(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p2 = h2.state, v2)
          P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i2.__v) {
            h2.props = m2, h2.state = h2.__s, u2.__v !== i2.__v && (h2.__d = false), h2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p2, k2);
          });
        }
        h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l$2.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a$1(a$1({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), A2 = s2 != null && s2.type === d$2 && s2.key == null ? s2.props.children : s2, w$3(n2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, r2, o2, f2, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        o2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = L$1(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = l$2.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || o2 != null) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$2.__e(n3, u2, i2);
  }
}
function z$2(n2, u2) {
  l$2.__c && l$2.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$2.__e(n3, u3.__v);
    }
  });
}
function L$1(l2, u2, i2, t2, r2, o2, f2, c2) {
  var s2, a2, v2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if (d2 === "svg" && (r2 = true), o2 != null) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p2 || c2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n$1.call(l2.childNodes), a2 = (y2 = i2.props || e$3).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c2) {
      if (o2 != null)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C$1(l2, p2, y2, r2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w$3(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && d2 !== "foreignObject", o2, f2, o2 ? o2[0] : i2.__k && k$3(i2, 0), c2), o2 != null)
      for (_2 = o2.length; _2--; )
        o2[_2] != null && h$2(o2[_2]);
    c2 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== y2.value || _2 !== l2.value || d2 === "progress" && !_2) && H$2(l2, "value", _2, y2.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l2.checked && H$2(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function M$2(n2, u2, i2) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$2.__e(n3, i2);
  }
}
function N$2(n2, u2, i2) {
  var t2, r2;
  if (l$2.unmount && l$2.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M$2(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$2.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && N$2(t2[r2], u2, typeof n2.type != "function");
  i2 || n2.__e == null || h$2(n2.__e), n2.__e = n2.__d = void 0;
}
function O$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function S$2(u2, i2, t2) {
  var r2, o2, f2;
  l$2.__ && l$2.__(u2, i2), o2 = (r2 = typeof t2 == "function") ? null : t2 && t2.__k || i2.__k, f2 = [], j$2(i2, u2 = (!r2 && t2 || i2).__k = v$2(d$2, null, [u2]), o2 || e$3, e$3, i2.ownerSVGElement !== void 0, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n$1.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), z$2(f2, u2);
}
function q$3(n2, l2) {
  S$2(n2, l2, q$3);
}
function B$2(l2, u2, i2) {
  var t2, r2, o2, f2 = a$1({}, l2.props);
  for (o2 in u2)
    o2 == "key" ? t2 = u2[o2] : o2 == "ref" ? r2 = u2[o2] : f2[o2] = u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$1.call(arguments, 2) : i2), y$3(l2.type, f2, t2 || l2.key, r2 || l2.ref, null);
}
function D$2(n2, l2) {
  var u2 = { __c: l2 = "__cC" + f$2++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(m$3);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$1 = c$2.slice, l$2 = { __e: function(n2, l2) {
  for (var u2, i2, t2; l2 = l2.__; )
    if ((u2 = l2.__c) && !u2.__)
      try {
        if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
          return u2.__E = u2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, _$1.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), typeof n2 == "function" && (n2 = n2(a$1({}, u2), this.props)), n2 && a$1(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m$3(this));
}, _$1.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$3(this));
}, _$1.prototype.render = d$2, t$2 = [], r$3 = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$3.__r = 0, f$2 = 0;
var t$1, u, r$2, o$1 = 0, i = [], c$1 = l$2.__b, f$1 = l$2.__r, e$2 = l$2.diffed, a = l$2.__c, v$1 = l$2.unmount;
function m$2(t2, r2) {
  l$2.__h && l$2.__h(u, t2, o$1 || r2), o$1 = 0;
  var i2 = u.__H || (u.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
}
function l$1(n2) {
  return o$1 = 1, p$1(w$2, n2);
}
function p$1(n2, r2, o2) {
  var i2 = m$2(t$1++, 2);
  return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : w$2(void 0, r2), function(n3) {
    var t2 = i2.t(i2.__[0], n3);
    i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
  }], i2.__c = u), i2.__;
}
function y$2(r2, o2) {
  var i2 = m$2(t$1++, 3);
  !l$2.__s && k$2(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
}
function h$1(r2, o2) {
  var i2 = m$2(t$1++, 4);
  !l$2.__s && k$2(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__h.push(i2));
}
function s(n2) {
  return o$1 = 5, d$1(function() {
    return { current: n2 };
  }, []);
}
function _(n2, t2, u2) {
  o$1 = 6, h$1(function() {
    typeof n2 == "function" ? n2(t2()) : n2 && (n2.current = t2());
  }, u2 == null ? u2 : u2.concat(n2));
}
function d$1(n2, u2) {
  var r2 = m$2(t$1++, 7);
  return k$2(r2.__H, u2) && (r2.__ = n2(), r2.__H = u2, r2.__h = n2), r2.__;
}
function A$2(n2, t2) {
  return o$1 = 8, d$1(function() {
    return n2;
  }, t2);
}
function F$2(n2) {
  var r2 = u.context[n2.__c], o2 = m$2(t$1++, 9);
  return o2.c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u)), r2.props.value) : n2.__;
}
function T$2(t2, u2) {
  l$2.useDebugValue && l$2.useDebugValue(u2 ? u2(t2) : t2);
}
function q$2(n2) {
  var r2 = m$2(t$1++, 10), o2 = l$1();
  return r2.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n3) {
    r2.__ && r2.__(n3), o2[1](n3);
  }), [o2[0], function() {
    o2[1](void 0);
  }];
}
function x$2() {
  i.forEach(function(t2) {
    if (t2.__P)
      try {
        t2.__H.__h.forEach(g$2), t2.__H.__h.forEach(j$1), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], l$2.__e(u2, t2.__v);
      }
  }), i = [];
}
l$2.__b = function(n2) {
  u = null, c$1 && c$1(n2);
}, l$2.__r = function(n2) {
  f$1 && f$1(n2), t$1 = 0;
  var r2 = (u = n2.__c).__H;
  r2 && (r2.__h.forEach(g$2), r2.__h.forEach(j$1), r2.__h = []);
}, l$2.diffed = function(t2) {
  e$2 && e$2(t2);
  var o2 = t2.__c;
  o2 && o2.__H && o2.__H.__h.length && (i.push(o2) !== 1 && r$2 === l$2.requestAnimationFrame || ((r$2 = l$2.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), b$1 && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    b$1 && (t3 = requestAnimationFrame(u2));
  })(x$2)), u = null;
}, l$2.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(g$2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || j$1(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], l$2.__e(r2, t3.__v);
    }
  }), a && a(t2, u2);
}, l$2.unmount = function(t2) {
  v$1 && v$1(t2);
  var u2, r2 = t2.__c;
  r2 && r2.__H && (r2.__H.__.forEach(function(n2) {
    try {
      g$2(n2);
    } catch (n3) {
      u2 = n3;
    }
  }), u2 && l$2.__e(u2, r2.__v));
};
var b$1 = typeof requestAnimationFrame == "function";
function g$2(n2) {
  var t2 = u, r2 = n2.__c;
  typeof r2 == "function" && (n2.__c = void 0, r2()), u = t2;
}
function j$1(n2) {
  var t2 = u;
  n2.__c = n2.__(), u = t2;
}
function k$2(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function w$2(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
function S$1(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if (e2 !== "__source" && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if (r2 !== "__source" && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E$1(n2) {
  this.props = n2;
}
function g$1(n2, t2) {
  function e2(n3) {
    var e3 = this.props.ref, r3 = e3 == n3.ref;
    return !r3 && e3 && (e3.call ? e3(null) : e3.current = null), t2 ? !t2(this.props, n3) || !r3 : C(this.props, n3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = e2, v$2(n2, t3);
  }
  return r2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}
(E$1.prototype = new _$1()).isPureReactComponent = true, E$1.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var w$1 = l$2.__b;
l$2.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w$1 && w$1(n2);
};
var R$1 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function x$1(n2) {
  function t2(t3, e2) {
    var r2 = S$1({}, t3);
    return delete r2.ref, n2(r2, (e2 = t3.ref || e2) && (typeof e2 != "object" || "current" in e2) ? e2 : null);
  }
  return t2.$$typeof = R$1, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var N$1 = function(n2, t2) {
  return n2 == null ? null : A$3(A$3(n2).map(t2));
}, k$1 = { map: N$1, forEach: N$1, count: function(n2) {
  return n2 ? A$3(n2).length : 0;
}, only: function(n2) {
  var t2 = A$3(n2);
  if (t2.length !== 1)
    throw "Children.only";
  return t2[0];
}, toArray: A$3 }, A$1 = l$2.__e;
l$2.__e = function(n2, t2, e2) {
  if (n2.then) {
    for (var r2, u2 = t2; u2 = u2.__; )
      if ((r2 = u2.__c) && r2.__c)
        return t2.__e == null && (t2.__e = e2.__e, t2.__k = e2.__k), r2.__c(n2, t2);
  }
  A$1(n2, t2, e2);
};
var O$1 = l$2.unmount;
function L() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U$1(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__e && t2.__e(n2);
}
function F$1(n2) {
  var t2, e2, r2;
  function u2(u3) {
    if (t2 || (t2 = n2()).then(function(n3) {
      e2 = n3.default || n3;
    }, function(n3) {
      r2 = n3;
    }), r2)
      throw r2;
    if (!e2)
      throw t2;
    return v$2(e2, u3);
  }
  return u2.displayName = "Lazy", u2.__f = true, u2;
}
function M$1() {
  this.u = null, this.o = null;
}
l$2.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && n2.__h === true && (n2.type = null), O$1 && O$1(n2);
}, (L.prototype = new _$1()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  r2.t == null && (r2.t = []), r2.t.push(e2);
  var u2 = U$1(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var n3 = r2.state.__e;
        r2.__v.__k[0] = function n4(t4, e3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n4(t5, e3, r3);
          }), t4.__c && t4.__c.__P === e3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, c2 = t2.__h === true;
  r2.__u++ || c2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, L.prototype.componentWillUnmount = function() {
  this.t = [];
}, L.prototype.render = function(n2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var e2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function n3(t3, e3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(n4) {
          typeof n4.__c == "function" && n4.__c();
        }), t3.__c.__H = null), (t3 = S$1({}, t3)).__c != null && (t3.__c.__P === r3 && (t3.__c.__P = e3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return n3(t4, e3, r3);
        })), t3;
      }(this.__b, e2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var u2 = t2.__e && v$2(d$2, null, n2.fallback);
  return u2 && (u2.__h = null), [v$2(d$2, null, t2.__e ? null : n2.children), u2];
};
var T$1 = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function D$1(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function I$1(n2) {
  var t2 = this, e2 = n2.i;
  t2.componentWillUnmount = function() {
    S$2(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== e2 && t2.componentWillUnmount(), n2.__v ? (t2.l || (t2.i = e2, t2.l = { nodeType: 1, parentNode: e2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, insertBefore: function(n3, e3) {
    this.childNodes.push(n3), t2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), t2.i.removeChild(n3);
  } }), S$2(v$2(D$1, { context: t2.context }, n2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function W$1(n2, t2) {
  return v$2(I$1, { __v: n2, i: t2 });
}
(M$1.prototype = new _$1()).__e = function(n2) {
  var t2 = this, e2 = U$1(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), T$1(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, M$1.prototype.render = function(n2) {
  this.u = null, this.o = new Map();
  var t2 = A$3(n2.children);
  n2.revealOrder && n2.revealOrder[0] === "b" && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, M$1.prototype.componentDidUpdate = M$1.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    T$1(n2, e2, t2);
  });
};
var j = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103, P$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, V$1 = typeof document != "undefined", z$1 = function(n2) {
  return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
function B$1(n2, t2, e2) {
  return t2.__k == null && (t2.textContent = ""), S$2(n2, t2), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
function H$1(n2, t2, e2) {
  return q$3(n2, t2), typeof e2 == "function" && e2(), n2 ? n2.__c : null;
}
_$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
  Object.defineProperty(_$1.prototype, n2, { configurable: true, get: function() {
    return this["UNSAFE_" + n2];
  }, set: function(t2) {
    Object.defineProperty(this, n2, { configurable: true, writable: true, value: t2 });
  } });
});
var Z$1 = l$2.event;
function Y$1() {
}
function $() {
  return this.cancelBubble;
}
function q$1() {
  return this.defaultPrevented;
}
l$2.event = function(n2) {
  return Z$1 && (n2 = Z$1(n2)), n2.persist = Y$1, n2.isPropagationStopped = $, n2.isDefaultPrevented = q$1, n2.nativeEvent = n2;
};
var G$1, J = { configurable: true, get: function() {
  return this.class;
} }, K = l$2.vnode;
l$2.vnode = function(n2) {
  var t2 = n2.type, e2 = n2.props, r2 = e2;
  if (typeof t2 == "string") {
    var u2 = t2.indexOf("-") === -1;
    for (var o2 in r2 = {}, e2) {
      var i2 = e2[o2];
      V$1 && o2 === "children" && t2 === "noscript" || o2 === "value" && "defaultValue" in e2 && i2 == null || (o2 === "defaultValue" && "value" in e2 && e2.value == null ? o2 = "value" : o2 === "download" && i2 === true ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !z$1(e2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : u2 && P$1.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : i2 === null && (i2 = void 0), r2[o2] = i2);
    }
    t2 == "select" && r2.multiple && Array.isArray(r2.value) && (r2.value = A$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.value.indexOf(n3.props.value) != -1;
    })), t2 == "select" && r2.defaultValue != null && (r2.value = A$3(e2.children).forEach(function(n3) {
      n3.props.selected = r2.multiple ? r2.defaultValue.indexOf(n3.props.value) != -1 : r2.defaultValue == n3.props.value;
    })), n2.props = r2, e2.class != e2.className && (J.enumerable = "className" in e2, e2.className != null && (r2.class = e2.className), Object.defineProperty(r2, "className", J));
  }
  n2.$$typeof = j, K && K(n2);
};
var Q = l$2.__r;
l$2.__r = function(n2) {
  Q && Q(n2), G$1 = n2.__c;
};
var X$1 = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return G$1.__n[n2.__c].props.value;
} } } }, nn = "17.0.2";
function tn(n2) {
  return v$2.bind(null, n2);
}
function en(n2) {
  return !!n2 && n2.$$typeof === j;
}
function rn(n2) {
  return en(n2) ? B$2.apply(null, arguments) : n2;
}
function un(n2) {
  return !!n2.__k && (S$2(null, n2), true);
}
function on(n2) {
  return n2 && (n2.base || n2.nodeType === 1 && n2) || null;
}
var ln = function(n2, t2) {
  return n2(t2);
}, cn = function(n2, t2) {
  return n2(t2);
}, fn = d$2;
var React = { useState: l$1, useReducer: p$1, useEffect: y$2, useLayoutEffect: h$1, useRef: s, useImperativeHandle: _, useMemo: d$1, useCallback: A$2, useContext: F$2, useDebugValue: T$2, version: "17.0.2", Children: k$1, render: B$1, hydrate: H$1, unmountComponentAtNode: un, createPortal: W$1, createElement: v$2, createContext: D$2, createFactory: tn, cloneElement: rn, createRef: p$2, Fragment: d$2, isValidElement: en, findDOMNode: on, Component: _$1, PureComponent: E$1, memo: g$1, forwardRef: x$1, flushSync: cn, unstable_batchedUpdates: ln, StrictMode: d$2, Suspense: L, SuspenseList: M$1, lazy: F$1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X$1 };
var compat_module = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": React,
  version: nn,
  Children: k$1,
  render: B$1,
  hydrate: H$1,
  unmountComponentAtNode: un,
  createPortal: W$1,
  createFactory: tn,
  cloneElement: rn,
  isValidElement: en,
  findDOMNode: on,
  PureComponent: E$1,
  memo: g$1,
  forwardRef: x$1,
  flushSync: cn,
  unstable_batchedUpdates: ln,
  StrictMode: fn,
  Suspense: L,
  SuspenseList: M$1,
  lazy: F$1,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X$1,
  createElement: v$2,
  createContext: D$2,
  createRef: p$2,
  Fragment: d$2,
  Component: _$1,
  useState: l$1,
  useReducer: p$1,
  useEffect: y$2,
  useLayoutEffect: h$1,
  useRef: s,
  useImperativeHandle: _,
  useMemo: d$1,
  useCallback: A$2,
  useContext: F$2,
  useDebugValue: T$2,
  useErrorBoundary: q$2
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a2 = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var reactDom = { exports: {} };
var reactDom_production_min = {};
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(compat_module);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty$n = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s2 = 1; s2 < arguments.length; s2++) {
    from = Object(arguments[s2]);
    for (var key in from) {
      if (hasOwnProperty$n.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols$1) {
      symbols = getOwnPropertySymbols$1(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports2) {
  var f2, g2, h2, k2;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports2.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports2.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a2 = exports2.unstable_now();
          t2(true, a2);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      t2 !== null ? setTimeout(f2, 0, a2) : (t2 = a2, setTimeout(w2, 0));
    };
    g2 = function(a2, b2) {
      u2 = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports2.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports2.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports2.unstable_shouldYield = function() {
      return exports2.unstable_now() >= E2;
    };
    k2 = function() {
    };
    exports2.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a2 = exports2.unstable_now();
        E2 = a2 + D2;
        try {
          B2(true, a2) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a2) {
      B2 = a2;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a2, b2) {
      C2 = x2(function() {
        a2(exports2.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (e2 !== void 0 && 0 < I2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J2(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K2(a2) {
    var b2 = a2[0];
    if (b2 !== void 0) {
      var c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a:
          for (var d2 = 0, e2 = a2.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a2[m2], v2 = m2 + 1, r2 = a2[v2];
            if (n2 !== void 0 && 0 > I2(n2, c2))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a2[d2] = r2, a2[v2] = c2, d2 = v2) : (a2[d2] = n2, a2[m2] = c2, d2 = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c2))
              a2[d2] = r2, a2[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a2) {
    for (var b2 = J2(M2); b2 !== null; ) {
      if (b2.callback === null)
        K2(M2);
      else if (b2.startTime <= a2)
        K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
      else
        break;
      b2 = J2(M2);
    }
  }
  function U2(a2) {
    S2 = false;
    T2(a2);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f2(V2);
      else {
        var b2 = J2(M2);
        b2 !== null && g2(U2, b2.startTime - a2);
      }
  }
  function V2(a2, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q2 = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b2) || a2 && !exports2.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if (typeof d2 === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports2.unstable_now();
          typeof e2 === "function" ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
          T2(b2);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q2 = false;
    }
  }
  var W2 = k2;
  exports2.unstable_IdlePriority = 5;
  exports2.unstable_ImmediatePriority = 1;
  exports2.unstable_LowPriority = 4;
  exports2.unstable_NormalPriority = 3;
  exports2.unstable_Profiling = null;
  exports2.unstable_UserBlockingPriority = 2;
  exports2.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports2.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f2(V2));
  };
  exports2.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports2.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports2.unstable_next = function(a2) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a2();
    } finally {
      P2 = c2;
    }
  };
  exports2.unstable_pauseExecution = function() {
  };
  exports2.unstable_requestPaint = W2;
  exports2.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = P2;
    P2 = a2;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports2.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports2.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: N2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, H2(M2, a2), J2(L2) === null && a2 === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a2.sortIndex = e2, H2(L2, a2), R2 || Q2 || (R2 = true, f2(V2)));
    return a2;
  };
  exports2.unstable_wrapCallback = function(a2) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = require$$0, m$1 = objectAssign, r$1 = scheduler.exports;
function y$1(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y$1(227));
var ba = new Set(), ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D[b2] = new B(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D[a2] = new B(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D[a2] = new B(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D[a2] = new B(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c2, d2) {
  var e2 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = e2 !== null ? e2.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? la(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a2();
    }
  } catch (k2) {
    if (k2 && d2 && typeof k2.stack === "string") {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return m$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Sa(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function $a(a2, b2) {
  b2 = b2.checked;
  b2 != null && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
function db(a2) {
  var b2 = "";
  aa.Children.forEach(a2, function(a3) {
    a3 != null && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = m$1({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y$1(91));
  return m$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(y$1(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y$1(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb, ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = sb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var ub = m$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y$1(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y$1(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y$1(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y$1(62));
  }
}
function wb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y$1(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c2, d2, e2) {
  return a2(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a2, b2, c2) {
  if (Lb)
    return a2(b2, c2);
  Lb = true;
  try {
    return Jb(a2, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Db(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(y$1(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
function Rb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a2) {
  Sb = true;
  Tb = a2;
} };
function Xb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y$1(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 1026) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y$1(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (b2 === null)
      throw Error(y$1(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a2;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y$1(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y$1(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y$1(190));
  }
  if (c2.tag !== 3)
    throw Error(y$1(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c2 = a2.alternate; b2 !== null; ) {
    if (b2 === a2 || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = new Map(), oc = new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b2, c2, d2, e2) {
  return { blockedOn: a2, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c2, d2, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = rc(b2, c2, d2, e2, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (b2 !== null) {
    var c2 = Zb(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = $b(c2), b2 !== null) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            r$1.unstable_runWithPriority(a2.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.hydrate) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 !== null)
      return b2 = Cb(c2), b2 !== null && fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c2) {
  xc(a2) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c2 !== null) {
        a2.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], c2.blockedOn === null); )
    vc(c2), c2.blockedOn === null && pc.shift();
}
function Dc(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a2] = b2[c2];
  return a2;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map(), Nc = new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a2, b2) {
  for (var c2 = 0; c2 < a2.length; c2 += 2) {
    var d2 = a2[c2], e2 = a2[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r$1.unstable_now;
Qc();
var F = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F = 15, 1;
  if ((2 & a2) !== 0)
    return F = 14, 2;
  if ((4 & a2) !== 0)
    return F = 13, 4;
  var b2 = 24 & a2;
  if (b2 !== 0)
    return F = 12, b2;
  if ((a2 & 32) !== 0)
    return F = 11, 32;
  b2 = 192 & a2;
  if (b2 !== 0)
    return F = 10, b2;
  if ((a2 & 256) !== 0)
    return F = 9, 256;
  b2 = 3584 & a2;
  if (b2 !== 0)
    return F = 8, b2;
  if ((a2 & 4096) !== 0)
    return F = 7, 4096;
  b2 = 4186112 & a2;
  if (b2 !== 0)
    return F = 6, b2;
  b2 = 62914560 & a2;
  if (b2 !== 0)
    return F = 5, b2;
  if (a2 & 67108864)
    return F = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F = 3, 134217728;
  b2 = 805306368 & a2;
  if (b2 !== 0)
    return F = 2, b2;
  if ((1073741824 & a2) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y$1(358, a2));
  }
}
function Uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return F = 0;
  var d2 = 0, e2 = 0, f2 = a2.expiredLanes, g2 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (f2 !== 0)
    d2 = f2, e2 = F = 15;
  else if (f2 = c2 & 134217727, f2 !== 0) {
    var k2 = f2 & ~g2;
    k2 !== 0 ? (d2 = Rc(k2), e2 = F) : (h2 &= f2, h2 !== 0 && (d2 = Rc(h2), e2 = F));
  } else
    f2 = c2 & ~g2, f2 !== 0 ? (d2 = Rc(f2), e2 = F) : h2 !== 0 && (d2 = Rc(h2), e2 = F);
  if (d2 === 0)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
    Rc(b2);
    if (e2 <= F)
      return b2;
    F = e2;
  }
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y$1(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c2) {
  a2.pendingLanes |= b2;
  var d2 = b2 - 1;
  a2.suspendedLanes &= d2;
  a2.pingedLanes &= d2;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = true;
function gd(a2, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a2, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c2, d2) {
  ed(dd, hd.bind(null, a2, b2, c2, d2));
}
function hd(a2, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c2, d2), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c2, d2);
      if (f2 === null)
        e2 && sc(a2, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c2, d2);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c2, d2))
            return;
          sc(a2, d2);
        }
        jd(a2, b2, d2, null, c2);
      }
    }
  }
}
function yc(a2, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (e2 !== null) {
    var f2 = Zb(e2);
    if (f2 === null)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e2 = $b(f2);
        if (e2 !== null)
          return e2;
        e2 = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a2, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = m$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m$1({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = m$1({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = m$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m$1({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a2.type] : b2 === "textarea" ? true : false;
}
function ne(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if (a2 === "change")
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c2) {
  a2 === "focusin" ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b2) {
  if (a2 === "click")
    return te(b2);
}
function Fe(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a2[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c2 = Ke(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Te || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Yb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G(a2, b2) {
  var c2 = $e(b2), d2 = a2 + "__bubble";
  c2.has(d2) || (af(b2, a2, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c2, d2) {
  var e2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c2;
  a2 === "selectionchange" && c2.nodeType !== 9 && (f2 = c2.ownerDocument);
  if (d2 !== null && !b2 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a2, e2, b2), g2.add(h2));
}
function af(a2, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (e2 === void 0 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function jd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a2);
      if (h3 !== void 0) {
        var k3 = td, x2 = a2;
        switch (a2) {
          case "keypress":
            if (od(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = (b2 & 4) !== 0, z2 = !w2 && a2 === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k3 = null, x2 = d3;
          if (k3 !== x2) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k3 == null ? h3 : ue(k3);
            q2 = x2 == null ? h3 : ue(x2);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x2)
              b: {
                w2 = k3;
                u2 = x2;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && hf(g3, h3, k3, w2, false);
            x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var J2 = ve;
        else if (me(h3))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a2, d3))) {
          ne(g3, J2, c2, e3);
          break a;
        }
        K2 && K2(a2, h3, d3);
        a2 === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K2 = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var Q2;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a2, c2) && (L2 = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c2.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c2), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
    }
    se(g3, b2);
  });
}
function ef(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Ob(a2, c2), f2 != null && d2.unshift(ef(a2, f2, e2)), f2 = Ob(a2, b2), f2 != null && d2.push(ef(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Ob(c2, f2), k2 != null && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), k2 != null && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return { $$typeof: Ga, toString: a2, valueOf: a2 };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c2 = a2[wf])
            return c2;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y$1(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  b2 === void 0 && (b2 = a2[yf] = new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a2) {
  return { current: a2 };
}
function H(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a2, b2, c2) {
  if (M.current !== Cf)
    throw Error(y$1(168));
  I(M, b2);
  I(N, c2);
}
function If(a2, b2, c2) {
  var d2 = a2.stateNode;
  a2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a2))
      throw Error(y$1(108, Ra(b2) || "Unknown", e2));
  return m$1({}, c2, d2);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a2);
  I(N, N.current);
  return true;
}
function Kf(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(y$1(169));
  c2 ? (a2 = If(a2, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
  I(N, c2);
}
var Lf = null, Mf = null, Nf = r$1.unstable_runWithPriority, Of = r$1.unstable_scheduleCallback, Pf = r$1.unstable_cancelCallback, Qf = r$1.unstable_shouldYield, Rf = r$1.unstable_requestPaint, Sf = r$1.unstable_now, Tf = r$1.unstable_getCurrentPriorityLevel, Uf = r$1.unstable_ImmediatePriority, Vf = r$1.unstable_UserBlockingPriority, Wf = r$1.unstable_NormalPriority, Xf = r$1.unstable_LowPriority, Yf = r$1.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y$1(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y$1(332));
  }
}
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c2) {
  a2 = fg(a2);
  return Of(a2, b2, c2);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c2 = b2[a2];
          do
            c2 = c2(true);
          while (c2 !== null);
        }
      });
      ag = null;
    } catch (c2) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = m$1({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; a2 !== null; ) {
    var c2 = a2.alternate;
    if ((a2.childLanes & b2) === b2)
      if (c2 === null || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a2.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a2, b2 = 1073741823;
    b2 = { context: a2, observedBits: b2, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y$1(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c2 = a2.pending;
    c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (f2 !== null) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a2, x2 = f2;
          h2 = b2;
          p2 = c2;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m$1({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a2.flags |= 32, h2 = e2.effects, h2 === null ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a2.lanes = g2;
    a2.memoizedState = A2;
  }
}
function Eg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(y$1(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : m$1({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e2 = Ig(a2), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e2, d2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e2 = Ig(a2), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e2, d2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Hg(), d2 = Ig(a2), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a2, e2);
  Jg(a2, d2, c2);
} };
function Lg(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a2, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Ef(a2, e2) : Cf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e2.context = Ef(a2, f2));
  Cg(a2, c2, e2, d2);
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a2, b2, f2, c2), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(y$1(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y$1(147, a2));
      var e2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        a3 === null ? delete b3[e2] : b3[e2] = a3;
      };
      b2._stringRef = e2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(y$1(284));
    if (!c2._owner)
      throw Error(y$1(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if (a2.type !== "textarea")
    throw Error(y$1(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.lastEffect;
      d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    if (b3 !== null && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a3, b3, c3), d3.return = a3, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Qg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function A2(a3, b3, c3) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Qg(a3, null, b3), c3.return = a3, c3;
        case ta:
          return b3 = Wg(b3, a3.mode, c3), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p2(a3, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" || typeof c3 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua ? n2(a3, b3, c3.props.children, d3, e3) : k2(a3, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return e3 !== null ? null : n2(a3, b3, c3, d3, null);
      Rg(a3, c3);
    }
    return null;
  }
  function C2(a3, b3, c3, d3, e3) {
    if (typeof d3 === "string" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case sa:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a3, d3.props.children, e3, d3.key) : k2(b3, a3, d3, e3);
        case ta:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x2(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a2 && u2 && n3.alternate === null && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), q2 !== null && (a2 && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y$1(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y$1(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a2 && u2 && w3.alternate === null && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), n3 !== null && (a2 && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    return l3;
  }
  return function(a3, d3, f3, h3) {
    var k3 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k3 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; k3 !== null; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a3, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a3, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a3, k3, f3);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                }
                c2(a3, k3);
                break;
              } else
                b2(a3, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case ta:
          a: {
            for (k3 = f3.key; d3 !== null; ) {
              if (d3.key === k3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Ug(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3);
    if (Pg(f3))
      return x2(a3, d3, f3, h3);
    if (La(f3))
      return w2(a3, d3, f3, h3);
    l3 && Rg(a3, f3);
    if (typeof f3 === "undefined" && !k3)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y$1(152, Ra(a3.type) || "Component"));
      }
    return c2(a3, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y$1(174));
  return a2;
}
function eh(a2, b2) {
  I(ch, b2);
  I(bh, a2);
  I(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a2.type);
  b2 !== c2 && (I(bh, a2), I(ah, c2));
}
function hh(a2) {
  bh.current === a2 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a2, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  c2.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c2, a2.lastEffect = c2) : a2.firstEffect = a2.lastEffect = c2;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c2);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y$1(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y$1(321));
}
function Bh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He(a2[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a2, b2, c2, d2, e2, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y$1(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y$1(300));
  return a2;
}
function Hh() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (S === null) {
    var a2 = R.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a2;
  else {
    if (a2 === null)
      throw Error(y$1(310));
    S = a2;
    a2 = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = S, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (k2 !== null && k2 !== e2);
    h2 === null ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y$1(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a2, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (e2 !== null)
    a2 = e2 === d2;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a2)
    return c2(b2._source);
  th.push(b2);
  throw Error(y$1(350));
}
function Nh(a2, b2, c2, d2) {
  var e2 = U;
  if (e2 === null)
    throw Error(y$1(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a2.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a2.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g2, a3)) {
      a3 = c2(b2._source);
      He(n2, a3) || (l2(a3), a3 = Ig(w2), e2.mutableReadLanes |= a3 & e2.pendingLanes);
      a3 = e2.mutableReadLanes;
      e2.entangledLanes |= a3;
      for (var d3 = e2.entanglements, h3 = a3; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a3 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a3(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x2, b2) && He(A2, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a2.dispatch = l2 = Oh.bind(null, R, a2), k2.queue = a2, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a2, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a2, b2, c2);
}
function Qh(a2) {
  var b2 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R.updateQueue;
  b2 === null ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c2, d2) {
  var e2 = Hh();
  R.flags |= a2;
  e2.memoizedState = Rh(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function Vh(a2, b2, c2, d2) {
  var e2 = Ih();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R.flags |= a2;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c2);
}
function ai() {
}
function bi(a2, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a2(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a2, b2, c2) {
  var d2 = Hg(), e2 = Ig(a2), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a2.alternate;
  if (a2 === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a2, b2) {
  Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return Uh(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Hh();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [d2.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Qh(a2), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Qh(false), b2 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b2];
}, useMutableSource: function(a2, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c2 };
  return Nh(d2, a2, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b2 = uf(function() {
      a2 || (a2 = true, c2("r:" + (tf++).toString(36)));
      throw Error(y$1(355));
    }), c2 = Qh(b2)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c2("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a2, b2, c2, d2) {
  b2.child = a2 === null ? Zg(b2, null, c2, d2) : Yg(b2, a2.child, c2, d2);
}
function gi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a2, b2, c2, d2, f2, e2);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
  b2.flags |= 1;
  fi(a2, b2, d2, e2);
  return b2.child;
}
function ii(a2, b2, c2, d2, e2, f2) {
  if (a2 === null) {
    var g2 = c2.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = g2, ki(a2, b2, g2, d2, e2, f2);
    a2 = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g2 = a2.child;
  if ((e2 & f2) === 0 && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Je, c2(e2, d2) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c2, d2, e2, f2) {
  if (a2 !== null && Je(a2.memoizedProps, d2) && a2.ref === b2.ref)
    if (ug = false, (f2 & e2) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c2, d2, f2);
}
function mi(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, f2 !== null ? f2.baseLanes : c2);
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, ni(b2, a2), null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a2, b2, e2, c2);
  return b2.child;
}
function oi(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 128;
}
function li(a2, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a2, b2, c2, d2, f2, e2);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
  b2.flags |= 1;
  fi(a2, b2, c2, e2);
  return b2.child;
}
function pi(a2, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N.current || wg ? (typeof n2 === "function" && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x2 = b2.memoizedState;
    h2 !== A2 || p2 !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x2, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a2, b2, c2, d2, f2, e2);
}
function qi(a2, b2, c2, d2, e2, f2) {
  oi(a2, b2);
  var g2 = (b2.flags & 64) !== 0;
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a2, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2;
  (g2 = (b2.flags & 64) !== 0) || (g2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  g2 ? (f2 = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e2 |= 1);
  I(P, e2 & 1);
  if (a2 === null) {
    d2.fallback !== void 0 && ph(b2);
    a2 = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a2;
    if (typeof d2.unstable_expectedLoadTime === "number")
      return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c2 = vi({ mode: "visible", children: a2 }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (a2.memoizedState !== null) {
    if (f2)
      return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a2, b2, c2, d2) {
  var e2 = a2.mode, f2 = a2.child;
  b2 = { mode: "hidden", children: b2 };
  (e2 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a2;
  c2.return = a2;
  f2.sibling = c2;
  a2.child = f2;
  return c2;
}
function xi(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  (b2.mode & 2) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c2;
}
function wi(a2, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a2.child;
  a2 = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  (f2 & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  a2 !== null ? d2 = Tg(a2, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c2, d2, e2, f2) {
  var g2 = a2.memoizedState;
  g2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a2, b2, d2.children, c2);
  d2 = P.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c2);
          else if (a2.tag === 19)
            yi(a2, c2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  I(P, d2);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && ih(a2) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && ih(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if ((c2 & b2.childLanes) !== 0) {
    if (a2 !== null && b2.child !== a2.child)
      throw Error(y$1(153));
    if (b2.child !== null) {
      a2 = b2.child;
      c2 = Tg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; a2.sibling !== null; )
        a2 = a2.sibling, c2 = c2.sibling = Tg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a2, e2);
        d2 = eb(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = m$1({}, e2, { value: void 0 });
        d2 = m$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G("scroll", a2), f2 || h2 === k2 || (f2 = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Di(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(y$1(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G("cancel", d2);
              G("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d2);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G(Xe[a2], d2);
              break;
            case "source":
              G("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d2);
              G("load", d2);
              break;
            case "details":
              G("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G("invalid", d2);
          }
          vb(c2, f2);
          a2 = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], g2 === "children" ? typeof e2 === "string" ? d2.textContent !== e2 && (a2 = ["children", e2]) : typeof e2 === "number" && d2.textContent !== "" + e2 && (a2 = ["children", "" + e2]) : ca.hasOwnProperty(g2) && e2 != null && g2 === "onScroll" && G("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = jf);
          }
          d2 = a2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === kb.html && (a2 = lb(c2));
          a2 === kb.html ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[wf] = b2;
          a2[xf] = d2;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G("cancel", a2);
              G("close", a2);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a2);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G(Xe[e2], a2);
              e2 = d2;
              break;
            case "source":
              G("error", a2);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a2);
              G("load", a2);
              e2 = d2;
              break;
            case "details":
              G("toggle", a2);
              e2 = d2;
              break;
            case "input":
              Za(a2, d2);
              e2 = Ya(a2, d2);
              G("invalid", a2);
              break;
            case "option":
              e2 = eb(a2, d2);
              break;
            case "select":
              a2._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m$1({}, d2, { value: void 0 });
              G("invalid", a2);
              break;
            case "textarea":
              hb(a2, d2);
              e2 = gb(a2, d2);
              G("invalid", a2);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              f2 === "style" ? tb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && pb(a2, k2) : typeof k2 === "number" && pb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && G("scroll", a2) : k2 != null && qa(a2, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a2);
              cb(a2, d2, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d2.value != null && a2.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a2.multiple = !!d2.multiple;
              f2 = d2.value;
              f2 != null ? fb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && fb(a2, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              typeof e2.onClick === "function" && (a2.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Ei(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(y$1(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H(P);
      d2 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c2 = a2.memoizedState !== null;
      if (d2 && !c2 && (b2.mode & 2) !== 0)
        if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d2 = b2.memoizedState;
      if (d2 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g2 = d2.rendering;
      if (g2 === null)
        if (f2)
          Fi(d2, false);
        else {
          if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = ih(a2);
              if (g2 !== null) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d2.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          d2.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a2 = ih(g2), a2 !== null) {
            if (b2.flags |= 64, f2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d2.renderingStartTime > Ji && c2 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return d2.tail !== null ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c2.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y$1(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a2.flags;
      if ((b2 & 64) !== 0)
        throw Error(y$1(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H(P), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a2, b2);
  };
  return c2;
}
function Si(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a2, b2);
      return d2(e2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    typeof d2 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c2) {
        Wi(a2, c2);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a2 !== null) {
        var c2 = a2.memoizedProps, d2 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y$1(163));
}
function Yi(a2, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d2 = a2.create;
            a2.destroy = d2();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          var e2 = a2;
          d2 = e2.next;
          e2 = e2.tag;
          (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Zi(c2, a2), $i(c2, a2));
          a2 = d2;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c2.stateNode;
      c2.flags & 4 && (b2 === null ? a2.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a2.componentDidUpdate(d2, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b2 = c2.updateQueue;
      b2 !== null && Eg(c2, b2, a2);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (b2 !== null) {
        a2 = null;
        if (c2.child !== null)
          switch (c2.child.tag) {
            case 5:
              a2 = c2.child.stateNode;
              break;
            case 1:
              a2 = c2.child.stateNode;
          }
        Eg(c2, b2, a2);
      }
      return;
    case 5:
      a2 = c2.stateNode;
      b2 === null && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y$1(163));
}
function aj(a2, b2) {
  for (var c2 = a2; ; ) {
    if (c2.tag === 5) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = e2 !== void 0 && e2 !== null && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (c2.tag === 6)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a2) && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === a2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c2 = a2 = a2.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (e2 !== void 0)
            if ((d2 & 4) !== 0)
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y$1(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y$1(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a2; ; ) {
        for (; c2.sibling === null; ) {
          if (c2.return === null || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
          if (c2.flags & 2)
            continue b;
          if (c2.child === null || c2.tag === 4)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a2, c2, b2) : hj(a2, c2, b2);
}
function gj(a2, b2, c2) {
  var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      gj(a2, b2, c2), a2 = a2.sibling;
}
function hj(a2, b2, c2) {
  var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      hj(a2, b2, c2), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (d2 === null)
            throw Error(y$1(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (c2.tag === 5 || c2.tag === 6) {
      a:
        for (var g2 = a2, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), k2.child !== null && k2.tag !== 4)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; k2.sibling === null; ) {
              if (k2.return === null || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (c2.tag === 4) {
      if (c2.child !== null) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a2, c2), c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
      c2.tag === 4 && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = c2 !== null ? c2.lastEffect : null;
      if (c2 !== null) {
        var d2 = c2 = c2.next;
        do
          (d2.tag & 3) === 3 && (a2 = d2.destroy, d2.destroy = void 0, a2 !== void 0 && a2()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (c2 != null) {
        d2 = b2.memoizedProps;
        var e2 = a2 !== null ? a2.memoizedProps : d2;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c2[xf] = d2;
          a2 === "input" && d2.type === "radio" && d2.name != null && $a(c2, d2);
          wb(a2, e2);
          b2 = wb(a2, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            g2 === "style" ? tb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c2, h2) : g2 === "children" ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a2 = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, f2 != null ? fb(c2, !!d2.multiple, f2, false) : a2 !== !!d2.multiple && (d2.defaultValue != null ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y$1(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y$1(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a2, b2) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y$1(185));
  a2 = Kj(a2, b2);
  if (a2 === null)
    return null;
  $c(a2, b2, c2);
  a2 === U && (Hi |= b2, V === 4 && Ii(a2, W));
  var d2 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c2), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c2));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Mj(a2, b2) {
  for (var c2 = a2.callbackNode, d2 = a2.suspendedLanes, e2 = a2.pingedLanes, f2 = a2.expirationTimes, g2 = a2.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k2 & d2) === 0 || (k2 & e2) !== 0) {
        l2 = b2;
        Rc(k2);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a2, a2 === U ? W : 0);
  b2 = F;
  if (d2 === 0)
    c2 !== null && (c2 !== Zf && Pf(c2), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c2 !== null) {
      if (a2.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    b2 === 15 ? (c2 = Lj.bind(null, a2), ag === null ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : b2 === 14 ? c2 = hg(99, Lj.bind(null, a2)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y$1(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c2 = Uc(a2, a2 === U ? W : 0);
  if (c2 === 0)
    return null;
  var d2 = c2;
  var e2 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a2 || W !== d2)
    wj(), Qj(a2, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e2;
  Y !== null ? d2 = 0 : (U = null, W = 0, d2 = V);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d2 !== 0) {
    d2 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c2 = Wc(a2), c2 !== 0 && (d2 = Tj(a2, c2)));
    if (d2 === 1)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c2), Mj(a2, O()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y$1(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O(), 10 < d2)) {
          if (Uc(a2, 0) !== 0)
            break;
          e2 = a2.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e2;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d2);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a2.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c2);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y$1(329));
    }
  }
  Mj(a2, O());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a2) {
  if ((X & 48) !== 0)
    throw Error(y$1(327));
  Oj();
  if (a2 === U && (a2.expiredLanes & W) !== 0) {
    var b2 = W;
    var c2 = Tj(a2, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c2 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c2 = Tj(a2, b2);
  a2.tag !== 0 && c2 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c2 = Tj(a2, b2)));
  if (c2 === 1)
    throw c2 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O()), c2;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c2 = X;
  X |= 1;
  try {
    return a2(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c2 = X;
  X &= -2;
  X |= 8;
  try {
    return a2(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, pf(c2));
  if (Y !== null)
    for (c2 = Y.return; c2 !== null; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U = a2;
  Y = Tg(a2.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c2 === null || c2.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k2 = new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), k2 === void 0 && (k2 = new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J2 = Pi(p2, f2, b2);
              Bg(p2, J2);
              break a;
            case 1:
              f2 = k2;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L2 = Si(p2, f2, b2);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && c2 !== null && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b2) {
  var c2 = X;
  X |= 16;
  var d2 = Pj();
  U === a2 && W === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a2, e2);
    }
  while (1);
  qg();
  X = c2;
  oj.current = d2;
  if (Y !== null)
    throw Error(y$1(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Zj(a2) : Y = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 2048) === 0) {
      c2 = Gi(c2, b2, qj);
      if (c2 !== null) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (qj & 1073741824) !== 0 || (c2.mode & 4) === 0) {
        for (var d2 = 0, e2 = c2.child; e2 !== null; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (c2 !== null) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y$1(327));
  var c2 = a2.finishedWork;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(y$1(177));
  a2.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a2.pendingLanes & ~e2;
  a2.pendingLanes = e2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e2;
  a2.mutableReadLanes &= e2;
  a2.entangledLanes &= e2;
  e2 = a2.entanglements;
  for (var g2 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d2 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U && (Y = U = null, W = 0);
  1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (d2 !== null) {
    e2 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k2 || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d2;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d2;
    do
      try {
        for (g2 = a2; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J2 = h2.alternate;
              dj(h2);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v2.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le(t2, J2), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J2 > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c2;
    Z = d2;
    do
      try {
        for (t2 = a2; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y$1(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e2;
  } else
    a2.current = c2;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z = d2; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b2;
  d2 = a2.pendingLanes;
  d2 === 0 && (Ti = null);
  d2 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, (c2.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a2 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a2, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y$1(331));
  var b2 = X;
  X |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k2) {
        if (f2 === null)
          throw Error(y$1(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (f2 === null)
        throw Error(y$1(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a2.current.firstEffect; h2 !== null; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X = b2;
  ig();
  return true;
}
function gk(a2, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (a2.tag === 3)
    gk(a2, a2, b2);
  else
    for (var c2 = a2.return; c2 !== null; ) {
      if (c2.tag === 3) {
        gk(c2, a2, b2);
        break;
      } else if (c2.tag === 1) {
        var d2 = c2.stateNode;
        if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
          a2 = Mi(b2, a2);
          var e2 = Si(c2, a2, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (c2 !== null)
            $c(c2, 1, e2), Mj(c2, e2);
          else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  U === a2 && (W & c2) === c2 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c2);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c2 = a2.stateNode;
  c2 !== null && c2.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c2 = Hg();
  a2 = Kj(a2, b2);
  a2 !== null && ($c(a2, b2, c2), Mj(a2, c2));
}
var ck;
ck = function(a2, b2, c2) {
  var d2 = b2.lanes;
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c2 & d2) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c2 & b2.child.childLanes) !== 0)
              return ti(a2, b2, c2);
            I(P, P.current & 1);
            b2 = hi(a2, b2, c2);
            return b2 !== null ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d2 = (c2 & b2.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d2)
              return Ai(a2, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I(P, P.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c2);
      }
      return hi(a2, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e2 = Ef(b2, M.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a2, e2, c2);
      b2.flags |= 1;
      if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b2, d2, g2, a2);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a2, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a2 = lg(e2, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a2, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a2, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a2, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a2), d2, c2);
            break a;
        }
        throw Error(y$1(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a2, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (a2 === null || d2 === null)
        throw Error(y$1(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = e2 !== null ? e2.element : null;
      yg(a2, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a2, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e2.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e2 = 0; e2 < a2.length; e2 += 2)
              f2 = a2[e2], f2._workInProgressVersionPrimary = a2[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a2, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a2 === null && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : f2 !== null && nf(d2, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && ph(b2), null;
    case 13:
      return ti(a2, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d2, c2) : fi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a2, b2, d2, e2, c2);
    case 7:
      return fi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e2.children && !N.current) {
              b2 = hi(a2, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k2 = h2.dependencies;
              if (k2 !== null) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; l2 !== null; ) {
                  if (l2.context === d2 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(e2, f2.unstable_observedBits), d2 = d2(e2), b2.flags |= 1, fi(a2, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a2, b2, e2, f2, d2, c2);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a2, c2);
    case 19:
      return Ai(a2, b2, c2);
    case 23:
      return mi(a2, b2, c2);
    case 24:
      return mi(a2, b2, c2);
  }
  throw Error(y$1(156, b2.tag));
};
function ik(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c2, d2) {
  return new ik(a2, b2, c2, d2);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = nh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Vg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a2 = nh(12, c2, b2, e2 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c2, b2, e2), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c2, b2, e2), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a2 = nh(24, c2, b2, e2), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y$1(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c2, d2) {
  a2 = nh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function vi(a2, b2, c2, d2) {
  a2 = nh(23, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  return a2;
}
function Ug(a2, b2, c2) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Wg(a2, b2, c2) {
  b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function jk(a2, b2, c2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function lk(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || c2.tag !== 1)
          throw Error(y$1(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y$1(171));
      }
      if (c2.tag === 1) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c2) {
  var d2 = c2 != null && c2.hydrationOptions != null && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a2, b2, c2 != null && c2.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a2[ff] = c2.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++) {
      b2 = d2[a2];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      c2.mutableSourceEagerHydrationData == null ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a2.lastChild; )
      a2.removeChild(c2);
  return new qk(a2, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = mk(g2);
        h2.call(a3);
      };
    }
    lk(b2, g2, a2, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var k2 = e2;
      e2 = function() {
        var a3 = mk(g2);
        k2.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g2, a2, e2);
    });
  }
  return mk(g2);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg(), c2 = Ig(a2);
    Jg(a2, c2, b2);
    ok(a2, c2);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      ab(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y$1(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c2, d2, e2) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a2.bind(null, b2, c2, d2, e2));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c2 = X;
  X |= 2;
  try {
    return a2(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y$1(200));
  return kk(a2, b2, null, c2);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y$1(188));
    throw Error(y$1(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2, b2) {
  var c2 = X;
  if ((c2 & 48) !== 0)
    return a2(b2);
  X |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a2, b2, true, c2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y$1(200));
  return tk(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y$1(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y$1(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y$1(38));
  return tk(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
var FUNC_ERROR_TEXT$3 = "Expected a function";
var HASH_UNDEFINED$6 = "__lodash_hash_undefined__";
var INFINITY$5 = 1 / 0;
var funcTag$6 = "[object Function]", genTag$4 = "[object GeneratorFunction]", symbolTag$6 = "[object Symbol]";
var reIsDeepProp$2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$2 = /^\w*$/, reLeadingDot$1 = /^\./, rePropName$3 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar$3 = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar$3 = /\\(\\)?/g;
var reIsHostCtor$3 = /^\[object .+?Constructor\]$/;
var freeGlobal$5 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf$3 = typeof self == "object" && self && self.Object === Object && self;
var root$c = freeGlobal$5 || freeSelf$3 || Function("return this")();
function getValue$4(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function isHostObject$1(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e2) {
    }
  }
  return result;
}
var arrayProto$3 = Array.prototype, funcProto$6 = Function.prototype, objectProto$s = Object.prototype;
var coreJsData$5 = root$c["__core-js_shared__"];
var maskSrcKey$3 = function() {
  var uid = /[^.]+$/.exec(coreJsData$5 && coreJsData$5.keys && coreJsData$5.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
var funcToString$6 = funcProto$6.toString;
var hasOwnProperty$m = objectProto$s.hasOwnProperty;
var objectToString$4 = objectProto$s.toString;
var reIsNative$3 = RegExp("^" + funcToString$6.call(hasOwnProperty$m).replace(reRegExpChar$3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var Symbol$9 = root$c.Symbol, splice$3 = arrayProto$3.splice;
var Map$8 = getNative$a(root$c, "Map"), nativeCreate$8 = getNative$a(Object, "create");
var symbolProto$5 = Symbol$9 ? Symbol$9.prototype : void 0, symbolToString$4 = symbolProto$5 ? symbolProto$5.toString : void 0;
function Hash$4(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function hashClear$4() {
  this.__data__ = nativeCreate$8 ? nativeCreate$8(null) : {};
}
function hashDelete$4(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet$4(key) {
  var data = this.__data__;
  if (nativeCreate$8) {
    var result = data[key];
    return result === HASH_UNDEFINED$6 ? void 0 : result;
  }
  return hasOwnProperty$m.call(data, key) ? data[key] : void 0;
}
function hashHas$4(key) {
  var data = this.__data__;
  return nativeCreate$8 ? data[key] !== void 0 : hasOwnProperty$m.call(data, key);
}
function hashSet$4(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate$8 && value === void 0 ? HASH_UNDEFINED$6 : value;
  return this;
}
Hash$4.prototype.clear = hashClear$4;
Hash$4.prototype["delete"] = hashDelete$4;
Hash$4.prototype.get = hashGet$4;
Hash$4.prototype.has = hashHas$4;
Hash$4.prototype.set = hashSet$4;
function ListCache$7(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear$4() {
  this.__data__ = [];
}
function listCacheDelete$4(key) {
  var data = this.__data__, index2 = assocIndexOf$7(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$3.call(data, index2, 1);
  }
  return true;
}
function listCacheGet$4(key) {
  var data = this.__data__, index2 = assocIndexOf$7(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas$4(key) {
  return assocIndexOf$7(this.__data__, key) > -1;
}
function listCacheSet$4(key, value) {
  var data = this.__data__, index2 = assocIndexOf$7(data, key);
  if (index2 < 0) {
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
ListCache$7.prototype.clear = listCacheClear$4;
ListCache$7.prototype["delete"] = listCacheDelete$4;
ListCache$7.prototype.get = listCacheGet$4;
ListCache$7.prototype.has = listCacheHas$4;
ListCache$7.prototype.set = listCacheSet$4;
function MapCache$6(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear$4() {
  this.__data__ = {
    "hash": new Hash$4(),
    "map": new (Map$8 || ListCache$7)(),
    "string": new Hash$4()
  };
}
function mapCacheDelete$4(key) {
  return getMapData$7(this, key)["delete"](key);
}
function mapCacheGet$4(key) {
  return getMapData$7(this, key).get(key);
}
function mapCacheHas$4(key) {
  return getMapData$7(this, key).has(key);
}
function mapCacheSet$4(key, value) {
  getMapData$7(this, key).set(key, value);
  return this;
}
MapCache$6.prototype.clear = mapCacheClear$4;
MapCache$6.prototype["delete"] = mapCacheDelete$4;
MapCache$6.prototype.get = mapCacheGet$4;
MapCache$6.prototype.has = mapCacheHas$4;
MapCache$6.prototype.set = mapCacheSet$4;
function assocIndexOf$7(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$5(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseGet$3(object2, path) {
  path = isKey$5(path, object2) ? [path] : castPath$4(path);
  var index2 = 0, length = path.length;
  while (object2 != null && index2 < length) {
    object2 = object2[toKey$7(path[index2++])];
  }
  return index2 && index2 == length ? object2 : void 0;
}
function baseIsNative$4(value) {
  if (!isObject$8(value) || isMasked$4(value)) {
    return false;
  }
  var pattern = isFunction$6(value) || isHostObject$1(value) ? reIsNative$3 : reIsHostCtor$3;
  return pattern.test(toSource$5(value));
}
function baseToString$4(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol$6(value)) {
    return symbolToString$4 ? symbolToString$4.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$5 ? "-0" : result;
}
function castPath$4(value) {
  return isArray$d(value) ? value : stringToPath$5(value);
}
function getMapData$7(map2, key) {
  var data = map2.__data__;
  return isKeyable$4(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function getNative$a(object2, key) {
  var value = getValue$4(object2, key);
  return baseIsNative$4(value) ? value : void 0;
}
function isKey$5(value, object2) {
  if (isArray$d(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$6(value)) {
    return true;
  }
  return reIsPlainProp$2.test(value) || !reIsDeepProp$2.test(value) || object2 != null && value in Object(object2);
}
function isKeyable$4(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked$4(func) {
  return !!maskSrcKey$3 && maskSrcKey$3 in func;
}
var stringToPath$5 = memoize$4(function(string2) {
  string2 = toString$9(string2);
  var result = [];
  if (reLeadingDot$1.test(string2)) {
    result.push("");
  }
  string2.replace(rePropName$3, function(match, number2, quote, string3) {
    result.push(quote ? string3.replace(reEscapeChar$3, "$1") : number2 || match);
  });
  return result;
});
function toKey$7(value) {
  if (typeof value == "string" || isSymbol$6(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$5 ? "-0" : result;
}
function toSource$5(func) {
  if (func != null) {
    try {
      return funcToString$6.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
function memoize$4(func, resolver) {
  if (typeof func != "function" || resolver && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize$4.Cache || MapCache$6)();
  return memoized;
}
memoize$4.Cache = MapCache$6;
function eq$5(value, other) {
  return value === other || value !== value && other !== other;
}
var isArray$d = Array.isArray;
function isFunction$6(value) {
  var tag = isObject$8(value) ? objectToString$4.call(value) : "";
  return tag == funcTag$6 || tag == genTag$4;
}
function isObject$8(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike$8(value) {
  return !!value && typeof value == "object";
}
function isSymbol$6(value) {
  return typeof value == "symbol" || isObjectLike$8(value) && objectToString$4.call(value) == symbolTag$6;
}
function toString$9(value) {
  return value == null ? "" : baseToString$4(value);
}
function get$2(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet$3(object2, path);
  return result === void 0 ? defaultValue : result;
}
var lodash_get = get$2;
const RootElement = {
  elem: document.getElementById("react-checkout"),
  checkoutConfig: null,
  getElement() {
    return RootElement.elem;
  },
  getLanguage() {
    return lodash_get(RootElement.getCheckoutConfig(), "language");
  },
  getCurrency() {
    return lodash_get(RootElement.getCheckoutConfig(), "currency", {});
  },
  getFilePath() {
    return lodash_get(RootElement.getElement(), "dataset.static_file_path", "");
  },
  getPaymentConfig() {
    return lodash_get(RootElement.getCheckoutConfig(), "payment", {});
  },
  getDefaultCountryId() {
    return lodash_get(RootElement.getCheckoutConfig(), "defaultCountryId");
  },
  getStoreCode() {
    return lodash_get(RootElement.getCheckoutConfig(), "storeCode");
  },
  getBaseUrl() {
    let baseUrl2 = lodash_get(RootElement.getElement(), "dataset.base_url", "");
    if (baseUrl2.substr(-1) === "/") {
      baseUrl2 = baseUrl2.substr(0, baseUrl2.length - 1);
    }
    return baseUrl2;
  },
  getCheckoutConfig() {
    if (!RootElement.checkoutConfig) {
      RootElement.checkoutConfig = JSON.parse(lodash_get(RootElement.getElement(), "dataset.checkout_config", "{}") || "{}");
    }
    return RootElement.checkoutConfig;
  }
};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var o = 0;
function e$1(_2, e2, n2, t2, f2) {
  var l2, s2, u2 = {};
  for (s2 in e2)
    s2 == "ref" ? l2 = e2[s2] : u2[s2] = e2[s2];
  var a2 = { type: _2, props: u2, key: n2, ref: l2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o, __source: t2, __self: f2 };
  if (typeof _2 == "function" && (l2 = _2.defaultProps))
    for (s2 in l2)
      u2[s2] === void 0 && (u2[s2] = l2[s2]);
  return l$2.vnode && l$2.vnode(a2), a2;
}
function Card({
  children,
  bg: bg2,
  classes
}) {
  return /* @__PURE__ */ e$1("div", {
    className: `card w-full px-4 py-4 relative ${bg2 === "dark" ? "bg-container" : ""} ${bg2 === "darker" ? "bg-container-darker" : ""} ${bg2 === "white" ? "bg-white" : ""} ${classes}`,
    children
  });
}
Card.propTypes = {
  children: propTypes.exports.node,
  classes: propTypes.exports.string,
  bg: propTypes.exports.oneOf(["dark", "darker", "white", ""])
};
Card.defaultProps = {
  bg: "",
  classes: "",
  children: /* @__PURE__ */ e$1(d$2, {})
};
function ArrowSmDownIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 13l-5 5m0 0l-5-5m5 5V6"
  }));
}
function ArrowSmUpIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 11l5-5m0 0l5 5m-5-5v12"
  }));
}
function ClipboardCheckIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
  }));
}
function InformationCircleIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
function TruckIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
  }), /* @__PURE__ */ v$2("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
  }));
}
function Header(_a) {
  var _b = _a, {
    children,
    extra,
    small
  } = _b, props = __objRest(_b, [
    "children",
    "extra",
    "small"
  ]);
  return /* @__PURE__ */ e$1("header", __spreadProps(__spreadValues({
    role: "button",
    className: "flex items-center justify-between cursor-pointer select-none"
  }, props), {
    children: [/* @__PURE__ */ e$1("span", {
      className: `font-bold text-indigo ${small ? "text-sm" : "text-base"}`,
      children
    }), extra]
  }));
}
Header.propTypes = {
  extra: propTypes.exports.node,
  small: propTypes.exports.bool,
  children: propTypes.exports.node.isRequired
};
Header.defaultProps = {
  small: false,
  extra: /* @__PURE__ */ e$1(d$2, {})
};
function ToggleBox({
  children,
  title,
  show,
  small,
  hrLine
}) {
  const [open, setOpen] = l$1(show);
  const arrowContent = /* @__PURE__ */ e$1("div", {
    className: "flex items-center justify-center",
    children: [open && /* @__PURE__ */ e$1(ArrowSmUpIcon, {
      className: small ? "w-5 h-5" : "w-6 h-6"
    }), !open && /* @__PURE__ */ e$1(ArrowSmDownIcon, {
      className: small ? "w-5 h-5" : "w-6 h-6"
    })]
  });
  return /* @__PURE__ */ e$1("div", {
    children: [/* @__PURE__ */ e$1(Header, {
      small,
      extra: arrowContent,
      onClick: () => setOpen(!open),
      onKeyPress: () => setOpen(!open),
      children: title
    }), hrLine && open && /* @__PURE__ */ e$1("hr", {}), /* @__PURE__ */ e$1("div", {
      style: {
        display: open ? "block" : "none"
      },
      children
    })]
  });
}
ToggleBox.propTypes = {
  show: propTypes.exports.bool,
  small: propTypes.exports.bool,
  hrLine: propTypes.exports.bool,
  title: propTypes.exports.node.isRequired,
  children: propTypes.exports.node.isRequired
};
ToggleBox.defaultProps = {
  show: false,
  small: false,
  hrLine: false
};
function Button({
  children,
  click,
  variant,
  disable,
  size
}) {
  return /* @__PURE__ */ e$1("button", {
    className: `btn btn-${variant || "primary"}  btn-size-${size || "md"} ${disable && "opacity-50 pointer-events-none"}`,
    type: "button",
    onClick: click,
    disabled: disable,
    children
  });
}
Button.propTypes = {
  click: propTypes.exports.func,
  size: propTypes.exports.string,
  disable: propTypes.exports.bool,
  children: propTypes.exports.node.isRequired,
  variant: propTypes.exports.oneOf(["success", "warning", "primary", "secondary"])
};
Button.defaultProps = {
  size: "md",
  variant: "",
  disable: false,
  click: () => {
  }
};
var isArray$c = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== "undefined";
function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    var arrA = isArray$c(a2), arrB = isArray$c(b2), i2, length, key;
    if (arrA && arrB) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i2 = length; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2]))
          return false;
      return true;
    }
    if (arrA != arrB)
      return false;
    var dateA = a2 instanceof Date, dateB = b2 instanceof Date;
    if (dateA != dateB)
      return false;
    if (dateA && dateB)
      return a2.getTime() == b2.getTime();
    var regexpA = a2 instanceof RegExp, regexpB = b2 instanceof RegExp;
    if (regexpA != regexpB)
      return false;
    if (regexpA && regexpB)
      return a2.toString() == b2.toString();
    var keys2 = keyList(a2);
    length = keys2.length;
    if (length !== keyList(b2).length)
      return false;
    for (i2 = length; i2-- !== 0; )
      if (!hasProp.call(b2, keys2[i2]))
        return false;
    if (hasElementType && a2 instanceof Element && b2 instanceof Element)
      return a2 === b2;
    for (i2 = length; i2-- !== 0; ) {
      key = keys2[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      } else {
        if (!equal(a2[key], b2[key]))
          return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
var reactFastCompare = function exportedEqual(a2, b2) {
  try {
    return equal(a2, b2);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
      console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
      return false;
    }
    throw error;
  }
};
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  Object.keys(source).forEach(function(key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge(target[key], source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var freeGlobal$3 = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$4 = freeGlobal$3;
var freeSelf$2 = typeof self == "object" && self && self.Object === Object && self;
var root$a = freeGlobal$4 || freeSelf$2 || Function("return this")();
var root$b = root$a;
var Symbol$7 = root$b.Symbol;
var Symbol$8 = Symbol$7;
var objectProto$r = Object.prototype;
var hasOwnProperty$l = objectProto$r.hasOwnProperty;
var nativeObjectToString$3 = objectProto$r.toString;
var symToStringTag$3 = Symbol$8 ? Symbol$8.toStringTag : void 0;
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$l.call(value, symToStringTag$3), tag = value[symToStringTag$3];
  try {
    value[symToStringTag$3] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}
var objectProto$q = Object.prototype;
var nativeObjectToString$2 = objectProto$q.toString;
function objectToString$3(value) {
  return nativeObjectToString$2.call(value);
}
var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
var symToStringTag$2 = Symbol$8 ? Symbol$8.toStringTag : void 0;
function baseGetTag$6(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$2(value) : objectToString$3(value);
}
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var getPrototype = overArg$2(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function isObjectLike$7(value) {
  return value != null && typeof value == "object";
}
var objectTag$6 = "[object Object]";
var funcProto$5 = Function.prototype, objectProto$p = Object.prototype;
var funcToString$5 = funcProto$5.toString;
var hasOwnProperty$k = objectProto$p.hasOwnProperty;
var objectCtorString = funcToString$5.call(Object);
function isPlainObject(value) {
  if (!isObjectLike$7(value) || baseGetTag$6(value) != objectTag$6) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$k.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$5.call(Ctor) == objectCtorString;
}
function listCacheClear$3() {
  this.__data__ = [];
  this.size = 0;
}
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf$6(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$4(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto$2 = Array.prototype;
var splice$2 = arrayProto$2.splice;
function listCacheDelete$3(key) {
  var data = this.__data__, index2 = assocIndexOf$6(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$2.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet$3(key) {
  var data = this.__data__, index2 = assocIndexOf$6(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas$3(key) {
  return assocIndexOf$6(this.__data__, key) > -1;
}
function listCacheSet$3(key, value) {
  var data = this.__data__, index2 = assocIndexOf$6(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache$6(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$6.prototype.clear = listCacheClear$3;
ListCache$6.prototype["delete"] = listCacheDelete$3;
ListCache$6.prototype.get = listCacheGet$3;
ListCache$6.prototype.has = listCacheHas$3;
ListCache$6.prototype.set = listCacheSet$3;
function stackClear$2() {
  this.__data__ = new ListCache$6();
  this.size = 0;
}
function stackDelete$2(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet$2(key) {
  return this.__data__.get(key);
}
function stackHas$2(key) {
  return this.__data__.has(key);
}
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag$1 = "[object AsyncFunction]", funcTag$5 = "[object Function]", genTag$3 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$5(value) {
  if (!isObject$7(value)) {
    return false;
  }
  var tag = baseGetTag$6(value);
  return tag == funcTag$5 || tag == genTag$3 || tag == asyncTag$1 || tag == proxyTag$1;
}
var coreJsData$3 = root$b["__core-js_shared__"];
var coreJsData$4 = coreJsData$3;
var maskSrcKey$2 = function() {
  var uid = /[^.]+$/.exec(coreJsData$4 && coreJsData$4.keys && coreJsData$4.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$3(func) {
  return !!maskSrcKey$2 && maskSrcKey$2 in func;
}
var funcProto$4 = Function.prototype;
var funcToString$4 = funcProto$4.toString;
function toSource$4(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar$2 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$2 = /^\[object .+?Constructor\]$/;
var funcProto$3 = Function.prototype, objectProto$o = Object.prototype;
var funcToString$3 = funcProto$3.toString;
var hasOwnProperty$j = objectProto$o.hasOwnProperty;
var reIsNative$2 = RegExp("^" + funcToString$3.call(hasOwnProperty$j).replace(reRegExpChar$2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$3(value) {
  if (!isObject$7(value) || isMasked$3(value)) {
    return false;
  }
  var pattern = isFunction$5(value) ? reIsNative$2 : reIsHostCtor$2;
  return pattern.test(toSource$4(value));
}
function getValue$3(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function getNative$9(object2, key) {
  var value = getValue$3(object2, key);
  return baseIsNative$3(value) ? value : void 0;
}
var Map$6 = getNative$9(root$b, "Map");
var Map$7 = Map$6;
var nativeCreate$6 = getNative$9(Object, "create");
var nativeCreate$7 = nativeCreate$6;
function hashClear$3() {
  this.__data__ = nativeCreate$7 ? nativeCreate$7(null) : {};
  this.size = 0;
}
function hashDelete$3(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$5 = "__lodash_hash_undefined__";
var objectProto$n = Object.prototype;
var hasOwnProperty$i = objectProto$n.hasOwnProperty;
function hashGet$3(key) {
  var data = this.__data__;
  if (nativeCreate$7) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? void 0 : result;
  }
  return hasOwnProperty$i.call(data, key) ? data[key] : void 0;
}
var objectProto$m = Object.prototype;
var hasOwnProperty$h = objectProto$m.hasOwnProperty;
function hashHas$3(key) {
  var data = this.__data__;
  return nativeCreate$7 ? data[key] !== void 0 : hasOwnProperty$h.call(data, key);
}
var HASH_UNDEFINED$4 = "__lodash_hash_undefined__";
function hashSet$3(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$7 && value === void 0 ? HASH_UNDEFINED$4 : value;
  return this;
}
function Hash$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$3.prototype.clear = hashClear$3;
Hash$3.prototype["delete"] = hashDelete$3;
Hash$3.prototype.get = hashGet$3;
Hash$3.prototype.has = hashHas$3;
Hash$3.prototype.set = hashSet$3;
function mapCacheClear$3() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$3(),
    "map": new (Map$7 || ListCache$6)(),
    "string": new Hash$3()
  };
}
function isKeyable$3(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData$6(map2, key) {
  var data = map2.__data__;
  return isKeyable$3(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete$3(key) {
  var result = getMapData$6(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet$3(key) {
  return getMapData$6(this, key).get(key);
}
function mapCacheHas$3(key) {
  return getMapData$6(this, key).has(key);
}
function mapCacheSet$3(key, value) {
  var data = getMapData$6(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache$5(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$5.prototype.clear = mapCacheClear$3;
MapCache$5.prototype["delete"] = mapCacheDelete$3;
MapCache$5.prototype.get = mapCacheGet$3;
MapCache$5.prototype.has = mapCacheHas$3;
MapCache$5.prototype.set = mapCacheSet$3;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$6) {
    var pairs = data.__data__;
    if (!Map$7 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$5(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack$3(entries) {
  var data = this.__data__ = new ListCache$6(entries);
  this.size = data.size;
}
Stack$3.prototype.clear = stackClear$2;
Stack$3.prototype["delete"] = stackDelete$2;
Stack$3.prototype.get = stackGet$2;
Stack$3.prototype.has = stackHas$2;
Stack$3.prototype.set = stackSet$2;
function arrayEach(array2, iteratee) {
  var index2 = -1, length = array2 == null ? 0 : array2.length;
  while (++index2 < length) {
    if (iteratee(array2[index2], index2, array2) === false) {
      break;
    }
  }
  return array2;
}
var defineProperty$3 = function() {
  try {
    var func = getNative$9(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$4 = defineProperty$3;
function baseAssignValue$3(object2, key, value) {
  if (key == "__proto__" && defineProperty$4) {
    defineProperty$4(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var objectProto$l = Object.prototype;
var hasOwnProperty$g = objectProto$l.hasOwnProperty;
function assignValue$1(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty$g.call(object2, key) && eq$4(objValue, value)) || value === void 0 && !(key in object2)) {
    baseAssignValue$3(object2, key, value);
  }
}
function copyObject(source, props, object2, customizer) {
  var isNew = !object2;
  object2 || (object2 = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$3(object2, key, newValue);
    } else {
      assignValue$1(object2, key, newValue);
    }
  }
  return object2;
}
function baseTimes$2(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$5 = "[object Arguments]";
function baseIsArguments$2(value) {
  return isObjectLike$7(value) && baseGetTag$6(value) == argsTag$5;
}
var objectProto$k = Object.prototype;
var hasOwnProperty$f = objectProto$k.hasOwnProperty;
var propertyIsEnumerable$3 = objectProto$k.propertyIsEnumerable;
var isArguments$3 = baseIsArguments$2(function() {
  return arguments;
}()) ? baseIsArguments$2 : function(value) {
  return isObjectLike$7(value) && hasOwnProperty$f.call(value, "callee") && !propertyIsEnumerable$3.call(value, "callee");
};
var isArguments$4 = isArguments$3;
var isArray$a = Array.isArray;
var isArray$b = isArray$a;
function stubFalse$1() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$b.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer$3 = nativeIsBuffer || stubFalse$1;
var isBuffer$4 = isBuffer$3;
var MAX_SAFE_INTEGER$4 = 9007199254740991;
var reIsUint$2 = /^(?:0|[1-9]\d*)$/;
function isIndex$4(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$4 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint$2.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var MAX_SAFE_INTEGER$3 = 9007199254740991;
function isLength$4(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$3;
}
var argsTag$4 = "[object Arguments]", arrayTag$3 = "[object Array]", boolTag$4 = "[object Boolean]", dateTag$4 = "[object Date]", errorTag$3 = "[object Error]", funcTag$4 = "[object Function]", mapTag$7 = "[object Map]", numberTag$4 = "[object Number]", objectTag$5 = "[object Object]", regexpTag$4 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$4 = "[object String]", weakMapTag$4 = "[object WeakMap]";
var arrayBufferTag$4 = "[object ArrayBuffer]", dataViewTag$6 = "[object DataView]", float32Tag$3 = "[object Float32Array]", float64Tag$3 = "[object Float64Array]", int8Tag$3 = "[object Int8Array]", int16Tag$3 = "[object Int16Array]", int32Tag$3 = "[object Int32Array]", uint8Tag$3 = "[object Uint8Array]", uint8ClampedTag$3 = "[object Uint8ClampedArray]", uint16Tag$3 = "[object Uint16Array]", uint32Tag$3 = "[object Uint32Array]";
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] = typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] = typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] = typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] = typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$4] = typedArrayTags$1[arrayTag$3] = typedArrayTags$1[arrayBufferTag$4] = typedArrayTags$1[boolTag$4] = typedArrayTags$1[dataViewTag$6] = typedArrayTags$1[dateTag$4] = typedArrayTags$1[errorTag$3] = typedArrayTags$1[funcTag$4] = typedArrayTags$1[mapTag$7] = typedArrayTags$1[numberTag$4] = typedArrayTags$1[objectTag$5] = typedArrayTags$1[regexpTag$4] = typedArrayTags$1[setTag$7] = typedArrayTags$1[stringTag$4] = typedArrayTags$1[weakMapTag$4] = false;
function baseIsTypedArray$2(value) {
  return isObjectLike$7(value) && isLength$4(value.length) && !!typedArrayTags$1[baseGetTag$6(value)];
}
function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$4.process;
var nodeUtil$1 = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$2 = nodeUtil$1;
var nodeIsTypedArray$1 = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$3 = nodeIsTypedArray$1 ? baseUnary$2(nodeIsTypedArray$1) : baseIsTypedArray$2;
var isTypedArray$4 = isTypedArray$3;
var objectProto$j = Object.prototype;
var hasOwnProperty$e = objectProto$j.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$b(value), isArg = !isArr && isArguments$4(value), isBuff = !isArr && !isArg && isBuffer$4(value), isType = !isArr && !isArg && !isBuff && isTypedArray$4(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes$2(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$e.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$4(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$i = Object.prototype;
function isPrototype$2(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$i;
  return value === proto;
}
var nativeKeys$2 = overArg$2(Object.keys, Object);
var nativeKeys$3 = nativeKeys$2;
var objectProto$h = Object.prototype;
var hasOwnProperty$d = objectProto$h.hasOwnProperty;
function baseKeys$2(object2) {
  if (!isPrototype$2(object2)) {
    return nativeKeys$3(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$d.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function isArrayLike$2(value) {
  return value != null && isLength$4(value.length) && !isFunction$5(value);
}
function keys$4(object2) {
  return isArrayLike$2(object2) ? arrayLikeKeys$2(object2) : baseKeys$2(object2);
}
function baseAssign(object2, source) {
  return object2 && copyObject(source, keys$4(source), object2);
}
function nativeKeysIn(object2) {
  var result = [];
  if (object2 != null) {
    for (var key in Object(object2)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$g = Object.prototype;
var hasOwnProperty$c = objectProto$g.hasOwnProperty;
function baseKeysIn(object2) {
  if (!isObject$7(object2)) {
    return nativeKeysIn(object2);
  }
  var isProto = isPrototype$2(object2), result = [];
  for (var key in object2) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$c.call(object2, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object2) {
  return isArrayLike$2(object2) ? arrayLikeKeys$2(object2, true) : baseKeysIn(object2);
}
function baseAssignIn(object2, source) {
  return object2 && copyObject(source, keysIn(source), object2);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$b.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copyArray(source, array2) {
  var index2 = -1, length = source.length;
  array2 || (array2 = Array(length));
  while (++index2 < length) {
    array2[index2] = source[index2];
  }
  return array2;
}
function arrayFilter$2(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array2[index2];
    if (predicate(value, index2, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray$2() {
  return [];
}
var objectProto$f = Object.prototype;
var propertyIsEnumerable$2 = objectProto$f.propertyIsEnumerable;
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;
var getSymbols$2 = !nativeGetSymbols$2 ? stubArray$2 : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter$2(nativeGetSymbols$2(object2), function(symbol) {
    return propertyIsEnumerable$2.call(object2, symbol);
  });
};
var getSymbols$3 = getSymbols$2;
function copySymbols(source, object2) {
  return copyObject(source, getSymbols$3(source), object2);
}
function arrayPush$2(array2, values) {
  var index2 = -1, length = values.length, offset = array2.length;
  while (++index2 < length) {
    array2[offset + index2] = values[index2];
  }
  return array2;
}
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray$2 : function(object2) {
  var result = [];
  while (object2) {
    arrayPush$2(result, getSymbols$3(object2));
    object2 = getPrototype$1(object2);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object2) {
  return copyObject(source, getSymbolsIn$1(source), object2);
}
function baseGetAllKeys$2(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$b(object2) ? result : arrayPush$2(result, symbolsFunc(object2));
}
function getAllKeys$2(object2) {
  return baseGetAllKeys$2(object2, keys$4, getSymbols$3);
}
function getAllKeysIn(object2) {
  return baseGetAllKeys$2(object2, keysIn, getSymbolsIn$1);
}
var DataView$2 = getNative$9(root$b, "DataView");
var DataView$3 = DataView$2;
var Promise$3 = getNative$9(root$b, "Promise");
var Promise$4 = Promise$3;
var Set$3 = getNative$9(root$b, "Set");
var Set$4 = Set$3;
var WeakMap$3 = getNative$9(root$b, "WeakMap");
var WeakMap$4 = WeakMap$3;
var mapTag$6 = "[object Map]", objectTag$4 = "[object Object]", promiseTag$1 = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$3 = "[object WeakMap]";
var dataViewTag$5 = "[object DataView]";
var dataViewCtorString$1 = toSource$4(DataView$3), mapCtorString$1 = toSource$4(Map$7), promiseCtorString$1 = toSource$4(Promise$4), setCtorString$1 = toSource$4(Set$4), weakMapCtorString$1 = toSource$4(WeakMap$4);
var getTag$2 = baseGetTag$6;
if (DataView$3 && getTag$2(new DataView$3(new ArrayBuffer(1))) != dataViewTag$5 || Map$7 && getTag$2(new Map$7()) != mapTag$6 || Promise$4 && getTag$2(Promise$4.resolve()) != promiseTag$1 || Set$4 && getTag$2(new Set$4()) != setTag$6 || WeakMap$4 && getTag$2(new WeakMap$4()) != weakMapTag$3) {
  getTag$2 = function(value) {
    var result = baseGetTag$6(value), Ctor = result == objectTag$4 ? value.constructor : void 0, ctorString = Ctor ? toSource$4(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$5;
        case mapCtorString$1:
          return mapTag$6;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$6;
        case weakMapCtorString$1:
          return weakMapTag$3;
      }
    }
    return result;
  };
}
var getTag$3 = getTag$2;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
function initCloneArray(array2) {
  var length = array2.length, result = new array2.constructor(length);
  if (length && typeof array2[0] == "string" && hasOwnProperty$b.call(array2, "index")) {
    result.index = array2.index;
    result.input = array2.input;
  }
  return result;
}
var Uint8Array$2 = root$b.Uint8Array;
var Uint8Array$3 = Uint8Array$2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$3(result).set(new Uint8Array$3(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$4 = Symbol$8 ? Symbol$8.prototype : void 0, symbolValueOf$1 = symbolProto$4 ? symbolProto$4.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$5 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
function initCloneByTag(object2, tag, isDeep) {
  var Ctor = object2.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer(object2);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object2);
    case dataViewTag$4:
      return cloneDataView(object2, isDeep);
    case float32Tag$2:
    case float64Tag$2:
    case int8Tag$2:
    case int16Tag$2:
    case int32Tag$2:
    case uint8Tag$2:
    case uint8ClampedTag$2:
    case uint16Tag$2:
    case uint32Tag$2:
      return cloneTypedArray(object2, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object2);
    case regexpTag$3:
      return cloneRegExp(object2);
    case setTag$5:
      return new Ctor();
    case symbolTag$5:
      return cloneSymbol(object2);
  }
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object2() {
  }
  return function(proto) {
    if (!isObject$7(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object2.prototype = proto;
    var result = new object2();
    object2.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function initCloneObject(object2) {
  return typeof object2.constructor == "function" && !isPrototype$2(object2) ? baseCreate$1(getPrototype$1(object2)) : {};
}
var mapTag$4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike$7(value) && getTag$3(value) == mapTag$4;
}
var nodeIsMap = nodeUtil$2 && nodeUtil$2.isMap;
var isMap = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike$7(value) && getTag$3(value) == setTag$4;
}
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;
var isSet = nodeIsSet ? baseUnary$2(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$3 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$2 = "[object Error]", funcTag$3 = "[object Function]", genTag$2 = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$4 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$3] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$4] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$3] = cloneableTags[weakMapTag$2] = false;
function baseClone$1(value, bitmask, customizer, key, object2, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object2 ? customizer(value, key, object2, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$7(value)) {
    return value;
  }
  var isArr = isArray$b(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$3(value), isFunc = tag == funcTag$3 || tag == genTag$2;
    if (isBuffer$4(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$3 || tag == argsTag$3 || isFunc && !object2) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object2 ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$3());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys$2 : isFlat ? keysIn : keys$4;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue$1(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_SYMBOLS_FLAG = 4;
function clone$1(value) {
  return baseClone$1(value, CLONE_SYMBOLS_FLAG);
}
function arrayMap$2(array2, iteratee) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array2[index2], index2, array2);
  }
  return result;
}
var symbolTag$3 = "[object Symbol]";
function isSymbol$5(value) {
  return typeof value == "symbol" || isObjectLike$7(value) && baseGetTag$6(value) == symbolTag$3;
}
var FUNC_ERROR_TEXT$2 = "Expected a function";
function memoize$3(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$3.Cache || MapCache$5)();
  return memoized;
}
memoize$3.Cache = MapCache$5;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func) {
  var result = memoize$3(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName$2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$2 = /\\(\\)?/g;
var stringToPath$3 = memoizeCapped$2(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName$2, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$2, "$1") : number2 || match);
  });
  return result;
});
var stringToPath$4 = stringToPath$3;
var INFINITY$4 = 1 / 0;
function toKey$6(value) {
  if (typeof value == "string" || isSymbol$5(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$4 ? "-0" : result;
}
var INFINITY$3 = 1 / 0;
var symbolProto$3 = Symbol$8 ? Symbol$8.prototype : void 0, symbolToString$3 = symbolProto$3 ? symbolProto$3.toString : void 0;
function baseToString$3(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$b(value)) {
    return arrayMap$2(value, baseToString$3) + "";
  }
  if (isSymbol$5(value)) {
    return symbolToString$3 ? symbolToString$3.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
}
function toString$8(value) {
  return value == null ? "" : baseToString$3(value);
}
function toPath(value) {
  if (isArray$b(value)) {
    return arrayMap$2(value, toKey$6);
  }
  return isSymbol$5(value) ? [value] : copyArray(stringToPath$4(toString$8(value)));
}
var isProduction = true;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x2) {
    }
  }
}
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c:
        switch (a2 = a2.type, a2) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a2;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a2) {
  return z(a2) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a2) {
  return A(a2) || z(a2) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a2) {
  return z(a2) === k;
};
reactIs_production_min.isContextProvider = function(a2) {
  return z(a2) === h;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a2) {
  return z(a2) === n;
};
reactIs_production_min.isFragment = function(a2) {
  return z(a2) === e;
};
reactIs_production_min.isLazy = function(a2) {
  return z(a2) === t;
};
reactIs_production_min.isMemo = function(a2) {
  return z(a2) === r;
};
reactIs_production_min.isPortal = function(a2) {
  return z(a2) === d;
};
reactIs_production_min.isProfiler = function(a2) {
  return z(a2) === g;
};
reactIs_production_min.isStrictMode = function(a2) {
  return z(a2) === f;
};
reactIs_production_min.isSuspense = function(a2) {
  return z(a2) === p;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e || a2 === m || a2 === g || a2 === f || a2 === p || a2 === q || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t || a2.$$typeof === r || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === n || a2.$$typeof === w || a2.$$typeof === x || a2.$$typeof === y || a2.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty$2 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys2 = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i2 = 0; i2 < keys2.length; ++i2) {
      var key = keys2[i2];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty$2(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function _extends$5() {
  _extends$5 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var isFunction$4 = function isFunction2(obj) {
  return typeof obj === "function";
};
var isObject$6 = function isObject2(obj) {
  return obj !== null && typeof obj === "object";
};
var isInteger = function isInteger2(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
var isString = function isString2(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
};
var isEmptyChildren = function isEmptyChildren2(children) {
  return k$1.count(children) === 0;
};
var isPromise = function isPromise2(value) {
  return isObject$6(value) && isFunction$4(value.then);
};
function getIn$1(obj, key, def, p2) {
  if (p2 === void 0) {
    p2 = 0;
  }
  var path = toPath(key);
  while (obj && p2 < path.length) {
    obj = obj[path[p2++]];
  }
  return obj === void 0 ? def : obj;
}
function setIn(obj, path, value) {
  var res = clone$1(obj);
  var resVal = res;
  var i2 = 0;
  var pathArray = toPath(path);
  for (; i2 < pathArray.length - 1; i2++) {
    var currentPath = pathArray[i2];
    var currentObj = getIn$1(obj, pathArray.slice(0, i2 + 1));
    if (currentObj && (isObject$6(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone$1(currentObj);
    } else {
      var nextPath = pathArray[i2 + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }
  if ((i2 === 0 ? obj : resVal)[pathArray[i2]] === value) {
    return obj;
  }
  if (value === void 0) {
    delete resVal[pathArray[i2]];
  } else {
    resVal[pathArray[i2]] = value;
  }
  if (i2 === 0 && value === void 0) {
    delete res[pathArray[i2]];
  }
  return res;
}
function setNestedObjectValues(object2, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }
  if (response === void 0) {
    response = {};
  }
  for (var _i = 0, _Object$keys = Object.keys(object2); _i < _Object$keys.length; _i++) {
    var k2 = _Object$keys[_i];
    var val = object2[k2];
    if (isObject$6(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k2] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k2]);
      }
    } else {
      response[k2] = value;
    }
  }
  return response;
}
var FormikContext = /* @__PURE__ */ D$2(void 0);
FormikContext.displayName = "FormikContext";
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = F$2(FormikContext);
  !!!formik ? warning(false) : void 0;
  return formik;
}
function formikReducer(state, msg) {
  switch (msg.type) {
    case "SET_VALUES":
      return _extends$5({}, state, {
        values: msg.payload
      });
    case "SET_TOUCHED":
      return _extends$5({}, state, {
        touched: msg.payload
      });
    case "SET_ERRORS":
      if (reactFastCompare(state.errors, msg.payload)) {
        return state;
      }
      return _extends$5({}, state, {
        errors: msg.payload
      });
    case "SET_STATUS":
      return _extends$5({}, state, {
        status: msg.payload
      });
    case "SET_ISSUBMITTING":
      return _extends$5({}, state, {
        isSubmitting: msg.payload
      });
    case "SET_ISVALIDATING":
      return _extends$5({}, state, {
        isValidating: msg.payload
      });
    case "SET_FIELD_VALUE":
      return _extends$5({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_TOUCHED":
      return _extends$5({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });
    case "SET_FIELD_ERROR":
      return _extends$5({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });
    case "RESET_FORM":
      return _extends$5({}, state, msg.payload);
    case "SET_FORMIK_STATE":
      return msg.payload(state);
    case "SUBMIT_ATTEMPT":
      return _extends$5({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });
    case "SUBMIT_FAILURE":
      return _extends$5({}, state, {
        isSubmitting: false
      });
    case "SUBMIT_SUCCESS":
      return _extends$5({}, state, {
        isSubmitting: false
      });
    default:
      return state;
  }
}
var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange, validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange, _ref$validateOnBlur = _ref.validateOnBlur, validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur, _ref$validateOnMount = _ref.validateOnMount, validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount, isInitialValid = _ref.isInitialValid, _ref$enableReinitiali = _ref.enableReinitialize, enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali, onSubmit = _ref.onSubmit, rest = _objectWithoutPropertiesLoose$1(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);
  var props = _extends$5({
    validateOnChange,
    validateOnBlur,
    validateOnMount,
    onSubmit
  }, rest);
  var initialValues2 = s(props.initialValues);
  var initialErrors = s(props.initialErrors || emptyErrors);
  var initialTouched = s(props.initialTouched || emptyTouched);
  var initialStatus = s(props.initialStatus);
  var isMounted = s(false);
  var fieldRegistry = s({});
  y$2(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  var _React$useReducer = p$1(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }), state = _React$useReducer[0], dispatch = _React$useReducer[1];
  var runValidateHandler = A$2(function(values, field) {
    return new Promise(function(resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);
      if (maybePromisedErrors == null) {
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function(errors) {
          resolve(errors || emptyErrors);
        }, function(actualException) {
          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  var runValidationSchema = A$2(function(values, field) {
    var validationSchema2 = props.validationSchema;
    var schema = isFunction$4(validationSchema2) ? validationSchema2(field) : validationSchema2;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function(resolve, reject) {
      promise.then(function() {
        resolve(emptyErrors);
      }, function(err) {
        if (err.name === "ValidationError") {
          resolve(yupToFormErrors(err));
        } else {
          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = A$2(function(field, value) {
    return new Promise(function(resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = A$2(function(values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function(f2) {
      return isFunction$4(fieldRegistry.current[f2].validate);
    });
    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function(f2) {
      return runSingleFieldLevelValidation(f2, getIn$1(values, f2));
    }) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
    return Promise.all(fieldValidations).then(function(fieldErrorsList) {
      return fieldErrorsList.reduce(function(prev, curr, index2) {
        if (curr === "DO_NOT_DELETE_YOU_WILL_BE_FIRED") {
          return prev;
        }
        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index2], curr);
        }
        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]);
  var runAllValidations = A$2(function(values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function(_ref2) {
      var fieldErrors = _ref2[0], schemaErrors = _ref2[1], validateErrors = _ref2[2];
      var combinedErrors = deepmerge_1.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]);
  var validateFormWithHighPriority = useEventCallback(function(values) {
    if (values === void 0) {
      values = state.values;
    }
    dispatch({
      type: "SET_ISVALIDATING",
      payload: true
    });
    return runAllValidations(values).then(function(combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
        dispatch({
          type: "SET_ERRORS",
          payload: combinedErrors
        });
      }
      return combinedErrors;
    });
  });
  y$2(function() {
    if (validateOnMount && isMounted.current === true && reactFastCompare(initialValues2.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues2.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = A$2(function(nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues2.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues2.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;
    var dispatchFn = function dispatchFn2() {
      dispatch({
        type: "RESET_FORM",
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors,
          touched,
          status,
          values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === "number" ? nextState.submitCount : 0
        }
      });
    };
    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);
      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  y$2(function() {
    if (isMounted.current === true && !reactFastCompare(initialValues2.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues2.current = props.initialValues;
        resetForm();
      }
      if (validateOnMount) {
        validateFormWithHighPriority(initialValues2.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  y$2(function() {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: "SET_ERRORS",
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  y$2(function() {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: "SET_TOUCHED",
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  y$2(function() {
    if (enableReinitialize && isMounted.current === true && !reactFastCompare(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: "SET_STATUS",
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function(name) {
    if (fieldRegistry.current[name] && isFunction$4(fieldRegistry.current[name].validate)) {
      var value = getIn$1(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);
      if (isPromise(maybePromise)) {
        dispatch({
          type: "SET_ISVALIDATING",
          payload: true
        });
        return maybePromise.then(function(x2) {
          return x2;
        }).then(function(error) {
          dispatch({
            type: "SET_FIELD_ERROR",
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: "SET_ISVALIDATING",
            payload: false
          });
        });
      } else {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: "SET_ISVALIDATING",
        payload: true
      });
      return runValidationSchema(state.values, name).then(function(x2) {
        return x2;
      }).then(function(error) {
        dispatch({
          type: "SET_FIELD_ERROR",
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: "SET_ISVALIDATING",
          payload: false
        });
      });
    }
    return Promise.resolve();
  });
  var registerField = A$2(function(name, _ref3) {
    var validate2 = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate2
    };
  }, []);
  var unregisterField = A$2(function(name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function(touched, shouldValidate) {
    dispatch({
      type: "SET_TOUCHED",
      payload: touched
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = A$2(function(errors) {
    dispatch({
      type: "SET_ERRORS",
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function(values, shouldValidate) {
    var resolvedValues = isFunction$4(values) ? values(state.values) : values;
    dispatch({
      type: "SET_VALUES",
      payload: resolvedValues
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = A$2(function(field, value) {
    dispatch({
      type: "SET_FIELD_ERROR",
      payload: {
        field,
        value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function(field, value, shouldValidate) {
    dispatch({
      type: "SET_FIELD_VALUE",
      payload: {
        field,
        value
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = A$2(function(eventOrTextValue, maybePath) {
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed;
    if (!isString(eventOrTextValue)) {
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }
      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type, name = target.name, id2 = target.id, value = target.value, checked = target.checked, outerHTML = target.outerHTML, options = target.options, multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id2;
      if (!field && false) {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
          handlerName: "handleChange"
        });
      }
      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? "" : parsed) : /checkbox/.test(type) ? getValueForCheckbox(getIn$1(state.values, field), checked, value) : options && multiple ? getSelectedValues(options) : value;
    }
    if (field) {
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function(eventOrPath) {
    if (isString(eventOrPath)) {
      return function(event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function(field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }
    dispatch({
      type: "SET_FIELD_TOUCHED",
      payload: {
        field,
        value: touched
      }
    });
    var willValidate = shouldValidate === void 0 ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = A$2(function(e2, path) {
    if (e2.persist) {
      e2.persist();
    }
    var _e$target = e2.target, name = _e$target.name, id2 = _e$target.id, outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id2;
    if (!field && false) {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: "handleblur-e-any--void",
        handlerName: "handleBlur"
      });
    }
    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function(eventOrString) {
    if (isString(eventOrString)) {
      return function(event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = A$2(function(stateOrCb) {
    if (isFunction$4(stateOrCb)) {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: "SET_FORMIK_STATE",
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = A$2(function(status) {
    dispatch({
      type: "SET_STATUS",
      payload: status
    });
  }, []);
  var setSubmitting = A$2(function(isSubmitting) {
    dispatch({
      type: "SET_ISSUBMITTING",
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function() {
    dispatch({
      type: "SUBMIT_ATTEMPT"
    });
    return validateFormWithHighPriority().then(function(combinedErrors) {
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;
      if (isActuallyValid) {
        var promiseOrUndefined;
        try {
          promiseOrUndefined = executeSubmit();
          if (promiseOrUndefined === void 0) {
            return;
          }
        } catch (error) {
          throw error;
        }
        return Promise.resolve(promiseOrUndefined).then(function(result) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_SUCCESS"
            });
          }
          return result;
        })["catch"](function(_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: "SUBMIT_FAILURE"
            });
            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        dispatch({
          type: "SUBMIT_FAILURE"
        });
        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }
      return;
    });
  });
  var handleSubmit = useEventCallback(function(e2) {
    if (e2 && e2.preventDefault && isFunction$4(e2.preventDefault)) {
      e2.preventDefault();
    }
    if (e2 && e2.stopPropagation && isFunction$4(e2.stopPropagation)) {
      e2.stopPropagation();
    }
    submitForm()["catch"](function(reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    setErrors,
    setFieldError,
    setFieldTouched,
    setFieldValue,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    setFormikState,
    submitForm
  };
  var executeSubmit = useEventCallback(function() {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function(e2) {
    if (e2 && e2.preventDefault && isFunction$4(e2.preventDefault)) {
      e2.preventDefault();
    }
    if (e2 && e2.stopPropagation && isFunction$4(e2.stopPropagation)) {
      e2.stopPropagation();
    }
    resetForm();
  });
  var getFieldMeta = A$2(function(name) {
    return {
      value: getIn$1(state.values, name),
      error: getIn$1(state.errors, name),
      touched: !!getIn$1(state.touched, name),
      initialValue: getIn$1(initialValues2.current, name),
      initialTouched: !!getIn$1(initialTouched.current, name),
      initialError: getIn$1(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = A$2(function(name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched2(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = A$2(function(nameOrOptions) {
    var isAnObject = isObject$6(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn$1(state.values, name);
    var field = {
      name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };
    if (isAnObject) {
      var type = nameOrOptions.type, valueProp = nameOrOptions.value, is = nameOrOptions.as, multiple = nameOrOptions.multiple;
      if (type === "checkbox") {
        if (valueProp === void 0) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === "radio") {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === "select" && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }
    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = d$1(function() {
    return !reactFastCompare(initialValues2.current, state.values);
  }, [initialValues2.current, state.values]);
  var isValid = d$1(function() {
    return typeof isInitialValid !== "undefined" ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction$4(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);
  var ctx = _extends$5({}, state, {
    initialValues: initialValues2.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    resetForm,
    setErrors,
    setFormikState,
    setFieldTouched,
    setFieldValue,
    setFieldError,
    setStatus,
    setSubmitting,
    setTouched,
    setValues,
    submitForm,
    validateForm: validateFormWithHighPriority,
    validateField,
    isValid,
    dirty,
    unregisterField,
    registerField,
    getFieldProps,
    getFieldMeta,
    getFieldHelpers,
    validateOnBlur,
    validateOnChange,
    validateOnMount
  });
  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component, children = props.children, render = props.render, innerRef = props.innerRef;
  _(innerRef, function() {
    return formikbag;
  });
  return v$2(FormikProvider, {
    value: formikbag
  }, component ? v$2(component, formikbag) : render ? render(formikbag) : children ? isFunction$4(children) ? children(formikbag) : !isEmptyChildren(children) ? k$1.only(children) : null : null);
}
function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent, documentationAnchorLink = _ref4.documentationAnchorLink, handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
  var errors = {};
  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }
    for (var _iterator = yupError.inner, _isArray2 = Array.isArray(_iterator), _i = 0, _iterator = _isArray2 ? _iterator : _iterator[Symbol.iterator](); ; ) {
      var _ref5;
      if (_isArray2) {
        if (_i >= _iterator.length)
          break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done)
          break;
        _ref5 = _i.value;
      }
      var err = _ref5;
      if (!getIn$1(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }
  return errors;
}
function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }
  if (context === void 0) {
    context = {};
  }
  var validateData = prepareDataForValidation(values);
  return schema[sync ? "validateSync" : "validate"](validateData, {
    abortEarly: false,
    context
  });
}
function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};
  for (var k2 in values) {
    if (Object.prototype.hasOwnProperty.call(values, k2)) {
      var key = String(k2);
      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function(value) {
          if (Array.isArray(value) === true || isPlainObject(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== "" ? value : void 0;
          }
        });
      } else if (isPlainObject(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== "" ? values[key] : void 0;
      }
    }
  }
  return data;
}
function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e2, i2) {
    if (typeof destination[i2] === "undefined") {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e2);
      destination[i2] = shouldClone ? deepmerge_1(Array.isArray(e2) ? [] : {}, e2, options) : e2;
    } else if (options.isMergeableObject(e2)) {
      destination[i2] = deepmerge_1(target[i2], e2, options);
    } else if (target.indexOf(e2) === -1) {
      destination.push(e2);
    }
  });
  return destination;
}
function getSelectedValues(options) {
  return Array.from(options).filter(function(el) {
    return el.selected;
  }).map(function(el) {
    return el.value;
  });
}
function getValueForCheckbox(currentValue, checked, valueProp) {
  if (typeof currentValue === "boolean") {
    return Boolean(checked);
  }
  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index2 = -1;
  if (!Array.isArray(currentValue)) {
    if (!valueProp || valueProp == "true" || valueProp == "false") {
      return Boolean(checked);
    }
  } else {
    currentArrayOfValues = currentValue;
    index2 = currentValue.indexOf(valueProp);
    isValueInArray = index2 >= 0;
  }
  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  }
  if (!isValueInArray) {
    return currentArrayOfValues;
  }
  return currentArrayOfValues.slice(0, index2).concat(currentArrayOfValues.slice(index2 + 1));
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? h$1 : y$2;
function useEventCallback(fn2) {
  var ref = s(fn2);
  useIsomorphicLayoutEffect(function() {
    ref.current = fn2;
  });
  return A$2(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current.apply(void 0, args);
  }, []);
}
function Field(_ref) {
  var validate2 = _ref.validate, name = _ref.name, render = _ref.render, children = _ref.children, is = _ref.as, component = _ref.component, props = _objectWithoutPropertiesLoose$1(_ref, ["validate", "name", "render", "children", "as", "component"]);
  var _useFormikContext = useFormikContext(), formik = _objectWithoutPropertiesLoose$1(_useFormikContext, ["validate", "validationSchema"]);
  var registerField = formik.registerField, unregisterField = formik.unregisterField;
  y$2(function() {
    registerField(name, {
      validate: validate2
    });
    return function() {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate2]);
  var field = formik.getFieldProps(_extends$5({
    name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field,
    form: formik
  };
  if (render) {
    return render(_extends$5({}, legacyBag, {
      meta
    }));
  }
  if (isFunction$4(children)) {
    return children(_extends$5({}, legacyBag, {
      meta
    }));
  }
  if (component) {
    if (typeof component === "string") {
      var innerRef = props.innerRef, rest = _objectWithoutPropertiesLoose$1(props, ["innerRef"]);
      return v$2(component, _extends$5({
        ref: innerRef
      }, field, rest), children);
    }
    return v$2(component, _extends$5({
      field,
      form: formik
    }, props), children);
  }
  var asElement = is || "input";
  if (typeof asElement === "string") {
    var _innerRef = props.innerRef, _rest = _objectWithoutPropertiesLoose$1(props, ["innerRef"]);
    return v$2(asElement, _extends$5({
      ref: _innerRef
    }, field, _rest), children);
  }
  return v$2(asElement, _extends$5({}, field, props), children);
}
var Form = /* @__PURE__ */ x$1(function(props, ref) {
  var action = props.action, rest = _objectWithoutPropertiesLoose$1(props, ["action"]);
  var _action = action != null ? action : "#";
  var _useFormikContext = useFormikContext(), handleReset = _useFormikContext.handleReset, handleSubmit = _useFormikContext.handleSubmit;
  return v$2("form", Object.assign({
    onSubmit: handleSubmit,
    ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = "Form";
function connect(Comp) {
  var C2 = function C3(props) {
    return v$2(FormikConsumer, null, function(formik) {
      !!!formik ? warning(false) : void 0;
      return v$2(Comp, Object.assign({}, props, {
        formik
      }));
    });
  };
  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || "Component";
  C2.WrappedComponent = Comp;
  C2.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoistNonReactStatics_cjs(C2, Comp);
}
var ErrorMessageImpl = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(ErrorMessageImpl2, _React$Component);
  function ErrorMessageImpl2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = ErrorMessageImpl2.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn$1(this.props.formik.errors, this.props.name) !== getIn$1(props.formik.errors, this.props.name) || getIn$1(this.props.formik.touched, this.props.name) !== getIn$1(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, component = _this$props.component, formik = _this$props.formik, render2 = _this$props.render, children = _this$props.children, name = _this$props.name, rest = _objectWithoutPropertiesLoose$1(_this$props, ["component", "formik", "render", "children", "name"]);
    var touch = getIn$1(formik.touched, name);
    var error = getIn$1(formik.errors, name);
    return !!touch && !!error ? render2 ? isFunction$4(render2) ? render2(error) : null : children ? isFunction$4(children) ? children(error) : null : component ? v$2(component, rest, error) : error : null;
  };
  return ErrorMessageImpl2;
}(_$1);
var ErrorMessage = /* @__PURE__ */ connect(ErrorMessageImpl);
function Checkbox(_c) {
  var _d = _c, {
    id: id2,
    name,
    label,
    helpText,
    isChecked
  } = _d, rest = __objRest(_d, [
    "id",
    "name",
    "label",
    "helpText",
    "isChecked"
  ]);
  const inputId = id2 || name;
  return /* @__PURE__ */ e$1("div", {
    className: "mt-2 form-control",
    children: [/* @__PURE__ */ e$1(Field, __spreadValues({
      name,
      id: inputId,
      type: "checkbox",
      checked: isChecked,
      className: "form-checkbox"
    }, rest)), /* @__PURE__ */ e$1("label", {
      htmlFor: inputId,
      className: "inline pl-2 text-sm cursor-pointer",
      children: label
    }), /* @__PURE__ */ e$1("div", {
      className: "text-xs",
      id: `${inputId}-help`,
      children: helpText
    })]
  });
}
Checkbox.propTypes = {
  id: propTypes.exports.string,
  isChecked: propTypes.exports.bool,
  helpText: propTypes.exports.string,
  name: propTypes.exports.string.isRequired,
  label: propTypes.exports.string.isRequired
};
Checkbox.defaultProps = {
  id: "",
  helpText: "",
  isChecked: false
};
function RadioInput(_e) {
  var _f = _e, {
    id: id2,
    name,
    label,
    checked,
    helpText,
    required,
    placeholder
  } = _f, rest = __objRest(_f, [
    "id",
    "name",
    "label",
    "checked",
    "helpText",
    "required",
    "placeholder"
  ]);
  const inputId = `${id2 || name}_${rest.value}`;
  return /* @__PURE__ */ e$1("div", {
    className: "mt-2 form-control",
    children: [/* @__PURE__ */ e$1(Field, __spreadValues({
      name,
      type: "radio",
      id: inputId,
      checked,
      className: "form-radio"
    }, rest)), label && /* @__PURE__ */ e$1("label", {
      htmlFor: inputId,
      className: "inline-block pl-2",
      children: label
    }), /* @__PURE__ */ e$1("div", {
      className: "text-xs",
      id: `${inputId}-help`,
      tabIndex: "-1",
      children: helpText
    })]
  });
}
RadioInput.propTypes = {
  id: propTypes.exports.string,
  label: propTypes.exports.string,
  checked: propTypes.exports.bool,
  required: propTypes.exports.bool,
  helpText: propTypes.exports.string,
  placeholder: propTypes.exports.string,
  name: propTypes.exports.string.isRequired
};
RadioInput.defaultProps = {
  id: "",
  label: "",
  helpText: "",
  checked: false,
  required: false,
  placeholder: ""
};
const i18n = typeof window !== "undefined" && JSON.parse(window.CHECKOUT_TRANSLATIONS || "{}");
function __(stringToTranslate, ...dataReplacers) {
  let stringLiteral = (i18n || {})[stringToTranslate] || stringToTranslate;
  if (!dataReplacers.length) {
    return stringLiteral;
  }
  dataReplacers.forEach((dataToReplace) => {
    stringLiteral = stringLiteral.replace("%1", __(dataToReplace));
  });
  return stringLiteral;
}
function _keys(obj = {}) {
  return Object.keys(obj);
}
function _isArrayEmpty(arr = []) {
  return (arr || []).length === 0;
}
function _isArray(arr) {
  return Array.isArray(arr);
}
function _isObjEmpty(obj = {}) {
  return _keys(obj).length === 0;
}
function _objToArray(obj) {
  return _keys(obj || {}).map((key) => obj[key]);
}
function _makePromise(asyncFunc, ...params) {
  return () => asyncFunc(...params);
}
function _toString(value) {
  return (value || "").toString();
}
function _cleanObjByKeys(obj, keys2 = []) {
  const newObj = __spreadValues({}, obj);
  keys2.forEach((key) => delete newObj[key]);
  return newObj;
}
function _emptyFunc() {
  return () => {
  };
}
function _findById(arr, itemId) {
  return arr.find((item) => item.id === itemId);
}
function _replace(str, searchTerm, replaceWith = "") {
  return (str || "").replace(searchTerm, replaceWith);
}
function _abs(num) {
  return Math.abs(num);
}
const formikDataShape = propTypes.exports.shape({
  setFieldValue: propTypes.exports.func,
  formSectionId: propTypes.exports.string,
  setFieldTouched: propTypes.exports.func,
  isFormSectionValid: propTypes.exports.bool,
  formSectionErrors: propTypes.exports.object,
  formSectionValues: propTypes.exports.object,
  formSectionTouched: propTypes.exports.object,
  isFormSectionTouched: propTypes.exports.bool
});
function SelectInput(_g) {
  var _h = _g, {
    id: id2,
    name,
    label,
    options,
    helpText,
    required,
    isHidden,
    formikData,
    placeholder
  } = _h, rest = __objRest(_h, [
    "id",
    "name",
    "label",
    "options",
    "helpText",
    "required",
    "isHidden",
    "formikData",
    "placeholder"
  ]);
  const {
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionTouched
  } = formikData;
  const inputId = id2 || name;
  const relativeFieldName = _replace(name, formSectionId).replace(".", "");
  const hasFieldError = !!lodash_get(formSectionErrors, relativeFieldName);
  const hasFieldTouched = !!lodash_get(formSectionTouched, relativeFieldName);
  const hasError = hasFieldError && hasFieldTouched;
  return /* @__PURE__ */ e$1("div", {
    className: `mt-2 form-control ${isHidden && "hidden"}`,
    children: [/* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-between",
      children: [/* @__PURE__ */ e$1("label", {
        htmlFor: inputId,
        className: "md:text-sm",
        children: [label, required && /* @__PURE__ */ e$1("sup", {
          children: " *"
        })]
      }), /* @__PURE__ */ e$1("div", {
        id: `${inputId}-feedback`,
        className: `feedback text-sm md:text-xs text-right ${hasError ? "text-red-500" : "text-green-500"}`,
        children: /* @__PURE__ */ e$1(ErrorMessage, {
          name,
          children: (msg) => msg.replace("%1", label)
        })
      })]
    }), /* @__PURE__ */ e$1(Field, __spreadProps(__spreadValues({
      as: "select",
      name,
      id: inputId,
      placeholder,
      className: `w-full p-2 border form-select xs:block max-w-md ${hasError ? "border-dashed border-red-500" : ""}`,
      onChange: (event) => {
        const newValue = event.target.value;
        setFieldTouched(name, newValue);
        setFieldValue(name, newValue);
      }
    }, rest), {
      children: [/* @__PURE__ */ e$1("option", {
        value: "",
        children: __("-- Please Select --")
      }), options.map((option) => /* @__PURE__ */ e$1("option", {
        value: option.value,
        children: option.label
      }, option.value))]
    })), /* @__PURE__ */ e$1("div", {
      className: "text-xs",
      id: `${inputId}-help`,
      tabIndex: "-1",
      children: helpText
    })]
  });
}
SelectInput.propTypes = {
  id: propTypes.exports.string,
  required: propTypes.exports.bool,
  isHidden: propTypes.exports.bool,
  helpText: propTypes.exports.string,
  placeholder: propTypes.exports.string,
  name: propTypes.exports.string.isRequired,
  label: propTypes.exports.string.isRequired,
  formikData: formikDataShape.isRequired,
  options: propTypes.exports.arrayOf(propTypes.exports.shape({
    value: propTypes.exports.string,
    options: propTypes.exports.string
  }))
};
SelectInput.defaultProps = {
  id: "",
  options: [],
  helpText: "",
  required: false,
  placeholder: "",
  isHidden: false
};
function TextInput(_i) {
  var _j = _i, {
    id: id2,
    name,
    type,
    label,
    width,
    helpText,
    required,
    isHidden,
    className,
    formikData,
    placeholder
  } = _j, rest = __objRest(_j, [
    "id",
    "name",
    "type",
    "label",
    "width",
    "helpText",
    "required",
    "isHidden",
    "className",
    "formikData",
    "placeholder"
  ]);
  const {
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    formSectionTouched
  } = formikData;
  const inputId = id2 || name;
  const relativeFieldName = _replace(name, formSectionId).replace(".", "");
  const hasFieldError = !!lodash_get(formSectionErrors, relativeFieldName);
  const value = lodash_get(formSectionValues, relativeFieldName, "") || "";
  const hasFieldTouched = !!lodash_get(formSectionTouched, relativeFieldName);
  const hasError = hasFieldError && hasFieldTouched;
  return /* @__PURE__ */ e$1("div", {
    className: `mt-2 form-control ${isHidden ? "hidden" : ""}`,
    children: [/* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-between",
      children: [label && /* @__PURE__ */ e$1("label", {
        htmlFor: inputId,
        className: "md:text-sm",
        children: [label, required && /* @__PURE__ */ e$1("sup", {
          children: " *"
        })]
      }), /* @__PURE__ */ e$1("div", {
        className: `feedback text-sm md:text-xs text-right ${hasError ? "text-red-500" : "text-green-500"}`,
        children: /* @__PURE__ */ e$1(ErrorMessage, {
          name,
          children: (msg) => msg.replace("%1", label)
        })
      })]
    }), /* @__PURE__ */ e$1(Field, __spreadValues({
      name,
      id: inputId,
      value,
      type: type || "text",
      placeholder,
      onChange: (event) => {
        const newValue = event.target.value;
        setFieldTouched(name, newValue);
        setFieldValue(name, newValue);
      },
      className: `form-input max-w-md ${hasError ? "border-dashed border-red-500" : ""} ${className} ${width || "w-full"}`
    }, rest)), /* @__PURE__ */ e$1("div", {
      className: "text-xs",
      children: helpText
    })]
  });
}
TextInput.propTypes = {
  id: propTypes.exports.string,
  type: propTypes.exports.string,
  label: propTypes.exports.string,
  width: propTypes.exports.string,
  required: propTypes.exports.bool,
  isHidden: propTypes.exports.bool,
  helpText: propTypes.exports.string,
  className: propTypes.exports.string,
  placeholder: propTypes.exports.string,
  name: propTypes.exports.string.isRequired,
  formikData: formikDataShape.isRequired
};
TextInput.defaultProps = {
  id: "",
  label: "",
  width: "",
  helpText: "",
  type: "text",
  className: "",
  required: false,
  placeholder: "",
  isHidden: false
};
const AppContext = React.createContext();
function useAppContext() {
  const [appData, appActions] = F$2(AppContext);
  const {
    dispatch: appDispatch
  } = appActions;
  return __spreadProps(__spreadValues(__spreadValues({}, appData), appActions), {
    appDispatch
  });
}
const CheckoutFormContext = React.createContext();
function prepareFields(values, sectionId) {
  const fields = {};
  Object.keys(values).forEach((fieldName) => {
    fields[fieldName] = `${sectionId}.${fieldName}`;
  });
  return fields;
}
function useFormSection({
  id: id2,
  formikData,
  initialValues: initialValues2,
  submitHandler,
  validationSchema: validationSchema2
}) {
  const {
    registerFormSection
  } = F$2(CheckoutFormContext);
  const {
    isFormSectionValid
  } = formikData || {};
  y$2(() => {
    registerFormSection({
      id: id2,
      initialValues: initialValues2,
      validationSchema: validationSchema2
    });
  }, [id2, initialValues2, validationSchema2, registerFormSection]);
  const context = {
    formId: id2,
    isFormValid: isFormSectionValid,
    fields: prepareFields(initialValues2, id2),
    submitHandler,
    validationSchema: validationSchema2
  };
  return context;
}
const CartContext = React.createContext();
function useCartContext() {
  const [cartData, cartActions] = F$2(CartContext);
  return __spreadValues(__spreadValues({}, cartData), cartActions);
}
function useFormEditMode(initValue = true) {
  const [editMode, setEditMode] = l$1(initValue);
  const setFormToEditMode = A$2(() => setEditMode(true), []);
  const setFormEditMode = A$2((status) => setEditMode(status), []);
  const setFormToViewMode = A$2(() => setEditMode(false), []);
  return {
    editMode,
    viewMode: !editMode,
    setFormToEditMode,
    setFormEditMode,
    setFormToViewMode
  };
}
function useFormikMemorizer(formSectionId) {
  const { dirty, values, errors, touched, setFieldValue, setFieldTouched } = useFormikContext();
  const formSectionErrors = lodash_get(errors, formSectionId);
  const formSectionValues = lodash_get(values, formSectionId);
  const formSectionTouched = lodash_get(touched, formSectionId);
  const isFormSectionTouched = !!formSectionTouched;
  const isFormSectionValid = dirty && isFormSectionTouched && !formSectionErrors;
  const sectionFormikData = d$1(() => ({
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    isFormSectionValid,
    formSectionTouched,
    isFormSectionTouched
  }), [
    setFieldValue,
    formSectionId,
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    isFormSectionValid,
    formSectionTouched,
    isFormSectionTouched
  ]);
  return sectionFormikData;
}
var map;
try {
  map = Map;
} catch (_2) {
}
var set$1;
try {
  set$1 = Set;
} catch (_2) {
}
function baseClone(src, circulars, clones) {
  if (!src || typeof src !== "object" || typeof src === "function") {
    return src;
  }
  if (src.nodeType && "cloneNode" in src) {
    return src.cloneNode(true);
  }
  if (src instanceof Date) {
    return new Date(src.getTime());
  }
  if (src instanceof RegExp) {
    return new RegExp(src);
  }
  if (Array.isArray(src)) {
    return src.map(clone);
  }
  if (map && src instanceof map) {
    return new Map(Array.from(src.entries()));
  }
  if (set$1 && src instanceof set$1) {
    return new Set(Array.from(src.values()));
  }
  if (src instanceof Object) {
    circulars.push(src);
    var obj = Object.create(src);
    clones.push(obj);
    for (var key in src) {
      var idx = circulars.findIndex(function(i2) {
        return i2 === src[key];
      });
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
    }
    return obj;
  }
  return src;
}
function clone(src) {
  return baseClone(src, [], []);
}
const toString$7 = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString$2 = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false)
    return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString$2.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString$7.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null)
    return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null)
      return result2;
    return value2;
  }, 2);
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".");
    if (value === null) {
      msg += `
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }
    return msg;
  },
  defined: "${path} must be defined"
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
function baseHas$1(object2, key) {
  return object2 != null && hasOwnProperty$a.call(object2, key);
}
var _baseHas = baseHas$1;
var isArray$9 = Array.isArray;
var isArray_1 = isArray$9;
var freeGlobal$2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$2;
var freeGlobal$1 = _freeGlobal;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$9 = freeGlobal$1 || freeSelf$1 || Function("return this")();
var _root = root$9;
var root$8 = _root;
var Symbol$6 = root$8.Symbol;
var _Symbol = Symbol$6;
var Symbol$5 = _Symbol;
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
var nativeObjectToString$1 = objectProto$c.toString;
var symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$b = Object.prototype;
var nativeObjectToString = objectProto$b.toString;
function objectToString$2(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$2;
var Symbol$4 = _Symbol, getRawTag = _getRawTag, objectToString$1 = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$1(value);
}
var _baseGetTag = baseGetTag$5;
function isObjectLike$6(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$6;
var baseGetTag$4 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
var symbolTag$2 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$5(value) && baseGetTag$4(value) == symbolTag$2;
}
var isSymbol_1 = isSymbol$4;
var isArray$8 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/;
function isKey$4(value, object2) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object2 != null && value in Object(object2);
}
var _isKey = isKey$4;
function isObject$5(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$5;
var baseGetTag$3 = _baseGetTag, isObject$4 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$4(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$7 = _root;
var coreJsData$2 = root$7["__core-js_shared__"];
var _coreJsData = coreJsData$2;
var coreJsData$1 = _coreJsData;
var maskSrcKey$1 = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$2(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
var _isMasked = isMasked$2;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$3(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var _toSource = toSource$3;
var isFunction$2 = isFunction_1, isMasked$1 = _isMasked, isObject$3 = isObject_1, toSource$2 = _toSource;
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$a = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
var reIsNative$1 = RegExp("^" + funcToString$1.call(hasOwnProperty$8).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$2(value) {
  if (!isObject$3(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$2(value));
}
var _baseIsNative = baseIsNative$2;
function getValue$2(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var _getValue = getValue$2;
var baseIsNative$1 = _baseIsNative, getValue$1 = _getValue;
function getNative$8(object2, key) {
  var value = getValue$1(object2, key);
  return baseIsNative$1(value) ? value : void 0;
}
var _getNative = getNative$8;
var getNative$7 = _getNative;
var nativeCreate$5 = getNative$7(Object, "create");
var _nativeCreate = nativeCreate$5;
var nativeCreate$4 = _nativeCreate;
function hashClear$2() {
  this.__data__ = nativeCreate$4 ? nativeCreate$4(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$2;
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$2;
var nativeCreate$3 = _nativeCreate;
var HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$3) {
    var result = data[key];
    return result === HASH_UNDEFINED$3 ? void 0 : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$2;
var nativeCreate$2 = _nativeCreate;
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$2 ? data[key] !== void 0 : hasOwnProperty$6.call(data, key);
}
var _hashHas = hashHas$2;
var nativeCreate$1 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
function hashSet$2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$2 : value;
  return this;
}
var _hashSet = hashSet$2;
var hashClear$1 = _hashClear, hashDelete$1 = _hashDelete, hashGet$1 = _hashGet, hashHas$1 = _hashHas, hashSet$1 = _hashSet;
function Hash$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$2.prototype.clear = hashClear$1;
Hash$2.prototype["delete"] = hashDelete$1;
Hash$2.prototype.get = hashGet$1;
Hash$2.prototype.has = hashHas$1;
Hash$2.prototype.set = hashSet$1;
var _Hash = Hash$2;
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$2;
function eq$3(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$3;
var eq$2 = eq_1;
function assocIndexOf$5(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$2(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$5;
var assocIndexOf$4 = _assocIndexOf;
var arrayProto$1 = Array.prototype;
var splice$1 = arrayProto$1.splice;
function listCacheDelete$2(key) {
  var data = this.__data__, index2 = assocIndexOf$4(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$2;
var assocIndexOf$3 = _assocIndexOf;
function listCacheGet$2(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$2;
var assocIndexOf$2 = _assocIndexOf;
function listCacheHas$2(key) {
  return assocIndexOf$2(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$2;
var assocIndexOf$1 = _assocIndexOf;
function listCacheSet$2(key, value) {
  var data = this.__data__, index2 = assocIndexOf$1(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$2;
var listCacheClear$1 = _listCacheClear, listCacheDelete$1 = _listCacheDelete, listCacheGet$1 = _listCacheGet, listCacheHas$1 = _listCacheHas, listCacheSet$1 = _listCacheSet;
function ListCache$5(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$5.prototype.clear = listCacheClear$1;
ListCache$5.prototype["delete"] = listCacheDelete$1;
ListCache$5.prototype.get = listCacheGet$1;
ListCache$5.prototype.has = listCacheHas$1;
ListCache$5.prototype.set = listCacheSet$1;
var _ListCache = ListCache$5;
var getNative$6 = _getNative, root$6 = _root;
var Map$5 = getNative$6(root$6, "Map");
var _Map = Map$5;
var Hash$1 = _Hash, ListCache$4 = _ListCache, Map$4 = _Map;
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$1(),
    "map": new (Map$4 || ListCache$4)(),
    "string": new Hash$1()
  };
}
var _mapCacheClear = mapCacheClear$2;
function isKeyable$2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$2;
var isKeyable$1 = _isKeyable;
function getMapData$5(map2, key) {
  var data = map2.__data__;
  return isKeyable$1(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$5;
var getMapData$4 = _getMapData;
function mapCacheDelete$2(key) {
  var result = getMapData$4(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$2;
var getMapData$3 = _getMapData;
function mapCacheGet$2(key) {
  return getMapData$3(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$2;
var getMapData$2 = _getMapData;
function mapCacheHas$2(key) {
  return getMapData$2(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$2;
var getMapData$1 = _getMapData;
function mapCacheSet$2(key, value) {
  var data = getMapData$1(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$2;
var mapCacheClear$1 = _mapCacheClear, mapCacheDelete$1 = _mapCacheDelete, mapCacheGet$1 = _mapCacheGet, mapCacheHas$1 = _mapCacheHas, mapCacheSet$1 = _mapCacheSet;
function MapCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$4.prototype.clear = mapCacheClear$1;
MapCache$4.prototype["delete"] = mapCacheDelete$1;
MapCache$4.prototype.get = mapCacheGet$1;
MapCache$4.prototype.has = mapCacheHas$1;
MapCache$4.prototype.set = mapCacheSet$1;
var _MapCache = MapCache$4;
var MapCache$3 = _MapCache;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize$2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$3)();
  return memoized;
}
memoize$2.Cache = MapCache$3;
var memoize_1 = memoize$2;
var memoize$1 = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize$1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath$2 = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName$1, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number2 || match);
  });
  return result;
});
var _stringToPath = stringToPath$2;
function arrayMap$1(array2, iteratee) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array2[index2], index2, array2);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$3 = _Symbol, arrayMap = _arrayMap, isArray$7 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$2 = 1 / 0;
var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : void 0, symbolToString$1 = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString$2(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$7(value)) {
    return arrayMap(value, baseToString$2) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _baseToString = baseToString$2;
var baseToString$1 = _baseToString;
function toString$6(value) {
  return value == null ? "" : baseToString$1(value);
}
var toString_1 = toString$6;
var isArray$6 = isArray_1, isKey$3 = _isKey, stringToPath$1 = _stringToPath, toString$5 = toString_1;
function castPath$3(value, object2) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$3(value, object2) ? [value] : stringToPath$1(toString$5(value));
}
var _castPath = castPath$3;
var baseGetTag$2 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$4(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$3 = isObjectLike_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$3(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$2 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint$1.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$3;
var isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$2 = _castPath, isArguments$1 = isArguments_1, isArray$5 = isArray_1, isIndex$2 = _isIndex, isLength$2 = isLength_1, toKey$4 = _toKey;
function hasPath$2(object2, path, hasFunc) {
  path = castPath$2(path, object2);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$4(path[index2]);
    if (!(result = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object2 == null ? 0 : object2.length;
  return !!length && isLength$2(length) && isIndex$2(key, length) && (isArray$5(object2) || isArguments$1(object2));
}
var _hasPath = hasPath$2;
var baseHas = _baseHas, hasPath$1 = _hasPath;
function has(object2, path) {
  return object2 != null && hasPath$1(object2, path, baseHas);
}
var has_1 = has;
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  constructor(refs, options) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    if (typeof options === "function") {
      this.fn = options;
      return;
    }
    if (!has_1(options, "is"))
      throw new TypeError("`is:` is required for `when()` conditions");
    if (!options.then && !options.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = options;
    let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
    this.fn = function(...args) {
      let options2 = args.pop();
      let schema = args.pop();
      let branch = check(...args) ? then : otherwise;
      if (!branch)
        return void 0;
      if (typeof branch === "function")
        return branch(schema);
      return schema.concat(branch.resolve(options2));
    };
  }
  resolve(base, options) {
    let values = this.refs.map((ref) => ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn.apply(base, values.concat(base, options));
    if (schema === void 0 || schema === base)
      return base;
    if (!isSchema(schema))
      throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
function _extends$4() {
  _extends$4 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path)
      params = _extends$4({}, params, {
        path
      });
    if (typeof message === "string")
      return message.replace(strReg, (_2, key) => printValue(params[key]));
    if (typeof message === "function")
      return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationError);
  }
}
const once = (cb2) => {
  let fired = false;
  return (...args) => {
    if (fired)
      return;
    fired = true;
    cb2(...args);
  };
};
function runTests(options, cb2) {
  let {
    endEarly,
    tests,
    args,
    value,
    errors,
    sort,
    path
  } = options;
  let callback = once(cb2);
  let count = tests.length;
  const nestedErrors = [];
  errors = errors ? errors : [];
  if (!count)
    return errors.length ? callback(new ValidationError(errors, value, path)) : callback(null, value);
  for (let i2 = 0; i2 < tests.length; i2++) {
    const test = tests[i2];
    test(args, function finishTestRun(err) {
      if (err) {
        if (!ValidationError.isError(err)) {
          return callback(err, value);
        }
        if (endEarly) {
          err.value = value;
          return callback(err, value);
        }
        nestedErrors.push(err);
      }
      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort)
            nestedErrors.sort(sort);
          if (errors.length)
            nestedErrors.push(...errors);
          errors = nestedErrors;
        }
        if (errors.length) {
          callback(new ValidationError(errors, value, path), value);
          return;
        }
        callback(null, value);
      }
    });
  }
}
var getNative$5 = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative$5(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$2(object2, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
function createBaseFor$1(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
function baseTimes$1(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
(function(module2, exports2) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer2 = moduleExports2 ? root2.Buffer : void 0;
  var nativeIsBuffer2 = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer2 || stubFalse2;
  module2.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
(function(module2, exports2) {
  var freeGlobal2 = _freeGlobal;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess2 = moduleExports2 && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
    } catch (e2) {
    }
  }();
  module2.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$4 = isArray_1, isBuffer$1 = isBuffer$2.exports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$5 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeys$1(object2) {
  if (!isPrototype(object2)) {
    return nativeKeys(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$3.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
}
var keys_1 = keys$3;
var baseFor = _baseFor, keys$2 = keys_1;
function baseForOwn$2(object2, iteratee) {
  return object2 && baseFor(object2, iteratee, keys$2);
}
var _baseForOwn = baseForOwn$2;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$2 = _ListCache, Map$3 = _Map, MapCache$2 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$2) {
    var pairs = data.__data__;
    if (!Map$3 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache$1 = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache$1(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$1);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache$1 = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$1();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length;
  while (++index2 < length) {
    if (predicate(array2[index2], index2, array2)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index2 < arrLength) {
    var arrValue = array2[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array2);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$5 = _root;
var Uint8Array$1 = root$5.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$2 = _Symbol, Uint8Array = _Uint8Array, eq$1 = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(object2, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
        return false;
      }
      object2 = object2.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array(object2), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq$1(+object2, +other);
    case errorTag:
      return object2.name == other.name && object2.message == other.message;
    case regexpTag:
    case stringTag:
      return object2 == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object2.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object2);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object2, other);
      var result = equalArrays$1(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object2);
      return result;
    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object2) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array2, values) {
  var index2 = -1, length = values.length, offset = array2.length;
  while (++index2 < length) {
    array2[offset + index2] = values[index2];
  }
  return array2;
}
var _arrayPush = arrayPush$1;
var arrayPush = _arrayPush, isArray$3 = isArray_1;
function baseGetAllKeys$1(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$3(object2) ? result : arrayPush(result, symbolsFunc(object2));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array2[index2];
    if (predicate(value, index2, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols(object2), function(symbol) {
    return propertyIsEnumerable.call(object2, symbol);
  });
};
var _getSymbols = getSymbols$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object2) {
  return baseGetAllKeys(object2, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object2);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object2;
  }
  var result = true;
  stack.set(object2, other);
  stack.set(other, object2);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object2[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object2.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object2);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$4 = _getNative, root$4 = _root;
var DataView$1 = getNative$4(root$4, "DataView");
var _DataView = DataView$1;
var getNative$3 = _getNative, root$3 = _root;
var Promise$2 = getNative$3(root$3, "Promise");
var _Promise = Promise$2;
var getNative$2 = _getNative, root$2 = _root;
var Set$2 = getNative$2(root$2, "Set");
var _Set = Set$2;
var getNative$1 = _getNative, root$1 = _root;
var WeakMap$2 = getNative$1(root$1, "WeakMap");
var _WeakMap = WeakMap$2;
var DataView = _DataView, Map$2 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap$1 = _WeakMap, baseGetTag = _baseGetTag, toSource$1 = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource$1(DataView), mapCtorString = toSource$1(Map$2), promiseCtorString = toSource$1(Promise$1), setCtorString = toSource$1(Set$1), weakMapCtorString = toSource$1(WeakMap$1);
var getTag$1 = baseGetTag;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag$1(new Map$2()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource$1(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$2 = isArray_1, isBuffer = isBuffer$2.exports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$2(object2), othIsArr = isArray$2(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object2)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$1 = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$1(value) && !isObjectLike$1(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object2, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject$2 = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject$2(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object2) {
  var result = keys(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var castPath$1 = _castPath, toKey$3 = _toKey;
function baseGet$2(object2, path) {
  path = castPath$1(path, object2);
  var index2 = 0, length = path.length;
  while (object2 != null && index2 < length) {
    object2 = object2[toKey$3(path[index2++])];
  }
  return index2 && index2 == length ? object2 : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet$1(object2, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$2 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$2(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$2(path), srcValue);
  }
  return function(object2) {
    var objValue = get(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object2) {
    return baseGet(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey$1 = _isKey, toKey$1 = _toKey;
function property$1(path) {
  return isKey$1(path) ? baseProperty(toKey$1(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray$1 = isArray_1, property = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$2;
var baseAssignValue$1 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$1 = _baseIteratee;
function mapValues(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee$1(iteratee);
  baseForOwn$1(object2, function(value, key, object3) {
    baseAssignValue$1(result, key, iteratee(value, key, object3));
  });
  return result;
}
var mapValues_1 = mapValues;
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values))
    this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index2 = 0;
      var len = parts.length;
      var data = obj;
      while (index2 < len - 1) {
        var part = parts[index2];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index2++]];
      }
      data[parts[index2]] = value;
    });
  },
  getter: function(path, safe) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index2 = 0, len = parts.length;
      while (index2 < len) {
        if (data != null || !safe)
          data = data[parts[index2++]];
        else
          return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb2, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb2, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(path, split(path).map(function(part) {
    return part.replace(CLEAN_QUOTES_REGEX, "$2");
  }));
}
function split(path) {
  return path.match(SPLIT_REGEX);
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray2, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray2 = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray2, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter)
      result = this.getter(result || {});
    if (this.map)
      result = this.map(result);
    return result;
  }
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
function _extends$3() {
  _extends$3 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function createValidation(config2) {
  function validate2(_ref, cb2) {
    let {
      value,
      path = "",
      label,
      options,
      originalValue,
      sync
    } = _ref, rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name,
      test,
      params,
      message
    } = config2;
    let {
      parent,
      context
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = mapValues_1(_extends$3({
        value,
        originalValue,
        label,
        path: overrides.path || path
      }, params, overrides.params), resolve);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    let ctx = _extends$3({
      path,
      parent,
      type: name,
      createError,
      resolve,
      options,
      originalValue
    }, rest);
    if (!sync) {
      try {
        Promise.resolve(test.call(ctx, value, ctx)).then((validOrError) => {
          if (ValidationError.isError(validOrError))
            cb2(validOrError);
          else if (!validOrError)
            cb2(createError());
          else
            cb2(null, validOrError);
        }).catch(cb2);
      } catch (err) {
        cb2(err);
      }
      return;
    }
    let result;
    try {
      var _ref2;
      result = test.call(ctx, value, ctx);
      if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === "function") {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      }
    } catch (err) {
      cb2(err);
      return;
    }
    if (ValidationError.isError(result))
      cb2(result);
    else if (!result)
      cb2(createError());
    else
      cb2(null, result);
  }
  validate2.OPTIONS = config2;
  return validate2;
}
let trim = (part) => part.substr(0, part.length - 1).substr(1);
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema
    };
  propertyExpr.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? trim(_part) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    if (schema.innerType) {
      let idx = isArray2 ? parseInt(part, 10) : 0;
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part])
        throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet {
  constructor() {
    this.list = void 0;
    this.refs = void 0;
    this.list = new Set();
    this.refs = new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const description = [];
    for (const item of this.list)
      description.push(item);
    for (const [, ref] of this.refs)
      description.push(ref.describe());
    return description;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  resolveAll(resolve) {
    return this.toArray().reduce((acc, e2) => acc.concat(Reference.isRef(e2) ? resolve(e2) : e2), []);
  }
  add(value) {
    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  }
  delete(value) {
    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  }
  clone() {
    const next = new ReferenceSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.list.forEach((value) => next.add(value));
    newItems.refs.forEach((value) => next.add(value));
    removeItems.list.forEach((value) => next.delete(value));
    removeItems.refs.forEach((value) => next.delete(value));
    return next;
  }
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
class BaseSchema {
  constructor(options) {
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this._typeError = void 0;
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = Object.create(null);
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = (options == null ? void 0 : options.type) || "mixed";
    this.spec = _extends$2({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      presence: "optional"
    }, options == null ? void 0 : options.spec);
  }
  get _type() {
    return this.type;
  }
  _typeCheck(_value) {
    return true;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec)
        Object.assign(this.spec, spec);
      return this;
    }
    const next = Object.create(Object.getPrototypeOf(this));
    next.type = this.type;
    next._typeError = this._typeError;
    next._whitelistError = this._whitelistError;
    next._blacklistError = this._blacklistError;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.exclusiveTests = _extends$2({}, this.exclusiveTests);
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(_extends$2({}, this.spec, spec));
    return next;
  }
  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0)
      return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn2) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn2(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this)
      return this;
    if (schema.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = _extends$2({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined._typeError || (combined._typeError = base._typeError);
    combined._whitelistError || (combined._whitelistError = base._whitelistError);
    combined._blacklistError || (combined._blacklistError = base._blacklistError);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next) => {
      schema.tests.forEach((fn2) => {
        next.test(fn2.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v2) {
    if (this.spec.nullable && v2 === null)
      return true;
    return this._typeCheck(v2);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((schema2, condition) => condition.resolve(schema2, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(_extends$2({
      value
    }, options));
    let result = resolvedSchema._cast(value, options);
    if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result) !== true) {
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema._type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue, _options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((value2, fn2) => fn2.call(this, value2, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, cb2) {
    let {
      sync,
      path,
      from = [],
      originalValue = _value,
      strict = this.spec.strict,
      abortEarly = this.spec.abortEarly
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, _extends$2({
        assert: false
      }, options));
    }
    let args = {
      value,
      path,
      options,
      originalValue,
      schema: this,
      label: this.spec.label,
      sync,
      from
    };
    let initialTests = [];
    if (this._typeError)
      initialTests.push(this._typeError);
    let finalTests = [];
    if (this._whitelistError)
      finalTests.push(this._whitelistError);
    if (this._blacklistError)
      finalTests.push(this._blacklistError);
    runTests({
      args,
      value,
      path,
      sync,
      tests: initialTests,
      endEarly: abortEarly
    }, (err) => {
      if (err)
        return void cb2(err, value);
      runTests({
        tests: this.tests.concat(finalTests),
        args,
        path,
        sync,
        value,
        endEarly: abortEarly
      }, cb2);
    });
  }
  validate(value, options, maybeCb) {
    let schema = this.resolve(_extends$2({}, options, {
      value
    }));
    return typeof maybeCb === "function" ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema._validate(value, options, (err, value2) => {
      if (err)
        reject(err);
      else
        resolve(value2);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(_extends$2({}, options, {
      value
    }));
    let result;
    schema._validate(value, _extends$2({}, options, {
      sync: true
    }), (err, value2) => {
      if (err)
        throw err;
      result = value2;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err))
        return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err))
        return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    let next = this.clone();
    next.spec.strict = isStrict;
    return next;
  }
  _isPresent(value) {
    return value != null;
  }
  defined(message = mixed.defined) {
    return this.test({
      message,
      name: "defined",
      exclusive: true,
      test(value) {
        return value !== void 0;
      }
    });
  }
  required(message = mixed.required) {
    return this.clone({
      presence: "required"
    }).withMutation((s2) => s2.test({
      message,
      name: "required",
      exclusive: true,
      test(value) {
        return this.schema._isPresent(value);
      }
    }));
  }
  notRequired() {
    let next = this.clone({
      presence: "optional"
    });
    next.tests = next.tests.filter((test) => test.OPTIONS.name !== "required");
    return next;
  }
  nullable(isNullable = true) {
    let next = this.clone({
      nullable: isNullable !== false
    });
    return next;
  }
  transform(fn2) {
    let next = this.clone();
    next.transforms.push(fn2);
    return next;
  }
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    let next = this.clone();
    let validate2 = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name)
      next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter((fn2) => {
      if (fn2.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn2.OPTIONS.test === validate2.OPTIONS.test)
          return false;
      }
      return true;
    });
    next.tests.push(validate2);
    return next;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling)
        next.deps.push(dep.key);
    });
    next.conditions.push(new Condition(deps, options));
    return next;
  }
  typeError(message) {
    let next = this.clone();
    next._typeError = createValidation({
      message,
      name: "typeError",
      test(value) {
        if (value !== void 0 && !this.schema.isType(value))
          return this.createError({
            params: {
              type: this.schema._type
            }
          });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next = this.clone();
    enums.forEach((val) => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message,
      name: "oneOf",
      test(value) {
        if (value === void 0)
          return true;
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: valids.toArray().join(", "),
            resolved
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next = this.clone();
    enums.forEach((val) => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value))
          return this.createError({
            params: {
              values: invalids.toArray().join(", "),
              resolved
            }
          });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }
  describe() {
    const next = this.clone();
    const {
      label,
      meta
    } = next.spec;
    const description = {
      meta,
      label,
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map((fn2) => ({
        name: fn2.OPTIONS.name,
        params: fn2.OPTIONS.params
      })).filter((n2, idx, list) => list.findIndex((c2) => c2.name === n2.name) === idx)
    };
    return description;
  }
}
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"])
  BaseSchema.prototype[`${method}At`] = function(path, value, options = {}) {
    const {
      parent,
      parentPath,
      schema
    } = getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], _extends$2({}, options, {
      parent,
      path
    }));
  };
for (const alias of ["equals", "is"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias of ["not", "nope"])
  BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;
const isAbsent = (value) => value == null;
function create$4() {
  return new BooleanSchema();
}
class BooleanSchema extends BaseSchema {
  constructor() {
    super({
      type: "boolean"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (!this.isType(value)) {
          if (/^(true|1)$/i.test(String(value)))
            return true;
          if (/^(false|0)$/i.test(String(value)))
            return false;
        }
        return value;
      });
    });
  }
  _typeCheck(v2) {
    if (v2 instanceof Boolean)
      v2 = v2.valueOf();
    return typeof v2 === "boolean";
  }
  isTrue(message = boolean.isValue) {
    return this.test({
      message,
      name: "is-value",
      exclusive: true,
      params: {
        value: "true"
      },
      test(value) {
        return isAbsent(value) || value === true;
      }
    });
  }
  isFalse(message = boolean.isValue) {
    return this.test({
      message,
      name: "is-value",
      exclusive: true,
      params: {
        value: "false"
      },
      test(value) {
        return isAbsent(value) || value === false;
      }
    });
  }
}
create$4.prototype = BooleanSchema.prototype;
let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$3() {
  return new StringSchema();
}
class StringSchema extends BaseSchema {
  constructor() {
    super({
      type: "string"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        if (Array.isArray(value))
          return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag)
          return value;
        return strValue;
      });
    });
  }
  _typeCheck(value) {
    if (value instanceof String)
      value = value.valueOf();
    return typeof value === "string";
  }
  _isPresent(value) {
    return super._isPresent(value) && !!value.length;
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      test(value) {
        return isAbsent(value) || value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      test: (value) => isAbsent(value) || value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  }
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$3.prototype = StringSchema.prototype;
let isNaN$1 = (value) => value != +value;
function create$2() {
  return new NumberSchema();
}
class NumberSchema extends BaseSchema {
  constructor() {
    super({
      type: "number"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        let parsed = value;
        if (typeof parsed === "string") {
          parsed = parsed.replace(/\s/g, "");
          if (parsed === "")
            return NaN;
          parsed = +parsed;
        }
        if (this.isType(parsed))
          return parsed;
        return parseFloat(parsed);
      });
    });
  }
  _typeCheck(value) {
    if (value instanceof Number)
      value = value.valueOf();
    return typeof value === "number" && !isNaN$1(value);
  }
  min(min, message = number.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value >= this.resolve(min);
      }
    });
  }
  max(max, message = number.max) {
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value <= this.resolve(max);
      }
    });
  }
  lessThan(less, message = number.lessThan) {
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        less
      },
      test(value) {
        return isAbsent(value) || value < this.resolve(less);
      }
    });
  }
  moreThan(more, message = number.moreThan) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        more
      },
      test(value) {
        return isAbsent(value) || value > this.resolve(more);
      }
    });
  }
  positive(msg = number.positive) {
    return this.moreThan(0, msg);
  }
  negative(msg = number.negative) {
    return this.lessThan(0, msg);
  }
  integer(message = number.integer) {
    return this.test({
      name: "integer",
      message,
      test: (val) => isAbsent(val) || Number.isInteger(val)
    });
  }
  truncate() {
    return this.transform((value) => !isAbsent(value) ? value | 0 : value);
  }
  round(method) {
    var _method;
    let avail = ["ceil", "floor", "round", "trunc"];
    method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || "round";
    if (method === "trunc")
      return this.truncate();
    if (avail.indexOf(method.toLowerCase()) === -1)
      throw new TypeError("Only valid options for round() are: " + avail.join(", "));
    return this.transform((value) => !isAbsent(value) ? Math[method](value) : value);
  }
}
create$2.prototype = NumberSchema.prototype;
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i2 = 0, k2; k2 = numericKeys[i2]; ++i2)
      struct[k2] = +struct[k2] || 0;
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === ""))
      timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+")
          minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else
    timestamp = Date.parse ? Date.parse(date2) : NaN;
  return timestamp;
}
let invalidDate = new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends BaseSchema {
  constructor() {
    super({
      type: "date"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value))
          return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : invalidDate;
      });
    });
  }
  _typeCheck(v2) {
    return isDate(v2) && !isNaN(v2.getTime());
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast))
        throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    let limit = this.prepareParam(max, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
function arrayReduce$1(array2, iteratee, accumulator, initAccum) {
  var index2 = -1, length = array2 == null ? 0 : array2.length;
  if (initAccum && length) {
    accumulator = array2[++index2];
  }
  while (++index2 < length) {
    accumulator = iteratee(accumulator, array2[index2], index2, array2);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(object2) {
  return function(key) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _basePropertyOf = basePropertyOf$1;
var basePropertyOf = _basePropertyOf;
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "s"
};
var deburrLetter$1 = basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$4 = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;
var rsCombo$2 = "[" + rsComboRange$3 + "]";
var reComboMark = RegExp(rsCombo$2, "g");
function deburr$1(string2) {
  string2 = toString$4(string2);
  return string2 && string2.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string2) {
  return string2.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string2) {
  return reHasUnicodeWord.test(string2);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange$2 = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['\u2019]", rsBreak = "[" + rsBreakRange + "]", rsCombo$1 = "[" + rsComboRange$2 + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$1 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$2 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ$2 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$2 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$2 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsEmoji = "(?:" + [rsDingbat, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsSeq$1;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords$1(string2) {
  return string2.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString$3 = toString_1, unicodeWords = _unicodeWords;
function words$1(string2, pattern, guard) {
  string2 = toString$3(string2);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string2) ? unicodeWords(string2) : asciiWords(string2);
  }
  return string2.match(pattern) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['\u2019]";
var reApos = RegExp(rsApos, "g");
function createCompounder$2(callback) {
  return function(string2) {
    return arrayReduce(words(deburr(string2).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$2;
var createCompounder$1 = _createCompounder;
var snakeCase = createCompounder$1(function(result, word, index2) {
  return result + (index2 ? "_" : "") + word.toLowerCase();
});
var snakeCase_1 = snakeCase;
function baseSlice$1(array2, start, end) {
  var index2 = -1, length = array2.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array2[index2 + start];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseSlice = _baseSlice;
function castSlice$1(array2, start, end) {
  var length = array2.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array2 : baseSlice(array2, start, end);
}
var _castSlice = castSlice$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode$2(string2) {
  return reHasUnicode.test(string2);
}
var _hasUnicode = hasUnicode$2;
function asciiToArray$1(string2) {
  return string2.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray$1(string2) {
  return string2.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$1 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string2) {
  return hasUnicode$1(string2) ? unicodeToArray(string2) : asciiToArray(string2);
}
var _stringToArray = stringToArray$1;
var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$2 = toString_1;
function createCaseFirst$1(methodName) {
  return function(string2) {
    string2 = toString$2(string2);
    var strSymbols = hasUnicode(string2) ? stringToArray(string2) : void 0;
    var chr = strSymbols ? strSymbols[0] : string2.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string2.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$1;
var createCaseFirst = _createCaseFirst;
var upperFirst$1 = createCaseFirst("toUpperCase");
var upperFirst_1 = upperFirst$1;
var toString$1 = toString_1, upperFirst = upperFirst_1;
function capitalize$2(string2) {
  return upperFirst(toString$1(string2).toLowerCase());
}
var capitalize_1 = capitalize$2;
var capitalize$1 = capitalize_1, createCompounder = _createCompounder;
var camelCase = createCompounder(function(result, word, index2) {
  word = word.toLowerCase();
  return result + (index2 ? capitalize$1(word) : word);
});
var camelCase_1 = camelCase;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapKeys(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object2, function(value, key, object3) {
    baseAssignValue(result, iteratee(value, key, object3), value);
  });
  return result;
}
var mapKeys_1 = mapKeys;
var toposort$2 = { exports: {} };
toposort$2.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$2.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i2 = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i2--) {
    if (!visited[i2])
      visit(nodes[i2], i2, new Set());
  }
  return sorted;
  function visit(node, i3, predecessors) {
    if (predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch (e2) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
    }
    if (visited[i3])
      return;
    visited[i3] = true;
    var outgoing = outgoingEdges.get(node) || new Set();
    outgoing = Array.from(outgoing);
    if (i3 = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i3];
        visit(child, nodesHash.get(child), predecessors);
      } while (i3);
      predecessors.delete(node);
    }
    sorted[--cursor] = node;
  }
}
function uniqueNodes(arr) {
  var res = new Set();
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    var edge = arr[i2];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = new Map();
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    var edge = arr[i2];
    if (!edges.has(edge[0]))
      edges.set(edge[0], new Set());
    if (!edges.has(edge[1]))
      edges.set(edge[1], new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = new Map();
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    res.set(arr[i2], i2);
  }
  return res;
}
var toposort$1 = toposort$2.exports;
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = new Set();
  let excludes = new Set(excludedEdges.map(([a2, b2]) => `${a2}-${b2}`));
  function addNode(depPath, key) {
    let node = propertyExpr.split(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`))
      edges.push([key, node]);
  }
  for (const key in fields)
    if (has_1(fields, key)) {
      let value = fields[key];
      nodes.add(key);
      if (Reference.isRef(value) && value.isSibling)
        addNode(value.path, key);
      else if (isSchema(value) && "deps" in value)
        value.deps.forEach((path) => addNode(path, key));
    }
  return toposort$1.array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii2) => {
    var _err$path;
    if (((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !== -1) {
      idx = ii2;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys2) {
  return (a2, b2) => {
    return findIndex(keys2, a2) - findIndex(keys2, b2);
  };
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
let isObject$1 = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
class ObjectSchema extends BaseSchema {
  constructor(spec) {
    super({
      type: "object"
    });
    this.fields = Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      this.transform(function coerce(value) {
        if (typeof value === "string") {
          try {
            value = JSON.parse(value);
          } catch (err) {
            value = null;
          }
        }
        if (this.isType(value))
          return value;
        return null;
      });
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _typeCheck(value) {
    return isObject$1(value) || typeof value === "function";
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);
    if (value === void 0)
      return this.getDefault();
    if (!this._typeCheck(value))
      return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = this._nodes.concat(Object.keys(value).filter((v2) => this._nodes.indexOf(v2) === -1));
    let intermediateValue = {};
    let innerOptions = _extends$1({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = has_1(value, prop);
      if (field) {
        let fieldValue;
        let inputValue = value[prop];
        innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = "spec" in field ? field.spec : void 0;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec == null ? void 0 : fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ? field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== void 0) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, opts = {}, callback) {
    let errors = [];
    let {
      sync,
      from = [],
      originalValue = _value,
      abortEarly = this.spec.abortEarly,
      recursive = this.spec.recursive
    } = opts;
    from = [{
      schema: this,
      value: originalValue
    }, ...from];
    opts.__validating = true;
    opts.originalValue = originalValue;
    opts.from = from;
    super._validate(_value, opts, (err, value) => {
      if (err) {
        if (!ValidationError.isError(err) || abortEarly) {
          return void callback(err, value);
        }
        errors.push(err);
      }
      if (!recursive || !isObject$1(value)) {
        callback(errors[0] || null, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = this._nodes.map((key) => (_2, cb2) => {
        let path = key.indexOf(".") === -1 ? (opts.path ? `${opts.path}.` : "") + key : `${opts.path || ""}["${key}"]`;
        let field = this.fields[key];
        if (field && "validate" in field) {
          field.validate(value[key], _extends$1({}, opts, {
            path,
            from,
            strict: true,
            parent: value,
            originalValue: originalValue[key]
          }), cb2);
          return;
        }
        cb2(null);
      });
      runTests({
        sync,
        tests,
        value,
        errors,
        endEarly: abortEarly,
        sort: this._sortErrors,
        path: opts.path
      }, callback);
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = _extends$1({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      if (target === void 0) {
        nextFields[field] = schemaOrRef;
      } else if (target instanceof BaseSchema && schemaOrRef instanceof BaseSchema) {
        nextFields[field] = schemaOrRef.concat(target);
      }
    }
    return next.withMutation(() => next.shape(nextFields, this._excludedEdges));
  }
  getDefaultFromShape() {
    let dft = {};
    this._nodes.forEach((key) => {
      const field = this.fields[key];
      dft[key] = "default" in field ? field.getDefault() : void 0;
    });
    return dft;
  }
  _getDefault() {
    if ("default" in this.spec) {
      return super._getDefault();
    }
    if (!this._nodes.length) {
      return void 0;
    }
    return this.getDefaultFromShape();
  }
  shape(additions, excludes = []) {
    let next = this.clone();
    let fields = Object.assign(next.fields, additions);
    next.fields = fields;
    next._sortErrors = sortByKeyOrder(Object.keys(fields));
    if (excludes.length) {
      if (!Array.isArray(excludes[0]))
        excludes = [excludes];
      next._excludedEdges = [...next._excludedEdges, ...excludes];
    }
    next._nodes = sortFields(fields, next._excludedEdges);
    return next;
  }
  pick(keys2) {
    const picked = {};
    for (const key of keys2) {
      if (this.fields[key])
        picked[key] = this.fields[key];
    }
    return this.clone().withMutation((next) => {
      next.fields = {};
      return next.shape(picked);
    });
  }
  omit(keys2) {
    const next = this.clone();
    const fields = next.fields;
    next.fields = {};
    for (const key of keys2) {
      delete fields[key];
    }
    return next.withMutation(() => next.shape(fields));
  }
  from(from, to, alias) {
    let fromGetter = propertyExpr.getter(from, true);
    return this.transform((obj) => {
      if (obj == null)
        return obj;
      let newObj = obj;
      if (has_1(obj, from)) {
        newObj = _extends$1({}, obj);
        if (!alias)
          delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow === "string") {
      message = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: "noUnknown",
      exclusive: true,
      message,
      test(value) {
        if (value == null)
          return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn2) {
    return this.transform((obj) => obj && mapKeys_1(obj, (_2, key) => fn2(key)));
  }
  camelCase() {
    return this.transformKeys(camelCase_1);
  }
  snakeCase() {
    return this.transformKeys(snakeCase_1);
  }
  constantCase() {
    return this.transformKeys((key) => snakeCase_1(key).toUpperCase());
  }
  describe() {
    let base = super.describe();
    base.fields = mapValues_1(this.fields, (value) => value.describe());
    return base;
  }
}
function create$1(spec) {
  return new ObjectSchema(spec);
}
create$1.prototype = ObjectSchema.prototype;
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function create(type) {
  return new ArraySchema(type);
}
class ArraySchema extends BaseSchema {
  constructor(type) {
    super({
      type: "array"
    });
    this.innerType = void 0;
    this.innerType = type;
    this.withMutation(() => {
      this.transform(function(values) {
        if (typeof values === "string")
          try {
            values = JSON.parse(values);
          } catch (err) {
            values = null;
          }
        return this.isType(values) ? values : null;
      });
    });
  }
  _typeCheck(v2) {
    return Array.isArray(v2);
  }
  get _subType() {
    return this.innerType;
  }
  _cast(_value, _opts) {
    const value = super._cast(_value, _opts);
    if (!this._typeCheck(value) || !this.innerType)
      return value;
    let isChanged = false;
    const castArray = value.map((v2, idx) => {
      const castElement = this.innerType.cast(v2, _extends({}, _opts, {
        path: `${_opts.path || ""}[${idx}]`
      }));
      if (castElement !== v2) {
        isChanged = true;
      }
      return castElement;
    });
    return isChanged ? castArray : value;
  }
  _validate(_value, options = {}, callback) {
    var _options$abortEarly, _options$recursive;
    let errors = [];
    let sync = options.sync;
    let path = options.path;
    let innerType = this.innerType;
    let endEarly = (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly;
    let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
    let originalValue = options.originalValue != null ? options.originalValue : _value;
    super._validate(_value, options, (err, value) => {
      if (err) {
        if (!ValidationError.isError(err) || endEarly) {
          return void callback(err, value);
        }
        errors.push(err);
      }
      if (!recursive || !innerType || !this._typeCheck(value)) {
        callback(errors[0] || null, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = new Array(value.length);
      for (let idx = 0; idx < value.length; idx++) {
        let item = value[idx];
        let path2 = `${options.path || ""}[${idx}]`;
        let innerOptions = _extends({}, options, {
          path: path2,
          strict: true,
          parent: value,
          index: idx,
          originalValue: originalValue[idx]
        });
        tests[idx] = (_2, cb2) => innerType.validate(item, innerOptions, cb2);
      }
      runTests({
        sync,
        path,
        value,
        errors,
        endEarly,
        tests
      }, callback);
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.innerType = this.innerType;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    next.innerType = this.innerType;
    if (schema.innerType)
      next.innerType = next.innerType ? next.innerType.concat(schema.innerType) : schema.innerType;
    return next;
  }
  of(schema) {
    let next = this.clone();
    if (!isSchema(schema))
      throw new TypeError("`array.of()` sub-schema must be a valid yup schema not: " + printValue(schema));
    next.innerType = schema;
    return next;
  }
  length(length, message = array.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      test(value) {
        return isAbsent(value) || value.length === this.resolve(length);
      }
    });
  }
  min(min, message) {
    message = message || array.min;
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value.length >= this.resolve(min);
      }
    });
  }
  max(max, message) {
    message = message || array.max;
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value.length <= this.resolve(max);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((val, original) => {
      if (this._typeCheck(val))
        return val;
      return original == null ? [] : [].concat(original);
    });
  }
  compact(rejector) {
    let reject = !rejector ? (v2) => !!v2 : (v2, i2, a2) => !rejector(v2, i2, a2);
    return this.transform((values) => values != null ? values.filter(reject) : values);
  }
  describe() {
    let base = super.describe();
    if (this.innerType)
      base.innerType = this.innerType.describe();
    return base;
  }
  nullable(isNullable = true) {
    return super.nullable(isNullable);
  }
  defined() {
    return super.defined();
  }
  required(msg) {
    return super.required(msg);
  }
}
create.prototype = ArraySchema.prototype;
function useEnterActionInForm({
  formikData,
  submitHandler,
  validationSchema: validationSchema2
}) {
  const { formSectionValues } = formikData || {};
  return (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    const {
      target,
      target: {
        form: { elements: formElements }
      }
    } = event;
    const currentTargetIndex = [...formElements].indexOf(target);
    const nextFormElement = lodash_get(formElements, currentTargetIndex + 1);
    if (nextFormElement && nextFormElement.tagName.toLowerCase() !== "button") {
      nextFormElement.focus();
    }
    const validationRules = create$1().shape(validationSchema2);
    validationRules.isValid(formSectionValues).then((valid) => {
      if (valid) {
        submitHandler();
      }
    });
  };
}
function useCheckoutFormContext() {
  return F$2(CheckoutFormContext);
}
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
function focusOnFormErrorElement(formId, formSectionErrors) {
  const firstErrorKey = lodash_get(_keys(formSectionErrors), "0");
  const firstErrorElementId = `${formId}.${firstErrorKey}`;
  const element = document.getElementById(firstErrorElementId);
  if (element) {
    element.focus();
    scrollToElement(formId);
  }
}
function prepareFormSectionErrorMessage(formId, formSectionErrors, setFieldTouched) {
  return _keys(formSectionErrors).reduce((errorMessages, field) => {
    if (_isArray(formSectionErrors[field])) {
      _keys(formSectionErrors[field]).forEach((innerField) => {
        errorMessages.push(formSectionErrors[field][innerField].replace("%1", field));
        setFieldTouched(`${formId}.${field}.${innerField}`, true);
      });
    } else {
      errorMessages.push(formSectionErrors[field].replace("%1", field));
      setFieldTouched(`${formId}.${field}`, true);
    }
    return errorMessages;
  }, []).join("; ");
}
function useFormValidateThenSubmit({
  formId,
  formikData,
  submitHandler,
  validationSchema: validationSchema2
}) {
  const { setErrorMessage } = useAppContext();
  const {
    setFieldTouched,
    formSectionErrors,
    formSectionValues,
    isFormSectionTouched
  } = formikData || {};
  return async () => {
    if (isFormSectionTouched && !_isObjEmpty(formSectionErrors)) {
      setErrorMessage(prepareFormSectionErrorMessage(formId, formSectionErrors, setFieldTouched));
      focusOnFormErrorElement(formId, formSectionErrors);
    }
    const validationRules = create$1().shape(validationSchema2);
    const isValid = await validationRules.validate(formSectionValues);
    if (isValid) {
      await submitHandler();
    }
  };
}
const {
  HYVA_BASE_URL: baseUrl,
  HYVA_LANGUAGE: language,
  HYVA_STORE_CODE: storeCode$1,
  HYVA_CURRENCY_CODE: currencyCode,
  HYVA_CURRENCY_SYMBOL: currencySymbol,
  HYVA_DEFAULT_COUNTRY: defaultCountry
} = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true };
var env = {
  baseUrl,
  language,
  storeCode: storeCode$1,
  currencyCode,
  currencySymbol,
  defaultCountry
};
const getConfigFromLocalStorage = ({
  storageKey,
  value: path,
  ttl,
  timestamp
}) => {
  const item = window.localStorage.getItem(storageKey);
  const now = Date.now();
  if (!item) {
    return void 0;
  }
  const itemData = JSON.parse(item);
  const ttlValue = ttl && lodash_get(itemData, ttl) || 3600;
  const timeStored = timestamp && lodash_get(itemData, timestamp);
  if (timeStored) {
    const timePassed = now - timeStored * (timeStored.toString().length < now.toString().length ? 1e3 : 1);
    if (ttlValue && timePassed > ttlValue * 1e3) {
      window.localStorage.removeItem(storageKey);
      return void 0;
    }
  }
  return lodash_get(itemData, path);
};
const hyvaCheckoutStorageKey = "hyva-checkout-storage";
const magentoDataSources = {
  hyvaCheckoutCacheStorage: {
    storageKey: hyvaCheckoutStorageKey,
    data: {
      customerShippingAddress: {
        timestamp: "cart.data_id",
        value: "customer.shipping_address_id"
      },
      customerBillingAddress: {
        timestamp: "cart.data_id",
        value: "customer.billing_address_id"
      },
      billingSameAsShipping: {
        timestamp: "cart.data_id",
        value: "cart.is_billing_same_as_shipping"
      },
      mostRecentlyUsedAddressList: {
        timestamp: "cart.data_id",
        value: "cart.most_recently_used_address_list"
      }
    }
  },
  mageCacheStorage: {
    cartId: {
      value: "cart.cartId",
      timestamp: "cart.data_id",
      storageKey: "mage-cache-storage"
    },
    token: {
      timestamp: "customer.data_id",
      value: "customer.signin_token",
      storageKey: "mage-cache-storage"
    }
  },
  m2BrowserPersistence: {
    cartId: {
      ttl: "ttl",
      value: "value",
      timestamp: "timeStored",
      storageKey: "M2_VENIA_BROWSER_PERSISTENCE__cartId"
    },
    token: {
      ttl: "ttl",
      value: "value",
      timestamp: "timeStored",
      storageKey: "M2_VENIA_BROWSER_PERSISTENCE__signin_token"
    }
  }
};
const nodeEnv = "production";
const activeSource = magentoDataSources.mageCacheStorage;
const config = {
  currencySymbols: {
    EUR: "\u20AC",
    GBP: "\xA3",
    USD: "$",
    INR: "\u20B9"
  },
  storageSource: activeSource,
  defaultPaymentMethod: "checkmo",
  defaultCountry: env.defaultCountry || "US",
  isProductionMode: nodeEnv === "production",
  isDevelopmentMode: nodeEnv === "development",
  cartId: getConfigFromLocalStorage(activeSource.cartId),
  baseUrl: env.baseUrl || RootElement.getBaseUrl() || "",
  signInToken: getConfigFromLocalStorage(activeSource.token),
  hyvaStorageSource: magentoDataSources.hyvaCheckoutCacheStorage
};
config.successPageRedirectUrl = `${config.baseUrl}/checkout/onepage/success`;
const LOGIN_FORM = "login";
const CART_ITEMS_FORM = "items";
const SHIPPING_METHOD = "shipping_method";
const BILLING_ADDR_FORM = "billing_address";
const PAYMENT_METHOD_FORM = "payment_method";
const SHIPPING_ADDR_FORM = "shipping_address";
const CHECKOUT_AGREEMENTS_FORM = "agreements";
function useLoginMemorizer() {
  const formikSectionData = useFormikMemorizer(LOGIN_FORM);
  const loginFormikData = d$1(() => __spreadProps(__spreadValues({}, formikSectionData), {
    loginFormValues: formikSectionData.formSectionValues,
    isLoginFormTouched: formikSectionData.isFormSectionTouched
  }), [formikSectionData]);
  return loginFormikData;
}
function useLoginAppContext() {
  const {
    customer,
    ajaxLogin: ajaxLogin2,
    isLoggedIn,
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  } = useAppContext();
  return {
    customer,
    ajaxLogin: ajaxLogin2,
    isLoggedIn,
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  };
}
function useLoginCartContext() {
  const {
    cart,
    mergeCarts: mergeCarts2,
    createEmptyCart: createEmptyCart2,
    getCustomerCartId,
    setEmailOnGuestCart: setEmailOnGuestCart2,
    getCustomerCartInfo,
    getCartInfoAfterMerge
  } = useCartContext();
  const cartId = lodash_get(cart, "id");
  const cartEmail = lodash_get(cart, "email", "");
  return {
    cartId,
    cartEmail,
    mergeCarts: mergeCarts2,
    createEmptyCart: createEmptyCart2,
    getCustomerCartId,
    setEmailOnGuestCart: setEmailOnGuestCart2,
    getCustomerCartInfo,
    getCartInfoAfterMerge
  };
}
const LoginFormContext = React.createContext();
function useLoginFormContext() {
  return F$2(LoginFormContext);
}
function LoginForm() {
  const {
    fields,
    formId,
    editMode,
    formikData,
    submitHandler,
    handleKeyDown,
    loginFormValues,
    validationSchema: validationSchema2,
    formSectionTouched
  } = useLoginFormContext();
  const customerWantsToSignIn = lodash_get(loginFormValues, "customerWantsToSignIn");
  const isLoginFormTouched = lodash_get(formSectionTouched, "email") || false;
  const handleButtonClick = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema: validationSchema2
  });
  if (!editMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1("div", {
      className: "py-2",
      children: [/* @__PURE__ */ e$1(TextInput, {
        required: true,
        type: "email",
        label: __("Email"),
        name: fields.email,
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("john.doe@gmail.com")
      }), customerWantsToSignIn && /* @__PURE__ */ e$1("div", {
        children: /* @__PURE__ */ e$1(TextInput, {
          required: true,
          type: "password",
          autoComplete: "on",
          label: __("Password"),
          name: fields.password,
          formikData,
          onKeyDown: handleKeyDown,
          placeholder: __("Password")
        })
      })]
    }), /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-center",
      children: /* @__PURE__ */ e$1(Button, {
        variant: "primary",
        click: handleButtonClick,
        disable: !isLoginFormTouched,
        children: customerWantsToSignIn ? __("Sign In") : __("Update")
      })
    })]
  });
}
function UserInfoBox() {
  const {
    isLoggedIn,
    customer
  } = useLoginAppContext();
  const {
    editMode,
    loginFormValues,
    setFormToEditMode
  } = useLoginFormContext();
  const customerEmail = lodash_get(customer, "email", "");
  if (editMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1("div", {
      className: "py-2",
      children: /* @__PURE__ */ e$1("span", {
        className: "flex flex-wrap items-center justify-center",
        children: [isLoggedIn && /* @__PURE__ */ e$1(d$2, {
          children: [/* @__PURE__ */ e$1("span", {
            children: lodash_get(customer, "fullName")
          }), customerEmail && /* @__PURE__ */ e$1("span", {
            children: `(${customerEmail})`
          })]
        }), !isLoggedIn && lodash_get(loginFormValues, "email")]
      })
    }), !isLoggedIn && /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-center",
      children: /* @__PURE__ */ e$1(Button, {
        click: setFormToEditMode,
        variant: "secondary",
        children: __("Edit")
      })
    })]
  });
}
function LoginInfoBox() {
  const {
    fields,
    editMode,
    setFieldValue,
    loginFormValues
  } = useLoginFormContext();
  const customerWantsToSignIn = lodash_get(loginFormValues, "customerWantsToSignIn");
  if (!editMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  if (customerWantsToSignIn) {
    return /* @__PURE__ */ e$1("div", {
      className: "my-4",
      children: /* @__PURE__ */ e$1("div", {
        className: "px-4 py-1 border rounded-md bg-container-darker lg:w-2/3",
        children: /* @__PURE__ */ e$1("div", {
          className: "flex items-center justify-between",
          children: [/* @__PURE__ */ e$1("h3", {
            className: "text-sm font-semibold text-gray-500",
            children: __("Do you want to continue as guest user?")
          }), /* @__PURE__ */ e$1("button", {
            type: "button",
            className: "px-4 py-1 text-sm font-semibold text-white bg-gray-500",
            onClick: () => {
              setFieldValue(fields.customerWantsToSignIn, false);
            },
            children: __("Yes")
          })]
        })
      })
    });
  }
  return /* @__PURE__ */ e$1("div", {
    className: "my-4",
    children: /* @__PURE__ */ e$1("div", {
      className: "px-4 py-1 border rounded-md bg-container-darker lg:w-2/3",
      children: /* @__PURE__ */ e$1("div", {
        className: "flex items-center justify-between",
        children: [/* @__PURE__ */ e$1("h3", {
          className: "text-sm font-semibold text-gray-500",
          children: __("Do you already have an account?")
        }), /* @__PURE__ */ e$1("button", {
          type: "button",
          className: "px-2 py-1 text-sm font-semibold text-white bg-gray-500",
          onClick: () => {
            setFieldValue(fields.customerWantsToSignIn, true);
          },
          children: __("Login")
        })]
      })
    })
  });
}
const initialValues$5 = {
  email: "",
  password: "",
  customerWantsToSignIn: false
};
const validationSchema$2 = {
  customerWantsToSignIn: create$4(),
  email: create$3().nullable().required(__("Email is required")).email(__("Email is invalid")),
  password: create$3().test("requiredIfSignIn", __("Password is required"), (value, context) => {
    const sigInStatus = lodash_get(context, "parent.customerWantsToSignIn");
    if (sigInStatus) {
      return !!value;
    }
    return true;
  })
};
function LoginFormManager({
  children,
  formikData
}) {
  const {
    ajaxLogin: ajaxLogin2,
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  } = useLoginAppContext();
  const {
    cartEmail,
    setEmailOnGuestCart: setEmailOnGuestCart2
  } = useLoginCartContext();
  const {
    editMode,
    setFormToEditMode,
    setFormToViewMode
  } = useFormEditMode();
  const {
    loginFormValues,
    setFieldTouched
  } = formikData;
  const formSubmit2 = async () => {
    setMessage(false);
    const email = lodash_get(loginFormValues, "email");
    const password = lodash_get(loginFormValues, "password");
    const customerWantsToSignIn = lodash_get(loginFormValues, "customerWantsToSignIn");
    try {
      setPageLoader2(true);
      if (!customerWantsToSignIn) {
        await setEmailOnGuestCart2(email);
        setSuccessMessage(__("Email address is saved."));
        setFormToViewMode();
        setFieldTouched(`${LOGIN_FORM}.email`, false);
        setPageLoader2(false);
        return;
      }
      const loginData = await ajaxLogin2({
        username: email,
        password
      });
      if (loginData.errors) {
        setErrorMessage(__(loginData.message || "Login failed."));
      }
      setPageLoader2(false);
    } catch (error) {
      setPageLoader2(false);
      console.error(error);
    }
  };
  const handleKeyDown = useEnterActionInForm({
    formikData,
    validationSchema: validationSchema$2,
    submitHandler: formSubmit2
  });
  const formSectionContext = useFormSection({
    formikData,
    initialValues: initialValues$5,
    id: LOGIN_FORM,
    validationSchema: validationSchema$2,
    submitHandler: formSubmit2
  });
  y$2(() => {
    if (cartEmail) {
      setFormToViewMode();
    }
  }, [cartEmail, setFormToViewMode]);
  const context = __spreadProps(__spreadValues(__spreadValues({}, formikData), formSectionContext), {
    editMode,
    formikData,
    handleKeyDown,
    setFormToEditMode
  });
  return /* @__PURE__ */ e$1(LoginFormContext.Provider, {
    value: context,
    children: /* @__PURE__ */ e$1(Form, {
      id: LOGIN_FORM,
      children
    })
  });
}
LoginFormManager.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const LoginMemorized = React.memo(({
  formikData
}) => /* @__PURE__ */ e$1(LoginFormManager, {
  formikData,
  children: /* @__PURE__ */ e$1(Card, {
    children: /* @__PURE__ */ e$1(ToggleBox, {
      title: __("Customer Information"),
      show: true,
      children: [/* @__PURE__ */ e$1(LoginInfoBox, {}), /* @__PURE__ */ e$1(LoginForm, {}), /* @__PURE__ */ e$1(UserInfoBox, {})]
    })
  })
}));
LoginMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function Login() {
  const loginFormikData = useLoginMemorizer();
  return /* @__PURE__ */ e$1(LoginMemorized, {
    formikData: loginFormikData
  });
}
function useTotalsCartContext() {
  const { cart } = useCartContext();
  const prices = lodash_get(cart, "prices") || {};
  const shippingMethod = lodash_get(cart, "selected_shipping_method") || {};
  const { price: shippingMethodRate, amount: shippingAmount } = shippingMethod;
  const {
    subTotal,
    discounts,
    grandTotal,
    hasDiscounts,
    subTotalAmount,
    grandTotalAmount
  } = prices;
  return {
    subTotal,
    discounts,
    grandTotal,
    hasDiscounts,
    shippingMethodRate,
    hasSubTotal: !!subTotalAmount,
    hasGrandTotal: !!grandTotalAmount,
    hasShippingRate: !!shippingAmount
  };
}
function Totals() {
  const {
    subTotal,
    discounts,
    grandTotal,
    hasSubTotal,
    hasDiscounts,
    hasShippingRate,
    shippingMethodRate
  } = useTotalsCartContext();
  return /* @__PURE__ */ e$1(Card, {
    children: /* @__PURE__ */ e$1(ToggleBox, {
      show: true,
      title: __("Order Summary"),
      children: /* @__PURE__ */ e$1("div", {
        className: "py-4",
        children: /* @__PURE__ */ e$1("div", {
          children: [/* @__PURE__ */ e$1("div", {
            className: "pb-2 space-y-3 border-b",
            children: [hasSubTotal && /* @__PURE__ */ e$1("div", {
              className: "flex justify-between",
              children: [/* @__PURE__ */ e$1("div", {
                children: __("Cart Subtotal")
              }), /* @__PURE__ */ e$1("div", {
                children: subTotal
              })]
            }), hasShippingRate && /* @__PURE__ */ e$1("div", {
              className: "flex justify-between",
              children: [/* @__PURE__ */ e$1("div", {
                children: __("Shipping")
              }), /* @__PURE__ */ e$1("div", {
                children: shippingMethodRate
              })]
            }), hasDiscounts && discounts.map((discount) => /* @__PURE__ */ e$1("div", {
              className: "flex justify-between",
              children: [/* @__PURE__ */ e$1("div", {
                children: __(discount.label)
              }), /* @__PURE__ */ e$1("div", {
                children: discount.price
              })]
            }, discount.label))]
          }), /* @__PURE__ */ e$1("div", {
            className: "mt-3",
            children: /* @__PURE__ */ e$1("div", {
              className: "flex justify-between text-xl font-bold",
              children: [/* @__PURE__ */ e$1("div", {
                children: __("Order Total")
              }), /* @__PURE__ */ e$1("div", {
                children: grandTotal || "0"
              })]
            })
          })]
        })
      })
    })
  });
}
function DocumentIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    fillRule: "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
    clipRule: "evenodd"
  }));
}
function PencilIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  }));
}
function PlusIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",
    clipRule: "evenodd"
  }));
}
function RefreshIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }));
}
function ShieldCheckIcon(props) {
  return /* @__PURE__ */ v$2("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, props), /* @__PURE__ */ v$2("path", {
    fillRule: "evenodd",
    d: "M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }));
}
function useItemsMemorizer() {
  const formikSectionData = useFormikMemorizer(CART_ITEMS_FORM);
  const cartItemsFormikData = d$1(() => __spreadProps(__spreadValues({}, formikSectionData), {
    cartItemsValue: formikSectionData.formSectionValues,
    cartItemsTouched: formikSectionData.formSectionTouched
  }), [formikSectionData]);
  return cartItemsFormikData;
}
function useItemsAppContext() {
  const { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage } = useAppContext();
  return { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage };
}
const CartItemFormContext = React.createContext();
function useItemsFormContext() {
  return F$2(CartItemFormContext);
}
function useItemsCartContext() {
  const { cart, updateCartItem } = useCartContext();
  const cartItems = lodash_get(cart, "items", {});
  return {
    cartItems,
    updateCartItem,
    cartItemsAvailable: !_isObjEmpty(cartItems)
  };
}
function CartItem({
  item,
  isLastItem,
  actions: actions2
}) {
  const {
    formikData,
    handleKeyDown,
    cartItemsTouched,
    itemUpdateHandler
  } = useItemsFormContext();
  const qtyField = `${item.id}_qty`;
  const itemQtyField = `${CART_ITEMS_FORM}.${qtyField}`;
  const isQtyFieldTouched = lodash_get(cartItemsTouched, qtyField);
  return /* @__PURE__ */ e$1("tr", {
    className: `border-2 md:border-0 ${isLastItem ? "" : "md:border-b-2"}`,
    children: [/* @__PURE__ */ e$1("td", {
      className: "hidden w-1/3 md:table-cell",
      children: /* @__PURE__ */ e$1("div", {
        className: "py-2 pl-2",
        children: [/* @__PURE__ */ e$1("img", {
          className: "w-12 h-auto",
          alt: item.productSku,
          src: item.productSmallImgUrl
        }), /* @__PURE__ */ e$1("div", {
          className: "text-xs",
          children: [/* @__PURE__ */ e$1("div", {
            children: item.productName
          }), /* @__PURE__ */ e$1("div", {
            children: item.productSku
          })]
        })]
      })
    }), /* @__PURE__ */ e$1("td", {
      className: "hidden md:table-cell",
      children: /* @__PURE__ */ e$1(TextInput, {
        min: "0",
        width: "w-20",
        type: "number",
        name: itemQtyField,
        formikData,
        onKeyDown: handleKeyDown,
        id: `${itemQtyField}-desktop`,
        onChange: actions2.handleQtyUpdate
      })
    }), /* @__PURE__ */ e$1("td", {
      className: "hidden md:table-cell",
      children: item.price
    }), /* @__PURE__ */ e$1("td", {
      className: "hidden xl:table-cell",
      children: item.rowTotal
    }), /* @__PURE__ */ e$1("td", {
      className: "hidden md:table-cell",
      children: /* @__PURE__ */ e$1(Button, {
        size: "sm",
        variant: "secondary",
        click: itemUpdateHandler,
        disable: !isQtyFieldTouched,
        children: [/* @__PURE__ */ e$1(RefreshIcon, {
          className: "w-5 h-5 text-black"
        }), /* @__PURE__ */ e$1("span", {
          className: "sr-only",
          children: __("Update")
        })]
      })
    }), /* @__PURE__ */ e$1("td", {
      className: "px-2 py-2 md:hidden",
      children: /* @__PURE__ */ e$1("table", {
        className: "w-full",
        children: /* @__PURE__ */ e$1("tbody", {
          children: /* @__PURE__ */ e$1("tr", {
            className: "",
            children: /* @__PURE__ */ e$1("td", {
              children: /* @__PURE__ */ e$1("table", {
                className: "text-xs",
                children: /* @__PURE__ */ e$1("tbody", {
                  children: [/* @__PURE__ */ e$1("tr", {
                    className: "border-b",
                    children: [/* @__PURE__ */ e$1("th", {
                      className: "px-2 py-2",
                      children: __("Name")
                    }), /* @__PURE__ */ e$1("td", {
                      className: "pl-1 text-sm",
                      children: /* @__PURE__ */ e$1("div", {
                        className: "flex items-center py-1",
                        children: [/* @__PURE__ */ e$1("img", {
                          className: "w-8 h-8",
                          alt: item.productSku,
                          src: item.productSmallImgUrl
                        }), /* @__PURE__ */ e$1("div", {
                          className: "pl-2",
                          children: item.productName
                        })]
                      })
                    })]
                  }), /* @__PURE__ */ e$1("tr", {
                    className: "border-b",
                    children: [/* @__PURE__ */ e$1("th", {
                      className: "px-2 py-2",
                      children: __("SKU")
                    }), /* @__PURE__ */ e$1("td", {
                      className: "pl-2 text-sm",
                      children: item.productSku
                    })]
                  }), /* @__PURE__ */ e$1("tr", {
                    className: "border-b",
                    children: [/* @__PURE__ */ e$1("th", {
                      className: "px-2 py-2",
                      children: __("Price")
                    }), /* @__PURE__ */ e$1("td", {
                      className: "pl-2 text-sm",
                      children: item.price
                    })]
                  }), /* @__PURE__ */ e$1("tr", {
                    className: "border-b",
                    children: [/* @__PURE__ */ e$1("th", {
                      className: "px-2 py-2",
                      children: __("Qty")
                    }), /* @__PURE__ */ e$1("td", {
                      className: "px-1 pb-2",
                      children: /* @__PURE__ */ e$1("div", {
                        className: "flex items-center justify-between",
                        children: [/* @__PURE__ */ e$1(TextInput, {
                          min: "0",
                          type: "number",
                          className: "w-20",
                          name: itemQtyField,
                          formikData,
                          onKeyDown: handleKeyDown,
                          id: `${itemQtyField}-mobile`,
                          onChange: actions2.handleQtyUpdate
                        }), /* @__PURE__ */ e$1("div", {
                          className: "mt-2 ml-2",
                          children: /* @__PURE__ */ e$1(Button, {
                            size: "sm",
                            variant: "secondary",
                            click: itemUpdateHandler,
                            disable: !isQtyFieldTouched,
                            children: [/* @__PURE__ */ e$1(RefreshIcon, {
                              className: "w-5 h-5 text-black"
                            }), /* @__PURE__ */ e$1("span", {
                              className: "sr-only",
                              children: __("Update")
                            })]
                          })
                        })]
                      })
                    })]
                  }), /* @__PURE__ */ e$1("tr", {
                    children: [/* @__PURE__ */ e$1("th", {
                      className: "px-2 py-2 text-base",
                      children: __("Subtotal")
                    }), /* @__PURE__ */ e$1("td", {
                      className: "pl-2 text-base text-right",
                      children: item.rowTotal
                    })]
                  })]
                })
              })
            })
          })
        })
      })
    })]
  });
}
CartItem.propTypes = {
  item: propTypes.exports.shape({
    id: propTypes.exports.string
  }).isRequired,
  isLastItem: propTypes.exports.bool,
  actions: propTypes.exports.shape({
    handleQtyUpdate: propTypes.exports.func
  })
};
CartItem.defaultProps = {
  isLastItem: false,
  actions: {
    handleQtyUpdate: _emptyFunc()
  }
};
function CartItemList() {
  const {
    cartItems,
    setFieldValue,
    setFieldTouched
  } = useItemsFormContext();
  const handleQtyUpdate = (event) => {
    const newValue = _abs(event.target.value);
    const fieldName = event.target.name;
    setFieldTouched(fieldName, newValue);
    setFieldValue(fieldName, newValue);
  };
  return /* @__PURE__ */ e$1("div", {
    className: "py-4",
    children: /* @__PURE__ */ e$1("div", {
      className: "",
      children: /* @__PURE__ */ e$1("table", {
        className: "table w-full text-left",
        children: [/* @__PURE__ */ e$1("thead", {
          className: "hidden text-left md:table-header-group",
          children: /* @__PURE__ */ e$1("tr", {
            children: [/* @__PURE__ */ e$1("th", {
              children: __("Item")
            }), /* @__PURE__ */ e$1("th", {
              children: __("Qty")
            }), /* @__PURE__ */ e$1("th", {
              children: __("Price")
            }), /* @__PURE__ */ e$1("th", {
              className: "hidden xl:table-cell",
              children: __("Subtotal")
            }), /* @__PURE__ */ e$1("th", {
              children: [/* @__PURE__ */ e$1("span", {
                className: "sr-only",
                children: __("Actions")
              }), "\xA0"]
            })]
          })
        }), /* @__PURE__ */ e$1("tbody", {
          children: cartItems.map((cartItem, index2) => /* @__PURE__ */ e$1(CartItem, {
            item: cartItem,
            actions: {
              handleQtyUpdate
            },
            isLastItem: index2 === cartItems.length - 1
          }, cartItem.id))
        })]
      })
    })
  });
}
function NoItemsInfoBox() {
  return /* @__PURE__ */ e$1("div", {
    className: "h-32 py-4 min-h-12",
    children: /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-center w-full h-full",
      children: /* @__PURE__ */ e$1("div", {
        children: __("No cart items available")
      })
    })
  });
}
function prepareCartItemsUniqueId(cartItems) {
  return cartItems.map(({ id: id2, quantity }) => `${id2}_${quantity}`).join("__");
}
function prepareCartItemFormikData(cartItems) {
  return cartItems.reduce((accumulator, item) => {
    const cartItemId = parseInt(item.id, 10);
    accumulator[`${cartItemId}_qty`] = parseFloat(item.quantity);
    return accumulator;
  }, {});
}
function prepareCartItemsValidationSchema(cartItemFormData) {
  const validationSchema2 = {};
  _keys(cartItemFormData).forEach((itemKey) => {
    validationSchema2[itemKey] = create$2().required(__("Required")).min(1, __("Invalid qty"));
  });
  return validationSchema2;
}
function validate(schemaRules, data) {
  return create$1().shape(schemaRules).validate(data);
}
function prepareCartDataToUpdate(cartItemsValue) {
  return _keys(cartItemsValue).reduce((accumulator, itemKey) => {
    const itemId = Number(itemKey.replace("_qty", ""));
    accumulator.push({
      cart_item_id: itemId,
      quantity: parseFloat(cartItemsValue[itemKey])
    });
    return accumulator;
  }, []);
}
let initialValues$4 = {};
const formSubmit = () => {
};
function CartItemsFormManager({
  children,
  formikData
}) {
  const [isFilled, setIsFilled] = l$1(false);
  const [validationSchema2, setValidationSchema] = l$1({});
  const {
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  } = useItemsAppContext();
  const {
    cartItems,
    updateCartItem,
    cartItemsAvailable
  } = useItemsCartContext();
  const {
    cartItemsValue,
    setFieldValue
  } = formikData;
  const cartItemsArray = _objToArray(cartItems);
  const cartItemIds = prepareCartItemsUniqueId(cartItemsArray);
  const itemUpdateHandler = async () => {
    try {
      setMessage(false);
      const isValid = await validate(validationSchema2, cartItemsValue);
      const cartItemsToUpdate = prepareCartDataToUpdate(cartItemsValue);
      if (!isValid) {
        return;
      }
      if (cartItemsToUpdate.length) {
        setPageLoader2(true);
        await updateCartItem({
          cartItems: cartItemsToUpdate
        });
        setSuccessMessage(__("Cart updated successfully."));
        setPageLoader2(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      setPageLoader2(false);
    }
  };
  y$2(() => {
    if (isFilled || !cartItemsAvailable) {
      return;
    }
    const cartItemFormData = prepareCartItemFormikData(cartItemsArray);
    initialValues$4 = cartItemFormData;
    setFieldValue(CART_ITEMS_FORM, cartItemFormData);
    setValidationSchema(prepareCartItemsValidationSchema(cartItemFormData));
    setIsFilled(true);
  }, [isFilled, cartItemIds, setFieldValue, cartItemsArray, cartItemsAvailable]);
  const handleKeyDown = useEnterActionInForm({
    formikData,
    validationSchema: validationSchema2,
    submitHandler: itemUpdateHandler
  });
  const formSectionContext = useFormSection({
    formikData,
    initialValues: initialValues$4,
    validationSchema: validationSchema2,
    id: CART_ITEMS_FORM,
    submitHandler: formSubmit
  });
  const context = __spreadProps(__spreadValues(__spreadValues({}, formSectionContext), formikData), {
    formikData,
    handleKeyDown,
    itemUpdateHandler,
    cartItems: cartItemsArray,
    cartItemsAvailable: !!cartItemsArray.length
  });
  return /* @__PURE__ */ e$1(CartItemFormContext.Provider, {
    value: context,
    children: /* @__PURE__ */ e$1(Form, {
      id: CART_ITEMS_FORM,
      children
    })
  });
}
CartItemsFormManager.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const CartItemsMemorized = React.memo(({
  formikData
}) => {
  const {
    cartItemsAvailable
  } = useItemsCartContext();
  return /* @__PURE__ */ e$1(CartItemsFormManager, {
    formikData,
    children: /* @__PURE__ */ e$1(Card, {
      classes: cartItemsAvailable ? "" : "opacity-75",
      children: /* @__PURE__ */ e$1(ToggleBox, {
        show: true,
        title: __("Product Details"),
        children: cartItemsAvailable ? /* @__PURE__ */ e$1(CartItemList, {}) : /* @__PURE__ */ e$1(NoItemsInfoBox, {})
      })
    })
  });
});
CartItemsMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function CartItemsForm() {
  const cartItemsFormikData = useItemsMemorizer();
  return /* @__PURE__ */ e$1(CartItemsMemorized, {
    formikData: cartItemsFormikData
  });
}
function SaveButton({
  actions: actions2,
  isFormValid
}) {
  return /* @__PURE__ */ e$1(Button, {
    variant: "primary",
    disable: !isFormValid,
    click: actions2.saveAddress,
    children: __("Save")
  });
}
SaveButton.propTypes = {
  isFormValid: propTypes.exports.bool,
  actions: propTypes.exports.shape({
    saveAddress: propTypes.exports.func
  })
};
SaveButton.defaultProps = {
  isFormValid: false,
  actions: {
    saveAddress: () => {
    }
  }
};
function AddressCard({
  title,
  actions: actions2,
  billingSameCheckbox,
  address: {
    id: id2,
    address
  }
}) {
  const {
    isLoggedIn,
    customerAddressList
  } = useAppContext();
  return /* @__PURE__ */ e$1(Card, {
    bg: "dark",
    classes: "card-interactive",
    children: [/* @__PURE__ */ e$1("div", {
      className: "flex justify-between",
      children: [/* @__PURE__ */ e$1("h3", {
        className: "text-sm font-bold text-black",
        children: title
      }), /* @__PURE__ */ e$1(ShieldCheckIcon, {
        className: "w-6 h-6 -m-2 text-green-700"
      })]
    }), /* @__PURE__ */ e$1("hr", {}), /* @__PURE__ */ e$1("ul", {
      className: "pt-3",
      children: address.map((addrAttr, index2) => /* @__PURE__ */ e$1("li", {
        className: "text-sm italic text-black",
        children: addrAttr
      }, `${id2}_${addrAttr}_${index2}`))
    }), billingSameCheckbox, /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-between h-12 px-3 mt-3 -mx-4 -mb-4 rounded-b-sm bg-container-darker",
      children: [isLoggedIn && !_isObjEmpty(customerAddressList) && /* @__PURE__ */ e$1("span", {
        className: "text-xs italic font-semibold capitalize text-secondary-lighter",
        children: customerAddressList[id2] ? __("FROM ADDRESS BOOK") : __("NEW ADDRESS")
      }), /* @__PURE__ */ e$1("div", {
        className: "flex items-center justify-end flex-1",
        children: /* @__PURE__ */ e$1("button", {
          type: "button",
          onClick: actions2.performAddressEdit,
          className: "px-2 py-1 btn-secondary btn",
          children: [/* @__PURE__ */ e$1(PencilIcon, {
            className: "w-6 h-6 pr-1"
          }), /* @__PURE__ */ e$1("span", {
            className: "text-xs",
            children: __("Edit")
          })]
        })
      })]
    })]
  });
}
AddressCard.propTypes = {
  title: propTypes.exports.string,
  billingSameCheckbox: propTypes.exports.node,
  actions: propTypes.exports.shape({
    performAddressEdit: propTypes.exports.func
  }).isRequired,
  address: propTypes.exports.shape({
    id: propTypes.exports.string,
    address: propTypes.exports.arrayOf(propTypes.exports.string)
  }).isRequired
};
AddressCard.defaultProps = {
  title: "",
  billingSameCheckbox: /* @__PURE__ */ e$1(d$2, {})
};
var FUNC_ERROR_TEXT = "Expected a function";
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991;
var funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]";
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reEscapeChar = /\\(\\)?/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e2) {
    }
  }
  return result;
}
var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var Symbol$1 = root.Symbol, splice = arrayProto.splice;
var Map$1 = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function Hash(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : void 0;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index2 = -1, length = entries ? entries.length : 0;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)["delete"](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function assignValue(object2, key, value) {
  var objValue = object2[key];
  if (!(hasOwnProperty.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
    object2[key] = value;
  }
}
function assocIndexOf(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseSet(object2, path, value, customizer) {
  if (!isObject(object2)) {
    return object2;
  }
  path = isKey(path, object2) ? [path] : castPath(path);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object2;
  while (nested != null && ++index2 < length) {
    var key = toKey(path[index2]), newValue = value;
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object2;
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function getNative(object2, key) {
  var value = getValue(object2, key);
  return baseIsNative(value) ? value : void 0;
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function isKey(value, object2) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var stringToPath = memoize(function(string2) {
  string2 = toString(string2);
  var result = [];
  if (reLeadingDot.test(string2)) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, string3) {
    result.push(quote ? string3.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
function memoize(func, resolver) {
  if (typeof func != "function" || resolver && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var isArray = Array.isArray;
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : "";
  return tag == funcTag || tag == genTag;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function set(object2, path, value) {
  return object2 == null ? object2 : baseSet(object2, path, value);
}
var lodash_set = set;
const hyvaStorageKey = lodash_get(config, "hyvaStorageSource.storageKey");
const mostRecentlyUsedAddressListSource = lodash_get(config, "hyvaStorageSource.data.mostRecentlyUsedAddressList", {});
const LocalStorage = {
  isBrowser() {
    return typeof window !== "undefined";
  },
  getMagentoLocalStorage() {
    const tokenSource = lodash_get(config, "storageSource.token", {});
    if (!LocalStorage.isBrowser()) {
      return {};
    }
    return JSON.parse(window.localStorage.getItem(tokenSource.storageKey) || "{}");
  },
  getHyvaCheckoutStorage() {
    if (!LocalStorage.isBrowser()) {
      return {};
    }
    return JSON.parse(window.localStorage.getItem(hyvaStorageKey) || "{}");
  },
  getCartId() {
    const source = lodash_get(config, "storageSource.cartId", {});
    return lodash_get(LocalStorage.getMagentoLocalStorage(), source.value);
  },
  getCustomerToken() {
    const tokenSource = lodash_get(config, "storageSource.token", {});
    return lodash_get(LocalStorage.getMagentoLocalStorage(), tokenSource.value);
  },
  getCustomerShippingAddressId() {
    const source = lodash_get(config, "hyvaStorageSource.data.customerShippingAddress", {});
    return lodash_get(LocalStorage.getHyvaCheckoutStorage(), source.value);
  },
  getCustomerBillingAddressId() {
    const source = lodash_get(config, "hyvaStorageSource.data.customerBillingAddress", {});
    return lodash_get(LocalStorage.getHyvaCheckoutStorage(), source.value);
  },
  getBillingSameAsShippingInfo() {
    const source = lodash_get(config, "hyvaStorageSource.data.billingSameAsShipping", {});
    return lodash_get(LocalStorage.getHyvaCheckoutStorage(), source.value, true);
  },
  getMostlyRecentlyUsedAddressList() {
    return lodash_get(LocalStorage.getHyvaCheckoutStorage(), mostRecentlyUsedAddressListSource.value, {}) || {};
  },
  saveCustomerToken(token) {
    if (!LocalStorage.isBrowser()) {
      return;
    }
    const tokenSource = lodash_get(config, "storageSource.token", {});
    const storageData = lodash_set(LocalStorage.getMagentoLocalStorage(), tokenSource.value, token);
    window.localStorage.setItem(tokenSource.storageKey, JSON.stringify(storageData));
  },
  saveCartId(cartId) {
    if (!LocalStorage.isBrowser()) {
      return;
    }
    const cartSource = lodash_get(config, "storageSource.cartId", {});
    const storageData = lodash_set(LocalStorage.getMagentoLocalStorage(), cartSource.value, cartId);
    window.localStorage.setItem(cartSource.storageKey, JSON.stringify(storageData));
  },
  saveCustomerShippingAddressId(addressId) {
    if (!LocalStorage.isBrowser()) {
      return;
    }
    const source = lodash_get(config, "hyvaStorageSource.data.customerShippingAddress", {});
    const storageData = lodash_set(LocalStorage.getHyvaCheckoutStorage(), source.value, addressId);
    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },
  saveCustomerBillingAddressId(addressId) {
    if (!LocalStorage.isBrowser()) {
      return;
    }
    const source = lodash_get(config, "hyvaStorageSource.data.customerBillingAddress", {});
    const storageData = lodash_set(LocalStorage.getHyvaCheckoutStorage(), source.value, addressId);
    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },
  saveBillingSameAsShipping(isSame) {
    if (!LocalStorage.isBrowser()) {
      return;
    }
    const source = lodash_get(config, "hyvaStorageSource.data.billingSameAsShipping", {});
    const storageData = lodash_set(LocalStorage.getHyvaCheckoutStorage(), source.value, !!isSame);
    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },
  saveCustomerAddressInfo(addressId, isBillingSame, isShipping = true) {
    const selectedShippingAddrId = LocalStorage.getCustomerShippingAddressId();
    LocalStorage.saveBillingSameAsShipping(isBillingSame);
    if (isShipping) {
      LocalStorage.saveCustomerShippingAddressId(addressId);
    } else {
      LocalStorage.saveCustomerBillingAddressId(addressId);
    }
    if (isBillingSame) {
      LocalStorage.saveCustomerBillingAddressId(addressId);
    } else if (selectedShippingAddrId === addressId) {
      LocalStorage.saveBillingSameAsShipping(true);
    }
  },
  addAddressToMostRecentlyUsedList(newAddress) {
    const existingAddrList = LocalStorage.getMostlyRecentlyUsedAddressList();
    const newAddressId = `new_address_${_keys(existingAddrList).length + 1}`;
    lodash_set(newAddress, "id", newAddressId);
    const storageData = lodash_set(LocalStorage.getHyvaCheckoutStorage(), mostRecentlyUsedAddressListSource.value, __spreadProps(__spreadValues({}, existingAddrList), {
      [newAddressId]: newAddress
    }));
    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },
  updateMostRecentlyAddedAddress(addressId, addressToUpdate) {
    const existingAddrList = LocalStorage.getMostlyRecentlyUsedAddressList();
    lodash_set(existingAddrList, addressId, addressToUpdate);
    const storageData = lodash_set(LocalStorage.getHyvaCheckoutStorage(), mostRecentlyUsedAddressListSource.value, existingAddrList);
    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },
  removeMostRecentlyUsedAddress(addressId) {
    const existingAddrList = LocalStorage.getMostlyRecentlyUsedAddressList();
    const storageData = lodash_set(LocalStorage.getHyvaCheckoutStorage(), mostRecentlyUsedAddressListSource.value, _cleanObjByKeys(existingAddrList, [addressId]));
    window.localStorage.setItem(hyvaStorageKey, JSON.stringify(storageData));
  },
  clearCheckoutStorage() {
    if (!LocalStorage.isBrowser()) {
      return;
    }
    window.localStorage.setItem(hyvaStorageKey, "{}");
    LocalStorage.saveCartId("");
  }
};
const initialCountry = env.defaultCountry || RootElement.getDefaultCountryId() || config.defaultCountry;
const billingSameAsShippingField = `${BILLING_ADDR_FORM}.isSameAsShipping`;
function isCartAddressValid(address) {
  return !!(address && address.firstname && address.country);
}
function isValidCustomerAddressId(addressId) {
  return addressId && !isNaN(addressId);
}
function formatAddressListToCardData(addressList, stateList) {
  return addressList.map((addr) => {
    const {
      id: id2,
      city = "",
      phone = "",
      street = [],
      region = "",
      zipcode = "",
      company = "",
      country = "",
      fullName = "",
      regionLabel = "",
      countryCode = ""
    } = addr;
    const countryRegions = lodash_get(stateList, `${country}`, []);
    const countryRegion = countryRegions.find((state) => state.code === region);
    return {
      id: _toString(id2),
      address: [
        fullName,
        company,
        ...street,
        city,
        regionLabel || lodash_get(countryRegion, "name"),
        __("%1 zipcode: %1", countryCode || country, zipcode),
        __("phone: %1", phone)
      ].filter((i2) => !!i2)
    };
  });
}
const addressInitValues = {
  company: "",
  firstname: "",
  lastname: "",
  street: [""],
  phone: "",
  zipcode: "",
  city: "",
  region: "",
  country: initialCountry
};
function prepareFormAddressFromCartAddress(address, selectedAddressId) {
  const newAddress = __spreadValues({}, address);
  const { countryCode, regionCode } = address;
  if (countryCode) {
    newAddress.country = countryCode;
  }
  if (regionCode) {
    newAddress.region = regionCode;
  }
  if (selectedAddressId) {
    newAddress.selectedAddress = selectedAddressId;
  }
  const keysToRemove = [
    "fullName",
    "middlename",
    "regionCode",
    "countryCode",
    "regionLabel",
    "isDefaultBilling",
    "isDefaultShipping"
  ];
  return __spreadValues(__spreadValues({}, addressInitValues), _cleanObjByKeys(newAddress, keysToRemove));
}
function isMostRecentAddress(addressId) {
  const recentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
  return !!recentAddressList[addressId];
}
const AddressWrapperContext = React.createContext();
function sortByItemLabel(item1, item2) {
  return item1.label.localeCompare(item2.label);
}
function prepareCountryOptions(countryList) {
  const countryListObj = countryList.reduce((accumulator, country) => {
    if (country.id && country.name) {
      accumulator[country.id] = { value: country.id, label: country.name };
    }
    return accumulator;
  }, {});
  return _objToArray(countryListObj).sort(sortByItemLabel);
}
function prepareCountryStateOptions(stateList, countrySelected) {
  const stateListObj = lodash_get(stateList, countrySelected, []).reduce((accumulator, state) => {
    if (state.code && state.name) {
      accumulator[state.code] = { value: state.code, label: state.name };
    }
    return accumulator;
  }, {});
  return _objToArray(stateListObj).sort(sortByItemLabel);
}
function prepareMostRecentAddressOptions(stateList, selectedAddress = "") {
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
  if (_isObjEmpty(mostRecentAddressList)) {
    return [];
  }
  const mostRecentAddrOptions = formatAddressListToCardData(_objToArray(_cleanObjByKeys(mostRecentAddressList, [selectedAddress])), stateList);
  return mostRecentAddrOptions;
}
function prepareCustomerAddressOptions({
  cartAddress,
  selectedAddress,
  customerAddressList
}) {
  const customerAddrToConsider = isCartAddressValid(cartAddress) ? _cleanObjByKeys(customerAddressList, [selectedAddress]) : customerAddressList;
  const customerAddressOptions = formatAddressListToCardData(_objToArray(customerAddrToConsider));
  return customerAddressOptions;
}
function canAddressOptionRemoved(addressId, customerAddressList) {
  const billingIdInStorage = LocalStorage.getCustomerBillingAddressId();
  const shippingIdInStorage = LocalStorage.getCustomerShippingAddressId();
  if ([billingIdInStorage, shippingIdInStorage].includes(addressId)) {
    return false;
  }
  return !customerAddressList[addressId];
}
const CART_BILLING_ADDRESS = "cart_billing_address";
const billingAddrOtherOptionField = "additional.billing_address_selected_other_option";
const billingAddressFormInitValues = {
  company: "",
  firstname: "",
  lastname: "",
  street: [""],
  phone: "",
  zipcode: "",
  city: "",
  region: "",
  country: initialCountry,
  isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo()
};
function selectedAddressTitle$1(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || isLoggedIn && _isObjEmpty(customerAddressList)) {
    return __("BILLING ADDRESS");
  }
  return __("SELECTED ADDRESS");
}
const addressIdInCache$1 = _toString(LocalStorage.getCustomerBillingAddressId());
const initAddressId$1 = addressIdInCache$1 || CART_BILLING_ADDRESS;
const AddressWrapperMemorized = React.memo(({
  children,
  formikData
}) => {
  const [isBillingCustomerAddress, setIsBillingCustomerAddress] = l$1(isValidCustomerAddressId(addressIdInCache$1));
  const [billingSelected, setBillingSelected] = l$1(initAddressId$1);
  const [countriesOfWhichStatesFetched, setCountriesFetched] = l$1([initialCountry]);
  const [mostRecentAddressOptions, setMostRecentAddressOptions] = l$1([]);
  const {
    stateList,
    fetchCountryStates
  } = useAppContext();
  const {
    billingCountry,
    shippingCountry
  } = formikData;
  const reCalculateMostRecentAddressOptions = A$2(() => {
    const addressOptions = prepareMostRecentAddressOptions(stateList);
    setMostRecentAddressOptions(addressOptions);
  }, [stateList]);
  const collectCountryStates = A$2(async () => {
    const countries = [];
    let fetchBillingStatesPromise = _emptyFunc();
    let fetchShippingStatesPromise = _emptyFunc();
    if (shippingCountry && !countriesOfWhichStatesFetched.includes(shippingCountry)) {
      fetchShippingStatesPromise = _makePromise(fetchCountryStates, shippingCountry);
      countries.push(shippingCountry);
    }
    if (billingCountry && billingCountry !== shippingCountry && !countriesOfWhichStatesFetched.includes(billingCountry)) {
      fetchBillingStatesPromise = _makePromise(fetchCountryStates, billingCountry);
      countries.push(billingCountry);
    }
    if (countries.length) {
      setCountriesFetched([...countriesOfWhichStatesFetched, ...countries]);
    }
    try {
      await Promise.all([fetchBillingStatesPromise(), fetchShippingStatesPromise()]);
    } catch (error) {
      console.error(error);
    }
  }, [billingCountry, shippingCountry, fetchCountryStates, countriesOfWhichStatesFetched]);
  y$2(() => {
    if (!billingCountry && !shippingCountry) {
      return;
    }
    if (countriesOfWhichStatesFetched.includes(shippingCountry) && countriesOfWhichStatesFetched.includes(billingCountry)) {
      return;
    }
    collectCountryStates();
  }, [billingCountry, shippingCountry, collectCountryStates, countriesOfWhichStatesFetched]);
  y$2(() => {
    const addressOptions = prepareMostRecentAddressOptions(stateList);
    setMostRecentAddressOptions(addressOptions);
  }, [stateList]);
  const context = {
    billingSelected,
    setBillingSelected,
    isBillingCustomerAddress,
    mostRecentAddressOptions,
    setIsBillingCustomerAddress,
    reCalculateMostRecentAddressOptions
  };
  return /* @__PURE__ */ e$1(AddressWrapperContext.Provider, {
    value: context,
    children
  });
});
AddressWrapperMemorized.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const billingCountryField = `${BILLING_ADDR_FORM}.country`;
const shippingCountryField = `${SHIPPING_ADDR_FORM}.country`;
function AddressWrapper({
  children
}) {
  const {
    values
  } = useFormikContext();
  const billingCountry = lodash_get(values, billingCountryField);
  const shippingCountry = lodash_get(values, shippingCountryField);
  const formikData = d$1(() => ({
    billingCountry,
    shippingCountry
  }), [billingCountry, shippingCountry]);
  return /* @__PURE__ */ e$1(AddressWrapperMemorized, {
    formikData,
    children
  });
}
AddressWrapper.propTypes = {
  children: propTypes.exports.node.isRequired
};
function CreateNewAddressLink({
  actions: actions2,
  forceHide
}) {
  const {
    isLoggedIn
  } = useAppContext();
  if (!isLoggedIn || forceHide) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "mt-6",
    children: /* @__PURE__ */ e$1(Button, {
      variant: "warning",
      click: actions2.click,
      children: [/* @__PURE__ */ e$1(PlusIcon, {
        className: "w-6 h-6"
      }), /* @__PURE__ */ e$1("span", {
        className: "text-xs",
        children: __("New Address")
      })]
    })
  });
}
CreateNewAddressLink.propTypes = {
  forceHide: propTypes.exports.bool,
  actions: propTypes.exports.shape({
    click: propTypes.exports.func
  })
};
CreateNewAddressLink.defaultProps = {
  forceHide: false,
  actions: {
    click: _emptyFunc()
  }
};
function Message() {
  const {
    message,
    setMessage
  } = useAppContext();
  const msg = lodash_get(message, "message");
  const msgType = lodash_get(message, "type");
  y$2(() => {
    if (!message || msgType === "error") {
      return _emptyFunc();
    }
    const timer = setTimeout(() => {
      setMessage(false);
    }, 8e3);
    return () => clearTimeout(timer);
  }, [message, msgType, setMessage]);
  if (!message) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "container sticky z-10 my-4",
    style: {
      top: "20px"
    },
    children: /* @__PURE__ */ e$1("div", {
      className: `relative px-6 py-2 my-4 text-white border-0 rounded ${msgType === "error" ? "bg-red-400" : ""} ${msgType === "success" ? "bg-green-500" : ""}`,
      children: [/* @__PURE__ */ e$1("span", {
        className: "inline-block mr-8 align-middle",
        children: msg
      }), /* @__PURE__ */ e$1("button", {
        type: "button",
        className: "absolute top-0 right-0 mt-2 mr-6 text-2xl font-semibold leading-none outline-none bg-none focus:outline-none",
        onClick: () => setMessage(false),
        children: /* @__PURE__ */ e$1("span", {
          children: "\xD7"
        })
      })]
    })
  });
}
function usePaymentMethodMemorizer() {
  const { values } = useFormikContext();
  const formikSectionData = useFormikMemorizer(PAYMENT_METHOD_FORM);
  const agreementsValues = lodash_get(values, CHECKOUT_AGREEMENTS_FORM);
  const paymentFormikData = d$1(() => __spreadProps(__spreadValues({}, formikSectionData), {
    agreementsValues,
    paymentValues: formikSectionData.formSectionValues
  }), [formikSectionData, agreementsValues]);
  return paymentFormikData;
}
function usePaymentMethodAppContext() {
  const { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage } = useAppContext();
  return { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage };
}
function usePaymentMethodCartContext() {
  const { cart, setPaymentMethod: setPaymentMethod2 } = useCartContext();
  const methodList = lodash_get(cart, "available_payment_methods", {});
  const selectedPaymentMethod = lodash_get(cart, "selected_payment_method");
  return {
    methodList,
    setPaymentMethod: setPaymentMethod2,
    selectedPaymentMethod,
    isPaymentAvailable: !_isObjEmpty(methodList)
  };
}
const PaymentMethodFormContext = React.createContext();
function usePaymentMethodFormContext() {
  return F$2(PaymentMethodFormContext);
}
function PaymentMethodList({
  methodRenderers
}) {
  const {
    fields,
    submitHandler,
    formikData
  } = usePaymentMethodFormContext();
  const {
    methodList
  } = usePaymentMethodCartContext();
  const {
    paymentValues,
    setFieldValue,
    setFieldTouched
  } = formikData;
  const handlePaymentMethodSelection = async (event) => {
    const methodSelected = lodash_get(methodList, `${event.target.value}.code`);
    if (!methodSelected) {
      return;
    }
    await setFieldValue(fields.code, methodSelected);
    setFieldTouched(fields.code, true);
    if (!methodRenderers[methodSelected]) {
      await submitHandler(methodSelected);
    }
  };
  return /* @__PURE__ */ e$1("div", {
    className: "py-4",
    children: /* @__PURE__ */ e$1("ul", {
      children: _objToArray(methodList).map((method) => {
        const MethodRenderer = methodRenderers[method.code];
        return /* @__PURE__ */ e$1("li", {
          children: MethodRenderer ? /* @__PURE__ */ e$1(MethodRenderer, {
            method,
            selected: paymentValues,
            actions: {
              change: handlePaymentMethodSelection
            }
          }) : /* @__PURE__ */ e$1(RadioInput, {
            label: method.title,
            name: "paymentMethod",
            value: method.code,
            onChange: handlePaymentMethodSelection,
            checked: method.code === paymentValues.code
          })
        }, method.code);
      })
    })
  });
}
PaymentMethodList.propTypes = {
  methodRenderers: propTypes.exports.object
};
PaymentMethodList.defaultProps = {
  methodRenderers: {}
};
function NoPaymentMethodInfoBox() {
  return /* @__PURE__ */ e$1("div", {
    className: "h-32 py-4 min-h-12",
    children: /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-center w-full h-full",
      children: /* @__PURE__ */ e$1("div", {
        children: __("No payment methods available at the moment")
      })
    })
  });
}
const initialValues$3 = {
  code: ""
};
const requiredMessage$3 = __("Required");
const validationSchema$1 = {
  code: create$3().required(requiredMessage$3)
};
function PaymentMethodFormManager({
  children,
  formikData
}) {
  const {
    setPaymentMethod: setPaymentMethod2
  } = usePaymentMethodCartContext();
  const {
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  } = usePaymentMethodAppContext();
  const formSubmit2 = async (paymentMethod) => {
    setMessage(false);
    if (!paymentMethod) {
      return;
    }
    try {
      setPageLoader2(true);
      await setPaymentMethod2(paymentMethod);
      setSuccessMessage(__("Payment method added successfully."));
      setPageLoader2(false);
    } catch (error) {
      setPageLoader2(false);
      setErrorMessage(error.message || __("Something went wrong while adding the payment method to the quote."));
    }
  };
  const context = useFormSection({
    formikData,
    initialValues: initialValues$3,
    validationSchema: validationSchema$1,
    id: PAYMENT_METHOD_FORM,
    submitHandler: formSubmit2
  });
  return /* @__PURE__ */ e$1(PaymentMethodFormContext.Provider, {
    value: __spreadProps(__spreadValues(__spreadValues({}, context), formikData), {
      formikData
    }),
    children: /* @__PURE__ */ e$1(Form, {
      id: PAYMENT_METHOD_FORM,
      children
    })
  });
}
PaymentMethodFormManager.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
var customRenderers = {};
const PaymentMethodMemorized = React.memo(({
  formikData
}) => {
  const {
    isPaymentAvailable
  } = usePaymentMethodCartContext();
  return /* @__PURE__ */ e$1(PaymentMethodFormManager, {
    formikData,
    children: /* @__PURE__ */ e$1(Card, {
      classes: isPaymentAvailable ? "" : "opacity-75",
      children: /* @__PURE__ */ e$1(ToggleBox, {
        show: true,
        title: __("Payment Methods"),
        children: isPaymentAvailable ? /* @__PURE__ */ e$1(PaymentMethodList, {
          methodRenderers: customRenderers
        }) : /* @__PURE__ */ e$1(NoPaymentMethodInfoBox, {})
      })
    })
  });
});
PaymentMethodMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function PaymentMethod() {
  const paymentFormikData = usePaymentMethodMemorizer();
  return /* @__PURE__ */ e$1(PaymentMethodMemorized, {
    formikData: paymentFormikData
  });
}
const regionField$1 = `${BILLING_ADDR_FORM}.region`;
const countryField$1 = `${BILLING_ADDR_FORM}.country`;
function useBillingAddressMemorizer() {
  const { values } = useFormikContext();
  const formSectionData = useFormikMemorizer(BILLING_ADDR_FORM);
  const selectedRegion = lodash_get(values, regionField$1);
  const selectedCountry = lodash_get(values, countryField$1);
  const isBillingSame = lodash_get(values, billingSameAsShippingField);
  const { formSectionValues, formSectionErrors, isFormSectionTouched } = formSectionData;
  const streetError = lodash_get(formSectionErrors, "street");
  if (streetError) {
    lodash_set(formSectionErrors, "street[0]", __("%1 is required", "Street Address"));
  }
  const billingFormikData = d$1(() => __spreadProps(__spreadValues({}, formSectionData), {
    isBillingSame,
    selectedRegion,
    selectedCountry,
    formSectionErrors,
    billingValues: formSectionValues,
    isBillingAddressTouched: isFormSectionTouched
  }), [
    isBillingSame,
    selectedRegion,
    formSectionData,
    selectedCountry,
    formSectionErrors,
    formSectionValues,
    isFormSectionTouched
  ]);
  return billingFormikData;
}
function useBillingAddressAppContext() {
  const {
    stateList,
    isLoggedIn,
    setMessage,
    countryList,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    defaultBillingAddress,
    updateCustomerAddress
  } = useAppContext();
  return {
    stateList,
    isLoggedIn,
    setMessage,
    countryList,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    defaultBillingAddress,
    updateCustomerAddress
  };
}
function useBillingAddressCartContext() {
  const {
    cart,
    addCartBillingAddress,
    setCartBillingAddress: setCartBillingAddress2,
    setCartSelectedBillingAddress,
    setCustomerAddressAsBillingAddress
  } = useCartContext;
  const cartBillingAddress = lodash_get(cart, `billing_address`);
  const cartShippingAddress = lodash_get(cart, "shipping_address");
  const selectedAddressId = lodash_get(cartBillingAddress, "id");
  return {
    cartInfo: cart,
    selectedAddressId,
    cartBillingAddress,
    cartShippingAddress,
    addCartBillingAddress,
    setCartBillingAddress: setCartBillingAddress2,
    setCartSelectedBillingAddress,
    setCustomerAddressAsBillingAddress
  };
}
const ShippingAddressFormikContext$1 = React.createContext();
function useBillingAddressFormikContext() {
  return F$2(ShippingAddressFormikContext$1);
}
function CancelButton$1() {
  const {
    cartBillingAddress
  } = useBillingAddressCartContext();
  const {
    backupAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setBillingAddressFormFields
  } = useBillingAddressFormikContext();
  const clickHandler = () => {
    setBillingAddressFormFields(__spreadProps(__spreadValues({}, backupAddress), {
      isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo()
    }));
    setFormToViewMode();
    setCustomerAddressSelected(!!LocalStorage.getCustomerBillingAddressId());
    if (backupAddress.id) {
      setSelectedAddress(_toString(backupAddress.id));
    }
  };
  if (!isCartAddressValid(cartBillingAddress)) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(Button, {
    click: clickHandler,
    variant: "secondary",
    children: __("Cancel")
  });
}
function useCountryState({ fields, formikData }) {
  const { countryList, stateList } = useAppContext();
  const regionField2 = fields.region;
  const { selectedCountry, selectedRegion, setFieldValue } = formikData || {};
  y$2(() => {
    if (selectedCountry) {
      const stateListContainsSelectedRegion = !stateList.length || lodash_get(stateList, selectedCountry, []).find((state) => state.code === selectedRegion);
      if (!stateListContainsSelectedRegion) {
        setFieldValue(regionField2, "");
      }
    }
  }, [selectedCountry, regionField2, selectedRegion, stateList, setFieldValue]);
  const countryOptions = d$1(() => prepareCountryOptions(countryList), [countryList]);
  const stateOptions = d$1(() => prepareCountryStateOptions(stateList, selectedCountry), [stateList, selectedCountry]);
  return {
    countryOptions,
    stateOptions,
    hasStateOptions: !!stateOptions.length
  };
}
function useAddressWrapper() {
  return F$2(AddressWrapperContext);
}
function useAddressOtherOptions({
  cartAddress,
  selectedAddress
}) {
  const { customerAddressList } = useAppContext();
  const { mostRecentAddressOptions } = useAddressWrapper();
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
  let addressOptions = prepareCustomerAddressOptions({
    cartAddress,
    selectedAddress,
    customerAddressList
  });
  if (!_isObjEmpty(mostRecentAddressList)) {
    addressOptions = [
      ...mostRecentAddressOptions.filter(({ id: id2 }) => id2 !== selectedAddress),
      ...addressOptions
    ];
  }
  return addressOptions;
}
function BillingAddressForm() {
  const {
    fields,
    formId,
    viewMode,
    formikData,
    isNewAddress,
    submitHandler,
    handleKeyDown,
    billingValues,
    isBillingSame,
    setIsNewAddress,
    selectedAddress,
    validationSchema: validationSchema2,
    setSelectedAddress
  } = useBillingAddressFormikContext();
  const {
    isLoggedIn
  } = useBillingAddressAppContext();
  const {
    reCalculateMostRecentAddressOptions
  } = useAddressWrapper();
  const formSubmitHandler = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema: validationSchema2
  });
  const {
    countryOptions,
    stateOptions,
    hasStateOptions
  } = useCountryState({
    fields,
    formikData
  });
  const {
    selectedCountry,
    isBillingAddressTouched
  } = formikData;
  const saveAddressAction = async () => {
    await formSubmitHandler();
    if (!isLoggedIn) {
      return;
    }
    if (isNewAddress) {
      const recentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
      const newAddressId = `new_address_${_keys(recentAddressList).length + 1}`;
      LocalStorage.addAddressToMostRecentlyUsedList(billingValues);
      setIsNewAddress(false);
      setSelectedAddress(newAddressId);
      LocalStorage.saveCustomerAddressInfo(newAddressId, isBillingSame, false);
      reCalculateMostRecentAddressOptions();
    }
    if (isMostRecentAddress(selectedAddress)) {
      LocalStorage.updateMostRecentlyAddedAddress(selectedAddress, billingValues);
      reCalculateMostRecentAddressOptions();
    }
  };
  if (viewMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1("div", {
      className: "py-2",
      children: [/* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("Company"),
        name: fields.company,
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("Company")
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        name: fields.firstname,
        formikData,
        label: __("First name"),
        onKeyDown: handleKeyDown,
        placeholder: __("First name")
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        name: fields.lastname,
        label: __("Last name"),
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("Last name")
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("Street"),
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("Street"),
        name: `${fields.street}[0]`
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        placeholder: "12345",
        name: fields.zipcode,
        formikData,
        label: __("Postal Code"),
        onKeyDown: handleKeyDown
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("City"),
        name: fields.city,
        formikData,
        placeholder: __("City"),
        onKeyDown: handleKeyDown
      }), /* @__PURE__ */ e$1(SelectInput, {
        required: true,
        label: __("Country"),
        name: fields.country,
        formikData,
        options: countryOptions,
        onKeyDown: handleKeyDown
      }), /* @__PURE__ */ e$1(SelectInput, {
        required: true,
        label: __("State"),
        name: fields.region,
        options: stateOptions,
        formikData,
        onKeyDown: handleKeyDown,
        isHidden: !selectedCountry || !hasStateOptions
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("Phone"),
        name: fields.phone,
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("+32 000 000 000")
      })]
    }), /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-around mt-2",
      children: [/* @__PURE__ */ e$1(CancelButton$1, {}), /* @__PURE__ */ e$1(SaveButton, {
        isFormValid: isBillingAddressTouched,
        actions: {
          saveAddress: saveAddressAction
        }
      })]
    })]
  });
}
function AddressOptions({
  title,
  options,
  actions: actions2,
  inputName,
  selectedOption,
  submitButtonLabel
}) {
  const {
    customerAddressList
  } = useAppContext();
  const {
    reCalculateMostRecentAddressOptions
  } = useAddressWrapper();
  const handleRecentlyUsedAddressRemoval = (addressId) => {
    LocalStorage.removeMostRecentlyUsedAddress(addressId);
    reCalculateMostRecentAddressOptions();
  };
  return /* @__PURE__ */ e$1(Card, {
    bg: "darker",
    classes: "card-interactive",
    children: /* @__PURE__ */ e$1(ToggleBox, {
      title,
      show: true,
      small: true,
      hrLine: true,
      children: [/* @__PURE__ */ e$1("div", {
        className: "mt-3 space-y-2",
        children: options.map(({
          id: id2,
          address
        }) => /* @__PURE__ */ e$1(Card, {
          bg: "white",
          children: [/* @__PURE__ */ e$1("div", {
            className: "flex items-center justify-start",
            children: [/* @__PURE__ */ e$1("div", {
              className: "w-8",
              children: /* @__PURE__ */ e$1(RadioInput, {
                value: id2,
                name: inputName,
                checked: selectedOption === id2,
                onChange: actions2.handleOptionChange
              })
            }), /* @__PURE__ */ e$1("label", {
              htmlFor: `${inputName}_${id2}`,
              className: "inline-block pl-2 text-sm cursor-pointer",
              children: address.join(", ")
            })]
          }), /* @__PURE__ */ e$1("div", {
            className: "h-8 mt-2 -mx-4 -mb-4 bg-container",
            children: /* @__PURE__ */ e$1("div", {
              className: "flex items-center justify-between h-full px-3 text-xs italic font-semibold text-secondary-lighter",
              children: [/* @__PURE__ */ e$1("span", {
                children: customerAddressList[id2] ? __("FROM ADDRESS BOOK") : __("MOST RECENTLY USED")
              }), canAddressOptionRemoved(id2, customerAddressList) && /* @__PURE__ */ e$1("button", {
                type: "button",
                onClick: () => handleRecentlyUsedAddressRemoval(id2),
                className: "pr-2 italic font-semibold text-black underline hover:text-red-500",
                children: __("REMOVE")
              })]
            })
          })]
        }, id2))
      }), /* @__PURE__ */ e$1("div", {
        className: "flex items-center justify-end mt-3",
        children: /* @__PURE__ */ e$1("button", {
          type: "button",
          disabled: !selectedOption,
          onClick: actions2.handleShipToOtherOption,
          className: `flex items-center px-2 py-1 btn-secondary btn ${!selectedOption && "opacity-50 pointer-events-none"}`,
          children: submitButtonLabel
        })
      })]
    })
  });
}
AddressOptions.propTypes = {
  title: propTypes.exports.string,
  selectedOption: propTypes.exports.string,
  inputName: propTypes.exports.string.isRequired,
  submitButtonLabel: propTypes.exports.oneOfType([propTypes.exports.string, propTypes.exports.node]),
  options: propTypes.exports.arrayOf(propTypes.exports.shape({
    id: propTypes.exports.string,
    address: propTypes.exports.arrayOf(propTypes.exports.string)
  })),
  actions: propTypes.exports.shape({
    handleShipToOtherOption: propTypes.exports.func,
    handleOptionChange: propTypes.exports.func
  }).isRequired
};
AddressOptions.defaultProps = {
  title: "",
  options: [],
  selectedOption: "",
  submitButtonLabel: ""
};
function BillingAddressOthers({
  forceHide
}) {
  const {
    setFieldValue,
    submitHandler,
    selectedAddress,
    setSelectedAddress,
    setCustomerAddressSelected,
    billingOtherOptionSelected,
    setBillingAddressFormFields
  } = useBillingAddressFormikContext();
  const {
    cartBillingAddress
  } = useBillingAddressCartContext();
  const {
    isLoggedIn,
    customerAddressList
  } = useBillingAddressAppContext();
  const isCartBillingAddressValid = isCartAddressValid(cartBillingAddress);
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
  const addressOptions = useAddressOtherOptions({
    selectedAddress,
    cartAddress: cartBillingAddress
  });
  const handleOptionChange = (event) => {
    const addressId = event.target.value;
    const customerAddress = customerAddressList[addressId];
    setFieldValue(billingAddrOtherOptionField, addressId);
    if (isCartBillingAddressValid) {
      return;
    }
    setSelectedAddress(addressId);
    setCustomerAddressSelected(isValidCustomerAddressId(addressId));
    if (mostRecentAddressList[addressId]) {
      setBillingAddressFormFields(mostRecentAddressList[addressId]);
    } else if (customerAddress) {
      setBillingAddressFormFields(prepareFormAddressFromCartAddress(__spreadValues({}, customerAddress)));
    }
  };
  const handleShipToOtherOption = async () => {
    await submitHandler(billingOtherOptionSelected);
    setFieldValue(billingAddrOtherOptionField, "");
  };
  if (!isLoggedIn || forceHide) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  const submitButtonLabel = /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1(DocumentIcon, {
      className: "w-6 h-6 pr-1"
    }), /* @__PURE__ */ e$1("span", {
      className: "text-xs",
      children: __("Bill Here")
    })]
  });
  return /* @__PURE__ */ e$1(AddressOptions, {
    title: isCartBillingAddressValid ? __("OTHER ADDRESSES") : __("CHOOSE FROM THE ADDRESS LIST"),
    options: addressOptions,
    submitButtonLabel,
    inputName: billingAddrOtherOptionField,
    selectedOption: billingOtherOptionSelected,
    actions: {
      handleOptionChange,
      handleShipToOtherOption
    }
  });
}
BillingAddressOthers.propTypes = {
  forceHide: propTypes.exports.bool
};
BillingAddressOthers.defaultProps = {
  forceHide: false
};
function BillingAddressSelected() {
  const {
    billingValues,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode
  } = useBillingAddressFormikContext();
  const {
    stateList,
    isLoggedIn,
    customerAddressList
  } = useBillingAddressAppContext();
  const {
    cartBillingAddress
  } = useBillingAddressCartContext();
  const addressInfo = formatAddressListToCardData([__spreadValues({
    id: selectedAddress
  }, cartBillingAddress)], stateList);
  const performAddressEdit = () => {
    const customerAddress = lodash_get(customerAddressList, selectedAddress);
    const addressToBackup = customerAddress || billingValues;
    setBackupAddress(__spreadValues({}, addressToBackup));
    setFormToEditMode();
  };
  if (!isCartAddressValid(cartBillingAddress)) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(AddressCard, {
    address: addressInfo[0],
    actions: {
      performAddressEdit
    },
    title: selectedAddressTitle$1(isLoggedIn, customerAddressList)
  });
}
function BillingAddressView() {
  const {
    editMode,
    selectedAddress,
    setIsNewAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    resetBillingAddressFormFields
  } = useBillingAddressFormikContext();
  const {
    cartBillingAddress
  } = useBillingAddressCartContext();
  const {
    isLoggedIn,
    customerAddressList
  } = useBillingAddressAppContext();
  const hideOtherAddrSection = isLoggedIn && _isObjEmpty(customerAddressList);
  const isCartShippingAddressValid = isCartAddressValid(cartBillingAddress);
  const newAddressClickHandler = () => {
    setIsNewAddress(true);
    setBackupAddress(__spreadProps(__spreadValues({}, cartBillingAddress), {
      id: selectedAddress
    }));
    setSelectedAddress(CART_BILLING_ADDRESS);
    setCustomerAddressSelected(false);
    resetBillingAddressFormFields();
    setFormToEditMode();
  };
  if (editMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "py-2",
    children: /* @__PURE__ */ e$1("div", {
      className: "mt-5",
      children: /* @__PURE__ */ e$1("div", {
        className: "my-2 space-y-2 lg:flex lg:items-start lg:space-x-4 lg:space-y-0 lg:justify-center",
        children: [isCartShippingAddressValid && /* @__PURE__ */ e$1("div", {
          className: !isLoggedIn || hideOtherAddrSection ? "w-1/2" : "w-full",
          children: [/* @__PURE__ */ e$1(BillingAddressSelected, {}), /* @__PURE__ */ e$1(CreateNewAddressLink, {
            forceHide: !customerAddressSelected,
            actions: {
              click: newAddressClickHandler
            }
          })]
        }), !isCartShippingAddressValid ? /* @__PURE__ */ e$1("div", {
          className: "w-4/5",
          children: [/* @__PURE__ */ e$1(BillingAddressOthers, {
            forceHide: hideOtherAddrSection
          }), /* @__PURE__ */ e$1(CreateNewAddressLink, {
            actions: {
              click: newAddressClickHandler
            }
          })]
        }) : /* @__PURE__ */ e$1(BillingAddressOthers, {
          forceHide: hideOtherAddrSection
        })]
      })
    })
  });
}
function useRegionData(countryValue, regionValue) {
  const { stateList } = useAppContext();
  const [regionData, setRegionData] = l$1({});
  y$2(() => {
    if (lodash_get(regionData, "code") !== regionValue && regionValue && countryValue && stateList) {
      const newRegion = lodash_get(stateList, countryValue, []).find((state) => state.code === regionValue);
      setRegionData(newRegion);
    }
  }, [regionValue, countryValue, regionData, stateList]);
  return { regionData, setRegionData };
}
const defaultRegionRule = create$3().nullable();
const reqRegionRule = create$3().required(__("Region is required"));
function useRegionValidation(countryValue, validationSchema2) {
  const { countryList } = useAppContext();
  y$2(() => {
    if (countryValue && validationSchema2.region) {
      const country = _findById(countryList, countryValue);
      const regionRequired = !!lodash_get(country, "stateRequired");
      const regionRule = regionRequired ? reqRegionRule : defaultRegionRule;
      lodash_set(validationSchema2, "region", regionRule);
    }
  }, [countryValue, validationSchema2, countryList]);
  return validationSchema2;
}
function useSaveAddressAction$1(billingFormikContext) {
  const { setCartBillingAddress: setCartBillingAddress2, setCustomerAddressAsBillingAddress } = useBillingAddressCartContext();
  const {
    isLoggedIn,
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage,
    updateCustomerAddress
  } = useBillingAddressAppContext();
  const {
    editMode,
    regionData,
    billingValues,
    isBillingSame,
    setFieldValue,
    selectedAddress,
    setFormToViewMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected
  } = billingFormikContext;
  return async (addressId) => {
    setMessage(false);
    const addressIdContext = addressId || selectedAddress;
    const isCustomerAddress = isValidCustomerAddressId(addressId);
    const mostRecentAddresses = LocalStorage.getMostlyRecentlyUsedAddressList();
    const recentAddressInUse = mostRecentAddresses[addressId];
    const billingToSave = recentAddressInUse || billingValues;
    let updateCustomerAddrPromise = _emptyFunc();
    let updateCartAddressPromise = _makePromise(setCartBillingAddress2, billingToSave);
    if (isCustomerAddress) {
      updateCartAddressPromise = _makePromise(setCustomerAddressAsBillingAddress, addressIdContext, isBillingSame);
    }
    if (isLoggedIn && customerAddressSelected && editMode) {
      updateCustomerAddrPromise = _makePromise(updateCustomerAddress, selectedAddress, billingValues, regionData);
    }
    try {
      setPageLoader2(true);
      await updateCartAddressPromise();
      updateCustomerAddrPromise();
      setFormToViewMode(false);
      setSelectedAddress(addressIdContext);
      setCustomerAddressSelected(isValidCustomerAddressId(addressIdContext));
      LocalStorage.saveCustomerAddressInfo(addressIdContext, isBillingSame, false);
      const billingIdInStorage = LocalStorage.getCustomerBillingAddressId();
      const shippingIdInStorage = LocalStorage.getCustomerShippingAddressId();
      if (billingIdInStorage === shippingIdInStorage) {
        setFieldValue(billingSameAsShippingField, true);
      }
      setSuccessMessage(__("Billing address updated successfully."));
      setPageLoader2(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__("Billing address update failed. Please try again."));
      setPageLoader2(false);
    }
  };
}
function capitalize(str) {
  if (typeof str !== "string" || !str) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}
function prepareFullName(customerData) {
  const firstName = capitalize(lodash_get(customerData, "firstname", "") || "");
  const middleName = capitalize(lodash_get(customerData, "middlename", "") || "");
  const lastName = capitalize(lodash_get(customerData, "lastname", "") || "");
  return `${firstName} ${middleName} ${lastName}`.replace(/\s+/g, " ").trim();
}
function customerHasAddress(customerAddressList) {
  return !!_keys(customerAddressList).length;
}
const requiredMessage$2 = __("%1 is required");
const initValidationSchema$1 = {
  company: create$3().required(requiredMessage$2),
  firstname: create$3().required(requiredMessage$2),
  lastname: create$3().required(requiredMessage$2),
  street: create().test("street1Required", requiredMessage$2, (value) => !!lodash_get(value, 0)),
  phone: create$3().required(requiredMessage$2),
  zipcode: create$3().required(requiredMessage$2),
  city: create$3().required(requiredMessage$2),
  region: create$3().nullable(),
  country: create$3().required(requiredMessage$2),
  isSameAsShipping: create$4()
};
function BillingAddressFormikProvider({
  children,
  formikData
}) {
  const [isNewAddress, setIsNewAddress] = l$1(true);
  const [backupAddress, setBackupAddress] = l$1(null);
  const [forceFilledAddress, setForceFilledAddress] = l$1(false);
  const {
    customerAddressList
  } = useBillingAddressAppContext();
  const {
    cartBillingAddress
  } = useBillingAddressCartContext();
  const editModeContext = useFormEditMode();
  const {
    billingValues,
    setFieldValue,
    selectedRegion,
    selectedCountry
  } = formikData;
  const validationSchema2 = useRegionValidation(selectedCountry, initValidationSchema$1);
  const {
    billingSelected: selectedAddress,
    setBillingSelected: setSelectedAddress,
    isBillingCustomerAddress: customerAddressSelected,
    setIsBillingCustomerAddress: setCustomerAddressSelected
  } = useAddressWrapper();
  const isSame = lodash_get(billingValues, "isSameAsShipping");
  const {
    setFormToViewMode
  } = editModeContext;
  const regionData = useRegionData(selectedCountry, selectedRegion);
  const cartHasBillingAddress = isCartAddressValid(cartBillingAddress);
  const resetBillingAddressFormFields = A$2(() => {
    setFieldValue(BILLING_ADDR_FORM, __spreadProps(__spreadValues({}, billingAddressFormInitValues), {
      isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo()
    }));
  }, [setFieldValue]);
  const setBillingAddressFormFields = A$2((addressToSet) => {
    setFieldValue(BILLING_ADDR_FORM, __spreadProps(__spreadValues(__spreadValues({}, billingAddressFormInitValues), addressToSet), {
      isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo()
    }));
  }, [setFieldValue]);
  y$2(() => {
    if (forceFilledAddress === selectedAddress || !cartHasBillingAddress) {
      if (customerHasAddress(customerAddressList)) {
        setFormToViewMode();
      }
      return;
    }
    if (!isSame && !forceFilledAddress && (cartHasBillingAddress || customerHasAddress(customerAddressList))) {
      setFormToViewMode();
    }
    if (!forceFilledAddress && isValidCustomerAddressId(selectedAddress)) {
      setIsNewAddress(false);
    }
    if (cartHasBillingAddress) {
      setForceFilledAddress(selectedAddress);
    }
  }, [isSame, selectedAddress, setFormToViewMode, forceFilledAddress, customerAddressList, cartHasBillingAddress]);
  let context = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, regionData), formikData), editModeContext), {
    formikData,
    isNewAddress,
    backupAddress,
    setIsNewAddress,
    selectedAddress,
    setBackupAddress,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    setBillingAddressFormFields,
    resetBillingAddressFormFields
  });
  const formSubmit2 = useSaveAddressAction$1(context);
  const handleKeyDown = useEnterActionInForm({
    formikData,
    validationSchema: validationSchema2,
    submitHandler: formSubmit2
  });
  const formContext = useFormSection({
    formikData,
    validationSchema: validationSchema2,
    id: BILLING_ADDR_FORM,
    submitHandler: formSubmit2,
    initialValues: billingAddressFormInitValues
  });
  context = __spreadProps(__spreadValues(__spreadValues({}, context), formContext), {
    handleKeyDown
  });
  return /* @__PURE__ */ e$1(ShippingAddressFormikContext$1.Provider, {
    value: context,
    children: /* @__PURE__ */ e$1(Form, {
      id: BILLING_ADDR_FORM,
      children
    })
  });
}
BillingAddressFormikProvider.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const BillingAddressMemorized = React.memo(({
  formikData
}) => {
  const {
    isBillingSame
  } = formikData;
  const {
    isVirtualCart
  } = useBillingAddressCartContext();
  return /* @__PURE__ */ e$1(BillingAddressFormikProvider, {
    formikData,
    children: !isBillingSame || isVirtualCart ? /* @__PURE__ */ e$1(Card, {
      children: /* @__PURE__ */ e$1(ToggleBox, {
        title: __("Billing Information"),
        show: true,
        children: [/* @__PURE__ */ e$1(BillingAddressForm, {}), /* @__PURE__ */ e$1(BillingAddressView, {})]
      })
    }) : /* @__PURE__ */ e$1(d$2, {})
  });
});
BillingAddressMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function BillingAddress() {
  const {
    values
  } = useFormikContext();
  const formikData = useBillingAddressMemorizer();
  const billingOtherOptionSelected = lodash_get(values, billingAddrOtherOptionField);
  const billingFormikData = d$1(() => __spreadProps(__spreadValues({}, formikData), {
    billingOtherOptionSelected
  }), [formikData, billingOtherOptionSelected]);
  return /* @__PURE__ */ e$1(BillingAddressMemorized, {
    formikData: billingFormikData
  });
}
const regionField = `${SHIPPING_ADDR_FORM}.region`;
const countryField = `${SHIPPING_ADDR_FORM}.country`;
function useShippingAddressMemorizer() {
  const { values } = useFormikContext();
  const sectionFormikData = useFormikMemorizer(SHIPPING_ADDR_FORM);
  const selectedRegion = lodash_get(values, regionField);
  const selectedCountry = lodash_get(values, countryField);
  const isBillingSame = !!lodash_get(values, billingSameAsShippingField);
  const { formSectionValues, formSectionErrors, isFormSectionTouched } = sectionFormikData;
  const streetError = lodash_get(formSectionErrors, "street");
  if (streetError) {
    lodash_set(formSectionErrors, "street[0]", __("%1 is required", "Street Address"));
  }
  const shippingFormikData = d$1(() => __spreadProps(__spreadValues({}, sectionFormikData), {
    isBillingSame,
    selectedRegion,
    selectedCountry,
    formSectionErrors,
    shippingValues: formSectionValues,
    isBillingFormTouched: isFormSectionTouched
  }), [
    isBillingSame,
    selectedRegion,
    selectedCountry,
    sectionFormikData,
    formSectionValues,
    formSectionErrors,
    isFormSectionTouched
  ]);
  return shippingFormikData;
}
function useShippingAddressAppContext() {
  const {
    stateList,
    isLoggedIn,
    setMessage,
    countryList,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    updateCustomerAddress,
    defaultBillingAddress,
    defaultShippingAddress
  } = useAppContext();
  return {
    stateList,
    isLoggedIn,
    setMessage,
    countryList,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage,
    customerAddressList,
    updateCustomerAddress,
    defaultBillingAddress,
    defaultShippingAddress
  };
}
function useShippingAddressCartContext() {
  const {
    cart,
    setCartBillingAddress: setCartBillingAddress2,
    updateCustomerAddress,
    addCartShippingAddress,
    setCartSelectedShippingAddress: setCartSelectedShippingAddress2,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress
  } = useCartContext();
  const {
    defaultBillingAddress,
    defaultShippingAddress,
    billing_address: cartBillingAddress,
    shipping_address: cartShippingAddress,
    selected_shipping_address: selectedAddressId
  } = cart || {};
  return {
    cartInfo: cart,
    selectedAddressId,
    cartBillingAddress,
    cartShippingAddress,
    setCartBillingAddress: setCartBillingAddress2,
    updateCustomerAddress,
    defaultBillingAddress,
    addCartShippingAddress,
    defaultShippingAddress,
    setCartSelectedShippingAddress: setCartSelectedShippingAddress2,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress
  };
}
const ShippingAddressFormikContext = React.createContext();
function useShippingAddressFormikContext() {
  return F$2(ShippingAddressFormikContext);
}
function CancelButton() {
  const {
    backupAddress,
    setFormToViewMode,
    setSelectedAddress,
    setCustomerAddressSelected,
    setShippingAddressFormFields
  } = useShippingAddressFormikContext();
  const {
    cartShippingAddress
  } = useShippingAddressCartContext();
  const clickHandler = () => {
    setShippingAddressFormFields(__spreadValues({}, backupAddress));
    setFormToViewMode();
    setCustomerAddressSelected(isValidCustomerAddressId(LocalStorage.getCustomerShippingAddressId()));
    if (backupAddress.id) {
      setSelectedAddress(_toString(backupAddress.id));
    }
  };
  if (!isCartAddressValid(cartShippingAddress)) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(Button, {
    click: clickHandler,
    variant: "secondary",
    children: __("Cancel")
  });
}
function ShippingAddressForm() {
  const {
    fields,
    formId,
    viewMode,
    formikData,
    isNewAddress,
    handleKeyDown,
    submitHandler,
    isBillingSame,
    shippingValues,
    selectedCountry,
    selectedAddress,
    setIsNewAddress,
    validationSchema: validationSchema2,
    setSelectedAddress,
    isBillingFormTouched
  } = useShippingAddressFormikContext();
  const {
    isLoggedIn
  } = useShippingAddressAppContext();
  const {
    reCalculateMostRecentAddressOptions
  } = useAddressWrapper();
  const {
    countryOptions,
    stateOptions,
    hasStateOptions
  } = useCountryState({
    fields,
    formikData
  });
  const formSubmitHandler = useFormValidateThenSubmit({
    formId,
    formikData,
    submitHandler,
    validationSchema: validationSchema2
  });
  const saveAddressAction = async () => {
    await formSubmitHandler();
    if (!isLoggedIn) {
      return;
    }
    if (isNewAddress) {
      const recentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
      const newAddressId = `new_address_${_keys(recentAddressList).length + 1}`;
      LocalStorage.addAddressToMostRecentlyUsedList(shippingValues);
      setIsNewAddress(false);
      setSelectedAddress(newAddressId);
      LocalStorage.saveCustomerAddressInfo(newAddressId, isBillingSame);
      reCalculateMostRecentAddressOptions();
    }
    if (isMostRecentAddress(selectedAddress)) {
      LocalStorage.updateMostRecentlyAddedAddress(selectedAddress, shippingValues);
      reCalculateMostRecentAddressOptions();
    }
  };
  if (viewMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1("div", {
      className: "py-2",
      children: [/* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("Company"),
        name: fields.company,
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("Company")
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        name: fields.firstname,
        formikData,
        label: __("First name"),
        onKeyDown: handleKeyDown,
        placeholder: __("First name")
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        name: fields.lastname,
        label: __("Last name"),
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("Last name")
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("Street"),
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("Street"),
        name: `${fields.street}[0]`
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        placeholder: "12345",
        name: fields.zipcode,
        formikData,
        label: __("Postal Code"),
        onKeyDown: handleKeyDown
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("City"),
        name: fields.city,
        formikData,
        placeholder: __("City"),
        onKeyDown: handleKeyDown
      }), /* @__PURE__ */ e$1(SelectInput, {
        required: true,
        label: __("Country"),
        name: fields.country,
        formikData,
        options: countryOptions,
        onKeyDown: handleKeyDown
      }), /* @__PURE__ */ e$1(SelectInput, {
        required: true,
        label: __("State"),
        name: fields.region,
        options: stateOptions,
        formikData,
        onKeyDown: handleKeyDown,
        isHidden: !selectedCountry || !hasStateOptions
      }), /* @__PURE__ */ e$1(TextInput, {
        required: true,
        label: __("Phone"),
        name: fields.phone,
        formikData,
        onKeyDown: handleKeyDown,
        placeholder: __("+32 000 000 000")
      })]
    }), /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-around mt-2",
      children: [/* @__PURE__ */ e$1(CancelButton, {}), /* @__PURE__ */ e$1(SaveButton, {
        isFormValid: isBillingFormTouched,
        actions: {
          saveAddress: saveAddressAction
        }
      })]
    })]
  });
}
const CART_SHIPPING_ADDRESS = "cart_shipping_address";
const shippingAddrOtherOptionField = "additional.shipping_address_selected_other_option";
function selectedAddressTitle(isLoggedIn, customerAddressList) {
  if (!isLoggedIn || isLoggedIn && _isObjEmpty(customerAddressList)) {
    return __("SHIPPING ADDRESS");
  }
  return __("SELECTED ADDRESS");
}
function ShippingAddressOthers({
  forceHide
}) {
  const {
    setFieldValue,
    submitHandler,
    selectedAddress,
    setSelectedAddress,
    setCustomerAddressSelected,
    shippingOtherOptionSelected,
    setShippingAddressFormFields
  } = useShippingAddressFormikContext();
  const {
    cartShippingAddress
  } = useShippingAddressCartContext();
  const {
    isLoggedIn,
    customerAddressList
  } = useShippingAddressAppContext();
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const mostRecentAddressList = LocalStorage.getMostlyRecentlyUsedAddressList();
  const addressOptions = useAddressOtherOptions({
    selectedAddress,
    cartAddress: cartShippingAddress
  });
  const handleOptionChange = (event) => {
    const addressId = event.target.value;
    const customerAddress = customerAddressList[addressId];
    setFieldValue(shippingAddrOtherOptionField, addressId);
    if (isCartShippingAddressValid) {
      return;
    }
    setSelectedAddress(addressId);
    setCustomerAddressSelected(isValidCustomerAddressId(addressId));
    if (mostRecentAddressList[addressId]) {
      setShippingAddressFormFields(mostRecentAddressList[addressId]);
    } else if (customerAddress) {
      setShippingAddressFormFields(prepareFormAddressFromCartAddress(__spreadValues({}, customerAddress)));
    }
  };
  const handleShipToOtherOption = async () => {
    await submitHandler(shippingOtherOptionSelected);
    setFieldValue(shippingAddrOtherOptionField, "");
  };
  if (!isLoggedIn || forceHide) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  const submitButtonLabel = /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1(TruckIcon, {
      className: "w-6 h-6 pr-1"
    }), /* @__PURE__ */ e$1("span", {
      className: "text-xs",
      children: __("Ship Here")
    })]
  });
  return /* @__PURE__ */ e$1(AddressOptions, {
    title: isCartShippingAddressValid ? __("OTHER ADDRESSES") : __("CHOOSE FROM THE ADDRESS LIST"),
    options: addressOptions,
    submitButtonLabel,
    inputName: shippingAddrOtherOptionField,
    selectedOption: shippingOtherOptionSelected,
    actions: {
      handleOptionChange,
      handleShipToOtherOption
    }
  });
}
ShippingAddressOthers.propTypes = {
  forceHide: propTypes.exports.bool
};
ShippingAddressOthers.defaultProps = {
  forceHide: false
};
function BillingSameAsShippingCheckbox() {
  const {
    cartBillingAddress,
    cartShippingAddress,
    setCartBillingAddress: setCartBillingAddress2,
    setCustomerAddressAsBillingAddress
  } = useShippingAddressCartContext();
  const {
    setFieldValue,
    isBillingSame,
    shippingValues,
    selectedAddress
  } = useShippingAddressFormikContext();
  const {
    isLoggedIn,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  } = useShippingAddressAppContext();
  const {
    setBillingSelected,
    setIsBillingCustomerAddress
  } = useAddressWrapper();
  const makeBillingSameAsShippingRequest = async () => {
    const billingIsSame = true;
    const isCustomerAddress = isValidCustomerAddressId(selectedAddress);
    const successMessage = __("Billing address made same as shipping address");
    try {
      if (!isLoggedIn || isLoggedIn && !isCustomerAddress) {
        setPageLoader2(true);
        await setCartBillingAddress2(__spreadValues({}, shippingValues));
        setFieldValue(BILLING_ADDR_FORM, __spreadProps(__spreadValues({}, shippingValues), {
          isSameAsShipping: billingIsSame
        }));
        setSuccessMessage(successMessage);
        setPageLoader2(false);
      } else if (isLoggedIn && isCustomerAddress) {
        setPageLoader2(true);
        await setCustomerAddressAsBillingAddress(selectedAddress, billingIsSame);
        setSuccessMessage(successMessage);
        setPageLoader2(false);
      }
      setBillingSelected(selectedAddress);
      setIsBillingCustomerAddress(isCustomerAddress);
      LocalStorage.saveCustomerAddressInfo(selectedAddress, billingIsSame, false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__("Billing address update failed. Please try again."));
    }
  };
  const toggleBillingEqualsShippingState = async () => {
    const newSameAsShipping = !isBillingSame;
    setFieldValue(billingSameAsShippingField, newSameAsShipping);
    LocalStorage.saveBillingSameAsShipping(newSameAsShipping);
    if (newSameAsShipping) {
      await makeBillingSameAsShippingRequest();
    }
  };
  if (!isCartAddressValid(cartShippingAddress) && isCartAddressValid(cartBillingAddress)) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "flex items-center h-10 px-3 pb-4 mt-3 -mx-4 -mb-4 bg-gray-200",
    children: /* @__PURE__ */ e$1(Checkbox, {
      isChecked: isBillingSame,
      name: billingSameAsShippingField,
      onChange: toggleBillingEqualsShippingState,
      label: __("Use this address as my billing address")
    })
  });
}
function ShippingAddressSelected() {
  const {
    shippingValues,
    selectedAddress,
    setBackupAddress,
    setFormToEditMode
  } = useShippingAddressFormikContext();
  const {
    stateList,
    isLoggedIn,
    customerAddressList
  } = useShippingAddressAppContext();
  const {
    cartShippingAddress
  } = useShippingAddressCartContext();
  const addressInfo = formatAddressListToCardData([__spreadValues({
    id: selectedAddress
  }, cartShippingAddress)], stateList);
  const performAddressEdit = () => {
    const customerAddress = lodash_get(customerAddressList, selectedAddress);
    const addressToBackup = customerAddress || shippingValues;
    setBackupAddress(__spreadValues({}, addressToBackup));
    setFormToEditMode();
  };
  if (!isCartAddressValid(cartShippingAddress)) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1(AddressCard, {
    address: addressInfo[0],
    actions: {
      performAddressEdit
    },
    billingSameCheckbox: /* @__PURE__ */ e$1(BillingSameAsShippingCheckbox, {}),
    title: selectedAddressTitle(isLoggedIn, customerAddressList)
  });
}
function ShippingAddressView() {
  const {
    editMode,
    selectedAddress,
    setIsNewAddress,
    setBackupAddress,
    setFormToEditMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    resetShippingAddressFormFields
  } = useShippingAddressFormikContext();
  const {
    cartShippingAddress
  } = useShippingAddressCartContext();
  const {
    isLoggedIn,
    customerAddressList
  } = useShippingAddressAppContext();
  const hideOtherAddrSection = isLoggedIn && _isObjEmpty(customerAddressList);
  const isCartShippingAddressValid = isCartAddressValid(cartShippingAddress);
  const newAddressClickHandler = () => {
    setIsNewAddress(true);
    setBackupAddress(__spreadProps(__spreadValues({}, cartShippingAddress), {
      id: selectedAddress
    }));
    setSelectedAddress(CART_SHIPPING_ADDRESS);
    setCustomerAddressSelected(false);
    resetShippingAddressFormFields();
    setFormToEditMode();
  };
  if (editMode) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "py-2",
    children: /* @__PURE__ */ e$1("div", {
      className: "mt-5",
      children: /* @__PURE__ */ e$1("div", {
        className: "my-2 space-y-2 lg:flex lg:items-start lg:space-x-4 lg:space-y-0 lg:justify-center",
        children: [isCartShippingAddressValid && /* @__PURE__ */ e$1("div", {
          className: !isLoggedIn || hideOtherAddrSection ? "md:w-1/2" : "w-full",
          children: [/* @__PURE__ */ e$1(ShippingAddressSelected, {}), /* @__PURE__ */ e$1(CreateNewAddressLink, {
            forceHide: !customerAddressSelected,
            actions: {
              click: newAddressClickHandler
            }
          })]
        }), !isCartShippingAddressValid ? /* @__PURE__ */ e$1("div", {
          className: "w-4/5",
          children: [/* @__PURE__ */ e$1(ShippingAddressOthers, {
            forceHide: hideOtherAddrSection
          }), /* @__PURE__ */ e$1(CreateNewAddressLink, {
            actions: {
              click: newAddressClickHandler
            }
          })]
        }) : /* @__PURE__ */ e$1(ShippingAddressOthers, {
          forceHide: hideOtherAddrSection
        })]
      })
    })
  });
}
const emptyCallback = _emptyFunc();
function useSaveAddressAction(shippingAddressFormContext) {
  const {
    editMode,
    regionData,
    setFieldValue,
    isBillingSame,
    selectedAddress,
    setFormToViewMode,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    shippingValues: shippingAddressToSave
  } = shippingAddressFormContext;
  const { setBillingSelected, setIsBillingCustomerAddress } = useAddressWrapper();
  const {
    isLoggedIn,
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage,
    updateCustomerAddress
  } = useShippingAddressAppContext();
  const {
    setCartBillingAddress: setCartBillingAddress2,
    addCartShippingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress
  } = useShippingAddressCartContext();
  const submitHandler = async (customerAddressId) => {
    const mostRecentAddresses = LocalStorage.getMostlyRecentlyUsedAddressList();
    const recentAddressInUse = mostRecentAddresses[customerAddressId];
    const addressToSave = recentAddressInUse || shippingAddressToSave;
    const useCustomerAddressInSave = customerAddressId && !recentAddressInUse;
    setPageLoader2(true);
    let updateBillingAddress = emptyCallback;
    let updateShippingAddress = _makePromise(addCartShippingAddress, addressToSave, isBillingSame);
    if (useCustomerAddressInSave) {
      updateShippingAddress = _makePromise(setCustomerAddressAsShippingAddress, Number(customerAddressId), isBillingSame);
    }
    if (isBillingSame) {
      if (useCustomerAddressInSave) {
        updateBillingAddress = _makePromise(setCustomerAddressAsBillingAddress, Number(customerAddressId), isBillingSame);
      } else {
        updateBillingAddress = _makePromise(setCartBillingAddress2, __spreadProps(__spreadValues({}, addressToSave), {
          isSameAsShipping: true
        }));
      }
    }
    const shippingAddrResponse = await updateShippingAddress();
    await updateBillingAddress();
    if (isBillingSame) {
      const addressToSet = _cleanObjByKeys(lodash_get(shippingAddrResponse, "shipping_address"), ["fullName"]);
      setFieldValue(BILLING_ADDR_FORM, __spreadProps(__spreadValues(__spreadValues({}, billingAddressFormInitValues), addressToSet), {
        isSameAsShipping: true
      }));
    }
    setPageLoader2(false);
  };
  return async (addressId) => {
    setMessage(false);
    const addressIdContext = addressId || selectedAddress;
    const isCustomerAddress = isValidCustomerAddressId(addressIdContext);
    let updateCustomerAddrPromise = emptyCallback;
    const updateCartAddressPromise = _makePromise(submitHandler, isCustomerAddress && addressId);
    if (isLoggedIn && customerAddressSelected && editMode) {
      updateCustomerAddrPromise = _makePromise(updateCustomerAddress, addressIdContext, shippingAddressToSave, regionData);
    }
    try {
      setPageLoader2(true);
      await updateCartAddressPromise();
      updateCustomerAddrPromise();
      setFormToViewMode(false);
      setSelectedAddress(addressIdContext);
      setCustomerAddressSelected(isValidCustomerAddressId(addressIdContext));
      if (isBillingSame) {
        setBillingSelected(addressIdContext);
        setIsBillingCustomerAddress(isValidCustomerAddressId(addressIdContext));
      }
      LocalStorage.saveCustomerAddressInfo(addressIdContext, isBillingSame);
      setSuccessMessage(__("Shipping address updated successfully."));
      setPageLoader2(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__("Shipping address update failed. Please try again"));
      setPageLoader2(false);
    }
  };
}
const _emptyCallback = _emptyFunc();
function useFillDefaultAddresses(shippingContext) {
  const [isDefaultAddressSaved, setIsDefaultAddressSaved] = l$1(false);
  const {
    setFieldValue,
    isBillingSame,
    setSelectedAddress,
    setCustomerAddressSelected
  } = shippingContext;
  const {
    cartBillingAddress,
    cartShippingAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress
  } = useShippingAddressCartContext();
  const {
    isLoggedIn,
    setPageLoader: setPageLoader2,
    customerAddressList,
    defaultBillingAddress,
    defaultShippingAddress
  } = useShippingAddressAppContext();
  const { setBillingSelected, setIsBillingCustomerAddress } = useAddressWrapper();
  const cartHasBillingAddress = isCartAddressValid(cartBillingAddress);
  const cartHasShippingAddress = isCartAddressValid(cartShippingAddress);
  const setDefaultAddressesOnQuote = A$2(async () => {
    let saveBillingPromise = _emptyCallback;
    let saveShippingPromise = _emptyCallback;
    let isShippingGoingToSave = false;
    let isBillingGoingToSave = false;
    const sameStatus = defaultShippingAddress && defaultBillingAddress ? defaultShippingAddress === defaultBillingAddress : isBillingSame;
    if (defaultShippingAddress) {
      if (!cartHasShippingAddress) {
        isShippingGoingToSave = true;
        saveShippingPromise = _makePromise(setCustomerAddressAsShippingAddress, defaultShippingAddress, sameStatus);
      }
      if (sameStatus && !cartHasBillingAddress) {
        isBillingGoingToSave = defaultBillingAddress;
        saveBillingPromise = _makePromise(setCustomerAddressAsBillingAddress, defaultShippingAddress, sameStatus);
      }
    }
    if (defaultBillingAddress && !cartHasBillingAddress) {
      isBillingGoingToSave = defaultBillingAddress;
      saveBillingPromise = _makePromise(setCustomerAddressAsBillingAddress, defaultBillingAddress, sameStatus);
    }
    try {
      setPageLoader2(true);
      await saveBillingPromise();
      await saveShippingPromise();
      if (isBillingGoingToSave) {
        const formAddressToFill = prepareFormAddressFromCartAddress(customerAddressList[isBillingGoingToSave]);
        setFieldValue(BILLING_ADDR_FORM, formAddressToFill);
        setIsBillingCustomerAddress(true);
        setBillingSelected(isBillingGoingToSave);
        LocalStorage.saveCustomerBillingAddressId(isBillingGoingToSave);
      }
      if (isShippingGoingToSave) {
        const formAddressToFill = prepareFormAddressFromCartAddress(customerAddressList[defaultShippingAddress]);
        setFieldValue(SHIPPING_ADDR_FORM, formAddressToFill);
        setCustomerAddressSelected(true);
        setSelectedAddress(defaultShippingAddress);
        LocalStorage.saveCustomerShippingAddressId(defaultShippingAddress);
      }
      setFieldValue(billingSameAsShippingField, sameStatus);
      LocalStorage.saveBillingSameAsShipping(sameStatus);
      setPageLoader2(false);
    } catch (error) {
      console.error(error);
      setPageLoader2(false);
    }
  }, [
    setPageLoader2,
    setFieldValue,
    isBillingSame,
    setBillingSelected,
    setSelectedAddress,
    customerAddressList,
    defaultBillingAddress,
    cartHasBillingAddress,
    defaultShippingAddress,
    setCustomerAddressSelected,
    setIsBillingCustomerAddress,
    setCustomerAddressAsBillingAddress,
    setCustomerAddressAsShippingAddress
  ]);
  y$2(() => {
    if (!isLoggedIn || isDefaultAddressSaved || _isObjEmpty(customerAddressList)) {
      return;
    }
    if (!defaultBillingAddress && !defaultShippingAddress) {
      return;
    }
    if (cartHasBillingAddress && cartHasShippingAddress) {
      return;
    }
    setIsDefaultAddressSaved(true);
    setDefaultAddressesOnQuote();
  }, [
    isLoggedIn,
    customerAddressList,
    cartShippingAddress,
    defaultBillingAddress,
    isDefaultAddressSaved,
    cartHasBillingAddress,
    cartHasShippingAddress,
    defaultShippingAddress,
    setDefaultAddressesOnQuote
  ]);
}
const initialValues$2 = {
  company: "",
  firstname: "",
  lastname: "",
  street: [""],
  phone: "",
  zipcode: "",
  city: "",
  region: "",
  country: initialCountry
};
const requiredMessage$1 = __("%1 is required");
const initValidationSchema = {
  company: create$3().required(requiredMessage$1),
  firstname: create$3().required(requiredMessage$1),
  lastname: create$3().required(requiredMessage$1),
  street: create().test("street1Required", requiredMessage$1, (value) => !!lodash_get(value, 0)),
  phone: create$3().required(requiredMessage$1),
  zipcode: create$3().required(requiredMessage$1),
  city: create$3().required(requiredMessage$1),
  region: create$3().nullable(),
  country: create$3().required(requiredMessage$1),
  isSameAsShipping: create$4()
};
const addressIdInCache = _toString(LocalStorage.getCustomerShippingAddressId());
const initAddressId = addressIdInCache || CART_SHIPPING_ADDRESS;
function ShippingAddressFormikProvider({
  children,
  formikData
}) {
  const {
    setFieldValue,
    selectedRegion,
    selectedCountry,
    setFieldTouched
  } = formikData;
  const [isNewAddress, setIsNewAddress] = l$1(true);
  const [backupAddress, setBackupAddress] = l$1(null);
  const [forceFilledAddress, setForceFilledAddress] = l$1(false);
  const [selectedAddress, setSelectedAddress] = l$1(initAddressId);
  const [customerAddressSelected, setCustomerAddressSelected] = l$1(isValidCustomerAddressId(addressIdInCache));
  const validationSchema2 = useRegionValidation(selectedCountry, initValidationSchema);
  useFillDefaultAddresses(__spreadProps(__spreadValues({}, formikData), {
    setSelectedAddress,
    setCustomerAddressSelected
  }));
  const editModeContext = useFormEditMode();
  const {
    customerAddressList
  } = useShippingAddressAppContext();
  const {
    cartShippingAddress
  } = useShippingAddressCartContext();
  const {
    setFormToViewMode
  } = editModeContext;
  const regionData = useRegionData(selectedCountry, selectedRegion);
  const cartHasShippingAddress = isCartAddressValid(cartShippingAddress);
  const resetShippingAddressFormFields = A$2(() => {
    setFieldValue(SHIPPING_ADDR_FORM, __spreadValues({}, initialValues$2));
    setFieldTouched(SHIPPING_ADDR_FORM, {});
  }, [setFieldValue, setFieldTouched]);
  const setShippingAddressFormFields = A$2((addressToSet) => setFieldValue(SHIPPING_ADDR_FORM, __spreadValues(__spreadValues({}, initialValues$2), addressToSet)), [setFieldValue]);
  y$2(() => {
    if (!cartHasShippingAddress && forceFilledAddress === selectedAddress && customerHasAddress(customerAddressList)) {
      setFormToViewMode();
      return;
    }
    if (!forceFilledAddress && (cartHasShippingAddress || customerHasAddress(customerAddressList))) {
      setFormToViewMode();
    }
    if (!forceFilledAddress && isValidCustomerAddressId(selectedAddress)) {
      setIsNewAddress(false);
    }
    if (cartHasShippingAddress) {
      setForceFilledAddress(selectedAddress);
    }
  }, [selectedAddress, setFormToViewMode, forceFilledAddress, customerAddressList, cartHasShippingAddress]);
  let context = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, regionData), formikData), editModeContext), {
    formikData,
    isNewAddress,
    backupAddress,
    setIsNewAddress,
    selectedAddress,
    setBackupAddress,
    setSelectedAddress,
    customerAddressSelected,
    setCustomerAddressSelected,
    setShippingAddressFormFields,
    resetShippingAddressFormFields
  });
  const formSubmit2 = useSaveAddressAction(context);
  const handleKeyDown = useEnterActionInForm({
    formikData,
    validationSchema: validationSchema2,
    submitHandler: formSubmit2
  });
  const formSectionContext = useFormSection({
    formikData,
    initialValues: initialValues$2,
    validationSchema: validationSchema2,
    id: SHIPPING_ADDR_FORM,
    submitHandler: formSubmit2
  });
  context = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, context), formikData), formSectionContext), {
    formikData,
    formSubmit: formSubmit2,
    handleKeyDown
  });
  return /* @__PURE__ */ e$1(ShippingAddressFormikContext.Provider, {
    value: context,
    children: /* @__PURE__ */ e$1(Form, {
      id: SHIPPING_ADDR_FORM,
      children
    })
  });
}
ShippingAddressFormikProvider.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const ShippingAddressMemorized = React.memo(({
  formikData
}) => /* @__PURE__ */ e$1(ShippingAddressFormikProvider, {
  formikData,
  children: /* @__PURE__ */ e$1(Card, {
    children: /* @__PURE__ */ e$1(ToggleBox, {
      title: __("Shipping Information"),
      show: true,
      children: [/* @__PURE__ */ e$1(ShippingAddressForm, {}), /* @__PURE__ */ e$1(ShippingAddressView, {})]
    })
  })
}));
ShippingAddressMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function ShippingAddress() {
  const {
    values
  } = useFormikContext();
  const shippingFormikData = useShippingAddressMemorizer();
  const shippingOtherOptionSelected = lodash_get(values, shippingAddrOtherOptionField);
  const formikData = d$1(() => __spreadProps(__spreadValues({}, shippingFormikData), {
    shippingAddrOtherOptionField
  }), [shippingFormikData, shippingOtherOptionSelected]);
  return /* @__PURE__ */ e$1(ShippingAddressMemorized, {
    formikData
  });
}
({
  repeat: propTypes.exports.number.isRequired
});
function Loader() {
  return /* @__PURE__ */ e$1("div", {
    className: "z-20 flex-col items-center justify-center backdrop",
    children: [/* @__PURE__ */ e$1("div", {
      className: "w-12 h-12 mb-4 border-4 border-t-4 border-white rounded-full animate-spin",
      style: {
        borderTopColor: "#3498db"
      }
    }), /* @__PURE__ */ e$1("h2", {
      className: "text-xl font-semibold text-center text-white",
      children: __("Loading...")
    })]
  });
}
function useShippingMethodMemorizer() {
  const formikSectionData = useFormikMemorizer(SHIPPING_METHOD);
  const shippingFormikData = d$1(() => __spreadProps(__spreadValues({}, formikSectionData), {
    selectedMethod: formikSectionData.formSectionValues || {}
  }), [formikSectionData]);
  return shippingFormikData;
}
function useShippingMethodAppContext() {
  const { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage } = useAppContext();
  return { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage };
}
function useShippingMethodCartContext() {
  const { cart, setShippingMethod: setShippingMethod2 } = useCartContext();
  const {
    shipping_methods: methodList,
    selected_shipping_method: selectedMethod = {}
  } = cart || {};
  return {
    methodList,
    selectedMethod,
    setShippingMethod: setShippingMethod2,
    methodsAvailable: !_isObjEmpty(methodList)
  };
}
const ShippingMethodFormContext = React.createContext();
function useShippingMethodFormContext() {
  return F$2(ShippingMethodFormContext);
}
function ShippingMethodList() {
  const {
    fields,
    submitHandler,
    setFieldValue,
    selectedMethod,
    setFieldTouched
  } = useShippingMethodFormContext();
  const {
    methodsAvailable,
    methodList
  } = useShippingMethodCartContext();
  const {
    carrierCode: methodCarrierCode,
    methodCode: methodMethodCode
  } = selectedMethod || {};
  const selectedMethodId = `${methodCarrierCode}__${methodMethodCode}`;
  const handleShippingMethodSelection = async (event) => {
    const methodSelected = methodList[event.target.value];
    const {
      carrierCode,
      methodCode,
      id: methodId
    } = methodSelected;
    if (methodId === selectedMethodId) {
      return;
    }
    setFieldValue(SHIPPING_METHOD, {
      carrierCode,
      methodCode
    });
    setFieldTouched(fields.carrierCode, true);
    setFieldTouched(fields.methodCode, true);
    await submitHandler({
      carrierCode,
      methodCode
    });
  };
  if (!methodsAvailable) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "py-4",
    children: /* @__PURE__ */ e$1("ul", {
      children: _objToArray(methodList).map((method) => {
        const {
          id: methodId,
          carrierTitle,
          methodTitle,
          price
        } = method;
        const methodName = `${carrierTitle} (${methodTitle}): `;
        return /* @__PURE__ */ e$1("li", {
          className: "flex",
          children: [/* @__PURE__ */ e$1(RadioInput, {
            value: methodId,
            label: methodName,
            name: "shippingMethod",
            checked: selectedMethodId === methodId,
            onChange: handleShippingMethodSelection
          }), /* @__PURE__ */ e$1("span", {
            className: "pt-2 pl-3 font-semibold",
            children: __("Price: %1", price)
          })]
        }, methodId);
      })
    })
  });
}
function NoShippingMethodInfoBox() {
  const {
    methodsAvailable
  } = useShippingMethodCartContext();
  if (methodsAvailable) {
    return /* @__PURE__ */ e$1(d$2, {});
  }
  return /* @__PURE__ */ e$1("div", {
    className: "h-32 py-4 min-h-12",
    children: /* @__PURE__ */ e$1("div", {
      className: "flex items-center justify-center w-full h-full",
      children: /* @__PURE__ */ e$1("div", {
        children: __("No shipping methods available at the moment")
      })
    })
  });
}
const initialValues$1 = {
  methodCode: "",
  carrierCode: ""
};
const requiredMessage = __("Required");
const validationSchema = {
  methodCode: create$3().required(requiredMessage),
  carrierCode: create$3().required(requiredMessage)
};
function ShippingMethodFormManager({
  children,
  formikData
}) {
  const {
    setMessage,
    setPageLoader: setPageLoader2,
    setErrorMessage,
    setSuccessMessage
  } = useShippingMethodAppContext();
  const {
    selectedMethod,
    setShippingMethod: setShippingMethod2
  } = useShippingMethodCartContext();
  const {
    setFieldValue
  } = formikData;
  const formSubmit2 = async (shippingMethod) => {
    setMessage(false);
    if (!shippingMethod.carrierCode || !shippingMethod.methodCode) {
      return;
    }
    try {
      setPageLoader2(true);
      await setShippingMethod2(shippingMethod);
      setSuccessMessage(__("Shipping method updated successfully."));
      setPageLoader2(false);
    } catch (error) {
      console.error(error);
      setErrorMessage(__("Something went wrong while updating shipping method"));
      setPageLoader2(false);
    }
  };
  y$2(() => {
    if (_isObjEmpty(selectedMethod)) {
      setFieldValue(SHIPPING_METHOD, __spreadValues({}, initialValues$1));
    }
  }, [selectedMethod]);
  let context = useFormSection({
    formikData,
    initialValues: initialValues$1,
    validationSchema,
    id: SHIPPING_METHOD,
    submitHandler: formSubmit2
  });
  context = __spreadProps(__spreadValues(__spreadValues({}, context), formikData), {
    formikData
  });
  return /* @__PURE__ */ e$1(ShippingMethodFormContext.Provider, {
    value: context,
    children: /* @__PURE__ */ e$1(Form, {
      id: SHIPPING_METHOD,
      children
    })
  });
}
ShippingMethodFormManager.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const ShippingMethodMemorized = React.memo(({
  formikData
}) => {
  const {
    methodsAvailable
  } = useShippingMethodCartContext();
  return /* @__PURE__ */ e$1(ShippingMethodFormManager, {
    formikData,
    children: /* @__PURE__ */ e$1(Card, {
      classes: methodsAvailable ? "" : "opacity-75",
      children: /* @__PURE__ */ e$1(ToggleBox, {
        title: __("Shipping Methods"),
        show: true,
        children: [/* @__PURE__ */ e$1(NoShippingMethodInfoBox, {}), /* @__PURE__ */ e$1(ShippingMethodList, {})]
      })
    })
  });
});
ShippingMethodMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function ShippingMethodsForm() {
  const shippingFormikData = useShippingMethodMemorizer();
  return /* @__PURE__ */ e$1(ShippingMethodMemorized, {
    formikData: shippingFormikData
  });
}
function StickyRightSidebar({
  children
}) {
  const {
    message
  } = useAppContext();
  return /* @__PURE__ */ e$1("div", {
    className: "sticky self-start w-full lg:w-2/5",
    style: {
      top: message ? "100px" : "0px"
    },
    children: /* @__PURE__ */ e$1("div", {
      className: "space-y-2",
      children
    })
  });
}
StickyRightSidebar.propTypes = {
  children: propTypes.exports.node.isRequired
};
function useAgreementAppContext() {
  const { checkoutAgreements, changeCheckoutAgreement } = useAppContext();
  return { checkoutAgreements, changeCheckoutAgreement };
}
const CheckoutAgreementsModalContext = React.createContext();
function useAgreementModalContext() {
  return F$2(CheckoutAgreementsModalContext);
}
const CheckoutAgreementsFormikContext = React.createContext();
function useAgreementFormikContext() {
  return F$2(CheckoutAgreementsFormikContext);
}
function useCheckoutAgreementsMemorizer() {
  const formikSectionData = useFormikMemorizer(CHECKOUT_AGREEMENTS_FORM);
  const agreementsFormikData = d$1(() => __spreadProps(__spreadValues({}, formikSectionData), {
    agreementsValues: formikSectionData.formSectionValues
  }), [formikSectionData]);
  return agreementsFormikData;
}
function getFormikFieldNameById(agreementId) {
  return `isAgreement${agreementId}Agreed`;
}
function prepareAgreementsFormData(checkoutAgreements) {
  return _objToArray(checkoutAgreements).reduce((accumulator, agreement) => {
    const { isAutomatic, id: id2 } = agreement;
    accumulator[getFormikFieldNameById(id2)] = isAutomatic;
    return accumulator;
  }, {});
}
function updateAgreementValidationSchema(agreementsFormData, validationSchema2) {
  const requiredMessage2 = __("Please agree with the terms & conditions");
  _keys(agreementsFormData).forEach((agreementFormikId) => {
    lodash_set(validationSchema2, agreementFormikId, create$4().oneOf([true], requiredMessage2));
  });
  return validationSchema2;
}
function CheckoutAgreementsForm() {
  const {
    checkoutAgreements
  } = useAgreementAppContext();
  const {
    setActiveModalId
  } = useAgreementModalContext();
  const {
    fields,
    agreementsValues
  } = useAgreementFormikContext();
  return _objToArray(checkoutAgreements).map((agreement, index2) => {
    const {
      id: agreementId,
      isAutomatic,
      label
    } = agreement;
    const fieldName = getFormikFieldNameById(agreement.id);
    const isAgreed = !!lodash_get(agreementsValues, fieldName);
    if (!isAutomatic) {
      return /* @__PURE__ */ e$1("div", {
        className: "flex flex-wrap mt-3",
        children: [/* @__PURE__ */ e$1("div", {
          children: fields[fieldName] && /* @__PURE__ */ e$1(Checkbox, {
            required: true,
            label,
            isChecked: isAgreed,
            name: fields[fieldName]
          })
        }), /* @__PURE__ */ e$1("div", {
          className: "mt-3 ml-2 cursor-pointer",
          children: /* @__PURE__ */ e$1(InformationCircleIcon, {
            className: "w-4 h-4 text-primary-600",
            onClick: () => setActiveModalId(agreementId)
          })
        })]
      }, agreementId);
    }
    return /* @__PURE__ */ e$1("div", {
      className: "flex flex-wrap mt-2",
      children: [/* @__PURE__ */ e$1("div", {
        children: /* @__PURE__ */ e$1("div", {
          role: "button",
          tabIndex: index2,
          onClick: () => setActiveModalId(agreementId),
          className: "mt-3 ml-6 text-sm cursor-pointer",
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              setActiveModalId(agreementId);
            }
          },
          children: label
        })
      }), /* @__PURE__ */ e$1("div", {
        className: "mt-4 ml-2 cursor-pointer",
        children: /* @__PURE__ */ e$1(InformationCircleIcon, {
          className: "w-4 h-4 text-primary-600",
          onClick: () => setActiveModalId(agreementId)
        })
      })]
    }, agreementId);
  });
}
function CheckoutAgreementModal() {
  const {
    checkoutAgreements
  } = useAgreementAppContext();
  const {
    activeModalId,
    setActiveModalId
  } = useAgreementModalContext();
  const {
    setFieldValue
  } = useAgreementFormikContext();
  const modalAgreement = lodash_get(checkoutAgreements, activeModalId);
  const agreementTitle = lodash_get(modalAgreement, "name");
  const isContentHtml = lodash_get(modalAgreement, "isHtml");
  const agreementContent = lodash_get(modalAgreement, "content");
  const handleAgreeButtonClick = () => {
    const fieldName = `${CHECKOUT_AGREEMENTS_FORM}.${getFormikFieldNameById(activeModalId)}`;
    setFieldValue(fieldName, true);
    setActiveModalId(false);
  };
  return /* @__PURE__ */ e$1("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "modal-title",
    className: "fixed inset-0 z-10 overflow-y-auto",
    children: /* @__PURE__ */ e$1("div", {
      className: "flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
      children: [/* @__PURE__ */ e$1("div", {
        className: "fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75",
        "aria-hidden": "true"
      }), /* @__PURE__ */ e$1("span", {
        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
        "aria-hidden": "true",
        children: "\u200B"
      }), /* @__PURE__ */ e$1("div", {
        style: {
          maxWidth: "80%"
        },
        className: "inline-block text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl agreement-box sm:my-8 sm:align-middle sm:w-full",
        children: [/* @__PURE__ */ e$1("div", {
          className: "px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4",
          children: /* @__PURE__ */ e$1("div", {
            className: "sm:flex sm:items-start",
            children: [/* @__PURE__ */ e$1("div", {
              className: "flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10",
              children: /* @__PURE__ */ e$1(ClipboardCheckIcon, {
                className: "w-6 h-6 text-green-600"
              })
            }), /* @__PURE__ */ e$1("div", {
              className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
              children: [/* @__PURE__ */ e$1("h3", {
                className: "text-lg font-medium leading-6 text-gray-900",
                id: "modal-title",
                children: agreementTitle
              }), /* @__PURE__ */ e$1("div", {
                className: "mt-2 overflow-y-auto lg:h-96",
                children: isContentHtml ? /* @__PURE__ */ e$1("div", {
                  dangerouslySetInnerHTML: {
                    __html: agreementContent
                  }
                }) : /* @__PURE__ */ e$1("p", {
                  className: "text-sm text-gray-500",
                  children: agreementContent
                })
              })]
            })]
          })
        }), /* @__PURE__ */ e$1("div", {
          className: "px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse",
          children: [/* @__PURE__ */ e$1("button", {
            type: "button",
            className: "inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",
            onClick: () => setActiveModalId(false),
            children: __("Close")
          }), /* @__PURE__ */ e$1("button", {
            type: "button",
            className: "inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
            onClick: handleAgreeButtonClick,
            children: __("I agree")
          })]
        })]
      })]
    })
  });
}
function CheckoutAgreementModalWrapper({
  children
}) {
  const modalRef = s();
  const [activeModalId, setActiveModalId] = l$1(false);
  y$2(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Esc" || event.key === "Escape") {
        setActiveModalId(false);
      }
    };
    const mouseDownHandler = (event) => {
      const agreementBoxDom = modalRef.current.querySelector(".agreement-box");
      if (!agreementBoxDom.contains(event.target)) {
        setActiveModalId(false);
      }
    };
    if (activeModalId) {
      document.addEventListener("keydown", keyDownHandler);
      document.addEventListener("mousedown", mouseDownHandler);
    }
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, [activeModalId]);
  const context = {
    activeModalId,
    setActiveModalId
  };
  return /* @__PURE__ */ e$1(CheckoutAgreementsModalContext.Provider, {
    value: context,
    children: [children, /* @__PURE__ */ e$1("div", {
      ref: modalRef,
      children: activeModalId && /* @__PURE__ */ e$1(CheckoutAgreementModal, {})
    })]
  });
}
CheckoutAgreementModalWrapper.propTypes = {
  children: propTypes.exports.node.isRequired
};
let initialValues = {};
function CheckoutAgreementFormikProvider({
  children,
  formikData
}) {
  const [validationSchema2, setValidationSchema] = l$1({});
  const [isFormPopulated, setIsFormPopulated] = l$1(false);
  const {
    checkoutAgreements
  } = useAgreementAppContext();
  const {
    setFieldValue
  } = formikData;
  y$2(() => {
    if (!isFormPopulated && !_isObjEmpty(checkoutAgreements)) {
      const agreementsFormData = prepareAgreementsFormData(checkoutAgreements);
      initialValues = agreementsFormData;
      setFieldValue(CHECKOUT_AGREEMENTS_FORM, agreementsFormData);
      setValidationSchema(updateAgreementValidationSchema(agreementsFormData, validationSchema2));
      setIsFormPopulated(true);
    }
  }, [checkoutAgreements, setFieldValue, isFormPopulated, validationSchema2]);
  const formContext = useFormSection({
    formikData,
    initialValues,
    validationSchema: validationSchema2,
    submitHandler: _emptyFunc(),
    id: CHECKOUT_AGREEMENTS_FORM
  });
  const context = __spreadProps(__spreadValues(__spreadValues({}, formContext), formikData), {
    formikData
  });
  return /* @__PURE__ */ e$1(CheckoutAgreementsFormikContext.Provider, {
    value: context,
    children: /* @__PURE__ */ e$1(Form, {
      id: CHECKOUT_AGREEMENTS_FORM,
      children
    })
  });
}
CheckoutAgreementFormikProvider.propTypes = {
  children: propTypes.exports.node.isRequired,
  formikData: formikDataShape.isRequired
};
const CheckoutAgreementsMemorized = React.memo(({
  formikData
}) => {
  const {
    checkoutAgreements
  } = useAgreementAppContext();
  return /* @__PURE__ */ e$1(CheckoutAgreementFormikProvider, {
    formikData,
    children: _isObjEmpty(checkoutAgreements) ? /* @__PURE__ */ e$1(d$2, {}) : /* @__PURE__ */ e$1(CheckoutAgreementModalWrapper, {
      children: /* @__PURE__ */ e$1(Card, {
        children: /* @__PURE__ */ e$1(ToggleBox, {
          show: true,
          title: __("Checkout Agreements"),
          children: /* @__PURE__ */ e$1(CheckoutAgreementsForm, {})
        })
      })
    })
  });
});
CheckoutAgreementsMemorized.propTypes = {
  formikData: formikDataShape.isRequired
};
function CheckoutAgreements() {
  const agreementsFormikData = useCheckoutAgreementsMemorizer();
  return /* @__PURE__ */ e$1(CheckoutAgreementsMemorized, {
    formikData: agreementsFormikData
  });
}
function hasLoginErrors(errors) {
  const loginErrors = lodash_get(errors, LOGIN_FORM);
  return !_isObjEmpty(loginErrors);
}
function hasShippingAddressErrors(errors) {
  const shippingAddressErrors = lodash_get(errors, SHIPPING_ADDR_FORM);
  return !_isObjEmpty(shippingAddressErrors);
}
function hasBillingAddressErrors(errors, values, isVirtualCart) {
  const billingAddressErrors = lodash_get(errors, BILLING_ADDR_FORM);
  const isBillingSameAsShipping = lodash_get(values, `${BILLING_ADDR_FORM}.isSameAsShipping`);
  if (isVirtualCart || !isBillingSameAsShipping) {
    return !_isObjEmpty(billingAddressErrors);
  }
  return false;
}
function hasShippingMethodErrors(errors) {
  const shippingMethodErrors = lodash_get(errors, SHIPPING_METHOD);
  return !_isObjEmpty(shippingMethodErrors);
}
function hasPaymentMethodErrors(errors) {
  const paymentMethodErrors = lodash_get(errors, PAYMENT_METHOD_FORM);
  return !_isObjEmpty(paymentMethodErrors);
}
function hasTermsAndConditionsAgreed(errors) {
  const agreementErrors = lodash_get(errors, CHECKOUT_AGREEMENTS_FORM);
  return !_isObjEmpty(agreementErrors);
}
function isAddressSame(address1, address2) {
  const {
    city: city1,
    phone: phone1,
    street: street1,
    region: region1,
    company: company1,
    zipcode: zipCode1,
    country: country1,
    lastname: lastName1,
    firstname: firstName1
  } = address1;
  const {
    city: city2,
    phone: phone2,
    street: street2,
    region: region2,
    company: company2,
    zipcode: zipCode2,
    country: country2,
    lastname: lastName2,
    firstname: firstName2
  } = address2;
  return city1 === city2 && phone1 === phone2 && region1 === region2 && country1 === country2 && company1 === company2 && zipCode1 === zipCode2 && lastName1 === lastName2 && firstName1 === firstName2 && (street1 || []).join() === (street2 || []).join();
}
function ShippingMethodRequiredException(message) {
  this.message = message;
}
function usePlaceOrderAppContext() {
  const { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage } = useAppContext();
  return { setMessage, setPageLoader: setPageLoader2, setSuccessMessage, setErrorMessage };
}
function usePlaceOrder() {
  const { setErrorMessage } = usePlaceOrderAppContext();
  const { submitHandler, checkoutFormValidationSchema } = useCheckoutFormContext();
  return async (values) => {
    try {
      const isValid = await checkoutFormValidationSchema.validate(values);
      if (isValid) {
        await submitHandler(values);
      }
      return isValid;
    } catch (error) {
      console.error(error);
      setErrorMessage(__("Your checkout details are not valid. Please verify your details."));
      throw error;
    }
  };
}
function usePlaceOrderCartContext() {
  const {
    cart,
    setShippingMethod: setShippingMethod2,
    setEmailOnGuestCart: setEmailOnGuestCart2,
    setCartBillingAddress: setCartBillingAddress2,
    addCartShippingAddress
  } = useCartContext();
  const email = lodash_get(cart, "email");
  const isVirtualCart = lodash_get(cart, "isVirtualCart");
  const billingAddress = lodash_get(cart, "billing_address");
  const shippingAddress = lodash_get(cart, "shipping_address");
  return {
    email,
    isVirtualCart,
    billingAddress,
    shippingAddress,
    setShippingMethod: setShippingMethod2,
    setEmailOnGuestCart: setEmailOnGuestCart2,
    setCartBillingAddress: setCartBillingAddress2,
    addCartShippingAddress,
    hasBillingAddress: !!isCartAddressValid(billingAddress),
    hasShippingAddress: !!isCartAddressValid(shippingAddress)
  };
}
function useAddressSave() {
  const { setErrorMessage } = usePlaceOrderAppContext();
  const {
    setShippingMethod: setShippingMethod2,
    setCartBillingAddress: setCartBillingAddress2,
    addCartShippingAddress,
    billingAddress: cartBillingAddress,
    shippingAddress: cartShippingAddress,
    hasBillingAddress: hasCartBillingAddress,
    hasShippingAddress: hasCartShippingAddress
  } = usePlaceOrderCartContext();
  return async (values) => {
    try {
      let needToUpdateShippingMethod = false;
      let setCartBillingAddressPromise = _emptyFunc();
      let setCartShippingAddressPromise = _emptyFunc();
      const billingAddress = lodash_get(values, BILLING_ADDR_FORM);
      const shippingAddress = lodash_get(values, SHIPPING_ADDR_FORM);
      const isBillingSame = LocalStorage.getBillingSameAsShippingInfo();
      const billingAddrSelected = LocalStorage.getCustomerBillingAddressId();
      const shippingAddrSelected = LocalStorage.getCustomerShippingAddressId();
      if (!isBillingSame && (!hasCartBillingAddress || !isValidCustomerAddressId(billingAddrSelected) && !isAddressSame(cartBillingAddress, billingAddress))) {
        setCartBillingAddressPromise = _makePromise(setCartBillingAddress2, billingAddress);
      }
      if (!hasCartShippingAddress || isValidCustomerAddressId(shippingAddrSelected) && !isAddressSame(cartShippingAddress, shippingAddress)) {
        needToUpdateShippingMethod = true;
        setCartShippingAddressPromise = _makePromise(addCartShippingAddress, shippingAddress, isBillingSame);
        if (isBillingSame) {
          setCartBillingAddressPromise = _makePromise(setCartBillingAddress2, billingAddress);
        }
      }
      await setCartBillingAddressPromise();
      const cartInfo = await setCartShippingAddressPromise();
      if (needToUpdateShippingMethod) {
        const selectedShippingMethod = lodash_get(values, SHIPPING_METHOD);
        const { carrierCode, methodCode } = selectedShippingMethod;
        const newShippingMethods = lodash_get(cartInfo, "shipping_methods");
        if (!lodash_get(newShippingMethods, `${carrierCode}__${methodCode}`)) {
          throw new ShippingMethodRequiredException("Selected shipping method is not available due to the shipping address change. Please select from the available methods.");
        }
        if (carrierCode && methodCode) {
          await setShippingMethod2(selectedShippingMethod);
        }
      }
      LocalStorage.saveCustomerAddressInfo("", isBillingSame);
    } catch (error) {
      console.error(error);
      if (error instanceof ShippingMethodRequiredException) {
        setErrorMessage(__(error.message));
      } else {
        setErrorMessage(__("Address update failed. Please try again."));
      }
    }
  };
}
const emailField = `${LOGIN_FORM}.email`;
function useEmailInfoSave() {
  const { setErrorMessage } = usePlaceOrderAppContext();
  const { email: cartEmail, setEmailOnGuestCart: setEmailOnGuestCart2 } = usePlaceOrderCartContext();
  return async (values) => {
    try {
      const email = lodash_get(values, emailField);
      if (!cartEmail || cartEmail !== email) {
        await setEmailOnGuestCart2(email);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(__("Email address update failed. Please try again."));
    }
  };
}
const customerWantsToSignInField = `${LOGIN_FORM}.customerWantsToSignIn`;
function PlaceOrder() {
  const {
    values,
    errors
  } = useFormikContext();
  const saveEmailAddressInfo = useEmailInfoSave();
  const saveBillingShippingAddress = useAddressSave();
  const validateThenPlaceOrder = usePlaceOrder();
  const {
    isVirtualCart
  } = usePlaceOrderCartContext();
  const {
    setMessage,
    setErrorMessage,
    setPageLoader: setPageLoader2
  } = usePlaceOrderAppContext();
  const handlePerformPlaceOrder = async () => {
    setMessage(false);
    if (hasLoginErrors(errors)) {
      const customerWantsToSignIn = lodash_get(values, customerWantsToSignInField);
      setErrorMessage(__(customerWantsToSignIn ? "Please provide your login details." : "Please provide your email address."));
      focusOnFormErrorElement(LOGIN_FORM, errors);
      return;
    }
    if (hasShippingAddressErrors(errors)) {
      setErrorMessage(__("Please provide your shipping address information."));
      focusOnFormErrorElement(SHIPPING_ADDR_FORM, errors);
      return;
    }
    if (hasBillingAddressErrors(errors, values, isVirtualCart)) {
      setErrorMessage(__("Please provide your billing address information."));
      focusOnFormErrorElement(BILLING_ADDR_FORM, errors);
      return;
    }
    if (hasShippingMethodErrors(errors)) {
      setErrorMessage(__("Please select your shipping method."));
      scrollToElement(SHIPPING_METHOD);
      return;
    }
    if (hasPaymentMethodErrors(errors)) {
      setErrorMessage(__("Please select your payment method."));
      scrollToElement(PAYMENT_METHOD_FORM);
      return;
    }
    if (hasTermsAndConditionsAgreed(errors)) {
      setErrorMessage(__("Please agree with the terms & conditions"));
      scrollToElement(CHECKOUT_AGREEMENTS_FORM);
      return;
    }
    try {
      setPageLoader2(true);
      await saveEmailAddressInfo(values);
      await saveBillingShippingAddress(values);
      await validateThenPlaceOrder(values);
      setPageLoader2(false);
    } catch (error) {
      console.error(error);
      setPageLoader2(false);
    }
  };
  return /* @__PURE__ */ e$1("div", {
    className: "flex items-center justify-center py-4",
    children: /* @__PURE__ */ e$1(Button, {
      variant: "primary",
      size: "lg",
      click: handlePerformPlaceOrder,
      children: __("Place Order")
    })
  });
}
function useCheckoutFormAppContext() {
  const { pageLoader, setPageLoader: setPageLoader2, appDispatch, storeAggregatedAppStates } = useAppContext();
  return {
    pageLoader,
    appDispatch,
    setPageLoader: setPageLoader2,
    storeAggregatedAppStates
  };
}
function useCheckoutFormCartContext() {
  const { order, cart, storeAggregatedCartStates } = useCartContext();
  const orderId = lodash_get(order, "order_number");
  const isVirtualCart = lodash_get(cart, "isVirtualCart");
  return {
    orderId,
    isVirtualCart,
    storeAggregatedCartStates
  };
}
function Index() {
  const {
    pageLoader
  } = useCheckoutFormAppContext();
  const {
    isVirtualCart
  } = useCheckoutFormCartContext();
  return /* @__PURE__ */ e$1(d$2, {
    children: [/* @__PURE__ */ e$1(Message, {}), /* @__PURE__ */ e$1("div", {
      className: "flex justify-center",
      children: /* @__PURE__ */ e$1("div", {
        className: "container",
        children: [/* @__PURE__ */ e$1("div", {
          className: "flex flex-col my-6 space-y-2 md:flex-row md:space-y-0",
          children: [/* @__PURE__ */ e$1("div", {
            className: "w-full lg:w-3/5 md:mr-2",
            children: /* @__PURE__ */ e$1("div", {
              className: "w-full space-y-2 md:max-w-md xl:max-w-full",
              children: [/* @__PURE__ */ e$1(Login, {}), /* @__PURE__ */ e$1(AddressWrapper, {
                children: [!isVirtualCart && /* @__PURE__ */ e$1(d$2, {
                  children: [/* @__PURE__ */ e$1(ShippingAddress, {}), /* @__PURE__ */ e$1(ShippingMethodsForm, {})]
                }), /* @__PURE__ */ e$1(BillingAddress, {}), /* @__PURE__ */ e$1(PaymentMethod, {})]
              })]
            })
          }), /* @__PURE__ */ e$1(StickyRightSidebar, {
            children: [/* @__PURE__ */ e$1(CartItemsForm, {}), /* @__PURE__ */ e$1(Totals, {}), /* @__PURE__ */ e$1(CheckoutAgreements, {}), /* @__PURE__ */ e$1(PlaceOrder, {})]
          })]
        }), pageLoader && /* @__PURE__ */ e$1(Loader, {})]
      })
    })]
  });
}
function CheckoutFormWrapper({
  initialData,
  children
}) {
  const [initDataFilled, setInitDataFilled] = l$1(false);
  const {
    values,
    setFieldValue
  } = useFormikContext();
  const loginFormValues = lodash_get(values, LOGIN_FORM, {});
  const billingAddressValues = lodash_get(values, BILLING_ADDR_FORM, {});
  const shippingAddressValues = lodash_get(values, SHIPPING_ADDR_FORM, {});
  y$2(() => {
    if (!initialData || initDataFilled) {
      return _emptyFunc();
    }
    const {
      cart
    } = initialData;
    const email = lodash_get(cart, "email", "");
    const billingAddress = lodash_get(cart, "billing_address", {});
    const shippingAddress = lodash_get(cart, "shipping_address", {});
    const paymentMethod = lodash_get(cart, "selected_payment_method") || {};
    const shippingMethod = lodash_get(cart, "selected_shipping_method") || {};
    const timer = setTimeout(async () => {
      await setFieldValue(LOGIN_FORM, __spreadProps(__spreadValues({}, loginFormValues), {
        email
      }));
      await setFieldValue(SHIPPING_ADDR_FORM, __spreadValues(__spreadValues({}, shippingAddressValues), shippingAddress));
      await setFieldValue(SHIPPING_METHOD, {
        methodCode: shippingMethod.methodCode || "",
        carrierCode: shippingMethod.carrierCode || ""
      });
      await setFieldValue(BILLING_ADDR_FORM, __spreadValues(__spreadValues({}, billingAddressValues), billingAddress));
      await setFieldValue(`${PAYMENT_METHOD_FORM}.code`, paymentMethod.code);
      setInitDataFilled(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [initialData, setFieldValue, initDataFilled, loginFormValues, billingAddressValues, shippingAddressValues]);
  return /* @__PURE__ */ e$1(d$2, {
    children
  });
}
CheckoutFormWrapper.propTypes = {
  children: propTypes.exports.node.isRequired,
  initialData: propTypes.exports.oneOfType([propTypes.exports.object, propTypes.exports.bool]).isRequired
};
const formatMapper = (currencySymbol2) => ({ type, value }) => {
  switch (type) {
    case "currency":
      return currencySymbol2 || value;
    case "minusSign":
      return "- ";
    case "plusSign":
      return "+ ";
    default:
      return value;
  }
};
const formatPrice = (value, showSign) => {
  const { code: rootCurrencyCode, symbol: rootCurrencySymbol } = RootElement.getCurrency();
  const envCurrencyCode = env.currencyCode;
  const envCurrencySymbol = env.currencySymbol;
  const currencyCode2 = envCurrencyCode || rootCurrencyCode;
  const currencySymbol2 = envCurrencySymbol || rootCurrencySymbol;
  const formatter = new Intl.NumberFormat(document.documentElement.lang, {
    style: "currency",
    currency: currencyCode2,
    signDisplay: showSign ? "always" : "auto"
  });
  if (typeof Intl.NumberFormat.prototype.formatToParts === "function") {
    return formatter.formatToParts(value).map(formatMapper(currencySymbol2)).reduce((string2, part) => string2 + part);
  }
  return formatter.format(value);
};
function modifySelectedShippingMethod(addressList) {
  const selectedMethod = lodash_get(addressList, "0.selected_shipping_method");
  if (!selectedMethod) {
    return {};
  }
  const {
    amount: { value },
    method_code: methodCode,
    carrier_code: carrierCode
  } = selectedMethod;
  const methodId = `${carrierCode}__${methodCode}`;
  return {
    id: methodId,
    carrierCode,
    methodCode,
    amount: value,
    price: formatPrice(value)
  };
}
function modifyShippingMethods(addressList) {
  const shippingMethods = lodash_get(addressList, "0.available_shipping_methods", []);
  if (!shippingMethods || !shippingMethods.length) {
    return {};
  }
  return shippingMethods.reduce((accumulator, method) => {
    const {
      method_code: methodCode,
      carrier_code: carrierCode,
      method_title: methodTitle,
      carrier_title: carrierTitle,
      price_incl_tax: { value: amount }
    } = method;
    const methodId = `${carrierCode}__${methodCode}`;
    accumulator[methodId] = {
      id: methodId,
      carrierCode,
      carrierTitle,
      methodCode,
      methodTitle,
      price: formatPrice(amount),
      amount
    };
    return accumulator;
  }, {});
}
function modifyShippingAddressList(addressList) {
  const shippingAddress = lodash_get(addressList, "0");
  if (!shippingAddress) {
    return {};
  }
  const {
    city,
    street,
    company,
    lastname,
    firstname,
    telephone: phone,
    postcode: zipcode,
    region: { code: regionCode },
    country: { code: countryCode }
  } = shippingAddress;
  return {
    city,
    phone,
    street,
    company,
    zipcode,
    lastname,
    firstname,
    region: regionCode,
    country: countryCode,
    fullName: prepareFullName(shippingAddress)
  };
}
function modifyBillingAddressData(billingAddress) {
  const {
    company = "",
    firstname = "",
    lastname = "",
    street = [],
    telephone: phone = "",
    postcode: zipcode = "",
    city = "",
    country: { code: countryCode = "" } = {},
    region: { code: regionCode = "" } = {}
  } = billingAddress;
  return {
    id: LocalStorage.getCustomerBillingAddressId(),
    company,
    firstname,
    lastname,
    fullName: prepareFullName(billingAddress),
    street,
    phone,
    zipcode,
    city,
    region: regionCode,
    country: countryCode,
    isSameAsShipping: LocalStorage.getBillingSameAsShippingInfo()
  };
}
function modifyCartItemsData(cartItems) {
  return cartItems.reduce((accumulator, item) => {
    const { id: id2, quantity, prices, product, product_type: productType } = item;
    const priceAmount = lodash_get(prices, "price.value");
    const price = formatPrice(priceAmount);
    const rowTotalAmount = lodash_get(prices, "row_total.value");
    const rowTotal = formatPrice(rowTotalAmount);
    const productId = lodash_get(product, "id");
    const productSku = lodash_get(product, "sku");
    const productName = lodash_get(product, "name");
    const productUrl = lodash_get(product, "url_key");
    const productSmallImgUrl = lodash_get(product, "small_image.url");
    const selectedConfigOptions = (lodash_get(item, "configurable_options") || []).map((configOption) => {
      const {
        id: optionId,
        value_label: value,
        option_label: option
      } = configOption;
      return {
        optionId,
        value,
        option,
        label: `${option}: ${value}`
      };
    });
    accumulator[id2] = {
      id: id2,
      productType,
      quantity,
      isConfigurable: productType === "configurable",
      priceAmount,
      price,
      rowTotal,
      rowTotalAmount,
      productId,
      productSku,
      productName,
      productUrl,
      productSmallImgUrl,
      selectedConfigOptions
    };
    return accumulator;
  }, {});
}
function modifyCartPricesData(cartPrices) {
  const grandTotal = lodash_get(cartPrices, "grand_total", {});
  const subTotal = lodash_get(cartPrices, "subtotal_including_tax", {});
  const discountPrices = lodash_get(cartPrices, "discounts", []) || [];
  const discounts = discountPrices.map((discount) => ({
    label: discount.label,
    price: formatPrice(-discount.amount.value, true),
    amount: discount.amount.value
  }));
  const grandTotalAmount = lodash_get(grandTotal, "value");
  const subTotalAmount = lodash_get(subTotal, "value");
  return {
    discounts,
    hasDiscounts: !_isArrayEmpty(discountPrices),
    subTotal: formatPrice(subTotalAmount),
    subTotalAmount,
    grandTotal: formatPrice(grandTotalAmount),
    grandTotalAmount
  };
}
function modifyPaymentMethodsData(paymentMethods) {
  return paymentMethods.reduce((accumulator, method) => {
    accumulator[method.code] = method;
    return accumulator;
  }, {});
}
function fetchGuestCartModifier(result, dataMethod) {
  const cartData = lodash_get(result, `data.${dataMethod || "cart"}`, {});
  const shippingAddresses = lodash_get(cartData, "shipping_addresses", []);
  const billingAddress = lodash_get(cartData, "billing_address", {}) || {};
  const cartItems = lodash_get(cartData, "items", []);
  const cartPrices = lodash_get(cartData, "prices", {});
  const paymentMethods = lodash_get(cartData, "available_payment_methods", []);
  const selectedPaymentMethod = lodash_get(cartData, "selected_payment_method", {});
  return {
    id: cartData.id,
    email: cartData.email,
    items: modifyCartItemsData(cartItems),
    billing_address: modifyBillingAddressData(billingAddress),
    shipping_address: modifyShippingAddressList(shippingAddresses),
    shipping_methods: modifyShippingMethods(shippingAddresses),
    selected_shipping_method: modifySelectedShippingMethod(shippingAddresses),
    prices: modifyCartPricesData(cartPrices),
    available_payment_methods: modifyPaymentMethodsData(paymentMethods),
    selected_payment_method: selectedPaymentMethod
  };
}
function modifyMergeCarts(result) {
  if (result.errors) {
    return {
      error: true,
      message: lodash_get(result, "errors.0.message")
    };
  }
  return fetchGuestCartModifier(result, "mergeCarts");
}
function GraphQLResponseException(response) {
  const errors = lodash_get(response, "errors") || [];
  if (errors === true) {
    this.message = lodash_get(response, "message") || "";
  } else {
    this.message = errors.map((error) => error.message).join("; ");
  }
}
function responseContainErrors(response) {
  const errors = lodash_get(response, "errors", []);
  return !_isArrayEmpty(errors);
}
function responseDataEmpty(response) {
  const data = lodash_get(response, "data");
  const responseDataName = lodash_get(_keys(data), "0");
  const responseData = lodash_get(data, responseDataName);
  return !responseData;
}
const SET_PAGE_LOADER = "SET_PAGE_LOADER";
const SET_PAGE_MESSAGE = "SET_PAGE_MESSAGE";
const RESPONSE_TEXT = "text";
const RESPONSE_JSON = "json";
const storeCode = env.storeCode || RootElement.getStoreCode();
function sendRequest(dispatch, queryParams, relativeUrl, responseType = "json", additionalHeaders = {}) {
  const headers = __spreadValues({
    "Content-Type": "application/json",
    Store: storeCode
  }, additionalHeaders);
  const token = LocalStorage.getCustomerToken();
  const url = `/backend/${relativeUrl || "graphql"}`;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(__spreadValues({}, queryParams || {}))
  }).then((response) => {
    if (response.ok && responseType === RESPONSE_TEXT) {
      return response.text();
    }
    return response.json();
  }).then((response) => {
    if (!responseContainErrors(response) || !responseDataEmpty(response)) {
      return response;
    }
    const exception = new GraphQLResponseException(response);
    dispatch({
      type: SET_PAGE_MESSAGE,
      payload: { type: "error", message: exception.message }
    });
    throw exception;
  }).catch((exception) => {
    console.error(exception);
    throw exception;
  });
}
const cartBillingAddrInfo = `
billing_address {
  city
  country {
    code
    label
  }
  region {
    code
    label
  }
  company
  firstname
  lastname
  postcode
  region {
    code
    label
  }
  street
  telephone
}
`;
const cartItemsInfo = `
items {
  id
  product_type
  quantity
  prices {
    price {
      value
      currency
    },
    row_total {
      value
      currency
    }
  }
  product {
    id
    name
    sku
    small_image {
      label
      url
    }
    url_key
  }
  ...on ConfigurableCartItem {
    configurable_options {
      id
      option_label
      value_label
    }
  }
}`;
const cartPaymentMethodsInfo = `
  available_payment_methods {
    code
    title
  }
  selected_payment_method {
    code
    title
  }
`;
const cartPriceInfo = `
prices {
  grand_total {
    value
    currency
  }
  subtotal_including_tax {
    value
    currency
  }
  discounts {
    label
    amount {
      currency
      value
    }
  }
}
`;
const cartShippingMethods = `
available_shipping_methods {
  carrier_code
  carrier_title
  method_code
  method_title
  price_incl_tax {
    currency
    value
  }
}
selected_shipping_method {
  carrier_code
  method_code
  amount {
    currency
    value
  }
}`;
const cartShippingAddrInfo = `
shipping_addresses {
  city
  country {
    code
    label
  }
  region {
    code
    label
  }
  company
  firstname
  lastname
  postcode
  region {
    code
    label
  }
  street
  telephone
  ${cartShippingMethods}
}`;
const CART_DATA_FRAGMENT = `
  id
  email
  ${cartItemsInfo}
  ${cartBillingAddrInfo}
  ${cartShippingAddrInfo}
  ${cartPriceInfo}
  ${cartPaymentMethodsInfo}
`;
const MERGE_CARTS_MUTATION = `
mutation mergeCartsMutation($sourceCartId: String!, $destinationCartId: String!) {
  mergeCarts(source_cart_id: $sourceCartId, destination_cart_id: $destinationCartId) {
    ${CART_DATA_FRAGMENT}
  }
}`;
async function mergeCarts(dispatch, cartIds) {
  return modifyMergeCarts(await sendRequest(dispatch, {
    query: MERGE_CARTS_MUTATION,
    variables: cartIds
  }));
}
function modifyPlaceOrder(result) {
  return lodash_get(result, "data.placeOrder.order", {});
}
const PLACE_ORDER_MUTATION = `
mutation placeOrderMutation($cartId: String!) {
  placeOrder(input: { cart_id: $cartId}){
    order {
      order_number
    }
  }
}
`;
async function placeOrder(dispatch) {
  const variables = { cartId: LocalStorage.getCartId() };
  return modifyPlaceOrder(await sendRequest(dispatch, { query: PLACE_ORDER_MUTATION, variables }));
}
function ajaxLoginModifier(response) {
  const _a = response, { customerData } = _a, result = __objRest(_a, ["customerData"]);
  return __spreadProps(__spreadValues({}, result), {
    data: customerData
  });
}
async function ajaxLogin(dispatch, userCredentials) {
  const relativeUrl = "/customer/ajax/login";
  const additionalHeaders = { "X-Requested-With": "XMLHttpRequest" };
  const result = await sendRequest(dispatch, userCredentials, relativeUrl, RESPONSE_JSON, additionalHeaders);
  return ajaxLoginModifier(result);
}
const CART_QUERY_PART = `
  cart(cart_id: $cartId) {
    id
    email
    ${cartItemsInfo}
    ${cartPriceInfo}
    ${cartBillingAddrInfo}
    ${cartShippingAddrInfo}
    ${cartPaymentMethodsInfo}
  }
`;
const GET_GUEST_CART_QUERY = `
  query getGuestCartQuery($cartId: String!) {
    ${CART_QUERY_PART}
  }
`;
const COUNTRY_LIST_QUERY_PART = `
  countries {
    id
    full_name_locale
    full_name_english
    state_required
  }
`;
const GET_COUNTRY_LIST_QUERY = `
  query getCountryListQuery {
    ${COUNTRY_LIST_QUERY_PART}
  }
`;
const COUNTRY_STATE_LIST_QUERY_PART = `
  country(id: $countryId){
    id
    available_regions {
      code
      id
      name
    }
  }
`;
const GET_COUNTRY_STATE_LIST_QUERY = `
query getCountryStateListQuery($countryId: String!) {
  ${COUNTRY_STATE_LIST_QUERY_PART}
}`;
const CUSTOMER_ADDRESS_LIST_QUERY_PART = `
  customer {
    email
    firstname
    lastname
    default_billing
    default_shipping
    addresses {
      id
      city
      company
      country_code
      default_billing
      default_shipping
      firstname
      lastname
      middlename
      postcode
      region {
        region
        region_code
        region_id
      }
      region_id
      street
      telephone
    }
  }
`;
const GET_CUSTOMER_ADDRESS_LIST_QUERY = `
  query getCustomerInfoWithAddressQuery {
    ${CUSTOMER_ADDRESS_LIST_QUERY_PART}
  }
`;
const CHECKOUT_AGREEMENTS_QUERY_PART = `
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
`;
const GET_CHECKOUT_AGREEMENTS_QUERY = `
  query getCheckoutAgreementsQuery {
    ${CHECKOUT_AGREEMENTS_QUERY_PART}
  }
`;
function getQuery(token, countryId) {
  return `
    query aggregatedQuery($cartId: String!, $countryId: String) {
      ${CART_QUERY_PART}
      ${COUNTRY_LIST_QUERY_PART}
      ${CHECKOUT_AGREEMENTS_QUERY_PART}
      ${token ? CUSTOMER_ADDRESS_LIST_QUERY_PART : ""}
      ${countryId ? COUNTRY_STATE_LIST_QUERY_PART : ""}
    }
  `;
}
function fetchCountryListModifier(result) {
  return lodash_get(result, "data.countries", []).map((country) => ({
    id: country.id,
    name: country.full_name_locale,
    stateRequired: country.state_required
  }));
}
function fetchCountryStateListModifier(response) {
  const countryId = lodash_get(response, "data.country.id");
  const regions = lodash_get(response, "data.country.available_regions", []) || [];
  return regions.map(({ code, name, id: id2 }) => ({
    id: id2,
    code,
    name,
    countryId
  }));
}
function modifyCustomerAddressList$1(response) {
  const customerData = lodash_get(response, "data.customer", {}) || {};
  const defaultBillingAddress = Number(lodash_get(customerData, "default_billing"));
  const defaultShippingAddress = Number(lodash_get(customerData, "default_shipping"));
  const customerAddressList = lodash_get(customerData, "addresses", []).reduce((accumulator, address) => {
    const {
      id: id2,
      city,
      street,
      company,
      lastname: lastname2,
      firstname: firstname2,
      middlename,
      telephone: phone,
      postcode: zipcode,
      country_code: countryCode,
      default_billing: isDefaultBilling,
      default_shipping: isDefaultShipping,
      region: { region: regionLabel, region_code: regionCode }
    } = address;
    accumulator[Number(id2)] = {
      id: id2,
      firstname: firstname2,
      lastname: lastname2,
      middlename,
      fullName: prepareFullName(address),
      company,
      street,
      city,
      regionLabel,
      regionCode,
      zipcode,
      phone,
      countryCode,
      isDefaultBilling,
      isDefaultShipping
    };
    return accumulator;
  }, {});
  const { firstname, lastname, email } = customerData;
  return {
    customer: {
      email,
      firstname,
      lastname,
      fullName: prepareFullName(customerData)
    },
    customerAddressList,
    defaultBillingAddress,
    defaultShippingAddress
  };
}
function restSetGuestPaymentMethodModifier$1(result) {
  const agreements = lodash_get(result, "data.checkoutAgreements", []) || [];
  return agreements.reduce((accumulator, agreement) => {
    const {
      mode,
      name,
      content,
      is_html: isHtml,
      agreement_id: id2,
      checkbox_text: label,
      content_height: height
    } = agreement;
    accumulator[id2] = {
      id: id2,
      name,
      label,
      height,
      isHtml,
      content,
      isAutomatic: mode === "AUTO"
    };
    return accumulator;
  }, {});
}
function aggregatedQueryModifier(result, token, countryId) {
  const cart = fetchGuestCartModifier(result);
  const countryList = fetchCountryListModifier(result);
  const checkoutAgreements = restSetGuestPaymentMethodModifier$1(result);
  const customer = token && modifyCustomerAddressList$1(result) || {};
  const stateList = countryId && { [countryId]: fetchCountryStateListModifier(result) } || {};
  return {
    cart,
    customer,
    stateList,
    countryList,
    checkoutAgreements
  };
}
async function aggregatedQuery(dispatch) {
  const token = LocalStorage.getCustomerToken();
  const variables = {
    countryId: initialCountry,
    cartId: LocalStorage.getCartId()
  };
  const query = getQuery(token, initialCountry);
  return aggregatedQueryModifier(await sendRequest(dispatch, { query, variables }), token, initialCountry);
}
async function fetchGuestCart(dispatch) {
  const variables = { cartId: LocalStorage.getCartId() };
  return fetchGuestCartModifier(await sendRequest(dispatch, { query: GET_GUEST_CART_QUERY, variables }));
}
function modifyCreateEmptyCart(result) {
  return lodash_set(result, "data.createEmptyCart.id");
}
const CREATE_EMPTY_CART_MUTATION = `
mutation {
  createEmptyCart
}
`;
async function createEmptyCart(dispatch) {
  return modifyCreateEmptyCart(await sendRequest(dispatch, { query: CREATE_EMPTY_CART_MUTATION }));
}
const GENERATE_CUSTOMER_TOKEN_MUTATION = `
  mutation generateToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;
function generateTokenModifier(result) {
  const error = lodash_get(result, "errors[0].message");
  const token = lodash_get(result, "data.generateCustomerToken.token");
  return {
    error,
    token
  };
}
async function generateToken(dispatch, userCredentials) {
  const variables = __spreadValues({}, userCredentials);
  const output = generateTokenModifier(await sendRequest(dispatch, {
    variables,
    query: GENERATE_CUSTOMER_TOKEN_MUTATION
  }));
  if (output.error) {
    throw new Error(output.error);
  }
  return output;
}
function updateCartItemsModifier(result) {
  const errorMessage = lodash_get(result, "errors.0.message", false);
  if (errorMessage) {
    throw new Error(errorMessage);
  }
  return fetchGuestCartModifier(result, "updateCartItems.cart");
}
const UPDATE_CART_ITEM_MUTATION = `
  mutation updateCartItemsMutation (
    $cartId: String!,
    $cartItems: [CartItemUpdateInput]!
  ) {
    updateCartItems(
      input: {
        cart_id: $cartId,
        cart_items: $cartItems
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
async function updateCartItems(dispatch, cartItem) {
  const variables = __spreadProps(__spreadValues({}, cartItem), { cartId: LocalStorage.getCartId() });
  return updateCartItemsModifier(await sendRequest(dispatch, { query: UPDATE_CART_ITEM_MUTATION, variables }));
}
function setPaymentMethodModifier(result) {
  const errors = lodash_get(result, "errors");
  if (errors && !_isArrayEmpty(errors)) {
    throw new Error(__("Saving payment method failed."));
  }
  return fetchGuestCartModifier(result, "setPaymentMethodOnCart.cart");
}
const SET_PAYMENT_METHOD_MUTATION = `
mutation setPaymentMethodMutation(
  $cartId: String!,
  $code: String!,
) {
  setPaymentMethodOnCart(
    input: {
      cart_id: $cartId
      payment_method: {
        code: $code
      }
    }
  ) {
  cart {
    ${CART_DATA_FRAGMENT}
    }
  }
}
`;
async function setPaymentMethod(dispatch, paymentMethod) {
  const variables = { code: paymentMethod, cartId: LocalStorage.getCartId() };
  return setPaymentMethodModifier(await sendRequest(dispatch, {
    query: SET_PAYMENT_METHOD_MUTATION,
    variables
  }));
}
const SET_CART_BILLING_ADDRESS_MUTATION = `
mutation setBillingAddress(
  $cartId: String!,
  $firstname: String!,
  $lastname: String!,
  $company: String,
  $street: [String]!,
  $city: String!,
  $region: String,
  $zipcode: String!,
  $country: String!,
  $phone: String!,
  $isSameAsShipping: Boolean
) {
  setBillingAddressOnCart(
    input: {
      cart_id: $cartId
      billing_address: {
        same_as_shipping: $isSameAsShipping
      	address: {
          firstname: $firstname
          lastname: $lastname
          company: $company
          street: $street
          city: $city
          region: $region
          postcode: $zipcode
          country_code: $country
          telephone: $phone
          save_in_address_book: false
        }
      }
    }
  ) {
    cart {
      ${CART_DATA_FRAGMENT}
    }
  }
}
`;
async function setBillingAddress(dispatch, billingAddress) {
  const variables = __spreadProps(__spreadValues({}, billingAddress), { cartId: LocalStorage.getCartId() });
  return fetchGuestCartModifier(await sendRequest(dispatch, {
    query: SET_CART_BILLING_ADDRESS_MUTATION,
    variables
  }), "setBillingAddressOnCart.cart");
}
function setShippingMethodModifier(result) {
  return fetchGuestCartModifier(result, "setShippingMethodsOnCart.cart");
}
const SET_SHIPPING_METHOD_MUTATION = `
mutation setShippingMehodMutation(
  $cartId: String!,
  $carrierCode: String!,
  $methodCode: String!
) {
  setShippingMethodsOnCart(
    input: {
      cart_id: $cartId
      shipping_methods: [
        {
          carrier_code: $carrierCode
          method_code: $methodCode
        }
      ]
    }
  ) {
  cart {
    ${CART_DATA_FRAGMENT}
    }
  }
}
`;
async function setShippingMethod(dispatch, shippingMethod) {
  const variables = __spreadProps(__spreadValues({}, shippingMethod), { cartId: LocalStorage.getCartId() });
  return setShippingMethodModifier(await sendRequest(dispatch, {
    query: SET_SHIPPING_METHOD_MUTATION,
    variables
  }));
}
const SET_SHIPPING_ADDR_MUTATION = `
mutation setShippingAddress(
  $cartId: String!,
  $firstname: String!,
  $lastname: String!,
  $company: String,
  $street: [String]!,
  $city: String!,
  $region: String,
  $zipcode: String!,
  $country: String!,
  $phone: String!
) {
  setShippingAddressesOnCart(
    input: {
      cart_id: $cartId
      shipping_addresses: [{
      	address: {
          firstname: $firstname
          lastname: $lastname
          company: $company
          street: $street
          city: $city
          region: $region
          postcode: $zipcode
          country_code: $country
          telephone: $phone
          save_in_address_book: false
        }
      }]
    }
  ) {
    cart {
      ${CART_DATA_FRAGMENT}
    }
  }
}`;
async function setShippingAddress(dispatch, shippingAddress) {
  const variables = __spreadProps(__spreadValues({}, shippingAddress), { cartId: LocalStorage.getCartId() });
  return fetchGuestCartModifier(await sendRequest(dispatch, {
    query: SET_SHIPPING_ADDR_MUTATION,
    variables
  }), "setShippingAddressesOnCart.cart");
}
async function fetchCountryList(dispatch) {
  return fetchCountryListModifier(await sendRequest(dispatch, { query: GET_COUNTRY_LIST_QUERY }));
}
function modifyCustomerCart(result) {
  return lodash_get(result, "data.customerCart.id");
}
const GET_CUSTOMER_CART_QUERY = `
query {
  customerCart {
    id
  }
}
`;
async function fetchCustomerCart(dispatch) {
  return modifyCustomerCart(await sendRequest(dispatch, { query: GET_CUSTOMER_CART_QUERY }));
}
function modifyCustomerAddressList(response) {
  const customerData = lodash_get(response, "data.customer", {});
  return {
    isLoggedIn: !!lodash_get(customerData, "email"),
    customer: __spreadProps(__spreadValues({}, customerData), {
      fullName: prepareFullName(customerData)
    })
  };
}
const GET_CUSTOMER_INFO_QUERY = `
query {
  customer {
    email
    firstname
    lastname
    middlename
  }
}
`;
async function fetchCustomerAddresses$2(dispatch) {
  return modifyCustomerAddressList(await sendRequest(dispatch, { query: GET_CUSTOMER_INFO_QUERY }));
}
function setEmailOnGuestCartMutation() {
  return `mutation setEmailOnGuestCartMutation($cartId: String!, $email: String!) {
    setGuestEmailOnCart(
      input: {
        cart_id: $cartId
        email: $email
      }
    ) {
      cart {
        email
      }
    }
  }`;
}
function setEmailOnGuestCartModifier(result) {
  return lodash_get(result, "data.setGuestEmailOnCart.cart", {});
}
async function setEmailOnGuestCart(dispatch, email) {
  const query = setEmailOnGuestCartMutation();
  const variables = { email, cartId: LocalStorage.getCartId() };
  return setEmailOnGuestCartModifier(await sendRequest(dispatch, { query, variables }));
}
function restSetMyPaymentMethod$1(result) {
  const message = lodash_get(result, "message");
  if (message) {
    throw new Error(__("Payment method selected is not available. Please choose another payment method."));
  }
  return {
    order_number: result
  };
}
async function restSetMyPaymentMethod(dispatch, paymentData) {
  const { restUrlPrefix } = RootElement.getPaymentConfig();
  const setPaymentMethodUrl = `${restUrlPrefix}carts/mine/payment-information`;
  return restSetMyPaymentMethod$1(await sendRequest(dispatch, paymentData, setPaymentMethodUrl, RESPONSE_TEXT));
}
function updateCustomerAddressModifier(result) {
  const address = lodash_get(result, "data.updateCustomerAddress", {});
  const {
    id: id2,
    firstname,
    lastname,
    middlename,
    company,
    street,
    city,
    region: { region: regionLabel, region_code: regionCode },
    postcode: zipcode,
    telephone: phone,
    default_billing: isDefaultBilling,
    default_shipping: isDefaultShipping,
    country_code: countryCode
  } = address;
  return {
    [Number(id2)]: {
      id: id2,
      firstname,
      lastname,
      middlename,
      fullName: prepareFullName(address),
      company,
      street,
      city,
      regionLabel,
      regionCode,
      zipcode,
      phone,
      countryCode,
      isDefaultBilling,
      isDefaultShipping
    }
  };
}
const UPDATE_CUSTOMER_ADDRESS_MUTATION = `
  mutation updateCustomerAddressMutation(
    $id: Int!
    $customerAddress: CustomerAddressInput
  ) {
    updateCustomerAddress(
      id: $id
      input: $customerAddress
    ) {
      id
      city
      company
      country_code
      default_billing
      default_shipping
      firstname
      lastname
      middlename
      postcode
      region {
        region
        region_code
        region_id
      }
      region_id
      street
      telephone
    }
  }
`;
async function fetchCustomerAddresses$1(dispatch, addressId, customerAddress) {
  const variables = { id: Number(addressId), customerAddress };
  return updateCustomerAddressModifier(await sendRequest(dispatch, {
    variables,
    query: UPDATE_CUSTOMER_ADDRESS_MUTATION
  }));
}
async function fetchCountryStateList(dispatch, countryId) {
  const variables = { countryId };
  return fetchCountryStateListModifier(await sendRequest(dispatch, {
    query: GET_COUNTRY_STATE_LIST_QUERY,
    variables
  }));
}
async function getCheckoutAgreements(dispatch) {
  return restSetGuestPaymentMethodModifier$1(await sendRequest(dispatch, { query: GET_CHECKOUT_AGREEMENTS_QUERY }));
}
async function fetchCustomerAddresses(dispatch) {
  return modifyCustomerAddressList$1(await sendRequest(dispatch, { query: GET_CUSTOMER_ADDRESS_LIST_QUERY }));
}
function restSetGuestPaymentMethodModifier(result) {
  const message = lodash_get(result, "message");
  if (message) {
    throw new Error(__("Payment method selected is not available. Please choose another payment method."));
  }
  return {
    order_number: result
  };
}
async function restSetGuestPaymentMethod(dispatch, paymentData) {
  const cartId = LocalStorage.getCartId();
  const { restUrlPrefix } = RootElement.getPaymentConfig();
  const setPaymentMethodUrl = `${restUrlPrefix}guest-carts/${cartId}/payment-information`;
  return restSetGuestPaymentMethodModifier(await sendRequest(dispatch, paymentData, setPaymentMethodUrl, RESPONSE_TEXT));
}
function setCustomerAddressOnBillingModifier$1(result) {
  return fetchGuestCartModifier(result, "setBillingAddressOnCart.cart");
}
const SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION = `
  mutation setCustomerAddrOnCartBillingMutation(
    $cartId: String!
    $customerAddressId: Int!
    $sameAsShipping: Boolean
  ) {
    setBillingAddressOnCart(
      input: {
        cart_id: $cartId
        billing_address: {
          customer_address_id: $customerAddressId
          same_as_shipping: $sameAsShipping
        }
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
async function setCustomerAddressOnBilling(dispatch, customerAddressId, sameAsShipping) {
  const variables = {
    customerAddressId,
    sameAsShipping,
    cartId: LocalStorage.getCartId()
  };
  return setCustomerAddressOnBillingModifier$1(await sendRequest(dispatch, {
    query: SET_CUSTOMER_ADDR_ON_CART_BILLING_ADDR_MUTATION,
    variables
  }));
}
function setCustomerAddressOnBillingModifier(result) {
  return fetchGuestCartModifier(result, "setShippingAddressesOnCart.cart");
}
const SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION = `
  mutation setCustomerAddrOnCartShippingAddrMutation(
    $cartId: String!
    $customerAddressId: Int!
  ) {
    setShippingAddressesOnCart(
      input: {
        cart_id: $cartId
        shipping_addresses: {
          customer_address_id: $customerAddressId
        }
      }
    ) {
      cart {
        ${CART_DATA_FRAGMENT}
      }
    }
  }
`;
async function setCustomerAddrOnShippingAddr(dispatch, customerAddressId) {
  const variables = { customerAddressId, cartId: LocalStorage.getCartId() };
  return setCustomerAddressOnBillingModifier(await sendRequest(dispatch, {
    query: SET_CUSTOMER_ADDR_ON_CART_SHIPPING_ADDR_MUTATION,
    variables
  }));
}
const generateCustomerToken = generateToken;
const ajaxLoginRequest = ajaxLogin;
const fetchCustomerInfoRequest = fetchCustomerAddresses$2;
const fetchCustomerAddressListRequest = fetchCustomerAddresses;
const updateCustomerAddressRequest = fetchCustomerAddresses$1;
const setEmailOnGuestCartRequest = setEmailOnGuestCart;
const setShippingAddressRequest = setShippingAddress;
const setBillingAddressRequest = setBillingAddress;
const setCustomerAddrAsCartBillingAddrRequest = setCustomerAddressOnBilling;
const setCustomerAddrAsCartShippingAddrRequest = setCustomerAddrOnShippingAddr;
const fetchCountryStateListRequest = fetchCountryStateList;
const fetchGuestCartRequest = fetchGuestCart;
const fetchCustomerCartRequest = fetchCustomerCart;
const fetchCountryListRequest = fetchCountryList;
const setShippingMethodRequest = setShippingMethod;
const setPaymentMethodRequest = setPaymentMethod;
const updateCartItemsRequest = updateCartItems;
const createEmptyCartRequest = createEmptyCart;
const mergeCartsRequest = mergeCarts;
const placeOrderRequest = placeOrder;
const restSetGuestPaymentMethodRequest = restSetGuestPaymentMethod;
const restSetMyPaymentMethodRequest = restSetMyPaymentMethod;
const getCheckoutAgreementsRequest = getCheckoutAgreements;
const aggregatedQueryRequest = aggregatedQuery;
function CheckoutForm() {
  const [initialData, setInitialData] = l$1(false);
  const {
    appDispatch,
    setPageLoader: setPageLoader2,
    storeAggregatedAppStates
  } = useCheckoutFormAppContext();
  const {
    orderId,
    storeAggregatedCartStates
  } = useCheckoutFormCartContext();
  y$2(() => {
    (async () => {
      try {
        setPageLoader2(true);
        const data = await aggregatedQueryRequest(appDispatch);
        await storeAggregatedCartStates(data);
        await storeAggregatedAppStates(data);
        setInitialData(data);
        setPageLoader2(false);
      } catch (error) {
        setPageLoader2(false);
      }
    })();
  }, [appDispatch, setPageLoader2, storeAggregatedAppStates, storeAggregatedCartStates]);
  if (orderId && config.isDevelopmentMode) {
    return /* @__PURE__ */ e$1("div", {
      className: "flex flex-col items-center justify-center mx-10 my-10",
      children: [/* @__PURE__ */ e$1("h1", {
        className: "text-2xl font-bold",
        children: "Order Details"
      }), /* @__PURE__ */ e$1("div", {
        className: "flex flex-col items-center justify-center mt-4 space-y-3",
        children: [/* @__PURE__ */ e$1("div", {
          children: "Your order is placed."
        }), /* @__PURE__ */ e$1("div", {
          children: `Order Number: #${orderId}`
        })]
      })]
    });
  }
  return /* @__PURE__ */ e$1(CheckoutFormWrapper, {
    initialData,
    children: /* @__PURE__ */ e$1(Index, {})
  });
}
function setCustomerAddressInfo(state, customerAddrInfo) {
  return __spreadValues(__spreadValues({}, state), customerAddrInfo);
}
function setCustomerInfo(state, customerInfo) {
  return __spreadValues(__spreadValues({}, state), customerInfo);
}
function updateCustomerAddressReducer(state, customerAddr) {
  return __spreadProps(__spreadValues({}, state), {
    customerAddressList: __spreadValues(__spreadValues({}, state.customerAddressList), customerAddr)
  });
}
function setCustomerLoggedInStatusReducer(state, status) {
  return __spreadProps(__spreadValues({}, state), {
    isLoggedIn: status
  });
}
const SET_CUSTOMER_INFO = "SET_CUSTOMER_INFO";
const SET_CUSTOMER_ADDRESS_INFO = "SET_CUSTOMER_ADDRESS_INFO";
const UPDATE_CUSTOMER_ADDRESS = "UPDATE_CUSTOMER_ADDRESS";
const UPDATE_CUSTOMER_LOGGEDIN_STATUS = "UPDATE_CUSTOMER_LOGGEDIN_STATUS";
const AGGREGATED_APP_DATA = "AGGREGATED_APP_DATA";
function setAggregatedData$1(state, data) {
  return __spreadValues(__spreadValues({}, state), data);
}
function setPageLoader(state, pageLoader) {
  return __spreadProps(__spreadValues({}, state), {
    pageLoader
  });
}
function setPageMessage(state, message) {
  return __spreadProps(__spreadValues({}, state), {
    message
  });
}
const SET_CHECKOUT_AGREEMENTS = "SET_CHECKOUT_AGREEMENTS";
function setCheckoutAgreements(state, checkoutAgreements) {
  return __spreadProps(__spreadValues({}, state), {
    checkoutAgreements
  });
}
const SET_COUNTRY_LIST = "SET_COUNTRY_LIST";
const ADD_COUNTRY_STATES = "ADD_COUNTRY_STATES";
function setCountryList(state, countryList) {
  return __spreadProps(__spreadValues({}, state), {
    countryList: [...state.countryList, ...countryList]
  });
}
function addCountryStateList(state, countryStateList) {
  return __spreadProps(__spreadValues({}, state), {
    stateList: __spreadValues(__spreadValues({}, state.stateList), countryStateList)
  });
}
const actions$1 = {
  [SET_PAGE_LOADER]: setPageLoader,
  [SET_COUNTRY_LIST]: setCountryList,
  [SET_PAGE_MESSAGE]: setPageMessage,
  [SET_CUSTOMER_INFO]: setCustomerInfo,
  [AGGREGATED_APP_DATA]: setAggregatedData$1,
  [ADD_COUNTRY_STATES]: addCountryStateList,
  [SET_CHECKOUT_AGREEMENTS]: setCheckoutAgreements,
  [SET_CUSTOMER_ADDRESS_INFO]: setCustomerAddressInfo,
  [UPDATE_CUSTOMER_ADDRESS]: updateCustomerAddressReducer,
  [UPDATE_CUSTOMER_LOGGEDIN_STATUS]: setCustomerLoggedInStatusReducer
};
function appReducer(state, { type, payload }) {
  const action = actions$1[type];
  if (action) {
    return action(state, payload);
  }
  return state;
}
function setPageLoaderAction(dispatch, loader) {
  dispatch({
    type: SET_PAGE_LOADER,
    payload: loader
  });
}
function setMessageAction(dispatch, message) {
  dispatch({
    type: SET_PAGE_MESSAGE,
    payload: message
  });
}
function setSuccessMessageAction(dispatch, message) {
  setMessageAction(dispatch, { type: "success", message });
}
function setErrorMessageAction(dispatch, message) {
  setMessageAction(dispatch, { type: "error", message });
}
async function fetchCountriesAction(dispatch) {
  try {
    const countryList = await fetchCountryListRequest(dispatch);
    dispatch({
      type: SET_COUNTRY_LIST,
      payload: countryList
    });
  } catch (error) {
    console.error(error);
  }
}
async function fetchCountryStatesAction(dispatch, countryId) {
  try {
    const stateList = await fetchCountryStateListRequest(dispatch, countryId);
    dispatch({
      type: ADD_COUNTRY_STATES,
      payload: { [countryId]: stateList }
    });
    return stateList;
  } catch (error) {
    console.error(error);
    return {};
  }
}
function setLoggedInStatusAction(dispatch, status) {
  dispatch({
    type: UPDATE_CUSTOMER_LOGGEDIN_STATUS,
    payload: status
  });
}
async function sigInCustomerAction(dispatch, userCredentials) {
  try {
    const { token } = await generateCustomerToken(dispatch, userCredentials);
    LocalStorage.saveCustomerToken(token);
    setLoggedInStatusAction(dispatch, true);
    setSuccessMessageAction(dispatch, "You are successfully logged-in");
    return true;
  } catch (error) {
    console.error(error);
    setErrorMessageAction(dispatch, lodash_get(error, "message") || "Something went wrong with sign-in. Please try later");
  }
  return false;
}
async function ajaxLoginAction(dispatch, userCredentials) {
  try {
    const response = await ajaxLoginRequest(dispatch, userCredentials);
    const { errors, data } = response;
    if (!errors) {
      const sourceCartId = LocalStorage.getCartId();
      const signInToken = lodash_get(data, "customer.signin_token");
      const cartId = lodash_get(data, "cart.cartId");
      LocalStorage.saveCartId(cartId);
      LocalStorage.saveCustomerToken(signInToken);
      if (config.isDevelopmentMode && cartId && cartId !== sourceCartId) {
        await mergeCartsRequest(dispatch, {
          sourceCartId,
          destinationCartId: cartId
        });
      }
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }
    return response;
  } catch (error) {
    console.error(error);
  }
  return {};
}
async function getCustomerInfoAction(dispatch) {
  try {
    const customerInfo = await fetchCustomerInfoRequest(dispatch);
    dispatch({
      type: SET_CUSTOMER_INFO,
      payload: customerInfo
    });
  } catch (error) {
    console.error(error);
  }
}
async function getCustomerAddressListAction(dispatch) {
  try {
    const customerAddressInfo = await fetchCustomerAddressListRequest(dispatch);
    dispatch({
      type: SET_CUSTOMER_ADDRESS_INFO,
      payload: customerAddressInfo
    });
    return customerAddressInfo;
  } catch (error) {
    console.error(error);
  }
  return {};
}
async function updateCustomerAddressAction(dispatch, addressId, customerAddress, stateInfo) {
  try {
    const _a = customerAddress, { country, phone, region, zipcode } = _a, otherAddressParts = __objRest(_a, ["country", "phone", "region", "zipcode"]);
    const address = __spreadValues({}, otherAddressParts);
    if (country) {
      address.country_code = country;
    }
    if (phone) {
      address.telephone = phone;
    }
    if (region) {
      address.region = {
        region_code: region,
        region: lodash_get(stateInfo, "code"),
        region_id: lodash_get(stateInfo, "id")
      };
    }
    if (zipcode) {
      address.postcode = zipcode;
    }
    const keysToRemove = [
      "id",
      "phone",
      "country",
      "zipcode",
      "fullName",
      "regionCode",
      "countryCode",
      "regionLabel",
      "selectedAddress",
      "isSameAsShipping",
      "isDefaultBilling",
      "isDefaultShipping"
    ];
    const customerAddressInfo = await updateCustomerAddressRequest(dispatch, addressId, _cleanObjByKeys(address, keysToRemove));
    dispatch({
      type: UPDATE_CUSTOMER_ADDRESS,
      payload: customerAddressInfo
    });
  } catch (error) {
    console.error(error);
  }
}
async function storeAggregatedAppStatesAction(dispatch, data) {
  const { customer, countryList, checkoutAgreements, stateList } = data;
  return dispatch({
    type: AGGREGATED_APP_DATA,
    payload: __spreadProps(__spreadValues({}, customer), {
      stateList,
      countryList,
      checkoutAgreements
    })
  });
}
async function getCheckoutAgreementsAction(dispatch) {
  try {
    const checkoutAgreements = await getCheckoutAgreementsRequest(dispatch);
    dispatch({
      type: SET_CHECKOUT_AGREEMENTS,
      payload: checkoutAgreements
    });
  } catch (error) {
    console.error(error);
  }
}
const dispatchMapper$1 = {
  ajaxLogin: ajaxLoginAction,
  setMessage: setMessageAction,
  setPageLoader: setPageLoaderAction,
  signInCustomer: sigInCustomerAction,
  fetchCountries: fetchCountriesAction,
  setErrorMessage: setErrorMessageAction,
  getCustomerInfo: getCustomerInfoAction,
  setSuccessMessage: setSuccessMessageAction,
  setLoggedInStatus: setLoggedInStatusAction,
  fetchCountryStates: fetchCountryStatesAction,
  updateCustomerAddress: updateCustomerAddressAction,
  getCheckoutAgreements: getCheckoutAgreementsAction,
  getCustomerAddressList: getCustomerAddressListAction,
  storeAggregatedAppStates: storeAggregatedAppStatesAction
};
function appDispatcher(dispatch) {
  const dispatchers = { dispatch };
  Object.keys(dispatchMapper$1).forEach((dispatchName) => {
    dispatchers[dispatchName] = dispatchMapper$1[dispatchName].bind(null, dispatch);
  });
  return dispatchers;
}
const initialState$1 = {
  checkoutAgreements: {},
  countriesLoaded: [],
  countryList: [],
  customer: {},
  customerAddressList: {},
  defaultBillingAddress: "",
  defaultShippingAddress: "",
  isLoggedIn: !!LocalStorage.getCustomerToken(),
  message: false,
  pageLoader: false,
  stateList: {}
};
function AppDataProvider({
  children
}) {
  const [appData, dispatch] = p$1(appReducer, initialState$1);
  const appActions = d$1(() => appDispatcher(dispatch), [dispatch]);
  return /* @__PURE__ */ e$1(AppContext.Provider, {
    value: [appData, appActions],
    children
  });
}
AppDataProvider.propTypes = {
  children: propTypes.exports.node.isRequired
};
function setCartShippingAddress(state, shippingAddress) {
  return __spreadProps(__spreadValues({}, state), {
    cart: {
      shipping_address: [...shippingAddress]
    }
  });
}
function setCartSelectedShippingAddress(state, shippingAddressId) {
  return __spreadProps(__spreadValues({}, state), {
    cart: __spreadProps(__spreadValues({}, state.cart), {
      selected_shipping_address: shippingAddressId
    })
  });
}
const SET_CART_SHIPPING_ADDRESS = "SET_CART_SHIPPING_ADDRESS";
const SET_CART_SELECTED_SHIPPING_ADDRESS = "SET_CART_SELECTED_SHIPPING_ADDRESS";
const SET_CART_INFO = "SET_CART_INFO";
function setCartInfo(state, cartInfo) {
  return __spreadProps(__spreadValues({}, state), {
    cart: __spreadValues(__spreadValues({}, state.cart), cartInfo)
  });
}
const SET_CART_EMAIL = "SET_CART_EMAIL";
const SET_ORDER_INFO = "SET_ORDER_INFO";
function setCartEmail(state, email) {
  return __spreadProps(__spreadValues({}, state), {
    cart: __spreadValues(__spreadValues({}, state.cart), email)
  });
}
function setOrderInfo(state, order) {
  return __spreadProps(__spreadValues({}, state), {
    order: __spreadValues(__spreadValues({}, state.order), order)
  });
}
function setAggregatedData(state, data) {
  const _a = data, { cart } = _a, otherData = __objRest(_a, ["cart"]);
  return __spreadProps(__spreadValues(__spreadValues({}, state), otherData), {
    cart: __spreadValues(__spreadValues({}, state.cart), cart)
  });
}
const AGGREGATED_CART_DATA = "AGGREGATED_CART_DATA";
function setCartBillingAddress(state, billingAddress) {
  return __spreadProps(__spreadValues({}, state), {
    cart: __spreadProps(__spreadValues({}, state.cart), {
      billing_address: __spreadValues(__spreadValues({}, state.cart.billingAddress), billingAddress)
    })
  });
}
const SET_CART_BILLING_ADDRESS = "SET_CART_BILLING_ADDRESS";
const actions = {
  [SET_CART_INFO]: setCartInfo,
  [SET_CART_EMAIL]: setCartEmail,
  [SET_ORDER_INFO]: setOrderInfo,
  [AGGREGATED_CART_DATA]: setAggregatedData,
  [SET_CART_BILLING_ADDRESS]: setCartBillingAddress,
  [SET_CART_SHIPPING_ADDRESS]: setCartShippingAddress,
  [SET_CART_SELECTED_SHIPPING_ADDRESS]: setCartSelectedShippingAddress
};
function cartReducer(state, { type, payload }) {
  const action = actions[type];
  if (action) {
    return action(state, payload);
  }
  return state;
}
const selectedShippingAddress = LocalStorage.getCustomerShippingAddressId();
const initialState = {
  errors: false,
  order: {},
  cart: {
    loaded: false,
    email: null,
    id: null,
    billing_address: null,
    shipping_address: {},
    selected_shipping_address: selectedShippingAddress || "",
    shipping_methods: {},
    selected_shipping_method: {},
    items: {},
    available_payment_methods: {},
    selected_payment_method: { code: "", title: "" },
    applied_coupons: null,
    prices: {
      discounts: [],
      discountLabel: "",
      discountAmount: 0,
      hasDiscounts: false,
      subTotal: "",
      subTotalAmount: 0,
      grandTotal: "",
      grandTotalAmount: 0
    },
    is_virtual: false
  }
};
async function setBillingAddressAction(dispatch, appDispatch, billingAddress) {
  const cartInfo = await setBillingAddressRequest(appDispatch, billingAddress);
  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo
  });
}
async function setCustomerAddrAsBillingAddrAction(dispatch, appDispatch, addressId, sameAsShipping) {
  try {
    const cartInfo = await setCustomerAddrAsCartBillingAddrRequest(appDispatch, addressId, sameAsShipping);
    dispatch({
      type: SET_CART_INFO,
      payload: cartInfo
    });
  } catch (error) {
  }
}
async function setPaymentMethodAction(dispatch, appDispatch, paymentMethod) {
  try {
    const cartData = await setPaymentMethodRequest(appDispatch, paymentMethod);
    dispatch({
      type: SET_CART_INFO,
      payload: cartData
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function setRestPaymentMethodAction(dispatch, appDispatch, paymentMethod, isLoggedIn) {
  try {
    let result;
    if (isLoggedIn) {
      result = await restSetMyPaymentMethodRequest(appDispatch, paymentMethod);
    } else {
      result = await restSetGuestPaymentMethodRequest(appDispatch, paymentMethod);
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function setCartInfoAction(dispatch, appDispatch, cartInfo) {
  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo
  });
}
async function getGuestCartInfoAction(dispatch, appDispatch) {
  try {
    const cartInfo = await fetchGuestCartRequest(appDispatch);
    setCartInfoAction(dispatch, appDispatch, cartInfo);
    return cartInfo;
  } catch (error) {
    console.error(error);
  }
  return {};
}
async function getCustomerCartIdAction(dispatch, appDispatch) {
  try {
    const customerCartId = await fetchCustomerCartRequest(appDispatch);
    return customerCartId;
  } catch (error) {
    console.error(error);
  }
  return null;
}
async function createEmptyCartAction(dispatch, appDispatch) {
  try {
    const cartId = await createEmptyCartRequest(appDispatch);
    return cartId;
  } catch (error) {
    console.error(error);
  }
  return null;
}
async function mergeCartsAction(dispatch, appDispatch, cartIds) {
  try {
    const cartInfo = await mergeCartsRequest(appDispatch, cartIds);
    if (cartInfo.error) {
      return cartInfo;
    }
    setCartInfoAction(dispatch, appDispatch, cartInfo);
    LocalStorage.saveCartId(cartInfo.id);
    return cartInfo;
  } catch (error) {
    console.error(error);
  }
  return {};
}
async function getCartInfoAfterMergeAction(dispatch, appDispatch, guestCartId) {
  let cartInfo = {};
  try {
    let customerCartId = await getCustomerCartIdAction(dispatch, appDispatch);
    if (!customerCartId) {
      customerCartId = await createEmptyCartAction(dispatch, appDispatch);
    }
    if (guestCartId && customerCartId && guestCartId !== customerCartId) {
      cartInfo = await mergeCartsAction(dispatch, appDispatch, {
        sourceCartId: guestCartId,
        destinationCartId: customerCartId
      });
    } else {
      cartInfo = await getGuestCartInfoAction(dispatch, appDispatch);
    }
    LocalStorage.saveCartId(customerCartId);
    return cartInfo;
  } catch (error) {
    console.error(error);
  }
  return {};
}
function setSelectedShippingAddressAction(dispatch, appDispatch, shippingAddressId) {
  dispatch({
    type: SET_CART_SELECTED_SHIPPING_ADDRESS,
    payload: shippingAddressId
  });
}
async function addCartShippingAddressAction(dispatch, appDispatch, shippingAddress, isBillingAddressSame) {
  const cartInfo = await setShippingAddressRequest(appDispatch, shippingAddress);
  lodash_set(cartInfo, "billing_address.isSameAsShipping", !!isBillingAddressSame);
  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo
  });
  return cartInfo;
}
async function setCustomerAddrAsShippingAddrAction(dispatch, appDispatch, addressId, isBillingAddressSame) {
  const cartInfo = await setCustomerAddrAsCartShippingAddrRequest(appDispatch, addressId);
  lodash_set(cartInfo, "billing_address.isSameAsShipping", !!isBillingAddressSame);
  dispatch({
    type: SET_CART_INFO,
    payload: cartInfo
  });
  return cartInfo;
}
async function updateCartItemAction(dispatch, appDispatch, cartItems) {
  const cartData = await updateCartItemsRequest(appDispatch, cartItems);
  dispatch({
    type: SET_CART_INFO,
    payload: cartData
  });
}
async function setEmailOnGuestCartAction(dispatch, appDispatch, email) {
  try {
    await setEmailOnGuestCartRequest(appDispatch, email);
    dispatch({
      type: SET_CART_EMAIL,
      payload: { email }
    });
  } catch (error) {
  }
}
async function setShippingMethodAction(dispatch, appDispatch, shippingMethod) {
  try {
    const cartData = await setShippingMethodRequest(appDispatch, shippingMethod);
    dispatch({
      type: SET_CART_INFO,
      payload: cartData
    });
  } catch (error) {
  }
}
function setOrderInfoAction(dispatch, appDispatch, order) {
  dispatch({
    type: SET_ORDER_INFO,
    payload: order
  });
}
async function placeOrderAction(dispatch, appDispatch, values, paymentActionList) {
  try {
    let order;
    const paymentMethod = lodash_get(values, PAYMENT_METHOD_FORM);
    const paymentSubmitAction = lodash_get(paymentActionList, paymentMethod.code);
    if (paymentSubmitAction) {
      order = await paymentSubmitAction(values);
    } else {
      order = await placeOrderRequest(appDispatch);
    }
    if (order) {
      dispatch({
        type: SET_ORDER_INFO,
        payload: order
      });
    }
    return order;
  } catch (error) {
    console.error(error);
  }
  return {};
}
function storeAggregatedCartStatesAction(dispatch, appDispatch, data) {
  const { cart } = data;
  return dispatch({
    type: AGGREGATED_CART_DATA,
    payload: { cart }
  });
}
const dispatchMapper = {
  placeOrder: placeOrderAction,
  mergeCarts: mergeCartsAction,
  setCartInfo: setCartInfoAction,
  setOrderInfo: setOrderInfoAction,
  updateCartItem: updateCartItemAction,
  createEmptyCart: createEmptyCartAction,
  getGuestCartInfo: getGuestCartInfoAction,
  setPaymentMethod: setPaymentMethodAction,
  setShippingMethod: setShippingMethodAction,
  getCustomerCartId: getCustomerCartIdAction,
  getCustomerCartInfo: getGuestCartInfoAction,
  setEmailOnGuestCart: setEmailOnGuestCartAction,
  setCartBillingAddress: setBillingAddressAction,
  setRestPaymentMethod: setRestPaymentMethodAction,
  getCartInfoAfterMerge: getCartInfoAfterMergeAction,
  addCartShippingAddress: addCartShippingAddressAction,
  storeAggregatedCartStates: storeAggregatedCartStatesAction,
  setCartSelectedShippingAddress: setSelectedShippingAddressAction,
  setCustomerAddressAsBillingAddress: setCustomerAddrAsBillingAddrAction,
  setCustomerAddressAsShippingAddress: setCustomerAddrAsShippingAddrAction
};
function cartDispatchers(dispatch, appDispatch) {
  const dispatchers = { dispatch };
  Object.keys(dispatchMapper).forEach((dispatchName) => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(null, dispatch, appDispatch);
  });
  return dispatchers;
}
function CartDataProvider({
  children
}) {
  const [cartData, dispatch] = p$1(cartReducer, initialState);
  const {
    appDispatch
  } = useAppContext();
  const cartActions = d$1(() => cartDispatchers(dispatch, appDispatch), [dispatch, appDispatch]);
  return /* @__PURE__ */ e$1(CartContext.Provider, {
    value: [cartData, cartActions],
    children
  });
}
CartDataProvider.propTypes = {
  children: propTypes.exports.node.isRequired
};
function prepareFormInitValues(sections) {
  const initValues = {};
  sections.forEach((section) => {
    initValues[section.id] = section.initialValues;
  });
  return initValues;
}
function prepareFormValidationSchema(sections, sectionId) {
  const schemaRules = {};
  if (sectionId) {
    const section = sections.find((sec) => sec.id === sectionId);
    schemaRules[sectionId] = create$1().shape(section.validationSchema);
    return create$1().shape(schemaRules);
  }
  sections.forEach((section) => {
    schemaRules[section.id] = create$1().shape(section.validationSchema);
  });
  return create$1().shape(schemaRules);
}
function CheckoutFormProvider({
  children
}) {
  const [enableReinitialize, setEnableReInitialize] = l$1(true);
  const [activeForm, setActiveForm] = l$1(false);
  const [sections, updateSections] = l$1([]);
  const [paymentActionList, setPaymentActions] = l$1({});
  const {
    placeOrder: placeOrder2
  } = useCartContext();
  const {
    setPageLoader: setPageLoader2
  } = useAppContext();
  const registerPaymentAction = A$2((paymentMethodCode, paymentMethodAction) => {
    setPaymentActions((actions2) => __spreadProps(__spreadValues({}, actions2), {
      [paymentMethodCode]: paymentMethodAction
    }));
  }, [setPaymentActions]);
  const registerFormSection = A$2((section) => {
    updateSections((prevSections) => {
      const newSections = prevSections.filter((prevSection) => prevSection.id !== section.id);
      return [...newSections, section];
    });
  }, []);
  const formSubmit2 = async (values) => {
    try {
      setPageLoader2(true);
      const order = await placeOrder2(values, paymentActionList);
      const orderNumber = lodash_get(order, "order_number");
      if (orderNumber && config.isProductionMode) {
        LocalStorage.clearCheckoutStorage();
        window.location.replace(config.successPageRedirectUrl);
      }
      if (orderNumber && config.isDevelopmentMode) {
        LocalStorage.clearCheckoutStorage();
      }
      setPageLoader2(false);
    } catch (error) {
      setPageLoader2(false);
    }
  };
  const context = d$1(() => ({
    activeFormSection: activeForm,
    setActiveFormSection: setActiveForm,
    registerFormSection
  }), [activeForm, registerFormSection]);
  const formInitialValues = prepareFormInitValues(sections);
  const formValidationSchema = prepareFormValidationSchema(sections, activeForm);
  return /* @__PURE__ */ e$1(CheckoutFormContext.Provider, {
    value: __spreadProps(__spreadValues({}, context), {
      enableReinitialize,
      registerPaymentAction,
      setEnableReInitialize,
      formSections: sections,
      submitHandler: formSubmit2,
      checkoutFormValidationSchema: formValidationSchema
    }),
    children: /* @__PURE__ */ e$1(Formik, {
      enableReinitialize,
      initialValues: formInitialValues,
      validationSchema: formValidationSchema,
      onSubmit: formSubmit2,
      children
    })
  });
}
CheckoutFormProvider.propTypes = {
  children: propTypes.exports.node.isRequired
};
var index = "";
function Checkout() {
  return /* @__PURE__ */ e$1(AppDataProvider, {
    children: /* @__PURE__ */ e$1(CartDataProvider, {
      children: /* @__PURE__ */ e$1(CheckoutFormProvider, {
        children: /* @__PURE__ */ e$1(CheckoutForm, {})
      })
    })
  });
}
ReactDOM.render(/* @__PURE__ */ e$1(Checkout, {}), RootElement.getElement());
