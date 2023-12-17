(function (t) {
  function e(e) {
    for (
      var a, r, o = e[0], c = e[1], l = e[2], d = 0, f = [];
      d < o.length;
      d++
    )
      (r = o[d]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && f.push(n[r][0]),
        (n[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    u && u(e);
    while (f.length) f.shift()();
    return i.push.apply(i, l || []), s();
  }
  function s() {
    for (var t, e = 0; e < i.length; e++) {
      for (var s = i[e], a = !0, o = 1; o < s.length; o++) {
        var c = s[o];
        0 !== n[c] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = r((r.s = s[0]))));
    }
    return t;
  }
  var a = {},
    n = { dashboard: 0 },
    i = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var s = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function (t, e, s) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (r.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            s,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return s;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  i.push([0, "chunk-vendors"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("7c3d");
  },
  "2a36": function (t, e, s) {
    "use strict";
    s.d(e, "b", function () {
      return d;
    }),
      s.d(e, "c", function () {
        return f;
      }),
      s.d(e, "a", function () {
        return p;
      }),
      s.d(e, "d", function () {
        return h;
      });
    var a = s("d3ff"),
      n = (s("caad"), s("9845")),
      i = s.n(n),
      r = s("c276"),
      o = s("9a1b");
    function c() {
      function t() {
        return new Promise(function (t, e) {
          l().then((s) => {
            i.a.runtime.lastError
              ? e(i.a.runtime.lastError)
              : o["b"](s).then(t).catch(e);
          });
        });
      }
      return t();
    }
    function l() {
      return new Promise(function (t, e) {
        const s = i.a.runtime.getManifest(),
          { client_id: a, scopes: n } = s.oauth2,
          o = i.a.identity.getRedirectURL(),
          c = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${a}&response_type=token&redirect_uri=${encodeURIComponent(
            o
          )}&scope=${encodeURIComponent(n.join(" "))}`;
        i.a.identity
          .launchWebAuthFlow({ url: c, interactive: !0 })
          .then((s) => {
            if (!s.includes("#")) return e("auth fail");
            s = s.replace("#", "?");
            const { access_token: a } = Object(r["c"])(s);
            t(a);
          });
      });
    }
    const u = "user";
    async function d() {
      const t = await c();
      return await h.set(t), t;
    }
    const f = async () => {
        await h.del();
      },
      p = async () => {
        const t = await h.get();
        return !!t.email;
      },
      h = {
        get: async () => {
          const t = await a["a"](u);
          return JSON.parse(t[u] || "{}");
        },
        set: (t) => a["c"]({ [u]: JSON.stringify(t) }),
        del: () => a["b"](u),
      };
  },
  "2d0c": function (t, e, s) {},
  "3bbc": function (t, e, s) {
    "use strict";
    s("50d9");
  },
  4678: function (t, e, s) {
    var a = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df48",
      "./fa.js": "8df48",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b46",
      "./gd.js": "f6b46",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function n(t) {
      var e = i(t);
      return s(e);
    }
    function i(t) {
      if (!s.o(a, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return a[t];
    }
    (n.keys = function () {
      return Object.keys(a);
    }),
      (n.resolve = i),
      (t.exports = n),
      (n.id = "4678");
  },
  "50d9": function (t, e, s) {},
  "57d7": function (t, e, s) {},
  "5ad0": function (t, e, s) {},
  "6bc9": function (t, e, s) {
    "use strict";
    s.d(e, "a", function () {
      return r;
    }),
      s.d(e, "b", function () {
        return o;
      }),
      s.d(e, "d", function () {
        return c;
      }),
      s.d(e, "c", function () {
        return u;
      });
    s("d9e2"), s("caad");
    var a = s("d3ff"),
      n = s("c276");
    const i = "https://graph.facebook.com/",
      r = () => d("me?fields=id"),
      o = (t) => d("?id=" + t),
      c = async (t) => {
        const {
          fb_user_id: e,
          fb_dtsg: s,
          jazoest: n,
          fb_rev: i,
        } = await a["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]);
        let r = [];
        for (const a of t) {
          let t = new FormData();
          t.append("upload_1024", a);
          const o = `https://upload.facebook.com/ajax/mercury/upload.php?request_user_id=${e}&__user=${e}&__a=1&__req=3d&__be=1&dpr=1.5&__rev=${i}&__s=%3Aidl0z4%3A9y9r1n&fb_dtsg=${s}&jazoest=${n}&__spin_r=${i}&__spin_b=trunk`,
            c = await fetch(o, {
              method: "POST",
              mode: "cors",
              credentials: "include",
              body: t,
            }),
            l = await c.text(),
            u = f(l),
            d = u.payload.metadata[0].fbid;
          r.push(d);
        }
        return r;
      };
    async function l(t) {
      const {
          fb_user_id: e,
          fb_dtsg: s,
          fb_rev: n,
        } = await a["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]),
        i = `image_height=960&image_width=960&uri=${t}&__user=${e}&fb_dtsg=${s}&__rev=${n}&__a=1&__dyn=7AmajEzUGByA5Q9UoHaEWC5ER6yUmyVbGAEG8zCC-C26m6oDAyoS2N6wAxu13wFG2KfgjyR88wPGiex3BKuEjKeCxicxabwTz9VobrCCyWCzEbeuifz8lUlwnoCium8yUgx66EK78vDx2r_xLgWmmu5Ww`,
        r = "https://www.facebook.com/message_share_attachment/fromURI/",
        o = await p(i, r, "text"),
        c = f(o);
      if (!c.payload) throw new Error("Invalid url");
      return c.payload.share_data;
    }
    const u = async (t, e, s = []) => {
      const {
          fb_user_id: i,
          fb_dtsg: r,
          jazoest: o,
          fb_rev: c,
        } = await a["a"](["fb_user_id", "fb_dtsg", "jazoest", "fb_rev"]),
        u = Math.floor(1e14 * Math.random()) + 1,
        d = s.length > 0;
      let h = [];
      d &&
        s.forEach((t, e) => {
          h.push(`image_ids[${e}]=${t}`);
        }),
        (h = h.join("&")),
        h.length > 0 && (h = "&" + h);
      let b = !1,
        _ = [];
      if (Object(n["e"])(e)) {
        const t = await l(e),
          { share_type: s, share_params: a } = t;
        _.push("shareable_attachment[share_type]=" + s);
        for (const e of Object.keys(a)) {
          const t = a[e];
          if (t)
            if (null == t) _.push(`shareable_attachment[share_params][${e}]=`);
            else if ("object" === typeof t)
              if (Array.isArray(t)) {
                if (t.length > 0) {
                  var m = 0;
                  for (const s of t)
                    s &&
                      (_.push(
                        `shareable_attachment[share_params][${e}][${m}]=${encodeURIComponent(
                          s
                        )}`
                      ),
                      m++);
                }
              } else
                for (const s of Object.keys(t)) {
                  const a = t[s];
                  if (Array.isArray(a)) {
                    var g = 0;
                    for (const t of a)
                      t &&
                        (_.push(
                          `shareable_attachment[share_params][${e}][${s}][${g}]=${encodeURIComponent(
                            t
                          )}`
                        ),
                        g++);
                  } else
                    a &&
                      _.push(
                        `shareable_attachment[share_params][${e}][${s}]=${encodeURIComponent(
                          a
                        )}`
                      );
                }
            else
              t &&
                _.push(
                  `shareable_attachment[share_params][${e}]=${encodeURIComponent(
                    t
                  )}`
                );
        }
        b = !0;
      }
      (_ = _.join("&")), _.length > 0 && (_ = "&" + _);
      let y = "&body=" + encodeURIComponent(e);
      console.log("y", y);
      console.log("e", e);
      console.log("c", c);
      console.log("r", r);
      console.log("o", o);
      console.log("type o", typeof(o));
      console.log("d", d);
      console.log("b", b);
      console.log("_", _);
      const v = await p(
        `client=mercury&action_type=ma-type%3Auser-generated-message${y}&has_attachment=${
          d || b ? "true" : "false"
        }${_}${h}&ephemeral_ttl_mode=0&message_id=${u}&offline_threading_id=${u}&other_user_fbid=${t}&source=source:chat:web&specific_to_list[0]=fbid%3A${t}&specific_to_list[1]=fbid%3A${i}&timestamp=1564061116109&request_user_id=${i}&__user=${i}&__a=1&__req=1n&__be=1&dpr=1.5&__rev=${c}&__s=%3A38ai1u%3Amxgv29&fb_dtsg=${r}&jazoest=${o}&ui_push_phase=c3&__spin_r=${c}&__spin_b=trunk`,
        "https://www.facebook.com/messaging/send/",
        "text"
      );
      return f(v);
    };
    async function d(t, e = null) {
      const { fb_access_token: s } = await a["a"]("fb_access_token");
      let n = `${i}${t}`;
      const r = n.includes("?") ? "&" : "?";
      n = `${n}${r}access_token=${e || s}`;
      const o = await fetch(n);
      if (200 !== o.status) throw new Error("network err: " + o.status);
      const c = await o.json();
      return c;
    }
    function f(t) {
      t = t.replace("for (;;);", "");
      const e = JSON.parse(t);
      if ("1404102" === e.error)
        throw new Error(
          "Since the link you put on Facebook is seen as spam, please check your account on Facebook.com."
        );
      if (e.errorDescription)
        throw new Error(e.errorDescription.__html || e.errorDescription);
      return e;
    }
    async function p(t, e, s = "json") {
      const a = await fetch(e || "https://www.facebook.com/api/graphql/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        credentials: "include",
        body: t,
      });
      return "json" === s ? await a.json() : await a.text();
    }
  },
  7868: function (t, e, s) {
    "use strict";
    s.d(e, "a", function () {
      return i;
    }),
      s.d(e, "b", function () {
        return o;
      }),
      s.d(e, "c", function () {
        return c;
      });
    var a = s("9845"),
      n = s.n(a);
    const i = { LOGIN: "LOGIN", RESP_LOGIN: "RESP_LOGIN" };
    let r = {};
    function o(t, e) {
      (r[t] = r[t] || []), r[t].push(e);
    }
    function c(t, e, s) {
      n.a.runtime.sendMessage({ event: t, data: e }, s);
    }
    n.a.runtime.onMessage.addListener((t, e, s) => {
      const { event: a, data: n } = t,
        i = r[a] || [];
      for (const r of i) r(n, e, s);
    });
  },
  "7c3d": function (t, e, s) {
    "use strict";
    s.r(e);
    var a = s("2b0e"),
      n = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "container", attrs: { id: "app" } },
          [
            e("Nav"),
            e("router-view"),
            e("Footer"),
            e(
              "b-modal",
              {
                attrs: { width: 450, scroll: "keep" },
                model: {
                  value: t.settingVisible,
                  callback: function (e) {
                    t.settingVisible = e;
                  },
                  expression: "settingVisible",
                },
              },
              [
                e(
                  "div",
                  { staticStyle: { background: "#fff" } },
                  [e("Setting")],
                  1
                ),
              ]
            ),
            e(
              "b-modal",
              {
                attrs: { width: 450, scroll: "keep" },
                model: {
                  value: t.buyVisible,
                  callback: function (e) {
                    t.buyVisible = e;
                  },
                  expression: "buyVisible",
                },
              },
              [e("div", { staticStyle: { background: "#fff" } }, [e("Buy")], 1)]
            ),
          ],
          1
        );
      },
      i = [],
      r = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass:
              "header is-flex is-justify-content-space-between is-align-items-center p-2 pt-4 mb-2",
          },
          [
            e(
              "div",
              {
                staticClass:
                  "icon-text has-text-weight-bold has-text-primary is-flex is-align-items-center is-size-4",
              },
              [
                e("b-icon", {
                  attrs: {
                    pack: "fas",
                    icon: "paper-plane",
                    size: "is-medium",
                  },
                }),
                e("span", [t._v("MessengerSender")]),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "nav" },
              [
                e(
                  "router-link",
                  { attrs: { to: { name: "Home" } } },
                  [
                    e("b-icon", {
                      attrs: { pack: "fas", icon: "paper-plane" },
                    }),
                    e("span", [t._v("Home")]),
                  ],
                  1
                ),
                e(
                  "router-link",
                  { attrs: { to: { name: "Find" } } },
                  [
                    e("b-icon", { attrs: { pack: "fas", icon: "search" } }),
                    e("span", [t._v("ID Find")]),
                  ],
                  1
                ),
                t.tools.length > 0
                  ? e(
                      "b-dropdown",
                      {
                        attrs: { triggers: ["hover"], "aria-role": "list" },
                        scopedSlots: t._u(
                          [
                            {
                              key: "trigger",
                              fn: function () {
                                return [
                                  e("b-button", {
                                    attrs: {
                                      label: "Tools",
                                      type: "is-default",
                                      outlined: "",
                                      "icon-left": "star",
                                      "icon-right": "angle-down",
                                    },
                                  }),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          1669962969
                        ),
                      },
                      t._l(t.tools, function (s) {
                        return e(
                          "b-dropdown-item",
                          { key: s.name, attrs: { "aria-role": "listitem" } },
                          [
                            e(
                              "a",
                              {
                                staticClass: "tool-link",
                                attrs: { href: s.url, target: "_blank" },
                              },
                              [
                                e(
                                  "figure",
                                  { staticClass: "image is-24x24 mr-2" },
                                  [e("img", { attrs: { src: s.icon } })]
                                ),
                                t._v(" " + t._s(s.name) + " "),
                              ]
                            ),
                          ]
                        );
                      }),
                      1
                    )
                  : t._e(),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "buttons", staticStyle: { "min-width": "200px" } },
              [
                t.userReady
                  ? e(
                      "b-button",
                      {
                        on: {
                          click: function (e) {
                            return t.$root.$emit("toggle-setting", !0);
                          },
                        },
                      },
                      [e("b-icon", { attrs: { pack: "fas", icon: "cog" } })],
                      1
                    )
                  : t._e(),
                t.userReady
                  ? e(
                      "b-button",
                      {
                        attrs: {
                          type: "is-danger",
                          "icon-left": "gem",
                          outlined: "",
                        },
                        on: {
                          click: function (e) {
                            return t.$root.$emit("toggle-buy", !0);
                          },
                        },
                      },
                      [t._v(" UPGRADE TO PRO ")]
                    )
                  : t._e(),
              ],
              1
            ),
          ]
        );
      },
      o = [],
      c = s("2f62"),
      l = s("a553"),
      u = {
        data() {
          return { WEB: l["f"] };
        },
        computed: { ...Object(c["c"])(["userReady", "pro", "tools"]) },
        async created() {},
        components: {},
      },
      d = u,
      f = (s("a4f4"), s("2877")),
      p = Object(f["a"])(d, r, o, !1, null, null, null),
      h = p.exports,
      b = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "my-2" }, [
          e("div", { staticClass: "content is-small has-text-centered" }, [
            t._v(" © 2022 "),
            e("a", { on: { click: t.openWebsite } }, [t._v(" UNISPY ")]),
            t._v(" (v" + t._s(t.version) + ") "),
          ]),
        ]);
      },
      _ = [],
      m = s("9845"),
      g = s.n(m),
      y = s("c276"),
      v = {
        data() {
          return { version: Object(y["d"])() };
        },
        methods: {
          openWebsite() {
            g.a.tabs.create({ url: l["f"] });
          },
        },
      },
      w = v,
      k = Object(f["a"])(w, b, _, !1, null, null, null),
      j = k.exports,
      x = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "setting box" },
          [
            e(
              "div",
              { staticClass: "icon-text" },
              [
                e("b-icon", {
                  attrs: { pack: "fas", icon: "question-circle" },
                }),
                e("b", [t._v("FAQs and Troubleshooting")]),
              ],
              1
            ),
            e("p", { staticClass: "block" }, [
              t._v(
                " Got a question? Something doesn’t work? Your question may was answered on our FAQ page. "
              ),
            ]),
            e("div", {}, [
              e(
                "a",
                {
                  staticClass: "button is-fullwidth is-outlined",
                  attrs: { href: t.WEB + "#faq", target: "_blank" },
                },
                [t._v("FAQs PAGE")]
              ),
            ]),
            e("hr"),
            e(
              "div",
              [
                e("p", [
                  t._v(
                    " If you have installed other FB extension, there maybe conflict, Force re-init to fixed the problem after using other extension. "
                  ),
                ]),
                e(
                  "b-button",
                  {
                    attrs: {
                      type: "is-danger",
                      outlined: "",
                      expanded: "",
                      loading: t.loading,
                    },
                    on: { click: t.forceInit },
                  },
                  [t._v(" Force re-init access token ")]
                ),
              ],
              1
            ),
            e("hr"),
            e("p", [
              t._v(
                " Do you have an idea for making FBMessengerSender better? We'd love to hear about it! "
              ),
            ]),
            e(
              "div",
              { staticClass: "icon-text has-text-link" },
              [
                e("b-icon", {
                  attrs: { pack: "fas", icon: "envelope-open-text" },
                }),
                t._v(" unispy.app@gmail.com "),
              ],
              1
            ),
            t.userReady
              ? [
                  e("hr"),
                  e(
                    "div",
                    [
                      e("p", { staticClass: "has-text-centered" }, [
                        t._v(t._s(t.userInfo.email)),
                      ]),
                      e(
                        "b-button",
                        {
                          staticClass: "has-text-weight-bold",
                          attrs: {
                            type: "is-danger is-light",
                            expanded: "",
                            "icon-left": "sign-out-alt",
                          },
                          on: { click: t.logout },
                        },
                        [t._v(" LOGOUT ")]
                      ),
                    ],
                    1
                  ),
                ]
              : t._e(),
          ],
          2
        );
      },
      C = [],
      S = s("2a36"),
      I = s("fdde"),
      $ = {
        data() {
          return { WEB: l["f"], loading: !1 };
        },
        computed: { ...Object(c["c"])(["userReady", "userInfo"]) },
        methods: {
          ...Object(c["b"])(["setUserReady"]),
          async logout() {
            await Object(S["c"])(),
              this.setUserReady(!1),
              this.$root.$emit("toggle-setting", !1),
              this.$router.replace({ name: "Index" });
          },
          async forceInit() {
            this.loading = !0;
            try {
              await I["a"](!0),
                this.$buefy.toast.open("re-init done."),
                this.$root.$emit("toggle-setting", !1);
            } catch (t) {
              this.$buefy.toast.open(t.message || "init error"),
                (this.loading = !1);
            }
          },
        },
        async created() {},
      },
      U = $,
      A = Object(f["a"])(U, x, C, !1, null, null, null),
      T = A.exports,
      O = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          { staticClass: "buy box" },
          [
            e("table", { staticClass: "table is-fullwidth is-striped mb-2" }, [
              e("thead", [
                e("tr", [
                  e("th"),
                  e(
                    "th",
                    { staticClass: "has-text-centered has-text-grey-light" },
                    [t._v("Free")]
                  ),
                  e(
                    "th",
                    { staticClass: "has-text-centered has-text-danger" },
                    [
                      e("b-icon", {
                        attrs: { pack: "fas", icon: "gem", size: "is-small" },
                      }),
                      e("span", [t._v("Pro")]),
                    ],
                    1
                  ),
                ]),
              ]),
              t._m(0),
            ]),
            t.pro.vip
              ? [
                  e("table", { staticClass: "table is-fullwidth" }, [
                    e("tr", [
                      e("td", [t._v("Your Plan")]),
                      e(
                        "td",
                        [
                          e(
                            "b-tag",
                            {
                              staticClass: "has-text-weight-bold",
                              attrs: {
                                type:
                                  1 === t.pro.vip ? "is-danger" : "is-warning",
                              },
                            },
                            [
                              e("b-icon", {
                                attrs: { pack: "fas", icon: "gem" },
                              }),
                              e("span", [t._v("PRO")]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]),
                    t.pro.next_bill_date
                      ? e("tr", [
                          e("td", [t._v("Next Billing Date:")]),
                          e("td", [
                            t._v(
                              t._s(
                                new Date(t.pro.next_bill_date).toLocaleString()
                              )
                            ),
                          ]),
                        ])
                      : t._e(),
                    t.pro.cancellation_effective_date
                      ? e("tr", [
                          e("td", [t._v("Plan End Date:")]),
                          e("td", [
                            t._v(
                              " " +
                                t._s(
                                  new Date(
                                    t.pro.cancellation_effective_date
                                  ).toLocaleString()
                                ) +
                                " "
                            ),
                          ]),
                        ])
                      : t._e(),
                    e("tr", [
                      e("td", [t._v("Billing Email:")]),
                      e("td", [t._v(t._s(t.pro.email))]),
                    ]),
                  ]),
                  e(
                    "div",
                    { staticClass: "buttons" },
                    [
                      t.pro.update_url
                        ? e(
                            "b-button",
                            {
                              attrs: {
                                type: "is-primary is-light",
                                outlined: "",
                                expanded: "",
                              },
                              on: {
                                click: function (e) {
                                  return t.openUrl(t.pro.update_url);
                                },
                              },
                            },
                            [t._v(" Update Billing Info ")]
                          )
                        : t._e(),
                      t.pro.cancel_url
                        ? e(
                            "b-button",
                            {
                              attrs: {
                                type: "is-danger is-light",
                                outlined: "",
                                expanded: "",
                              },
                              on: {
                                click: function (e) {
                                  return t.openUrl(t.pro.cancel_url);
                                },
                              },
                            },
                            [t._v(" Cancel Subscription ")]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                  t.pro.msg
                    ? e(
                        "b-notification",
                        {
                          attrs: { type: "is-warning is-light", closable: !1 },
                        },
                        [
                          e("b-icon", {
                            attrs: { pack: "fas", icon: "info-circle" },
                          }),
                          t._v(" " + t._s(t.pro.msg) + " "),
                        ],
                        1
                      )
                    : t._e(),
                ]
              : [
                  e(
                    "div",
                    {
                      staticClass:
                        "has-text-centered has-background-warning discount mb-3",
                    },
                    [
                      e(
                        "p",
                        [
                          t._v(" 20% Off, "),
                          e("b-icon", {
                            staticStyle: { color: "white" },
                            attrs: {
                              pack: "fas",
                              icon: "bolt",
                              size: "is-small",
                              "custom-class": "my-icon",
                            },
                          }),
                          t._v(" Limited time offer. "),
                        ],
                        1
                      ),
                    ]
                  ),
                  e(
                    "ul",
                    { staticClass: "price-list is-flex" },
                    t._l(t.plan, function (s) {
                      return e("li", { key: s.id }, [
                        e("div", { staticClass: "card" }, [
                          e(
                            "div",
                            { staticClass: "card-content" },
                            [
                              e(
                                "h2",
                                {
                                  staticClass:
                                    "is-size-7 has-text-weight-semibold mb-1",
                                },
                                [t._v(" " + t._s(s.name) + " ")]
                              ),
                              e(
                                "p",
                                { staticClass: "reserve has-text-centered" },
                                [
                                  e("b-tag", { attrs: { rounded: "" } }, [
                                    t._v(" " + t._s(s.reservePrice) + " "),
                                  ]),
                                ],
                                1
                              ),
                              s.popular
                                ? e(
                                    "b-tag",
                                    {
                                      staticClass:
                                        "popular has-text-weight-semibold is-success is-light",
                                    },
                                    [t._v(" Most Popular ")]
                                  )
                                : t._e(),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "month-amt has-text-black is-size-4 has-text-weight-semibold has-text-centered",
                                },
                                [
                                  e(
                                    "span",
                                    {
                                      staticClass:
                                        "symbol is-size-7 has-text-grey-light has-text-weight-normal",
                                    },
                                    [t._v("$")]
                                  ),
                                  t._v(t._s(s.pricePerMonth)),
                                  e(
                                    "span",
                                    {
                                      staticClass:
                                        "is-size-7 has-text-weight-normal",
                                    },
                                    [t._v("/mo")]
                                  ),
                                ]
                              ),
                              e(
                                "p",
                                {
                                  staticClass:
                                    "total-amt has-text-centered has-text-grey mb-2",
                                },
                                [
                                  t._v(
                                    " $" +
                                      t._s(s.price) +
                                      " billed " +
                                      t._s(s.month) +
                                      " month "
                                  ),
                                ]
                              ),
                              e(
                                "a",
                                {
                                  staticClass:
                                    "button is-danger is-fullwidth has-text-weight-semibold",
                                  on: {
                                    click: function (e) {
                                      return t.buy(s.id);
                                    },
                                  },
                                },
                                [e("span", [t._v("Try it now")])]
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]);
                    }),
                    0
                  ),
                  e(
                    "p",
                    { staticClass: "confident has-text-grey mt-2" },
                    [
                      e("b-icon", {
                        attrs: {
                          pack: "fas",
                          icon: "lock",
                          size: "is-small",
                          "custom-class": "my-icon",
                        },
                      }),
                      t._v(" We use "),
                      e("span", { staticClass: "has-text-weight-bold" }, [
                        t._v("Paddle™️"),
                      ]),
                      t._v(" or "),
                      e("span", { staticClass: "has-text-weight-bold" }, [
                        t._v("Paypal™️"),
                      ]),
                      t._v(
                        " to process purchases and do not keep your card details. "
                      ),
                    ],
                    1
                  ),
                  e("div", { staticClass: "has-text-centered" }, [
                    e("img", { attrs: { src: t.safeLogo, width: "360" } }),
                  ]),
                ],
          ],
          2
        );
      },
      z = [
        function () {
          var t = this,
            e = t._self._c;
          return e("tbody", [
            e("tr", [
              e("td", [t._v("Bulk send messages a day")]),
              e("td", { staticClass: "has-text-centered" }, [t._v("10")]),
              e(
                "td",
                { staticClass: "has-text-centered has-text-weight-bold" },
                [t._v("UNLIMITED")]
              ),
            ]),
            e("tr", [
              e("td", [t._v("User ID Find")]),
              e("td", { staticClass: "has-text-centered" }, [
                e("span", { staticClass: "icon has-text-danger is-small" }, [
                  e("i", { staticClass: "fas fa-check-circle" }),
                ]),
              ]),
              e("td", { staticClass: "has-text-centered" }, [
                e("span", { staticClass: "icon has-text-danger is-small" }, [
                  e("i", { staticClass: "fas fa-check-circle" }),
                ]),
              ]),
            ]),
          ]);
        },
      ],
      L = {
        name: "Buy",
        data() {
          return {
            WEB: l["f"],
            safeLogo: Object(y["a"])("/assets/secure-payment.jpg"),
          };
        },
        computed: {
          ...Object(c["c"])(["userInfo", "pro"]),
          plan() {
            return this.pro.plan || [];
          },
        },
        methods: {
          buy(t) {
            const { uid: e } = this.userInfo,
              s = `${l["b"]}/pay2?uid=${e}&planId=${t}`;
            g.a.tabs ? g.a.tabs.create({ url: s }) : window.open(s);
          },
          openUrl(t) {
            g.a.tabs.create({ url: t });
          },
        },
        mounted() {},
      },
      E = L,
      R = (s("ab68"), Object(f["a"])(E, O, z, !1, null, null, null)),
      N = R.exports,
      P = {
        data() {
          return { buyVisible: !1, settingVisible: !1 };
        },
        created() {
          this.$root.$on("toggle-buy", (t = !0) => {
            this.buyVisible = t;
          }),
            this.$root.$on("toggle-setting", (t = !0) => {
              this.settingVisible = t;
            });
        },
        components: { Nav: h, Footer: j, Setting: T, Buy: N },
      },
      M = P,
      D = (s("b2c5"), Object(f["a"])(M, n, i, !1, null, null, null)),
      F = D.exports,
      B = s("8c4f"),
      G =
        (s("caad"),
        function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "home" },
            [
              e("div", { staticClass: "columns box my-4" }, [
                e(
                  "div",
                  { staticClass: "sender column mr-2" },
                  [
                    [t.STATUS.running, t.STATUS.paused].includes(t.status)
                      ? e("div", { staticClass: "mask" })
                      : t._e(),
                    e(
                      "b-field",
                      {
                        attrs: { message: "one UserID / PageID one line." },
                        scopedSlots: t._u([
                          {
                            key: "label",
                            fn: function () {
                              return [
                                t._v(
                                  " Facebook User ID / Page ID List (" +
                                    t._s(t.form.userIdList.length) +
                                    ") "
                                ),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      [
                        e("b-input", {
                          attrs: {
                            maxlength: "10000",
                            type: "textarea",
                            placeholder: t.ph_userId,
                          },
                          model: {
                            value: t.userIdStr,
                            callback: function (e) {
                              t.userIdStr = e;
                            },
                            expression: "userIdStr",
                          },
                        }),
                      ],
                      1
                    ),
                    e(
                      "b-field",
                      {
                        attrs: {
                          label: "Message",
                          message:
                            "syntax text supported, placeholder <FULLNAME>, <USERNAME>, <FIRSTNAME>, <LASTNAME> automatically replaced.",
                        },
                      },
                      [
                        e("b-input", {
                          attrs: {
                            maxlength: "10000",
                            type: "textarea",
                            placeholder:
                              "{hi|hello} <FULLNAME>, {nice|glad} to meet {you|u}.",
                          },
                          model: {
                            value: t.form.text,
                            callback: function (e) {
                              t.$set(t.form, "text", e);
                            },
                            expression: "form.text",
                          },
                        }),
                      ],
                      1
                    ),
                    e(
                      "b-field",
                      {
                        attrs: {
                          label: "Pictures (optional)",
                          message:
                            "multiple files supported, send photos may slower",
                        },
                      },
                      [
                        e(
                          "b-upload",
                          {
                            attrs: {
                              multiple: "",
                              "drag-drop": "",
                              accept: "image/*",
                            },
                            model: {
                              value: t.files,
                              callback: function (e) {
                                t.files = e;
                              },
                              expression: "files",
                            },
                          },
                          [
                            t.files.length <= 0
                              ? e("section", { staticClass: "section" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass: "content has-text-centered",
                                    },
                                    [
                                      e("b-icon", {
                                        attrs: {
                                          icon: "upload",
                                          size: "is-large",
                                        },
                                      }),
                                      e("div", [
                                        t._v(
                                          "Drop your files here or click to upload"
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ])
                              : e("section", { staticClass: "section" }, [
                                  e(
                                    "div",
                                    {
                                      staticClass: "content has-text-centered",
                                    },
                                    [
                                      e("b-icon", {
                                        attrs: {
                                          icon: "file",
                                          size: "is-large",
                                        },
                                      }),
                                      e("div", [
                                        t._v(t._s(t.files.length) + " files"),
                                      ]),
                                      e(
                                        "b-button",
                                        {
                                          attrs: {
                                            type: "is-danger",
                                            outlined: "",
                                            size: "is-small",
                                          },
                                          on: {
                                            click: function (e) {
                                              return (
                                                e.stopPropagation(),
                                                t.clearFiles.apply(
                                                  null,
                                                  arguments
                                                )
                                              );
                                            },
                                          },
                                        },
                                        [t._v(" Remove all files ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    e(
                      "b-field",
                      {
                        attrs: {
                          label: `Interval between requests (${t.form.wait[0]} - ${t.form.wait[1]} minutes)`,
                        },
                      },
                      [
                        e(
                          "b-slider",
                          {
                            attrs: { min: 1, max: 60, tooltip: "" },
                            model: {
                              value: t.form.wait,
                              callback: function (e) {
                                t.$set(t.form, "wait", e);
                              },
                              expression: "form.wait",
                            },
                          },
                          [
                            t._l([1, 5, 10, 20, 30, 40, 50, 60], function (s) {
                              return [
                                e(
                                  "b-slider-tick",
                                  { key: s, attrs: { value: s } },
                                  [t._v(t._s(s) + "m")]
                                ),
                              ];
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e(
                      "b-field",
                      { attrs: { grouped: "" } },
                      [
                        e(
                          "b-field",
                          {
                            attrs: {
                              label: `Pause every (${t.form.pause.num}) messages`,
                              expanded: "",
                            },
                          },
                          [
                            e("b-numberinput", {
                              attrs: {
                                placeholder: "10",
                                min: 1,
                                max: 100,
                                size: "is-small",
                              },
                              model: {
                                value: t.form.pause.num,
                                callback: function (e) {
                                  t.$set(t.form.pause, "num", e);
                                },
                                expression: "form.pause.num",
                              },
                            }),
                          ],
                          1
                        ),
                        e(
                          "b-field",
                          {
                            attrs: {
                              label: `wait for (${t.form.pause.wait}) minutes`,
                              expanded: "",
                            },
                          },
                          [
                            e("b-numberinput", {
                              attrs: {
                                placeholder: "10",
                                min: 1,
                                max: 500,
                                size: "is-small",
                              },
                              model: {
                                value: t.form.pause.wait,
                                callback: function (e) {
                                  t.$set(t.form.pause, "wait", e);
                                },
                                expression: "form.pause.wait",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e(
                      "div",
                      { staticClass: "has-text-centered mt-5" },
                      [
                        e(
                          "b-button",
                          {
                            attrs: {
                              disabled: !t.canSave,
                              expanded: "",
                              type: "is-primary",
                              "icon-left": "paper-plane",
                            },
                            on: { click: t.save },
                          },
                          [t._v(" Send ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "column result" },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "has-text-white is-flex is-justify-content-center",
                      },
                      [
                        e("b-icon", {
                          attrs: {
                            pack: "fas",
                            icon: t.statusIcon,
                            "custom-class":
                              t.status === t.STATUS.running ? "fa-spin" : null,
                          },
                        }),
                        e("p", { staticClass: "ml-2" }, [
                          t._v(t._s(t.statusText)),
                        ]),
                      ],
                      1
                    ),
                    e("b-progress", {
                      attrs: {
                        value: t.result.index,
                        max: t.result.total,
                        "show-value": "",
                        rounded: !1,
                        format: "percent",
                        size: "is-large",
                        type: "is-primary",
                      },
                    }),
                    [t.STATUS.running, t.STATUS.paused].includes(t.status)
                      ? e(
                          "div",
                          { staticClass: "buttons" },
                          [
                            e(
                              "b-button",
                              {
                                attrs: {
                                  "icon-left":
                                    t.status === t.STATUS.running
                                      ? "pause-circle"
                                      : "play",
                                },
                                on: { click: t.pauseOrResume },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(
                                      t.status === t.STATUS.running
                                        ? "PAUSE"
                                        : "RESUME"
                                    ) +
                                    " "
                                ),
                              ]
                            ),
                            t.status === t.STATUS.paused
                              ? e(
                                  "b-button",
                                  {
                                    attrs: {
                                      "icon-left": "stop-circle",
                                      type: "is-danger",
                                    },
                                    on: { click: t.stop },
                                  },
                                  [t._v(" STOP ")]
                                )
                              : t._e(),
                          ],
                          1
                        )
                      : t._e(),
                    e(
                      "div",
                      {
                        staticClass:
                          "has-text-centered py-2 has-background-white",
                      },
                      [
                        e(
                          "b-button",
                          {
                            attrs: {
                              type: "is-primary",
                              disabled: t.result.successNum <= 0,
                              "icon-left": "copy",
                              size: "is-small",
                            },
                            on: {
                              click: function (e) {
                                return t.copy(!0);
                              },
                            },
                          },
                          [
                            t._v(
                              " Success (" + t._s(t.result.successNum) + ") "
                            ),
                          ]
                        ),
                        e(
                          "b-button",
                          {
                            staticClass: "ml-2",
                            attrs: {
                              disabled: t.result.failNum <= 0,
                              "icon-left": "copy",
                              size: "is-small",
                            },
                            on: {
                              click: function (e) {
                                return t.copy(!1);
                              },
                            },
                          },
                          [t._v(" Failure (" + t._s(t.result.failNum) + ") ")]
                        ),
                      ],
                      1
                    ),
                    e("div", { staticClass: "result-list" }, [
                      e(
                        "table",
                        {
                          staticClass:
                            "table is-fullwidth is-striped is-hoverable",
                        },
                        [
                          t._m(0),
                          e(
                            "tbody",
                            t._l(t.result.list, function (s) {
                              return e("tr", { key: s.id }, [
                                e("td", [t._v(t._s(s.id))]),
                                e("td", { staticClass: "has-text-right" }, [
                                  t._v(
                                    " " + t._s(s.ok ? "SUCCESS" : "FAIL") + " "
                                  ),
                                ]),
                              ]);
                            }),
                            0
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
              ]),
              e(
                "b-notification",
                {
                  attrs: {
                    type: "is-warning",
                    position: "is-top-right",
                    "has-icon": "",
                  },
                  model: {
                    value: t.showBuy,
                    callback: function (e) {
                      t.showBuy = e;
                    },
                    expression: "showBuy",
                  },
                },
                [
                  e("p", [t._v(t._s(t.errMsg))]),
                  e(
                    "b-button",
                    {
                      staticClass: "mt-2",
                      attrs: { type: "is-primary", size: "is-small" },
                      on: {
                        click: function (e) {
                          (t.showBuy = !1), t.$root.$emit("toggle-buy", !0);
                        },
                      },
                    },
                    [t._v(" Upgrade to PRO ")]
                  ),
                ],
                1
              ),
            ],
            1
          );
        }),
      V = [
        function () {
          var t = this,
            e = t._self._c;
          return e("thead", [
            e("tr", [
              e("th", [t._v("User ID / Page ID")]),
              e(
                "th",
                {
                  staticClass: "has-text-right",
                  staticStyle: { width: "100px" },
                },
                [t._v("Result")]
              ),
            ]),
          ]);
        },
      ],
      q = (s("d9e2"), s("5b81"), s("f904")),
      W = s.n(q),
      H = s("c1df"),
      J = s.n(H),
      Y = s("d3ff"),
      K = {
        data: {},
        async init() {
          const { quota: t } = await Y["a"]("quota");
          t
            ? ((this.data = t), await this.checkDateChange())
            : await this._newData();
        },
        async isVip() {
          let { vip: t } = await Y["a"]("vip");
          return !!t;
        },
        async remain() {
          return (
            await this.checkDateChange(), this.data.limit - this.data.total
          );
        },
        async increment(t = 1) {
          (this.data.total += t), await this.sync();
        },
        async checkDateChange() {
          const t = J()(this.data.updatedAt);
          J()().isAfter(t, "day") &&
            ((this.data.updatedAt = new Date().toISOString()),
            (this.data.total = 0),
            await this.sync());
        },
        async _newData() {
          (this.data = {
            limit: 10,
            total: 0,
            updatedAt: new Date().toISOString(),
          }),
            await this.sync();
        },
        async sync() {
          await Y["c"]({ quota: this.data });
        },
      },
      Q = s("6bc9"),
      Z = s("9a1b"),
      X = {
        computed: { ...Object(c["c"])(["userReady"]) },
        methods: {
          ...Object(c["b"])(["setUserReady", "setUserInfo", "setPro"]),
          async bootstrap() {
            const t = await Object(S["a"])();
            if ((this.setUserReady(t), t)) {
              const t = await S["d"].get();
              this.setUserInfo(t),
                Z["a"](t.uid).then(async (t) => {
                  this.setPro(t), await Y["c"]({ vip: 1 === t.vip });
                });
            }
          },
        },
      },
      tt = {
        data() {
          return {
            STATUS: l["c"],
            status: l["c"].pending,
            result: { total: 0, index: 0, successNum: 0, failNum: 0, list: [] },
          };
        },
        computed: {
          ...Object(c["c"])(["pro"]),
          statusIcon() {
            return l["d"][this.status];
          },
          statusText() {
            let t = l["e"][this.status];
            return (
              this.status === l["c"].running &&
                (t += ` ${this.result.index + 1} / ${this.result.total}`),
              t
            );
          },
        },
        methods: {
          async send() {},
          async pauseOrResume() {
            switch (this.status) {
              case l["c"].running:
                this.status = l["c"].paused;
                break;
              case l["c"].paused:
                (this.status = l["c"].running), setTimeout(this.send, 0);
                break;
            }
          },
          stop() {
            this.status = l["c"].done;
          },
        },
      },
      et = {
        name: "Home",
        data() {
          return {
            ph_userId: "1212121212\n231231918",
            userIdStr: "",
            files: [],
            form: {
              userIdList: [],
              text: "",
              files: [],
              wait: [5, 9],
              pause: { num: 45, wait: 15 },
            },
            showBuy: !1,
            remain: 0,
            errMsg: "",
          };
        },
        computed: {
          canSave() {
            if (![l["c"].pending, l["c"].done].includes(this.status)) return !1;
            const { userIdList: t, text: e } = this.form;
            return t.length > 0 && e.trim().length > 0;
          },
        },
        watch: {
          userIdStr(t) {
            const e = t.split(/[,|;|.|,|。|；| |\n]/g);
            this.form.userIdList = [
              ...new Set(e.filter((t) => /^\d+$/.test(t))),
            ];
          },
        },
        mixins: [X, tt],
        methods: {
          copy(t) {
            const e = this.result.list
              .filter((e) => e.ok === t)
              .map((t) => t.id)
              .join("\n");
            W()(e), this.$buefy.toast.open("copied");
          },
          clearFiles() {
            this.files = [];
          },
          async save() {
            await K.init();
            const t = await K.isVip();
            ////////////////////////////////////////////////////////////////////////////////////////////////
            // if (!t) {
            if (t) {
              const t = await K.remain();
              if (this.form.userIdList.length > t)
                return (
                  (this.errMsg =
                    t > 0
                      ? `You only remain ${t} quota messages.`
                      : "You have run out of daily quota"),
                  (this.showBuy = !0),
                  void (this.remain = t)
                );
              await K.increment(this.form.userIdList.length);
            }
            (this.form.files = this.files || []),
              (this.result = {
                total: this.form.userIdList.length,
                index: 0,
                list: [],
                successNum: 0,
                failNum: 0,
              }),
              (this.status = l["c"].running);
            const { wait: e, pause: s } = this.form;
            await l["g"].set({ wait: e, pause: s }),
              setTimeout(this.send, 0),
              window.scrollTo({ top: 0, behavior: "smooth" });
          },
          async send() {
            if (this.status !== l["c"].running) return;
            let { userIdList: t, text: e, files: s } = this.form,
              a = [];
            if (s && s.length > 0)
              try {
                a = await Q["d"](s);
              } catch (d) {
                return void this.$buefy.snackbar.open({
                  indefinite: !0,
                  message: d.message || "upload images fail.",
                });
              }
            const n = t[this.result.index];
            let i = !1,
              r = Object(y["b"])(e);
            try {
              if (
                r.includes("<USERNAME>") ||
                r.includes("<FULLNAME>") ||
                r.includes("<FIRSTNAME>") ||
                r.includes("<LASTNAME>")
              ) {
                let t = await Q["b"](n);
                if (!t || !t.name) throw new Error("user not found");
                (r = r.replaceAll("<USERNAME>", t.username || "")),
                  (r = r.replaceAll("<FULLNAME>", t.name || "")),
                  (r = r.replaceAll("<FIRSTNAME>", t.first_name || "")),
                  (r = r.replaceAll("<LASTNAME>", t.last_name || ""));
              }
              await Q["c"](n, r, a), (i = !0);
            } catch (d) {
              console.log(d);
            }
            if (
              ((this.result.list = [...this.result.list, { id: n, ok: i }]),
              i ? this.result.successNum++ : this.result.failNum++,
              this.result.index++,
              this.result.index >= this.result.total)
            )
              return void (this.status = l["c"].done);
            if (this.status !== l["c"].running) return;
            let o = null;
            const { wait: c, pause: u } = this.form;
            (o =
              u && this.result.index % u.num === 0
                ? 6e4 * u.wait
                : Object(y["f"])(6e4 * c[0], 6e4 * c[1])),
              setTimeout(this.send, o);
          },
        },
        async mounted() {
          const { wait: t, pause: e } = await l["g"].get();
          (this.form.wait = Array.isArray(t) ? t : [t, t]),
            (this.form.pause = e);
        },
        async created() {
          await this.bootstrap(),
            this.userReady || this.$router.replace({ name: "Index" });
        },
        components: {},
      },
      st = et,
      at = (s("3bbc"), Object(f["a"])(st, G, V, !1, null, null, null)),
      nt = at.exports,
      it = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "find" }, [
          e("div", { staticClass: "columns box my-4" }, [
            e(
              "div",
              { staticClass: "sender column mr-2" },
              [
                [t.STATUS.running, t.STATUS.paused].includes(t.status)
                  ? e("div", { staticClass: "mask" })
                  : t._e(),
                e(
                  "div",
                  { staticClass: "block" },
                  [
                    e(
                      "b-radio",
                      {
                        attrs: { "native-value": "user" },
                        model: {
                          value: t.type,
                          callback: function (e) {
                            t.type = e;
                          },
                          expression: "type",
                        },
                      },
                      [t._v(" Find User ID / Page ID ")]
                    ),
                    e(
                      "b-radio",
                      {
                        attrs: { "native-value": "group" },
                        model: {
                          value: t.type,
                          callback: function (e) {
                            t.type = e;
                          },
                          expression: "type",
                        },
                      },
                      [t._v(" Find Group ID ")]
                    ),
                  ],
                  1
                ),
                e(
                  "b-field",
                  {
                    attrs: { message: "one URL one line." },
                    scopedSlots: t._u([
                      {
                        key: "label",
                        fn: function () {
                          return [
                            t._v(
                              " Facebook " +
                                t._s(t.TIPS[t.type]) +
                                " URL List (" +
                                t._s(t.form.urlList.length) +
                                ") "
                            ),
                          ];
                        },
                        proxy: !0,
                      },
                    ]),
                  },
                  [
                    e("b-input", {
                      attrs: {
                        maxlength: "1000000",
                        type: "textarea",
                        rows: "15",
                        placeholder: t.PLACEHOLDERS[t.type],
                      },
                      model: {
                        value: t.urlStr,
                        callback: function (e) {
                          t.urlStr = e;
                        },
                        expression: "urlStr",
                      },
                    }),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "has-text-centered mt-5" },
                  [
                    e(
                      "b-button",
                      {
                        attrs: {
                          disabled: !t.canSave,
                          expanded: "",
                          type: "is-primary",
                          "icon-left": "search",
                        },
                        on: { click: t.save },
                      },
                      [t._v(" Search ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            e(
              "div",
              { staticClass: "column result" },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "has-text-white is-flex is-justify-content-center",
                  },
                  [
                    e("b-icon", {
                      attrs: {
                        pack: "fas",
                        icon: t.statusIcon,
                        "custom-class":
                          t.status === t.STATUS.running ? "fa-spin" : null,
                      },
                    }),
                    e("p", { staticClass: "ml-2" }, [t._v(t._s(t.statusText))]),
                  ],
                  1
                ),
                e("b-progress", {
                  attrs: {
                    value: t.result.index,
                    max: t.result.total,
                    "show-value": "",
                    rounded: !1,
                    format: "percent",
                    size: "is-large",
                    type: "is-primary",
                  },
                }),
                [t.STATUS.running, t.STATUS.paused].includes(t.status)
                  ? e(
                      "div",
                      { staticClass: "buttons" },
                      [
                        e(
                          "b-button",
                          {
                            attrs: {
                              "icon-left":
                                t.status === t.STATUS.running
                                  ? "pause-circle"
                                  : "play",
                            },
                            on: { click: t.pauseOrResume },
                          },
                          [
                            t._v(
                              " " +
                                t._s(
                                  t.status === t.STATUS.running
                                    ? "PAUSE"
                                    : "RESUME"
                                ) +
                                " "
                            ),
                          ]
                        ),
                        t.status === t.STATUS.paused
                          ? e(
                              "b-button",
                              {
                                attrs: {
                                  "icon-left": "stop-circle",
                                  type: "is-danger",
                                },
                                on: { click: t.stop },
                              },
                              [t._v(" STOP ")]
                            )
                          : t._e(),
                      ],
                      1
                    )
                  : t._e(),
                e(
                  "div",
                  {
                    staticClass: "has-text-centered py-2 has-background-white",
                  },
                  [
                    e(
                      "b-button",
                      {
                        attrs: {
                          type: "is-primary",
                          disabled: t.result.successNum <= 0,
                          "icon-left": "copy",
                          size: "is-small",
                        },
                        on: { click: t.copy },
                      },
                      [
                        t._v(
                          " " +
                            t._s(t.IDS[t.type]) +
                            " (" +
                            t._s(t.result.successNum) +
                            ") "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                e("div", { staticClass: "result-list" }, [
                  e(
                    "table",
                    {
                      staticClass: "table is-fullwidth is-striped is-hoverable",
                    },
                    [
                      e("thead", [
                        e("tr", [
                          e("th", [t._v("URL")]),
                          e(
                            "th",
                            {
                              staticClass: "has-text-right",
                              staticStyle: { width: "160px" },
                            },
                            [t._v(" " + t._s(t.IDS[t.type]) + " ")]
                          ),
                        ]),
                      ]),
                      e(
                        "tbody",
                        t._l(t.result.list, function (s) {
                          return e("tr", { key: s.id }, [
                            e("td", [t._v(t._s(s.url))]),
                            e("td", { staticClass: "has-text-right" }, [
                              t._v(" " + t._s(s.ok ? s.id : "FAIL") + " "),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]
                  ),
                ]),
              ],
              1
            ),
          ]),
        ]);
      },
      rt = [];
    async function ot(t) {
      const e = lt(t);
      if (e.length > 0) return e;
      const s = new URL(t);
      let a = s.searchParams,
        n = a.get("id");
      if (n && !isNaN(n)) return n;
      const i = s.pathname.slice(1).split("/");
      return i[0]
        ? "groups" == i[0] &&
          i.length > 3 &&
          "user" == (null === i || void 0 === i ? void 0 : i[2])
          ? i[3]
          : [
              "groups",
              "events",
              "videos",
              "watch",
              "pages",
              "photo",
              "friends",
              "stories",
              "media",
              "reel",
              "places",
            ].includes(i[0]) || i[0].endsWith(".php")
          ? ""
          : isNaN(i[0])
          ? await ct(i[0])
          : i[0]
        : "";
    }
    async function ct(t) {
      const e = "https://mbasic.facebook.com/" + t,
        s = await fetch(e),
        a = await s.text(),
        n = ut(/owner_id=(\d+)/, a),
        i = ut(/messages\/thread\/(\d+)/, a);
      return i && n != i ? "p:" + i : n;
    }
    function lt(t) {
      if (t.includes("facebook.com")) return "";
      const e = /^\d+$/;
      return (t = t.trim()), e.test(t) ? t : "";
    }
    function ut(t, e) {
      const s = e.match(t);
      if (s) return null === s || void 0 === s ? void 0 : s[1];
    }
    async function dt(t) {
      if (!t.startsWith("https://www.facebook.com/")) {
        const e = /^\d+$/;
        return (t = t.trim()), e.test(t) ? t : "";
      }
      const e = t.split("/groups/");
      if (e.length < 2) return "";
      const s = e[1].split("/")[0];
      if (!isNaN(s)) return s;
      const a = await fetch("https://mbasic.facebook.com/groups/ " + s),
        n = await a.text();
      return ft(n, /fb:\/\/group\/\?id=(\d+)/);
    }
    function ft(t, e) {
      const s = e.exec(t);
      return s && s.length > 1 ? s[1] : "";
    }
    const pt = { user: "User ID/Page ID", group: "Group ID" },
      ht = { user: "User / Page", group: "Group" },
      bt = {
        user: "https://www.facebook.com/profile.php?id=100069224250092\nhttps://www.facebook.com/herikarwet\n",
        group: "https://www.facebook.com/groups/372253860314920/",
      },
      _t = { user: ot, group: dt };
    var mt = {
        data() {
          return {
            IDS: pt,
            TIPS: ht,
            PLACEHOLDERS: bt,
            type: "user",
            urlStr: "",
            form: { urlList: [] },
          };
        },
        computed: {
          canSave() {
            if (![l["c"].pending, l["c"].done].includes(this.status)) return !1;
            const { urlList: t } = this.form;
            return t.length > 0;
          },
        },
        watch: {
          urlStr(t) {
            const e = t.split(/[ |\n]/g);
            this.form.urlList = [
              ...new Set(
                e.filter(
                  (t) => t.startsWith("https://") && t.includes("facebook.com")
                )
              ),
            ];
          },
        },
        mixins: [tt],
        methods: {
          copy() {
            const t = this.result.list
              .filter((t) => t.ok)
              .map((t) => t.id)
              .join("\n");
            W()(t), this.$buefy.toast.open("copied");
          },
          async save() {
            (this.result = {
              total: this.form.urlList.length,
              index: 0,
              list: [],
              successNum: 0,
              failNum: 0,
            }),
              (this.status = l["c"].running),
              setTimeout(this.send, 0),
              window.scrollTo({ top: 0, behavior: "smooth" });
          },
          async send() {
            if (this.status !== l["c"].running) return;
            let { urlList: t } = this.form;
            const e = t[this.result.index];
            try {
              const t = _t[this.type];
              let s = await t(e);
              s
                ? (s.startsWith("p:") && (s = s.slice(2)),
                  (this.result.list = [
                    ...this.result.list,
                    { url: e, id: s, ok: !0 },
                  ]),
                  this.result.successNum++)
                : ((this.result.list = [
                    ...this.result.list,
                    { url: e, ok: !1 },
                  ]),
                  this.result.failNum++);
            } catch (a) {
              console.log(a),
                (this.result.list = [...this.result.list, { url: e, ok: !1 }]),
                this.result.failNum++;
            }
            if ((this.result.index++, this.result.index >= this.result.total))
              return void (this.status = l["c"].done);
            if (this.status !== l["c"].running) return;
            const s = Object(y["f"])(500, 1e4);
            setTimeout(this.send, s);
          },
        },
      },
      gt = mt,
      yt = (s("bf00"), Object(f["a"])(gt, it, rt, !1, null, null, null)),
      vt = yt.exports,
      wt = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "index box" }, [
          0 === t.status
            ? e(
                "div",
                {
                  staticClass:
                    "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
                },
                [
                  e("b-icon", {
                    attrs: {
                      pack: "fas",
                      icon: "circle-notch",
                      size: "is-large",
                      "custom-class": "fa-spin",
                    },
                  }),
                  e("p", [t._v("Initializing...")]),
                ],
                1
              )
            : 1 === t.status
            ? e(
                "div",
                {
                  staticClass:
                    "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
                },
                [
                  e("b-icon", {
                    attrs: {
                      pack: "fas",
                      icon: "check-circle",
                      size: "is-large",
                    },
                  }),
                  e("p", [t._v("System init done.")]),
                ],
                1
              )
            : e(
                "div",
                {
                  staticClass:
                    "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
                },
                [
                  e("b-icon", {
                    attrs: {
                      pack: "fas",
                      icon: "info-circle",
                      size: "is-large",
                    },
                  }),
                  e("p", [
                    t._v("Init failure. try check login your facebook.com."),
                  ]),
                  e(
                    "div",
                    [
                      e(
                        "b-button",
                        {
                          staticClass: "mt-2",
                          attrs: { type: "is-primary" },
                          on: {
                            click: function (e) {
                              return t.reload(!0);
                            },
                          },
                        },
                        [t._v(" Reload ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
        ]);
      },
      kt = [],
      jt = {
        name: "Index",
        data() {
          return { status: 0 };
        },
        mixins: [X],
        methods: {
          ...Object(c["b"])(["setTools"]),
          async reload(t = !1) {
            (this.status = 0),
              setTimeout(() => {
                this.status = -1;
              }, 3e4);
            try {
              await I["a"](t),
                (this.status = 1),
                this.$router.replace({ name: "Home" });
            } catch (e) {
              this.status = -1;
            }
          },
        },
        async created() {
          const t = await Z["c"]();
          this.setTools(t || []),
            await Y["c"]({
              appid_list: t.filter((t) => t.extId).map((t) => t.extId),
            }),
            await this.bootstrap(),
            this.userReady
              ? await this.reload()
              : this.$router.replace({ name: "Login" });
        },
      },
      xt = jt,
      Ct = Object(f["a"])(xt, wt, kt, !1, null, null, null),
      St = Ct.exports,
      It = function () {
        var t = this,
          e = t._self._c;
        return e("div", { staticClass: "login box" }, [
          e(
            "div",
            {
              staticClass:
                "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
            },
            [
              e(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "64",
                    height: "64",
                  },
                },
                [
                  e("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                  e("path", {
                    attrs: {
                      d: "M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM12 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-4.473 5a4.5 4.5 0 0 1 8.946 0H7.527z",
                      fill: "rgba(181,181,181,1)",
                    },
                  }),
                ]
              ),
              e(
                "p",
                {
                  staticClass:
                    "is-size-6 has-text-grey-light py-4 has-text-centered",
                },
                [t._v(" Please sign in to save your settings. ")]
              ),
              e(
                "b-button",
                {
                  attrs: {
                    type: "is-default",
                    outlined: "",
                    loading: t.loading,
                  },
                  on: { click: t.login },
                },
                [
                  e("div", { staticClass: "icon-text" }, [
                    e(
                      "svg",
                      {
                        attrs: {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        e("path", {
                          attrs: {
                            d: "M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                            fill: "#FFC107",
                          },
                        }),
                        e("path", {
                          attrs: {
                            d: "M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z",
                            fill: "#FF3D00",
                          },
                        }),
                        e("path", {
                          attrs: {
                            d: "M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z",
                            fill: "#4CAF50",
                          },
                        }),
                        e("path", {
                          attrs: {
                            d: "M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                            fill: "#1976D2",
                          },
                        }),
                      ]
                    ),
                    e("span", { staticClass: "ml-2" }, [
                      t._v("Sign in with Google"),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
        ]);
      },
      $t = [],
      Ut = s("7868"),
      At = {
        data() {
          return { loading: !1 };
        },
        methods: {
          ...Object(c["b"])(["setUserInfo", "setUserReady"]),
          async login() {
            (this.loading = !0), Object(Ut["c"])(Ut["a"].LOGIN);
          },
        },
        mounted() {
          Object(Ut["b"])(Ut["a"].RESP_LOGIN, ({ code: t, err: e, res: s }) => {
            switch (((this.loading = !1), t)) {
              case 1:
                this.setUserInfo(s),
                  this.setUserReady(!0),
                  this.$router.replace({ name: "Index" });
                break;
              case -1:
                console.error(e), this.$buefy.toast.open("please retry.");
                break;
              case 0:
              default:
                break;
            }
          });
        },
      },
      Tt = At,
      Ot = Object(f["a"])(Tt, It, $t, !1, null, null, null),
      zt = Ot.exports;
    a["a"].use(B["a"]);
    const Lt = [
        { path: "/", name: "Index", component: St },
        { path: "/login", name: "Login", component: zt },
        { path: "/home", name: "Home", component: nt },
        { path: "/find", name: "Find", component: vt },
      ],
      Et = new B["a"]({ routes: Lt });
    var Rt = Et;
    a["a"].use(c["a"]);
    var Nt = new c["a"].Store({
        state: {
          fbReady: !1,
          tools: [],
          userInfo: {},
          userReady: !1,
          pro: { vip: 0 },
        },
        getters: {},
        mutations: {
          setFbReady(t, e) {
            t.fbReady = e;
          },
          setTools(t, e) {
            t.tools = e;
          },
          setUserReady(t, e) {
            t.userReady = e;
          },
          setPro(t, e) {
            t.pro = e;
          },
          setUserInfo(t, e) {
            t.userInfo = e;
          },
        },
        actions: {},
      }),
      Pt = s("289d");
    s("5abe"), s("15f5"), s("b2a2");
    a["a"].use(Pt["a"], { defaultIconPack: "fas" }),
      (a["a"].config.productionTip = !1),
      new a["a"]({ router: Rt, store: Nt, render: (t) => t(F) }).$mount("#app");
  },
  "9a1b": function (t, e, s) {
    "use strict";
    s.d(e, "b", function () {
      return r;
    }),
      s.d(e, "a", function () {
        return o;
      }),
      s.d(e, "c", function () {
        return c;
      });
    s("d9e2");
    var a = s("bc3a"),
      n = s.n(a),
      i = s("a553");
    const r = (t) => u("/l", { token: t, app: i["a"] }),
      o = async (t) => l("/v2", { uid: t }),
      c = async () => l("/t", { app: i["a"] });
    async function l(t, e = {}) {
      const s = await n.a.get(i["b"] + t, { params: e }),
        { status: a, data: r } = s;
      if (200 === a && "0" === r.code) return r.data;
      throw new Error("api call error");
    }
    async function u(t, e = {}) {
      (t = i["b"] + t),
        Object.keys(e).length > 0 &&
          (t += "?" + new URLSearchParams(e).toString());
      const s = await fetch(t);
      if (200 === s.status) {
        const { code: t, data: e } = await s.json();
        if ("0" === t) return e;
      }
      throw new Error("Network error");
    }
  },
  a4f4: function (t, e, s) {
    "use strict";
    s("2d0c");
  },
  a553: function (t, e, s) {
    "use strict";
    s.d(e, "a", function () {
      return n;
    }),
      s.d(e, "b", function () {
        return r;
      }),
      s.d(e, "f", function () {
        return o;
      }),
      s.d(e, "g", function () {
        return l;
      }),
      s.d(e, "c", function () {
        return u;
      }),
      s.d(e, "d", function () {
        return d;
      }),
      s.d(e, "e", function () {
        return f;
      });
    var a = s("d3ff");
    const n = 9,
      i = { dev: "http://localhost:3000", prod: "https://b.unispy.io/shop" },
      r = i.prod,
      o = "https://fb-messenger-bulk-sender.unispy.io",
      c = { wait: [5, 9], pause: { num: 45, wait: 15 } },
      l = {
        get: async () => {
          const { send_setting: t } = await a["a"](["send_setting"]);
          return t || c;
        },
        set: (t) => a["c"]({ send_setting: t }),
      },
      u = { pending: 0, running: 1, paused: 2, done: 3 },
      d = {
        [u.pending]: "robot",
        [u.running]: "fan",
        [u.paused]: "pause",
        [u.done]: "check",
      },
      f = {
        [u.pending]: "I'm waiting for your order.",
        [u.running]: "sending",
        [u.paused]: "paused",
        [u.done]: "finished",
      };
  },
  ab68: function (t, e, s) {
    "use strict";
    s("57d7");
  },
  b2c5: function (t, e, s) {
    "use strict";
    s("e130");
  },
  bf00: function (t, e, s) {
    "use strict";
    s("5ad0");
  },
  c276: function (t, e, s) {
    "use strict";
    s.d(e, "c", function () {
      return i;
    }),
      s.d(e, "d", function () {
        return r;
      }),
      s.d(e, "a", function () {
        return o;
      }),
      s.d(e, "f", function () {
        return c;
      }),
      s.d(e, "b", function () {
        return l;
      }),
      s.d(e, "e", function () {
        return u;
      });
    s("907a"), s("3c5d"), s("fa9e"), s("77d9");
    var a = s("9845"),
      n = s.n(a);
    function i(t) {
      const e = {};
      for (const [s, a] of new URL(
        t || window.location.href
      ).searchParams.entries())
        e[s] = a;
      return e;
    }
    function r() {
      return n.a.runtime.getManifest().version;
    }
    function o(t) {
      return n.a.runtime.getURL(t);
    }
    function c(t, e) {
      return (
        (t = Math.ceil(t)),
        (e = Math.floor(e)),
        Math.floor(Math.random() * (e - t + 1)) + t
      );
    }
    function l(t) {
      var e = new RegExp(/{([^{}]+?)}/),
        s = null;
      while (null !== (s = e.exec(t))) {
        const e = s[1].split("|"),
          a = Math.floor(Math.random() * e.length);
        t = t.replace(s[0], e[a]);
      }
      return t;
    }
    function u(t) {
      let e;
      try {
        e = new URL(t);
      } catch (s) {
        return !1;
      }
      return "http:" === e.protocol || "https:" === e.protocol;
    }
  },
  d3ff: function (t, e, s) {
    "use strict";
    s.d(e, "a", function () {
      return i;
    }),
      s.d(e, "c", function () {
        return r;
      }),
      s.d(e, "b", function () {
        return o;
      });
    var a = s("9845"),
      n = s.n(a);
    const i = (t) => n.a.storage.local.get(t),
      r = (t) => n.a.storage.local.set(t),
      o = (t) => n.a.storage.local.remove(t);
  },
  e130: function (t, e, s) {},
  fdde: function (t, e, s) {
    "use strict";
    s.d(e, "a", function () {
      return o;
    }),
      s.d(e, "b", function () {
        return f;
      });
    s("d9e2");
    var a = s("9845"),
      n = s.n(a),
      i = s("d3ff"),
      r = s("6bc9");
    async function o(t = !1) {
      if (!t) {
        const { fb_user_id: t, fb_access_token: e } = await i["a"]([
          "fb_user_id",
          "fb_access_token",
        ]);
        if (e)
          try {
            const { id: e } = await r["a"]();
            if (e == t) return;
          } catch (o) {
            console.log(o);
          }
        const s = await f.tryGet();
        if (s) return;
      }
      let e = {};
      try {
        e = await b();
      } catch (o) {
        if ("please login facebook." != o.message) throw o;
        e = await _();
      }
      await i["c"](e);
      const s = await m();
      await i["c"]({ jazoest: s });
      const a = await g();
      await i["c"](a);
      const n = await y();
      await i["c"]({ fb_token_ig: n, fb_access_token: n }), await f.broadcast();
    }
    const c = "__sync_fb_unispy_token",
      l = "__get_fb_unispy_token",
      u = async () => {
        const {
          fb_dtsg: t,
          fb_user_id: e,
          fb_name: s,
          fb_avator: a,
          fb_rev: n,
          jazoest: r,
          fb_token_studio: o,
          fb_token_ads: c,
          fb_token_ig: l,
          fb_access_token: u,
        } = await i["a"]([
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
        return t
          ? JSON.stringify({
              fb_dtsg: t,
              fb_user_id: e,
              fb_name: s,
              fb_avator: a,
              fb_rev: n,
              jazoest: r,
              fb_token_studio: o,
              fb_token_ads: c,
              fb_token_ig: l,
              fb_access_token: u,
            })
          : "";
      },
      d = async (t) => {
        if (!t) return;
        const e = JSON.parse(t),
          {
            fb_dtsg: s,
            fb_user_id: a,
            fb_name: n,
            fb_avator: r,
            fb_rev: o,
            jazoest: c,
            fb_token_studio: l,
            fb_token_ads: u,
            fb_token_ig: d,
            fb_access_token: f,
          } = e;
        await i["c"]({
          fb_dtsg: s,
          fb_user_id: a,
          fb_name: n,
          fb_avator: r,
          fb_rev: o,
          jazoest: c,
          fb_token_studio: l,
          fb_token_ads: u,
          fb_token_ig: d,
          fb_access_token: f,
        });
      },
      f = {
        tryGet: async () => {
          const { appid_list: t } = await i["a"](["appid_list"]),
            e = t || [];
          for (const a of e)
            try {
              const t = await n.a.runtime.sendMessage(a, { [l]: !0 });
              if (t.token) return await d(t.token), !0;
            } catch (s) {
              console.log(s);
            }
          return !1;
        },
        broadcast: async () => {
          const t = await u();
          if (!t) return;
          const { appid_list: e } = await i["a"](["appid_list"]),
            s = e || [];
          for (const i of s)
            try {
              await n.a.runtime.sendMessage(i, { [c]: t });
            } catch (a) {
              console.log(a);
            }
        },
        listen: () => {
          n.a.runtime.onMessageExternal.addListener(async (t) => {
            const e = t[c],
              s = t[l];
            if (e) await d(e);
            else if (s) {
              const t = await u();
              return Promise.resolve({ token: t });
            }
          });
        },
      };
    function p(t, e) {
      const s = e.exec(t);
      return s && s.length > 1 ? s[1] : "";
    }
    const h = (t) =>
      t.replace(/\\u[\dA-F]{4}/gi, (t) =>
        String.fromCharCode(parseInt(t.replace(/\\u/g, ""), 16))
      );
    async function b() {
      const t = await v(
          "https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed"
        ),
        e = t.match(/\{\\"dtsg\\":\{\\"token\\":\\"([^\\]+)/);
      if (!e) throw new Error("please login facebook.");
      const s = e[1];
      let a = t.match(/\\"NAME\\":\\"([^"]+)/);
      a = a[1].slice(0, -1).replace(/\\\\/g, "\\");
      const n = h(a);
      let i = t.match(/\\"ACCOUNT_ID\\":\\"([^"]+)/);
      i = i[1].slice(0, -1).replace(/\\\\/g, "\\");
      let r = t.match(/\\"USER_ID\\":\\"([^"]+)/);
      if (((r = r[1].slice(0, -1).replace(/\\\\/g, "\\")), r != i))
        throw new Error(
          "Please switch Facebook to user account. It doesn't support page account."
        );
      const o = t.match(/server_revision+\\":+(\d+)/)[1],
        c = `https://graph.facebook.com/${i}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      return { fb_dtsg: s, fb_user_id: i, fb_name: n, fb_avator: c, fb_rev: o };
    }
    async function _() {
      const t = await v("https://business.facebook.com/creatorstudio/home"),
        e = t.match(/DTSGInitData.*token":"(.*)","async_get_token/);
      if (!e) throw new Error("please login facebook.");
      const s = e[1];
      let a = t.match(/"NAME":"([^"]+)/);
      a = a[1].slice(0, -1).replace(/\\\\/g, "\\");
      const n = h(a);
      let i = t.match(/"ACCOUNT_ID":"(\d+)/);
      i = i[1];
      let r = t.match(/"USER_ID":"(\d+)/);
      if (((r = r[1]), r != i))
        throw new Error(
          "Please switch Facebook to user account. It doesn't support page account."
        );
      const o = t.match(/server_revision":(\d+)/)[1],
        c = `https://graph.facebook.com/${i}/picture?type=large&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
      return { fb_dtsg: s, fb_user_id: i, fb_name: n, fb_avator: c, fb_rev: o };
    }
    async function m() {
      const { fb_dtsg: t } = await i["a"]("fb_dtsg");
      let e = "";
      for (var s = 0; s < t.length; s++) e += t.charCodeAt(s);
      return (e = "2" + e), console.log("[jazoest]", e), e;
    }
    async function g() {
      const t = await v("https://business.facebook.com/creatorstudio/home"),
        e = p(t, /userAccessToken":"(\w+)"/g);
      return console.log("[token cs]", e), { fb_token_studio: e };
    }
    async function y() {
      const t = await v(
          "https://www.facebook.com/dialog/oauth?scope=user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_activities,user_birthday,user_education_history,user_events,user_friends,user_games_activity,user_groups,user_hometown,user_interests,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationship_details,user_relationships,user_religion_politics,user_status,user_tagged_places,user_videos,user_website,user_work_history,email,manage_notifications,manage_pages,publish_actions,publish_pages,read_friendlists,read_insights,read_page_mailboxes,read_stream,rsvp_event,publish_to_groups, groups_access_member_info, read_mailbox&response_type=token&client_id=124024574287414&redirect_uri=fb124024574287414://authorize/&sso_key=com&display="
        ),
        e = p(t, /\\"scope\\" value=\\"(.+?)\\/g),
        s = p(t, /\\"encrypted_post_body\\" value=\\"(.+?)\\/g);
      console.log("[scopex]", e, "[encrypted_post_body]", s);
      const { fb_dtsg: a, jazoest: n } = await i["a"](["fb_dtsg", "jazoest"]),
        r = await w(
          "https://www.facebook.com/v1.0/dialog/oauth/skip/submit/",
          `jazoest=${n}&fb_dtsg=${a}&from_post=1&__CONFIRM__=1&scope=${e}&display=page&sdk=&domain=&sso_device=ios&state=&user_code=&nonce=&auth_type=&auth_nonce=&nonce=&return_format%5B%5D=access_token&encrypted_post_body=${s}`
        ),
        o = p(r, /#(?:access_token)=([\S\s]*?)&/g);
      return console.log("[token ig]", o), o;
    }
    async function v(t, e = "text") {
      const s = await fetch(t, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          referrer: "https://m.facebook.com",
          "sec-fetch-site": "none",
        },
      });
      return "json" === e ? await s.json() : await s.text();
    }
    async function w(t, e, s = "text") {
      const a = await fetch(t, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "cors",
        credentials: "include",
        body: e,
      });
      return "json" === s ? await a.json() : await a.text();
    }
  },
});
