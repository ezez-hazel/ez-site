(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [363],
  {
    90899: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/talents",
        function () {
          return t(42626);
        },
      ]);
    },
    42626: function (e, r, t) {
      "use strict";
      (t.r(r),
        t.d(r, {
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return y;
          },
        }));
      var n = t(85893),
        a = t(35398),
        i = t.n(a),
        l = t(11163),
        s = t(27561),
        o = t(67294),
        u = t(93967),
        c = t.n(u),
        d = t(55753),
        f = t(5575),
        _ = t(5435),
        b = t(79607),
        h = t(66477),
        g = t(34365);
      let p = (e) => {
        let { currentParrotUser: r } = (0, b.Eu)(),
          { bookmarkedLiverIds: t } = (0, b.SE)(),
          {
            referrer: n,
            livers: a,
            updateLivers: i,
            liversAffiliation: s,
            updateLiversAffiliation: u,
            favoriteFilter: c,
            updateFavoriteFilter: d,
            talentSort: f,
            updateTalentSort: p,
            talentAscSort: v,
            updateTalentAscSort: y,
            isRandom: S,
            updateIsRandom: j,
          } = (0, b.rk)(),
          { restoreScrollPosition: N } = (0, _.vO)(),
          m = (0, l.useRouter)(),
          { pathname: C } = m,
          E = (0, g.b)(),
          R = (0, o.useRef)(!1),
          [F, k] = (0, o.useState)(!1),
          [O, w] = (0, o.useState)(!0),
          x = () => {
            let r = {
                nijisanji: "にじさんじ",
                nijisanjien: "NIJISANJI EN",
                virtuareal: "VirtuaReal",
              },
              n = "nijisanji" === s ? "orderByRuby" : "orderByEnName",
              a = {
                subscriber_count: ["subscriberCount", n],
                name: [n],
                debut_at: ["profileDebutAt", "profileOrder", n],
              },
              i = (e, r, t) => {
                let n = "asc" === v ? 1 : -1,
                  a = (e) => {
                    switch (t) {
                      case "subscriberCount":
                        return e.subscriberCount || 0;
                      case "orderByRuby":
                        return e.orderByRuby || 0;
                      case "orderByEnName":
                        return e.orderByEnName || 0;
                      case "profileDebutAt":
                        return e.profile.debutAt;
                      case "profileOrder":
                        return e.profile.order || 0;
                      default:
                        return 0;
                    }
                  };
                return a(e) > a(r) ? 1 * n : a(e) < a(r) ? -1 * n : 0;
              },
              l = e.allLivers.flatMap((e) =>
                ("favorite" !== c || t.includes(e.id)) &&
                e.profile.affiliation[0] === r[s]
                  ? e
                  : [],
              );
            return (
              l.sort((e, r) => {
                for (let t of a[f]) {
                  let n = i(e, r, t);
                  if (n) return n;
                }
                return 0;
              }),
              S ? (0, h.Nu)(l) : l
            );
          },
          A = () => {
            (e.query.orderKey && e.query.order && j(!1),
              i(x()),
              N(history.state.key));
          },
          T = () => null === n[0].match(/\/talents\/l\/.*$/);
        return (
          (0, o.useEffect)(() => {
            R.current ||
              ((R.current = !0), (T() || 0 == a.length) && A(), k(!0), w(!1));
          }, []),
          (0, o.useEffect)(() => {
            F && i(x());
          }, [E, s, f, v, S, c]),
          (0, o.useEffect)(() => {
            r || d("all");
          }, [r]),
          {
            locale: E,
            liversAffiliation: s,
            favoriteFilter: c,
            talentSort: f,
            talentAscSort: v,
            livers: a,
            fanclubs: e.allFanclubs,
            isLoading: O,
            isRandom: S,
            onChangeFavoriteFilter: (e) => {
              d(e);
            },
            onChangeAffiliationFilter: (e) => {
              u(e);
              let r = m.query;
              ((r.filter = e),
                "virtuareal" === e &&
                  "subscriber_count" === r.orderKey &&
                  (p("debut_at"),
                  y("desc"),
                  (r.orderKey = "debut_at"),
                  (r.order = "desc")),
                r.orderKey ||
                  p("virtuareal" !== e ? "subscriber_count" : "debut_at"),
                m.push({ pathname: C, query: r }, void 0, {
                  scroll: !1,
                  shallow: !0,
                }));
            },
            onClickSort: (e, r) => {
              (p(e), y(r));
              let t = m.query;
              ((t.filter = s),
                (t.orderKey = e),
                (t.order = r),
                j(!1),
                m.push({ pathname: C, query: t }, void 0, {
                  scroll: !1,
                  shallow: !0,
                }));
            },
            onClickResetSort: () => {
              (p("virtuareal" !== s ? "subscriber_count" : "debut_at"),
                y("desc"),
                j(!0),
                m.push({ pathname: C }, void 0, { scroll: !1, shallow: !0 }));
            },
            onClickLoginOrRegister: () => {
              (0, h.x4)(m.asPath);
            },
          }
        );
      };
      var v = !0,
        y = (e) => {
          let r = (0, _.iq)(e.serverSideError, p),
            { t } = (0, s.$G)(["talents"]),
            { query: a, pathname: u } = (0, l.useRouter)(),
            { filter: b } = a,
            { locale: h } = e,
            g = (0, o.useMemo)(() => {
              let e = "nijisanji";
              return (
                ("nijisanjien" === b || "virtuareal" === b) && (e = b),
                ""
                  .concat(t("pageTitle.list", { ns: "talents" }), "（")
                  .concat(t("filterTab.".concat(e), { ns: "talents" }), "）")
              );
            }, [b, t]),
            v = (0, o.useMemo)(() => {
              let e = new URL(
                "ja" === h ? u : "/".concat(h, "/").concat(u),
                f.Bq.PARROT_FRONTEND_URL,
              );
              return (
                ("nijisanjien" === b || "virtuareal" === b) &&
                  e.searchParams.set("filter", b),
                e.href
              );
            }, [u, b, h]);
          if (r.isServerSideError)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(d.h_, {
                  pageTitle: g,
                  pageUrl: "talents",
                  pageOgImage: "",
                  canonical: v,
                }),
                (0, n.jsx)(d.Ar, { hasServerSideError: !0, children: "null" }),
                ";",
              ],
            });
          let {
              liversAffiliation: y,
              favoriteFilter: S,
              talentSort: j,
              talentAscSort: N,
              livers: m,
              fanclubs: C,
              isLoading: E,
              isRandom: R,
              onChangeFavoriteFilter: F,
              onChangeAffiliationFilter: k,
              onClickSort: O,
              onClickResetSort: w,
              onClickLoginOrRegister: x,
            } = r.hooks(e),
            { error: A, disableFavButton: T, onClickFavorite: B } = (0, _.s4)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(d.h_, {
                pageTitle: g,
                pageUrl: "talents",
                pageOgImage: "",
                canonical: v,
              }),
              (0, n.jsx)("div", {
                className: c()(i().className),
                children: (0, n.jsx)(d.Ar, {
                  pageError: A,
                  children: (0, n.jsx)(d.oR, {
                    affiliationFilter: y,
                    selectedFavoriteFilter: S,
                    talentSort: j,
                    talentAscSort: N,
                    livers: m,
                    fanclubs: C,
                    isLoading: E,
                    isRandom: R,
                    disableFavOnClick: T.current,
                    onChangeFavoriteFilter: F,
                    onChangeAffiliationFilter: k,
                    onClickSort: O,
                    onClickResetSort: w,
                    onClickLoginOrRegister: x,
                    onClickFavorite: B,
                  }),
                }),
              }),
            ],
          });
        };
    },
    35398: function (e) {
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
    (e.O(0, [368, 55, 474, 888, 774, 179], function () {
      return e((e.s = 90899));
    }),
      (_N_E = e.O()));
  },
]);
