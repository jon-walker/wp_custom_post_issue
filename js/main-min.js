"use strict";

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(e, t) {
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : void 0, function(e, t) {
    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function r(e) {
        var t = !!e && "length" in e && e.length, n = de.type(e);
        return "function" !== n && !de.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function o(e, t, n) {
        return de.isFunction(t) ? de.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? de.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? de.grep(e, function(e) {
            return se.call(t, e) > -1 !== n;
        }) : Te.test(t) ? de.filter(t, e, n) : (t = de.filter(t, e), de.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function s(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function a(e) {
        var t = {};
        return de.each(e.match(De) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function u(e) {
        return e;
    }
    function l(e) {
        throw e;
    }
    function c(e, t, n, r) {
        var i;
        try {
            e && de.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && de.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    function f() {
        te.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), 
        de.ready();
    }
    function p() {
        this.expando = de.expando + p.uid++;
    }
    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e);
    }
    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(We, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = d(n);
            } catch (e) {}
            Oe.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function v(e, t, n, r) {
        var i, o = 1, s = 20, a = r ? function() {
            return r.cur();
        } : function() {
            return de.css(e, t, "");
        }, u = a(), l = n && n[3] || (de.cssNumber[t] ? "" : "px"), c = (de.cssNumber[t] || "px" !== l && +u) && Pe.exec(de.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                c /= o = o || ".5", de.style(e, t, c + l);
            } while (o !== (o = a() / u) && 1 !== o && --s);
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
        r.start = c, r.end = i)), i;
    }
    function g(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = Be[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = de.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === i && (i = "block"), Be[r] = i, i);
    }
    function m(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++) (r = e[o]).style && (n = r.style.display, 
        t ? ("none" === n && (i[o] = He.get(r, "display") || null, i[o] || (r.style.display = "")), 
        "" === r.style.display && Re(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", 
        He.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && i(e, t) ? de.merge([ e ], n) : n;
    }
    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"));
    }
    function b(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === de.type(o)) de.merge(p, o.nodeType ? [ o ] : o); else if (Ve.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (ze.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = Ue[a] || Ue._default, s.innerHTML = u[1] + de.htmlPrefilter(o) + u[2], c = u[0]; c--; ) s = s.lastChild;
            de.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++]; ) if (r && de.inArray(o, r) > -1) i && i.push(o); else if (l = de.contains(o.ownerDocument, o), 
        s = y(f.appendChild(o), "script"), l && x(s), n) for (c = 0; o = s[c++]; ) Xe.test(o.type || "") && n.push(o);
        return f;
    }
    function w() {
        return !0;
    }
    function C() {
        return !1;
    }
    function T() {
        try {
            return te.activeElement;
        } catch (e) {}
    }
    function S(e, t, n, r, i, o) {
        var s, a;
        if ("object" === (void 0 === t ? "undefined" : _typeof(t))) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) S(e, a, n, r, t[a], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = C; else if (!i) return e;
        return 1 === o && (s = i, (i = function(e) {
            return de().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = de.guid++)), e.each(function() {
            de.event.add(this, t, i, r, n);
        });
    }
    function k(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? de(">tbody", e)[0] || e : e;
    }
    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function A(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function D(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (o = He.access(e), s = He.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) de.event.add(t, i, l[i][n]);
            }
            Oe.hasData(e) && (a = Oe.access(e), u = de.extend({}, a), Oe.set(t, u));
        }
    }
    function N(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function j(e, t, r, i) {
        t = ie.apply([], t);
        var o, s, a, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], v = de.isFunction(h);
        if (v || p > 1 && "string" == typeof h && !pe.checkClone && et.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            v && (t[0] = h.call(this, n, o.html())), j(o, t, r, i);
        });
        if (p && (o = b(t, e[0].ownerDocument, !1, e, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), 
        s || i)) {
            for (u = (a = de.map(y(o, "script"), E)).length; f < p; f++) l = o, f !== d && (l = de.clone(l, !0, !0), 
            u && de.merge(a, y(l, "script"))), r.call(e[f], l, f);
            if (u) for (c = a[a.length - 1].ownerDocument, de.map(a, A), f = 0; f < u; f++) l = a[f], 
            Xe.test(l.type || "") && !He.access(l, "globalEval") && de.contains(c, l) && (l.src ? de._evalUrl && de._evalUrl(l.src) : n(l.textContent.replace(nt, ""), c));
        }
        return e;
    }
    function q(e, t, n) {
        for (var r, i = t ? de.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || de.cleanData(y(r)), 
        r.parentNode && (n && de.contains(r.ownerDocument, r) && x(y(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    function L(e, t, n) {
        var r, i, o, s, a = e.style;
        return (n = n || ot(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || de.contains(e.ownerDocument, e) || (s = de.style(e, t)), 
        !pe.pixelMarginRight() && it.test(s) && rt.test(t) && (r = a.width, i = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, 
        a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }
    function H(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function O(e) {
        if (e in ft) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--; ) if ((e = ct[n] + t) in ft) return e;
    }
    function F(e) {
        var t = de.cssProps[e];
        return t || (t = de.cssProps[e] = O(e) || e), t;
    }
    function W(e, t, n) {
        var r = Pe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function M(e, t, n, r, i) {
        var o, s = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += de.css(e, n + $e[o], !0, i)), 
        r ? ("content" === n && (s -= de.css(e, "padding" + $e[o], !0, i)), "margin" !== n && (s -= de.css(e, "border" + $e[o] + "Width", !0, i))) : (s += de.css(e, "padding" + $e[o], !0, i), 
        "padding" !== n && (s += de.css(e, "border" + $e[o] + "Width", !0, i)));
        return s;
    }
    function P(e, t, n) {
        var r, i = ot(e), o = L(e, t, i), s = "border-box" === de.css(e, "boxSizing", !1, i);
        return it.test(o) ? o : (r = s && (pe.boxSizingReliable() || o === e.style[t]), 
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + M(e, t, n || (s ? "border" : "content"), r, i) + "px");
    }
    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i);
    }
    function R() {
        dt && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, de.fx.interval), 
        de.fx.tick());
    }
    function I() {
        return e.setTimeout(function() {
            pt = void 0;
        }), pt = de.now();
    }
    function B(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = $e[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function _(e, t, n) {
        for (var r, i = (X.tweeners[t] || []).concat(X.tweeners["*"]), o = 0, s = i.length; o < s; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function z(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = de.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = de.cssHooks[r]) && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function X(e, t, n) {
        var r, i, o = 0, s = X.prefilters.length, a = de.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = pt || I(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(r);
            return a.notifyWith(e, [ l, r, n ]), r < 1 && s ? n : (s || a.notifyWith(e, [ l, 1, 0 ]), 
            a.resolveWith(e, [ l ]), !1);
        }, l = a.promise({
            elem: e,
            props: de.extend({}, t),
            opts: de.extend(!0, {
                specialEasing: {},
                easing: de.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: pt || I(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = de.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (a.notifyWith(e, [ l, 1, 0 ]), a.resolveWith(e, [ l, t ])) : a.rejectWith(e, [ l, t ]), 
                this;
            }
        }), c = l.props;
        for (z(c, l.opts.specialEasing); o < s; o++) if (r = X.prefilters[o].call(l, e, c, l.opts)) return de.isFunction(r.stop) && (de._queueHooks(l.elem, l.opts.queue).stop = de.proxy(r.stop, r)), 
        r;
        return de.map(c, _, l), de.isFunction(l.opts.start) && l.opts.start.call(e, l), 
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
        de.fx.timer(de.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    function U(e) {
        return (e.match(De) || []).join(" ");
    }
    function V(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function G(e, t, n, r) {
        var i;
        if (Array.isArray(t)) de.each(t, function(t, i) {
            n || kt.test(e) ? r(e, i) : G(e + "[" + ("object" === (void 0 === i ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== de.type(t)) r(e, t); else for (i in t) G(e + "[" + i + "]", t[i], n, r);
    }
    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(De) || [];
            if (de.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function Y(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, de.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                i(l), !1);
            }), u;
        }
        var o = {}, s = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function J(e, t) {
        var n, r, i = de.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && de.extend(!0, e, r), e;
    }
    function K(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break;
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                s || (s = i);
            }
            o = o || s;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Z(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o])) for (i in l) if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    var ee = [], te = e.document, ne = Object.getPrototypeOf, re = ee.slice, ie = ee.concat, oe = ee.push, se = ee.indexOf, ae = {}, ue = ae.toString, le = ae.hasOwnProperty, ce = le.toString, fe = ce.call(Object), pe = {}, de = function e(t, n) {
        return new e.fn.init(t, n);
    }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ve = /^-ms-/, ge = /-([a-z])/g, me = function(e, t) {
        return t.toUpperCase();
    };
    de.fn = de.prototype = {
        jquery: "3.2.1",
        constructor: de,
        length: 0,
        toArray: function() {
            return re.call(this);
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = de.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return de.each(this, e);
        },
        map: function(e) {
            return this.pushStack(de.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, de.extend = de.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" === (void 0 === s ? "undefined" : _typeof(s)) || de.isFunction(s) || (s = {}), 
        a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        s !== (r = e[t]) && (l && r && (de.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, 
        o = n && Array.isArray(n) ? n : []) : o = n && de.isPlainObject(n) ? n : {}, s[t] = de.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s;
    }, de.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === de.type(e);
        },
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = de.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ne(e)) || "function" == typeof (n = le.call(t, "constructor") && t.constructor) && ce.call(n) === fe);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? ae[ue.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e);
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ge, me);
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? de.merge(n, "string" == typeof e ? [ e ] : e) : oe.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var i, o, s = 0, a = [];
            if (r(e)) for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o); else for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return ie.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), de.isFunction(e)) return r = re.call(arguments, 2), 
            i = function() {
                return e.apply(t || this, r.concat(re.call(arguments)));
            }, i.guid = e.guid = e.guid || de.guid++, i;
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (de.fn[Symbol.iterator] = ee[Symbol.iterator]), 
    de.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase();
    });
    var ye = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== q && j(t), t = t || q, H)) {
                if (11 !== h && (u = ve.exec(e))) if (i = u[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(i))) return n;
                        if (s.id === i) return n.push(s), n;
                    } else if (d && (s = d.getElementById(i)) && M(t, s) && s.id === i) return n.push(s), 
                    n;
                } else {
                    if (u[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(i)), 
                    n;
                }
                if (b.qsa && !z[e + " "] && (!O || !O.test(e))) {
                    if (1 !== h) d = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, be) : t.setAttribute("id", a = P), 
                        o = (c = S(e)).length; o--; ) c[o] = "#" + a + " " + f(c[o]);
                        p = c.join(","), d = ge.test(e) && l(t.parentNode) || t;
                    }
                    if (p) try {
                        return Y.apply(n, d.querySelectorAll(p)), n;
                    } catch (e) {} finally {
                        a === P && t.removeAttribute("id");
                    }
                }
            }
            return E(e.replace(oe, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r;
            }
            var t = [];
            return e;
        }
        function r(e) {
            return e[P] = !0, e;
        }
        function i(e) {
            var t = q.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) w.attrHandle[n[r]] = t;
        }
        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; ) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function p(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, s = n && "parentNode" === o, a = I++;
            return t.first ? function(t, n, i) {
                for (;t = t[r]; ) if (1 === t.nodeType || s) return e(t, n, i);
                return !1;
            } : function(t, n, u) {
                var l, c, f, p = [ R, a ];
                if (u) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || s) if (f = t[P] || (t[P] = {}), 
                c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === R && l[1] === a) return p[2] = l[2];
                    if (c[o] = p, p[2] = e(t, n, u)) return !0;
                }
                return !1;
            };
        }
        function d(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r;
        }
        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && (n && !n(o, r, i) || (s.push(o), 
            l && t.push(a)));
            return s;
        }
        function g(e, t, n, i, o, s) {
            return i && !i[P] && (i = g(i)), o && !o[P] && (o = g(o, s)), r(function(r, s, a, u) {
                var l, c, f, p = [], d = [], g = s.length, m = r || h(t || "*", a.nodeType ? [ a ] : a, []), y = !e || !r && t ? m : v(m, p, e, a, u), x = n ? o || (r ? e : g || i) ? [] : s : y;
                if (n && n(y, x, a, u), i) for (l = v(x, d), i(l, [], a, u), c = l.length; c--; ) (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--; ) (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u);
                        }
                        for (c = x.length; c--; ) (f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f));
                    }
                } else x = v(x === s ? x.splice(g, x.length) : x), o ? o(null, s, x, u) : Y.apply(s, x);
            });
        }
        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = p(function(e) {
                return e === t;
            }, s, !0), l = p(function(e) {
                return K(t, e) > -1;
            }, s, !0), c = [ function(e, n, r) {
                var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i;
            } ]; a < i; a++) if (n = w.relative[e[a].type]) c = [ p(d(c), n) ]; else {
                if ((n = w.filter[e[a].type].apply(null, e[a].matches))[P]) {
                    for (r = ++a; r < i && !w.relative[e[r].type]; r++) ;
                    return g(a > 1 && d(c), a > 1 && f(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(oe, "$1"), n, a < r && m(e.slice(a, r)), r < i && m(e = e.slice(r)), r < i && f(e));
                }
                c.push(n);
            }
            return d(c);
        }
        function y(e, n) {
            var i = n.length > 0, o = e.length > 0, s = function(r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], m = [], y = A, x = r || o && w.find.TAG("*", l), b = R += null == y ? 1 : Math.random() || .1, C = x.length;
                for (l && (A = s === q || s || l); h !== C && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, s || c.ownerDocument === q || (j(c), a = !H); p = e[f++]; ) if (p(c, s || q, a)) {
                            u.push(c);
                            break;
                        }
                        l && (R = b);
                    }
                    i && ((c = !p && c) && d--, r && g.push(c));
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++]; ) p(g, m, s, a);
                    if (r) {
                        if (d > 0) for (;h--; ) g[h] || m[h] || (m[h] = G.call(u));
                        m = v(m);
                    }
                    Y.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u);
                }
                return l && (R = b, A = y), g;
            };
            return i ? r(s) : s;
        }
        var x, b, w, C, T, S, k, E, A, D, N, j, q, L, H, O, F, W, M, P = "sizzle" + 1 * new Date(), $ = e.document, R = 0, I = 0, B = n(), _ = n(), z = n(), X = function(e, t) {
            return e === t && (N = !0), 0;
        }, U = {}.hasOwnProperty, V = [], G = V.pop, Q = V.push, Y = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), le = new RegExp(re), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, we = function() {
            j();
        }, Ce = p(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Y.apply(V = J.call($.childNodes), $.childNodes), V[$.childNodes.length].nodeType;
        } catch (e) {
            Y = {
                apply: V.length ? function(e, t) {
                    Q.apply(e, J.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        b = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, j = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, 
            H = !T(q), $ !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), 
            b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(q.createComment("")), !e.getElementsByTagName("*").length;
            }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function(e) {
                return L.appendChild(e).id = P, !q.getElementsByName || !q.getElementsByName(P).length;
            }), b.getById ? (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && H) return t.getElementsByClassName(e);
            }, F = [], O = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + P + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), 
                e.querySelectorAll("a#" + P + "+*").length || O.push(".#.+[+~]");
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = q.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"), 
                L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), O.push(",.*:");
            })), (b.matchesSelector = he.test(W = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = W.call(e, "*"), W.call(e, "[s!='']:x"), F.push("!=", re);
            }), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), 
            t = he.test(L.compareDocumentPosition), M = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, X = t ? function(e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === $ && M($, e) ? -1 : t === q || t.ownerDocument === $ && M($, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return N = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], u = [ t ];
                if (!i || !o) return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) u.unshift(n);
                for (;a[r] === u[r]; ) r++;
                return r ? s(a[r], u[r]) : a[r] === $ ? -1 : u[r] === $ ? 1 : 0;
            }, q) : q;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && j(e), n = n.replace(ue, "='$1']"), b.matchesSelector && H && !z[n + " "] && (!F || !F.test(n)) && (!O || !O.test(n))) try {
                var r = W.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return t(n, q, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && j(e), M(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && j(e);
            var n = w.attrHandle[t.toLowerCase()], r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(xe, be);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (N = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), N) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return D = null, e;
        }, C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r++]; ) n += C(t);
            return n;
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, v = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a, x = !1;
                        if (g) {
                            if (o) {
                                for (;v; ) {
                                    for (p = t; p = p[v]; ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ s ? g.firstChild : g.lastChild ], s && y) {
                                for (x = (d = (l = (c = (f = (p = g)[P] || (p[P] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === R && l[1]) && l[2], 
                                p = d && g.childNodes[d]; p = ++d && p && p[v] || (x = d = 0) || h.pop(); ) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [ R, d, x ];
                                    break;
                                }
                            } else if (y && (x = d = (l = (c = (f = (p = t)[P] || (p[P] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === R && l[1]), 
                            !1 === x) for (;(p = ++d && p && p[v] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[P] || (p[P] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [ R, x ]), 
                            p !== t)); ) ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [ e, e, "", n ], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; ) e[r = K(e, i[s])] = !(t[r] = i[s]);
                    }) : function(e) {
                        return o(e, 0, i);
                    }) : o;
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [], n = [], i = k(e.replace(oe, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: r(function(e) {
                    return e = e.replace(me, ye), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                    };
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !w.pseudos.empty(e);
                },
                header: function(e) {
                    return de.test(e.nodeName);
                },
                input: function(e) {
                    return pe.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: u(function() {
                    return [ 0 ];
                }),
                last: u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: u(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[x] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(x);
        for (x in {
            submit: !0,
            reset: !0
        }) w.pseudos[x] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), S = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = _[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = w.preFilter; a; ) {
                r && !(i = se.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), 
                r = !1, (i = ae.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), a = a.slice(r.length));
                for (s in w.filter) !(i = fe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), 
                o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break;
            }
            return n ? a.length : a ? t.error(e) : _(e, u).slice(0);
        }, k = t.compile = function(e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--; ) (o = m(t[n]))[P] ? r.push(o) : i.push(o);
                (o = z(e, y(i, r))).selector = e;
            }
            return o;
        }, E = t.select = function(e, t, n, r) {
            var i, o, s, a, u, c = "function" == typeof e && e, p = !r && S(e = c.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(me, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !w.relative[a = s.type]); ) if ((u = w.find[a]) && (r = u(s.matches[0].replace(me, ye), ge.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && f(o))) return Y.apply(n, r), n;
                    break;
                }
            }
            return (c || k(e, p))(r, t, !H, n, !t || ge.test(e) && l(t.parentNode) || t), n;
        }, b.sortStable = P.split("").sort(X).join("") === P, b.detectDuplicates = !!N, 
        j(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("fieldset"));
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), i(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), t;
    }(e);
    de.find = ye, de.expr = ye.selectors, de.expr[":"] = de.expr.pseudos, de.uniqueSort = de.unique = ye.uniqueSort, 
    de.text = ye.getText, de.isXMLDoc = ye.isXML, de.contains = ye.contains, de.escapeSelector = ye.escape;
    var xe = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (i && de(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, be = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, we = de.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Te = /^.[^:#\[\.,]*$/;
    de.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [ r ] : [] : de.find.matches(e, de.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, de.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                for (t = 0; t < r; t++) if (de.contains(i[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) de.find(e, i[t], n);
            return r > 1 ? de.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0));
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && we.test(e) ? de(e) : e || [], !1).length;
        }
    });
    var Se, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (de.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Se, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : ke.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof de ? t[0] : t, de.merge(this, de.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), 
                Ce.test(r[1]) && de.isPlainObject(t)) for (r in t) de.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : de.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(de) : de.makeArray(e, this);
    }).prototype = de.fn, Se = de(te);
    var Ee = /^(?:parents|prev(?:Until|All))/, Ae = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    de.fn.extend({
        has: function(e) {
            var t = de(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (de.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof e && de(e);
            if (!we.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? de.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(de(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(de.uniqueSort(de.merge(this.get(), de(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return xe(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n);
        },
        next: function(e) {
            return s(e, "nextSibling");
        },
        prev: function(e) {
            return s(e, "previousSibling");
        },
        nextAll: function(e) {
            return xe(e, "nextSibling");
        },
        prevAll: function(e) {
            return xe(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n);
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return be(e.firstChild);
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), 
            de.merge([], e.childNodes));
        }
    }, function(e, t) {
        de.fn[e] = function(n, r) {
            var i = de.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = de.filter(r, i)), 
            this.length > 1 && (Ae[e] || de.uniqueSort(i), Ee.test(e) && i.reverse()), this.pushStack(i);
        };
    });
    var De = /[^\x20\t\r\n\f]+/g;
    de.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : de.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, l = function() {
            for (i = i || e.once, r = t = !0; s.length; u = -1) for (n = s.shift(); ++u < o.length; ) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, 
            n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        }, c = {
            add: function() {
                return o && (n && !t && (u = o.length - 1, s.push(n)), function t(n) {
                    de.each(n, function(n, r) {
                        de.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== de.type(r) && t(r);
                    });
                }(arguments), n && !t && l()), this;
            },
            remove: function() {
                return de.each(arguments, function(e, t) {
                    for (var n; (n = de.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= u && u--;
                }), this;
            },
            has: function(e) {
                return e ? de.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return i = s = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return i = s = [], n || t || (o = n = ""), this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, n) {
                return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || l()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return c;
    }, de.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", de.Callbacks("memory"), de.Callbacks("memory"), 2 ], [ "resolve", "done", de.Callbacks("once memory"), de.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", de.Callbacks("once memory"), de.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                state: function() {
                    return r;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return i.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return de.Deferred(function(t) {
                        de.each(n, function(n, r) {
                            var i = de.isFunction(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && de.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, r, i) {
                    function o(t, n, r, i) {
                        return function() {
                            var a = this, c = arguments, f = function() {
                                var e, f;
                                if (!(t < s)) {
                                    if ((e = r.apply(a, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, 
                                    de.isFunction(f) ? i ? f.call(e, o(s, n, u, i), o(s, n, l, i)) : (s++, f.call(e, o(s, n, u, i), o(s, n, l, i), o(s, n, u, n.notifyWith))) : (r !== u && (a = void 0, 
                                    c = [ e ]), (i || n.resolveWith)(a, c));
                                }
                            }, p = i ? f : function() {
                                try {
                                    f();
                                } catch (e) {
                                    de.Deferred.exceptionHook && de.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (r !== l && (a = void 0, 
                                    c = [ e ]), n.rejectWith(a, c));
                                }
                            };
                            t ? p() : (de.Deferred.getStackHook && (p.stackTrace = de.Deferred.getStackHook()), 
                            e.setTimeout(p));
                        };
                    }
                    var s = 0;
                    return de.Deferred(function(e) {
                        n[0][3].add(o(0, e, de.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, de.isFunction(t) ? t : u)), 
                        n[2][3].add(o(0, e, de.isFunction(r) ? r : l));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? de.extend(e, i) : i;
                }
            }, o = {};
            return de.each(n, function(e, t) {
                var s = t[2], a = t[5];
                i[t[1]] = s.add, a && s.add(function() {
                    r = a;
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = s.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        },
        when: function(e) {
            var t = arguments.length, n = t, r = Array(n), i = re.call(arguments), o = de.Deferred(), s = function(e) {
                return function(n) {
                    r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i);
                };
            };
            if (t <= 1 && (c(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || de.isFunction(i[n] && i[n].then))) return o.then();
            for (;n--; ) c(i[n], s(n), o.reject);
            return o.promise();
        }
    });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    de.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, de.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var je = de.Deferred();
    de.fn.ready = function(e) {
        return je.then(e).catch(function(e) {
            de.readyException(e);
        }), this;
    }, de.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --de.readyWait : de.isReady) || (de.isReady = !0, !0 !== e && --de.readyWait > 0 || je.resolveWith(te, [ de ]));
        }
    }), de.ready.then = je.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(de.ready) : (te.addEventListener("DOMContentLoaded", f), 
    e.addEventListener("load", f));
    var qe = function e(t, n, r, i, o, s, a) {
        var u = 0, l = t.length, c = null == r;
        if ("object" === de.type(r)) {
            o = !0;
            for (u in r) e(t, n, u, r[u], !0, s, a);
        } else if (void 0 !== i && (o = !0, de.isFunction(i) || (a = !0), c && (a ? (n.call(t, i), 
        n = null) : (c = n, n = function(e, t, n) {
            return c.call(de(e), n);
        })), n)) for (;u < l; u++) n(t[u], r, a ? i : i.call(t[u], u, n(t[u], r)));
        return o ? t : c ? n.call(t) : l ? n(t[0], r) : s;
    }, Le = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    p.uid = 1, p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[de.camelCase(t)] = n; else for (r in t) i[de.camelCase(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][de.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(de.camelCase) : (t = de.camelCase(t)) in r ? [ t ] : t.match(De) || []).length;
                    for (;n--; ) delete r[t[n]];
                }
                (void 0 === t || de.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !de.isEmptyObject(t);
        }
    };
    var He = new p(), Oe = new p(), Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, We = /[A-Z]/g;
    de.extend({
        hasData: function(e) {
            return Oe.hasData(e) || He.hasData(e);
        },
        data: function(e, t, n) {
            return Oe.access(e, t, n);
        },
        removeData: function(e, t) {
            Oe.remove(e, t);
        },
        _data: function(e, t, n) {
            return He.access(e, t, n);
        },
        _removeData: function(e, t) {
            He.remove(e, t);
        }
    }), de.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Oe.get(o), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = de.camelCase(r.slice(5)), 
                    h(o, r, i[r]));
                    He.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" === (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function() {
                Oe.set(this, e);
            }) : qe(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Oe.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n;
                } else this.each(function() {
                    Oe.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Oe.remove(this, e);
            });
        }
    }), de.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = He.get(e, t), n && (!r || Array.isArray(n) ? r = He.access(e, t, de.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t), r = n.length, i = n.shift(), o = de._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, function() {
                de.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    He.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), de.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? de.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = de.queue(this, e, t);
                de._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && de.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = de.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = He.get(o[s], e + "queueHooks")) && n.empty && (r++, 
            n.empty.add(a));
            return a(), i.promise(t);
        }
    });
    var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"), $e = [ "Top", "Right", "Bottom", "Left" ], Re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && de.contains(e.ownerDocument, e) && "none" === de.css(e, "display");
    }, Ie = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i;
    }, Be = {};
    de.fn.extend({
        show: function() {
            return m(this, !0);
        },
        hide: function() {
            return m(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? de(this).show() : de(this).hide();
            });
        }
    });
    var _e = /^(?:checkbox|radio)$/i, ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Xe = /^$|\/(?:java|ecma)script/i, Ue = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, 
    Ue.th = Ue.td;
    var Ve = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ge = te.documentElement, Qe = /^key/, Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Je = /^([^.]*)(?:\.(.+)|)/;
    de.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, v, g = He.get(e);
            if (g) for (n.handler && (n = (o = n).handler, i = o.selector), i && de.find.matchesSelector(Ge, i), 
            n.guid || (n.guid = de.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                return void 0 !== de && de.event.triggered !== t.type ? de.event.dispatch.apply(e, arguments) : void 0;
            }), l = (t = (t || "").match(De) || [ "" ]).length; l--; ) d = v = (a = Je.exec(t[l]) || [])[1], 
            h = (a[2] || "").split(".").sort(), d && (f = de.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
            f = de.event.special[d] || {}, c = de.extend({
                type: d,
                origType: v,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && de.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), 
            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
            de.event.global[d] = !0);
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, v, g = He.hasData(e) && He.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(De) || [ "" ]).length; l--; ) if (a = Je.exec(t[l]) || [], 
                d = v = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = de.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; ) c = p[o], 
                    !i && v !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || de.removeEvent(e, d, g.handle), 
                    delete u[d]);
                } else for (d in u) de.event.remove(e, d + t[l], n, r, !0);
                de.isEmptyObject(u) && He.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = de.event.fix(e), u = new Array(arguments.length), l = (He.get(this, "events") || {})[a.type] || [], c = de.event.special[a.type] || {};
            for (u[0] = a, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = de.event.handlers.call(this, a, l), t = 0; (i = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = i.elem, 
                n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
                a.data = o.data, void 0 !== (r = ((de.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (a.result = r) && (a.preventDefault(), 
                a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? de(i, this).index(l) > -1 : de.find(i, this, null, [ l ]).length), 
                s[i] && o.push(r);
                o.length && a.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }), a;
        },
        addProp: function(e, t) {
            Object.defineProperty(de.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[de.expando] ? e : new de.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return i(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, de.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, de.Event = function(e, t) {
        if (!(this instanceof de.Event)) return new de.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : C, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), this[de.expando] = !0;
    }, de.Event.prototype = {
        constructor: de.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, de.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, de.event.addProp), de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || de.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), de.fn.extend({
        on: function(e, t, n, r) {
            return S(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return S(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, de(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), 
            this.each(function() {
                de.event.remove(this, e, n, t);
            });
        }
    });
    var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ze = /<script|<style|<link/i, et = /checked\s*(?:[^=]|=\s*.checked.)/i, tt = /^true\/(.*)/, nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    de.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ke, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = de.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e))) for (s = y(a), 
            r = 0, i = (o = y(e)).length; r < i; r++) N(o[r], s[r]);
            if (t) if (n) for (o = o || y(e), s = s || y(a), r = 0, i = o.length; r < i; r++) D(o[r], s[r]); else D(e, a);
            return (s = y(a, "script")).length > 0 && x(s, !u && y(e, "script")), a;
        },
        cleanData: function(e) {
            for (var t, n, r, i = de.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Le(n)) {
                if (t = n[He.expando]) {
                    if (t.events) for (r in t.events) i[r] ? de.event.remove(n, r) : de.removeEvent(n, r, t.handle);
                    n[He.expando] = void 0;
                }
                n[Oe.expando] && (n[Oe.expando] = void 0);
            }
        }
    }), de.fn.extend({
        detach: function(e) {
            return q(this, e, !0);
        },
        remove: function(e) {
            return q(this, e);
        },
        text: function(e) {
            return qe(this, function(e) {
                return void 0 === e ? de.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (de.cleanData(y(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return de.clone(this, e, t);
            });
        },
        html: function(e) {
            return qe(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ue[(ze.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = de.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (de.cleanData(y(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
                var n = this.parentNode;
                de.inArray(this, e) < 0 && (de.cleanData(y(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        de.fn[e] = function(e) {
            for (var n, r = [], i = de(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), 
            de(i[s])[t](n), oe.apply(r, n.get());
            return this.pushStack(r);
        };
    });
    var rt = /^margin/, it = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"), ot = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Ge.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", 
                i = "4px" === t.marginRight, Ge.removeChild(s), a = null;
            }
        }
        var n, r, i, o, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        pe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(a), de.extend(pe, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), r;
            },
            pixelMarginRight: function() {
                return t(), i;
            },
            reliableMarginLeft: function() {
                return t(), o;
            }
        }));
    }();
    var st = /^(none|table(?!-c[ea]).+)/, at = /^--/, ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, lt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ct = [ "Webkit", "Moz", "ms" ], ft = te.createElement("div").style;
    de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = L(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = de.camelCase(t), u = at.test(t), l = e.style;
                if (u || (t = F(a)), s = de.cssHooks[t] || de.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                "string" === (o = void 0 === n ? "undefined" : _typeof(n)) && (i = Pe.exec(n)) && i[1] && (n = v(e, t, i), 
                o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (de.cssNumber[a] ? "" : "px")), 
                pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = de.camelCase(t);
            return at.test(t) || (t = F(a)), (s = de.cssHooks[t] || de.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), 
            void 0 === i && (i = L(e, t, r)), "normal" === i && t in lt && (i = lt[t]), "" === n || n ? (o = parseFloat(i), 
            !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), de.each([ "height", "width" ], function(e, t) {
        de.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !st.test(de.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : Ie(e, ut, function() {
                    return P(e, t, r);
                });
            },
            set: function(e, n, r) {
                var i, o = r && ot(e), s = r && M(e, t, r, "border-box" === de.css(e, "boxSizing", !1, o), o);
                return s && (i = Pe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = de.css(e, t)), 
                W(0, n, s);
            }
        };
    }), de.cssHooks.marginLeft = H(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(L(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + $e[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, rt.test(e) || (de.cssHooks[e + t].set = W);
    }), de.fn.extend({
        css: function(e, t) {
            return qe(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = ot(e), i = t.length; s < i; s++) o[t[s]] = de.css(e, t[s], !1, r);
                    return o;
                }
                return void 0 !== n ? de.style(e, t, n) : de.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), de.Tween = $, $.prototype = {
        constructor: $,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || de.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (de.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = $.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : $.propHooks._default.set(this), this;
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = de.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[de.cssProps[e.prop]] && !de.cssHooks[e.prop] ? e.elem[e.prop] = e.now : de.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, de.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, de.fx = $.prototype.init, de.fx.step = {};
    var pt, dt, ht = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
    de.Animation = de.extend(X, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return v(n.elem, e, Pe.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            de.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(De);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], X.tweeners[n] = X.tweeners[n] || [], 
            X.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var r, i, o, s, a, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, v = e.nodeType && Re(e), g = He.get(e, "fxshow");
            n.queue || (null == (s = de._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, 
            s.empty.fire = function() {
                s.unqueued || a();
            }), s.unqueued++, p.always(function() {
                p.always(function() {
                    s.unqueued--, de.queue(e, "fx").length || s.empty.fire();
                });
            }));
            for (r in t) if (i = t[r], ht.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    v = !0;
                }
                d[r] = g && g[r] || de.style(e, r);
            }
            if ((u = !de.isEmptyObject(t)) || !de.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                null == (l = g && g.display) && (l = He.get(e, "display")), "none" === (c = de.css(e, "display")) && (l ? c = l : (m([ e ], !0), 
                l = e.style.display || l, c = de.css(e, "display"), m([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === de.css(e, "float") && (u || (p.done(function() {
                    h.display = l;
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
                n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                })), u = !1;
                for (r in d) u || (g ? "hidden" in g && (v = g.hidden) : g = He.access(e, "fxshow", {
                    display: l
                }), o && (g.hidden = !v), v && m([ e ], !0), p.done(function() {
                    v || m([ e ]), He.remove(e, "fxshow");
                    for (r in d) de.style(e, r, d[r]);
                })), u = _(v ? g[r] : 0, r, p), r in g || (g[r] = u.start, v && (u.end = u.start, 
                u.start = 0));
            }
        } ],
        prefilter: function(e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e);
        }
    }), de.speed = function(e, t, n) {
        var r = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? de.extend({}, e) : {
            complete: n || !n && t || de.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !de.isFunction(t) && t
        };
        return de.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in de.fx.speeds ? r.duration = de.fx.speeds[r.duration] : r.duration = de.fx.speeds._default), 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            de.isFunction(r.old) && r.old.call(this), r.queue && de.dequeue(this, r.queue);
        }, r;
    }, de.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = de.isEmptyObject(e), o = de.speed(t, n, r), s = function() {
                var t = X(this, de.extend({}, e), o);
                (i || He.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = de.timers, s = He.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && vt.test(i) && r(s[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                t = !1, o.splice(i, 1));
                !t && n || de.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = He.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = de.timers, s = r ? r.length : 0;
                for (n.finish = !0, de.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), de.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = de.fn[t];
        de.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i);
        };
    }), de.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        de.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), de.timers = [], de.fx.tick = function() {
        var e, t = 0, n = de.timers;
        for (pt = de.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || de.fx.stop(), pt = void 0;
    }, de.fx.timer = function(e) {
        de.timers.push(e), de.fx.start();
    }, de.fx.interval = 13, de.fx.start = function() {
        dt || (dt = !0, R());
    }, de.fx.stop = function() {
        dt = null;
    }, de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, de.fn.delay = function(t, n) {
        return t = de.fx ? de.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i);
            };
        });
    }, function() {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", 
        e.type = "radio", pe.radioValue = "t" === e.value;
    }();
    var gt, mt = de.expr.attrHandle;
    de.fn.extend({
        attr: function(e, t) {
            return qe(this, de.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e);
            });
        }
    }), de.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? de.prop(e, t, n) : (1 === o && de.isXMLDoc(e) || (i = de.attrHooks[t.toLowerCase()] || (de.expr.match.bool.test(t) ? gt : void 0)), 
            void 0 !== n ? null === n ? void de.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = de.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(De);
            if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
        }
    }), gt = {
        set: function(e, t, n) {
            return !1 === t ? de.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, de.each(de.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || de.find.attr;
        mt[t] = function(e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = mt[s], mt[s] = i, i = null != n(e, t, r) ? s : null, mt[s] = o), 
            i;
        };
    });
    var yt = /^(?:input|select|textarea|button)$/i, xt = /^(?:a|area)$/i;
    de.fn.extend({
        prop: function(e, t) {
            return qe(this, de.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[de.propFix[e] || e];
            });
        }
    }), de.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && de.isXMLDoc(e) || (t = de.propFix[t] || t, 
            i = de.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), de.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        de.propFix[this.toLowerCase()] = this;
    }), de.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).addClass(e.call(this, t, V(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[u++]; ) if (i = V(n), 
            r = 1 === n.nodeType && " " + U(i) + " ") {
                for (s = 0; o = t[s++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (a = U(r)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).removeClass(e.call(this, t, V(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(De) || []; n = this[u++]; ) if (i = V(n), 
            r = 1 === n.nodeType && " " + U(i) + " ") {
                for (s = 0; o = t[s++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                i !== (a = U(r)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = void 0 === e ? "undefined" : _typeof(e);
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                de(this).toggleClass(e.call(this, n, V(this), t), t);
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = de(this), o = e.match(De) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = V(this)) && He.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + U(V(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    de.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = de.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, de(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = de.map(i, function(e) {
                        return null == e ? "" : e + "";
                    })), (t = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });
                if (i) return (t = de.valHooks[i.type] || de.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        }
    }), de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : U(de.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, s = e.selectedIndex, a = "select-one" === e.type, u = a ? null : [], l = a ? s + 1 : o.length;
                    for (r = s < 0 ? l : a ? s : 0; r < l; r++) if (((n = o[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                        if (t = de(n).val(), a) return t;
                        u.push(t);
                    }
                    return u;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = de.makeArray(t), s = i.length; s--; ) ((r = i[s]).selected = de.inArray(de.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), de.each([ "radio", "checkbox" ], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = de.inArray(de(e).val(), t) > -1;
            }
        }, pe.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    de.extend(de.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [ r || te ], d = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(d + de.event.triggered) && (d.indexOf(".") > -1 && (d = (h = d.split(".")).shift(), 
            h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[de.expando] ? t : new de.Event(d, "object" === (void 0 === t ? "undefined" : _typeof(t)) && t), 
            t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = r), n = null == n ? [ t ] : de.makeArray(n, [ t ]), 
            f = de.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !de.isWindow(r)) {
                    for (u = f.delegateType || d, wt.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), 
                    a = s;
                    a === (r.ownerDocument || te) && p.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? u : f.bindType || d, 
                (c = (He.get(s, "events") || {})[t.type] && He.get(s, "handle")) && c.apply(s, n), 
                (c = l && s[l]) && c.apply && Le(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Le(r) || l && de.isFunction(r[d]) && !de.isWindow(r) && ((a = r[l]) && (r[l] = null), 
                de.event.triggered = d, r[d](), de.event.triggered = void 0, a && (r[l] = a)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var r = de.extend(new de.Event(), n, {
                type: e,
                isSimulated: !0
            });
            de.event.trigger(r, null, t);
        }
    }), de.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return de.event.trigger(e, t, n, !0);
        }
    }), de.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        de.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), de.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            de.event.simulate(t, e.target, de.event.fix(e));
        };
        de.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, i = He.access(r, t);
                i || r.addEventListener(e, n, !0), He.access(r, t, (i || 0) + 1);
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = He.access(r, t) - 1;
                i ? He.access(r, t, i) : (r.removeEventListener(e, n, !0), He.remove(r, t));
            }
        };
    });
    var Ct = e.location, Tt = de.now(), St = /\?/;
    de.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + t), 
        n;
    };
    var kt = /\[\]$/, Et = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Dt = /^(?:input|select|textarea|keygen)/i;
    de.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = de.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) G(n, e[n], t, i);
        return r.join("&");
    }, de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !_e.test(e));
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : Array.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                };
            }).get();
        }
    });
    var Nt = /%20/g, jt = /#.*$/, qt = /([?&])_=[^&]*/, Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ot = /^(?:GET|HEAD)$/, Ft = /^\/\//, Wt = {}, Mt = {}, Pt = "*/".concat("*"), $t = te.createElement("a");
    $t.href = Ct.href, de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Ht.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? J(J(e, de.ajaxSettings), t) : J(de.ajaxSettings, e);
        },
        ajaxPrefilter: Q(Wt),
        ajaxTransport: Q(Mt),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var l, p, d, b, w, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, 
                l = t >= 200 && t < 300 || 304 === t, r && (b = K(h, T, r)), b = Z(h, b, T, l), 
                l ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (de.lastModified[o] = w), 
                (w = T.getResponseHeader("etag")) && (de.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
                p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), 
                T.status = t, T.statusText = (n || C) + "", l ? m.resolveWith(v, [ p, C, T ]) : m.rejectWith(v, [ T, C, d ]), 
                T.statusCode(x), x = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [ T, h, l ? p : d ]), 
                y.fireWith(v, [ T, C ]), f && (g.trigger("ajaxComplete", [ T, h ]), --de.active || de.event.trigger("ajaxStop")));
            }
            "object" === (void 0 === t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, l, c, f, p, d, h = de.ajaxSetup({}, n), v = h.context || h, g = h.context && (v.nodeType || v.jquery) ? de(v) : de.event, m = de.Deferred(), y = de.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, C = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!a) for (a = {}; t = Lt.exec(s); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return c ? s : null;
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (c) T.always(e[T.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t), r(0, t), this;
                }
            };
            if (m.promise(T), h.url = ((t || h.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [ "" ], 
            null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = de.param(h.data, h.traditional)), 
            Y(Wt, h, n, T), c) return T;
            (f = de.event && h.global) && 0 == de.active++ && de.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), o = h.url.replace(jt, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(o.length), 
            h.data && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(qt, "$1"), 
            d = (St.test(o) ? "&" : "?") + "_=" + Tt++ + d), h.url = o + d), h.ifModified && (de.lastModified[o] && T.setRequestHeader("If-Modified-Since", de.lastModified[o]), 
            de.etag[o] && T.setRequestHeader("If-None-Match", de.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), 
            T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(v, T, h) || c)) return T.abort();
            if (C = "abort", y.add(h.complete), T.done(h.success), T.fail(h.error), i = Y(Mt, h, n, T)) {
                if (T.readyState = 1, f && g.trigger("ajaxSend", [ T, h ]), c) return T;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, i.send(b, r);
                } catch (e) {
                    if (c) throw e;
                    r(-1, e);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return de.get(e, void 0, t, "script");
        }
    }), de.each([ "get", "post" ], function(e, t) {
        de[t] = function(e, n, r, i) {
            return de.isFunction(n) && (i = i || r, r = n, n = void 0), de.ajax(de.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, de.isPlainObject(e) && e));
        };
    }), de._evalUrl = function(e) {
        return de.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, de.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (de.isFunction(e) && (e = e.call(this[0])), t = de(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return de.isFunction(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = de(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = de.isFunction(e);
            return this.each(function(n) {
                de(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                de(this).replaceWith(this.childNodes);
            }), this;
        }
    }), de.expr.pseudos.hidden = function(e) {
        return !de.expr.pseudos.visible(e);
    }, de.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, de.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var Rt = {
        0: 200,
        1223: 204
    }, It = de.ajaxSettings.xhr();
    pe.cors = !!It && "withCredentials" in It, pe.ajax = It = !!It, de.ajaxTransport(function(t) {
        var n, r;
        if (pe.cors || It && !t.crossDomain) return {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Rt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r();
                    });
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), de.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e), e;
            }
        }
    }), de.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), de.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = de("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                    }), te.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Bt = [], _t = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || de.expando + "_" + Tt++;
            return this[e] = !0, e;
        }
    }), de.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = de.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(_t, "$1" + i) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
        t.converters["script json"] = function() {
            return s || de.error(i + " was not called"), s[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments;
        }, r.always(function() {
            void 0 === o ? de(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
            Bt.push(i)), s && de.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script";
    }), pe.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), de.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (pe.createHTMLDocument ? ((r = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href, 
        t.head.appendChild(r)) : t = te), i = Ce.exec(e), o = !n && [], i ? [ t.createElement(i[1]) ] : (i = b([ e ], t, o), 
        o && o.length && de(o).remove(), de.merge([], i.childNodes));
    }, de.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        return a > -1 && (r = U(e.slice(a)), e = e.slice(0, a)), de.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (i = "POST"), 
        s.length > 0 && de.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? de("<div>").append(de.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, de.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), de.expr.pseudos.animated = function(e) {
        return de.grep(de.timers, function(t) {
            return e === t.elem;
        }).length;
    }, de.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = de.css(e, "position"), c = de(e), f = {};
            "static" === l && (e.style.position = "relative"), a = c.offset(), o = de.css(e, "top"), 
            u = de.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (s = (r = c.position()).top, 
            i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), de.isFunction(t) && (t = t.call(e, n, de.extend({}, a))), 
            null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), 
            "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, de.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                de.offset.setOffset(this, e, t);
            });
            var t, n, r, i, o = this[0];
            if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, 
            n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === de.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + de.css(e[0], "borderTopWidth", !0),
                    left: r.left + de.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - de.css(n, "marginTop", !0),
                    left: t.left - r.left - de.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === de.css(e, "position"); ) e = e.offsetParent;
                return e || Ge;
            });
        }
    }), de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        de.fn[e] = function(r) {
            return qe(this, function(e, r, i) {
                var o;
                if (de.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), de.each([ "top", "left" ], function(e, t) {
        de.cssHooks[t] = H(pe.pixelPosition, function(e, n) {
            if (n) return n = L(e, t), it.test(n) ? de(e).position()[t] + "px" : n;
        });
    }), de.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        de.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            de.fn[r] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i), a = n || (!0 === i || !0 === o ? "margin" : "border");
                return qe(this, function(t, n, i) {
                    var o;
                    return de.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? de.css(t, n, a) : de.style(t, n, i, a);
                }, t, s ? i : void 0, s);
            };
        });
    }), de.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), de.holdReady = function(e) {
        e ? de.readyWait++ : de.ready(!0);
    }, de.isArray = Array.isArray, de.parseJSON = JSON.parse, de.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return de;
    });
    var zt = e.jQuery, Xt = e.$;
    return de.noConflict = function(t) {
        return e.$ === de && (e.$ = Xt), t && e.jQuery === de && (e.jQuery = zt), de;
    }, t || (e.jQuery = e.$ = de), de;
}), function(e) {
    var t;
    t = {
        slippryWrapper: '<div class="sy-box" />',
        slideWrapper: '<div class="sy-slides-wrap" />',
        slideCrop: '<div class="sy-slides-crop" />',
        boxClass: "sy-list",
        elements: "li",
        activeClass: "sy-active",
        fillerClass: "sy-filler",
        loadingClass: "sy-loading",
        adaptiveHeight: !1,
        start: 1,
        loop: !0,
        captionsSrc: "img",
        captions: !1,
        captionsEl: ".sy-caption",
        initSingle: !0,
        responsive: !0,
        preload: "visible",
        pager: !1,
        pagerClass: "sy-pager",
        controls: !1,
        controlClass: "sy-controls",
        prevClass: "sy-prev",
        prevText: "Previous",
        nextClass: "sy-next",
        nextText: "Next",
        hideOnEnd: !0,
        transition: "vertical",
        kenZoom: 120,
        slideMargin: 0,
        transClass: "transition",
        speed: 1200,
        easing: "swing",
        continuous: !0,
        useCSS: !0,
        auto: !0,
        autoDirection: "next",
        autoHover: !0,
        autoHoverDelay: 100,
        autoDelay: 500,
        pause: 4e3,
        onSliderLoad: function() {
            return this;
        },
        onSlideBefore: function() {
            return this;
        },
        onSlideAfter: function() {
            return this;
        }
    }, e.fn.slippry = function(n) {
        var r, i, o, s, a, u, l, c, f, p, d, h, v, g, m, y, x, b, w, C, T, S, k, E;
        return 0 === (i = this).length ? this : i.length > 1 ? (i.each(function() {
            e(this).slippry(n);
        }), this) : (r = {}, r.vars = {}, d = function() {
            var e, t, n;
            t = document.createElement("div"), n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                MSTransition: "msTransitionEnd",
                OTransition: "oTransitionEnd",
                transition: "transitionEnd transitionend"
            };
            for (e in n) if (void 0 !== t.style[e]) return n[e];
        }, C = function() {
            var e = document.createElement("div"), t = [ "Khtml", "Ms", "O", "Moz", "Webkit" ], n = t.length;
            return function(r) {
                if (r in e.style) return !0;
                for (r = r.replace(/^[a-z]/, function(e) {
                    return e.toUpperCase();
                }); n--; ) if (t[n] + r in e.style) return !0;
                return !1;
            };
        }(), k = function(t, n) {
            var r, i, o, s;
            return r = n.split("."), i = e(t), o = "", s = "", e.each(r, function(e, t) {
                t.indexOf("#") >= 0 ? o += t.replace(/^#/, "") : s += t + " ";
            }), o.length && i.attr("id", o), s.length && i.attr("class", e.trim(s)), i;
        }, E = function() {
            var e, t, n, i;
            n = {}, i = {}, e = 100 - r.settings.kenZoom, i.width = r.settings.kenZoom + "%", 
            r.vars.active.index() % 2 == 0 ? (i.left = e + "%", i.top = e + "%", n.left = "0%", 
            n.top = "0%") : (i.left = "0%", i.top = "0%", n.left = e + "%", n.top = e + "%"), 
            t = r.settings.pause + 2 * r.settings.speed, r.vars.active.css(i), r.vars.active.animate(n, {
                duration: t,
                easing: r.settings.easing,
                queue: !1
            });
        }, f = function() {
            r.vars.fresh ? (r.vars.slippryWrapper.removeClass(r.settings.loadingClass), r.vars.fresh = !1, 
            r.settings.auto && i.startAuto(), r.settings.useCSS || "kenburns" !== r.settings.transition || E(), 
            r.settings.onSliderLoad.call(void 0, r.vars.active.index())) : e("." + r.settings.fillerClass, r.vars.slideWrapper).addClass("ready");
        }, g = function(t, n) {
            var i;
            i = 1 / (t / n) * 100 + "%", e("." + r.settings.fillerClass, r.vars.slideWrapper).css({
                paddingTop: i
            }), f();
        }, s = function(t) {
            var n, r;
            void 0 !== e("img", t).attr("src") ? e("<img />").on("load", function() {
                n = t.width(), r = t.height(), g(n, r);
            }).attr("src", e("img", t).attr("src")) : (n = t.width(), r = t.height(), g(n, r));
        }, o = function() {
            if (0 === e("." + r.settings.fillerClass, r.vars.slideWrapper).length && r.vars.slideWrapper.append(e('<div class="' + r.settings.fillerClass + '" />')), 
            !0 === r.settings.adaptiveHeight) s(e("." + r.settings.activeClass, i)); else {
                var t, n, o;
                n = 0, o = 0, e(r.vars.slides).each(function() {
                    e(this).height() > n && (t = e(this), n = t.height()), (o += 1) === r.vars.count && (void 0 === t && (t = e(e(r.vars.slides)[0])), 
                    s(t));
                });
            }
        }, v = function() {
            r.settings.pager && (e("." + r.settings.pagerClass + " li", r.vars.slippryWrapper).removeClass(r.settings.activeClass), 
            e(e("." + r.settings.pagerClass + " li", r.vars.slippryWrapper)[r.vars.active.index()]).addClass(r.settings.activeClass));
        }, b = function() {
            !r.settings.loop && r.settings.hideOnEnd && (e("." + r.settings.prevClass, r.vars.slippryWrapper)[r.vars.first ? "hide" : "show"](), 
            e("." + r.settings.nextClass, r.vars.slippryWrapper)[r.vars.last ? "hide" : "show"]());
        }, u = function() {
            var t, n;
            !1 !== r.settings.captions && (t = "img" !== r.settings.captionsSrc ? r.vars.active.attr("title") : void 0 !== e("img", r.vars.active).attr("title") ? e("img", r.vars.active).attr("title") : e("img", r.vars.active).attr("alt"), 
            n = "custom" !== r.settings.captions ? e(r.settings.captionsEl, r.vars.slippryWrapper) : e(r.settings.captionsEl), 
            void 0 !== t && "" !== t ? n.html(t).show() : n.hide());
        }, i.startAuto = function() {
            void 0 === r.vars.timer && void 0 === r.vars.delay && (r.vars.delay = window.setTimeout(function() {
                r.vars.autodelay = !1, r.vars.timer = window.setInterval(function() {
                    r.vars.trigger = "auto", x(r.settings.autoDirection);
                }, r.settings.pause);
            }, r.vars.autodelay ? r.settings.autoHoverDelay : r.settings.autoDelay), r.settings.autoHover && r.vars.slideWrapper.unbind("mouseenter").unbind("mouseleave").bind("mouseenter", function() {
                void 0 !== r.vars.timer ? (r.vars.hoverStop = !0, i.stopAuto()) : r.vars.hoverStop = !1;
            }).bind("mouseleave", function() {
                r.vars.hoverStop && (r.vars.autodelay = !0, i.startAuto());
            }));
        }, i.stopAuto = function() {
            window.clearInterval(r.vars.timer), r.vars.timer = void 0, window.clearTimeout(r.vars.delay), 
            r.vars.delay = void 0;
        }, i.refresh = function() {
            r.vars.slides.removeClass(r.settings.activeClass), r.vars.active.addClass(r.settings.activeClass), 
            r.settings.responsive ? o() : f(), b(), v(), u();
        }, y = function() {
            i.refresh();
        }, p = function() {
            r.vars.moving = !1, r.vars.active.removeClass(r.settings.transClass), r.vars.fresh || r.vars.old.removeClass("sy-ken"), 
            r.vars.old.removeClass(r.settings.transClass), r.settings.onSlideAfter.call(void 0, r.vars.active, r.vars.old.index(), r.vars.active.index()), 
            r.settings.auto && (r.vars.hoverStop && void 0 !== r.vars.hoverStop || i.startAuto());
        }, m = function() {
            var t, n, o, s, a, u, l;
            r.settings.onSlideBefore.call(void 0, r.vars.active, r.vars.old.index(), r.vars.active.index()), 
            !1 !== r.settings.transition ? (r.vars.moving = !0, "fade" === r.settings.transition || "kenburns" === r.settings.transition ? (r.vars.fresh ? (r.settings.useCSS ? r.vars.slides.css({
                transitionDuration: r.settings.speed + "ms",
                opacity: 0
            }) : r.vars.slides.css({
                opacity: 0
            }), r.vars.active.css("opacity", 1), "kenburns" === r.settings.transition && r.settings.useCSS && (a = r.settings.pause + 2 * r.settings.speed, 
            r.vars.slides.css({
                animationDuration: a + "ms"
            }), r.vars.active.addClass("sy-ken")), p()) : r.settings.useCSS ? (r.vars.old.addClass(r.settings.transClass).css("opacity", 0), 
            r.vars.active.addClass(r.settings.transClass).css("opacity", 1), "kenburns" === r.settings.transition && r.vars.active.addClass("sy-ken"), 
            e(window).off("focus").on("focus", function() {
                r.vars.moving && r.vars.old.trigger(r.vars.transition);
            }), r.vars.old.one(r.vars.transition, function() {
                return p(), this;
            })) : ("kenburns" === r.settings.transition && E(), r.vars.old.addClass(r.settings.transClass).animate({
                opacity: 0
            }, r.settings.speed, r.settings.easing, function() {
                p();
            }), r.vars.active.addClass(r.settings.transClass).css("opacity", 0).animate({
                opacity: 1
            }, r.settings.speed, r.settings.easing)), y()) : "horizontal" !== r.settings.transition && "vertical" !== r.settings.transition || (u = "horizontal" === r.settings.transition ? "left" : "top", 
            t = "-" + r.vars.active.index() * (100 + r.settings.slideMargin) + "%", r.vars.fresh ? (i.css(u, t), 
            p()) : (l = {}, r.settings.continuous && (!r.vars.jump || "controls" !== r.vars.trigger && "auto" !== r.vars.trigger || (n = !0, 
            s = t, r.vars.first ? (o = 0, r.vars.active.css(u, r.vars.count * (100 + r.settings.slideMargin) + "%"), 
            t = "-" + r.vars.count * (100 + r.settings.slideMargin) + "%") : (o = (r.vars.count - 1) * (100 + r.settings.slideMargin) + "%", 
            r.vars.active.css(u, -(100 + r.settings.slideMargin) + "%"), t = 100 + r.settings.slideMargin + "%"))), 
            r.vars.active.addClass(r.settings.transClass), r.settings.useCSS ? (l[u] = t, l.transitionDuration = r.settings.speed + "ms", 
            i.addClass(r.settings.transition), i.css(l), e(window).off("focus").on("focus", function() {
                r.vars.moving && i.trigger(r.vars.transition);
            }), i.one(r.vars.transition, function() {
                return i.removeClass(r.settings.transition), n && (r.vars.active.css(u, o), l[u] = s, 
                l.transitionDuration = "0ms", i.css(l)), p(), this;
            })) : (l[u] = t, i.stop().animate(l, r.settings.speed, r.settings.easing, function() {
                return n && (r.vars.active.css(u, o), i.css(u, s)), p(), this;
            }))), y())) : (y(), p());
        }, w = function(e) {
            r.vars.first = r.vars.last = !1, "prev" === e || 0 === e ? r.vars.first = !0 : "next" !== e && e !== r.vars.count - 1 || (r.vars.last = !0);
        }, x = function(t) {
            var n, o;
            r.vars.moving || ("auto" !== r.vars.trigger && i.stopAuto(), n = r.vars.active.index(), 
            "prev" === t ? (o = t, n > 0 ? t = n - 1 : r.settings.loop && (t = r.vars.count - 1)) : "next" === t ? (o = t, 
            n < r.vars.count - 1 ? t = n + 1 : r.settings.loop && (t = 0)) : o = (t -= 1) < n ? "prev" : "next", 
            r.vars.jump = !1, "prev" === t || "next" === t || t === n && !r.vars.fresh || (w(t), 
            r.vars.old = r.vars.active, r.vars.active = e(r.vars.slides[t]), (0 === n && "prev" === o || n === r.vars.count - 1 && "next" === o) && (r.vars.jump = !0), 
            m()));
        }, i.goToSlide = function(e) {
            r.vars.trigger = "external", x(e);
        }, i.goToNextSlide = function() {
            r.vars.trigger = "external", x("next");
        }, i.goToPrevSlide = function() {
            r.vars.trigger = "external", x("prev");
        }, l = function() {
            if (r.settings.pager && r.vars.count > 1) {
                var t, n, i;
                for (t = r.vars.slides.length, i = e('<ul class="' + r.settings.pagerClass + '" />'), 
                n = 1; n < t + 1; n += 1) i.append(e("<li />").append(e('<a href="#' + n + '">' + n + "</a>")));
                r.vars.slippryWrapper.append(i), e("." + r.settings.pagerClass + " a", r.vars.slippryWrapper).click(function() {
                    return r.vars.trigger = "pager", x(parseInt(this.hash.split("#")[1], 10)), !1;
                }), v();
            }
        }, c = function() {
            r.settings.controls && r.vars.count > 1 && (r.vars.slideWrapper.append(e('<ul class="' + r.settings.controlClass + '" />').append('<li class="' + r.settings.prevClass + '"><a href="#prev">' + r.settings.prevText + "</a></li>").append('<li class="' + r.settings.nextClass + '"><a href="#next">' + r.settings.nextText + "</a></li>")), 
            e("." + r.settings.controlClass + " a", r.vars.slippryWrapper).click(function() {
                return r.vars.trigger = "controls", x(this.hash.split("#")[1]), !1;
            }), b());
        }, h = function() {
            !1 !== r.settings.captions && ("overlay" === r.settings.captions ? r.vars.slideWrapper.append(e('<div class="sy-caption-wrap" />').html(k("<div />", r.settings.captionsEl))) : "below" === r.settings.captions && r.vars.slippryWrapper.append(e('<div class="sy-caption-wrap" />').html(k("<div />", r.settings.captionsEl))));
        }, S = function() {
            x(r.vars.active.index() + 1);
        }, T = function(t) {
            var n, i, o, s;
            s = "all" === r.settings.preload ? t : r.vars.active, o = e("img, iframe", s), 0 !== (n = o.length) ? (i = 0, 
            o.each(function() {
                e(this).one("load error", function() {
                    ++i === n && S();
                }).each(function() {
                    this.complete && e(this).trigger("load");
                });
            })) : S();
        }, i.getCurrentSlide = function() {
            return r.vars.active;
        }, i.getSlideCount = function() {
            return r.vars.count;
        }, i.destroySlider = function() {
            !1 === r.vars.fresh && (i.stopAuto(), r.vars.moving = !1, r.vars.slides.each(function() {
                void 0 !== e(this).data("sy-cssBckup") ? e(this).attr("style", e(this).data("sy-cssBckup")) : e(this).removeAttr("style"), 
                void 0 !== e(this).data("sy-classBckup") ? e(this).attr("class", e(this).data("sy-classBckup")) : e(this).removeAttr("class");
            }), void 0 !== i.data("sy-cssBckup") ? i.attr("style", i.data("sy-cssBckup")) : i.removeAttr("style"), 
            void 0 !== i.data("sy-classBckup") ? i.attr("class", i.data("sy-classBckup")) : i.removeAttr("class"), 
            r.vars.slippryWrapper.before(i), r.vars.slippryWrapper.remove(), r.vars.fresh = void 0);
        }, i.reloadSlider = function() {
            i.destroySlider(), a();
        }, (a = function() {
            var o;
            if (r.settings = e.extend({}, t, n), r.vars.slides = e(r.settings.elements, i), 
            r.vars.count = r.vars.slides.length, r.settings.useCSS && (C("transition") || (r.settings.useCSS = !1), 
            r.vars.transition = d()), i.data("sy-cssBckup", i.attr("style")), i.data("sy-classBackup", i.attr("class")), 
            i.addClass(r.settings.boxClass).wrap(r.settings.slippryWrapper).wrap(r.settings.slideWrapper).wrap(r.settings.slideCrop), 
            r.vars.slideWrapper = i.parent().parent(), r.vars.slippryWrapper = r.vars.slideWrapper.parent().addClass(r.settings.loadingClass), 
            r.vars.fresh = !0, r.vars.slides.each(function() {
                e(this).addClass("sy-slide " + r.settings.transition), r.settings.useCSS && e(this).addClass("useCSS"), 
                "horizontal" === r.settings.transition ? e(this).css("left", e(this).index() * (100 + r.settings.slideMargin) + "%") : "vertical" === r.settings.transition && e(this).css("top", e(this).index() * (100 + r.settings.slideMargin) + "%");
            }), !(r.vars.count > 1 || r.settings.initSingle)) return this;
            -1 === e("." + r.settings.activeClass, i).index() ? (o = "random" === r.settings.start ? Math.round(Math.random() * (r.vars.count - 1)) : r.settings.start > 0 && r.settings.start <= r.vars.count ? r.settings.start - 1 : 0, 
            r.vars.active = e(r.vars.slides[o]).addClass(r.settings.activeClass)) : r.vars.active = e("." + r.settings.activeClass, i), 
            c(), l(), h(), T(r.vars.slides);
        })(), this);
    };
}(jQuery), $(document).ready(function() {
    $(".hamburger__close").hide(), $(".menu").hide(), $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide(), $(".hamburger__close").show();
        });
    }), $(".hamburger__close").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger__close").hide(), $(".hamburger").show();
        });
    }), jQuery("selector").slippry(), $(function() {
        var e = $("#home-img").slippry({});
        $(".stop").click(function() {
            e.stopAuto();
        }), $(".start").click(function() {
            e.startAuto();
        }), $(".prev").click(function() {
            return e.goToPrevSlide(), !1;
        }), $(".next").click(function() {
            return e.goToNextSlide(), !1;
        }), $(".reset").click(function() {
            return e.destroySlider(), !1;
        }), $(".reload").click(function() {
            return e.reloadSlider(), !1;
        }), $(".init").click(function() {
            return e = $("#home-img").slippry(), !1;
        });
    });
}), function(e, t, n, r, i, o, s) {
    e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
        (e[i].q = e[i].q || []).push(arguments);
    }, e[i].l = 1 * new Date(), o = t.createElement(n), s = t.getElementsByTagName(n)[0], 
    o.async = 1, o.src = "https://www.google-analytics.com/analytics.js", s.parentNode.insertBefore(o, s);
}(window, document, "script", 0, "ga"), ga("create", "UA-104388629-2", "auto"), 
ga("send", "pageview");
//# sourceMappingURL=main-min.js.map