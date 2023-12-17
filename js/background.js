(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/"),
    r((r.s = 1));
})({
  "00ee": function (e, t, r) {
    var n = r("b622"),
      o = n("toStringTag"),
      a = {};
    (a[o] = "z"), (e.exports = "[object z]" === String(a));
  },
  "0366": function (e, t, r) {
    var n = r("e330"),
      o = r("59ed"),
      a = r("40d5"),
      s = n(n.bind);
    e.exports = function (e, t) {
      return (
        o(e),
        void 0 === t
          ? e
          : a
          ? s(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    };
  },
  "06cf": function (e, t, r) {
    var n = r("83ab"),
      o = r("c65b"),
      a = r("d1e7"),
      s = r("5c6c"),
      i = r("fc6a"),
      c = r("a04b"),
      u = r("1a2d"),
      f = r("0cfb"),
      l = Object.getOwnPropertyDescriptor;
    t.f = n
      ? l
      : function (e, t) {
          if (((e = i(e)), (t = c(t)), f))
            try {
              return l(e, t);
            } catch (r) {}
          if (u(e, t)) return s(!o(a.f, e, t), e[t]);
        };
  },
  "07fa": function (e, t, r) {
    var n = r("50c4");
    e.exports = function (e) {
      return n(e.length);
    };
  },
  "0a06": function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("30b5"),
      a = r("f6b4"),
      s = r("5270"),
      i = r("4a7b"),
      c = r("848b"),
      u = c.validators;
    function f(e) {
      (this.defaults = e),
        (this.interceptors = { request: new a(), response: new a() });
    }
    (f.prototype.request = function (e) {
      "string" === typeof e
        ? ((e = arguments[1] || {}), (e.url = arguments[0]))
        : (e = e || {}),
        (e = i(this.defaults, e)),
        e.method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = e.transitional;
      void 0 !== t &&
        c.assertOptions(
          t,
          {
            silentJSONParsing: u.transitional(u.boolean),
            forcedJSONParsing: u.transitional(u.boolean),
            clarifyTimeoutError: u.transitional(u.boolean),
          },
          !1
        );
      var r = [],
        n = !0;
      this.interceptors.request.forEach(function (t) {
        ("function" === typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
      });
      var o,
        a = [];
      if (
        (this.interceptors.response.forEach(function (e) {
          a.push(e.fulfilled, e.rejected);
        }),
        !n)
      ) {
        var f = [s, void 0];
        Array.prototype.unshift.apply(f, r),
          (f = f.concat(a)),
          (o = Promise.resolve(e));
        while (f.length) o = o.then(f.shift(), f.shift());
        return o;
      }
      var l = e;
      while (r.length) {
        var d = r.shift(),
          p = r.shift();
        try {
          l = d(l);
        } catch (g) {
          p(g);
          break;
        }
      }
      try {
        o = s(l);
      } catch (g) {
        return Promise.reject(g);
      }
      while (a.length) o = o.then(a.shift(), a.shift());
      return o;
    }),
      (f.prototype.getUri = function (e) {
        return (
          (e = i(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        f.prototype[e] = function (t, r) {
          return this.request(
            i(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        f.prototype[e] = function (t, r, n) {
          return this.request(i(n || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = f);
  },
  "0cfb": function (e, t, r) {
    var n = r("83ab"),
      o = r("d039"),
      a = r("cc12");
    e.exports =
      !n &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(a("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  "0d51": function (e, t) {
    var r = String;
    e.exports = function (e) {
      try {
        return r(e);
      } catch (t) {
        return "Object";
      }
    };
  },
  "0df6": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  1: function (e, t, r) {
    e.exports = r("fe77");
  },
  "13d2": function (e, t, r) {
    var n = r("d039"),
      o = r("1626"),
      a = r("1a2d"),
      s = r("83ab"),
      i = r("5e77").CONFIGURABLE,
      c = r("8925"),
      u = r("69f3"),
      f = u.enforce,
      l = u.get,
      d = Object.defineProperty,
      p =
        s &&
        !n(function () {
          return 8 !== d(function () {}, "length", { value: 8 }).length;
        }),
      g = String(String).split("String"),
      m = (e.exports = function (e, t, r) {
        "Symbol(" === String(t).slice(0, 7) &&
          (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          r && r.getter && (t = "get " + t),
          r && r.setter && (t = "set " + t),
          (!a(e, "name") || (i && e.name !== t)) &&
            (s ? d(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          p &&
            r &&
            a(r, "arity") &&
            e.length !== r.arity &&
            d(e, "length", { value: r.arity });
        try {
          r && a(r, "constructor") && r.constructor
            ? s && d(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (o) {}
        var n = f(e);
        return (
          a(n, "source") || (n.source = g.join("string" == typeof t ? t : "")),
          e
        );
      });
    Function.prototype.toString = m(function () {
      return (o(this) && l(this).source) || c(this);
    }, "toString");
  },
  1626: function (e, t) {
    e.exports = function (e) {
      return "function" == typeof e;
    };
  },
  "182d": function (e, t, r) {
    var n = r("f8cd"),
      o = RangeError;
    e.exports = function (e, t) {
      var r = n(e);
      if (r % t) throw o("Wrong offset");
      return r;
    };
  },
  "1a2d": function (e, t, r) {
    var n = r("e330"),
      o = r("7b0b"),
      a = n({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return a(o(e), t);
      };
  },
  "1be4": function (e, t, r) {
    var n = r("d066");
    e.exports = n("document", "documentElement");
  },
  "1d02": function (e, t, r) {
    "use strict";
    var n = r("ebb5"),
      o = r("a258").findLastIndex,
      a = n.aTypedArray,
      s = n.exportTypedArrayMethod;
    s("findLastIndex", function (e) {
      return o(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  "1d2b": function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  "1d80": function (e, t) {
    var r = TypeError;
    e.exports = function (e) {
      if (void 0 == e) throw r("Can't call method on " + e);
      return e;
    };
  },
  "23cb": function (e, t, r) {
    var n = r("5926"),
      o = Math.max,
      a = Math.min;
    e.exports = function (e, t) {
      var r = n(e);
      return r < 0 ? o(r + t, 0) : a(r, t);
    };
  },
  "23e7": function (e, t, r) {
    var n = r("da84"),
      o = r("06cf").f,
      a = r("9112"),
      s = r("cb2d"),
      i = r("6374"),
      c = r("e893"),
      u = r("94ca");
    e.exports = function (e, t) {
      var r,
        f,
        l,
        d,
        p,
        g,
        m = e.target,
        h = e.global,
        b = e.stat;
      if (((f = h ? n : b ? n[m] || i(m, {}) : (n[m] || {}).prototype), f))
        for (l in t) {
          if (
            ((p = t[l]),
            e.dontCallGetSet ? ((g = o(f, l)), (d = g && g.value)) : (d = f[l]),
            (r = u(h ? l : m + (b ? "." : "#") + l, e.forced)),
            !r && void 0 !== d)
          ) {
            if (typeof p == typeof d) continue;
            c(p, d);
          }
          (e.sham || (d && d.sham)) && a(p, "sham", !0), s(f, l, p, e);
        }
    };
  },
  "241c": function (e, t, r) {
    var n = r("ca84"),
      o = r("7839"),
      a = o.concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return n(e, a);
      };
  },
  2444: function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r("c532"),
        o = r("c8af"),
        a = r("387f"),
        s = { "Content-Type": "application/x-www-form-urlencoded" };
      function i(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      function c() {
        var e;
        return (
          ("undefined" !== typeof XMLHttpRequest ||
            ("undefined" !== typeof t &&
              "[object process]" === Object.prototype.toString.call(t))) &&
            (e = r("b50d")),
          e
        );
      }
      function u(e, t, r) {
        if (n.isString(e))
          try {
            return (t || JSON.parse)(e), n.trim(e);
          } catch (o) {
            if ("SyntaxError" !== o.name) throw o;
          }
        return (r || JSON.stringify)(e);
      }
      var f = {
        transitional: {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        adapter: c(),
        transformRequest: [
          function (e, t) {
            return (
              o(t, "Accept"),
              o(t, "Content-Type"),
              n.isFormData(e) ||
              n.isArrayBuffer(e) ||
              n.isBuffer(e) ||
              n.isStream(e) ||
              n.isFile(e) ||
              n.isBlob(e)
                ? e
                : n.isArrayBufferView(e)
                ? e.buffer
                : n.isURLSearchParams(e)
                ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString())
                : n.isObject(e) ||
                  (t && "application/json" === t["Content-Type"])
                ? (i(t, "application/json"), u(e))
                : e
            );
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || f.transitional,
              r = t && t.silentJSONParsing,
              o = t && t.forcedJSONParsing,
              s = !r && "json" === this.responseType;
            if (s || (o && n.isString(e) && e.length))
              try {
                return JSON.parse(e);
              } catch (i) {
                if (s) {
                  if ("SyntaxError" === i.name)
                    throw a(i, this, "E_JSON_PARSE");
                  throw i;
                }
              }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      n.forEach(["delete", "get", "head"], function (e) {
        f.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          f.headers[e] = n.merge(s);
        }),
        (e.exports = f);
    }).call(this, r("4362"));
  },
  "2a36": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return l;
    }),
      r.d(t, "c", function () {
        return d;
      }),
      r.d(t, "a", function () {
        return p;
      }),
      r.d(t, "d", function () {
        return g;
      });
    var n = r("d3ff"),
      o = (r("caad"), r("9845")),
      a = r.n(o),
      s = r("c276"),
      i = r("9a1b");
    function c() {
      function e() {
        return new Promise(function (e, t) {
          u().then((r) => {
            a.a.runtime.lastError
              ? t(a.a.runtime.lastError)
              : i["b"](r).then(e).catch(t);
          });
        });
      }
      return e();
    }
    function u() {
      return new Promise(function (e, t) {
        const r = a.a.runtime.getManifest(),
          { client_id: n, scopes: o } = r.oauth2,
          i = a.a.identity.getRedirectURL(),
          c = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${n}&response_type=token&redirect_uri=${encodeURIComponent(
            i
          )}&scope=${encodeURIComponent(o.join(" "))}`;
        a.a.identity
          .launchWebAuthFlow({ url: c, interactive: !0 })
          .then((r) => {
            if (!r.includes("#")) return t("auth fail");
            r = r.replace("#", "?");
            const { access_token: n } = Object(s["c"])(r);
            e(n);
          });
      });
    }
    const f = "user";
    async function l() {
      const e = await c();
      return await g.set(e), e;
    }
    const d = async () => {
        await g.del();
      },
      p = async () => {
        const e = await g.get();
        return !!e.email;
      },
      g = {
        get: async () => {
          const e = await n["a"](f);
          return JSON.parse(e[f] || "{}");
        },
        set: (e) => n["c"]({ [f]: JSON.stringify(e) }),
        del: () => n["b"](f),
      };
  },
  "2ba4": function (e, t, r) {
    var n = r("40d5"),
      o = Function.prototype,
      a = o.apply,
      s = o.call;
    e.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (n
        ? s.bind(a)
        : function () {
            return s.apply(a, arguments);
          });
  },
  "2d00": function (e, t, r) {
    var n,
      o,
      a = r("da84"),
      s = r("342f"),
      i = a.process,
      c = a.Deno,
      u = (i && i.versions) || (c && c.version),
      f = u && u.v8;
    f && ((n = f.split(".")), (o = n[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]))),
      !o &&
        s &&
        ((n = s.match(/Edge\/(\d+)/)),
        (!n || n[1] >= 74) &&
          ((n = s.match(/Chrome\/(\d+)/)), n && (o = +n[1]))),
      (e.exports = o);
  },
  "2d83": function (e, t, r) {
    "use strict";
    var n = r("387f");
    e.exports = function (e, t, r, o, a) {
      var s = new Error(e);
      return n(s, t, r, o, a);
    };
  },
  "2e67": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  "30b5": function (e, t, r) {
    "use strict";
    var n = r("c532");
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var a;
      if (r) a = r(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var s = [];
        n.forEach(t, function (e, t) {
          null !== e &&
            "undefined" !== typeof e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (a = s.join("&"));
      }
      if (a) {
        var i = e.indexOf("#");
        -1 !== i && (e = e.slice(0, i)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
      }
      return e;
    };
  },
  "342f": function (e, t, r) {
    var n = r("d066");
    e.exports = n("navigator", "userAgent") || "";
  },
  "37e8": function (e, t, r) {
    var n = r("83ab"),
      o = r("aed9"),
      a = r("9bf2"),
      s = r("825a"),
      i = r("fc6a"),
      c = r("df75");
    t.f =
      n && !o
        ? Object.defineProperties
        : function (e, t) {
            s(e);
            var r,
              n = i(t),
              o = c(t),
              u = o.length,
              f = 0;
            while (u > f) a.f(e, (r = o[f++]), n[r]);
            return e;
          };
  },
  "387f": function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        }),
        e
      );
    };
  },
  3934: function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function o(e) {
            var n = e;
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  },
  "3a9b": function (e, t, r) {
    var n = r("e330");
    e.exports = n({}.isPrototypeOf);
  },
  "3bbe": function (e, t, r) {
    var n = r("1626"),
      o = String,
      a = TypeError;
    e.exports = function (e) {
      if ("object" == typeof e || n(e)) return e;
      throw a("Can't set " + o(e) + " as a prototype");
    };
  },
  "3c5d": function (e, t, r) {
    "use strict";
    var n = r("da84"),
      o = r("c65b"),
      a = r("ebb5"),
      s = r("07fa"),
      i = r("182d"),
      c = r("7b0b"),
      u = r("d039"),
      f = n.RangeError,
      l = n.Int8Array,
      d = l && l.prototype,
      p = d && d.set,
      g = a.aTypedArray,
      m = a.exportTypedArrayMethod,
      h = !u(function () {
        var e = new Uint8ClampedArray(2);
        return o(p, e, { length: 1, 0: 3 }, 1), 3 !== e[1];
      }),
      b =
        h &&
        a.NATIVE_ARRAY_BUFFER_VIEWS &&
        u(function () {
          var e = new l(2);
          return e.set(1), e.set("2", 1), 0 !== e[0] || 2 !== e[1];
        });
    m(
      "set",
      function (e) {
        g(this);
        var t = i(arguments.length > 1 ? arguments[1] : void 0, 1),
          r = c(e);
        if (h) return o(p, this, r, t);
        var n = this.length,
          a = s(r),
          u = 0;
        if (a + t > n) throw f("Wrong length");
        while (u < a) this[t + u] = r[u++];
      },
      !h || b
    );
  },
  "40d5": function (e, t, r) {
    var n = r("d039");
    e.exports = !n(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    });
  },
  4362: function (e, t, r) {
    (t.nextTick = function (e) {
      var t = Array.prototype.slice.call(arguments);
      t.shift(),
        setTimeout(function () {
          e.apply(null, t);
        }, 0);
    }),
      (t.platform = t.arch = t.execPath = t.title = "browser"),
      (t.pid = 1),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.binding = function (e) {
        throw new Error("No such module. (Possibly not yet loaded)");
      }),
      (function () {
        var e,
          n = "/";
        (t.cwd = function () {
          return n;
        }),
          (t.chdir = function (t) {
            e || (e = r("df7c")), (n = e.resolve(t, n));
          });
      })(),
      (t.exit =
        t.kill =
        t.umask =
        t.dlopen =
        t.uptime =
        t.memoryUsage =
        t.uvCounters =
          function () {}),
      (t.features = {});
  },
  "44ad": function (e, t, r) {
    var n = r("e330"),
      o = r("d039"),
      a = r("c6b6"),
      s = Object,
      i = n("".split);
    e.exports = o(function () {
      return !s("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == a(e) ? i(e, "") : s(e);
        }
      : s;
  },
  "44d2": function (e, t, r) {
    var n = r("b622"),
      o = r("7c73"),
      a = r("9bf2").f,
      s = n("unscopables"),
      i = Array.prototype;
    void 0 == i[s] && a(i, s, { configurable: !0, value: o(null) }),
      (e.exports = function (e) {
        i[s][e] = !0;
      });
  },
  "467f": function (e, t, r) {
    "use strict";
    var n = r("2d83");
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      r.status && o && !o(r.status)
        ? t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          )
        : e(r);
    };
  },
  "485a": function (e, t, r) {
    var n = r("c65b"),
      o = r("1626"),
      a = r("861d"),
      s = TypeError;
    e.exports = function (e, t) {
      var r, i;
      if ("string" === t && o((r = e.toString)) && !a((i = n(r, e)))) return i;
      if (o((r = e.valueOf)) && !a((i = n(r, e)))) return i;
      if ("string" !== t && o((r = e.toString)) && !a((i = n(r, e)))) return i;
      throw s("Can't convert object to primitive value");
    };
  },
  4930: function (e, t, r) {
    var n = r("2d00"),
      o = r("d039");
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && n && n < 41)
        );
      });
  },
  "4a7b": function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = function (e, t) {
      t = t || {};
      var r = {};
      function o(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
          ? n.merge({}, t)
          : n.isArray(t)
          ? t.slice()
          : t;
      }
      function a(r) {
        return n.isUndefined(t[r])
          ? n.isUndefined(e[r])
            ? void 0
            : o(void 0, e[r])
          : o(e[r], t[r]);
      }
      function s(e) {
        if (!n.isUndefined(t[e])) return o(void 0, t[e]);
      }
      function i(r) {
        return n.isUndefined(t[r])
          ? n.isUndefined(e[r])
            ? void 0
            : o(void 0, e[r])
          : o(void 0, t[r]);
      }
      function c(r) {
        return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
      }
      var u = {
        url: s,
        method: s,
        data: s,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: c,
      };
      return (
        n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = u[e] || a,
            o = t(e);
          (n.isUndefined(o) && t !== c) || (r[e] = o);
        }),
        r
      );
    };
  },
  "4d64": function (e, t, r) {
    var n = r("fc6a"),
      o = r("23cb"),
      a = r("07fa"),
      s = function (e) {
        return function (t, r, s) {
          var i,
            c = n(t),
            u = a(c),
            f = o(s, u);
          if (e && r != r) {
            while (u > f) if (((i = c[f++]), i != i)) return !0;
          } else
            for (; u > f; f++)
              if ((e || f in c) && c[f] === r) return e || f || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: s(!0), indexOf: s(!1) };
  },
  "50c4": function (e, t, r) {
    var n = r("5926"),
      o = Math.min;
    e.exports = function (e) {
      return e > 0 ? o(n(e), 9007199254740991) : 0;
    };
  },
  5270: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("c401"),
      a = r("2e67"),
      s = r("2444"),
      i = r("7a77");
    function c(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new i("canceled");
    }
    e.exports = function (e) {
      c(e),
        (e.headers = e.headers || {}),
        (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        );
      var t = e.adapter || s.adapter;
      return t(e).then(
        function (t) {
          return (
            c(e),
            (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
            t
          );
        },
        function (t) {
          return (
            a(t) ||
              (c(e),
              t &&
                t.response &&
                (t.response.data = o.call(
                  e,
                  t.response.data,
                  t.response.headers,
                  e.transformResponse
                ))),
            Promise.reject(t)
          );
        }
      );
    };
  },
  5692: function (e, t, r) {
    var n = r("c430"),
      o = r("c6cd");
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.24.0",
      mode: n ? "pure" : "global",
      copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.24.0/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  },
  "56ef": function (e, t, r) {
    var n = r("d066"),
      o = r("e330"),
      a = r("241c"),
      s = r("7418"),
      i = r("825a"),
      c = o([].concat);
    e.exports =
      n("Reflect", "ownKeys") ||
      function (e) {
        var t = a.f(i(e)),
          r = s.f;
        return r ? c(t, r(e)) : t;
      };
  },
  "577e": function (e, t, r) {
    var n = r("f5df"),
      o = String;
    e.exports = function (e) {
      if ("Symbol" === n(e))
        throw TypeError("Cannot convert a Symbol value to a string");
      return o(e);
    };
  },
  5926: function (e, t, r) {
    var n = r("b42e");
    e.exports = function (e) {
      var t = +e;
      return t !== t || 0 === t ? 0 : n(t);
    };
  },
  "59ed": function (e, t, r) {
    var n = r("1626"),
      o = r("0d51"),
      a = TypeError;
    e.exports = function (e) {
      if (n(e)) return e;
      throw a(o(e) + " is not a function");
    };
  },
  "5c6c": function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  "5cce": function (e, t) {
    e.exports = { version: "0.24.0" };
  },
  "5e77": function (e, t, r) {
    var n = r("83ab"),
      o = r("1a2d"),
      a = Function.prototype,
      s = n && Object.getOwnPropertyDescriptor,
      i = o(a, "name"),
      c = i && "something" === function () {}.name,
      u = i && (!n || (n && s(a, "name").configurable));
    e.exports = { EXISTS: i, PROPER: c, CONFIGURABLE: u };
  },
  "5f02": function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return "object" === typeof e && !0 === e.isAxiosError;
    };
  },
  6374: function (e, t, r) {
    var n = r("da84"),
      o = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        o(n, e, { value: t, configurable: !0, writable: !0 });
      } catch (r) {
        n[e] = t;
      }
      return t;
    };
  },
  "69f3": function (e, t, r) {
    var n,
      o,
      a,
      s = r("7f9a"),
      i = r("da84"),
      c = r("e330"),
      u = r("861d"),
      f = r("9112"),
      l = r("1a2d"),
      d = r("c6cd"),
      p = r("f772"),
      g = r("d012"),
      m = "Object already initialized",
      h = i.TypeError,
      b = i.WeakMap,
      y = function (e) {
        return a(e) ? o(e) : n(e, {});
      },
      A = function (e) {
        return function (t) {
          var r;
          if (!u(t) || (r = o(t)).type !== e)
            throw h("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    if (s || d.state) {
      var v = d.state || (d.state = new b()),
        _ = c(v.get),
        x = c(v.has),
        w = c(v.set);
      (n = function (e, t) {
        if (x(v, e)) throw new h(m);
        return (t.facade = e), w(v, e, t), t;
      }),
        (o = function (e) {
          return _(v, e) || {};
        }),
        (a = function (e) {
          return x(v, e);
        });
    } else {
      var k = p("state");
      (g[k] = !0),
        (n = function (e, t) {
          if (l(e, k)) throw new h(m);
          return (t.facade = e), f(e, k, t), t;
        }),
        (o = function (e) {
          return l(e, k) ? e[k] : {};
        }),
        (a = function (e) {
          return l(e, k);
        });
    }
    e.exports = { set: n, get: o, has: a, enforce: y, getterFor: A };
  },
  "6bc9": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return s;
    }),
      r.d(t, "b", function () {
        return i;
      }),
      r.d(t, "d", function () {
        return c;
      }),
      r.d(t, "c", function () {
        return f;
      });
    r("d9e2"), r("caad");
    var n = r("d3ff"),
      o = r("c276");
    const a = "https://graph.facebook.com/",
      s = () => l("me?fields=id"),
      i = (e) => l("?id=" + e),
      c = async (e) => {
        const {
          fb_user_id: t,
          fb_dtsg: r,
          jazoest: o,
          fb_rev: a,
        } = await n["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]);
        let s = [];
        for (const n of e) {
          let e = new FormData();
          e.append("upload_1024", n);
          const i = `https://upload.facebook.com/ajax/mercury/upload.php?request_user_id=${t}&__user=${t}&__a=1&__req=3d&__be=1&dpr=1.5&__rev=${a}&__s=%3Aidl0z4%3A9y9r1n&fb_dtsg=${r}&jazoest=${o}&__spin_r=${a}&__spin_b=trunk`,
            c = await fetch(i, {
              method: "POST",
              mode: "cors",
              credentials: "include",
              body: e,
            }),
            u = await c.text(),
            f = d(u),
            l = f.payload.metadata[0].fbid;
          s.push(l);
        }
        return s;
      };
    async function u(e) {
      const {
          fb_user_id: t,
          fb_dtsg: r,
          fb_rev: o,
        } = await n["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]),
        a = `image_height=960&image_width=960&uri=${e}&__user=${t}&fb_dtsg=${r}&__rev=${o}&__a=1&__dyn=7AmajEzUGByA5Q9UoHaEWC5ER6yUmyVbGAEG8zCC-C26m6oDAyoS2N6wAxu13wFG2KfgjyR88wPGiex3BKuEjKeCxicxabwTz9VobrCCyWCzEbeuifz8lUlwnoCium8yUgx66EK78vDx2r_xLgWmmu5Ww`,
        s = "https://www.facebook.com/message_share_attachment/fromURI/",
        i = await p(a, s, "text"),
        c = d(i);
      if (!c.payload) throw new Error("Invalid url");
      return c.payload.share_data;
    }
    const f = async (e, t, r = []) => {
      const {
          fb_user_id: a,
          fb_dtsg: s,
          jazoest: i,
          fb_rev: c,
        } = await n["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]),
        f = Math.floor(1e14 * Math.random()) + 1,
        l = r.length > 0;
      let g = [];
      l &&
        r.forEach((e, t) => {
          g.push(`image_ids[${t}]=${e}`);
        }),
        (g = g.join("&")),
        g.length > 0 && (g = "&" + g);
      let m = !1,
        h = [];
      if (Object(o["e"])(t)) {
        const e = await u(t),
          { share_type: r, share_params: n } = e;
        h.push("shareable_attachment[share_type]=" + r);
        for (const t of Object.keys(n)) {
          const e = n[t];
          if (e)
            if (null == e) h.push(`shareable_attachment[share_params][${t}]=`);
            else if ("object" === typeof e)
              if (Array.isArray(e)) {
                if (e.length > 0) {
                  var b = 0;
                  for (const r of e)
                    r &&
                      (h.push(
                        `shareable_attachment[share_params][${t}][${b}]=${encodeURIComponent(
                          r
                        )}`
                      ),
                      b++);
                }
              } else
                for (const r of Object.keys(e)) {
                  const n = e[r];
                  if (Array.isArray(n)) {
                    var y = 0;
                    for (const e of n)
                      e &&
                        (h.push(
                          `shareable_attachment[share_params][${t}][${r}][${y}]=${encodeURIComponent(
                            e
                          )}`
                        ),
                        y++);
                  } else
                    n &&
                      h.push(
                        `shareable_attachment[share_params][${t}][${r}]=${encodeURIComponent(
                          n
                        )}`
                      );
                }
            else
              e &&
                h.push(
                  `shareable_attachment[share_params][${t}]=${encodeURIComponent(
                    e
                  )}`
                );
        }
        m = !0;
      }
      (h = h.join("&")), h.length > 0 && (h = "&" + h);
      let A = "&body=" + encodeURIComponent(t);
      console.log("A", A);
      console.log("t", t);
      alert("A");
      const v = await p(
        `client=mercury&action_type=ma-type%3Auser-generated-message${A}&has_attachment=${
          l || m ? "true" : "false"
        }${h}${g}&ephemeral_ttl_mode=0&message_id=${f}&offline_threading_id=${f}&other_user_fbid=${e}&source=source:chat:web&specific_to_list[0]=fbid%3A${e}&specific_to_list[1]=fbid%3A${a}&timestamp=1564061116109&request_user_id=${a}&__user=${a}&__a=1&__req=1n&__be=1&dpr=1.5&__rev=${c}&__s=%3A38ai1u%3Amxgv29&fb_dtsg=${s}&jazoest=${i}&ui_push_phase=c3&__spin_r=${c}&__spin_b=trunk`,
        "https://www.facebook.com/messaging/send/",
        "text"
      );
      return d(v);
    };
    async function l(e, t = null) {
      const { fb_access_token: r } = await n["a"]("fb_access_token");
      let o = `${a}${e}`;
      const s = o.includes("?") ? "&" : "?";
      o = `${o}${s}access_token=${t || r}`;
      const i = await fetch(o);
      if (200 !== i.status) throw new Error("network err: " + i.status);
      const c = await i.json();
      return c;
    }
    function d(e) {
      e = e.replace("for (;;);", "");
      const t = JSON.parse(e);
      if ("1404102" === t.error)
        throw new Error(
          "Since the link you put on Facebook is seen as spam, please check your account on Facebook.com."
        );
      if (t.errorDescription)
        throw new Error(t.errorDescription.__html || t.errorDescription);
      return t;
    }
    async function p(e, t, r = "json") {
      const n = await fetch(t || "https://www.facebook.com/api/graphql/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        credentials: "include",
        body: e,
      });
      return "json" === r ? await n.json() : await n.text();
    }
  },
  7156: function (e, t, r) {
    var n = r("1626"),
      o = r("861d"),
      a = r("d2bb");
    e.exports = function (e, t, r) {
      var s, i;
      return (
        a &&
          n((s = t.constructor)) &&
          s !== r &&
          o((i = s.prototype)) &&
          i !== r.prototype &&
          a(e, i),
        e
      );
    };
  },
  7418: function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  "77d9": function (e, t, r) {
    r("1d02");
  },
  7839: function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  7868: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    }),
      r.d(t, "b", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return c;
      });
    var n = r("9845"),
      o = r.n(n);
    const a = { LOGIN: "LOGIN", RESP_LOGIN: "RESP_LOGIN" };
    let s = {};
    function i(e, t) {
      (s[e] = s[e] || []), s[e].push(t);
    }
    function c(e, t, r) {
      o.a.runtime.sendMessage({ event: e, data: t }, r);
    }
    o.a.runtime.onMessage.addListener((e, t, r) => {
      const { event: n, data: o } = e,
        a = s[n] || [];
      for (const s of a) s(o, t, r);
    });
  },
  "7a77": function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  "7aac": function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (e, t, r, o, a, s) {
              var i = [];
              i.push(e + "=" + encodeURIComponent(t)),
                n.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()),
                n.isString(o) && i.push("path=" + o),
                n.isString(a) && i.push("domain=" + a),
                !0 === s && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })();
  },
  "7b0b": function (e, t, r) {
    var n = r("1d80"),
      o = Object;
    e.exports = function (e) {
      return o(n(e));
    };
  },
  "7c73": function (e, t, r) {
    var n,
      o = r("825a"),
      a = r("37e8"),
      s = r("7839"),
      i = r("d012"),
      c = r("1be4"),
      u = r("cc12"),
      f = r("f772"),
      l = ">",
      d = "<",
      p = "prototype",
      g = "script",
      m = f("IE_PROTO"),
      h = function () {},
      b = function (e) {
        return d + g + l + e + d + "/" + g + l;
      },
      y = function (e) {
        e.write(b("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      A = function () {
        var e,
          t = u("iframe"),
          r = "java" + g + ":";
        return (
          (t.style.display = "none"),
          c.appendChild(t),
          (t.src = String(r)),
          (e = t.contentWindow.document),
          e.open(),
          e.write(b("document.F=Object")),
          e.close(),
          e.F
        );
      },
      v = function () {
        try {
          n = new ActiveXObject("htmlfile");
        } catch (t) {}
        v =
          "undefined" != typeof document
            ? document.domain && n
              ? y(n)
              : A()
            : y(n);
        var e = s.length;
        while (e--) delete v[p][s[e]];
        return v();
      };
    (i[m] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var r;
          return (
            null !== e
              ? ((h[p] = o(e)), (r = new h()), (h[p] = null), (r[m] = e))
              : (r = v()),
            void 0 === t ? r : a.f(r, t)
          );
        });
  },
  "7f9a": function (e, t, r) {
    var n = r("da84"),
      o = r("1626"),
      a = r("8925"),
      s = n.WeakMap;
    e.exports = o(s) && /native code/.test(a(s));
  },
  "825a": function (e, t, r) {
    var n = r("861d"),
      o = String,
      a = TypeError;
    e.exports = function (e) {
      if (n(e)) return e;
      throw a(o(e) + " is not an object");
    };
  },
  "83ab": function (e, t, r) {
    var n = r("d039");
    e.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  "83b9": function (e, t, r) {
    "use strict";
    var n = r("d925"),
      o = r("e683");
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  "848b": function (e, t, r) {
    "use strict";
    var n = r("5cce").version,
      o = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      function (e, t) {
        o[e] = function (r) {
          return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    var a = {};
    function s(e, t, r) {
      if ("object" !== typeof e)
        throw new TypeError("options must be an object");
      var n = Object.keys(e),
        o = n.length;
      while (o-- > 0) {
        var a = n[o],
          s = t[a];
        if (s) {
          var i = e[a],
            c = void 0 === i || s(i, a, e);
          if (!0 !== c) throw new TypeError("option " + a + " must be " + c);
        } else if (!0 !== r) throw Error("Unknown option " + a);
      }
    }
    (o.transitional = function (e, t, r) {
      function o(e, t) {
        return (
          "[Axios v" +
          n +
          "] Transitional option '" +
          e +
          "'" +
          t +
          (r ? ". " + r : "")
        );
      }
      return function (r, n, s) {
        if (!1 === e)
          throw new Error(o(n, " has been removed" + (t ? " in " + t : "")));
        return (
          t &&
            !a[n] &&
            ((a[n] = !0),
            console.warn(
              o(
                n,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(r, n, s)
        );
      };
    }),
      (e.exports = { assertOptions: s, validators: o });
  },
  "861d": function (e, t, r) {
    var n = r("1626");
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : n(e);
    };
  },
  8925: function (e, t, r) {
    var n = r("e330"),
      o = r("1626"),
      a = r("c6cd"),
      s = n(Function.toString);
    o(a.inspectSource) ||
      (a.inspectSource = function (e) {
        return s(e);
      }),
      (e.exports = a.inspectSource);
  },
  "8df4": function (e, t, r) {
    "use strict";
    var n = r("7a77");
    function o(e) {
      if ("function" !== typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length;
          for (t = 0; t < n; t++) r._listeners[t](e);
          r._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              r.subscribe(e), (t = e);
            }).then(e);
          return (
            (n.cancel = function () {
              r.unsubscribe(t);
            }),
            n
          );
        }),
        e(function (e) {
          r.reason || ((r.reason = new n(e)), t(r.reason));
        });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }),
      (o.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
      }),
      (o.source = function () {
        var e,
          t = new o(function (t) {
            e = t;
          });
        return { token: t, cancel: e };
      }),
      (e.exports = o);
  },
  "907a": function (e, t, r) {
    "use strict";
    var n = r("ebb5"),
      o = r("07fa"),
      a = r("5926"),
      s = n.aTypedArray,
      i = n.exportTypedArrayMethod;
    i("at", function (e) {
      var t = s(this),
        r = o(t),
        n = a(e),
        i = n >= 0 ? n : r + n;
      return i < 0 || i >= r ? void 0 : t[i];
    });
  },
  "90e3": function (e, t, r) {
    var n = r("e330"),
      o = 0,
      a = Math.random(),
      s = n((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + a, 36);
    };
  },
  9112: function (e, t, r) {
    var n = r("83ab"),
      o = r("9bf2"),
      a = r("5c6c");
    e.exports = n
      ? function (e, t, r) {
          return o.f(e, t, a(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  },
  "94ca": function (e, t, r) {
    var n = r("d039"),
      o = r("1626"),
      a = /#|\.prototype\./,
      s = function (e, t) {
        var r = c[i(e)];
        return r == f || (r != u && (o(t) ? n(t) : !!t));
      },
      i = (s.normalize = function (e) {
        return String(e).replace(a, ".").toLowerCase();
      }),
      c = (s.data = {}),
      u = (s.NATIVE = "N"),
      f = (s.POLYFILL = "P");
    e.exports = s;
  },
  9845: function (e, t, r) {
    var n,
      o,
      a,
      s = void 0;
    (function (r, s) {
      (o = [e]),
        (n = s),
        (a = "function" === typeof n ? n.apply(t, o) : n),
        void 0 === a || (e.exports = a);
    })(
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self && self,
      function (e) {
        "use strict";
        if (
          "undefined" === typeof s ||
          Object.getPrototypeOf(s) !== Object.prototype
        ) {
          const t = "The message port closed before a response was received.",
            r =
              "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
            n = (e) => {
              const n = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (0 === Object.keys(n).length)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class o extends WeakMap {
                constructor(e, t) {
                  super(t), (this.createItem = e);
                }
                get(e) {
                  return (
                    this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                  );
                }
              }
              const a = (e) =>
                  e && "object" === typeof e && "function" === typeof e.then,
                s =
                  (t, r) =>
                  (...n) => {
                    e.runtime.lastError
                      ? t.reject(new Error(e.runtime.lastError.message))
                      : r.singleCallbackArg ||
                        (n.length <= 1 && !1 !== r.singleCallbackArg)
                      ? t.resolve(n[0])
                      : t.resolve(n);
                  },
                i = (e) => (1 == e ? "argument" : "arguments"),
                c = (e, t) =>
                  function (r, ...n) {
                    if (n.length < t.minArgs)
                      throw new Error(
                        `Expected at least ${t.minArgs} ${i(
                          t.minArgs
                        )} for ${e}(), got ${n.length}`
                      );
                    if (n.length > t.maxArgs)
                      throw new Error(
                        `Expected at most ${t.maxArgs} ${i(
                          t.maxArgs
                        )} for ${e}(), got ${n.length}`
                      );
                    return new Promise((o, a) => {
                      if (t.fallbackToNoCallback)
                        try {
                          r[e](...n, s({ resolve: o, reject: a }, t));
                        } catch (i) {
                          console.warn(
                            e +
                              " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",
                            i
                          ),
                            r[e](...n),
                            (t.fallbackToNoCallback = !1),
                            (t.noCallback = !0),
                            o();
                        }
                      else
                        t.noCallback
                          ? (r[e](...n), o())
                          : r[e](...n, s({ resolve: o, reject: a }, t));
                    });
                  },
                u = (e, t, r) =>
                  new Proxy(t, {
                    apply(t, n, o) {
                      return r.call(n, e, ...o);
                    },
                  });
              let f = Function.call.bind(Object.prototype.hasOwnProperty);
              const l = (e, t = {}, r = {}) => {
                  let n = Object.create(null),
                    o = {
                      has(t, r) {
                        return r in e || r in n;
                      },
                      get(o, a, s) {
                        if (a in n) return n[a];
                        if (!(a in e)) return;
                        let i = e[a];
                        if ("function" === typeof i)
                          if ("function" === typeof t[a]) i = u(e, e[a], t[a]);
                          else if (f(r, a)) {
                            let t = c(a, r[a]);
                            i = u(e, e[a], t);
                          } else i = i.bind(e);
                        else if (
                          "object" === typeof i &&
                          null !== i &&
                          (f(t, a) || f(r, a))
                        )
                          i = l(i, t[a], r[a]);
                        else {
                          if (!f(r, "*"))
                            return (
                              Object.defineProperty(n, a, {
                                configurable: !0,
                                enumerable: !0,
                                get() {
                                  return e[a];
                                },
                                set(t) {
                                  e[a] = t;
                                },
                              }),
                              i
                            );
                          i = l(i, t[a], r["*"]);
                        }
                        return (n[a] = i), i;
                      },
                      set(t, r, o, a) {
                        return r in n ? (n[r] = o) : (e[r] = o), !0;
                      },
                      defineProperty(e, t, r) {
                        return Reflect.defineProperty(n, t, r);
                      },
                      deleteProperty(e, t) {
                        return Reflect.deleteProperty(n, t);
                      },
                    },
                    a = Object.create(e);
                  return new Proxy(a, o);
                },
                d = (e) => ({
                  addListener(t, r, ...n) {
                    t.addListener(e.get(r), ...n);
                  },
                  hasListener(t, r) {
                    return t.hasListener(e.get(r));
                  },
                  removeListener(t, r) {
                    t.removeListener(e.get(r));
                  },
                }),
                p = new o((e) =>
                  "function" !== typeof e
                    ? e
                    : function (t) {
                        const r = l(
                          t,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        e(r);
                      }
                );
              let g = !1;
              const m = new o((e) =>
                  "function" !== typeof e
                    ? e
                    : function (t, n, o) {
                        let s,
                          i,
                          c = !1,
                          u = new Promise((e) => {
                            s = function (t) {
                              g ||
                                (console.warn(r, new Error().stack), (g = !0)),
                                (c = !0),
                                e(t);
                            };
                          });
                        try {
                          i = e(t, n, s);
                        } catch (d) {
                          i = Promise.reject(d);
                        }
                        const f = !0 !== i && a(i);
                        if (!0 !== i && !f && !c) return !1;
                        const l = (e) => {
                          e.then(
                            (e) => {
                              o(e);
                            },
                            (e) => {
                              let t;
                              (t =
                                e &&
                                (e instanceof Error ||
                                  "string" === typeof e.message)
                                  ? e.message
                                  : "An unexpected error occurred"),
                                o({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: t,
                                });
                            }
                          ).catch((e) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              e
                            );
                          });
                        };
                        return l(f ? i : u), !0;
                      }
                ),
                h = ({ reject: r, resolve: n }, o) => {
                  e.runtime.lastError
                    ? e.runtime.lastError.message === t
                      ? n()
                      : r(new Error(e.runtime.lastError.message))
                    : o && o.__mozWebExtensionPolyfillReject__
                    ? r(new Error(o.message))
                    : n(o);
                },
                b = (e, t, r, ...n) => {
                  if (n.length < t.minArgs)
                    throw new Error(
                      `Expected at least ${t.minArgs} ${i(
                        t.minArgs
                      )} for ${e}(), got ${n.length}`
                    );
                  if (n.length > t.maxArgs)
                    throw new Error(
                      `Expected at most ${t.maxArgs} ${i(
                        t.maxArgs
                      )} for ${e}(), got ${n.length}`
                    );
                  return new Promise((e, t) => {
                    const o = h.bind(null, { resolve: e, reject: t });
                    n.push(o), r.sendMessage(...n);
                  });
                },
                y = {
                  devtools: { network: { onRequestFinished: d(p) } },
                  runtime: {
                    onMessage: d(m),
                    onMessageExternal: d(m),
                    sendMessage: b.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: b.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                A = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (n.privacy = {
                  network: { "*": A },
                  services: { "*": A },
                  websites: { "*": A },
                }),
                l(e, y, n)
              );
            };
          if (
            "object" != typeof chrome ||
            !chrome ||
            !chrome.runtime ||
            !chrome.runtime.id
          )
            throw new Error(
              "This script should only be loaded in a browser extension."
            );
          e.exports = n(chrome);
        } else e.exports = s;
      }
    );
  },
  "986a": function (e, t, r) {
    "use strict";
    var n = r("ebb5"),
      o = r("a258").findLast,
      a = n.aTypedArray,
      s = n.exportTypedArrayMethod;
    s("findLast", function (e) {
      return o(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
  },
  "9a1b": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return s;
    }),
      r.d(t, "a", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return c;
      });
    r("d9e2");
    var n = r("bc3a"),
      o = r.n(n),
      a = r("a553");
    const s = (e) => f("/l", { token: e, app: a["a"] }),
      i = async (e) => u("/v2", { uid: e }),
      c = async () => u("/t", { app: a["a"] });
    async function u(e, t = {}) {
      const r = await o.a.get(a["b"] + e, { params: t }),
        { status: n, data: s } = r;
      if (200 === n && "0" === s.code) return s.data;
      throw new Error("api call error");
    }
    async function f(e, t = {}) {
      (e = a["b"] + e),
        Object.keys(t).length > 0 &&
          (e += "?" + new URLSearchParams(t).toString());
      const r = await fetch(e);
      if (200 === r.status) {
        const { code: e, data: t } = await r.json();
        if ("0" === e) return t;
      }
      throw new Error("Network error");
    }
  },
  "9bf2": function (e, t, r) {
    var n = r("83ab"),
      o = r("0cfb"),
      a = r("aed9"),
      s = r("825a"),
      i = r("a04b"),
      c = TypeError,
      u = Object.defineProperty,
      f = Object.getOwnPropertyDescriptor,
      l = "enumerable",
      d = "configurable",
      p = "writable";
    t.f = n
      ? a
        ? function (e, t, r) {
            if (
              (s(e),
              (t = i(t)),
              s(r),
              "function" === typeof e &&
                "prototype" === t &&
                "value" in r &&
                p in r &&
                !r[p])
            ) {
              var n = f(e, t);
              n &&
                n[p] &&
                ((e[t] = r.value),
                (r = {
                  configurable: d in r ? r[d] : n[d],
                  enumerable: l in r ? r[l] : n[l],
                  writable: !1,
                }));
            }
            return u(e, t, r);
          }
        : u
      : function (e, t, r) {
          if ((s(e), (t = i(t)), s(r), o))
            try {
              return u(e, t, r);
            } catch (n) {}
          if ("get" in r || "set" in r) throw c("Accessors not supported");
          return "value" in r && (e[t] = r.value), e;
        };
  },
  a04b: function (e, t, r) {
    var n = r("c04e"),
      o = r("d9b5");
    e.exports = function (e) {
      var t = n(e, "string");
      return o(t) ? t : t + "";
    };
  },
  a258: function (e, t, r) {
    var n = r("0366"),
      o = r("44ad"),
      a = r("7b0b"),
      s = r("07fa"),
      i = function (e) {
        var t = 1 == e;
        return function (r, i, c) {
          var u,
            f,
            l = a(r),
            d = o(l),
            p = n(i, c),
            g = s(d);
          while (g-- > 0)
            if (((u = d[g]), (f = p(u, g, l)), f))
              switch (e) {
                case 0:
                  return u;
                case 1:
                  return g;
              }
          return t ? -1 : void 0;
        };
      };
    e.exports = { findLast: i(0), findLastIndex: i(1) };
  },
  a553: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    }),
      r.d(t, "b", function () {
        return s;
      }),
      r.d(t, "f", function () {
        return i;
      }),
      r.d(t, "g", function () {
        return u;
      }),
      r.d(t, "c", function () {
        return f;
      }),
      r.d(t, "d", function () {
        return l;
      }),
      r.d(t, "e", function () {
        return d;
      });
    var n = r("d3ff");
    const o = 9,
      a = { dev: "http://localhost:3000", prod: "https://b.unispy.io/shop" },
      s = a.prod,
      i = "https://fb-messenger-bulk-sender.unispy.io",
      c = { wait: [5, 9], pause: { num: 45, wait: 15 } },
      u = {
        get: async () => {
          const { send_setting: e } = await n["a"](["send_setting"]);
          return e || c;
        },
        set: (e) => n["c"]({ send_setting: e }),
      },
      f = { pending: 0, running: 1, paused: 2, done: 3 },
      l = {
        [f.pending]: "robot",
        [f.running]: "fan",
        [f.paused]: "pause",
        [f.done]: "check",
      },
      d = {
        [f.pending]: "I'm waiting for your order.",
        [f.running]: "sending",
        [f.paused]: "paused",
        [f.done]: "finished",
      };
  },
  a981: function (e, t) {
    e.exports =
      "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
  },
  ab36: function (e, t, r) {
    var n = r("861d"),
      o = r("9112");
    e.exports = function (e, t) {
      n(t) && "cause" in t && o(e, "cause", t.cause);
    };
  },
  aeb0: function (e, t, r) {
    var n = r("9bf2").f;
    e.exports = function (e, t, r) {
      r in e ||
        n(e, r, {
          configurable: !0,
          get: function () {
            return t[r];
          },
          set: function (e) {
            t[r] = e;
          },
        });
    };
  },
  aed9: function (e, t, r) {
    var n = r("83ab"),
      o = r("d039");
    e.exports =
      n &&
      o(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  b42e: function (e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? n : r)(t);
      };
  },
  b50d: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("467f"),
      a = r("7aac"),
      s = r("30b5"),
      i = r("83b9"),
      c = r("c345"),
      u = r("3934"),
      f = r("2d83"),
      l = r("2444"),
      d = r("7a77");
    e.exports = function (e) {
      return new Promise(function (t, r) {
        var p,
          g = e.data,
          m = e.headers,
          h = e.responseType;
        function b() {
          e.cancelToken && e.cancelToken.unsubscribe(p),
            e.signal && e.signal.removeEventListener("abort", p);
        }
        n.isFormData(g) && delete m["Content-Type"];
        var y = new XMLHttpRequest();
        if (e.auth) {
          var A = e.auth.username || "",
            v = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          m.Authorization = "Basic " + btoa(A + ":" + v);
        }
        var _ = i(e.baseURL, e.url);
        function x() {
          if (y) {
            var n =
                "getAllResponseHeaders" in y
                  ? c(y.getAllResponseHeaders())
                  : null,
              a =
                h && "text" !== h && "json" !== h ? y.response : y.responseText,
              s = {
                data: a,
                status: y.status,
                statusText: y.statusText,
                headers: n,
                config: e,
                request: y,
              };
            o(
              function (e) {
                t(e), b();
              },
              function (e) {
                r(e), b();
              },
              s
            ),
              (y = null);
          }
        }
        if (
          (y.open(
            e.method.toUpperCase(),
            s(_, e.params, e.paramsSerializer),
            !0
          ),
          (y.timeout = e.timeout),
          "onloadend" in y
            ? (y.onloadend = x)
            : (y.onreadystatechange = function () {
                y &&
                  4 === y.readyState &&
                  (0 !== y.status ||
                    (y.responseURL && 0 === y.responseURL.indexOf("file:"))) &&
                  setTimeout(x);
              }),
          (y.onabort = function () {
            y && (r(f("Request aborted", e, "ECONNABORTED", y)), (y = null));
          }),
          (y.onerror = function () {
            r(f("Network Error", e, null, y)), (y = null);
          }),
          (y.ontimeout = function () {
            var t = e.timeout
                ? "timeout of " + e.timeout + "ms exceeded"
                : "timeout exceeded",
              n = e.transitional || l.transitional;
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              r(
                f(t, e, n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)
              ),
              (y = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || u(_)) && e.xsrfCookieName
              ? a.read(e.xsrfCookieName)
              : void 0;
          w && (m[e.xsrfHeaderName] = w);
        }
        "setRequestHeader" in y &&
          n.forEach(m, function (e, t) {
            "undefined" === typeof g && "content-type" === t.toLowerCase()
              ? delete m[t]
              : y.setRequestHeader(t, e);
          }),
          n.isUndefined(e.withCredentials) ||
            (y.withCredentials = !!e.withCredentials),
          h && "json" !== h && (y.responseType = e.responseType),
          "function" === typeof e.onDownloadProgress &&
            y.addEventListener("progress", e.onDownloadProgress),
          "function" === typeof e.onUploadProgress &&
            y.upload &&
            y.upload.addEventListener("progress", e.onUploadProgress),
          (e.cancelToken || e.signal) &&
            ((p = function (e) {
              y &&
                (r(!e || (e && e.type) ? new d("canceled") : e),
                y.abort(),
                (y = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(p),
            e.signal &&
              (e.signal.aborted ? p() : e.signal.addEventListener("abort", p))),
          g || (g = null),
          y.send(g);
      });
    };
  },
  b622: function (e, t, r) {
    var n = r("da84"),
      o = r("5692"),
      a = r("1a2d"),
      s = r("90e3"),
      i = r("4930"),
      c = r("fdbf"),
      u = o("wks"),
      f = n.Symbol,
      l = f && f["for"],
      d = c ? f : (f && f.withoutSetter) || s;
    e.exports = function (e) {
      if (!a(u, e) || (!i && "string" != typeof u[e])) {
        var t = "Symbol." + e;
        i && a(f, e) ? (u[e] = f[e]) : (u[e] = c && l ? l(t) : d(t));
      }
      return u[e];
    };
  },
  b980: function (e, t, r) {
    var n = r("d039"),
      o = r("5c6c");
    e.exports = !n(function () {
      var e = Error("a");
      return (
        !("stack" in e) ||
        (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
      );
    });
  },
  bc3a: function (e, t, r) {
    e.exports = r("cee4");
  },
  c04e: function (e, t, r) {
    var n = r("c65b"),
      o = r("861d"),
      a = r("d9b5"),
      s = r("dc4a"),
      i = r("485a"),
      c = r("b622"),
      u = TypeError,
      f = c("toPrimitive");
    e.exports = function (e, t) {
      if (!o(e) || a(e)) return e;
      var r,
        c = s(e, f);
      if (c) {
        if ((void 0 === t && (t = "default"), (r = n(c, e, t)), !o(r) || a(r)))
          return r;
        throw u("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), i(e, t);
    };
  },
  c276: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return a;
    }),
      r.d(t, "d", function () {
        return s;
      }),
      r.d(t, "a", function () {
        return i;
      }),
      r.d(t, "f", function () {
        return c;
      }),
      r.d(t, "b", function () {
        return u;
      }),
      r.d(t, "e", function () {
        return f;
      });
    r("907a"), r("3c5d"), r("fa9e"), r("77d9");
    var n = r("9845"),
      o = r.n(n);
    function a(e) {
      const t = {};
      for (const [r, n] of new URL(
        e || window.location.href
      ).searchParams.entries())
        t[r] = n;
      return t;
    }
    function s() {
      return o.a.runtime.getManifest().version;
    }
    function i(e) {
      return o.a.runtime.getURL(e);
    }
    function c(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function u(e) {
      var t = new RegExp(/{([^{}]+?)}/),
        r = null;
      while (null !== (r = t.exec(e))) {
        const t = r[1].split("|"),
          n = Math.floor(Math.random() * t.length);
        e = e.replace(r[0], t[n]);
      }
      return e;
    }
    function f(e) {
      let t;
      try {
        t = new URL(e);
      } catch (r) {
        return !1;
      }
      return "http:" === t.protocol || "https:" === t.protocol;
    }
  },
  c345: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        a,
        s = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((a = e.indexOf(":")),
              (t = n.trim(e.substr(0, a)).toLowerCase()),
              (r = n.trim(e.substr(a + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([r])
                  : s[t]
                  ? s[t] + ", " + r
                  : r;
            }
          }),
          s)
        : s;
    };
  },
  c401: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("2444");
    e.exports = function (e, t, r) {
      var a = this || o;
      return (
        n.forEach(r, function (r) {
          e = r.call(a, e, t);
        }),
        e
      );
    };
  },
  c430: function (e, t) {
    e.exports = !1;
  },
  c532: function (e, t, r) {
    "use strict";
    var n = r("1d2b"),
      o = Object.prototype.toString;
    function a(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return "undefined" === typeof e;
    }
    function i(e) {
      return (
        null !== e &&
        !s(e) &&
        null !== e.constructor &&
        !s(e.constructor) &&
        "function" === typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    }
    function c(e) {
      return "[object ArrayBuffer]" === o.call(e);
    }
    function u(e) {
      return "undefined" !== typeof FormData && e instanceof FormData;
    }
    function f(e) {
      var t;
      return (
        (t =
          "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer),
        t
      );
    }
    function l(e) {
      return "string" === typeof e;
    }
    function d(e) {
      return "number" === typeof e;
    }
    function p(e) {
      return null !== e && "object" === typeof e;
    }
    function g(e) {
      if ("[object Object]" !== o.call(e)) return !1;
      var t = Object.getPrototypeOf(e);
      return null === t || t === Object.prototype;
    }
    function m(e) {
      return "[object Date]" === o.call(e);
    }
    function h(e) {
      return "[object File]" === o.call(e);
    }
    function b(e) {
      return "[object Blob]" === o.call(e);
    }
    function y(e) {
      return "[object Function]" === o.call(e);
    }
    function A(e) {
      return p(e) && y(e.pipe);
    }
    function v(e) {
      return (
        "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
      );
    }
    function _(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
    }
    function x() {
      return (
        ("undefined" === typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" !== typeof window &&
        "undefined" !== typeof document
      );
    }
    function w(e, t) {
      if (null !== e && "undefined" !== typeof e)
        if (("object" !== typeof e && (e = [e]), a(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    function k() {
      var e = {};
      function t(t, r) {
        g(e[r]) && g(t)
          ? (e[r] = k(e[r], t))
          : g(t)
          ? (e[r] = k({}, t))
          : a(t)
          ? (e[r] = t.slice())
          : (e[r] = t);
      }
      for (var r = 0, n = arguments.length; r < n; r++) w(arguments[r], t);
      return e;
    }
    function j(e, t, r) {
      return (
        w(t, function (t, o) {
          e[o] = r && "function" === typeof t ? n(t, r) : t;
        }),
        e
      );
    }
    function E(e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
    }
    e.exports = {
      isArray: a,
      isArrayBuffer: c,
      isBuffer: i,
      isFormData: u,
      isArrayBufferView: f,
      isString: l,
      isNumber: d,
      isObject: p,
      isPlainObject: g,
      isUndefined: s,
      isDate: m,
      isFile: h,
      isBlob: b,
      isFunction: y,
      isStream: A,
      isURLSearchParams: v,
      isStandardBrowserEnv: x,
      forEach: w,
      merge: k,
      extend: j,
      trim: _,
      stripBOM: E,
    };
  },
  c65b: function (e, t, r) {
    var n = r("40d5"),
      o = Function.prototype.call;
    e.exports = n
      ? o.bind(o)
      : function () {
          return o.apply(o, arguments);
        };
  },
  c6b6: function (e, t, r) {
    var n = r("e330"),
      o = n({}.toString),
      a = n("".slice);
    e.exports = function (e) {
      return a(o(e), 8, -1);
    };
  },
  c6cd: function (e, t, r) {
    var n = r("da84"),
      o = r("6374"),
      a = "__core-js_shared__",
      s = n[a] || o(a, {});
    e.exports = s;
  },
  c770: function (e, t, r) {
    var n = r("e330"),
      o = Error,
      a = n("".replace),
      s = (function (e) {
        return String(o(e).stack);
      })("zxcasd"),
      i = /\n\s*at [^:]*:[^\n]*/,
      c = i.test(s);
    e.exports = function (e, t) {
      if (c && "string" == typeof e && !o.prepareStackTrace)
        while (t--) e = a(e, i, "");
      return e;
    };
  },
  c8af: function (e, t, r) {
    "use strict";
    var n = r("c532");
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  c8ba: function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (n) {
      "object" === typeof window && (r = window);
    }
    e.exports = r;
  },
  ca84: function (e, t, r) {
    var n = r("e330"),
      o = r("1a2d"),
      a = r("fc6a"),
      s = r("4d64").indexOf,
      i = r("d012"),
      c = n([].push);
    e.exports = function (e, t) {
      var r,
        n = a(e),
        u = 0,
        f = [];
      for (r in n) !o(i, r) && o(n, r) && c(f, r);
      while (t.length > u) o(n, (r = t[u++])) && (~s(f, r) || c(f, r));
      return f;
    };
  },
  caad: function (e, t, r) {
    "use strict";
    var n = r("23e7"),
      o = r("4d64").includes,
      a = r("d039"),
      s = r("44d2"),
      i = a(function () {
        return !Array(1).includes();
      });
    n(
      { target: "Array", proto: !0, forced: i },
      {
        includes: function (e) {
          return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      s("includes");
  },
  cb2d: function (e, t, r) {
    var n = r("1626"),
      o = r("9bf2"),
      a = r("13d2"),
      s = r("6374");
    e.exports = function (e, t, r, i) {
      i || (i = {});
      var c = i.enumerable,
        u = void 0 !== i.name ? i.name : t;
      if ((n(r) && a(r, u, i), i.global)) c ? (e[t] = r) : s(t, r);
      else {
        try {
          i.unsafe ? e[t] && (c = !0) : delete e[t];
        } catch (f) {}
        c
          ? (e[t] = r)
          : o.f(e, t, {
              value: r,
              enumerable: !1,
              configurable: !i.nonConfigurable,
              writable: !i.nonWritable,
            });
      }
      return e;
    };
  },
  cc12: function (e, t, r) {
    var n = r("da84"),
      o = r("861d"),
      a = n.document,
      s = o(a) && o(a.createElement);
    e.exports = function (e) {
      return s ? a.createElement(e) : {};
    };
  },
  cee4: function (e, t, r) {
    "use strict";
    var n = r("c532"),
      o = r("1d2b"),
      a = r("0a06"),
      s = r("4a7b"),
      i = r("2444");
    function c(e) {
      var t = new a(e),
        r = o(a.prototype.request, t);
      return (
        n.extend(r, a.prototype, t),
        n.extend(r, t),
        (r.create = function (t) {
          return c(s(e, t));
        }),
        r
      );
    }
    var u = c(i);
    (u.Axios = a),
      (u.Cancel = r("7a77")),
      (u.CancelToken = r("8df4")),
      (u.isCancel = r("2e67")),
      (u.VERSION = r("5cce").version),
      (u.all = function (e) {
        return Promise.all(e);
      }),
      (u.spread = r("0df6")),
      (u.isAxiosError = r("5f02")),
      (e.exports = u),
      (e.exports.default = u);
  },
  d012: function (e, t) {
    e.exports = {};
  },
  d039: function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (t) {
        return !0;
      }
    };
  },
  d066: function (e, t, r) {
    var n = r("da84"),
      o = r("1626"),
      a = function (e) {
        return o(e) ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? a(n[e]) : n[e] && n[e][t];
    };
  },
  d1e7: function (e, t, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      a = o && !n.call({ 1: 2 }, 1);
    t.f = a
      ? function (e) {
          var t = o(this, e);
          return !!t && t.enumerable;
        }
      : n;
  },
  d2bb: function (e, t, r) {
    var n = r("e330"),
      o = r("825a"),
      a = r("3bbe");
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              r = {};
            try {
              (e = n(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              )),
                e(r, []),
                (t = r instanceof Array);
            } catch (s) {}
            return function (r, n) {
              return o(r), a(n), t ? e(r, n) : (r.__proto__ = n), r;
            };
          })()
        : void 0);
  },
  d3ff: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    }),
      r.d(t, "c", function () {
        return s;
      }),
      r.d(t, "b", function () {
        return i;
      });
    var n = r("9845"),
      o = r.n(n);
    const a = (e) => o.a.storage.local.get(e),
      s = (e) => o.a.storage.local.set(e),
      i = (e) => o.a.storage.local.remove(e);
  },
  d925: function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  d9b5: function (e, t, r) {
    var n = r("d066"),
      o = r("1626"),
      a = r("3a9b"),
      s = r("fdbf"),
      i = Object;
    e.exports = s
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = n("Symbol");
          return o(t) && a(t.prototype, i(e));
        };
  },
  d9e2: function (e, t, r) {
    var n = r("23e7"),
      o = r("da84"),
      a = r("2ba4"),
      s = r("e5cb"),
      i = "WebAssembly",
      c = o[i],
      u = 7 !== Error("e", { cause: 7 }).cause,
      f = function (e, t) {
        var r = {};
        (r[e] = s(e, t, u)),
          n({ global: !0, constructor: !0, arity: 1, forced: u }, r);
      },
      l = function (e, t) {
        if (c && c[e]) {
          var r = {};
          (r[e] = s(i + "." + e, t, u)),
            n({ target: i, stat: !0, constructor: !0, arity: 1, forced: u }, r);
        }
      };
    f("Error", function (e) {
      return function (t) {
        return a(e, this, arguments);
      };
    }),
      f("EvalError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      f("RangeError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      f("ReferenceError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      f("SyntaxError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      f("TypeError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      f("URIError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      l("CompileError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      l("LinkError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      }),
      l("RuntimeError", function (e) {
        return function (t) {
          return a(e, this, arguments);
        };
      });
  },
  da84: function (e, t, r) {
    (function (t) {
      var r = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }).call(this, r("c8ba"));
  },
  dc4a: function (e, t, r) {
    var n = r("59ed");
    e.exports = function (e, t) {
      var r = e[t];
      return null == r ? void 0 : n(r);
    };
  },
  df75: function (e, t, r) {
    var n = r("ca84"),
      o = r("7839");
    e.exports =
      Object.keys ||
      function (e) {
        return n(e, o);
      };
  },
  df7c: function (e, t, r) {
    (function (e) {
      function r(e, t) {
        for (var r = 0, n = e.length - 1; n >= 0; n--) {
          var o = e[n];
          "." === o
            ? e.splice(n, 1)
            : ".." === o
            ? (e.splice(n, 1), r++)
            : r && (e.splice(n, 1), r--);
        }
        if (t) for (; r--; r) e.unshift("..");
        return e;
      }
      function n(e) {
        "string" !== typeof e && (e += "");
        var t,
          r = 0,
          n = -1,
          o = !0;
        for (t = e.length - 1; t >= 0; --t)
          if (47 === e.charCodeAt(t)) {
            if (!o) {
              r = t + 1;
              break;
            }
          } else -1 === n && ((o = !1), (n = t + 1));
        return -1 === n ? "" : e.slice(r, n);
      }
      function o(e, t) {
        if (e.filter) return e.filter(t);
        for (var r = [], n = 0; n < e.length; n++)
          t(e[n], n, e) && r.push(e[n]);
        return r;
      }
      (t.resolve = function () {
        for (var t = "", n = !1, a = arguments.length - 1; a >= -1 && !n; a--) {
          var s = a >= 0 ? arguments[a] : e.cwd();
          if ("string" !== typeof s)
            throw new TypeError("Arguments to path.resolve must be strings");
          s && ((t = s + "/" + t), (n = "/" === s.charAt(0)));
        }
        return (
          (t = r(
            o(t.split("/"), function (e) {
              return !!e;
            }),
            !n
          ).join("/")),
          (n ? "/" : "") + t || "."
        );
      }),
        (t.normalize = function (e) {
          var n = t.isAbsolute(e),
            s = "/" === a(e, -1);
          return (
            (e = r(
              o(e.split("/"), function (e) {
                return !!e;
              }),
              !n
            ).join("/")),
            e || n || (e = "."),
            e && s && (e += "/"),
            (n ? "/" : "") + e
          );
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            o(e, function (e, t) {
              if ("string" !== typeof e)
                throw new TypeError("Arguments to path.join must be strings");
              return e;
            }).join("/")
          );
        }),
        (t.relative = function (e, r) {
          function n(e) {
            for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
            for (var r = e.length - 1; r >= 0; r--) if ("" !== e[r]) break;
            return t > r ? [] : e.slice(t, r - t + 1);
          }
          (e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1));
          for (
            var o = n(e.split("/")),
              a = n(r.split("/")),
              s = Math.min(o.length, a.length),
              i = s,
              c = 0;
            c < s;
            c++
          )
            if (o[c] !== a[c]) {
              i = c;
              break;
            }
          var u = [];
          for (c = i; c < o.length; c++) u.push("..");
          return (u = u.concat(a.slice(i))), u.join("/");
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          if (("string" !== typeof e && (e += ""), 0 === e.length)) return ".";
          for (
            var t = e.charCodeAt(0),
              r = 47 === t,
              n = -1,
              o = !0,
              a = e.length - 1;
            a >= 1;
            --a
          )
            if (((t = e.charCodeAt(a)), 47 === t)) {
              if (!o) {
                n = a;
                break;
              }
            } else o = !1;
          return -1 === n
            ? r
              ? "/"
              : "."
            : r && 1 === n
            ? "/"
            : e.slice(0, n);
        }),
        (t.basename = function (e, t) {
          var r = n(e);
          return (
            t &&
              r.substr(-1 * t.length) === t &&
              (r = r.substr(0, r.length - t.length)),
            r
          );
        }),
        (t.extname = function (e) {
          "string" !== typeof e && (e += "");
          for (
            var t = -1, r = 0, n = -1, o = !0, a = 0, s = e.length - 1;
            s >= 0;
            --s
          ) {
            var i = e.charCodeAt(s);
            if (47 !== i)
              -1 === n && ((o = !1), (n = s + 1)),
                46 === i
                  ? -1 === t
                    ? (t = s)
                    : 1 !== a && (a = 1)
                  : -1 !== t && (a = -1);
            else if (!o) {
              r = s + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === n ||
            0 === a ||
            (1 === a && t === n - 1 && t === r + 1)
            ? ""
            : e.slice(t, n);
        });
      var a =
        "b" === "ab".substr(-1)
          ? function (e, t, r) {
              return e.substr(t, r);
            }
          : function (e, t, r) {
              return t < 0 && (t = e.length + t), e.substr(t, r);
            };
    }).call(this, r("4362"));
  },
  e163: function (e, t, r) {
    var n = r("1a2d"),
      o = r("1626"),
      a = r("7b0b"),
      s = r("f772"),
      i = r("e177"),
      c = s("IE_PROTO"),
      u = Object,
      f = u.prototype;
    e.exports = i
      ? u.getPrototypeOf
      : function (e) {
          var t = a(e);
          if (n(t, c)) return t[c];
          var r = t.constructor;
          return o(r) && t instanceof r
            ? r.prototype
            : t instanceof u
            ? f
            : null;
        };
  },
  e177: function (e, t, r) {
    var n = r("d039");
    e.exports = !n(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    });
  },
  e330: function (e, t, r) {
    var n = r("40d5"),
      o = Function.prototype,
      a = o.bind,
      s = o.call,
      i = n && a.bind(s, s);
    e.exports = n
      ? function (e) {
          return e && i(e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return s.apply(e, arguments);
            }
          );
        };
  },
  e391: function (e, t, r) {
    var n = r("577e");
    e.exports = function (e, t) {
      return void 0 === e ? (arguments.length < 2 ? "" : t) : n(e);
    };
  },
  e5cb: function (e, t, r) {
    "use strict";
    var n = r("d066"),
      o = r("1a2d"),
      a = r("9112"),
      s = r("3a9b"),
      i = r("d2bb"),
      c = r("e893"),
      u = r("aeb0"),
      f = r("7156"),
      l = r("e391"),
      d = r("ab36"),
      p = r("c770"),
      g = r("b980"),
      m = r("83ab"),
      h = r("c430");
    e.exports = function (e, t, r, b) {
      var y = "stackTraceLimit",
        A = b ? 2 : 1,
        v = e.split("."),
        _ = v[v.length - 1],
        x = n.apply(null, v);
      if (x) {
        var w = x.prototype;
        if ((!h && o(w, "cause") && delete w.cause, !r)) return x;
        var k = n("Error"),
          j = t(function (e, t) {
            var r = l(b ? t : e, void 0),
              n = b ? new x(e) : new x();
            return (
              void 0 !== r && a(n, "message", r),
              g && a(n, "stack", p(n.stack, 2)),
              this && s(w, this) && f(n, this, j),
              arguments.length > A && d(n, arguments[A]),
              n
            );
          });
        if (
          ((j.prototype = w),
          "Error" !== _
            ? i
              ? i(j, k)
              : c(j, k, { name: !0 })
            : m && y in x && (u(j, x, y), u(j, x, "prepareStackTrace")),
          c(j, x),
          !h)
        )
          try {
            w.name !== _ && a(w, "name", _), (w.constructor = j);
          } catch (E) {}
        return j;
      }
    };
  },
  e683: function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  e893: function (e, t, r) {
    var n = r("1a2d"),
      o = r("56ef"),
      a = r("06cf"),
      s = r("9bf2");
    e.exports = function (e, t, r) {
      for (var i = o(t), c = s.f, u = a.f, f = 0; f < i.length; f++) {
        var l = i[f];
        n(e, l) || (r && n(r, l)) || c(e, l, u(t, l));
      }
    };
  },
  ebb5: function (e, t, r) {
    "use strict";
    var n,
      o,
      a,
      s = r("a981"),
      i = r("83ab"),
      c = r("da84"),
      u = r("1626"),
      f = r("861d"),
      l = r("1a2d"),
      d = r("f5df"),
      p = r("0d51"),
      g = r("9112"),
      m = r("cb2d"),
      h = r("9bf2").f,
      b = r("3a9b"),
      y = r("e163"),
      A = r("d2bb"),
      v = r("b622"),
      _ = r("90e3"),
      x = r("69f3"),
      w = x.enforce,
      k = x.get,
      j = c.Int8Array,
      E = j && j.prototype,
      O = c.Uint8ClampedArray,
      S = O && O.prototype,
      T = j && y(j),
      C = E && y(E),
      P = Object.prototype,
      R = c.TypeError,
      N = v("toStringTag"),
      U = _("TYPED_ARRAY_TAG"),
      $ = "TypedArrayConstructor",
      I = s && !!A && "Opera" !== d(c.opera),
      L = !1,
      M = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
      },
      F = { BigInt64Array: 8, BigUint64Array: 8 },
      B = function (e) {
        if (!f(e)) return !1;
        var t = d(e);
        return "DataView" === t || l(M, t) || l(F, t);
      },
      z = function (e) {
        var t = y(e);
        if (f(t)) {
          var r = k(t);
          return r && l(r, $) ? r[$] : z(t);
        }
      },
      D = function (e) {
        if (!f(e)) return !1;
        var t = d(e);
        return l(M, t) || l(F, t);
      },
      q = function (e) {
        if (D(e)) return e;
        throw R("Target is not a typed array");
      },
      W = function (e) {
        if (u(e) && (!A || b(T, e))) return e;
        throw R(p(e) + " is not a typed array constructor");
      },
      G = function (e, t, r, n) {
        if (i) {
          if (r)
            for (var o in M) {
              var a = c[o];
              if (a && l(a.prototype, e))
                try {
                  delete a.prototype[e];
                } catch (s) {
                  try {
                    a.prototype[e] = t;
                  } catch (u) {}
                }
            }
          (C[e] && !r) || m(C, e, r ? t : (I && E[e]) || t, n);
        }
      },
      J = function (e, t, r) {
        var n, o;
        if (i) {
          if (A) {
            if (r)
              for (n in M)
                if (((o = c[n]), o && l(o, e)))
                  try {
                    delete o[e];
                  } catch (a) {}
            if (T[e] && !r) return;
            try {
              return m(T, e, r ? t : (I && T[e]) || t);
            } catch (a) {}
          }
          for (n in M) (o = c[n]), !o || (o[e] && !r) || m(o, e, t);
        }
      };
    for (n in M)
      (o = c[n]), (a = o && o.prototype), a ? (w(a)[$] = o) : (I = !1);
    for (n in F) (o = c[n]), (a = o && o.prototype), a && (w(a)[$] = o);
    if (
      (!I || !u(T) || T === Function.prototype) &&
      ((T = function () {
        throw R("Incorrect invocation");
      }),
      I)
    )
      for (n in M) c[n] && A(c[n], T);
    if ((!I || !C || C === P) && ((C = T.prototype), I))
      for (n in M) c[n] && A(c[n].prototype, C);
    if ((I && y(S) !== C && A(S, C), i && !l(C, N)))
      for (n in ((L = !0),
      h(C, N, {
        get: function () {
          return f(this) ? this[U] : void 0;
        },
      }),
      M))
        c[n] && g(c[n], U, n);
    e.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: I,
      TYPED_ARRAY_TAG: L && U,
      aTypedArray: q,
      aTypedArrayConstructor: W,
      exportTypedArrayMethod: G,
      exportTypedArrayStaticMethod: J,
      getTypedArrayConstructor: z,
      isView: B,
      isTypedArray: D,
      TypedArray: T,
      TypedArrayPrototype: C,
    };
  },
  f5df: function (e, t, r) {
    var n = r("00ee"),
      o = r("1626"),
      a = r("c6b6"),
      s = r("b622"),
      i = s("toStringTag"),
      c = Object,
      u =
        "Arguments" ==
        a(
          (function () {
            return arguments;
          })()
        ),
      f = function (e, t) {
        try {
          return e[t];
        } catch (r) {}
      };
    e.exports = n
      ? a
      : function (e) {
          var t, r, n;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" == typeof (r = f((t = c(e)), i))
            ? r
            : u
            ? a(t)
            : "Object" == (n = a(t)) && o(t.callee)
            ? "Arguments"
            : n;
        };
  },
  f6b4: function (e, t, r) {
    "use strict";
    var n = r("c532");
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t, r) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!r && r.synchronous,
          runWhen: r ? r.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  f772: function (e, t, r) {
    var n = r("5692"),
      o = r("90e3"),
      a = n("keys");
    e.exports = function (e) {
      return a[e] || (a[e] = o(e));
    };
  },
  f8cd: function (e, t, r) {
    var n = r("5926"),
      o = RangeError;
    e.exports = function (e) {
      var t = n(e);
      if (t < 0) throw o("The argument can't be less than 0");
      return t;
    };
  },
  fa9e: function (e, t, r) {
    r("986a");
  },
  fc6a: function (e, t, r) {
    var n = r("44ad"),
      o = r("1d80");
    e.exports = function (e) {
      return n(o(e));
    };
  },
  fdbf: function (e, t, r) {
    var n = r("4930");
    e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  fdde: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    }),
      r.d(t, "b", function () {
        return d;
      });
    r("d9e2");
    var n = r("9845"),
      o = r.n(n),
      a = r("d3ff"),
      s = r("6bc9");
    async function i(e = !1) {
      if (!e) {
        const { fb_user_id: e, fb_access_token: t } = await a["a"]([
          "fb_user_id",
          "fb_access_token",
        ]);
        if (t)
          try {
            const { id: t } = await s["a"]();
            if (t == e) return;
          } catch (i) {
            console.log(i);
          }
        const r = await d.tryGet();
        if (r) return;
      }
      let t = {};
      try {
        t = await m();
      } catch (i) {
        if ("please login facebook." != i.message) throw i;
        t = await h();
      }
      await a["c"](t);
      const r = await b();
      await a["c"]({ jazoest: r });
      const n = await y();
      await a["c"](n);
      const o = await A();
      await a["c"]({ fb_token_ig: o, fb_access_token: o }), await d.broadcast();
    }
    const c = "__sync_fb_unispy_token",
      u = "__get_fb_unispy_token",
      f = async () => {
        const {
          fb_dtsg: e,
          fb_user_id: t,
          fb_name: r,
          fb_avator: n,
          fb_rev: o,
          jazoest: s,
          fb_token_studio: i,
          fb_token_ads: c,
          fb_token_ig: u,
          fb_access_token: f,
        } = await a["a"]([
          "fb_dtsg",
          "fb_user_id",
          "fb_name",
          "fb_avator",
          "fb_rev",
          "jazoest",
          "fb_token_studio",
          "fb_token_ads",
          "fb_token_ig",
          "fb_access_token",
        ]);
        return e
          ? JSON.stringify({
              fb_dtsg: e,
              fb_user_id: t,
              fb_name: r,
              fb_avator: n,
              fb_rev: o,
              jazoest: s,
              fb_token_studio: i,
              fb_token_ads: c,
              fb_token_ig: u,
              fb_access_token: f,
            })
          : "";
      },
      l = async (e) => {
        if (!e) return;
        const t = JSON.parse(e),
          {
            fb_dtsg: r,
            fb_user_id: n,
            fb_name: o,
            fb_avator: s,
            fb_rev: i,
            jazoest: c,
            fb_token_studio: u,
            fb_token_ads: f,
            fb_token_ig: l,
            fb_access_token: d,
          } = t;
        await a["c"]({
          fb_dtsg: r,
          fb_user_id: n,
          fb_name: o,
          fb_avator: s,
          fb_rev: i,
          jazoest: c,
          fb_token_studio: u,
          fb_token_ads: f,
          fb_token_ig: l,
          fb_access_token: d,
        });
      },
      d = {
        tryGet: async () => {
          const { appid_list: e } = await a["a"](["appid_list"]),
            t = e || [];
          for (const n of t)
            try {
              const e = await o.a.runtime.sendMessage(n, { [u]: !0 });
              if (e.token) return await l(e.token), !0;
            } catch (r) {
              console.log(r);
            }
          return !1;
        },
        broadcast: async () => {
          const e = await f();
          if (!e) return;
          const { appid_list: t } = await a["a"](["appid_list"]),
            r = t || [];
          for (const a of r)
            try {
              await o.a.runtime.sendMessage(a, { [c]: e });
            } catch (n) {
              console.log(n);
            }
        },
        listen: () => {
          o.a.runtime.onMessageExternal.addListener(async (e) => {
            const t = e[c],
              r = e[u];
            if (t) await l(t);
            else if (r) {
              const e = await f();
              return Promise.resolve({ token: e });
            }
          });
        },
      };
    function p(e, t) {
      const r = t.exec(e);
      return r && r.length > 1 ? r[1] : "";
    }
    const g = (e) =>
      e.replace(/\\u[\dA-F]{4}/gi, (e) =>
        String.fromCharCode(parseInt(e.replace(/\\u/g, ""), 16))
      );
    async function m() {
      const e = await v(
          "https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed"
        ),
        t = e.match(/\{\\"dtsg\\":\{\\"token\\":\\"([^\\]+)/);
      if (!t) throw new Error("please login facebook.");
      const r = t[1];
      let n = e.match(/\\"NAME\\":\\"([^"]+)/);
      n = n[1].slice(0, -1).replace(/\\\\/g, "\\");
      const o = g(n);
      let a = e.match(/\\"ACCOUNT_ID\\":\\"([^"]+)/);
      a = a[1].slice(0, -1).replace(/\\\\/g, "\\");
      let s = e.match(/\\"USER_ID\\":\\"([^"]+)/);
      if (((s = s[1].slice(0, -1).replace(/\\\\/g, "\\")), s != a))
        throw new Error(
          "Please switch Facebook to user account. It doesn't support page account."
        );
      const i = e.match(/server_revision+\\":+(\d+)/)[1],
        c = `https://graph.facebook.com/${a}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      return { fb_dtsg: r, fb_user_id: a, fb_name: o, fb_avator: c, fb_rev: i };
    }
    async function h() {
      const e = await v("https://business.facebook.com/creatorstudio/home"),
        t = e.match(/DTSGInitData.*token":"(.*)","async_get_token/);
      if (!t) throw new Error("please login facebook.");
      const r = t[1];
      let n = e.match(/"NAME":"([^"]+)/);
      n = n[1].slice(0, -1).replace(/\\\\/g, "\\");
      const o = g(n);
      let a = e.match(/"ACCOUNT_ID":"(\d+)/);
      a = a[1];
      let s = e.match(/"USER_ID":"(\d+)/);
      if (((s = s[1]), s != a))
        throw new Error(
          "Please switch Facebook to user account. It doesn't support page account."
        );
      const i = e.match(/server_revision":(\d+)/)[1],
        c = `https://graph.facebook.com/${a}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      return { fb_dtsg: r, fb_user_id: a, fb_name: o, fb_avator: c, fb_rev: i };
    }
    async function b() {
      const { fb_dtsg: e } = await a["a"]("fb_dtsg");
      let t = "";
      for (var r = 0; r < e.length; r++) t += e.charCodeAt(r);
      return (t = "2" + t), console.log("[jazoest]", t), t;
    }
    async function y() {
      const e = await v("https://business.facebook.com/creatorstudio/home"),
        t = p(e, /userAccessToken":"(\w+)"/g);
      return console.log("[token cs]", t), { fb_token_studio: t };
    }
    async function A() {
      const e = await v(
          "https://www.facebook.com/dialog/oauth?scope=user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,email,manage_notifications,manage_pages,publish_actions,publish_pages,read_friendlists,read_insights,read_page_mailboxes,read_stream,rsvp_event,publish_to_groups, groups_access_member_info, read_mailbox&response_type=token&client_id=124024574287414&redirect_uri=fb124024574287414://authorize/&sso_key=com&display="
        ),
        t = p(e, /\\"scope\\" value=\\"(.+?)\\/g),
        r = p(e, /\\"encrypted_post_body\\" value=\\"(.+?)\\/g);
      console.log("[scopex]", t, "[encrypted_post_body]", r);
      const { fb_dtsg: n, jazoest: o } = await a["a"](["fb_dtsg", "jazoest"]),
        s = await _(
          "https://www.facebook.com/v1.0/dialog/oauth/skip/submit/",
          `jazoest=${o}&fb_dtsg=${n}&from_post=1&__CONFIRM__=1&scope=${t}&display=page&sdk=&domain=&sso_device=ios&state=&user_code=&nonce=&auth_type=&auth_nonce=&nonce=&return_format%5B%5D=access_token&encrypted_post_body=${r}`
        ),
        i = p(s, /#(?:access_token)=([\S\s]*?)&/g);
      return console.log("[token ig]", i), i;
    }
    async function v(e, t = "text") {
      const r = await fetch(e, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          referrer: "https://m.facebook.com",
          "sec-fetch-site": "none",
        },
      });
      return "json" === t ? await r.json() : await r.text();
    }
    async function _(e, t, r = "text") {
      const n = await fetch(e, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        credentials: "include",
        body: t,
      });
      return "json" === r ? await n.json() : await n.text();
    }
  },
  fe77: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r("9845"),
      o = r.n(n),
      a = r("c276"),
      s = r("7868"),
      i = r("2a36"),
      c = r("fdde");
    Object(s["b"])(s["a"].LOGIN, async function () {
      try {
        const e = await Object(i["b"])();
        Object(s["c"])(s["a"].RESP_LOGIN, { code: 1, res: e });
      } catch (e) {
        Object(s["c"])(s["a"].RESP_LOGIN, { code: -1, err: e });
      }
    }),
      c["b"].listen(),
      o.a.action.onClicked.addListener(() => {
        o.a.tabs.create({ url: Object(a["a"])("dashboard.html") });
      });
  },
});
