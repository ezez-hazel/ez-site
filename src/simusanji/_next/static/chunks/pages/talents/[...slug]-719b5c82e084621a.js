(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [299],
  {
    19749: function (e, l, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/talents/[...slug]",
        function () {
          return i(25196);
        },
      ]);
    },
    25196: function (e, l, i) {
      "use strict";
      (i.r(l),
        i.d(l, {
          __N_SSP: function () {
            return b;
          },
          default: function () {
            return w;
          },
        }));
      var n = i(85893),
        t = i(97208),
        r = i.n(t),
        a = i(27561),
        o = i(93967),
        s = i.n(o),
        u = i(55753),
        d = i(5435),
        c = i(11163),
        v = i(67294),
        _ = i(10094),
        f = i(5575),
        g = i(79607),
        p = i(66477),
        S = i(92695),
        E = i(29149),
        m = i(34365),
        h = i(4559),
        N = i(76656);
      let k = (e) => {
        var l;
        let { liverDetail: i, allFanclubSlugs: n, serverSideError: t } = e,
          [r, o] = (0, v.useState)(!1),
          [s, u] = (0, v.useState)(""),
          { error: k, setError: b } = (0, d.VI)(t),
          w = (0, c.useRouter)(),
          x = (0, m.b)(),
          { t: T } = (0, a.$G)(["talents"]),
          { currentParrotUser: j, updateCurrentParrotUser: y } = (0, g.Eu)(),
          { bookmarkedLiverIds: C } = (0, g.SE)(),
          O = new h.s(),
          D = async () => {
            let e = (0, E.yS)(f.Yx.API_TOKENS_KEYS);
            if (!e) return;
            let l = new N.n(),
              i = await l.user(e.token);
            try {
              let e = new _.Z().deserialize(i);
              y(e);
            } catch (e) {
              b((0, S.BU)(e));
            }
          },
          F = async () => {
            let e = (0, E.yS)(f.Yx.API_TOKENS_KEYS);
            e &&
              i &&
              (r ? await O.delete(e.token, s) : await O.add(e.token, i.id),
              await D());
          };
        return (
          (0, v.useEffect)(() => {
            if (!i) {
              w.replace("/404");
              return;
            }
          }, [i, w]),
          (0, v.useEffect)(() => {
            if (!j || !i) return;
            let e = C.includes(null == i ? void 0 : i.id);
            if ((o(e), e)) {
              let e = j["liver-bookmarks"].filter(
                (e) => e.liver["external-id"] === (null == i ? void 0 : i.id),
              );
              if (!e.length) return;
              u(e[0].id);
            }
          }, [j, C]),
          {
            error: k,
            metaTitle:
              null !==
                (l =
                  "ja" === x
                    ? null == i
                      ? void 0
                      : i.name
                    : null == i
                      ? void 0
                      : i.enName) && void 0 !== l
                ? l
                : T("pageTitle.detail", { ns: "talents" }),
            metaDescription:
              "en" === x && (null == i ? void 0 : i.profile.descriptionEn)
                ? null == i
                  ? void 0
                  : i.profile.descriptionEn
                : null == i
                  ? void 0
                  : i.profile.description,
            isFavorite: r,
            fanclubSlug: (() => {
              let e = n.find(
                (e) => e.microCmsTalentSlug === (null == i ? void 0 : i.slug),
              );
              return null != e ? e : null;
            })(),
            onClickFavorite: F,
            onClickLoginOrRegister: () => {
              (0, p.x4)(w.asPath);
            },
          }
        );
      };
      var b = !0,
        w = (e) => {
          var l, i, t, o, c, v, _;
          let f = (0, d.iq)(e.serverSideError, k),
            { t: g } = (0, a.$G)(["talents"]);
          if (f.isServerSideError)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(u.h_, {
                  pageTitle: g("pageTitle.detail", { ns: "talents" }),
                  pageUrl: "talents/l/".concat(
                    null !==
                      (o =
                        null === (t = e.liverDetail) || void 0 === t
                          ? void 0
                          : t.slug) && void 0 !== o
                      ? o
                      : "",
                  ),
                  pageOgImage: "",
                }),
                (0, n.jsx)(u.Ar, { hasServerSideError: !0, children: "null" }),
                ";",
              ],
            });
          let {
              metaTitle: p,
              metaDescription: S,
              isFavorite: E,
              fanclubSlug: m,
              error: h,
              onClickFavorite: N,
              onClickLoginOrRegister: b,
            } = f.hooks(e),
            w =
              null !==
                (c =
                  null === (l = e.liverDetail) || void 0 === l
                    ? void 0
                    : l.profile.affiliation.includes("VirtuaReal")) &&
              void 0 !== c &&
              c;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(u.h_, {
                pageTitle: p,
                pageDescription: S,
                pageUrl: "talents/l/".concat(
                  null !==
                    (v =
                      null === (i = e.liverDetail) || void 0 === i
                        ? void 0
                        : i.slug) && void 0 !== v
                    ? v
                    : "",
                ),
                pageOgImage: e.ogp,
              }),
              (0, n.jsx)("div", {
                className: s()({ [r().className]: w }),
                children: (0, n.jsx)(u.Ar, {
                  pageError: h,
                  children:
                    e.liverDetail &&
                    (0, n.jsx)(u._7, {
                      liver: e.liverDetail,
                      fanclubSlug:
                        null !== (_ = null == m ? void 0 : m.slug) &&
                        void 0 !== _
                          ? _
                          : null,
                      isFavorite: E,
                      isVrLiver: w,
                      onClickFavorite: N,
                      onClickLoginOrRegister: b,
                    }),
                }),
              }),
            ],
          });
        };
    },
    97208: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__Noto_Sans_SC_bb3053', '__Noto_Sans_SC_Fallback_bb3053'",
          fontStyle: "normal",
        },
        className: "__className_bb3053",
      };
    },
  },
  function (e) {
    (e.O(0, [368, 828, 474, 888, 774, 179], function () {
      return e((e.s = 19749));
    }),
      (_N_E = e.O()));
  },
]);
