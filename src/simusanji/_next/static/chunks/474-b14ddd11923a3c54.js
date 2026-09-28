(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [474],
  {
    71967: function (e, n, a) {
      "use strict";
      a.d(n, {
        A: function () {
          return m;
        },
      });
      var s = a(85893),
        t = a(93967),
        l = a.n(t),
        i = a(48808),
        r = a(5575),
        c = a(96276),
        o = a.n(c);
      let m = (e) => {
        let { className: n } = e,
          a = new URL("/user/edit", r.W2.ALB_FRONTEND_URL);
        return (0, s.jsx)("div", {
          className: l()(o().addressAlertBar, n),
          children: (0, s.jsx)(i.Nm, {
            className: o().wrapper,
            "data-testid": "AlertBar",
            children: (0, s.jsx)("a", {
              href: a.href,
              children:
                "【重要】配送物特典の受取にはANYCOLOR IDへの住所登録が必要です。未登録では配送物特典をお届けできません。詳細はファンクラブからのお知らせをご確認ください。",
            }),
          }),
        });
      };
    },
    74152: function (e, n, a) {
      "use strict";
      a.d(n, {
        AO: function () {
          return e3.A;
        },
        ui: function () {
          return e9;
        },
        jO: function () {
          return eR;
        },
        zp: function () {
          return q;
        },
        GD: function () {
          return J;
        },
        WW: function () {
          return K;
        },
        W7: function () {
          return $;
        },
        kK: function () {
          return ea;
        },
        oS: function () {
          return et;
        },
        WS: function () {
          return er;
        },
        j$: function () {
          return ed;
        },
        LD: function () {
          return eu;
        },
        Rn: function () {
          return eh;
        },
        ug: function () {
          return eX;
        },
        jL: function () {
          return e2;
        },
        uW: function () {
          return eG;
        },
        Vw: function () {
          return eq;
        },
        T$: function () {
          return eJ;
        },
        zT: function () {
          return e8;
        },
        FG: function () {
          return nl;
        },
        u$: function () {
          return nu;
        },
        tT: function () {
          return na;
        },
        U2: function () {
          return nd;
        },
        _E: function () {
          return j;
        },
        KM: function () {
          return n8;
        },
        Yg: function () {
          return G;
        },
        Ov: function () {
          return eO;
        },
        B6: function () {
          return ew;
        },
        RA: function () {
          return ek;
        },
        Lv: function () {
          return as;
        },
        g8: function () {
          return aa;
        },
        vb: function () {
          return n9;
        },
        v2: function () {
          return n2;
        },
        fx: function () {
          return nI;
        },
        d7: function () {
          return nb;
        },
        LY: function () {
          return ng;
        },
        $5: function () {
          return nA;
        },
        qs: function () {
          return nW;
        },
        SI: function () {
          return ej;
        },
        J$: function () {
          return nF;
        },
        DK: function () {
          return nD;
        },
        gP: function () {
          return nH;
        },
        eg: function () {
          return nZ;
        },
        gf: function () {
          return nK;
        },
        xz: function () {
          return n$;
        },
        FI: function () {
          return p;
        },
        hT: function () {
          return S;
        },
        MY: function () {
          return U;
        },
        a$: function () {
          return P;
        },
        pm: function () {
          return M;
        },
      });
      var s = a(85893),
        t = a(11163),
        l = a.n(t),
        i = a(27561),
        r = a(93967),
        c = a.n(r),
        o = a(48808),
        m = a(1645),
        d = a.n(m);
      let p = (e) => {
        let { className: n = "", newsList: a } = e,
          { t } = (0, i.$G)(["common"]);
        return (0, s.jsxs)("div", {
          className: c()(n, d().topNews),
          "data-testid": "TopNews",
          children: [
            (0, s.jsx)("div", {
              className: d().sectionTitleRow,
              children: (0, s.jsx)(o.NZ, { title: "NEWS" }),
            }),
            (0, s.jsx)(ej, { className: d().slideWrapper, newsList: a }),
            (0, s.jsx)(o.Be, {
              className: d().newsListButton,
              iconType: "forward",
              buttonType: "rainbow",
              value: t("linkButton.toNewsList", { ns: "common" }),
              onClick: () => {
                l().push("/news");
              },
            }),
          ],
        });
      };
      a(89803);
      var _ = a(67294),
        u = a(30719);
      a(66761);
      var h = a(79907),
        f = a(52809),
        x = a.n(f);
      let j = (e) => {
        let { className: n = "", fanclubContents: a } = e,
          [t, l] = (0, _.useState)(!0),
          [i, r] = (0, _.useState)(!1);
        return (0, s.jsx)("div", {
          className: c()(n, x().fanclubSlider),
          "data-testid": "FanclubSlider",
          children: (0, s.jsxs)(u.tq, {
            className: x().swiper,
            spaceBetween: 30,
            slidesOffsetAfter: 60,
            slidesPerView: "auto",
            centeredSlides: !0,
            onSlideChange: (e) => {
              (l(e.isBeginning), r(e.isEnd));
            },
            breakpoints: {
              769: {
                createElements: !0,
                setWrapperSize: !0,
                centeredSlides: !1,
                slidesOffsetAfter: 160,
              },
            },
            children: [
              a.map((e) =>
                (0, s.jsx)(
                  u.o5,
                  {
                    className: x().swiperSlide,
                    children: (0, s.jsx)(h.Vf, { content: e }),
                  },
                  e.slug,
                ),
              ),
              (0, s.jsx)(() => {
                let e = (0, u.oc)();
                return (0, s.jsx)(o.tl, {
                  iconType: "bracketsLarge",
                  to: "prev",
                  onClick: () => e.slidePrev(),
                  disabled: t,
                  className: c()(x().swiperButton, x().prev, x().pcOnly),
                });
              }, {}),
              (0, s.jsx)(() => {
                let e = (0, u.oc)();
                return (0, s.jsx)(o.tl, {
                  iconType: "bracketsLarge",
                  to: "next",
                  onClick: () => e.slideNext(),
                  disabled: i,
                  className: c()(x().swiperButton, x().next, x().pcOnly),
                });
              }, {}),
            ],
          }),
        });
      };
      var b = a(5152),
        v = a.n(b),
        N = a(79212),
        g = a.n(N),
        y = a(12439),
        C = a(5435),
        w = a(52075),
        L = a(34365),
        I = a(7230),
        k = a.n(I);
      w.B.extend(g());
      let T = v()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 80204))
              .then((e) => e.TopNijisanjiCalendarItem),
          { loadableGenerated: { webpack: () => [80204] } },
        ),
        S = (e) => {
          let { className: n = "", events: a } = e,
            t = (0, w.B)().format("YYYYMM"),
            [r, m] = (0, _.useState)(t),
            [d, p] = (0, _.useState)(!1),
            [u, h] = (0, _.useState)([]),
            [f] = (0, _.useState)(
              (0, w.B)()
                .tz()
                .startOf("month")
                .subtract(1, "month")
                .format("YYYYMM"),
            ),
            x = (0, L.b)(),
            { t: j } = (0, i.$G)(["top", "common"]),
            b = (0, C.am)(),
            v = (0, _.useMemo)(() => {
              var e;
              return (
                0 ===
                (null !== (e = a["in".concat(r)]) && void 0 !== e ? e : [])
                  .length
              );
            }, [a, r]),
            N = (e) => {
              (m((0, w.B)(e).format("YYYYMM")), p(!1));
            },
            g = () => {
              let e = (0, w.B)(r).format("YYYY"),
                n = (0, w.B)(r).format("M");
              return "/calendar?year=".concat(e, "&month=").concat(n);
            };
          return (
            (0, _.useEffect)(() => {
              v
                ? h([])
                : r === t
                  ? h(
                      a["in".concat(r)].filter((e) =>
                        (0, w.B)(e.dateStart).isSameOrAfter(
                          (0, w.B)(),
                          "minute",
                        ),
                      ),
                    )
                  : h(a["in".concat(r)]);
            }, [a, v, r, t]),
            (0, s.jsxs)("div", {
              className: c()(n, k().calendar),
              "data-testid": "TopNijisanjiCalendar",
              children: [
                (0, s.jsx)("div", {
                  className: k().logoWrapper,
                  children: (0, s.jsx)(y.Z, {
                    src: "/logo/nijisanji_logo_text.svg",
                    alt: "にじさんじ",
                    fill: !0,
                  }),
                }),
                (0, s.jsx)(o.NZ, {
                  className: k().sectionTitle,
                  title: "CALENDAR",
                }),
                (0, s.jsx)("div", {
                  className: k().paginationWrapper,
                  children: (0, s.jsx)("div", {
                    className: k().inner,
                    children: Array(7)
                      .fill(Number((0, w.B)(f)))
                      .map((e, n) =>
                        (0, w.B)(f).add(n, "month").format("YYYYMM"),
                      )
                      .map((e, n) =>
                        (0, s.jsx)(
                          o.zx,
                          {
                            className: c()(
                              k().monthButton,
                              r === (0, w.B)(e).format("YYYYMM")
                                ? k().selected
                                : f === (0, w.B)(e).format("YYYYMM") &&
                                    k().pastMonth,
                            ),
                            onClick: () => N(e),
                            children: (0, w.B)(e).locale(x).format("MMM"),
                          },
                          n,
                        ),
                      ),
                  }),
                }),
                (0, s.jsx)(o.G9, {
                  className: k().border,
                  isFiveColorsRainbow: !1,
                }),
                r === t &&
                  !v &&
                  (0, s.jsx)("p", {
                    className: k().subtitle,
                    children: "今後の予定",
                  }),
                !v &&
                  (0, s.jsx)("div", {
                    className: k().eventList,
                    children: u
                      .map((e, n) => (0, s.jsx)(T, { event: e }, n))
                      .slice(0, d ? u.length : b ? 5 : 10),
                  }),
                v &&
                  (0, s.jsx)("div", {
                    className: k().emptyMessage,
                    children: j(
                      r === t
                        ? "calendar.emptyMessageThisMonth"
                        : "calendar.emptyMessage",
                      { ns: "top" },
                    ),
                  }),
                (0, s.jsx)(o.Be, {
                  className: k().calendarLinkButton,
                  buttonType: "rainbow",
                  iconType: "forward",
                  value: j("linkButton.toCalendar", { ns: "common" }),
                  onClick: () => {
                    l().push(g());
                  },
                }),
              ],
            })
          );
        };
      var B = a(44449),
        A = a.n(B);
      let M = (e) => {
        let { className: n, talents: a } = e,
          { t } = (0, i.$G)(["common"]),
          r = (0, C.Jl)();
        return (0, s.jsxs)("div", {
          className: c()(n, A().talents),
          "data-testid": "TopTalents",
          children: [
            (0, s.jsx)("div", {
              className: A().sectionTitleRow,
              children: (0, s.jsx)(o.NZ, { title: "TALENTS" }),
            }),
            r && (0, s.jsx)(h.DV, { talents: a }),
            (0, s.jsx)(o.Be, {
              className: A().button,
              buttonType: "rainbow",
              iconType: "forward",
              value: t("linkButton.toTalentList", { ns: "common" }),
              onClick: () => {
                l().push("/talents");
              },
            }),
          ],
        });
      };
      var O = a(76766),
        W = a.n(O);
      let P = (e) => {
        let { className: n, officialPrograms: a } = e,
          { t } = (0, i.$G)(["common"]),
          [r, m] = (0, _.useState)(),
          [d, p] = (0, _.useState)(),
          u = (0, _.useCallback)(
            (e) => {
              (m(e.target.id),
                p(e),
                r && r !== e.target.id && (null == d || d.target.stopVideo()));
            },
            [r, d],
          );
        return (0, s.jsxs)("div", {
          className: c()(n, W().officialProgram),
          "data-testid": "TopOfficialProgram",
          children: [
            (0, s.jsx)(o.NZ, {
              className: W().sectionTitle,
              title: "OFFICIAL PROGRAMS",
            }),
            (0, s.jsx)("div", {
              className: W().officialProgramWrapper,
              children: a.map((e, n) =>
                (0, s.jsx)(
                  h.DB,
                  {
                    className: 1 === n ? W().pcOnly : "",
                    officialProgram: e,
                    onPlay: u,
                  },
                  n,
                ),
              ),
            }),
            (0, s.jsx)("div", {
              className: W().buttonWrap,
              children: (0, s.jsx)(o.Be, {
                className: W().button,
                buttonType: "rainbow",
                iconType: "forward",
                value: t("linkButton.toOfficialProgram", { ns: "common" }),
                onClick: () => {
                  l().push("/official-programs");
                },
              }),
            }),
          ],
        });
      };
      var R = a(1493),
        F = a(93322),
        E = a.n(F);
      let U = (e) => {
        let { className: n, onAirStreams: a, allLivers: t } = e,
          r = (0, L.b)(),
          { t: m } = (0, i.$G)(["top", "common"]),
          [d, p] = (0, _.useState)(1),
          u = (e) => t.filter((n) => n.id === e)[0],
          f = (e) => {
            let n = Math.ceil(e / 12);
            n > d && p(n);
          };
        return (0, s.jsxs)("div", {
          className: c()(n, E().nowOnAir),
          "data-testid": "TopNowOnAir",
          children: [
            (0, s.jsx)(o.NZ, {
              className: E().sectionTitle,
              title: "NOW ON AIR",
            }),
            0 !== a.length &&
              (0, s.jsxs)("div", {
                className: E().list,
                children: [
                  a.map((e, n) => {
                    var a, t;
                    let l = u((0, R.Q9)(e));
                    return l
                      ? (f("ja" === r ? l.name.length : l.enName.length),
                        (0, s.jsx)(
                          h.Ui,
                          {
                            href: e.url,
                            thumbnailUrl:
                              null !== (a = e["thumbnail-url"]) && void 0 !== a
                                ? a
                                : null,
                            fallbackThumbnailUrl:
                              null !== (t = e["fallback-thumbnail-url"]) &&
                              void 0 !== t
                                ? t
                                : null,
                            iconUrl: l.images.head.url,
                            liverName: "ja" === r ? l.name : l.enName,
                            liverNameLineNumber: d,
                            title: e.title,
                            liverColor: l.profile.color,
                            platform: e.platform,
                          },
                          n,
                        ))
                      : null;
                  }),
                  a.length <= 1 &&
                    (0, s.jsx)("div", {
                      className: E().moreItem,
                      children: (0, s.jsx)("p", { children: "more" }),
                    }),
                ],
              }),
            0 === a.length &&
              (0, s.jsx)("div", {
                className: E().empty,
                children: m("streams.emptyMessage", { ns: "top" }),
              }),
            (0, s.jsx)(o.Be, {
              className: E().button,
              buttonType: "rainbow",
              iconType: "forward",
              value: m("linkButton.toStreams", { ns: "common" }),
              onClick: () => {
                l().push("/streams");
              },
            }),
          ],
        });
      };
      var D = a(67944),
        Y = a.n(D);
      let G = (e) => {
        let { liver: n, isModalOpen: a, onModalToggle: t } = e,
          l = () => {
            var e, a, s;
            return n.images
              ? [
                  { name: "デフォルト", path: n.images.fullbody.url },
                  ...(null === (e = n.images.variation) || void 0 === e
                    ? void 0
                    : e.map((e) => {
                        var a;
                        return {
                          name:
                            null !== (a = e.name) && void 0 !== a ? a : n.name,
                          path: e.fullbody.url,
                        };
                      })),
                  ...(null !==
                    (s =
                      null === (a = n.images.threeDVariation) || void 0 === a
                        ? void 0
                        : a.map((e) => {
                            var a;
                            return {
                              name:
                                null !== (a = e.name) && void 0 !== a
                                  ? a
                                  : n.name,
                              path: e.fullbody.url,
                            };
                          })) && void 0 !== s
                    ? s
                    : []),
                ]
              : [];
          },
          i = (e) => {
            let { move: n } = e,
              a = (0, u.oc)();
            return (0, s.jsx)(o.tl, {
              className: Y().swiperButton,
              to: n,
              iconType: "bracketsLarge",
              onClick: () => ("prev" === n ? a.slidePrev() : a.slideNext()),
              isShow: l().length > 1,
            });
          };
        return (0, s.jsx)("section", {
          className: c()(Y().galleryModal, a ? Y().open : Y().close),
          children: (0, s.jsxs)(u.tq, {
            className: Y().swiper,
            loop: !0,
            children: [
              (0, s.jsx)(i, { move: "prev" }),
              (0, s.jsx)(i, { move: "next" }),
              l().map((e) =>
                (0, s.jsx)(
                  u.o5,
                  {
                    className: Y().swiperSlide,
                    children: (0, s.jsx)(y.Z, {
                      src: e.path,
                      fetchwidth: 800,
                      width: 600,
                      height: 600,
                      alt: e.name,
                    }),
                  },
                  e.path,
                ),
              ),
              (0, s.jsx)("div", { className: Y().closeWrap, onClick: t }),
            ],
          }),
        });
      };
      var H = a(17059),
        V = a.n(H);
      let q = (e) => {
        let { className: n = "", contact: a } = e,
          t = (0, L.b)(),
          { t: l } = (0, i.$G)(["contact"]);
        return (0, s.jsxs)("div", {
          className: c()(n, V().confirmForCompany),
          "data-testid": "ContactConfirmForCompany",
          children: [
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.contactType.label", { ns: "contact" }),
                }),
                (0, s.jsx)("p", {
                  className: V().content,
                  children: a.contactType,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.companyName.label", { ns: "contact" }),
                }),
                (0, s.jsx)("p", {
                  className: V().content,
                  children: a.companyName,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.departmentName.label", { ns: "contact" }),
                }),
                !!a.departmentName &&
                  (0, s.jsx)("p", {
                    className: V().content,
                    children: a.departmentName,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.managerName.label", { ns: "contact" }),
                }),
                (0, s.jsx)("p", { className: V().content, children: a.name }),
              ],
            }),
            "ja" === t &&
              (0, s.jsxs)("div", {
                className: V().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: V().label,
                    children: l("form.managerNameRuby.label", {
                      ns: "contact",
                    }),
                  }),
                  !!a.nameRuby &&
                    (0, s.jsx)("p", {
                      className: V().content,
                      children: a.nameRuby,
                    }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.email.label", { ns: "contact" }),
                }),
                (0, s.jsx)("p", { className: V().content, children: a.email }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.phoneNumber.label", { ns: "contact" }),
                }),
                !!a.phoneNumber &&
                  (0, s.jsx)("p", {
                    className: V().content,
                    children: a.phoneNumber,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.homePage.label", { ns: "contact" }),
                }),
                !!a.homePage &&
                  (0, s.jsx)("p", {
                    className: V().content,
                    children: a.homePage,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: V().confirmItem,
              children: [
                (0, s.jsx)("p", {
                  className: V().label,
                  children: l("form.content.label", { ns: "contact" }),
                }),
                (0, s.jsx)("p", {
                  className: V().content,
                  children: a.content,
                }),
              ],
            }),
          ],
        });
      };
      var Z = a(21458),
        z = a.n(Z);
      let J = (e) => {
          let { className: n = "", contact: a, isAppClient: t } = e,
            { t: l } = (0, i.$G)(["contact"]);
          return (0, s.jsxs)("div", {
            className: c()(n, z().confirmForOrdinary),
            "data-testid": "ContactConfirmForFanclub",
            children: [
              !t &&
                (0, s.jsxs)("div", {
                  className: z().confirmItem,
                  children: [
                    (0, s.jsx)("p", {
                      className: z().label,
                      children: l("form.viewerEnvironment.label", {
                        ns: "contact",
                      }),
                    }),
                    (0, s.jsx)("p", {
                      className: z().content,
                      children: ((e) => {
                        switch (e) {
                          case l("form.viewerEnvironment.option.ios.value", {
                            ns: "contact",
                          }):
                            return l(
                              "form.viewerEnvironment.option.ios.label",
                              { ns: "contact" },
                            );
                          case l(
                            "form.viewerEnvironment.option.android.value",
                            { ns: "contact" },
                          ):
                            return l(
                              "form.viewerEnvironment.option.android.label",
                              { ns: "contact" },
                            );
                          case l(
                            "form.viewerEnvironment.option.windows.value",
                            { ns: "contact" },
                          ):
                            return l(
                              "form.viewerEnvironment.option.windows.label",
                              { ns: "contact" },
                            );
                          case l("form.viewerEnvironment.option.mac.value", {
                            ns: "contact",
                          }):
                            return l(
                              "form.viewerEnvironment.option.mac.label",
                              { ns: "contact" },
                            );
                          case l("form.viewerEnvironment.option.other.value", {
                            ns: "contact",
                          }):
                            return l(
                              "form.viewerEnvironment.option.other.label",
                              { ns: "contact" },
                            );
                          default:
                            return e;
                        }
                      })(a.viewerEnvironment),
                    }),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.title.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.title,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.bodyText.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.bodyText,
                  }),
                ],
              }),
            ],
          });
        },
        K = (e) => {
          let { className: n = "", contact: a } = e,
            t = (0, L.b)(),
            { t: l } = (0, i.$G)(["contact"]);
          return (0, s.jsxs)("div", {
            className: c()(n, z().confirmForOrdinary),
            "data-testid": "ContactConfirmForOrdinary",
            children: [
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.contactType.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.contactType,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.fullName.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", { className: z().content, children: a.name }),
                ],
              }),
              "ja" === t &&
                (0, s.jsxs)("div", {
                  className: z().confirmItem,
                  children: [
                    (0, s.jsx)("p", {
                      className: z().label,
                      children: l("form.fullNameRuby.label", { ns: "contact" }),
                    }),
                    !!a.nameRuby &&
                      (0, s.jsx)("p", {
                        className: z().content,
                        children: a.nameRuby,
                      }),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.email.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.email,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.phoneNumber.label", { ns: "contact" }),
                  }),
                  !!a.phoneNumber &&
                    (0, s.jsx)("p", {
                      className: z().content,
                      children: a.phoneNumber,
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: l("form.content.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.content,
                  }),
                ],
              }),
            ],
          });
        };
      var Q = a(21158),
        X = a.n(Q);
      let $ = (e) => {
        let {
            className: n = "",
            contactInput: a,
            contactInputError: t,
            onChangeContactInput: l,
          } = e,
          r = (0, L.b)(),
          { t: o } = (0, i.$G)(["contact"]),
          m = [
            {
              id: o("contactType.company.promotion", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.company.promotion", { ns: "contact" }),
              value: o("contactType.company.promotion", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.company.goods", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.company.goods", { ns: "contact" }),
              value: o("contactType.company.goods", { ns: "contact" }),
              onChange: l,
            },
            {
              isOnlyJp: !0,
              id: o("contactType.overseas", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.overseas", { ns: "contact" }),
              value: o("contactType.overseas", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.company.media", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.company.media", { ns: "contact" }),
              value: o("contactType.company.media", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.company.copyrights", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.company.copyrights", { ns: "contact" }),
              value: o("contactType.company.copyrights", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.other", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.other", { ns: "contact" }),
              value: o("contactType.other", { ns: "contact" }),
              onChange: l,
            },
          ];
        return (0, s.jsxs)("div", {
          className: c()(n, X().formForCompany),
          "data-testid": "ContactFormForCompany",
          children: [
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.Kk, {
                  buttons: m,
                  label: o("form.contactType.label", { ns: "contact" }),
                  checkedValue: a.contactType,
                  required: !0,
                }),
                !!t.contactType &&
                  (0, s.jsx)("p", {
                    className: X().error,
                    children: t.contactType,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "companyName",
                  name: "companyName",
                  value: a.companyName,
                  placeholder: o("form.companyName.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.companyName.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.companyName &&
                  (0, s.jsx)("p", {
                    className: X().error,
                    children: t.companyName,
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className: X().formItem,
              children: (0, s.jsx)(h.v4, {
                id: "departmentName",
                name: "departmentName",
                value: a.departmentName || "",
                placeholder: o("form.departmentName.placeholder", {
                  ns: "contact",
                }),
                label: o("form.departmentName.label", { ns: "contact" }),
                onChange: l,
              }),
            }),
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "name",
                  name: "name",
                  value: a.name || "",
                  placeholder: o("form.managerName.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.managerName.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.name &&
                  (0, s.jsx)("p", { className: X().error, children: t.name }),
              ],
            }),
            "ja" === r &&
              (0, s.jsxs)("div", {
                className: X().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "nameRuby",
                    name: "nameRuby",
                    value: a.nameRuby || "",
                    placeholder: o("form.managerNameRuby.placeholder", {
                      ns: "contact",
                    }),
                    label: o("form.managerNameRuby.label", { ns: "contact" }),
                    onChange: l,
                  }),
                  !!t.nameRuby &&
                    (0, s.jsx)("p", {
                      className: X().error,
                      children: t.nameRuby,
                    }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "email",
                  name: "email",
                  value: a.email,
                  placeholder: o("form.email.placeholder", { ns: "contact" }),
                  label: o("form.email.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.email &&
                  (0, s.jsx)("p", { className: X().error, children: t.email }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "confirmEmail",
                  name: "confirmEmail",
                  value: a.confirmEmail,
                  placeholder: o("form.confirmEmail.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.confirmEmail.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.confirmEmail &&
                  (0, s.jsx)("p", {
                    className: X().error,
                    children: t.confirmEmail,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "phoneNumber",
                  name: "phoneNumber",
                  value: a.phoneNumber || "",
                  placeholder: o("form.phoneNumber.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.phoneNumber.label", { ns: "contact" }),
                  onChange: l,
                }),
                !!t.phoneNumber &&
                  (0, s.jsx)("p", {
                    className: X().error,
                    children: t.phoneNumber,
                  }),
              ],
            }),
            (0, s.jsx)("div", {
              className: X().formItem,
              children: (0, s.jsx)(h.v4, {
                id: "homePage",
                name: "homePage",
                value: a.homePage || "",
                placeholder: o("form.homePage.placeholder", { ns: "contact" }),
                label: o("form.homePage.label", { ns: "contact" }),
                onChange: l,
              }),
            }),
            (0, s.jsxs)("div", {
              className: X().formItem,
              children: [
                (0, s.jsx)(h.Hn, {
                  id: "content",
                  name: "content",
                  value: a.content,
                  placeholder: o("form.content.placeholder", { ns: "contact" }),
                  label: o("form.content.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                  maxLength: 2e3,
                }),
                !!t.content &&
                  (0, s.jsx)("p", {
                    className: X().error,
                    children: t.content,
                  }),
              ],
            }),
          ],
        });
      };
      var ee = a(75716),
        en = a.n(ee);
      let ea = (e) => {
        let {
            className: n = "",
            contactInput: a,
            contactInputError: t,
            isAppClient: l,
            onChangeContactInput: r,
          } = e,
          { t: o } = (0, i.$G)(["contact"]),
          m = [
            {
              id: o("form.viewerEnvironment.option.ios.value", {
                ns: "contact",
              }),
              name: "viewerEnvironment",
              label: o("form.viewerEnvironment.option.ios.label", {
                ns: "contact",
              }),
              value: o("form.viewerEnvironment.option.ios.value", {
                ns: "contact",
              }),
              onChange: r,
            },
            {
              id: o("form.viewerEnvironment.option.android.value", {
                ns: "contact",
              }),
              name: "viewerEnvironment",
              label: o("form.viewerEnvironment.option.android.label", {
                ns: "contact",
              }),
              value: o("form.viewerEnvironment.option.android.value", {
                ns: "contact",
              }),
              onChange: r,
            },
            {
              id: o("form.viewerEnvironment.option.windows.value", {
                ns: "contact",
              }),
              name: "viewerEnvironment",
              label: o("form.viewerEnvironment.option.windows.label", {
                ns: "contact",
              }),
              value: o("form.viewerEnvironment.option.windows.value", {
                ns: "contact",
              }),
              onChange: r,
            },
            {
              id: o("form.viewerEnvironment.option.mac.value", {
                ns: "contact",
              }),
              name: "viewerEnvironment",
              label: o("form.viewerEnvironment.option.mac.label", {
                ns: "contact",
              }),
              value: o("form.viewerEnvironment.option.mac.value", {
                ns: "contact",
              }),
              onChange: r,
            },
            {
              id: o("form.viewerEnvironment.option.other.value", {
                ns: "contact",
              }),
              name: "viewerEnvironment",
              label: o("form.viewerEnvironment.option.other.label", {
                ns: "contact",
              }),
              value: o("form.viewerEnvironment.option.other.value", {
                ns: "contact",
              }),
              onChange: r,
            },
          ];
        return (0, s.jsxs)("div", {
          className: c()(n, en().formForOrdinary),
          "data-testid": "ContactFormForFanclub",
          children: [
            !l &&
              (0, s.jsxs)("div", {
                className: en().formItem,
                children: [
                  (0, s.jsx)(h.Kk, {
                    buttons: m,
                    label: o("form.viewerEnvironment.label", { ns: "contact" }),
                    checkedValue: a.viewerEnvironment,
                    required: !0,
                  }),
                  !!t.viewerEnvironment &&
                    (0, s.jsx)("p", {
                      className: en().error,
                      children: t.viewerEnvironment,
                    }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "title",
                  name: "title",
                  value: a.title || "",
                  placeholder: o("form.title.placeholder", { ns: "contact" }),
                  label: o("form.title.label", { ns: "contact" }),
                  onChange: r,
                  required: !0,
                }),
                !!t.title &&
                  (0, s.jsx)("p", { className: en().error, children: t.title }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.Hn, {
                  id: "bodyText",
                  name: "bodyText",
                  value: a.bodyText,
                  placeholder: o("form.bodyText.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.bodyText.label", { ns: "contact" }),
                  onChange: r,
                  required: !0,
                  maxLength: 2e3,
                }),
                !!t.bodyText &&
                  (0, s.jsx)("p", {
                    className: en().error,
                    children: t.bodyText,
                  }),
              ],
            }),
          ],
        });
      };
      var es = a(25935);
      let et = (e) => {
        let {
            className: n = "",
            contactInput: a,
            contactInputError: t,
            onChangeContactInput: l,
          } = e,
          r = (0, L.b)(),
          { t: o } = (0, i.$G)(["contact"]),
          m = [
            {
              id: o("contactType.ordinary.stream", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.ordinary.stream", { ns: "contact" }),
              value: o("contactType.ordinary.stream", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.ordinary.goods", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.ordinary.goods", { ns: "contact" }),
              value: o("contactType.ordinary.goods", { ns: "contact" }),
              onChange: l,
            },
            {
              isOnlyJp: !0,
              id: o("contactType.overseas", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.overseas", { ns: "contact" }),
              value: o("contactType.overseas", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.ordinary.copyrights", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.ordinary.copyrights", { ns: "contact" }),
              value: o("contactType.ordinary.copyrights", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.ordinary.bug", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.ordinary.bug", { ns: "contact" }),
              value: o("contactType.ordinary.bug", { ns: "contact" }),
              onChange: l,
            },
            {
              id: o("contactType.other", { ns: "contact" }),
              name: "contactType",
              label: o("contactType.other", { ns: "contact" }),
              value: o("contactType.other", { ns: "contact" }),
              onChange: l,
            },
          ];
        return (0, s.jsxs)("div", {
          className: c()(n, en().formForOrdinary),
          "data-testid": "ContactFormForOrdinary",
          children: [
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.Kk, {
                  buttons: m,
                  label: o("form.contactType.label", { ns: "contact" }),
                  checkedValue: a.contactType,
                  required: !0,
                }),
                !!t.contactType &&
                  (0, s.jsx)("p", {
                    className: en().error,
                    children: t.contactType,
                  }),
                a.contactType ===
                  o("contactType.ordinary.goods", { ns: "contact" }) &&
                  "ja" === r &&
                  (0, s.jsx)("div", {
                    className: en().attention,
                    children: (0, es.ZP)(
                      o("form.contactType.remarks", { ns: "contact" }),
                    ),
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "name",
                  name: "name",
                  value: a.name || "",
                  placeholder: o("form.fullName.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.fullName.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.name &&
                  (0, s.jsx)("p", { className: en().error, children: t.name }),
              ],
            }),
            "ja" === r &&
              (0, s.jsxs)("div", {
                className: en().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "nameRuby",
                    name: "nameRuby",
                    value: a.nameRuby || "",
                    placeholder: o("form.fullNameRuby.placeholder", {
                      ns: "contact",
                    }),
                    label: o("form.fullNameRuby.label", { ns: "contact" }),
                    onChange: l,
                  }),
                  !!t.nameRuby &&
                    (0, s.jsx)("p", {
                      className: en().error,
                      children: t.nameRuby,
                    }),
                ],
              }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "email",
                  name: "email",
                  value: a.email,
                  placeholder: o("form.email.placeholder", { ns: "contact" }),
                  label: o("form.email.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.email &&
                  (0, s.jsx)("p", { className: en().error, children: t.email }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "confirmEmail",
                  name: "confirmEmail",
                  value: a.confirmEmail,
                  placeholder: o("form.confirmEmail.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.confirmEmail.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                }),
                !!t.confirmEmail &&
                  (0, s.jsx)("p", {
                    className: en().error,
                    children: t.confirmEmail,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.v4, {
                  id: "phoneNumber",
                  name: "phoneNumber",
                  value: a.phoneNumber || "",
                  placeholder: o("form.phoneNumber.placeholder", {
                    ns: "contact",
                  }),
                  label: o("form.phoneNumber.label", { ns: "contact" }),
                  onChange: l,
                }),
                !!t.phoneNumber &&
                  (0, s.jsx)("p", {
                    className: en().error,
                    children: t.phoneNumber,
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: en().formItem,
              children: [
                (0, s.jsx)(h.Hn, {
                  id: "content",
                  name: "content",
                  value: a.content,
                  placeholder: o("form.content.placeholder", { ns: "contact" }),
                  label: o("form.content.label", { ns: "contact" }),
                  onChange: l,
                  required: !0,
                  maxLength: 2e3,
                }),
                !!t.content &&
                  (0, s.jsx)("p", {
                    className: en().error,
                    children: t.content,
                  }),
              ],
            }),
          ],
        });
      };
      var el = a(18994),
        ei = a.n(el);
      let er = (e) => {
        let {
            className: n = "",
            introductionTranslationKey: a,
            translationKey: t,
            langOption: l = {},
          } = e,
          r = (0, L.b)(),
          { t: o } = (0, i.$G)(["contact"]),
          m = (e) =>
            c()(
              "ja" === r ? ei().ja : ei().en,
              "caution" === e ? ei().caution : "",
            ),
          d = (e) => {
            let { values: n, isAnnotation: a = !1 } = e;
            return n.length > 0
              ? (0, s.jsx)("ul", {
                  className: c()(ei().textList, a ? ei().annotation : ""),
                  children: n.map((e, n) =>
                    "string" == typeof e
                      ? (0, s.jsx)(
                          "li",
                          { className: m(), children: (0, es.ZP)(e) },
                          n,
                        )
                      : (0, s.jsx)(
                          "li",
                          {
                            className: m(e.type),
                            children: (0, es.ZP)(e.text),
                          },
                          n,
                        ),
                  ),
                })
              : null;
          };
        return (0, s.jsxs)("div", {
          className: c()(n, ei().notes),
          "data-testid": "ContactNotes",
          children: [
            (0, s.jsx)("div", {
              className: ei().introduction,
              children: (0, es.ZP)(o(a, { ns: "contact", ...l })),
            }),
            o(t, { ns: "contact", returnObjects: !0 }).map((e, n) =>
              (0, s.jsxs)(
                "div",
                {
                  className: ei().content,
                  children: [
                    (0, s.jsx)("p", {
                      className: ei().title,
                      children: e.heading,
                    }),
                    (0, s.jsx)(d, { values: e.text }),
                    (0, s.jsx)(d, { values: e.annotation, isAnnotation: !0 }),
                  ],
                },
                n,
              ),
            ),
          ],
        });
      };
      var ec = a(5575),
        eo = a(31826),
        em = a.n(eo);
      let ed = (e) => {
        let {
            className: n,
            isFanclubContact: a = !1,
            isMembershipCardRequest: t = !1,
            openPrivacyModal: l,
          } = e,
          r = (0, L.b)(),
          o = (0, s.jsx)("a", {
            className: em().link,
            href:
              "en" === r
                ? ec.Gp.EN_ANYCOLOR_PRIVACY_URL
                : ec.Gp.JP_ANYCOLOR_PRIVACY_URL,
            target: "_blank",
            rel: "noopener noreferrer",
          });
        return (0, s.jsxs)("ul", {
          className: c()(n, em().privacyNotes),
          "data-testid": "ContactPrivacyNotes",
          children: [
            (0, s.jsx)("li", {
              children: (0, s.jsx)(i.cC, {
                i18nKey: t
                  ? "privacyPolicy.membership-card-request"
                  : a
                    ? "privacyPolicy.fanclub"
                    : "privacyPolicy.agreement",
                ns: "contact",
                components: { link_privacy: o },
              }),
            }),
            !(a || t) &&
              (0, s.jsx)("li", {
                children: (0, s.jsx)(i.cC, {
                  i18nKey: "privacyPolicy.atelierColors",
                  ns: "contact",
                  components: {
                    link_atelierColors: (0, s.jsx)("span", {
                      className: em().link,
                      onClick: l,
                    }),
                  },
                }),
              }),
          ],
        });
      };
      var ep = a(61046),
        e_ = a.n(ep);
      let eu = (e) => {
          let {
              className: n,
              step: a,
              stepTranslationKey: t,
              langOption: l = {},
            } = e,
            { t: r } = (0, i.$G)(["contact"]),
            o = (e) => (a >= e ? e_().colored : ""),
            m = (e) => r(t, { ns: "contact", returnObjects: !0, ...l })[e - 1];
          return (0, s.jsxs)("div", {
            className: c()(n, e_().steps),
            "data-testid": "ContactSteps",
            children: [
              (0, s.jsxs)("div", {
                className: e_().inner,
                children: [
                  (0, s.jsx)("p", {
                    className: c()(e_().label, o(1)),
                    children: m(1),
                  }),
                  (0, s.jsx)("p", {
                    className: c()(e_().label, o(2)),
                    children: m(2),
                  }),
                  (0, s.jsx)("p", {
                    className: c()(e_().label, o(3)),
                    children: m(3),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: e_().line,
                children: [
                  (0, s.jsx)("div", {
                    className: c()(
                      e_().gradient,
                      1 === a
                        ? e_().step1
                        : 2 === a
                          ? e_().step2
                          : 3 === a
                            ? e_().step3
                            : "",
                    ),
                    "data-testid": "ContactStepsGradientLine",
                  }),
                  (0, s.jsx)("div", {
                    className: e_().gray,
                    "data-testid": "ContactStepsGrayLine",
                  }),
                ],
              }),
            ],
          });
        },
        eh = (e) => {
          let {
            className: n = "",
            showNotes: a = !0,
            isFanclubContact: t = !1,
            isMembershipCardRequest: l = !1,
          } = e;
          return (0, s.jsx)("div", {
            className: n,
            "data-testid": "ContactUpperPart",
            children: a
              ? (0, s.jsx)(er, {
                  introductionTranslationKey: l
                    ? "notes.membership-card-introduction"
                    : "notes.introduction",
                  translationKey: l
                    ? "notes.membership-card-request"
                    : t
                      ? "notes.fanclub-contents"
                      : "notes.contents",
                  langOption: t ? { lng: "ja" } : void 0,
                })
              : null,
          });
        };
      var ef = a(6701),
        ex = a.n(ef);
      let ej = (e) => {
        let { className: n = "", newsList: a } = e,
          [t, l] = (0, _.useState)(!0),
          [i, r] = (0, _.useState)(!1),
          [m, d] = (0, _.useState)(!1),
          p = (0, C.am)();
        (0, _.useEffect)(() => {
          d(!0);
        }, []);
        let f = !Object.is(p, null) && !p;
        return (0, s.jsx)("div", {
          className: c()(n, ex().newsSlider),
          "data-testid": "NewsSlider",
          children: (0, s.jsxs)(u.tq, {
            className: ex().swiper,
            style: { visibility: m ? "visible" : "hidden" },
            spaceBetween: 30,
            slidesOffsetAfter: 60,
            slidesPerView: "auto",
            centeredSlides: !0,
            onSlideChange: (e) => {
              (l(e.isBeginning), r(e.isEnd));
            },
            breakpoints: {
              769: {
                createElements: !0,
                setWrapperSize: !0,
                centeredSlides: !1,
                slidesOffsetAfter: 160,
              },
            },
            children: [
              a.map((e, n) =>
                (0, s.jsx)(
                  u.o5,
                  {
                    className: ex().swiperSlide,
                    children: (0, s.jsx)(h.ns, {
                      news: e,
                      priority: 0 === n,
                      isSpWindowWidth: p,
                    }),
                  },
                  e.id,
                ),
              ),
              f &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(() => {
                      let e = (0, u.oc)();
                      return (0, s.jsx)(o.tl, {
                        iconType: "bracketsLarge",
                        to: "prev",
                        onClick: () => e.slidePrev(),
                        disabled: t,
                        className: c()(ex().swiperButton, ex().prev),
                      });
                    }, {}),
                    (0, s.jsx)(() => {
                      let e = (0, u.oc)();
                      return (0, s.jsx)(o.tl, {
                        iconType: "bracketsLarge",
                        to: "next",
                        onClick: () => e.slideNext(),
                        disabled: i,
                        className: c()(ex().swiperButton, ex().next),
                      });
                    }, {}),
                  ],
                }),
            ],
          }),
        });
      };
      var eb = a(31089),
        ev = a(27571),
        eN = a(79607),
        eg = a(8017),
        ey = a(90121),
        eC = a.n(ey);
      let ew = (e) => {
        var n, a;
        let {
            className: t = "",
            stream: l,
            liver: i,
            isToday: r = !1,
            isWide: o = !1,
            priority: m = !1,
            onClickLiveStreamItem: d,
          } = e,
          { currentParrotUser: p } = (0, eN.Eu)(),
          { bookmarkedLiverIds: _ } = (0, eN.SE)(),
          u = (0, L.b)(),
          h =
            null !==
              (a =
                null === (n = i.profile) || void 0 === n ? void 0 : n.color) &&
            void 0 !== a
              ? a
              : eg.$Ui;
        return (0, s.jsx)("div", {
          className: c()(
            t,
            eC().liveStreamItem,
            r && eC().today,
            o && eC().wideColumn,
          ),
          onClick: () => d(l, i),
          "data-testid": "LiveStreamItem",
          children: (0, s.jsxs)("div", {
            className: eC().inner,
            children: [
              (0, s.jsxs)("div", {
                className: eC().startAt,
                children: [
                  (0, s.jsx)(eb.v, {
                    platform: l.platform,
                    className: c()(
                      eC().platformIcon,
                      "twitch" === l.platform && eC().twitchIcon,
                    ),
                  }),
                  (0, s.jsx)("p", {
                    className: c()(
                      eC().time,
                      "on_air" === l.status ? eC().nowOnAir : "",
                    ),
                    children: (0, w.B)(l["start-at"]).format("HH:mm"),
                  }),
                ],
              }),
              "on_air" === l.status &&
                (0, s.jsx)("div", {
                  className: eC().onAir,
                  children: "ON AIR",
                }),
              (0, s.jsxs)("div", {
                className: c()(
                  eC().content,
                  "on_air" === l.status ? eC().nowOnAir : "",
                ),
                children: [
                  (0, s.jsxs)("div", {
                    className: eC().liver,
                    children: [
                      (0, s.jsx)("div", {
                        className: eC().liverIconWrapper,
                        children: (0, s.jsx)(y.Z, {
                          src: i.images.head.url,
                          alt: i.name,
                          fetchwidth: 200,
                          fill: !0,
                          priority: m,
                        }),
                      }),
                      !!p &&
                        _.includes(i.id) &&
                        (0, s.jsx)("div", {
                          className: eC().favorite,
                          children: (0, s.jsx)("div", {
                            className: eC().favoriteIconWrapper,
                            children: (0, s.jsx)(y.Z, {
                              src: "/simusanji/icon/favorite.svg",
                              alt: "お気に入り",
                              fill: !0,
                            }),
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: eC().center,
                    children: [
                      (0, s.jsx)("p", {
                        className: eC().name,
                        children: "ja" === u ? i.name : i.enName,
                      }),
                      (0, s.jsx)("p", {
                        className: eC().title,
                        children: l.title,
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: eC().thumbnail,
                    children: (0, s.jsx)("div", {
                      className: eC().thumbnailWrapper,
                      children: (0, s.jsx)(ev.C, {
                        platform: l.platform,
                        thumbnailUrl: l["thumbnail-url"],
                        fallbackThumbnailUrl: l["fallback-thumbnail-url"],
                        alt: l.title,
                        liverColor: h,
                        fill: !0,
                        priority: m,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var eL = a(80546),
        eI = a.n(eL);
      let ek = (e) => {
        let {
            className: n = "",
            stream: a,
            liver: t,
            onClickLiveStreamItem: l,
          } = e,
          { currentParrotUser: i } = (0, eN.Eu)(),
          { bookmarkedLiverIds: r } = (0, eN.SE)(),
          o = (0, L.b)();
        return (0, s.jsxs)("div", {
          className: c()(
            n,
            eI().liveStreamItem,
            "on_air" === a.status ? eI().nowOnAir : "",
          ),
          onClick: () => l(a, t),
          "data-testid": "LiveStreamItemTile",
          children: [
            "on_air" === a.status &&
              (0, s.jsx)("div", { className: eI().onAir, children: "ON AIR" }),
            (0, s.jsxs)("div", {
              className: c()(
                eI().startAt,
                "on_air" === a.status ? eI().nowOnAir : "",
              ),
              children: [
                (0, s.jsx)("p", {
                  children: (0, w.B)(a["start-at"]).format("HH:mm"),
                }),
                (0, s.jsx)(eb.v, {
                  platform: a.platform,
                  className: c()(
                    eI().platformIcon,
                    "twitch" === a.platform && eI().twitchIcon,
                  ),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eI().liver,
              children: [
                (0, s.jsx)("div", {
                  className: eI().liverIconWrapper,
                  children: (0, s.jsx)(y.Z, {
                    src: t.images.head.url,
                    alt: t.name,
                    fetchwidth: 200,
                    fill: !0,
                  }),
                }),
                !!i &&
                  !!t &&
                  r.includes(t.id) &&
                  (0, s.jsx)("div", {
                    className: eI().favorite,
                    children: (0, s.jsx)("div", {
                      className: eI().favoriteIconWrapper,
                      children: (0, s.jsx)(y.Z, {
                        src: "/simusanji/icon/favorite.svg",
                        alt: "お気に入り",
                        fill: !0,
                      }),
                    }),
                  }),
              ],
            }),
            (0, s.jsx)("p", {
              className: eI().liverName,
              children: "ja" === o ? t.name : t.enName,
            }),
          ],
        });
      };
      var eT = a(66607),
        eS = a.n(eT),
        eB = a(1557),
        eA = a(35865),
        eM = a.n(eA);
      w.B.extend(eS());
      let eO = (e) => {
        let {
            className: n = "",
            date: a,
            streams: t,
            livers: l,
            display: i,
            isToday: r = !1,
            isWide: m = !1,
            onClickLiveStreamItem: d,
          } = e,
          p = (0, _.useRef)(null),
          u = (0, w.B)(a).format("YYYY/MM/DD"),
          h = R.LY.map((e) => ({
            startAt: "".concat(u, " ").concat(e.startAt),
            endAt: "".concat(u, " ").concat(e.endAt),
          })),
          [f, x, j, b] = h.map((e) =>
            t.filter((n) =>
              (0, w.B)(n["start-at"]).isBetween(e.startAt, e.endAt, null, "[)"),
            ),
          ),
          v = "list" === i ? eM().list : eM().tile,
          N = (e) => l.find((n) => n.id === e),
          g = (e, n, a) => {
            let t = N((0, R.Q9)(n));
            return t
              ? "list" === i
                ? (0, s.jsx)(ew, {
                    stream: n,
                    liver: t,
                    onClickLiveStreamItem: d,
                    className: e,
                    isToday: r,
                    isWide: m,
                    priority: a,
                  })
                : "tile" === i
                  ? (0, s.jsx)(ek, {
                      stream: n,
                      liver: t,
                      onClickLiveStreamItem: d,
                      className: e,
                    })
                  : null
              : null;
          },
          y = (e) =>
            !!r && (0, w.B)(a).isBetween(h[e].startAt, h[e].endAt, null, "[)"),
          C = (e, n) => {
            let a = y(n),
              t = [0, 1, 2, 3];
            return (0, s.jsx)("div", {
              className: c()(
                eM().liveStreamItemWrapper,
                v,
                r && eM().today,
                m && eM().wideColumn,
              ),
              children: e.map((e, n) =>
                (0, s.jsx)(
                  "div",
                  { children: g("", e, a && t.includes(n)) },
                  n,
                ),
              ),
            });
          };
        return (
          (0, _.useEffect)(() => {
            r &&
              p &&
              p.current &&
              p.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, [l.length]),
          (0, s.jsx)("div", {
            className: c()(
              n,
              eM().liveStreamColumn,
              m && eM().wideColumn,
              r && eM().today,
            ),
            "data-testid": "LiveStreamColumn",
            children: (0, s.jsx)(eB.$B, {
              className: eM().scrollWrapper,
              autoHide: !0,
              universal: !0,
              children: (0, s.jsxs)("div", {
                className: c()(n, eM().inner, v),
                children: [
                  !!f.length &&
                    (0, s.jsxs)("div", {
                      className: eM().section,
                      ref: y(0) ? p : void 0,
                      children: [
                        (0, s.jsx)(o.Q4, {
                          fromTime: 0,
                          toTime: 6,
                          className: eM().timeRange,
                        }),
                        C(f, 0),
                      ],
                    }),
                  !!x.length &&
                    (0, s.jsxs)("div", {
                      className: eM().section,
                      ref: y(1) ? p : void 0,
                      children: [
                        (0, s.jsx)(o.Q4, {
                          fromTime: 6,
                          toTime: 12,
                          className: eM().timeRange,
                        }),
                        C(x, 1),
                      ],
                    }),
                  !!j.length &&
                    (0, s.jsxs)("div", {
                      className: eM().section,
                      ref: y(2) ? p : void 0,
                      children: [
                        (0, s.jsx)(o.Q4, {
                          fromTime: 12,
                          toTime: 18,
                          className: eM().timeRange,
                        }),
                        C(j, 2),
                      ],
                    }),
                  !!b.length &&
                    (0, s.jsxs)("div", {
                      className: eM().section,
                      ref: y(3) ? p : void 0,
                      children: [
                        (0, s.jsx)(o.Q4, {
                          fromTime: 18,
                          toTime: 24,
                          className: eM().timeRange,
                        }),
                        C(b, 3),
                      ],
                    }),
                ],
              }),
            }),
          })
        );
      };
      a(76831);
      var eW = a(25255),
        eP = a.n(eW);
      let eR = (e) => {
        let { className: n = "", date: a, events: t, holidays: l } = e,
          i = (0, L.b)(),
          r = (0, w.B)(a).isSame((0, w.B)(a).day(6), "day"),
          o = (0, w.B)(a).isSame((0, w.B)(a).day(0), "day"),
          m = l.includes((0, w.B)(a).format("YYYY-MM-DD"));
        return (0, s.jsxs)("div", {
          className: c()(
            n,
            eP().calendarRow,
            t.length ? eP().exist : "",
            r ? eP().saturday : "",
            o ? eP().sunday : "",
            m ? eP().holiday : "",
          ),
          "data-testid": "CalendarRow",
          children: [
            (0, s.jsxs)("div", {
              className: eP().date,
              children: [
                (0, s.jsx)("p", {
                  className: eP().day,
                  children: (0, w.B)(a).format("D"),
                }),
                (0, s.jsx)("p", {
                  suppressHydrationWarning: !0,
                  children: (0, w.B)(a).locale(i).format("ddd"),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: eP().events,
              children: t.map((e) => (0, s.jsx)(h.te, { event: e }, e.id)),
            }),
          ],
        });
      };
      var eF = a(41664),
        eE = a.n(eF),
        eU = a(56697),
        eD = a(70452),
        eY = a.n(eD);
      let eG = (e) => {
        var n;
        let { isAppClient: a, content: t, userLicenses: l, link: i } = e,
          r = !t.isLimited || t.canPreview,
          c = "premium" === t.plan,
          m = t.fanclub
            ? ec.nf.DEFAULT_FANCLUB_COVER_IMAGE_URL
            : ec.nf.DEFAULT_PORTAL_COVER_IMAGE_URL,
          d =
            (null === (n = t.fanclub) || void 0 === n ? void 0 : n.status) ===
            "active";
        return (0, s.jsxs)("div", {
          "data-testid": "ContentCard",
          className: eY().contentCard,
          children: [
            (0, s.jsxs)("div", {
              "data-testid": "RenderInformation",
              className: eY().contentHeader,
              children: [
                (0, s.jsxs)("div", {
                  "data-testid": "RenderIcon",
                  className: eY().iconWrapper,
                  children: [
                    (0, s.jsx)(o.J9, {
                      href: (() => {
                        if (t.fanclub && d)
                          return a
                            ? "/fanclubs/".concat(t.fanclub.slug, "?client=app")
                            : "/fanclubs/".concat(t.fanclub.slug);
                      })(),
                      fanclub: t.fanclub,
                    }),
                    t.fanclub &&
                      "active" === t.fanclub.status &&
                      (0, s.jsx)(o.IW, {
                        type: "fanclub",
                        href: "/fanclubs/"
                          .concat(t.fanclub.slug)
                          .concat(a ? "?client=app" : ""),
                        className: eY().fanclubLink,
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: eY().informationWrapper,
                  children: [
                    (0, s.jsx)("p", {
                      className: eY().title,
                      children: t.name,
                    }),
                    (0, s.jsx)(h.JQ, {
                      className: eY().date,
                      publishDate: t.publishedAt,
                      isLimited: t.isLimited,
                      hasLicense: (0, eU.s)(l, t),
                      canPreview: t.canPreview,
                      isPremium: c,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eY().contentBody,
              children: [
                r &&
                  (0, s.jsx)(o.IP, {
                    className: eY().textClip,
                    text: t.textFirstChar,
                    slug: t.slug,
                  }),
                (0, s.jsx)("div", {
                  className: eY().thumbnail,
                  children: (0, s.jsx)(y.Z, {
                    src: t.coverImageUrl || m,
                    fill: !0,
                    alt: t.name,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(eE(), { href: i, className: eY().contentLink }),
          ],
        });
      };
      var eH = a(88133),
        eV = a.n(eH);
      let eq = (e) => {
        let {
            className: n = "",
            isAppClient: a,
            content: t,
            userLicense: l,
            isLicenseGetProcessCompleted: i,
            hasLicense: r,
            onTogglePaymentModal: m,
            canOpenPaymentModal: d,
          } = e,
          p = t.fanclub,
          _ = "premium" === t.plan,
          u = (null == p ? void 0 : p.status) === "active",
          f = (() => {
            if (p && u)
              return a
                ? "/fanclubs/".concat(p.slug, "?client=app")
                : "/fanclubs/".concat(p.slug);
          })();
        return (0, s.jsxs)("div", {
          className: c()(n, eV().contentDetailHeader),
          children: [
            (0, s.jsx)("div", { className: eV().title, children: t.name }),
            (0, s.jsx)(h.JQ, {
              className: c()(eV().information, p ? eV().pcOnly : ""),
              publishDate: t.publishedAt,
              isLimited: t.isLimited,
              hasLicense: r,
              canPreview: t.canPreview,
              isPremium: _,
            }),
            p &&
              (0, s.jsxs)("div", {
                className: eV().fanclubInfo,
                children: [
                  (0, s.jsx)(o.J9, {
                    className: eV().fanclubIcon,
                    href: f,
                    fanclub: p,
                  }),
                  (0, s.jsxs)("div", {
                    className: eV().text,
                    children: [
                      f
                        ? (0, s.jsx)(eE(), {
                            href: f,
                            className: eV().fanclubName,
                            children: p.name,
                          })
                        : (0, s.jsx)("span", {
                            className: eV().fanclubName,
                            children: p.name,
                          }),
                      (0, s.jsx)("p", {
                        className: c()(eV().liverName, eV().pcOnly),
                        children: p.liverName,
                      }),
                      (0, s.jsx)(h.JQ, {
                        className: eV().spOnly,
                        publishDate: t.publishedAt,
                        isLimited: t.isLimited,
                        hasLicense: r,
                        canPreview: t.canPreview,
                        isPremium: _,
                      }),
                    ],
                  }),
                  i &&
                    (0, s.jsxs)("div", {
                      className: eV().pcOnly,
                      children: [
                        l &&
                          (0, s.jsx)("p", {
                            "data-testid": "PlanName",
                            className: eV().activePlanName,
                            children: "".concat(
                              l.license.plan.toUpperCase(),
                              "プラン入会中",
                            ),
                          }),
                        !a &&
                          d &&
                          (0, s.jsx)(h.Uj, {
                            userLicense: l,
                            onTogglePaymentModal: m,
                          }),
                      ],
                    }),
                ],
              }),
          ],
        });
      };
      var eZ = a(78714),
        ez = a.n(eZ);
      let eJ = (e) => {
        let {
            isAppClient: n,
            content: a,
            userLicense: l,
            onTogglePaymentModal: i,
            canOpenPaymentModal: r,
          } = e,
          { isLicenseGetProcessCompleted: m } = (0, eN.SE)(),
          d = (0, t.useRouter)(),
          { fanclub: p, tag: _, slug: u } = d.query,
          f = a && a.tags.length > 0,
          x =
            (null == a ? void 0 : a.text) ||
            (null == a ? void 0 : a.canPreview) ||
            (null == a ? void 0 : a.isLimited) === !1,
          j = (null == a ? void 0 : a.fanclub)
            ? ec.nf.DEFAULT_FANCLUB_COVER_IMAGE_URL
            : ec.nf.DEFAULT_PORTAL_COVER_IMAGE_URL,
          b = (e) => {
            let n = {};
            ("string" == typeof u && (n.slug = u),
              "app" === d.query.client && (n.client = "app"),
              (n.tag = e),
              d.push({ pathname: "/fanclubs/contents", query: n }));
          };
        return (0, s.jsxs)("div", {
          "data-testid": "ContentDetailInner",
          className: ez().contentDetailInner,
          children: [
            (0, s.jsx)(o.QY, {
              className: ez().backRoundButton,
              onClick: () => {
                let e = {};
                ("string" == typeof _ && (e.tag = _),
                  "app" === d.query.client && (e.client = "app"));
                let n = p
                  ? "/fanclubs/".concat(encodeURIComponent(p))
                  : "/fanclubs/contents";
                d.push({ pathname: n, query: e });
              },
            }),
            a
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className: ez().thumbnail,
                      children: (0, s.jsx)(y.Z, {
                        src: a.coverImageUrl || j,
                        fill: !0,
                        alt: a.name,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: ez().wrapper,
                      children: [
                        (0, s.jsx)(eq, {
                          isAppClient: n,
                          content: a,
                          userLicense: l,
                          isLicenseGetProcessCompleted: m,
                          hasLicense:
                            !!a &&
                            !!a.fanclub &&
                            !!l &&
                            (a.canPreview
                              ? l.license.planValue >= a.planValue
                              : !!a.text),
                          onTogglePaymentModal: i,
                          canOpenPaymentModal: r,
                        }),
                        f &&
                          (0, s.jsx)(h.sR, {
                            tagList: a.tags,
                            className: ez().tagList,
                            onChangeSelectedTag: b,
                          }),
                        x &&
                          (0, s.jsx)(h.cC, {
                            body: a,
                            canPreview: a.canPreview,
                            remainingCharacters: a.remainingCharacters,
                            remainingImages: a.remainingNumberOfImages,
                            remainingVideos: a.remainingNumberOfVideos,
                            contentType: a.displayType,
                          }),
                        !!a.fanclub &&
                          !a.viewable &&
                          (0, s.jsx)(e8, {
                            fanclub: a.fanclub,
                            onTogglePaymentModal: i,
                            isAppClient: n,
                            canOpenPaymentModal: r,
                          }),
                        f &&
                          (0, s.jsx)(h.sR, {
                            tagList: a.tags,
                            className: c()(ez().tagList, ez().tagListBottom),
                            onChangeSelectedTag: b,
                          }),
                      ],
                    }),
                  ],
                })
              : (0, s.jsx)("p", {
                  className: ez().emptyMessage,
                  children: "対象のコンテンツは存在しませんでした",
                }),
          ],
        });
      };
      var eK = a(29877),
        eQ = a.n(eK);
      let eX = (e) => {
        let { className: n = "", contentBanners: a } = e,
          { pathname: l, push: i } = (0, t.useRouter)();
        return (0, s.jsxs)("div", {
          "data-testid": "ContentBanners",
          className: c()(n, eQ().contentBanners),
          children: [
            (0, s.jsxs)("button", {
              className: eQ().fanclub,
              onClick: () => {
                "/fanclubs/contents" === l
                  ? i("/fanclubs")
                  : i("/fanclubs/contents");
              },
              children: [
                (0, s.jsx)("div", {
                  className: eQ().fanclubIcon,
                  children: (0, s.jsx)(y.Z, {
                    src: "/simusanji/icon/fanclub.svg",
                    alt: "ファンクラブアイコン",
                    fill: !0,
                  }),
                }),
                "/fanclubs/contents" === l
                  ? "ファンクラブ一覧"
                  : "ファンクラブコンテンツ",
              ],
            }),
            !!a.length &&
              (0, s.jsx)("div", {
                "data-testid": "ContentBannersList",
                className: eQ().banners,
                children: a.map((e) =>
                  (0, s.jsx)(
                    h.gs,
                    { className: eQ().imageWrapper, contentBanner: e },
                    e.id,
                  ),
                ),
              }),
          ],
        });
      };
      var e$ = a(71911);
      a(60853);
      var e0 = a(88253),
        e1 = a.n(e0);
      let e2 = (e) => {
        let { contentBanners: n } = e;
        return (0, s.jsx)("div", {
          "data-testid": "ContentBannerSlider",
          className: e1().contentBannerSlider,
          children: (0, s.jsx)(u.tq, {
            className: e1().swiper,
            slidesPerView: 1,
            loop: !0,
            mousewheel: { thresholdDelta: 100, forceToAxis: !0 },
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            modules: [e$.tl, e$.Gk, e$.pt],
            children: n.map((e) =>
              (0, s.jsx)(
                u.o5,
                {
                  children: (0, s.jsx)("a", {
                    href: e.linkUrl,
                    target: "_blank",
                    className: c()(e1().imageWrapper),
                    "data-testid": "ContentBannersItem",
                    rel: "noopener noreferrer",
                    children: (0, s.jsx)(y.Z, {
                      src: e.imageUrl,
                      alt: "Content Banner",
                      fill: !0,
                    }),
                  }),
                },
                e.id,
              ),
            ),
          }),
        });
      };
      var e5 = a(46161),
        e6 = a.n(e5);
      let e8 = (e) => {
        let {
            className: n = "",
            isAppClient: a,
            fanclub: t,
            onTogglePaymentModal: l,
            canOpenPaymentModal: i,
          } = e,
          r = "active" === t.status,
          m = (() => {
            if (t && r)
              return a
                ? "/fanclubs/".concat(t.slug, "?client=app")
                : "/fanclubs/".concat(t.slug);
          })();
        return (0, s.jsxs)("div", {
          "data-testid": "ContentMemberOnlyNotice",
          className: c()(n, e6().contentMemberOnlyNotice),
          children: [
            (0, s.jsxs)("div", {
              "data-testid": "LiverFanclub",
              children: [
                (0, s.jsxs)("div", {
                  className: e6().header,
                  children: [
                    (0, s.jsx)("div", {
                      className: e6().liverIcon,
                      children: (0, s.jsx)(y.Z, {
                        src: "/simusanji/icon/lock_close_black.svg",
                        alt: "FANCLUB会員限定",
                        fill: !0,
                      }),
                    }),
                    (0, s.jsx)("p", {
                      className: e6().title,
                      children: "FANCLUB会員限定コンテンツ",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: e6().body,
                  children: [
                    (0, s.jsxs)("div", {
                      className: e6().wrapper,
                      children: [
                        (0, s.jsx)(o.J9, { href: m, fanclub: t }),
                        (0, s.jsxs)("div", {
                          children: [
                            m
                              ? (0, s.jsx)(eE(), {
                                  href: m,
                                  className: e6().name,
                                  children: t.name,
                                })
                              : (0, s.jsx)("span", {
                                  className: e6().name,
                                  children: t.name,
                                }),
                            !a &&
                              i &&
                              (0, s.jsx)(h.Uj, {
                                userLicense: null,
                                onTogglePaymentModal: l,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: e6().liverText,
                      children: t.description,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              "data-testid": "NijisanjiFanclub",
              className: e6().nijisanjiFanclub,
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("div", {
                      className: c()(e6().nijisanjiFanclubIcon, e6().pcOnly),
                      children: (0, s.jsx)(y.Z, {
                        src: "/logo/fanclub-logo-small.svg",
                        alt: "にじさんじFAN CLUB",
                        fill: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: c()(e6().nijisanjiFanclubIcon, e6().spOnly),
                      children: (0, s.jsx)(y.Z, {
                        src: "/simusanji/icon/fanclub.svg",
                        alt: "にじさんじFAN CLUB",
                        fill: !0,
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: e6().nijisanjiFanclubText,
                  children: [
                    "にじさんじFAN CLUBで",
                    (0, s.jsx)("br", {}),
                    "配信外でもライバーとつながろう",
                  ],
                }),
                (0, s.jsx)("a", {
                  href: ec.Gp.FAN_CLUB_TOP_URL,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: e6().detailButton,
                  children: "詳細",
                }),
              ],
            }),
          ],
        });
      };
      var e3 = a(71967),
        e4 = a(83553),
        e7 = a.n(e4);
      let e9 = (e) => {
        let { className: n, livers: a } = e;
        return (0, s.jsx)("div", {
          className: c()(n, e7().appIntroduction),
          children: (0, s.jsxs)("div", {
            className: e7().inner,
            children: [
              (0, s.jsx)("div", {
                className: e7().appIconWrapper,
                children: (0, s.jsx)("div", {
                  className: e7().appIcon,
                  children: (0, s.jsx)(y.Z, {
                    src: "/simusanji/icon/fanclub.svg",
                    fill: !0,
                    alt: "にじさんじFAN CLUB",
                  }),
                }),
              }),
              (0, s.jsxs)("p", {
                children: [
                  "ライバーのことをもっと好きになる！",
                  (0, s.jsx)("br", {}),
                  "『にじさんじ FAN CLUB公式アプリ』を",
                  (0, s.jsx)("br", { className: e7().pcOnly }),
                  "ダウンロードしてライバーとのチャットを楽しもう！",
                  (0, s.jsx)("br", {}),
                  "ファンクラブ会員限定の毎月の特典配布も！？",
                ],
              }),
              (0, s.jsxs)("div", {
                className: e7().appLinks,
                children: [
                  (0, s.jsx)("a", {
                    href: "https://nijisanjifanclub.page.link/6BG2",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0, s.jsx)("div", {
                      className: e7().ios,
                      children: (0, s.jsx)(y.Z, {
                        src: "/logo/app_store_download.png",
                        alt: "App Store",
                        fill: !0,
                      }),
                    }),
                  }),
                  (0, s.jsx)("a", {
                    href: "https://nijisanjifanclub.page.link/qh74",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0, s.jsx)("div", {
                      className: e7().android,
                      children: (0, s.jsx)(y.Z, {
                        src: "/logo/google_play_download.png",
                        alt: "Google Play",
                        fill: !0,
                      }),
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: e7().swiperWrapper,
                children: (0, s.jsxs)(u.tq, {
                  className: e7().swiper,
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  watchOverflow: !1,
                  centeredSlides: !0,
                  initialSlide: 1,
                  breakpoints: {
                    769: {
                      slidesPerView: 3,
                      watchOverflow: !0,
                      spaceBetween: 30,
                      loop: !1,
                      initialSlide: 0,
                      centeredSlides: !1,
                    },
                  },
                  children: [
                    (0, s.jsx)(u.o5, {
                      className: e7().swiperSlide,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/fanclub-app-capture01.png",
                        alt: "アプリ紹介画面1",
                        sizes: "100vw",
                        width: 800,
                        height: 1353,
                      }),
                    }),
                    (0, s.jsx)(u.o5, {
                      className: e7().swiperSlide,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/fanclub-app-capture02.png",
                        alt: "アプリ紹介画面2",
                        sizes: "100vw",
                        width: 800,
                        height: 1353,
                      }),
                    }),
                    (0, s.jsx)(u.o5, {
                      className: e7().swiperSlide,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/fanclub-app-capture03.png",
                        alt: "アプリ紹介画面3",
                        sizes: "100vw",
                        width: 800,
                        height: 1353,
                      }),
                    }),
                  ],
                }),
              }),
              2 === a.length &&
                (0, s.jsx)("div", {
                  className: e7().liversWrapper,
                  children: a.map((e) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: c()(e7().liverImageWrapper, e7().pcOnly),
                        children: (0, s.jsx)(y.Z, {
                          src: e.portraitImageUrl,
                          alt: e.name,
                          fill: !0,
                        }),
                      },
                      e.name,
                    ),
                  ),
                }),
            ],
          }),
        });
      };
      var ne = a(71834),
        nn = a.n(ne);
      let na = (e) => {
        let { liverPanelImageUrls: n, toggleModal: a, className: t } = e,
          l = (0, C.am)(),
          i = (0, _.useMemo)(() => n, [n]),
          r = (0, _.useRef)(null),
          [o, m] = (0, _.useState)(0),
          [d, p] = (0, _.useState)(0),
          u = i.length > 0;
        (0, _.useEffect)(() => {
          r.current && u && p(r.current.offsetHeight);
          let e = () => {
            m(window.scrollY >= (l ? 80 : 140) ? 1 : 0);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            e(),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [l, u]);
        let f = (e, n) => {
          e.preventDefault();
          let a = document.getElementById(n),
            s = a ? a.offsetTop - 56 : 0;
          window.scrollTo({ top: s, behavior: "smooth" });
        };
        return (0, s.jsxs)("div", {
          className: c()(t, nn().fanclubIntroduction),
          style: { height: "".concat(d - 0.5, "px") },
          children: [
            i.length > 0 && (0, s.jsx)(h.Lp, { liverPanelImageUrls: i }),
            (0, s.jsxs)("div", {
              className: nn().introWrapper,
              ref: r,
              style: {
                opacity: u ? o : 1,
                transform: u
                  ? "translateY(".concat((1 - o) * 24, "px)")
                  : "none",
                position: u ? "absolute" : "relative",
              },
              children: [
                (0, s.jsxs)("div", {
                  className: nn().introHeading,
                  children: [
                    "にじさんじ FAN CLUB で",
                    (0, s.jsx)("br", {}),
                    "配信外でもライバーと",
                    (0, s.jsx)("br", { className: nn().spOnly }),
                    "つながろう",
                  ],
                }),
                (0, s.jsxs)("p", {
                  className: nn().introText,
                  children: [
                    "にじさんじ FAN CLUB は、",
                    (0, s.jsx)("br", {}),
                    "“配信以外”の会員限定コンテンツを楽しめる",
                    (0, s.jsx)("br", {}),
                    "にじさんじ公式ファンクラブです。",
                    (0, s.jsx)("br", {}),
                    "YouTubeのメンバーシップとは",
                    (0, s.jsx)("br", {}),
                    "違ったコンテンツをお届けします。",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: nn().videoWrapper,
                  children: [
                    (0, s.jsx)("div", {
                      className: nn().videoTitle,
                      children: "にじさんじ FAN CLUB 紹介 CM",
                    }),
                    (0, s.jsxs)("ul", {
                      className: nn().videoList,
                      children: [
                        (0, s.jsxs)("li", {
                          className: nn().videoItem,
                          children: [
                            (0, s.jsx)("div", {
                              className: nn().image,
                              "data-label-video-name":
                                "ライバー個別ファンクラブ編",
                              onClick: () =>
                                a(
                                  "https://player.vimeo.com/video/1077579566?badge=0&autopause=0&player_id=0&app_id=58479",
                                ),
                              children: (0, s.jsx)(y.Z, {
                                src: "/images/fanclub-video-thumbnail-liver.png",
                                fill: !0,
                                alt: "ライバー個別ファンクラブ編",
                              }),
                            }),
                            (0, s.jsxs)("a", {
                              className: nn().fanclubLink,
                              href: "#fanclub-list",
                              onClick: (e) => f(e, "fanclub-list"),
                              children: [
                                "ファンクラブ一覧",
                                (0, s.jsx)("span", {
                                  className: nn().pcOnly,
                                  children: "へ",
                                }),
                                (0, s.jsx)("span", {
                                  role: "img",
                                  className: c()(
                                    nn().fanclubLinkIcon,
                                    nn().innerLink,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className: nn().videoItem,
                          children: [
                            (0, s.jsx)("div", {
                              className: nn().image,
                              "data-label-video-name":
                                "にじさんじ総合ファンクラブ編",
                              onClick: () =>
                                a(
                                  "https://player.vimeo.com/video/1077560084?badge=0&autopause=0&player_id=0&app_id=58479",
                                ),
                              children: (0, s.jsx)(y.Z, {
                                src: "/images/fanclub-video-thumbnail-nijisanji-all.png",
                                fill: !0,
                                alt: "にじさんじ総合ファンクラブ編",
                              }),
                            }),
                            (0, s.jsxs)(eE(), {
                              href: "/fanclubs/nijisanji-all/",
                              className: nn().fanclubLink,
                              children: [
                                "にじさんじ総合ファンクラブへ入会",
                                (0, s.jsx)("span", {
                                  className: nn().pcOnly,
                                  children: "する",
                                }),
                                (0, s.jsx)("span", {
                                  role: "img",
                                  className: nn().fanclubLinkIcon,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var ns = a(84001),
        nt = a.n(ns);
      let nl = (e) => {
        let {
            isAppClient: n,
            scrollToTopRef: a,
            fanclub: t,
            userLicense: l,
            onTogglePaymentModal: i,
            canOpenPaymentModal: r,
          } = e,
          { isLicenseGetProcessCompleted: c } = (0, eN.SE)(),
          m = l ? l.license.plan.toUpperCase() : void 0,
          d =
            "nijisanji-all" === t.slug
              ? "blue"
              : "BASIC" === m
                ? "green"
                : "gold";
        return (0, s.jsx)("div", {
          "data-testid": "FanclubHeader",
          className: nt().fanclubHeader,
          ref: a,
          children: (0, s.jsxs)("div", {
            className: nt().container,
            children: [
              (0, s.jsx)("div", {
                className: nt().image,
                style: { background: t.liverColor },
                children: (0, s.jsx)(y.Z, {
                  src: t.coverImageUrl,
                  fill: !0,
                  alt: t.name,
                  priority: !0,
                }),
              }),
              (0, s.jsxs)("div", {
                className: nt().subContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: nt().iconLine,
                    children: [
                      (0, s.jsx)("div", {
                        className: nt().iconContainer,
                        children: (0, s.jsx)(o.J9, {
                          fanclub: t,
                          className: nt().iconOverride,
                        }),
                      }),
                      m
                        ? (0, s.jsx)(o.Ct, {
                            value: m,
                            color: d,
                            width: 100,
                            widthSp: 7,
                            height: 25,
                            heightSp: 2.5,
                            textSizeSp: 1,
                          })
                        : null,
                      c &&
                        !n &&
                        r &&
                        (0, s.jsx)(h.Uj, {
                          userLicense: l,
                          onTogglePaymentModal: i,
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: nt().titleLine,
                    children: [
                      (0, s.jsx)("div", {
                        className: nt().fanclubName,
                        children: t.name,
                      }),
                      (0, s.jsx)("div", {
                        className: nt().liverName,
                        children: t.liverName,
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: nt().description,
                    children: t.description,
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var ni = a(64083),
        nr = a.n(ni);
      let nc = [
          "会員優先チケット受付",
          "デジタル会員証",
          "ラウンジ（チャット機能）*",
          "限定デジタルコンテンツ",
          "個別ライバーカレンダー *",
        ],
        no = [
          "会員証",
          "会報（年３回）",
          "年賀状",
          "ファンクラブイベント優先受付",
          "チャットで使用するカスタムスタンプ",
        ],
        nm = [
          "会員優先チケット受付",
          "デジタル会員証",
          "ラウンジ（チャット機能）*",
          "限定デジタルコンテンツ",
        ],
        nd = (e) => {
          let {
              planBenefits: n,
              toggleModal: a,
              planTypes: l,
              className: i,
            } = e,
            r = (0, t.useRouter)(),
            m = {
              basic: {
                planType: "basic",
                header: { type: "BASIC", text: "ベーシックプラン" },
                yearlyPlan: {
                  price: "6,050",
                  monthlyPayment: "（約 504円 / 月）",
                },
                monthlyPlan: "550",
                memberships: { basic: nc, premium: [] },
              },
              premium: {
                planType: "premium",
                header: { type: "PREMIUM", text: "プレミアムプラン" },
                yearlyPlan: { price: "15,070", monthlyPayment: "" },
                monthlyPlan: "ー",
                memberships: { basic: nc, premium: no },
              },
              nijisanjiAll: {
                planType: "nijisanjiAll",
                header: { type: "BASIC", text: "ベーシックプラン" },
                yearlyPlan: {
                  price: "3,630",
                  monthlyPayment: "（約 302円 / 月）",
                },
                monthlyPlan: "330",
                memberships: { basic: nm, premium: [] },
              },
            },
            d = [
              ...(l.includes("basic") ? [m.basic] : []),
              ...(l.includes("premium") ? [m.premium] : []),
            ],
            p = [...(l.includes("nijisanjiAll") ? [m.nijisanjiAll] : [])];
          return (0, s.jsxs)("div", {
            className: c()(i, nr().fanclubPlan),
            children: [
              (0, s.jsxs)("div", {
                className: nr().fanclubPlanInner,
                children: [
                  d.length > 0 &&
                    (0, s.jsxs)("div", {
                      className: nr().liverPlans,
                      children: [
                        (0, s.jsx)("div", {
                          className: c()(nr().heading, nr().fanclub),
                          children: "ライバー個別ファンクラブ",
                        }),
                        (0, s.jsx)("div", {
                          className: nr().liverPlansBody,
                          children: d.map((e, n) =>
                            (0, s.jsx)(
                              o._b,
                              {
                                planInformation: e,
                                className:
                                  "premium" === e.planType
                                    ? nr().premium
                                    : nr().basic,
                              },
                              n,
                            ),
                          ),
                        }),
                        n.length > 0 &&
                          (0, s.jsx)(h.g8, {
                            planBenefits: n,
                            toggleModal: a,
                            className: nr().premiumPlanBenefits,
                          }),
                      ],
                    }),
                  p.length > 0 &&
                    (0, s.jsxs)("div", {
                      className: nr().nijisanjiAllPlans,
                      children: [
                        (0, s.jsx)("div", {
                          className: c()(nr().heading, nr().nijisanjiAll),
                          children: "にじさんじ総合ファンクラブ",
                        }),
                        p.map((e, n) =>
                          (0, s.jsx)(
                            o._b,
                            {
                              planInformation: e,
                              className:
                                "premium" === e.planType
                                  ? nr().premium
                                  : nr().basic,
                            },
                            n,
                          ),
                        ),
                      ],
                    }),
                ],
              }),
              (0, s.jsxs)("ul", {
                className: nr().note,
                children: [
                  (0, s.jsx)("li", {
                    children: "* カレンダーの対応はライバーごとに異なります。",
                  }),
                  (0, s.jsx)("li", {
                    children:
                      "* APP内決済の場合は各ストアの手数料を含むため上記と異なります。",
                  }),
                  (0, s.jsx)("li", {
                    children: "* APP内決済の価格は為替の影響により変動します。",
                  }),
                  (0, s.jsxs)("li", {
                    children: [
                      "* iOS / AndroidによるApp内決済をご希望の場合は",
                      (0, s.jsx)("span", {
                        className: nr().link,
                        onClick: () => {
                          let e = "/fanclubs#app-introduction";
                          if ("/fanclubs" === r.pathname) {
                            let [, n] = e.split("#"),
                              a = document.getElementById(n),
                              s = a ? a.offsetTop - 56 : 0;
                            window.scrollTo({ top: s, behavior: "smooth" });
                            return;
                          }
                          r.push(e);
                        },
                        children: "こちら。",
                      }),
                    ],
                  }),
                  (0, s.jsx)("li", {
                    children:
                      "* ユニットのファンクラブは個別ライバーと同じプラン形態となります。",
                  }),
                  (0, s.jsx)("li", {
                    className: nr().warning,
                    children:
                      "* 七次元生徒会！ファンクラブのアプリ内ラウンジはファンの皆様による書き込みはできません。",
                  }),
                  (0, s.jsx)("li", {
                    className: nr().warning,
                    children:
                      "* 七次元生徒会！ファンクラブプレミアムプランでのカスタムスタンプの提供はございません。",
                  }),
                ],
              }),
            ],
          });
        };
      var np = a(13976),
        n_ = a.n(np);
      let nu = (e) => {
        let {
            isLoggedIn: n,
            isScrollEnd: a,
            isApp: l,
            moreContentAvailable: i,
            managementAnnouncements: r,
            announcementDetail: m,
            userLicenses: d,
            unReadFanclubSlugs: p,
            onAnnouncementDetail: _,
          } = e,
          u = (0, t.useRouter)(),
          {
            fanclubInfoState: h,
            onToggleFanclubInfoState: f,
            isLicenseGetProcessCompleted: x,
          } = (0, eN.SE)(),
          { error: j } = (0, eN.Eu)(),
          b = (e) => {
            if (!e || l) return;
            let n = "/fanclubs/".concat(e);
            (f(null), u.asPath !== n && u.push(n));
          },
          v = (e) => void 0 !== e && p.some((n) => n === e),
          N = (e) => {
            let n = m.find((n) => n.id === e);
            return n ? (0, es.ZP)(n.text) : null;
          },
          g = (e) => {
            var n;
            switch (
              null == e
                ? void 0
                : null === (n = e.latestBillingCycle) || void 0 === n
                  ? void 0
                  : n.currentPlatformType
            ) {
              case "stripe":
                if (e.latestBillingCycle.willDowngradeAtPeriodEnd)
                  return "次回決済発生日時: ".concat(
                    (0, w.B)(e.expireAt).format("YYYY年MM月DD日 HH時頃"),
                  );
                if ("cancelled" === e.latestBillingCycle.subscriptionStatus)
                  return "※定期支払いはキャンセル済みです。次回の決済は発生しません。";
                if (e.latestBillingCycle.isGracePeriod)
                  return "※クレジットカード決済に失敗しました。ご利用のカード情報をご確認ください。";
                if ("repeating" === e.latestBillingCycle.subscriptionStatus)
                  return "次回決済発生日時: ".concat(
                    (0, w.B)(e.expireAt).format("YYYY年MM月DD日 HH時頃"),
                  );
                return "";
              case "google_play_store":
              case "app_store":
                if (e.latestBillingCycle.isGracePeriod)
                  return "【プランの有効期限が切れています】<br />決済に失敗しました。アプリで利用されているお支払い方法をご確認ください。";
                if (e.latestBillingCycle.willCancelAtPeriodEnd)
                  return "※定期支払いはキャンセル済みです。次回の決済は発生しません。";
                if ("repeating" === e.latestBillingCycle.subscriptionStatus)
                  return "次回決済発生日時: ".concat(
                    (0, w.B)(e.expireAt).format("YYYY年MM月DD日 HH時頃"),
                    " <br>※上記日時は反映が遅れる場合がございます。<br>最新の情報はアプリ内でご確認ください。",
                  );
                return "";
              default:
                return "";
            }
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            h.announcements &&
              (0, s.jsxs)("ul", {
                className: n_().announcement,
                "data-testid": "FanclubInfoAnnouncement",
                children: [
                  0 !== r.length
                    ? r.map((e) =>
                        (0, s.jsx)(
                          "li",
                          {
                            className: n_().item,
                            children: (0, s.jsxs)(o.UQ, {
                              className: n_().wrap,
                              onClick: () => _(e.id),
                              children: [
                                (0, s.jsxs)("div", {
                                  className: n_().accordion,
                                  children: [
                                    (0, s.jsx)("div", {
                                      className: n_().img,
                                      children: (0, s.jsx)(y.Z, {
                                        src: e.iconUrl,
                                        fill: !0,
                                        alt: e.name,
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: n_().announce,
                                      children: [
                                        (0, s.jsx)("p", {
                                          className: n_().publish,
                                          children: "".concat(
                                            (0, w.B)(e.publishedAt).format(
                                              "YYYY年MM月DD日 HH:mm",
                                            ),
                                          ),
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: n_().info,
                                          children: [
                                            !e.markAsRead &&
                                              n &&
                                              (0, s.jsx)(o.oT, {
                                                className: n_().dot,
                                              }),
                                            (0, s.jsx)("p", {
                                              className: n_().title,
                                              children: e.name,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                N(e.id),
                              ],
                            }),
                          },
                          e.id,
                        ),
                      )
                    : (0, s.jsx)(o.Nm, {
                        className: n_().bar,
                        enableClose: !1,
                        children: (0, s.jsx)("p", {
                          children: "お知らせはありません。",
                        }),
                      }),
                  a && i.announcements && (0, s.jsx)(o.Ho, {}),
                ],
              }),
            h.subscription &&
              (0, s.jsx)("ul", {
                className: n_().subscription,
                "data-testid": "FanclubInfoSubscription",
                children:
                  0 !== d.length
                    ? d.map((e) => {
                        var n, a, t, l, i, r, m;
                        return (0, s.jsxs)(
                          "li",
                          {
                            className: n_().item,
                            children: [
                              (0, s.jsx)("div", {
                                className: n_().wrap,
                                children: (0, s.jsx)("div", {
                                  className: n_().img,
                                  onClick: () => {
                                    var n, a;
                                    b(
                                      null === (a = e.license) || void 0 === a
                                        ? void 0
                                        : null === (n = a.fanclub) ||
                                            void 0 === n
                                          ? void 0
                                          : n.slug,
                                    );
                                  },
                                  children: (0, s.jsx)(y.Z, {
                                    src:
                                      null !==
                                        (m =
                                          null === (a = e.license) ||
                                          void 0 === a
                                            ? void 0
                                            : null === (n = a.fanclub) ||
                                                void 0 === n
                                              ? void 0
                                              : n.coverImageUrl) && void 0 !== m
                                        ? m
                                        : "",
                                    fill: !0,
                                    alt: e.license.name,
                                  }),
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: n_().body,
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: c()(n_().titleWrap, n_().pcOnly),
                                    children: [
                                      v(
                                        null === (t = e.license.fanclub) ||
                                          void 0 === t
                                          ? void 0
                                          : t.slug,
                                      ) &&
                                        (0, s.jsx)(o.oT, {
                                          className: n_().dot,
                                        }),
                                      (0, s.jsx)("h5", {
                                        className: n_().title,
                                        onClick: () => {
                                          var n, a;
                                          b(
                                            null === (a = e.license) ||
                                              void 0 === a
                                              ? void 0
                                              : null === (n = a.fanclub) ||
                                                  void 0 === n
                                                ? void 0
                                                : n.slug,
                                          );
                                        },
                                        children:
                                          null === (i = e.license) ||
                                          void 0 === i
                                            ? void 0
                                            : null === (l = i.fanclub) ||
                                                void 0 === l
                                              ? void 0
                                              : l.name,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: n_().info,
                                    children: [
                                      (0, s.jsx)(o.Ct, {
                                        className: n_().plan,
                                        value: e.license.plan.toUpperCase(),
                                        color:
                                          "nijisanji-all" ===
                                          e.license.fanclub.slug
                                            ? "blue"
                                            : "basic" === e.license.plan
                                              ? "green"
                                              : "gold",
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: n_().license,
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className: n_().nameWrap,
                                            children: [
                                              v(
                                                null ===
                                                  (r = e.license.fanclub) ||
                                                  void 0 === r
                                                  ? void 0
                                                  : r.slug,
                                              ) &&
                                                (0, s.jsx)(o.oT, {
                                                  className: c()(
                                                    n_().dot,
                                                    n_().spOnly,
                                                  ),
                                                }),
                                              (0, s.jsx)("p", {
                                                className: n_().name,
                                                children: e.license.name,
                                              }),
                                            ],
                                          }),
                                          (0, s.jsxs)("p", {
                                            className: n_().expire,
                                            children: [
                                              "有効期限:\xa0",
                                              "".concat(
                                                (0, w.B)(e.expireAt).format(
                                                  "YYYY年MM月DD日 HH:mm",
                                                ),
                                              ),
                                            ],
                                          }),
                                          (0, s.jsx)("p", {
                                            className: n_().orderStatusMessage,
                                            children: e && (0, es.ZP)(g(e)),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        );
                      })
                    : (0, s.jsx)(o.Nm, {
                        className: n_().bar,
                        enableClose: !1,
                        children: (0, s.jsx)("p", {
                          children:
                            null !== j.message
                              ? "取得に失敗しました。しばらく経ってからページを更新してください。"
                              : x
                                ? "入会中のプランはありません。"
                                : "入会情報を取得中です…",
                        }),
                      }),
              }),
          ],
        });
      };
      var nh = a(41408),
        nf = a(56781),
        nx = a.n(nf);
      let nj = (e) => {
          let {
            license: n,
            order: a,
            notice: t,
            openMypageModal: l,
            onChangeFanclubDetailSlug: i,
          } = e;
          if (!a && !n) return null;
          let r =
              (null == n ? void 0 : n.license.plan) ||
              (null == a ? void 0 : a.product.plan) ||
              "basic",
            c =
              (null == n ? void 0 : n.license.name) ||
              (null == a ? void 0 : a.product.name) ||
              "",
            m =
              (null == n ? void 0 : n.license.fanclub.slug) ||
              (null == a ? void 0 : a.product.fanclub.slug) ||
              "",
            d =
              (null == n ? void 0 : n.license.fanclub.coverImageUrl) ||
              (null == a ? void 0 : a.product.fanclub.coverImageUrl) ||
              "";
          return (0, s.jsxs)(s.Fragment, {
            children: [
              t &&
                (0, s.jsx)("div", {
                  className: nx().noticeArea,
                  children: (0, s.jsx)(o.uf, { ...t }),
                }),
              (0, s.jsx)("div", {
                className: nx().subscriptionItem,
                children: (0, s.jsxs)("div", {
                  className: nx().fanclubInfo,
                  onClick: () => {
                    (l("fanclub-detail"), i(m));
                  },
                  children: [
                    (0, s.jsx)("div", {
                      className: nx().coverImage,
                      children: (0, s.jsx)(y.Z, { src: d, fill: !0, alt: c }),
                    }),
                    (0, s.jsxs)("div", {
                      className: nx().licenseInfo,
                      children: [
                        (0, s.jsxs)("div", {
                          className: nx().plan,
                          children: [
                            (0, s.jsx)(o.Ct, { ...(0, nh.iu)(r, m) }),
                            (0, s.jsx)("p", {
                              className: nx().name,
                              children: c,
                            }),
                          ],
                        }),
                        n && (0, s.jsx)(h.ft, { license: n }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        nb = (e) => {
          let {
              openMypageModal: n,
              closeMypageModal: a,
              onChangeFanclubDetailSlug: t,
              isApp: l = !1,
            } = e,
            {
              userLicenses: i,
              activeUserLicenses: r,
              orders: c,
              isLicenseGetProcessCompleted: m,
            } = (0, eN.SE)(),
            { error: d } = (0, eN.Eu)(),
            p = (0, nh.Aq)(c),
            _ = (0, nh.lA)(i, r, p);
          return (0, s.jsxs)("div", {
            className: nx().mypageFanclubSubscription,
            "data-testid": "MypageFanclubSubscription",
            children: [
              !l &&
                (0, s.jsx)("p", {
                  className: nx().backMypageTop,
                  onClick: () => {
                    (n("mypage-top"),
                      setTimeout(() => {
                        t("");
                      }, 500));
                  },
                  children: "← マイページトップ",
                }),
              p.length > 0 &&
                (0, s.jsx)(o.qh, {
                  category: "fanclub",
                  title: "入会申し込み中のファンクラブ",
                  description:
                    "各プランを選択するとプランの詳細や決済履歴が確認できます。",
                  children: p.map((e) =>
                    (0, s.jsx)(
                      nj,
                      {
                        order: e,
                        notice: (0, nh.em)(e.product.fanclub.slug, c, a, l),
                        openMypageModal: n,
                        onChangeFanclubDetailSlug: t,
                      },
                      e.id,
                    ),
                  ),
                }),
              r.length > 0 &&
                (0, s.jsx)(o.qh, {
                  category: "fanclub",
                  title: "入会中のファンクラブ",
                  description:
                    "各プランを選択するとプランの詳細や決済履歴が確認できます。",
                  children: r.map((e) =>
                    (0, s.jsx)(
                      nj,
                      {
                        license: e,
                        openMypageModal: n,
                        onChangeFanclubDetailSlug: t,
                      },
                      e.id,
                    ),
                  ),
                }),
              _.length > 0 &&
                (0, s.jsx)(o.qh, {
                  category: "fanclub",
                  title: "退会済のファンクラブ",
                  description:
                    "各プランを選択するとプランの詳細や決済履歴が確認できます。",
                  children: _.map((e) =>
                    (0, s.jsx)(
                      nj,
                      {
                        license: e,
                        openMypageModal: n,
                        onChangeFanclubDetailSlug: t,
                      },
                      e.id,
                    ),
                  ),
                }),
              l &&
                0 === p.length &&
                0 === r.length &&
                0 === _.length &&
                (0, s.jsx)(o.Nm, {
                  className: nx().bar,
                  enableClose: !1,
                  children: (0, s.jsx)("p", {
                    children:
                      null !== d.message
                        ? "取得に失敗しました。しばらく経ってからページを更新してください。"
                        : m
                          ? "入会中のプランはありません。"
                          : "入会情報を取得中です…",
                  }),
                }),
            ],
          });
        };
      var nv = a(62834),
        nN = a.n(nv);
      let ng = (e) => {
        var n;
        let {
            mypageModalStatus: a,
            activeMypageMenus: t,
            openMypageModal: l,
          } = e,
          { currentAlbUser: i } = (0, eN.Eu)(),
          r = (e) =>
            "fanclub-subscription" === e
              ? [e, "fanclub-detail"].includes(a)
              : e === a,
          o = (e) => !t.includes(e),
          m = (e) => (o(e) ? nN().disabled : r(e) ? nN().current : void 0);
        return i
          ? (0, s.jsxs)("div", {
              className: nN().mypageMenu,
              "data-testid": "MypageMenu",
              children: [
                (0, s.jsx)("div", {
                  className: nN().menuItem,
                  children: (0, s.jsx)("p", {
                    className: c()(nN().menuPrimary, m("mypage-top")),
                    onClick: () => l("mypage-top"),
                    children: (0, s.jsx)("span", {
                      children: "マイページトップ",
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: nN().menuItem,
                  children: [
                    (0, s.jsx)("p", {
                      className: c()(nN().menuPrimary, nN().unClickable),
                      children: "ANYCOLOR ID",
                    }),
                    (0, s.jsxs)("ul", {
                      className: nN().menuSecondary,
                      children: [
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)("a", {
                            className: c()(nN().pageLink, nN().externalLink),
                            href: new URL("/user/edit", ec.W2.ALB_FRONTEND_URL)
                              .href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, s.jsx)("span", {
                              children: "アカウント編集",
                            }),
                          }),
                        }),
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)("a", {
                            className: c()(nN().pageLink, nN().externalLink),
                            href: new URL(
                              "/user/history",
                              ec.W2.ALB_FRONTEND_URL,
                            ).href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, s.jsx)("span", {
                              children: "アカウント情報変更履歴",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: nN().menuItem,
                  children: [
                    (0, s.jsx)("p", {
                      className: c()(nN().menuPrimary, nN().unClickable),
                      children: "にじさんじFAN CLUB",
                    }),
                    (0, s.jsxs)("ul", {
                      className: nN().menuSecondary,
                      children: [
                        (0, s.jsx)("li", {
                          className: c()(m("fanclub-subscription")),
                          onClick: () => l("fanclub-subscription"),
                          children: (0, s.jsx)("span", {
                            children: "入会中のファンクラブ",
                          }),
                        }),
                        !o("membership-card") &&
                          (0, s.jsx)("li", {
                            children: (0, s.jsx)(eE(), {
                              href: "/fanclubs/membership-card",
                              className: c()(nN().pageLink, nN().internalLink),
                              children: (0, s.jsx)("span", {
                                children: "会員証発送手続き",
                              }),
                            }),
                          }),
                        (0, s.jsx)("li", {
                          className: c()(m("payment-setting")),
                          onClick: () => l("payment-setting"),
                          children: (0, s.jsx)("span", {
                            children: "決済方法の確認・削除",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: nN().userInfo,
                  children: [
                    (0, s.jsx)("div", {
                      className: nN().userIcon,
                      children: (0, s.jsx)(y.Z, {
                        src:
                          null !== (n = i.thumbnail_url) && void 0 !== n
                            ? n
                            : ec.nf.DEFAULT_ANONYMOUS_ICON,
                        fill: !0,
                        alt: i.nick_name,
                      }),
                    }),
                    (0, s.jsx)("p", {
                      className: nN().userName,
                      children: i.nick_name,
                    }),
                    (0, s.jsx)("p", {
                      className: nN().userEmail,
                      children: i.email,
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
      var ny = a(27484),
        nC = a.n(ny),
        nw = a(10454),
        nL = a.n(nw);
      let nI = (e) => {
        var n, a, l, i, r, m, d, p, u, f, x, j;
        let b;
        let {
            displayFanclubDetailSlug: v,
            openMypageModal: N,
            closeMypageModal: g,
            onChangeFanclubDetailSlug: C,
            isApp: w = !1,
          } = e,
          L = (0, t.useRouter)(),
          { userLicenses: I, orders: k, orderTransaction: T } = (0, eN.SE)(),
          S = (0, nh.S5)(v, I),
          B = (0, nh.Aq)(k).filter((e) => e.product.fanclub.slug === v),
          A =
            (null === (n = B[0]) || void 0 === n ? void 0 : n.product.plan) ||
            (null === (a = S[0]) || void 0 === a ? void 0 : a.license.plan) ||
            "basic",
          M =
            (null === (l = B[0]) || void 0 === l ? void 0 : l.product.name) ||
            (null === (i = S[0]) || void 0 === i ? void 0 : i.license.name) ||
            "",
          O =
            (null === (r = B[0]) || void 0 === r
              ? void 0
              : r.product.fanclub.coverImageUrl) ||
            (null === (m = S[0]) || void 0 === m
              ? void 0
              : m.license.fanclub.coverImageUrl) ||
            "",
          W =
            (null === (d = B[0]) || void 0 === d
              ? void 0
              : d.product.fanclub.liverName) ||
            (null === (p = S[0]) || void 0 === p
              ? void 0
              : p.license.fanclub.liverName) ||
            "",
          P =
            (null === (u = B[0]) || void 0 === u
              ? void 0
              : u.product.fanclub.name) ||
            (null === (f = S[0]) || void 0 === f
              ? void 0
              : f.license.fanclub.name) ||
            "",
          R =
            (null === (x = B[0]) || void 0 === x
              ? void 0
              : x.product.fanclub.slug) ||
            (null === (j = S[0]) || void 0 === j
              ? void 0
              : j.license.fanclub.slug) ||
            "",
          F = B.length > 0,
          E = F && "incomplete" === B[0].paymentStatus,
          U = S.length > 0,
          D = (0, _.useMemo)(() => {
            let e = [],
              n = (0, nh.em)(R, k, g, w);
            return (n && e.push(n), e);
          }, [k, R, g, w]),
          Y = (0, nh.XJ)(v, T),
          [G, H] = (0, nh.nB)(v),
          V = (e, n) => {
            let a = parseFloat(e);
            return "JPY" === n
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    a.toLocaleString("ja-JP"),
                    (0, s.jsx)("span", { children: "円" }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    new Intl.NumberFormat("ja-JP", {
                      style: "currency",
                      currency: n,
                    }).format(a),
                    (0, s.jsx)("span", { children: n }),
                  ],
                });
          };
        return (0, s.jsxs)("div", {
          className: nL().mypageFanclubDetail,
          "data-testid": "MypageFanclubDetail",
          children: [
            (0, s.jsx)("p", {
              className: nL().backFanclubSubscription,
              onClick: () => {
                (N("fanclub-subscription"),
                  setTimeout(() => {
                    C("");
                  }, 500));
              },
              children: "← 入会中のファンクラブ一覧",
            }),
            (F || U) &&
              (0, s.jsxs)(o.qh, {
                category: "fanclub",
                title:
                  ((b = "入会中"),
                  U && "inactive" === S[0].status && (b = "退会済み"),
                  E && (b = "入会申し込み中"),
                  "".concat(b, "のファンクラブ詳細")),
                children: [
                  !w &&
                    (0, s.jsx)(o.p_, {
                      className: nL().changePlanButton,
                      label: (() => {
                        let e = ["プラン変更", "支払い方法変更"];
                        return (E || e.push("退会"), e.join(" / "));
                      })(),
                      iconType: "fanclub",
                      onClick: () => {
                        (g(),
                          L.push({
                            pathname: "/fanclubs/".concat(v),
                            query: { mode: "payment" },
                          }));
                      },
                    }),
                  (0, s.jsxs)("div", {
                    className: c()(nL().subscriptionDetail, w && nL().isApp),
                    children: [
                      D.length > 0 &&
                        (0, s.jsx)("div", {
                          className: nL().noticeArea,
                          children: D.map((e) =>
                            (0, _.createElement)(o.uf, { ...e, key: e.title }),
                          ),
                        }),
                      (0, s.jsxs)("div", {
                        className: nL().fanclubInfo,
                        children: [
                          (0, s.jsx)("div", {
                            className: nL().coverImage,
                            children: (0, s.jsx)(y.Z, {
                              src: O,
                              fill: !0,
                              alt: M,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: nL().licenseInfo,
                            children: [
                              (0, s.jsx)("p", {
                                className: nL().liverName,
                                children: W,
                              }),
                              (0, s.jsx)("p", {
                                className: nL().fanclubName,
                                children: P,
                              }),
                              (0, s.jsxs)("div", {
                                className: nL().plan,
                                children: [
                                  (0, s.jsx)(o.Ct, { ...(0, nh.iu)(A, v) }),
                                  (0, s.jsx)("p", {
                                    className: nL().name,
                                    children: M,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      F && (0, s.jsx)(h.ft, { order: B[0] }),
                      !F && U && (0, s.jsx)(h.ft, { license: S[0] }),
                    ],
                  }),
                ],
              }),
            (0, s.jsx)(o.qh, {
              category: "fanclub",
              title: "決済履歴",
              description: "決済履歴の反映にはお時間がかかる場合があります。",
              children:
                Y.length > 0
                  ? Y.map((e) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: nL().paymentHistoryItem,
                          children: [
                            (0, s.jsx)("p", {
                              className: nL().paymentDate,
                              children: nC()(e.occurredAt).format(
                                "YYYY年M月D日 HH:mm",
                              ),
                            }),
                            (0, s.jsxs)("div", {
                              className: nL().plan,
                              children: [
                                (0, s.jsx)(o.Ct, {
                                  ...(0, nh.iu)(e.product.plan, v),
                                }),
                                (0, s.jsx)("p", {
                                  className: nL().name,
                                  children: e.product.name,
                                }),
                              ],
                            }),
                            (0, s.jsx)("p", {
                              className: nL().paymentMethod,
                              children: (0, eg.heq)(e.platformType),
                            }),
                            (0, s.jsx)("p", {
                              className: nL().paymentAmount,
                              children: V(e.amount, e.currency),
                            }),
                          ],
                        },
                        e.occurredAt,
                      ),
                    )
                  : (0, s.jsx)("div", {
                      className: nL().paymentHistoryItem,
                      children: (0, s.jsx)(o.uf, {
                        type: "notice",
                        title: "このファンクラブの決済履歴はありません",
                      }),
                    }),
            }),
            (0, s.jsx)(o.qh, {
              category: "fanclub",
              title: "申請履歴",
              description: "申請履歴の反映にはお時間がかかる場合があります。",
              children:
                G.length > 0
                  ? G.map((e, n) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: nL().transactionActionsItem,
                          "data-testid": "TransactionActionsItem-".concat(n),
                          children: [
                            (0, s.jsx)("p", {
                              className: nL().paymentDate,
                              children: nC()(e.occurredAt).format(
                                "YYYY年M月D日 HH:mm",
                              ),
                            }),
                            (0, s.jsxs)("div", {
                              className: nL().plan,
                              children: [
                                (0, s.jsx)(o.Ct, {
                                  ...(0, nh.iu)(e.product.plan, v),
                                }),
                                (0, s.jsx)("p", {
                                  className: nL().name,
                                  children: (0, eg.MKD)(
                                    e.actionType,
                                    e.operationType,
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        n,
                      ),
                    )
                  : (0, s.jsx)("div", {
                      className: nL().emptyPaymentHistory,
                      children: (() => {
                        switch (H) {
                          case "loading":
                            return (0, s.jsx)(o.Ho, {});
                          case "error":
                            return (0, s.jsx)(o.uf, {
                              type: "warning",
                              title: "申請履歴の読み込みに失敗しました",
                            });
                          default:
                            return (0, s.jsx)(o.uf, {
                              type: "notice",
                              title: "このファンクラブの申請履歴はありません",
                            });
                        }
                      })(),
                    }),
            }),
          ],
        });
      };
      var nk = a(30552),
        nT = a(31893),
        nS = a.n(nT);
      let nB = (e) => {
          let {
              paymentMethodWithLicense: n,
              maxDisplayLicenseNumber: a,
              onDeletePaymentMethodConfirm: t,
            } = e,
            l = n.licenses.length > 0,
            i = n.licenses.length > a,
            r = () => {
              let e = n.card.expYear,
                a = n.card.expMonth,
                s = new Date(),
                t = s.getFullYear(),
                l = s.getMonth() + 1;
              return e < t || (e === t && a < l);
            };
          return (0, s.jsxs)("div", {
            className: nS().paymentMethodItem,
            children: [
              (0, s.jsxs)("div", {
                className: nS().cardInfo,
                children: [
                  (0, s.jsx)("span", {
                    className: nS().brand,
                    children:
                      "unknown" !== n.card.brand &&
                      (0, s.jsx)(y.Z, {
                        src: "/simusanji/icon/creditcard/".concat(n.card.brand, ".png"),
                        width: 128,
                        height: 80,
                        alt: n.card.brand,
                      }),
                  }),
                  (0, s.jsx)("p", {
                    className: nS().label,
                    children: (0, nh.un)(n),
                  }),
                  (0, s.jsx)("div", {
                    className: c()(nS().deleteButton, l && nS().disabled),
                    onClick: () => {
                      l || t(n);
                    },
                  }),
                ],
              }),
              (r() || l) &&
                (0, s.jsxs)("div", {
                  className: c()(nS().additionalInfo, r() && nS().warning),
                  children: [
                    r() &&
                      (0, s.jsxs)("p", {
                        className: nS().warningMessage,
                        children: [
                          "有効期限切れ",
                          (0, s.jsx)("span", {
                            children: "カードの有効期限が切れています",
                          }),
                        ],
                      }),
                    l &&
                      (0, s.jsxs)("div", {
                        className: nS().licenseList,
                        children: [
                          n.licenses
                            .slice(0, a)
                            .map((e, n) =>
                              (0, s.jsx)(
                                "div",
                                {
                                  className: nS().licenseItem,
                                  style: {
                                    backgroundColor:
                                      e.license.fanclub.liverColor,
                                  },
                                  "data-testid":
                                    "MypagePaymentSettingLicenseItem",
                                  children: (0, s.jsx)("img", {
                                    src: e.license.fanclub.iconUrl,
                                    alt: e.license.fanclub.liverName,
                                  }),
                                },
                                n,
                              ),
                            ),
                          i &&
                            (0, s.jsxs)("div", {
                              className: nS().ellipsis,
                              children: [
                                (0, s.jsx)("span", {}),
                                (0, s.jsx)("span", {}),
                                (0, s.jsx)("span", {}),
                              ],
                            }),
                        ],
                      }),
                    r() &&
                      l &&
                      (0, s.jsx)("p", {
                        className: nS().warningRemarks,
                        children:
                          "※次回のお支払いが失敗となりますので、支払い方法変更のお手続きをお願いいたします。",
                      }),
                  ],
                }),
            ],
          });
        },
        nA = (e) => {
          let {
              paymentMethodWithLicenses: n,
              onDeletePaymentMethodConfirm: a,
              openMypageModal: t,
              onChangeFanclubDetailSlug: l,
            } = e,
            i = (0, _.useRef)(null),
            [r, c] = (0, _.useState)(0),
            m = (0, C.am)(),
            d = (0, nk.Z)();
          return (
            (0, _.useEffect)(() => {
              if (!i.current) return;
              let e = i.current.clientWidth;
              c(m ? 5 : Math.floor((e - 200) / 60));
            }, [m, d.width]),
            (0, s.jsxs)("div", {
              className: nS().mypagePaymentSetting,
              ref: i,
              "data-testid": "MypagePaymentSetting",
              children: [
                (0, s.jsx)("p", {
                  className: nS().backMypageTop,
                  onClick: () => {
                    (t("mypage-top"),
                      setTimeout(() => {
                        l("");
                      }, 500));
                  },
                  children: "← マイページトップ",
                }),
                (0, s.jsxs)(o.qh, {
                  category: "fanclub",
                  title: "決済方法の確認・削除",
                  children: [
                    n.map((e) =>
                      (0, s.jsx)(
                        nB,
                        {
                          paymentMethodWithLicense: e,
                          maxDisplayLicenseNumber: r,
                          onDeletePaymentMethodConfirm: a,
                        },
                        e.id,
                      ),
                    ),
                    (0, s.jsx)("p", {
                      className: nS().remarks,
                      children:
                        "※お支払い方法として設定中のカード情報は削除できません。",
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var nM = a(17603),
        nO = a.n(nM);
      let nW = (e) => {
        var n;
        let { activeMypageMenus: a, openMypageModal: t } = e,
          {
            currentAlbUser: l,
            currentCfcUser: i,
            handleLogout: r,
          } = (0, eN.Eu)(),
          {
            activeUserLicenses: m,
            orders: d,
            canRequestMembershipCard: p,
          } = (0, eN.SE)(),
          u = (0, _.useMemo)(() => {
            let e = [],
              n = (0, nh.MJ)(d, () => t("fanclub-subscription"));
            n && e.push(n);
            let a = (0, nh.ao)(p);
            a && e.push(a);
            let s = (0, nh.hd)(m);
            return (s && e.push(s), e);
          }, [m, d, p, t]),
          h = (e) => !a.includes(e),
          f = (e) => {
            let n = [nO().fanclubMenuItem];
            return (
              "fanclub-subscription" === e && n.push(nO().subscription),
              "membership-card" === e && n.push(nO().membership),
              "payment-setting" === e && n.push(nO().paymentSetting),
              h(e) && n.push(nO().disabled),
              n
            );
          };
        return l
          ? (0, s.jsxs)("div", {
              className: nO().mypageTop,
              "data-testid": "MypageTop",
              children: [
                (0, s.jsx)(o.qh, {
                  category: "anycolorId",
                  title: "ANYCOLOR ID",
                  children: (0, s.jsxs)("div", {
                    className: nO().anycolorId,
                    children: [
                      (0, s.jsx)("div", {
                        className: nO().userIcon,
                        children: (0, s.jsx)(y.Z, {
                          src:
                            null !== (n = l.thumbnail_url) && void 0 !== n
                              ? n
                              : ec.nf.DEFAULT_ANONYMOUS_ICON,
                          fill: !0,
                          alt: l.nick_name,
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: nO().userInfo,
                        children: [
                          (0, s.jsxs)("p", {
                            className: nO().id,
                            children: ["ID : ", l.id],
                          }),
                          (0, s.jsx)("p", {
                            className: nO().name,
                            children: l.nick_name,
                          }),
                          (0, s.jsx)("p", {
                            className: nO().email,
                            children: l.email,
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: nO().userNav,
                        children: [
                          (0, s.jsx)("a", {
                            className: nO().link,
                            href: new URL("/user/edit", ec.W2.ALB_FRONTEND_URL)
                              .href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "アカウント編集",
                          }),
                          (0, s.jsxs)("a", {
                            className: nO().link,
                            href: new URL(
                              "/user/history",
                              ec.W2.ALB_FRONTEND_URL,
                            ).href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              (0, s.jsx)("span", {
                                className: nO().pcOnly,
                                children: "アカウント情報",
                              }),
                              "変更履歴",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(o.qh, {
                  category: "fanclub",
                  title: "にじさんじFAN CLUB",
                  children: (null == i ? void 0 : i.isMaintenance)
                    ? (0, s.jsx)("div", {
                        className: nO().fanclubMenu,
                        children: (0, s.jsx)("div", {
                          className: c()(
                            nO().fanclubMenuItem,
                            nO().maintenance,
                            nO().disabled,
                          ),
                          children: (0, s.jsx)("p", {
                            children:
                              "現在、ファンクラブサービスはメンテナンス中です。",
                          }),
                        }),
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          u.length > 0 &&
                            (0, s.jsx)("div", {
                              className: nO().noticeArea,
                              children: u.map((e) =>
                                (0, _.createElement)(o.uf, {
                                  ...e,
                                  key: e.title,
                                }),
                              ),
                            }),
                          (0, s.jsxs)("div", {
                            className: nO().fanclubMenu,
                            children: [
                              (0, s.jsx)("div", {
                                className: c()(f("fanclub-subscription")),
                                onClick: () => t("fanclub-subscription"),
                                children: "入会中のファンクラブ",
                              }),
                              !h("membership-card") &&
                                (0, s.jsx)(eE(), {
                                  href: "/fanclubs/membership-card",
                                  className: c()(f("membership-card")),
                                  children: "会員証発送手続き",
                                }),
                              (0, s.jsx)("div", {
                                className: c()(f("payment-setting")),
                                onClick: () => t("payment-setting"),
                                children: "決済方法の確認・削除",
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
                (0, s.jsx)(o.zx, {
                  className: nO().logout,
                  onClick: r,
                  children: "ログアウト",
                }),
              ],
            })
          : null;
      };
      var nP = a(46148),
        nR = a.n(nP);
      let nF = (e) => {
        let { fanclubDetail: n, isCompleteStep: a } = e,
          { portraitImageUrl: t, liverName: l, liverColor: i } = n;
        return (0, s.jsxs)("div", {
          className: c()(nR().paymentBackgroundImage, a && nR().hide),
          children: [
            (0, s.jsx)("div", {
              className: nR().imageWrap,
              children:
                t &&
                (0, s.jsx)("span", {
                  children: (0, s.jsx)(y.Z, {
                    src: t,
                    width: 1e3,
                    height: 1e3,
                    alt: l,
                  }),
                }),
            }),
            (0, s.jsx)(o.B6, {
              className: c()(nR().haze, nR().left),
              type: "light",
            }),
            (0, s.jsx)(o.B6, {
              className: c()(nR().haze, nR().center),
              type: "regular",
              color: i,
            }),
            (0, s.jsx)(o.B6, {
              className: c()(nR().haze, nR().right),
              type: "light",
              color: i,
            }),
          ],
        });
      };
      var nE = a(76220),
        nU = a.n(nE);
      let nD = (e) => {
        let {
            className: n,
            fanclubDetail: a,
            currentStepData: l,
            onTogglePaymentModal: i,
          } = e,
          r = (0, t.useRouter)(),
          m = (0, nk.Z)().width < 767.98,
          { liverName: d, portraitImageUrl: p, liverColor: h, slug: f } = a,
          x = (e) => {
            let n = "pc" === e.display,
              a = "https://www.nijisanji.jp/fanclubs/".concat(f, "/complete"),
              t = "%23"
                .concat(d, "%20のファンクラブ『")
                .concat(l.planName, "』に入会しました！%0a")
                .concat(a, "%0a%0a%23にじさんじファンクラブ%20%23にじさんじ");
            return (0, s.jsxs)("div", {
              className: c()(
                nU().fanclubJoinPost,
                n ? nU().pcOnly : nU().spOnly,
              ),
              children: [
                (0, s.jsxs)("p", {
                  className: nU().text,
                  children: [
                    d,
                    "のファンクラブへ",
                    (0, s.jsx)("br", { className: nU().spOnly }),
                    "入会しました！",
                  ],
                }),
                (0, s.jsxs)("button", {
                  className: nU().link,
                  onClick: () => {
                    if (r.asPath === "/fanclubs/".concat(f)) {
                      i();
                      return;
                    }
                    r.push("/fanclubs/".concat(f));
                  },
                  children: [
                    d,
                    "の",
                    (0, s.jsx)("br", { className: nU().spOnly }),
                    "ファンクラブ限定投稿を見る",
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: nU().post,
                  children: [
                    (0, s.jsx)("a", {
                      href: "https://x.com/intent/tweet?text=".concat(t),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: nU().button,
                      children: "ポストする",
                    }),
                    (0, s.jsxs)("p", {
                      className: nU().label,
                      children: [
                        (0, s.jsx)("span", { children: "入会したことをXで" }),
                        (0, s.jsx)("span", { children: "報告しましょう。" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        return (0, s.jsxs)("div", {
          className: c()(n, nU().paymentComplete),
          style: { backgroundColor: h },
          "data-testid": "PaymentComplete",
          children: [
            (0, s.jsxs)("div", {
              className: nU().upperContents,
              children: [
                (0, s.jsx)(() => {
                  let e = "#fff",
                    n = m
                      ? [
                          { type: "light" },
                          { type: "regular", color: h },
                          { type: "light", color: h },
                          { type: "stick" },
                          { type: "stick", color: h },
                        ]
                      : [
                          { type: "light" },
                          { type: "regular", color: h },
                          { type: "regular" },
                          { type: "light", color: h },
                          { type: "stick" },
                          { type: "stick", color: h },
                          { type: "large", color: e },
                          { type: "slim", color: e },
                        ];
                  return (0, s.jsx)("div", {
                    className: nU().hazeList,
                    children: n.map((e, n) =>
                      (0, _.createElement)(o.B6, {
                        className: nU().haze,
                        ...e,
                        key: n,
                      }),
                    ),
                  });
                }, {}),
                (0, s.jsx)("div", {
                  className: nU().imageArea,
                  children: (0, s.jsx)("div", {
                    className: nU().liverImageWrap,
                    children:
                      p && (0, s.jsx)(y.Z, { src: p, fill: !0, alt: d }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: nU().messageArea,
                  children: [
                    (0, s.jsx)("div", {
                      className: nU().thankyouWrap,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/payment-modal/complete-thankyou.png",
                        fill: !0,
                        alt: "ありがとう！！",
                      }),
                    }),
                    (0, s.jsx)(x, { display: "pc" }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: nU().underContents,
              children: [
                (0, s.jsx)(x, { display: "sp" }),
                (0, s.jsxs)("div", {
                  className: nU().appInformation,
                  children: [
                    (0, s.jsxs)("div", {
                      className: nU().appWrap,
                      children: [
                        (0, s.jsx)("div", {
                          className: nU().iconWrap,
                          children: (0, s.jsx)(y.Z, {
                            src: "/simusanji/icon/fanclub.svg",
                            width: 80,
                            height: 80,
                            alt: "にじさんじFAN CLUB",
                          }),
                        }),
                        (0, s.jsxs)("p", {
                          className: nU().description,
                          children: [
                            "ライバーのことをもっと好きになる！",
                            (0, s.jsx)("br", {}),
                            "『にじさんじ FAN CLUB公式アプリ』をダウンロードして",
                            (0, s.jsx)("br", { className: nU().pcOnly }),
                            "ライバーとのチャットを楽しもう！",
                            (0, s.jsx)("br", {}),
                            "ファンクラブ会員限定の毎月の特典配布も！？",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("ul", {
                      className: nU().downloads,
                      children: [
                        (0, s.jsx)("li", {
                          className: nU().apple,
                          children: (0, s.jsx)("a", {
                            href: ec.Gp.FANCLUB_APP_STORE_URL,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, s.jsx)(y.Z, {
                              src: "/logo/app_store_download.png",
                              fill: !0,
                              alt: "App Store Download",
                            }),
                          }),
                        }),
                        (0, s.jsx)("li", {
                          className: nU().google,
                          children: (0, s.jsx)("a", {
                            href: ec.Gp.FANCLUB_GOOGLE_PLAY_URL,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, s.jsx)(y.Z, {
                              src: "/logo/google_play_download.png",
                              fill: !0,
                              alt: "Google Play Download",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(u.tq, {
                  className: nU().swiperWrap,
                  spaceBetween: 16,
                  slidesPerView: "auto",
                  centeredSlides: !0,
                  loop: !0,
                  breakpoints: { 769: { centeredSlides: !1 } },
                  children: [
                    (0, s.jsx)(u.o5, {
                      className: nU().swiperSlide,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/payment-modal/fanclub-app-01.png",
                        fill: !0,
                        alt: "FANCLUB APP",
                      }),
                    }),
                    (0, s.jsx)(u.o5, {
                      className: nU().swiperSlide,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/payment-modal/fanclub-app-02.png",
                        fill: !0,
                        alt: "FANCLUB APP",
                      }),
                    }),
                    (0, s.jsx)(u.o5, {
                      className: nU().swiperSlide,
                      children: (0, s.jsx)(y.Z, {
                        src: "/images/payment-modal/fanclub-app-03.png",
                        fill: !0,
                        alt: "FANCLUB APP",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var nY = a(6860),
        nG = a.n(nY);
      let nH = (e) => {
        let { confirmDialogData: n } = e,
          {
            isOpen: a,
            isProcessing: t,
            heading: l,
            text: i,
            card: r,
            buttons: m,
          } = n,
          d = null == r ? void 0 : r.expMonth.toString().padStart(2, "0"),
          p = null == r ? void 0 : r.expYear.toString().slice(-2);
        return (0, s.jsx)("div", {
          className: c()(nG().paymentConfirmDialog, a && nG().open),
          children: (0, s.jsxs)("div", {
            className: nG().dialogBase,
            children: [
              (0, s.jsx)("p", { className: nG().heading, children: l }),
              i && (0, s.jsx)("div", { className: nG().text, children: i }),
              r &&
                (0, s.jsxs)("div", {
                  className: nG().text,
                  children: [
                    (0, s.jsx)("div", {
                      children:
                        "以下のクレジットカードを削除します。よろしいですか？",
                    }),
                    (0, s.jsxs)("div", {
                      className: nG().cardInfo,
                      children: [
                        (0, s.jsx)(y.Z, {
                          src: "/simusanji/icon/creditcard/".concat(r.brand, ".png"),
                          width: 48,
                          height: 30,
                          alt: r.brand,
                        }),
                        (0, s.jsx)("p", {
                          children: "**** "
                            .concat(r.last4, "（有効期限：")
                            .concat(d, "/")
                            .concat(p, "）"),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, s.jsx)("div", {
                className: nG().buttonList,
                children:
                  m &&
                  m.map((e, n) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: c()(
                          nG().button,
                          e.isAgree ? nG().execute : nG().cancel,
                        ),
                        onClick: e.onClick,
                        children: e.label,
                      },
                      n,
                    ),
                  ),
              }),
              (0, s.jsx)("div", {
                className: c()(nG().loading, t && nG().processing),
                children: (0, s.jsx)(o.Ho, {}),
              }),
            ],
          }),
        });
      };
      var nV = a(70289),
        nq = a.n(nV);
      let nZ = (e) => {
        let {
            fanclubDetail: n,
            isTransition: a,
            isProcessing: l,
            menuWidgetHeight: i,
            currentStepData: r,
            selectedStepValues: m,
            incompleteKomojuOrder: d,
            pickPayAmountWithTax: p,
            onSelectedBack: _,
            onOpenConfirmDialog: u,
            onTogglePaymentModal: h,
            stripeElementForm: f,
          } = e,
          x = (0, t.useRouter)(),
          j = (0, C.am)(),
          b = "plan" === r.step,
          v = (e) => c()(e.join(","), nq().trans, a && nq().hide);
        return (0, s.jsxs)("div", {
          className: c()(nq().paymentContentFrame, b && nq().planStep),
          "data-testid": "PaymentContentFrame",
          children: [
            (0, s.jsxs)("div", {
              className: nq().informationWrap,
              children: [
                (0, s.jsxs)("div", {
                  className: nq().fanclubInformation,
                  children: [
                    (0, s.jsx)("div", {
                      className: c()(nq().prevBack, {
                        [nq().prevBack_processing]: l,
                      }),
                      children: b
                        ? (0, s.jsxs)("button", {
                            className: nq().prevBack,
                            onClick: () => {
                              if (j) {
                                x.push("/fanclubs");
                                return;
                              }
                              if (
                                x.asPath.split("?")[0] ===
                                "/fanclubs/".concat(n.slug)
                              ) {
                                h();
                                return;
                              }
                              x.push("/fanclubs/".concat(n.slug));
                            },
                            children: [
                              (0, s.jsxs)("p", {
                                className: nq().pcOnly,
                                children: [
                                  n.liverName,
                                  "のファンクラブトップへ",
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className: nq().spOnly,
                                children: "ファンクラブ一覧へ",
                              }),
                            ],
                          })
                        : (0, s.jsx)("p", { onClick: _, children: "←戻る" }),
                    }),
                    (0, s.jsx)("div", {
                      className: nq().liverName,
                      children: n.liverName,
                    }),
                    (0, s.jsx)("div", {
                      className: nq().fanclubName,
                      children: n.name,
                    }),
                    (0, s.jsx)("div", {
                      className: c()(
                        nq().planName,
                        nq().pcOnly,
                        nq().trans,
                        b && a && nq().hide,
                      ),
                      children: r.planName,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: nq().stepInformation,
                  children: [
                    (0, s.jsx)("div", {
                      className: v([nq().currentStep]),
                      children: r.heading,
                    }),
                    b &&
                      (0, s.jsx)(o.ii, {
                        className: v([nq().fanclubDescription]),
                        description: n.description,
                      }),
                    r.description &&
                      (0, s.jsx)(o.ZE, {
                        className: v([nq().stepDescription]),
                        text: r.description,
                      }),
                    (r.isPaymentCard || r.showRegisterConfirm) &&
                      (0, s.jsx)(o.KZ, {
                        className: v([nq().registerConfirm]),
                        currentStepData: r,
                        selectedStepValues: m,
                        pickPayAmountWithTax: p,
                      }),
                    r.isKomojuOrder &&
                      d &&
                      (0, s.jsx)(o.W6, {
                        className: v([nq().customerConfirm]),
                        komojuOrder: d,
                        onOpenConfirmDialog: u,
                      }),
                    r.showStripeForm &&
                      (0, s.jsx)("div", {
                        className: v([nq().stripeForm]),
                        children: f,
                      }),
                    r.attention &&
                      (0, s.jsx)(o.AV, {
                        className: v([nq().paymentNote]),
                        attention: r.attention,
                      }),
                  ],
                }),
              ],
            }),
            !b &&
              (0, s.jsx)("div", {
                className: nq().menuWidgetSpace,
                style: { height: "".concat(i, "px") },
              }),
            l &&
              (0, s.jsx)("div", {
                className: nq().loadingWrap,
                children: (0, s.jsx)(o.Ho, {}),
              }),
          ],
        });
      };
      var nz = a(81626),
        nJ = a.n(nz);
      let nK = (e) => {
        let {
            isTransition: n,
            isMenuProcessing: a,
            menuWidgetRef: t,
            currentStepData: l,
            fanclubSlug: i,
            pickPayAmountWithTax: r,
            onTogglePaymentModal: m,
            onSelectedMenu: d,
          } = e,
          { step: p, licenses: u, menus: f } = l,
          [x, j] = (0, _.useState)(!1),
          [b, v] = (0, _.useState)(!1),
          { setPaymentModalSetupError: N } = (0, eN.kc)(),
          g = (e) => {
            ("basic" === e && j(!0), "premium" === e && v(!0));
          };
        return (
          (0, _.useEffect)(
            () => (
              x &&
                b &&
                N({ statusCode: 500, message: "決済金額の取得に失敗しました" }),
              () => {
                N(void 0);
              }
            ),
            [x, b, N],
          ),
          (0, s.jsx)("div", {
            className: c()(nJ().paymentMenuWidget, n ? nJ().trans : ""),
            ref: t,
            children:
              "plan" === p && u
                ? u.map(
                    (e, n) =>
                      e.visible &&
                      (0, s.jsx)(
                        h.qH,
                        {
                          isMenuProcessing: a,
                          licenses: u,
                          licensesKey: n,
                          pickPayAmountWithTax: r,
                          onTogglePaymentModal: m,
                          onSelectedMenu: d,
                          fanclubSlug: i,
                          updatePriceLabelError: g,
                        },
                        e.plan,
                      ),
                  )
                : null == f
                  ? void 0
                  : f.map((e, n) =>
                      (0, s.jsx)(
                        o.Tb,
                        {
                          isMenuProcessing: a,
                          currentStep: l.step,
                          stepMenu: e,
                          onSelectedMenu: d,
                          iconType: e.isDelete ? "XMark" : "ArrowBold",
                        },
                        n,
                      ),
                    ),
          })
        );
      };
      var nQ = a(30973),
        nX = a.n(nQ);
      let n$ = (e) => {
        let {
            fanclubDetail: n,
            isTransition: a,
            toggleModal: t,
            menuWidgetHeight: l,
          } = e,
          i =
            "nijisanji-all" === n.slug
              ? ["nijisanjiAll"]
              : n.licenses
                  .filter(
                    (e) =>
                      "active" === e.status &&
                      ["basic", "premium"].includes(e.plan),
                  )
                  .map((e) => e.plan);
        return (0, s.jsxs)("div", {
          className: c()(nX().paymentPlanInformation, a && nX().hide),
          children: [
            (0, s.jsxs)("div", {
              className: nX().planList,
              children: [
                (0, s.jsxs)("div", {
                  className: nX().titleWrapper,
                  children: [
                    (0, s.jsx)(o.V1, { title: "PLAN", className: nX().title }),
                    (0, s.jsx)("div", {
                      className: nX().titleSub,
                      children: "プランと料金",
                    }),
                  ],
                }),
                (0, s.jsx)(nd, {
                  planBenefits: ((e) => {
                    let a = n.licenses.find(
                      (n) => n.plan === e && "active" === n.status,
                    );
                    return (null == a ? void 0 : a.benefits) ? a.benefits : [];
                  })("premium"),
                  toggleModal: t,
                  className: nX().fanclubPlan,
                  planTypes: i,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: nX().menuWidgetSpace,
              style: { height: "".concat(l, "px") },
            }),
          ],
        });
      };
      var n0 = a(50806),
        n1 = a.n(n0);
      let n2 = (e) => {
        let {
            className: n = "",
            showLanguagePullDown: a = !0,
            onClickClose: t,
            onClickMenuLink: i,
          } = e,
          r = (0, L.b)(),
          m = (0, _.useMemo)(
            () =>
              "ja" === r
                ? {
                    path: "/simusanji/icon/official-store.png",
                    width: 26,
                    height: 26,
                    widthSp: 2.6,
                    heightSp: 2.6,
                  }
                : {
                    path: "/simusanji/icon/official-store-cart.svg",
                    width: 26,
                    height: 24,
                    widthSp: 2.6,
                    heightSp: 2.4,
                  },
            [r],
          ),
          d =
            "ja" === r
              ? ec.Gp.JP_OFFICIAL_STORE_URL
              : ec.Gp.EN_OFFICIAL_STORE_URL,
          p = () => {
            l().push("ja" === r ? "/" : "/en");
          };
        return (0, s.jsxs)("div", {
          className: c()(n, n1().menu),
          children: [
            (0, s.jsxs)("div", {
              className: n1().inner,
              children: [
                (0, s.jsxs)("div", {
                  className: n1().upperContents,
                  children: [
                    (0, s.jsx)("div", {
                      className: c()(
                        n1().logoWrapper,
                        "ja" === r ? n1().ja : n1().en,
                      ),
                      onClick: () => {
                        p();
                      },
                      children: (0, s.jsx)(y.Z, {
                        src:
                          "ja" === r
                            ? "/logo/nijisanji_logo_white.svg"
                            : "/logo/nijisanji_logo_en_white.svg",
                        fill: !0,
                        alt: "NIJISANJI",
                      }),
                    }),
                    a && (0, s.jsx)(h.xi, {}),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: n1().middleContents,
                  children: [
                    (0, s.jsxs)("div", {
                      className: n1().largeLinks,
                      children: [
                        (0, s.jsx)(o.hh, {
                          text: "NEWS",
                          href: "/news",
                          color: "white",
                          className: n1().textLink,
                          onClickLink: i,
                        }),
                        (0, s.jsx)(o.hh, {
                          text: "STREAMS",
                          href: "/streams",
                          color: "white",
                          className: n1().textLink,
                          onClickLink: i,
                        }),
                        (0, s.jsx)(o.hh, {
                          text: "TALENTS",
                          href: "/talents",
                          color: "white",
                          className: n1().textLink,
                          onClickLink: i,
                        }),
                        (0, s.jsx)(o.hh, {
                          text: "EVENTS",
                          href: "/events",
                          color: "white",
                          className: n1().textLink,
                          onClickLink: i,
                        }),
                        "ja" === r &&
                          (0, s.jsx)(o.hh, {
                            text: "FANCLUBS",
                            href: "/fanclubs",
                            color: "white",
                            className: n1().textLink,
                            onClickLink: i,
                          }),
                        (0, s.jsx)(o.hh, {
                          text: "CALENDAR",
                          href: "/calendar",
                          color: "white",
                          className: n1().textLink,
                          onClickLink: i,
                        }),
                        (0, s.jsx)(o.hh, {
                          text: "OFFICIAL PROGRAMS",
                          href: "/official-programs",
                          color: "white",
                          className: n1().textLink,
                          onClickLink: i,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: n1().externalIconList,
                      children: [
                        (0, s.jsx)("div", {
                          className: n1().externalIconWrapper,
                          children: (0, s.jsx)(o.Tq, {
                            className: n1().anycolorMagazine,
                            href: ec.Gp.ANYCOLOR_MAGAZINE_URL,
                            target: "_blank",
                            iconUrl: "/simusanji/icon/anycolor-magazine.png",
                            alt: "anycolor-magazine",
                            width: 26,
                            height: 26,
                            widthSp: 2.6,
                            heightSp: 2.6,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: n1().externalIconWrapper,
                          children: (0, s.jsx)(o.Tq, {
                            className: n1().nijiBuddy,
                            href: ec.Gp.NIJI_BUDDY_URL,
                            target: "_blank",
                            iconUrl: "/simusanji/icon/nijibuddy-favicon.svg",
                            alt: "niji-buddy",
                            width: 26,
                            height: 26,
                            widthSp: 2.6,
                            heightSp: 2.6,
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: n1().externalIconWrapper,
                          children: (0, s.jsx)(o.Tq, {
                            className: n1().officialStore,
                            href: d,
                            target: "_blank",
                            iconUrl: m.path,
                            alt: "official-store",
                            width: m.width,
                            height: m.height,
                            widthSp: m.widthSp,
                            heightSp: m.heightSp,
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: n1().snsColumn,
                      children: [
                        (0, s.jsx)(h.bF, { lang: "jp" }),
                        (0, s.jsx)(h.bF, { lang: "en" }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: n1().lowerContents,
                  children: (0, s.jsx)("small", {
                    className: n1().copyright,
                    children: ec.Gp.COPYRIGHT,
                  }),
                }),
              ],
            }),
            (0, s.jsx)("button", { className: n1().closeBtn, onClick: t }),
          ],
        });
      };
      var n5 = a(31640),
        n6 = a.n(n5);
      let n8 = (e) => {
        let {
            className: n = "",
            selectedFilter: a,
            onChangeFilter: t,
            onClickLoginOrRegister: l,
            onCloseFilterModal: r,
          } = e,
          { currentParrotUser: o } = (0, eN.Eu)(),
          m = (0, _.useRef)(null),
          d = (0, L.b)(),
          { t: p } = (0, i.$G)(["common"]),
          [u, f] = (0, _.useState)(!1);
        (0, _.useEffect)(() => {
          if (!u) return;
          let e = (e) => {
            let n = m.current;
            n && (n.contains(e.target) || f(!1));
          };
          return (
            window.addEventListener("mousedown", e),
            () => window.removeEventListener("mousedown", e)
          );
        }, [u]);
        let x = () => {
          (null == r || r(), f(!0));
        };
        return (0, s.jsxs)("div", {
          className: c()(n, n6().favoriteFilter),
          children: [
            (0, s.jsx)("button", {
              onMouseUp: () => (o ? t("favorite") : x()),
              disabled: "favorite" === a,
              className: c()(
                n6().button,
                n6().favorite,
                "favorite" === a ? n6().selected : "",
                "en" === d ? n6().en : n6().ja,
              ),
              children: p(eg.nOK[0].label, { ns: "common" }).toString(),
            }),
            (0, s.jsx)("button", {
              onClick: () => {
                t("all");
              },
              disabled: "all" === a,
              className: c()(
                n6().button,
                n6().all,
                "all" === a ? n6().selected : "",
              ),
              children: p(eg.nOK[1].label, { ns: "common" }).toString(),
            }),
            u &&
              (0, s.jsx)("div", {
                className: n6().unloggedinModal,
                ref: m,
                children: (0, s.jsx)(h.DS, {
                  className: n6().suggestLoginModal,
                  mainText: p("modal.suggestLogin", { ns: "common" }),
                  visible: u,
                  isLargeStyle: !0,
                  onClickLoginOrRegister: l,
                  closeModal: () => {
                    f(!1);
                  },
                }),
              }),
          ],
        });
      };
      var n3 = a(35518),
        n4 = a.n(n3);
      let n7 = (e) => {
          let { userLicenses: n } = e;
          return (0, s.jsx)(s.Fragment, {
            children: n.map((e, n) =>
              (0, s.jsxs)(
                "div",
                {
                  className: n4().fanclubRequestInfo,
                  children: [
                    (0, s.jsxs)("div", {
                      className: n4().item,
                      style: {
                        ...(e.license.fanclub.liverColor && {
                          border: "2px solid ".concat(
                            e.license.fanclub.liverColor,
                          ),
                        }),
                      },
                      children: [
                        (0, s.jsx)(o.J9, {
                          className: n4().fanclubIcon,
                          href: "/fanclubs/".concat(e.license.fanclub.slug),
                          fanclub: e.license.fanclub,
                        }),
                        (0, s.jsxs)("div", {
                          className: n4().text,
                          children: [
                            (0, s.jsx)("p", {
                              className: n4().fanclubName,
                              children: e.license.fanclub.name,
                            }),
                            (0, s.jsx)("p", {
                              className: n4().liverName,
                              children: e.license.fanclub.liverName,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.membershipCardShipmentPendingSettingText &&
                      (0, s.jsx)("p", {
                        className: n4().pendingMessage,
                        children: e.membershipCardShipmentPendingSettingText,
                      }),
                  ],
                },
                n,
              ),
            ),
          });
        },
        n9 = (e) => {
          let {
            className: n,
            unshippedPremiumUserLicenses: a,
            pendingShipmentPremiumUserLicenses: t,
            shippedMembershipCardShipments: l,
          } = e;
          return (0, s.jsxs)("section", {
            className: c()(n, n4().membershipCardInfo),
            "data-testid": "MembershipCardInfo",
            children: [
              (0, s.jsx)("div", {
                className: n4().readText,
                children: (0, s.jsxs)("p", {
                  className: n4().content,
                  children: [
                    "本ページではお客様がプレミアムプランへご入会されているファンクラブの会員証発送のお申し込みができます。",
                    (0, s.jsx)("br", {}),
                    "発送対象となるファンクラブは下記の「お申し込み対象ファンクラブ」をご確認ください。",
                    (0, s.jsx)("br", {}),
                    "対象のファンクラブが複数表示されている場合は、一度にまとめてのお申し込みが可能です。",
                    (0, s.jsx)("br", {}),
                    "下部の「配送先情報」入力フォームに必要事項を記入して送信してください。",
                  ],
                }),
              }),
              a
                ? a.length > 0
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("h3", {
                          className: n4().infoTitle,
                          "data-label-info": "■",
                          children: "お申し込み対象ファンクラブ",
                        }),
                        (0, s.jsx)(n7, { userLicenses: a }),
                      ],
                    })
                  : (0, s.jsx)("div", {
                      className: n4().messageBar,
                      children: (0, s.jsx)(o.Nm, {
                        className: n4().bar,
                        enableClose: !1,
                        children: (0, s.jsx)("p", {
                          children:
                            "発送のお申し込みができるファンクラブはありません",
                        }),
                      }),
                    })
                : null,
              !!t &&
                t.length > 0 &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("h3", {
                      className: n4().infoTitle,
                      "data-label-info": "■",
                      children: "お申し込み対象外ファンクラブ",
                    }),
                    (0, s.jsx)(n7, { userLicenses: t }),
                  ],
                }),
              l.membershipCardShipments.length > 0
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("h3", {
                        className: n4().infoTitle,
                        "data-label-info": "■",
                        children: "お申し込み済みファンクラブ",
                      }),
                      (0, s.jsx)("p", {
                        className: n4().infoMessage,
                        children:
                          "※お申し込み時に入力された配送先情報は各ファンクラブを選択するとご確認いただけます。",
                      }),
                      (0, s.jsx)("div", {
                        className: n4().fanclubIgnoreInfo,
                        children: l.membershipCardShipments.map((e, n) =>
                          (0, s.jsx)(
                            "div",
                            {
                              className: n4().ignoreItem,
                              children: (0, s.jsxs)(o.UQ, {
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: n4().title,
                                    children: [
                                      (0, s.jsx)(o.J9, {
                                        className: n4().fanclubIcon,
                                        href: "/fanclubs/".concat(
                                          e.fanclub.slug,
                                        ),
                                        fanclub: e.fanclub,
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: n4().message,
                                        children: [
                                          (0, s.jsx)("strong", {
                                            className: n4().fanclubName,
                                            children: ""
                                              .concat(e.fanclub.name, "（")
                                              .concat(
                                                e.fanclub.liverName,
                                                "）",
                                              ),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: n4().status,
                                            children: "".concat((0, eg.TUs)(e)),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: n4().body,
                                    children: [
                                      (0, s.jsx)("p", {
                                        className: n4().info,
                                        children: "配送先情報",
                                      }),
                                      (0, s.jsx)("p", {
                                        className: n4().address,
                                        children: (0, es.ZP)((0, eg.vvB)(e)),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            n,
                          ),
                        ),
                      }),
                    ],
                  })
                : null,
              (0, s.jsxs)("div", {
                className: n4().precautions,
                children: [
                  (0, s.jsx)("h3", {
                    className: n4().infoTitle,
                    "data-label-info": "■",
                    children: "注意事項",
                  }),
                  (0, s.jsxs)("p", {
                    className: n4().content,
                    children: [
                      "※既に会員証受け取り済みのファンクラブはお申し込みできません。",
                      (0, s.jsx)("br", {}),
                      "※お申し込み完了メールは『support-fanclub@anycolor.co.jp』より送信されます。",
                      (0, s.jsx)("br", {}),
                      "\xa0\xa0\xa0\xa0メール受信設定を行っている場合は、上記アドレスからのメールを受信できるよう、あらかじめ設定をお願いいたします。",
                      (0, s.jsx)("br", {}),
                      "\xa0\xa0\xa0\xa0お申し込み完了メールを受信できない場合は、迷惑メールフォルダやメール受信設定をご確認ください。",
                      (0, s.jsx)("br", {}),
                      "※お申し込みに際してのご質問がございましたら",
                      (0, s.jsx)(eE(), {
                        href: "/fanclub-contact",
                        className: n4().href,
                        children: "お問い合わせ",
                      }),
                      "ページよりご連絡ください。",
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var ae = a(29380),
        an = a.n(ae);
      let aa = (e) => {
          var n;
          let {
              className: a,
              requestInputs: t,
              requestInputsError: l,
              onChangeContactInput: r,
              onClickSetAlbUserInfo: o,
            } = e,
            { t: m } = (0, i.$G)(["contact"]),
            d = new URL("/user/edit", ec.W2.ALB_FRONTEND_URL);
          return (0, s.jsxs)("div", {
            className: c()(a, an().membershipCardForm),
            "data-testid": "MembershipCardForm",
            children: [
              (0, s.jsxs)("div", {
                className: an().anycolorInfo,
                children: [
                  (0, s.jsxs)("div", {
                    className: an().anycolorBox,
                    onClick: o,
                    children: [
                      (0, s.jsx)(y.Z, {
                        src: "/simusanji/icon/anycolor_id.svg",
                        width: 24,
                        height: 24,
                        alt: "ANYCOLOR ID",
                      }),
                      (0, s.jsx)("p", {
                        className: an().text,
                        children: "ANYCOLOR IDの情報を反映する",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: an().caution,
                    children:
                      "※ANYCOLOR ID で情報を更新した場合は、上記のボタンを押して反映させてください。",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "name",
                    name: "name",
                    value: t.name,
                    placeholder: m("form.deliveryName.placeholder", {
                      ns: "contact",
                    }),
                    label: m("form.deliveryName.label", { ns: "contact" }),
                    onChange: r,
                    required: !0,
                  }),
                  !!l.name &&
                    (0, s.jsx)("p", {
                      className: an().error,
                      children: l.name,
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "email",
                    name: "email",
                    value: t.email,
                    placeholder: m("form.email.placeholder", { ns: "contact" }),
                    label: m("form.email.label", { ns: "contact" }),
                    disabled: !0,
                  }),
                  (0, s.jsxs)("p", {
                    className: an().info,
                    children: [
                      "※受付完了のお知らせを受け取るメールアドレスを変更する場合は",
                      (0, s.jsx)("a", {
                        href: d.href,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "\xa0ANYCOLOR ID\xa0",
                      }),
                      "のユーザー情報を変更してください",
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "zipCode",
                    name: "zipCode",
                    value: t.zipCode,
                    placeholder: m("form.zipCode.placeholder", {
                      ns: "contact",
                    }),
                    label: m("form.zipCode.label", { ns: "contact" }),
                    onChange: r,
                    required: !0,
                  }),
                  !!l.zipCode &&
                    (0, s.jsx)("p", {
                      className: an().error,
                      children: l.zipCode,
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "prefecture",
                    name: "prefecture",
                    value: t.prefecture,
                    placeholder: m("form.province.placeholder", {
                      ns: "contact",
                    }),
                    label: m("form.province.label", { ns: "contact" }),
                    onChange: r,
                    required: !0,
                  }),
                  !!l.prefecture &&
                    (0, s.jsx)("p", {
                      className: an().error,
                      children: l.prefecture,
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "city",
                    name: "city",
                    value: t.city,
                    placeholder: m("form.city.placeholder", { ns: "contact" }),
                    label: m("form.city.label", { ns: "contact" }),
                    onChange: r,
                    required: !0,
                  }),
                  !!l.city &&
                    (0, s.jsx)("p", {
                      className: an().error,
                      children: l.city,
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "street",
                    name: "street",
                    value: t.street,
                    placeholder: m("form.address.placeholder", {
                      ns: "contact",
                    }),
                    label: m("form.address.label", { ns: "contact" }),
                    onChange: r,
                    required: !0,
                  }),
                  !!l.street &&
                    (0, s.jsx)("p", {
                      className: an().error,
                      children: l.street,
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: an().formItem,
                children: [
                  (0, s.jsx)(h.v4, {
                    id: "building",
                    name: "building",
                    value: null !== (n = t.building) && void 0 !== n ? n : "",
                    placeholder: m("form.additional.placeholder", {
                      ns: "contact",
                    }),
                    label: m("form.additional.label", { ns: "contact" }),
                    onChange: r,
                  }),
                  !!l.building &&
                    (0, s.jsx)("p", {
                      className: an().error,
                      children: l.building,
                    }),
                ],
              }),
            ],
          });
        },
        as = (e) => {
          let { className: n, requestInputs: a } = e,
            { t } = (0, i.$G)(["contact"]);
          return (0, s.jsxs)("div", {
            className: c()(n, z().confirmForOrdinary),
            "data-testid": "MembershipCardConfirm",
            children: [
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.deliveryName.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", { className: z().content, children: a.name }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.email.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.email,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.zipCode.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.zipCode,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.province.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.prefecture,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.city.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", { className: z().content, children: a.city }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.address.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.street,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: z().confirmItem,
                children: [
                  (0, s.jsx)("p", {
                    className: z().label,
                    children: t("form.additional.label", { ns: "contact" }),
                  }),
                  (0, s.jsx)("p", {
                    className: z().content,
                    children: a.building,
                  }),
                ],
              }),
            ],
          });
        };
    },
    89803: function (e, n, a) {
      "use strict";
      (a.r(n),
        a.d(n, {
          TopFanclub: function () {
            return u;
          },
        }));
      var s = a(85893),
        t = a(27561),
        l = a(93967),
        i = a.n(l),
        r = a(25935);
      (a(66761), a(29205));
      var c = a(48808),
        o = a(12439),
        m = a(74152),
        d = a(5575),
        p = a(16611),
        _ = a.n(p);
      let u = (e) => {
        let { className: n = "", fanclubContents: a } = e,
          { t: l } = (0, t.$G)(["top", "common"]);
        return (0, s.jsxs)("div", {
          className: i()(n, _().topFanclub),
          "data-testid": "TopFanclub",
          children: [
            (0, s.jsxs)("div", {
              className: _().detail,
              children: [
                (0, s.jsxs)("div", {
                  className: _().description,
                  children: [
                    (0, s.jsx)("div", {
                      className: _().iconWrapper,
                      children: (0, s.jsx)(o.Z, {
                        src: "/logo/fanclub-logo.png",
                        width: 300,
                        height: 91,
                        alt: l("fanclub.serviceName", { ns: "top" }),
                        sizes: "100vw",
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: _().text,
                      "data-testid": "Copy",
                      children: (0, r.ZP)(
                        l("fanclub.catchcopy", {
                          spbr: '<br class="sp" />',
                          ns: "top",
                        }),
                      ),
                    }),
                    (0, s.jsx)(c.Be, {
                      className: _().button,
                      buttonType: "darkGray",
                      iconType: "external",
                      value: l("linkButton.toFanclub", { ns: "common" }),
                      url: d.Gp.FAN_CLUB_TOP_URL,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: _().image,
                  children: [
                    (0, s.jsx)("div", { className: _().imageBezel }),
                    (0, s.jsx)("div", {
                      className: _().imageWrapper,
                      children: (0, s.jsx)(o.Z, {
                        sizes: "100vw",
                        src: "/images/fanclub-app-capture02.png",
                        width: 372,
                        height: 586,
                        alt: l("fanclub.serviceApp", { ns: "top" }),
                      }),
                    }),
                    (0, s.jsx)("div", { className: _().imageBackground }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: i()(_().downloadButtons, _().spOnly),
              children: [
                (0, s.jsx)("div", {
                  className: _().buttonWrapper,
                  children: (0, s.jsx)("a", {
                    href: d.Gp.FANCLUB_APP_STORE_URL,
                    children: (0, s.jsx)(o.Z, {
                      src: "/logo/app_store_download.png",
                      fill: !0,
                      alt: "App Store Download",
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: _().buttonWrapper,
                  children: (0, s.jsx)("a", {
                    href: d.Gp.FANCLUB_GOOGLE_PLAY_URL,
                    children: (0, s.jsx)(o.Z, {
                      src: "/logo/google_play_download.png",
                      fill: !0,
                      alt: "Google Play Download",
                    }),
                  }),
                }),
              ],
            }),
            (0, s.jsx)(m._E, {
              className: _().fanclubSlider,
              fanclubContents: a,
            }),
          ],
        });
      };
    },
    55753: function (e, n, a) {
      "use strict";
      a.d(n, {
        rq: function () {
          return e2;
        },
        LN: function () {
          return f;
        },
        ms: function () {
          return eo;
        },
        QH: function () {
          return nl;
        },
        N0: function () {
          return eC;
        },
        Jd: function () {
          return eN;
        },
        L7: function () {
          return no;
        },
        Rk: function () {
          return ej;
        },
        UO: function () {
          return eA;
        },
        iR: function () {
          return eT;
        },
        jj: function () {
          return e3;
        },
        wI: function () {
          return ny;
        },
        QC: function () {
          return en;
        },
        fI: function () {
          return eL;
        },
        oQ: function () {
          return ew;
        },
        qg: function () {
          return eX;
        },
        Jo: function () {
          return eJ;
        },
        ZB: function () {
          return nB;
        },
        JK: function () {
          return nS;
        },
        Je: function () {
          return nT;
        },
        S: function () {
          return eq;
        },
        J8: function () {
          return eG;
        },
        bZ: function () {
          return eW;
        },
        Ar: function () {
          return h;
        },
        WA: function () {
          return nb;
        },
        mr: function () {
          return ei;
        },
        _7: function () {
          return Y;
        },
        h_: function () {
          return nL;
        },
        cE: function () {
          return na;
        },
        hF: function () {
          return X;
        },
        ne: function () {
          return q;
        },
        cZ: function () {
          return ep;
        },
        eN: function () {
          return e9;
        },
        oR: function () {
          return B;
        },
        No: function () {
          return eh;
        },
        RC: function () {
          return np;
        },
        e4: function () {
          return w;
        },
      });
      var s = a(85893),
        t = a(11163),
        l = a.n(t),
        i = a(67294),
        r = a(93967),
        c = a.n(r),
        o = a(79907),
        m = a(74152),
        d = a(79607),
        p = a(5435),
        _ = a(77698),
        u = a.n(_);
      let h = (e) => {
          let {
              showFooter: n = !0,
              showBg: a = !0,
              showLanguagePullDown: l = !0,
              pageError: r = { statusCode: null, message: null },
              children: _,
              hasServerSideError: h = !1,
              hasStickyPosition: f = !1,
              maintenance: x = {},
            } = e,
            [j, b] = (0, i.useState)(!1),
            { error: v, setError: N, hasError: g } = (0, p.VI)(r),
            y = (0, t.useRouter)(),
            {
              isLoggedIn: C,
              isAgreedTermsOfUse: w,
              currentCfcUser: L,
              onClickAgreeTermsOfUse: I,
            } = (0, d.Eu)(),
            { canRequestMembershipCard: k } = (0, d.SE)(),
            {
              mypageModalStatus: T,
              displayFanclubDetailSlug: S,
              isPageTransitioning: B,
              isSpMenuOpen: A,
              activeMypageMenus: M,
              paymentMethodWithLicenses: O,
              openMypageModal: W,
              closeMypageModal: P,
              onChangeFanclubDetailSlug: R,
              onToggleSpMenu: F,
              confirmDialogStatus: E,
              confirmDialogProps: U,
              onDeletePaymentMethodConfirm: D,
            } = (0, d.yN)(),
            Y = () => y.pathname.startsWith("/fanclubs"),
            G = (0, i.useCallback)(() => {
              b(!0);
            }, []),
            H = (0, i.useCallback)(() => {
              b(!1);
            }, []),
            V = (0, i.useCallback)(
              (e) => {
                y.pathname === e && H();
              },
              [y.pathname, H],
            );
          ((0, i.useEffect)(() => {
            g(r) && N(r);
          }, [r]),
            (0, i.useEffect)(() => {
              l ||
                "ja" === y.locale ||
                y.replace(y.asPath, y.asPath, { locale: "ja" });
            }, [l, y]));
          let q = !!(
            (null == x ? void 0 : x.fanclub) ||
            h ||
            ((null == v ? void 0 : v.statusCode) &&
              (null == v ? void 0 : v.message)) ||
            ((null == L ? void 0 : L.isBan) && Y())
          );
          return (0, s.jsxs)(s.Fragment, {
            children: [
              !w && (0, s.jsx)(np, { onClickAgree: I }),
              (0, s.jsx)(ny, {}),
              (0, s.jsxs)("div", {
                className: c()(
                  u().layout,
                  "/" === y.pathname ? u().top : "",
                  f && u().stickyPosition,
                ),
                "data-testid": "Layout",
                children: [
                  j &&
                    (0, s.jsx)(m.v2, {
                      className: c()(u().menu, j ? u().open : u().close),
                      showLanguagePullDown: l,
                      onClickClose: H,
                      onClickMenuLink: V,
                    }),
                  (0, s.jsx)(o.h4, {
                    showLanguagePullDown: l,
                    onClickMenuButton: G,
                    onClickMenuLink: V,
                    openMypageModal: W,
                  }),
                  (null == x ? void 0 : x.fanclub)
                    ? (0, s.jsx)(nB, {})
                    : h
                      ? (0, s.jsx)(e3, {
                          statusCode: 500,
                          message: "予期せぬエラーが発生しました。",
                        })
                      : (null == v ? void 0 : v.statusCode) &&
                          (null == v ? void 0 : v.message)
                        ? (0, s.jsx)(e3, {
                            statusCode: v.statusCode,
                            message: v.message,
                          })
                        : (null == L ? void 0 : L.isBan) && Y()
                          ? (0, s.jsx)(e3, {
                              statusCode: 403,
                              message:
                                "不明なエラーが発生しています。問い合わせページからお問い合わせしてください。",
                            })
                          : (0, s.jsx)("main", {
                              "data-testid": "Main",
                              className: c()(
                                u().main,
                                "/" !== y.pathname && a
                                  ? "/talents/[...slug]" === y.pathname
                                    ? u().bgLiver
                                    : u().bg
                                  : "",
                              ),
                              children: (0, s.jsxs)("div", {
                                className: u().inner,
                                children: [
                                  k &&
                                  !y.pathname.includes(
                                    "/fanclubs/membership-card",
                                  )
                                    ? (0, s.jsx)(o.uR, {})
                                    : null,
                                  _,
                                ],
                              }),
                            }),
                  C &&
                    (0, s.jsx)(na, {
                      mypageModalStatus: T,
                      displayFanclubDetailSlug: S,
                      isPageTransitioning: B,
                      isSpMenuOpen: A,
                      activeMypageMenus: M,
                      paymentMethodWithLicenses: O,
                      openMypageModal: W,
                      closeMypageModal: P,
                      onChangeFanclubDetailSlug: R,
                      onToggleSpMenu: F,
                      confirmDialogStatus: E,
                      confirmDialogProps: U,
                      onDeletePaymentMethodConfirm: D,
                      isApp: !1,
                    }),
                  (n || q) && (0, s.jsx)(o.$_, {}),
                ],
              }),
            ],
          });
        },
        f = (e) => {
          let {
              showBg: n = !0,
              pageError: a = { statusCode: null, message: null },
              children: l,
              hasServerSideError: r = !1,
            } = e,
            { error: o, setError: m, hasError: _ } = (0, p.VI)(a),
            h = (0, t.useRouter)(),
            {
              isAgreedTermsOfUse: f,
              currentCfcUser: x,
              onClickAgreeTermsOfUse: j,
            } = (0, d.Eu)();
          return (
            (0, i.useEffect)(() => {
              _(a) && m(a);
            }, [a]),
            (0, s.jsxs)(s.Fragment, {
              children: [
                !f && (0, s.jsx)(np, { onClickAgree: j }),
                (0, s.jsx)(ny, {}),
                (0, s.jsx)("div", {
                  className: c()(u().layout, u().app),
                  "data-testid": "AppLayout",
                  children: r
                    ? (0, s.jsx)(e3, {
                        className: u().error,
                        statusCode: 500,
                        message: "予期せぬエラーが発生しました。",
                      })
                    : (null == o ? void 0 : o.statusCode) &&
                        (null == o ? void 0 : o.message)
                      ? (0, s.jsx)(e3, {
                          className: u().error,
                          statusCode: o.statusCode,
                          message: o.message,
                        })
                      : (null == x ? void 0 : x.isBan) &&
                          h.pathname.startsWith("/fanclubs")
                        ? (0, s.jsx)(e3, {
                            className: u().error,
                            statusCode: 403,
                            message:
                              "不明なエラーが発生しています。問い合わせページからお問い合わせしてください。",
                          })
                        : (0, s.jsx)("main", {
                            "data-testid": "AppMain",
                            className: c()(u().main, u().app, n ? u().bg : ""),
                            children: (0, s.jsx)("div", {
                              className: u().inner,
                              children: l,
                            }),
                          }),
                }),
              ],
            })
          );
        };
      var x = a(5152),
        j = a.n(x),
        b = a(66477),
        v = a(1692),
        N = a.n(v);
      let g = j()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 73447))
              .then((e) => e.OfficialXCard),
          { loadableGenerated: { webpack: () => [73447] }, ssr: !1 },
        ),
        y = j()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 89803))
              .then((e) => e.TopFanclub),
          { loadableGenerated: { webpack: () => [89803] }, ssr: !1 },
        ),
        C = j()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 1082))
              .then((e) => e.OfficialStore),
          { loadableGenerated: { webpack: () => [1082] }, ssr: !1 },
        ),
        w = (e) => {
          let {
              topBanners: n,
              newsList: a,
              eventList: t,
              officialPrograms: l,
              fanclubContents: r,
              isFanclubMaintenance: c,
              storeBanners: d,
              onAirStreams: p,
              allLivers: _,
            } = e,
            u = (0, i.useMemo)(
              () => (0, b.Nu)(_.filter((e) => !e.hidden)).slice(0, 20),
              [_],
            );
          return (0, s.jsxs)("div", {
            className: N().topContents,
            children: [
              (0, s.jsx)(o.gY, { sliderBanners: n }),
              (0, s.jsx)(m.FI, { newsList: a, className: N().news }),
              (0, s.jsx)(m.hT, { events: t, className: N().calendar }),
              !!p.length &&
                (0, s.jsx)(m.MY, {
                  onAirStreams: p,
                  allLivers: _,
                  className: N().nowOnAir,
                }),
              (0, s.jsx)(m.pm, { talents: u, className: N().talents }),
              (0, s.jsx)(m.a$, {
                officialPrograms: l,
                className: N().officialProgram,
              }),
              (0, s.jsx)(g, { className: N().officialX }),
              !c &&
                (0, s.jsx)(y, { fanclubContents: r, className: N().fanclub }),
              (0, s.jsx)(C, { storeBanners: d }),
            ],
          });
        };
      var L = a(27561),
        I = a(48808),
        k = a(8017),
        T = a(56877),
        S = a.n(T);
      let B = (e) => {
        let {
            affiliationFilter: n,
            talentSort: a,
            talentAscSort: t,
            livers: l,
            fanclubs: r,
            isLoading: d,
            isRandom: p,
            disableFavOnClick: _,
            selectedFavoriteFilter: u,
            onChangeAffiliationFilter: h,
            onChangeFavoriteFilter: f,
            onClickSort: x,
            onClickResetSort: j,
            onClickLoginOrRegister: b,
            onClickFavorite: v,
          } = e,
          { t: N } = (0, L.$G)(["common"]),
          [g, y] = (0, i.useState)(!1),
          C = (0, i.useRef)(null),
          w = !d && 0 === l.length,
          T = "virtuareal" === n ? k.oni : k.$Cu,
          B = (e) => {
            let n = r.find((n) => n.microCmsTalentSlug === e);
            return null != n ? n : null;
          },
          [A, M] = (0, i.useState)(0),
          O = (e) => e % A == 0,
          W = (e) => {
            M(
              getComputedStyle(e)
                .getPropertyValue("grid-template-columns")
                .split(" ").length,
            );
          };
        return (
          (0, i.useEffect)(() => {
            let e = document.querySelector(".liver-list");
            e &&
              (W(e),
              (window.onresize = () => {
                W(e);
              }));
          }, []),
          (0, i.useEffect)(() => {
            let e = (e) => {
              let n = C.current;
              n && (n.contains(e.target) || y(!1));
            };
            return (
              window.addEventListener("click", e),
              () => window.removeEventListener("click", e)
            );
          }, [C]),
          (0, s.jsxs)("div", {
            className: S().talentsTop,
            children: [
              (0, s.jsxs)("div", {
                className: S().pageTitleWrapper,
                id: "top",
                children: [
                  (0, s.jsx)(I.V1, { title: "TALENTS" }),
                  (0, s.jsx)(m.KM, {
                    selectedFilter: u,
                    onChangeFilter: f,
                    onClickLoginOrRegister: b,
                    className: S().favoriteFilter,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: S().inner,
                children: [
                  (0, s.jsxs)("div", {
                    className: S().filteringTabWrapper,
                    children: [
                      (0, s.jsx)(o.Fe, {
                        className: S().filteringTab,
                        filterBy: n,
                        filteringOptions: k.Bww,
                        onChangeAffiliationFilter: h,
                      }),
                      (0, s.jsxs)("div", {
                        className: S().sortWrapper,
                        ref: C,
                        children: [
                          (0, s.jsx)(o.DU, {
                            label: (() => {
                              if (p)
                                return N("sortModal.random", { ns: "talents" });
                              let e = T.filter((e) => e.value === a),
                                n = k.ZfI.filter((e) => e.value === t);
                              return "\n      "
                                .concat(N(e[0].label, { ns: "common" }), "/")
                                .concat(
                                  N(n[0].label, { ns: "common" }),
                                  "\n    ",
                                );
                            })(),
                            onClick: () => y(!g),
                            className: c()(S().sortButton, g ? S().active : ""),
                          }),
                          g &&
                            (0, s.jsx)(o.j_, {
                              className: S().sortModal,
                              isVirtuareal: "virtuareal" === n,
                              sortBy: a,
                              ascSortBy: t,
                              onClickSort: (e, n) => {
                                (y(!1), x(e, n));
                              },
                              onClickResetSort: () => {
                                (y(!1), j());
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: c()(
                      S().listWrapper,
                      d ? S().loading : "",
                      "liver-list",
                    ),
                    children: l.map((e, l) =>
                      (0, s.jsx)(
                        o.RL,
                        {
                          className: S().liverItem,
                          liver: e,
                          fanclub: B(e.slug),
                          magazine: e.socialLinks.magazine,
                          officialStore: e.socialLinks.officialShop,
                          officialStoreEn: e.socialLinks.officialStoreEn,
                          isFarLeftItem: O(l),
                          disableFavOnClick: _,
                          onClickFavorite: v,
                          onClickLoginOrRegister: b,
                        },
                        "liver-"
                          .concat(n, "-")
                          .concat(a, "-")
                          .concat(t, "-")
                          .concat(l, "-")
                          .concat(e.id),
                      ),
                    ),
                  }),
                  d &&
                    (0, s.jsx)("div", {
                      className: S().loaderContainer,
                      children: (0, s.jsx)("div", { className: S().loader }),
                    }),
                  w &&
                    (0, s.jsx)("div", {
                      className: S().empty,
                      children: "検索条件に一致するタレントは存在しません",
                    }),
                ],
              }),
            ],
          })
        );
      };
      var A = a(41664),
        M = a.n(A),
        O = a(47125),
        W = a(12439),
        P = a(95e3);
      async function R(e) {
        let n = await new Promise((n, a) => {
            let s = new Image();
            ((s.crossOrigin = "anonymous"),
              (s.onload = () => n(s)),
              (s.onerror = (e) => a(e)),
              (s.src = e));
          }),
          a = document.createElement("canvas");
        ((a.width = n.naturalWidth), (a.height = n.naturalHeight));
        let s = a.getContext("2d");
        if (!s) return { url: "", width: 0, height: 0 };
        s.drawImage(n, 0, 0);
        let t = (function (e, n) {
            var a;
            let s =
                "function" == typeof (a = void 0)
                  ? a
                  : Array.isArray(a)
                    ? (e) => {
                        let [n, s, t, l] = e;
                        return (
                          n === a[0] && s === a[1] && t === a[2] && l === a[3]
                        );
                      }
                    : (e) => 0 === e[3],
              t = {},
              l = ["top"];
            for (let n = 0; n < l.length; n++) {
              let a = l[n],
                i = (function (e, n, a) {
                  let { data: s, width: t, height: l } = e,
                    i = "left" === n || "right" === n,
                    r = "right" === n || "bottom" === n,
                    c = i ? t : l,
                    o = i ? l : t,
                    m = r ? -1 : 1,
                    d = r ? c - 1 : 0;
                  for (let e = d; r ? e > -1 : e < c; e += m)
                    for (let n = 0; n < o; n++) {
                      let l = (i ? t * n + e : t * e + n) * 4;
                      if (!a([s[l], s[l + 1], s[l + 2], s[l + 3]]))
                        return r ? d - e : e;
                    }
                  return null;
                })(e, a, s);
              if (null === i) return new ImageData(1, 1);
              t[a] = i;
            }
            return (0, P.Z)(e, t);
          })(s.getImageData(0, 0, a.width, a.height)),
          l = document.createElement("canvas");
        ((l.width = t.width), (l.height = t.height));
        let i = l.getContext("2d");
        return i
          ? (i.putImageData(t, 0, 0),
            {
              url: l.toDataURL("image/webp"),
              width: t.width,
              height: t.height,
            })
          : { url: "", width: 0, height: 0 };
      }
      var F = a(43850),
        E = a(34365),
        U = a(16741),
        D = a.n(U);
      let Y = (e) => {
        var n, a, t;
        let {
            liver: l,
            fanclubSlug: r,
            isFavorite: p,
            isVrLiver: _,
            onClickFavorite: u,
            onClickLoginOrRegister: h,
          } = e,
          { currentParrotUser: f } = (0, d.Eu)(),
          { liverListPagePath: x } = (0, d.rk)(),
          j = (0, i.useRef)(null),
          b = (0, i.useRef)(null),
          v =
            null !==
              (t =
                null === (n = l.parrotPreferences) || void 0 === n
                  ? void 0
                  : n.bgColor) && void 0 !== t
              ? t
              : l.profile.color,
          N = (0, E.b)(),
          { t: g } = (0, L.$G)(["talents", "common"]),
          [y, C] = (0, i.useState)(!1),
          [w, k] = (0, i.useState)({ url: "", width: 0, height: 0 }),
          [T, S] = (0, i.useState)(!1),
          B = () => {
            S(!T);
          };
        ((0, i.useEffect)(() => {
          (async () => {
            k(await R("".concat(l.images.halfbodyNew.url, "?w=2000&fm=webp")));
          })();
        }, [l]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              let n = j.current,
                a = b.current;
              n && a && (n.contains(e.target) || a.contains(e.target) || C(!1));
            };
            return (
              window.addEventListener("click", e),
              () => window.removeEventListener("click", e)
            );
          }, [j]));
        let A = () =>
            l.trailerVideo
              ? l.trailerVideo.match("youtube.com")
                ? l.trailerVideo.replace("watch?v=", "embed/")
                : l.trailerVideo.match("bilibili.com")
                  ? l.trailerVideo
                      .replace(
                        "www.bilibili.com/video/",
                        "player.bilibili.com/player.html?bvid=",
                      )
                      .concat("&autoplay=0")
                  : ""
              : "",
          P = () => {
            let e = [];
            return (
              l.profile.descriptionOtherLang &&
                e.push(l.profile.descriptionOtherLang),
              "en" === N && l.profile.descriptionEn
                ? e.push(l.profile.descriptionEn)
                : e.push(l.profile.description),
              e.join("\n\n")
            );
          };
        return (0, s.jsxs)("div", {
          className: D().talentDetail,
          children: [
            (0, s.jsx)("div", {
              className: D().upperParts,
              style: (0, F.P)(v),
              children: (0, s.jsxs)("div", {
                className: D().contentsWrap,
                children: [
                  (0, s.jsx)(M(), {
                    href: x,
                    children: (0, s.jsxs)("div", {
                      className: D().talentListLink,
                      style: (() => {
                        let e = {};
                        return (
                          (e.backgroundColor = (0, O.Z)(v).darken(1).hex()),
                          e
                        );
                      })(),
                      children: [
                        "←",
                        (0, s.jsxs)("span", {
                          className: D().pcOnly,
                          children: [
                            "\xa0",
                            g("backToList", { ns: "talents" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: D().favoriteButtonWrapper,
                    ref: b,
                    children: [
                      (0, s.jsx)(I._6, {
                        isFavorite: !!f && p,
                        onClick: () => (f ? u() : C(!0)),
                      }),
                      y &&
                        (0, s.jsx)("div", {
                          className: D().unLoginModal,
                          ref: j,
                          children: (0, s.jsx)(o.DS, {
                            className: D().suggestLoginModal,
                            mainText: g("modal.suggestLogin", { ns: "common" }),
                            visible: y,
                            isLargeStyle: !0,
                            onClickLoginOrRegister: h,
                            closeModal: () => C(!1),
                          }),
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: c()(
                      D().textContents,
                      "white" ===
                        (() => {
                          var e, n;
                          let a =
                            null === (n = l.parrotPreferences) || void 0 === n
                              ? void 0
                              : null === (e = n.textColor) || void 0 === e
                                ? void 0
                                : e[0];
                          if (a) {
                            if ("白" === a) return "white";
                            if ("黒" === a) return "black";
                          }
                          return (184 * parseInt(v.substring(1, 3), 16) +
                            520 * parseInt(v.substring(3, 5), 16) +
                            96 * parseInt(v.substring(5, 7), 16)) /
                            1e3 <
                            156
                            ? "white"
                            : "black";
                        })()
                        ? D().white
                        : "",
                    ),
                    children: [
                      (0, s.jsx)(I.V1, {
                        className: c()(D().liverName, _ && D().scFontName),
                        title: "ja" === N ? l.name : l.enName,
                      }),
                      (0, s.jsx)("p", {
                        className: D().liverRuby,
                        children:
                          "ja" === N ? "".concat(l.ruby) : "".concat(l.name),
                      }),
                      (0, s.jsx)("p", {
                        className: D().liverEnName,
                        children:
                          "ja" === N ? "".concat(l.enName) : "".concat(l.ruby),
                      }),
                      (0, s.jsx)("p", {
                        className: c()(
                          D().liverDescription,
                          _ && D().scFontDescription,
                          D().pcOnly,
                        ),
                        children: P(),
                      }),
                      "" !== A() &&
                        (0, s.jsx)("div", {
                          className: c()(D().youtube, D().pcOnly),
                          children: (0, s.jsx)(
                            "iframe",
                            {
                              src: A(),
                              allow:
                                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowFullScreen: !0,
                            },
                            A() + "-pc",
                          ),
                        }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: D().liverPhoto,
                    children: [
                      (0, s.jsx)("div", {
                        className: c()(
                          D().imageContents,
                          "" === w.url ? D().loading : "",
                        ),
                        style: (() => {
                          let e = {};
                          return (
                            (e.aspectRatio = ""
                              .concat(w.width, " / ")
                              .concat(w.height)),
                            e
                          );
                        })(),
                        children: (0, s.jsx)(W.Z, {
                          src: w.url,
                          fetchheight: 1e3,
                          fill: !0,
                          alt: l.name,
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: c()(D().magnifying, D().pcOnly),
                        onClick: B,
                        children: [
                          (0, s.jsx)("div", {
                            className: D().zoomIcon,
                            children: (0, s.jsx)(W.Z, {
                              src: "/simusanji/icon/magnifying_glass.svg",
                              width: 20,
                              height: 20,
                              alt: "zoom",
                            }),
                          }),
                          (0, s.jsx)("p", { children: "GALLERY" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("div", {
              className: c()(D().middleParts, D().smallPcOnly),
              children: [
                (0, s.jsx)("p", {
                  className: c()(
                    D().liverDescription,
                    _ && D().scFontDescription,
                  ),
                  children: P(),
                }),
                "" !== A() &&
                  (0, s.jsx)("div", {
                    className: D().youtube,
                    children: (0, s.jsx)(
                      "iframe",
                      {
                        src: A(),
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                      },
                      A() + "-sp",
                    ),
                  }),
                (0, s.jsxs)("div", {
                  className: D().magnifying,
                  onClick: B,
                  children: [
                    (0, s.jsx)("div", {
                      className: D().zoomIcon,
                      children: (0, s.jsx)(W.Z, {
                        src: "/simusanji/icon/magnifying_glass.svg",
                        width: 20,
                        height: 20,
                        alt: "zoom",
                      }),
                    }),
                    (0, s.jsx)("p", { children: "GALLERY" }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: D().lowerParts,
              children: [
                l.profile.profileItems &&
                  l.profile.profileItems.length > 0 &&
                  (0, s.jsx)("div", {
                    className: D().profile,
                    children: l.profile.profileItems.map((e, n) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: D().row,
                          children: [
                            (0, s.jsx)("div", {
                              className: c()(D().title, _ && D().scFontProfile),
                              children: (0, s.jsx)("p", { children: e.name }),
                            }),
                            (0, s.jsx)("div", {
                              className: c()(
                                D().content,
                                _ && D().scFontProfile,
                              ),
                              children: (0, s.jsx)("p", { children: e.value }),
                            }),
                          ],
                        },
                        n,
                      ),
                    ),
                  }),
                (0, s.jsxs)("div", {
                  className: c()(
                    D().account,
                    (null === (a = l.profile.profileItems) || void 0 === a
                      ? void 0
                      : a.length) === 0
                      ? D().noProfile
                      : "",
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className: D().accountTitle,
                      children: [
                        (0, s.jsx)("p", {
                          className: D().caption,
                          children: "Accounts",
                        }),
                        (0, s.jsx)("div", {
                          className: D().image,
                          children: (0, s.jsx)(W.Z, {
                            src: "/simusanji/icon/external_link_navy.svg",
                            width: "20",
                            height: "20",
                            sizes: "100vw",
                            alt: "accounts",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      children: (0, s.jsx)(o.Ek, {
                        socialLinks: l.socialLinks,
                        fanclubSlug: r,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(m.Yg, { liver: l, isModalOpen: T, onModalToggle: B }),
          ],
        });
      };
      var G = a(43629),
        H = a(72226),
        V = a.n(H);
      let q = (e) => {
        let {
            className: n = "",
            filterBy: a,
            newsList: t,
            isLoading: l,
            currentPage: r,
            totalPages: m,
            onChangeFilter: d,
            onChangePage: _,
          } = e,
          { t: u } = (0, L.$G)(["news"]),
          h = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          x = (0, p.am)(),
          j = (0, i.useCallback)(() => {
            var e;
            null === (e = h.current) ||
              void 0 === e ||
              e.scrollIntoView({ behavior: "smooth", block: "start" });
          }, []);
        return (
          (0, i.useEffect)(() => {
            if (null === f.current) {
              f.current = "".concat(a, ":").concat(r);
              return;
            }
            let [e, n] = f.current.split(":");
            (n !== String(r) && e === a && j(),
              (f.current = "".concat(a, ":").concat(r)));
          }, [r, a, j]),
          (0, s.jsxs)("div", {
            className: c()(n, V().newsTop),
            children: [
              (0, s.jsxs)("div", {
                className: V().inner,
                children: [
                  (0, s.jsx)("div", {
                    ref: h,
                    className: V().titleWrapper,
                    children: (0, s.jsx)(I.V1, {
                      title: "NEWS",
                      className: V().pageTitle,
                    }),
                  }),
                  (0, s.jsx)(o.dL, {
                    className: V().filteringTab,
                    filteringOptions: k.wq,
                    filterBy: a,
                    onChangeFilter: (e) => {
                      e !== a && d(e);
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: c()(V().newsList, l && V().loading),
                    children:
                      0 !== t.length
                        ? (0, s.jsx)(s.Fragment, {
                            children: t.map((e, n) =>
                              (0, s.jsx)(
                                o.ns,
                                {
                                  news: e,
                                  className: V().newsItem,
                                  priority: 0 === n,
                                  isSpWindowWidth: x,
                                },
                                e.id,
                              ),
                            ),
                          })
                        : l
                          ? null
                          : (0, s.jsx)("div", {
                              className: V().emptyMessage,
                              children: u("noNews", {
                                filterByJa:
                                  "all" === a
                                    ? ""
                                    : u((0, G.v)(a, "label"), { ns: "news" }),
                                filterByEn: a,
                                conjunction: "all" === a ? "" : "の",
                                ns: "news",
                              }),
                            }),
                  }),
                  m > 1 &&
                    (0, s.jsx)(o.d8, {
                      className: V().paginationWrapper,
                      currentPage: r,
                      totalPages: m,
                      onChangePage: (e) => {
                        e !== r && _(e);
                      },
                    }),
                ],
              }),
              (0, s.jsx)(o.$_, { defaultScrollToTop: j }),
            ],
          })
        );
      };
      a(66761);
      var Z = a(27484),
        z = a.n(Z),
        J = a(5575),
        K = a(83015),
        Q = a.n(K);
      let X = (e) => {
        var n, a, t;
        let { className: r = "", news: o, newEntries: d } = e,
          p = (0, E.b)(),
          { t: _ } = (0, L.$G)(["news", "common"]),
          u = (0, i.useCallback)(
            () =>
              o.content
                ? o.content.replace(
                    /https:\/\/images\.microcms-assets\.io\/assets\/[^"]+\.(?:png|jpg|jpeg)\?w=[0-9]{1,4}(?:&amp;|&)h=[0-9]{1,4}(?![^\s"'>]+)/g,
                    "$&&fm=webp",
                  )
                : o.content,
            [o.content],
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: c()(r, Q().newsDetail),
              "data-testid": "NewsDetail",
              children: [
                (0, s.jsxs)("div", {
                  className: Q().newsDetailHeader,
                  children: [
                    (0, s.jsxs)(M(), {
                      href: "/news",
                      className: Q().newsListLink,
                      children: ["← ", _("backNewsList", { ns: "news" })],
                    }),
                    (0, s.jsxs)("div", {
                      className: Q().tagWrapper,
                      children: [
                        (0, s.jsx)(I.Wt, {
                          className: c()(Q().tag, "ja" === p ? Q().ja : Q().en),
                          children: _((0, G.R)(o.nijisanjiTags[0], "label"), {
                            ns: "news",
                          })
                            .toString()
                            .toUpperCase(),
                        }),
                        (0, s.jsx)("div", {
                          className: Q().date,
                          children: z()(o.publishedAtForUser).format(
                            "YYYY/MM/DD",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: Q().content,
                  children: [
                    (0, s.jsx)("p", {
                      className: Q().title,
                      children: o.title,
                    }),
                    (0, s.jsx)("div", {
                      className: Q().thumbnailWrapper,
                      children: (0, s.jsx)(W.Z, {
                        src:
                          (null === (n = o.thumbnail) || void 0 === n
                            ? void 0
                            : n.url) ||
                          (null === (a = o.wordPressObject) || void 0 === a
                            ? void 0
                            : a.thumbnailUrl) ||
                          J.nf.DEFAULT_NEWS_IMAGE,
                        alt: o.title,
                        fetchwidth: 1100,
                        fill: !0,
                        priority: !0,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: Q().newsBody,
                      dangerouslySetInnerHTML: {
                        __html:
                          u() ||
                          (null === (t = o.wordPressObject) || void 0 === t
                            ? void 0
                            : t.content) ||
                          "no contents",
                      },
                      "data-testid": "NewsBody",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: Q().newsSlider,
              children: [
                (0, s.jsx)("div", {
                  className: Q().sectionTitleRow,
                  children: (0, s.jsx)(I.NZ, { title: "NEWS ENTRIES" }),
                }),
                (0, s.jsx)(m.SI, { className: Q().slideWrapper, newsList: d }),
                (0, s.jsx)(I.Be, {
                  className: Q().newsListButton,
                  iconType: "forward",
                  buttonType: "rainbow",
                  value: _("linkButton.toNewsList", { ns: "common" }),
                  onClick: () => {
                    l().push("/news");
                  },
                }),
              ],
            }),
          ],
        });
      };
      var $ = a(85413),
        ee = a.n($);
      let en = (e) => {
        let {
            futureOfficialEvents: n,
            historyOfficialEvents: a,
            isLoading: t,
            currentPage: l,
            totalPages: r,
            onChangePage: c,
          } = e,
          { t: m } = (0, L.$G)(["events"]),
          d = (0, i.useRef)(null),
          p = (0, i.useRef)(l);
        return (
          (0, i.useEffect)(() => {
            var e;
            p.current === l ||
              t ||
              (null === (e = d.current) ||
                void 0 === e ||
                e.scrollIntoView({ behavior: "smooth", block: "start" }),
              (p.current = l));
          }, [l, t]),
          (0, s.jsx)("div", {
            className: ee().eventsTop,
            children: (0, s.jsxs)("div", {
              className: ee().eventsInner,
              children: [
                (0, s.jsx)("div", {
                  className: ee().titleWrapper,
                  children: (0, s.jsx)(I.V1, {
                    title: "EVENTS",
                    className: ee().title,
                  }),
                }),
                t &&
                  0 === a.length &&
                  (0, s.jsx)("div", {
                    className: ee().loaderContainer,
                    children: (0, s.jsx)("div", { className: ee().loader }),
                  }),
                (0, s.jsxs)("div", {
                  className: ee().eventsWrapper,
                  "data-testid": "EventsWrapper",
                  children: [
                    (0, s.jsx)(I.j1, {
                      className: ee().articleTitle,
                      title: m("futures.heading", { ns: "events" }),
                    }),
                    (0, s.jsx)("div", {
                      className: ee().futureEventList,
                      children:
                        0 !== n.length
                          ? n.map((e, n) =>
                              (0, s.jsx)(
                                o.hT,
                                { type: "future", event: e, priority: 0 === n },
                                n,
                              ),
                            )
                          : (0, s.jsx)("div", {
                              className: ee().emptyMessage,
                              children: m("futures.noEvents", { ns: "events" }),
                            }),
                    }),
                    (0, s.jsx)("div", {
                      ref: d,
                      children: (0, s.jsx)(I.j1, {
                        className: ee().articleTitle,
                        title: m("histories.heading", { ns: "events" }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: ee().historyEventList,
                      children:
                        0 !== a.length
                          ? a.map((e, n) =>
                              (0, s.jsx)(
                                o.hT,
                                {
                                  type: "history",
                                  event: e,
                                  priority: 0 === n,
                                },
                                n,
                              ),
                            )
                          : null,
                    }),
                    r > 1 &&
                      (0, s.jsx)(o.d8, {
                        className: ee().paginationWrapper,
                        currentPage: l,
                        totalPages: r,
                        onChangePage: c,
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var ea = a(30719);
      a(76831);
      var es = a(52075),
        et = a(80944),
        el = a.n(et);
      let ei = (e) => {
        let {
            streams: n,
            livers: a,
            streamsScheduleSettings: t,
            isAdditionalLoading: l,
            selectedFilter: r,
            display: p,
            platform: _,
            onAdditionalFetch: u,
            onChangeFilter: h,
            onChangeDisplay: f,
            onChangePlatform: x,
            onClickLoginOrRegister: j,
            onClickLiveStreamItem: b,
          } = e,
          v = (0, E.b)(),
          { t: N } = (0, L.$G)(["streams"]);
        es.B.locale(v);
        let [g, y] = (0, i.useState)(!1),
          C = (0, i.useRef)(null),
          w = t.scheduleDaysBeforeToday,
          k = t.scheduleDaysAfterToday,
          T = t.scheduleDaysBeforeToday,
          S = Math.min(Math.max(T, 0), w + k),
          B = [...Array(k + 1)].map((e, n) => (0, es.B)().add(n, "day")),
          A = [...Array(w)].map((e, n) => (0, es.B)().subtract(n + 1, "day"));
        A.reverse();
        let M = A.concat(B).map((e) => ({
            date: e,
            streams: n.filter((n) => (0, es.B)(n["start-at"]).isSame(e, "day")),
          })),
          [O, W] = (0, i.useState)(!1),
          [P, R] = (0, i.useState)(!1),
          [F, U] = (0, i.useState)(!0),
          { currentParrotUser: D } = (0, d.Eu)();
        ((0, i.useEffect)(() => {
          D && U(!1);
        }, [D]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              let n = C.current;
              n && (n.contains(e.target) || y(!1));
            };
            return (
              window.addEventListener("click", e),
              () => window.removeEventListener("click", e)
            );
          }, [C]));
        let Y = (0, i.useCallback)((e) => e - T, [T]),
          G = (0, i.useCallback)(
            (e) => {
              let n = Y(e);
              [n - 1, n, n + 1].forEach((e) => {
                e >= -w && e <= k && u(e);
              });
            },
            [Y, w, k, u],
          );
        return (0, s.jsxs)("div", {
          className: el().liveStream,
          children: [
            (0, s.jsxs)("div", {
              className: el().headerBlock,
              children: [
                (0, s.jsx)("header", {
                  className: el().header,
                  children: (0, s.jsxs)("p", {
                    className: el().pageTitle,
                    children: [
                      (0, s.jsx)("span", { children: "LIVE" }),
                      " STREAMS",
                    ],
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: el().filterArea,
                  ref: C,
                  children: [
                    (0, s.jsx)(m.KM, {
                      selectedFilter: r,
                      onChangeFilter: h,
                      onClickLoginOrRegister: j,
                      onCloseFilterModal: () => y(!1),
                    }),
                    (0, s.jsxs)("div", {
                      className: el().filterWrapper,
                      children: [
                        (0, s.jsx)(o.DU, {
                          label: (() => {
                            let e = N("filterModal.display.".concat(p), {
                                ns: "streams",
                              }),
                              n = N("filterModal.platform.".concat(_), {
                                ns: "streams",
                              });
                            return "".concat(e, " / ").concat(n);
                          })(),
                          onClick: () => y(!g),
                          className: c()(
                            el().filterButton,
                            g ? el().active : "",
                          ),
                        }),
                        g &&
                          (0, s.jsx)(o.Pt, {
                            className: el().filterModal,
                            display: p,
                            platform: _,
                            onApply: (e, n) => {
                              (f(e), x(n), y(!1));
                            },
                            onReset: () => {
                              (f("list"), x("all"), y(!1));
                            },
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(ea.tq, {
              spaceBetween: 0,
              slidesPerView: "auto",
              initialSlide: S,
              onSlideChange: (e) => {
                (W(e.isBeginning), R(e.isEnd), G(e.activeIndex));
              },
              onReachEnd: () => {
                R(!0);
              },
              simulateTouch: !1,
              className: el().swiper,
              children: [
                (0, s.jsx)(s.Fragment, {
                  children: M.map((e, n) =>
                    (0, s.jsxs)(
                      ea.o5,
                      {
                        className: el().slide,
                        children: [
                          (0, s.jsxs)("div", {
                            className: el().dates,
                            children: [
                              0 !== n &&
                                (0, s.jsx)("p", {
                                  className: c()(el().beforeDate, el().spOnly),
                                  children: (0, es.B)(e.date)
                                    .subtract(1, "day")
                                    .format("MM/DD"),
                                }),
                              (0, s.jsx)(I.Vb, {
                                date: (0, es.B)(e.date).format("MM/DD"),
                                day: (0, es.B)(e.date).format("ddd"),
                                isToday: n === T,
                                className: el().date,
                              }),
                              n !== M.length - 1 &&
                                (0, s.jsx)("p", {
                                  className: c()(el().afterDate, el().spOnly),
                                  children: (0, es.B)(e.date)
                                    .add(1, "day")
                                    .format("MM/DD"),
                                }),
                            ],
                          }),
                          (0, s.jsx)(m.Ov, {
                            date: e.date,
                            streams: e.streams,
                            livers: a,
                            isToday: n === T,
                            isWide: n - T <= 0,
                            display: p,
                            onClickLiveStreamItem: b,
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
                (0, s.jsx)("div", {
                  className: el().paginationWrapper,
                  children: (0, s.jsxs)("div", {
                    className: el().inner,
                    children: [
                      (0, s.jsx)(() => {
                        let e = (0, ea.oc)();
                        return (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(I.tl, {
                              to: "prev",
                              onClick: () => e.slidePrev(),
                              disabled: O || l,
                              iconType: "bracketsCircle",
                              className: el().pcOnly,
                            }),
                            !O &&
                              (0, s.jsx)(I.tl, {
                                to: "prev",
                                onClick: () => e.slidePrev(),
                                disabled: O || l,
                                iconType: "bracketsGray",
                                className: c()(el().prev, el().spOnly),
                              }),
                          ],
                        });
                      }, {}),
                      (0, s.jsx)(() => {
                        let e = (0, ea.oc)();
                        return (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(I.tl, {
                              to: "next",
                              onClick: () => e.slideNext(),
                              disabled: P || l,
                              iconType: "bracketsCircle",
                              className: el().pcOnly,
                            }),
                            !P &&
                              (0, s.jsx)(I.tl, {
                                to: "next",
                                onClick: () => e.slideNext(),
                                disabled: P || l,
                                iconType: "bracketsGray",
                                className: c()(el().next, el().spOnly),
                              }),
                          ],
                        });
                      }, {}),
                    ],
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: el().suggestLoginModal,
              children: (0, s.jsx)(o.DS, {
                mainText: N("suggestLogin", { ns: "streams" }),
                visible: F,
                onClickLoginOrRegister: j,
                closeModal: () => {
                  U(!1);
                },
              }),
            }),
          ],
        });
      };
      var er = a(34568),
        ec = a.n(er);
      let eo = (e) => {
        let {
            calendarEventsByYearMonth: n,
            fetchedTargetYearMonth: a,
            holidays: t,
            filterBy: l,
            isAdditionalLoading: r,
            onAdditionalFetch: d,
            onClickFilter: p,
            onClickResetFilter: _,
          } = e,
          { t: u } = (0, L.$G)(["calendar"]),
          h = (0, es.B)(a)
            .startOf("month")
            .diff((0, es.B)().startOf("month").subtract(2, "month"), "month"),
          [f, x] = (0, i.useState)(null),
          [j, b] = (0, i.useState)(!1),
          [v, N] = (0, i.useState)(!1),
          [g, y] = (0, i.useState)(!1),
          [C, w] = (0, i.useState)(h),
          k = (0, i.useRef)(null),
          T = (0, i.useRef)(Array(9).fill(!1)),
          S = (e) => {
            let a = n[e].yearMonth,
              s = (0, es.B)(a).startOf("month");
            return (0, es.B)(a).endOf("month").diff(s, "days") + 1;
          },
          B = (e, a) =>
            n[a].events.filter((n) =>
              (0, es.B)(n.dateStart).isSame((0, es.B)(e), "day"),
            );
        return (
          (0, i.useEffect)(() => {
            [void 0, void 0, void 0].forEach((e, n) => {
              T.current[h + n - 1] = !0;
            });
          }, [h]),
          (0, i.useEffect)(() => {
            let e = T.current[C - 1],
              a = T.current[C + 1];
            (e ||
              0 === C ||
              (d((0, es.B)(n[C - 1].yearMonth).format("YYYY-MM")),
              (T.current[C - 1] = !0)),
              a ||
                8 === C ||
                (d((0, es.B)(n[C + 1].yearMonth).format("YYYY-MM")),
                (T.current[C + 1] = !0)));
          }, [9, C, n, d]),
          (0, i.useEffect)(() => {
            let e = (e) => {
              let n = k.current;
              n && (n.contains(e.target) || y(!1));
            };
            return (
              window.addEventListener("click", e),
              () => window.removeEventListener("click", e)
            );
          }, [k]),
          (0, i.useEffect)(() => {
            f && f.updateAutoHeight();
          }, [n]),
          (0, s.jsxs)("div", {
            className: ec().calendar,
            "data-testid": "CalendarTop",
            children: [
              (0, s.jsxs)("div", {
                className: ec().sortWrapper,
                ref: k,
                children: [
                  (0, s.jsxs)(I.zx, {
                    className: c()(ec().sortButton, g ? ec().active : ""),
                    onClick: () => y(!g),
                    children: [
                      (0, s.jsx)("p", {
                        className: ec().sortLabel,
                        children: l.length
                          ? l.join(",")
                          : u("sortModal.all", { ns: "calendar" }),
                      }),
                      (0, s.jsx)("div", {
                        className: ec().sortIcon,
                        children: (0, s.jsx)(W.Z, {
                          src: "/simusanji/icon/talent-sort.svg",
                          fill: !0,
                          alt: "sort button",
                        }),
                      }),
                    ],
                  }),
                  g &&
                    (0, s.jsx)(o.SJ, {
                      className: ec().sortModal,
                      filterBy: l,
                      onClickFilter: (e) => {
                        (p(e), y(!1));
                      },
                      onClickResetFilter: () => {
                        (_(), y(!1));
                      },
                    }),
                ],
              }),
              (0, s.jsxs)(ea.tq, {
                className: ec().swiper,
                autoHeight: !0,
                spaceBetween: 0,
                slidesPerView: "auto",
                initialSlide: h,
                onSwiper: x,
                onSlideChange: (e) => {
                  (b(e.isBeginning), N(e.isEnd), w(e.activeIndex));
                },
                simulateTouch: !1,
                children: [
                  n.map((e, n) =>
                    (0, s.jsxs)(
                      ea.o5,
                      {
                        className: ec().swiperSlide,
                        children: [
                          (0, s.jsx)("p", {
                            className: ec().pageTitle,
                            children: (0, es.B)(e.yearMonth).format(
                              u("headingDateFormat", { ns: "calendar" }),
                            ),
                          }),
                          [...Array(S(n))].map((a, l) => {
                            let i = ""
                              .concat(
                                (0, es.B)(e.yearMonth).format("YYYY-MM"),
                                "-",
                              )
                              .concat(l + 1);
                            return (0, s.jsx)(
                              m.jO,
                              {
                                events: B(i, n),
                                date: (0, es.B)(i),
                                holidays: t,
                              },
                              i,
                            );
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                  (0, s.jsx)("div", {
                    className: ec().paginationWrapper,
                    children: (0, s.jsxs)("div", {
                      className: ec().inner,
                      children: [
                        (0, s.jsx)(() => {
                          let e = (0, ea.oc)();
                          return (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(I.tl, {
                                to: "prev",
                                onClick: () => e.slidePrev(),
                                disabled: j || r,
                                iconType: "bracketsCircle",
                                className: ec().pcOnly,
                              }),
                              !j &&
                                (0, s.jsx)(I.tl, {
                                  to: "prev",
                                  onClick: () => e.slidePrev(),
                                  disabled: j || r,
                                  iconType: "bracketsGray",
                                  className: ec().spOnly,
                                }),
                            ],
                          });
                        }, {}),
                        (0, s.jsx)(() => {
                          let e = (0, ea.oc)();
                          return (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)(I.tl, {
                                to: "next",
                                onClick: () => e.slideNext(),
                                disabled: v || r,
                                iconType: "bracketsCircle",
                                className: ec().pcOnly,
                              }),
                              !v &&
                                (0, s.jsx)(I.tl, {
                                  to: "next",
                                  onClick: () => e.slideNext(),
                                  disabled: v || r,
                                  iconType: "bracketsGray",
                                  className: c()(ec().spOnly, ec().next),
                                }),
                            ],
                          });
                        }, {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var em = a(55472),
        ed = a.n(em);
      let ep = (e) => {
        let { programList: n } = e,
          a = n.filter((e) => "nijisanji-official" === e.slug)[0],
          t = n.filter((e) => "nijisanji-en-official" === e.slug)[0],
          l = n.filter(
            (e) =>
              "nijisanji-official" !== e.slug &&
              "nijisanji-en-official" !== e.slug,
          );
        return (0, s.jsxs)("div", {
          className: ed().officialPrograms,
          "data-testid": "OfficialProgramsTop",
          children: [
            (0, s.jsx)(I.V1, {
              className: ed().pageTitle,
              title: "OFFICIAL PROGRAMS",
            }),
            void 0 !== a &&
              (0, s.jsxs)("div", {
                className: ed().channelListWrapper,
                children: [
                  (0, s.jsx)(o.a4, {
                    className: ed().channelName,
                    iconUrl: a.icon.url,
                    channelName: a.name,
                    channelUrl: a.url,
                  }),
                  (0, s.jsx)("div", {
                    className: ed().channelList,
                    children: a.playlists.map((e, n) =>
                      (0, s.jsx)(
                        o.y_,
                        { className: ed().channel, playlist: e },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
            void 0 !== t &&
              (0, s.jsxs)("div", {
                className: ed().channelListWrapper,
                children: [
                  (0, s.jsx)(o.a4, {
                    className: ed().channelName,
                    iconUrl: t.icon.url,
                    channelName: t.name,
                    channelUrl: t.url,
                  }),
                  (0, s.jsx)("div", {
                    className: ed().channelList,
                    children: t.playlists.map((e, n) =>
                      (0, s.jsx)(
                        o.y_,
                        { className: ed().channel, playlist: e },
                        n,
                      ),
                    ),
                  }),
                ],
              }),
            l.length > 0 &&
              (0, s.jsx)("div", {
                className: ed().otherChannels,
                children: l.map((e) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: ed().otherChannel,
                      children: [
                        (0, s.jsx)(o.a4, {
                          className: ed().channelName,
                          iconUrl: e.icon.url,
                          channelName: e.name,
                          channelUrl: e.url,
                        }),
                        (0, s.jsx)(o.y_, { playlist: e.playlists[0] }),
                      ],
                    },
                    e.slug,
                  ),
                ),
              }),
          ],
        });
      };
      var e_ = a(46960),
        eu = a.n(e_);
      let eh = () =>
        (0, s.jsxs)("div", {
          className: eu().termsOfUse,
          "data-testid": "TermsOfUse",
          children: [
            (0, s.jsx)("h1", {
              className: eu().pageTitle,
              children: "利用規約",
            }),
            (0, s.jsx)("section", {
              className: eu().section,
              children: (0, s.jsx)("p", {
                className: eu().content,
                children:
                  "本規約には、当社が提供するにじさんじポータル（以下「本サービス」といいます。）の利用の条件やユーザーの皆様と当社との間の権利義務関係が定められています。本サービスをご利用いただくためには、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要がございます。なお、本サービスのご利用を開始した時点で、ユーザーは本規約の内容に同意をしたものと取り扱わせていただきます。",
              }),
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１条（定義）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "本規約において使用する用語の定義は、下記のとおりとします。",
                    (0, s.jsx)("br", {}),
                    "　　⑴　当　　　社：ANYCOLOR株式会社",
                    (0, s.jsx)("br", {}),
                    "　　⑵　ANYCOLOR ID：当社が提供する各種サービスで利用可能な統合アカウント",
                    (0, s.jsx)("br", {}),
                    "　　⑶　ユーザー：本サービスを利用する者",
                    (0, s.jsx)("br", {}),
                    "　　⑷　本　契　約：ユーザーと当社との間で締結される、本サービスの利用に関する一切の契約",
                    (0, s.jsx)("br", {}),
                    "　　⑸　ユーザー専用サイト：そのドメインがnijisanji.jpである、当社が運営するウェブサイト（理由の如何を問わず、ウェブサイトのドメインまたは内容が変更された場合は、当該変更後のウェブサイトを含みます。）",
                    (0, s.jsx)("br", {}),
                    "　　⑹　登録情報：ANYCOLOR IDへの登録の申請の際に当社に対して提供する情報として当社が定めるもの",
                    (0, s.jsx)("br", {}),
                    "　　⑺　知的財産権：著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）",
                    (0, s.jsx)("br", {}),
                    "　　⑻　反社会的勢力：現在、暴力団、暴力団員、暴力団員でなくなったときから５年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第２条（適用）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　本規約は、本サービスの利用に関する一切の場合について適用されます。",
                    (0, s.jsx)("br", {}),
                    "２　本規約のほか、当社が定め、当社ウェブサイト上で掲載する、本サービスを利用するためのルール及び各種規程（ヘルプや投稿を含みます。）は、本契約の一部を構成するものとします。",
                    (0, s.jsx)("br", {}),
                    "３　本規約の内容と前項に定めるルール、各種規程、その他の本規約外における説明とが異なる場合は、本規約の規定が優先して適用されるものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第３条（本サービスの概要）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　ユーザーは、ANYCOLOR IDを利用しログインをしたうえで、本サービスを利用することができます。また、同ログインをせずに本サービスを利用することも可能ですが、その場合には、利用できるサービスに制限がかかることがございます。",
                    (0, s.jsx)("br", {}),
                    "２　本サービスは、ANYCOLOR IDに紐づくサービス（『にじさんじFUN CLUB』、『にじさんじオフィシャルストア』。ただし、サービスの名称が変更された場合には名称変更後のサービスを意味します。以下同じ。）のポータルサービスです。なお、本サービスの内容は、適宜更新される可能性があります。",
                    (0, s.jsx)("br", {}),
                    "３　本サービスの内容、利用条件等は、別途当社にて定めるものとします。",
                    (0, s.jsx)("br", {}),
                    "４　本サービスは、当社の判断により、変更、廃止、配信停止等の措置がなされることがあります。",
                    (0, s.jsx)("br", {}),
                    "５　ユーザーがANYCOLOR IDを利用してログインをしたうえで、本サービスを利用した場合には、当社は、ANYCOLOR IDに紐づくサービス内におけるユーザーのアクセスログを収集し、同情報を用いてユーザーへの各種サービスの提案を行うことがあります。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第４条（通知）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社がユーザーに対して行う、本規約の変更等のご案内その他の本契約に関して必要な情報の通知は、ユーザー専用サイトへの掲載、電子メールの送信、その他当社が適切と認める方法により行うものとします。",
                    (0, s.jsx)("br", {}),
                    "２　前項に規定する通知は、本規約に別段の定めがある場合を除き、次の各号に掲げる時点をもって、完了したものとします。",
                    (0, s.jsx)("br", {}),
                    "　　⑴　当該通知がユーザー専用サイトへの掲載をもって行われる場合",
                    (0, s.jsx)("br", {}),
                    "　　　　当該通知がユーザー専用サイトに表示され、ユーザーにおいて閲覧し得る状態となった時点",
                    (0, s.jsx)("br", {}),
                    "　　⑵　当該通知が電子メールの送信によって行われる場合",
                    (0, s.jsx)("br", {}),
                    "　　　　当該時点において登録されているユーザーの電子メールアドレス宛に電子メールが送信された時点",
                    (0, s.jsx)("br", {}),
                    "　　⑶　当該通知がユーザーが届け出た連絡先への送付によって行われる場合",
                    (0, s.jsx)("br", {}),
                    "　　　　当該通知がユーザーの連絡先へ到達した時点",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第５条（禁止事項）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "ユーザーは、以下の各号のいずれかに該当する行為及び当該行為の準備・誘発行為、または当該行為に該当すると当社が判断する行為をしてはなりません。",
                    (0, s.jsx)("br", {}),
                    "　　⑴　法令に違反する行為、犯罪行為に関連する行為または公序良俗に反する行為",
                    (0, s.jsx)("br", {}),
                    "　　⑵　当社、他のユーザーまたはその他の第三者に対する詐欺または脅迫行為",
                    (0, s.jsx)("br", {}),
                    "　　⑶　当社、他のユーザーまたはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為",
                    (0, s.jsx)("br", {}),
                    "　　⑷　当社による本サービスの運用を妨害するおそれのある行為",
                    (0, s.jsx)("br", {}),
                    "　　⑸　当社のネットワークまたはシステム等に不正にアクセスし、または不正なアクセスを試みる行為",
                    (0, s.jsx)("br", {}),
                    "　　⑹　第三者に成りすます行為",
                    (0, s.jsx)("br", {}),
                    "　　⑺　他のユーザーのユーザーＩＤまたはパスワードを利用する行為",
                    (0, s.jsx)("br", {}),
                    "　　⑻　他のユーザーの情報を収集する行為",
                    (0, s.jsx)("br", {}),
                    "　　⑼　当社、他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為",
                    (0, s.jsx)("br", {}),
                    "　　⑽　本規約及びユーザー専用サイト上で掲載するルール、各種規定に抵触する行為",
                    (0, s.jsx)("br", {}),
                    "　　⑾　反社会的勢力等へ利益を供与する行為",
                    (0, s.jsx)("br", {}),
                    "　　⑿　前各号の行為を直接または間接に惹起し、または容易にする行為",
                    (0, s.jsx)("br", {}),
                    "　　⒀　本サービスのプログラム解析、逆アセンブル、逆コンパイルその他のリバースエンジニアリング",
                    (0, s.jsx)("br", {}),
                    "　　⒁　その他、当社が不適切と判断する行為",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第６条（ANYCOLOR IDの停止等）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　以下の各号のいずれかに該当する場合には、当社がユーザーに対して本サービスを提供する義務の全部または一部は、当該事由が解消するまでの間消滅するものとし、当社は、ユーザーに対する事前の通知やユーザーからの承諾を受けることなく、本サービスの全部または一部の提供を停止または中断することができるものとします。",
                    (0, s.jsx)("br", {}),
                    "　　⑴　コンピューター・システム（当社が第三者の提供に係るシステムを利用している場合には、当該システムを含みます。）の点検または保守作業を緊急に行う場合",
                    (0, s.jsx)("br", {}),
                    "　　⑵　コンピューター、通信回線等が事故により停止した場合",
                    (0, s.jsx)("br", {}),
                    "　　⑶　地震、落雷、火災、風水害、停電、天変地変などの不可抗力によりANYCOLOR IDの運用ができなくなった場合",
                    (0, s.jsx)("br", {}),
                    "　　⑷　その他、当社が停止または中断を必要と判断した場合",
                    (0, s.jsx)("br", {}),
                    "２　当社は、前項に基づき当社が行った措置に基づきユーザーに生じた損害については責任を負いません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第７条（反社会的勢力の排除）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社及びユーザーは、自己または自己の代理人もしくは媒介をする者が、反社会的勢力に該当しないこと、及び次の各号のいずれにも該当しないことを表明、保証し、かつ将来にわたっても該当しないことを相互に確約します。",
                    (0, s.jsx)("br", {}),
                    "　　⑴　反社会的勢力が経営を支配していると認められる関係を有すること",
                    (0, s.jsx)("br", {}),
                    "　　⑵　反社会的勢力が経営に実質的に関与していると認められる関係を有すること",
                    (0, s.jsx)("br", {}),
                    "　　⑶　自己もしくは第三者の不正の利益を図る目的または第三者に損害を加える目的をもってするなど、不当に反社会的勢力を利用していると認められる関係を有すること",
                    (0, s.jsx)("br", {}),
                    "　　⑷　反社会的勢力に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有すること",
                    (0, s.jsx)("br", {}),
                    "　　⑸　役員または経営に実質的に関与している者が反社会的勢力と社会的に非難されるべき関係を有すること",
                    (0, s.jsx)("br", {}),
                    "２　当社及びユーザーは、前項の確約に反して、相手方当事者または相手方当事者の代理もしくは媒介をする者が反社会的勢力あるいは前項各号の一つにでも該当することが判明したときは、何らの催告を要せず、直ちに本契約を解除することができるものとします。",
                    (0, s.jsx)("br", {}),
                    "３　当社またはユーザーが前項の規定により契約を解除した場合には、解除により相手方に生じた損害の一切について賠償する義務を負わないものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第８条（権利帰属）",
                }),
                (0, s.jsx)("p", {
                  className: eu().content,
                  children:
                    "本サービスに関連する一切の知的財産権は、当社または当社にライセンスを許諾している第三者に帰属します。ユーザーは、知的財産権を侵害する一切の行為が禁じられます。また、本サービスの利用の許諾は、当社または当社にライセンスを許諾している第三者の上記知的財産権の使用許諾を意味するものではありません。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第９条（登録抹消等）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社は、ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、当該ユーザーについて本サービスの利用を一時的に停止することがあります。なお、当社は、ユーザーが以下の各号に該当するか否かの判断が完了するまでの間においても、本条記載の必要な措置を講じることができるものとします。",
                    (0, s.jsx)("br", {}),
                    "　　⑴　本契約のいずれかの条項に違反した場合",
                    (0, s.jsx)("br", {}),
                    "　　⑵　登録情報に虚偽の事実があることが判明した場合",
                    (0, s.jsx)("br", {}),
                    "　　⑶　支払停止もしくは支払不能となり、または破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始もしくはこれらに類する手続の開始の申立てがあった場合",
                    (0, s.jsx)("br", {}),
                    "　　⑷　当社からの問い合わせその他の回答を求める連絡に対して１か月以上応答がない場合",
                    (0, s.jsx)("br", {}),
                    "　　⑸　第５条各号に規定する事項に該当する場合",
                    (0, s.jsx)("br", {}),
                    "　　⑹　その他、当社が本サービスの利用を適当でないと判断した場合",
                    (0, s.jsx)("br", {}),
                    "２　当社は、本条に基づき当社が行った行為によりユーザーに生じた損害については責任を負いません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１０条（本サービス等の内容の変更、終了）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社は、当社の判断により、本サービスの仕様を変更し、またはその提供を終了することができます。当社が本サービスの提供を終了する場合、当社はユーザーに事前に通知するものとします。",
                    (0, s.jsx)("br", {}),
                    "２　当社は、本条に基づき当社が行った措置に基づきユーザーに生じた損害については責任を負いません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１１条（損害賠償）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　ユーザーは、本サービスの利用に関して、自己の責めに帰すべき事由により当社またはその他の第三者に対して損害を与えた場合、これを賠償する責任を負います。",
                    (0, s.jsx)("br", {}),
                    "２　ユーザーは、本サービスの利用に関して、他のユーザーまたはその他の第三者からクレームや請求を受けまたは紛争が生じた場合、自己の責任と費用負担でこれを解決するものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１２条（保証の否認及び免責）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社は、本サービスの仕様、そこで提供する情報等に関し、その完全性、正確性、最新性、その他いかなる保証も行うものではありません。",
                    (0, s.jsx)("br", {}),
                    "２　当社は、本サービスの利用、各種情報の提供に関して発生したユーザーの直接または間接の損害につき、当該損害が当社の責めに帰すべき事由により発生した場合を除き、いかなる責任も負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "３　当社は、当社による本サービスの提供の中断または停止、ユーザーが本サービスに関して送信したメッセージまたは情報の削除または消失、本サービスの利用による登録データの消失または機器の故障もしくは損傷、その他の事情によりユーザーが被った損害につき、当該損害が当社の責めに帰すべき事由により発生した場合を除き、いかなる責任も負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "４　ユーザーがパーソナルコンピューター等の本サービスを利用するうえで必要となるデジタル機器やインターネット環境を利用しないことによって、本サービスを利用できない場合や情報伝達の遅れなどの不都合が生じた場合につき、当社はいかなる責任も負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "５　当社が通知したお知らせに対して、ユーザーが申込期限内に申し込まなかった場合（ユーザーがお知らせを確認しないまま期限を過ぎた場合を含みます。）には、申込の権利は失効し、ユーザーは一切の異議を申し述べることができないものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１３条（秘密保持）",
                }),
                (0, s.jsx)("p", {
                  className: eu().content,
                  children:
                    "ユーザーは、当社がユーザーに対して秘密に取り扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取り扱うものとし、第三者に開示することはできないものとします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１４条（利用者情報の取扱い）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社によるユーザーの情報の取扱いについては、別途に定める当社プライバシーポリシー（https://www.anycolor.co.jp/privacy/）によるものとし、ユーザーは、当社がこのプライバシーポリシーに従ってユーザーの情報を取扱うことについて同意するものとします。",
                    (0, s.jsx)("br", {}),
                    "２　当社は、ユーザーが当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、ユーザーはこれに異議を唱えないものとします。",
                    (0, s.jsx)("br", {}),
                    "３　当社は、サーバの稼動状況や統計障害情報の分析、ユーザー利便性向上のためのサイトマーケティングへの利用を目的として、Google Analytics・Sentry等を使用し、ユーザーのアクセスログ・操作画面等の収集・解析を行い、ユーザーは、このユーザーのアクセスログ・操作画面等の収集・解析について同意するものとします。",
                    (0, s.jsx)("br", {}),
                    "４　この他、ユーザーが当社の各種サービス利用登録時に当社に送信した情報、ユーザーが当社の各種サービスを利用するために登録情報のほかに追加で送信した情報、全ユーザーのサービスの利用状況に関する情報は、当社のデータベースに蓄積され、同データベースは当社にその権利が帰属します。ユーザーは、当社が同データベースを当社のプライバシーポリシーに定める利用目的の範囲内で当社が提供する各種サービスの運用に利用できることを承諾します。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１５条（第三者サービスの利用の同意）",
                }),
                (0, s.jsx)("p", {
                  className: eu().content,
                  children:
                    "ユーザーは、本サービスを利用することによりYouTubeの利用規約（https://www.youtube.com/t/terms）にもご同意いただいたものとみなします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１６条（本規約等の変更）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　当社は、本規約を変更、追加、削除等（以下「変更等」といいます。）することがあります。",
                    (0, s.jsx)("br", {}),
                    "２　当社は、前項に基づき本規約を変更等する場合には、ユーザーに対し、相当期間前までに、当社の定める方法により変更等の内容及び変更後の本規約の効力発生時期を通知するものとします。",
                    (0, s.jsx)("br", {}),
                    "３　第１項に定める本規約の変更が、ユーザーの利益に適合するものである場合または本規約の目的に反せず、かつ、合理的なものである場合には、ユーザーが本規約の変更に同意したものとみなし、前項に定める変更後の本規約の効力発生時期より、変更後の本規約の効力が発生するものとします。",
                    (0, s.jsx)("br", {}),
                    "４　前項の規定にかかわらず、第２項に定める変更後の本規約の効力発生時期以降に、ユーザーが本サービスを利用した場合には、ユーザーは、本規約の変更に同意したものとみなします。",
                    (0, s.jsx)("br", {}),
                    "５　ユーザーは、自己の責任において、随時、本規約の最新の内容を確認のうえ、本サービスの利用を行うものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１７条（連絡／通知）",
                }),
                (0, s.jsx)("p", {
                  className: eu().content,
                  children:
                    "本サービスに関する問い合わせその他ユーザーから当社に対する連絡は、当社の定める方法で行うものとします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１８条（本サービスの利用者たる地位の譲渡等）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　ユーザーは、当社の書面による事前の承諾なく、本サービスの利用者たる地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。",
                    (0, s.jsx)("br", {}),
                    "２　当社は、本サービスに係る事業を他者に譲渡した場合には、当該事業譲渡に伴い本契約上の地位、本契約に基づく権利及び義務並びにユーザーの登録事項登録情報その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、ユーザーは、係る譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第１９条（分離可能性）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　本規約のいずれかの条項またはその一部が、法令に基づいて無効または執行不能と判断された場合であっても、本規約の残りの規定及び無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。",
                    (0, s.jsx)("br", {}),
                    "２　本規約等の規定の一部がある利用者との関係で無効とされまたは取り消された場合でも、本規約等はその他の利用者との関係では有効とします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第２０条（準拠法及び管轄裁判所）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　本契約の準拠法は日本法とします。",
                    (0, s.jsx)("br", {}),
                    "２　本契約に起因し、または関連する一切の紛争については、東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().title,
                  children: "第２１条（権利侵害の場合の取扱い）",
                }),
                (0, s.jsxs)("p", {
                  className: eu().content,
                  children: [
                    "１　本サービスの利用に関して、ご自身の権利が侵害されている場合または第三者の権利侵害をした場合には、当該権利の種類・内容、侵害態様、相手方及びご自身の氏名・住所電話番号を当社までご連絡ください。",
                    (0, s.jsx)("br", {}),
                    "２　前項に基づきご連絡いただいたとしても、当社が何らかの行為を行うことを保証するものではありません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eu().section,
              children: [
                (0, s.jsx)("p", {
                  className: eu().content,
                  children: "【2022年11月8日制定】",
                }),
                (0, s.jsx)("p", {
                  className: eu().content,
                  children: "【2024年5月7日改定】",
                }),
                (0, s.jsx)("p", {
                  className: eu().content,
                  children: "【2024年8月26日改定】",
                }),
              ],
            }),
          ],
        });
      var ef = a(23433),
        ex = a.n(ef);
      let ej = (e) => {
        let {
            contactFrom: n,
            contactInput: a,
            contactInputError: t,
            onChangeContactFrom: l,
            onChangeContactInput: i,
            openPrivacyModal: r,
            confirm: o,
          } = e,
          { t: d } = (0, L.$G)(["contact"]),
          p = "company" === n ? ex().companySelected : ex().ordinarySelected;
        return (0, s.jsxs)("div", {
          className: ex().contact,
          children: [
            (0, s.jsx)(I.V1, { className: ex().title, title: "CONTACT" }),
            (0, s.jsx)("div", {
              className: ex().switchButton,
              children: (0, s.jsxs)("div", {
                className: c()(ex().switchInner, p),
                children: [
                  (0, s.jsxs)("div", {
                    className: ex().checkboxWrap,
                    children: [
                      (0, s.jsx)("input", {
                        className: ex().checkbox,
                        type: "checkbox",
                        onChange: () => {
                          l("company");
                        },
                        checked: "company" === n,
                        id: "company",
                      }),
                      (0, s.jsx)("label", {
                        className: ex().label,
                        htmlFor: "company",
                        children: d("customerType.companies", {
                          ns: "contact",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: ex().checkboxWrap,
                    children: [
                      (0, s.jsx)("input", {
                        className: ex().checkbox,
                        type: "checkbox",
                        onChange: () => {
                          l("ordinary");
                        },
                        checked: "ordinary" === n,
                        id: "ordinary",
                      }),
                      (0, s.jsx)("label", {
                        className: ex().label,
                        htmlFor: "ordinary",
                        children: d("customerType.ordinary", { ns: "contact" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(m.Rn, { className: ex().upperPart }),
            (0, s.jsx)(m.LD, {
              className: ex().step,
              step: 1,
              stepTranslationKey: "steps",
            }),
            "company" === n
              ? (0, s.jsx)(m.W7, {
                  className: ex().form,
                  contactInput: a,
                  contactInputError: t,
                  onChangeContactInput: i,
                })
              : (0, s.jsx)(m.oS, {
                  className: ex().form,
                  contactInput: a,
                  contactInputError: t,
                  onChangeContactInput: i,
                }),
            (0, s.jsx)(m.j$, { className: ex().privacy, openPrivacyModal: r }),
            (0, s.jsx)("button", {
              className: ex().confirm,
              onClick: o,
              children: d("button.confirm", { ns: "contact" }),
            }),
          ],
        });
      };
      var eb = a(54861),
        ev = a.n(eb);
      let eN = (e) => {
        let {
            contactFrom: n,
            contact: a,
            openPrivacyModal: t,
            goBackToInput: l,
            submit: r,
          } = e,
          { t: c } = (0, L.$G)(["contact", "common"]),
          o = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            o &&
              o.current &&
              o.current.scrollIntoView({ behavior: "smooth", block: "center" });
          }, [o]),
          (0, s.jsxs)("div", {
            className: ev().contact,
            children: [
              (0, s.jsx)(I.V1, { className: ev().title, title: "CONTACT" }),
              (0, s.jsx)(m.Rn, { className: ev().upperPart }),
              (0, s.jsx)("div", {
                ref: o,
                children: (0, s.jsx)(m.LD, {
                  className: ev().step,
                  step: 2,
                  stepTranslationKey: "steps",
                }),
              }),
              "company" === n
                ? (0, s.jsx)(m.zp, { className: ev().confirm, contact: a })
                : (0, s.jsx)(m.WW, { className: ev().confirm, contact: a }),
              (0, s.jsx)(m.j$, {
                className: ev().privacy,
                openPrivacyModal: t,
              }),
              (0, s.jsxs)("div", {
                className: ev().buttonsWrapper,
                children: [
                  (0, s.jsx)("button", {
                    className: ev().back,
                    onClick: l,
                    children: c("button.back", { ns: "contact" }),
                  }),
                  (0, s.jsx)("button", {
                    className: ev().submit,
                    onClick: r,
                    children: c("button.send", { ns: "contact" }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var eg = a(70062),
        ey = a.n(eg);
      let eC = (e) => {
          let { isAppClient: n, cameFromMembershipRequest: a = !1 } = e,
            { t: l } = (0, L.$G)(["contact"]),
            { currentAlbUser: r } = (0, d.Eu)(),
            { query: o } = (0, t.useRouter)(),
            p = (0, i.useRef)(null),
            _ = (null == o ? void 0 : o.fanclub) === "true",
            u = null == r ? void 0 : r.nick_name,
            h = null == r ? void 0 : r.email;
          return (
            (0, i.useEffect)(() => {
              p &&
                p.current &&
                p.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
            }, [p]),
            (0, s.jsxs)("div", {
              className: c()(ey().contact, n && ey().app),
              "data-testid": "ContactComplete",
              children: [
                (0, s.jsx)(I.V1, {
                  className: ey().title,
                  title: a
                    ? "ファンクラブ 会員証お申し込み"
                    : _
                      ? "FANCLUB CONTACT"
                      : "CONTACT",
                }),
                (0, s.jsx)(m.Rn, { showNotes: !1 }),
                (0, s.jsx)("div", {
                  ref: p,
                  children: (0, s.jsx)(m.LD, {
                    step: 3,
                    className: ey().step,
                    stepTranslationKey: a ? "membership-card-steps" : "steps",
                  }),
                }),
                _
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsxs)("ul", {
                          className: ey().text,
                          children: [
                            (0, s.jsx)("li", {
                              children: "".concat(
                                r ? "以下の" : "",
                                "ANYCOLOR IDに登録されたメールアドレスに回答をお送りします。",
                              ),
                            }),
                            (0, s.jsx)("li", {
                              children:
                                "support-fanclub@anycolor.co.jp からのメールを受信できるように設定をご確認ください。",
                            }),
                          ],
                        }),
                        r &&
                          (0, s.jsxs)("div", {
                            className: ey().userInfo,
                            children: [
                              (0, s.jsxs)("ul", {
                                children: [
                                  (0, s.jsx)("li", {
                                    className: ey().userInfoItem,
                                    children: "".concat(u, " 様"),
                                  }),
                                  (0, s.jsx)("li", {
                                    className: ey().userInfoItem,
                                    children: h,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("ul", {
                                className: ey().note,
                                children: [
                                  (0, s.jsx)("li", {
                                    children:
                                      "受付完了メールが届かない、もしくはお問い合わせから1週間を過ぎてもサポートからの返信が確認できない場合はsupport-fanclub@anycolor.co.jp からのメールを受信できるようメール受信設定の見直しをお願いいたします。",
                                  }),
                                  (0, s.jsx)("li", {
                                    children:
                                      "※上記アドレスに直接お問い合わせいただいてもご返信はできかねます。必ず問い合わせフォームからお問い合わせください。",
                                  }),
                                  (0, s.jsx)("li", {
                                    children:
                                      "※サポートデスク受付時間：平日10:00～18:00（土・日・祝日および当社休業日は除く）",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    })
                  : (0, s.jsx)("ul", {
                      className: ey().text,
                      children: l(
                        a ? "membership-card-request-complete" : "complete",
                        { ns: "contact", returnObjects: !0 },
                      ).map((e, n) => (0, s.jsx)("li", { children: e }, n)),
                    }),
              ],
            })
          );
        },
        ew = (e) => {
          let {
            contactInput: n,
            contactInputError: a,
            isAppClient: t,
            onChangeContactInput: l,
            confirm: i,
          } = e;
          return (0, s.jsxs)("div", {
            className: ex().contact,
            children: [
              (0, s.jsx)(I.V1, {
                className: ex().title,
                title: "FANCLUB CONTACT",
              }),
              (0, s.jsx)(m.Rn, {
                className: ex().upperPart,
                isFanclubContact: !0,
              }),
              (0, s.jsx)(m.LD, {
                className: ex().step,
                step: 1,
                stepTranslationKey: "steps",
                langOption: { lng: "ja" },
              }),
              (0, s.jsx)(m.kK, {
                className: ex().form,
                contactInput: n,
                contactInputError: a,
                isAppClient: t,
                onChangeContactInput: l,
              }),
              (0, s.jsx)(m.j$, {
                className: ex().privacy,
                isFanclubContact: !0,
              }),
              (0, s.jsx)("button", {
                className: ex().confirm,
                onClick: i,
                children: "入力内容を確認する",
              }),
            ],
          });
        },
        eL = (e) => {
          let { contact: n, isAppClient: a, goBackToInput: t, submit: l } = e,
            r = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              r &&
                r.current &&
                r.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
            }, [r]),
            (0, s.jsxs)("div", {
              className: ev().contact,
              children: [
                (0, s.jsx)(I.V1, {
                  className: ev().title,
                  title: "FANCLUB CONTACT",
                }),
                (0, s.jsx)(m.Rn, {
                  className: ev().upperPart,
                  isFanclubContact: !0,
                }),
                (0, s.jsx)("div", {
                  ref: r,
                  children: (0, s.jsx)(m.LD, {
                    className: ev().step,
                    step: 2,
                    stepTranslationKey: "steps",
                    langOption: { lng: "ja" },
                  }),
                }),
                (0, s.jsx)(m.GD, {
                  className: ev().confirm,
                  contact: n,
                  isAppClient: a,
                }),
                (0, s.jsx)(m.j$, {
                  className: ev().privacy,
                  isFanclubContact: !0,
                }),
                (0, s.jsxs)("div", {
                  className: ev().buttonsWrapper,
                  children: [
                    (0, s.jsx)("button", {
                      className: ev().back,
                      onClick: t,
                      children: "編集に戻る",
                    }),
                    (0, s.jsx)("button", {
                      className: ev().submit,
                      onClick: l,
                      children: "送信",
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var eI = a(51061),
        ek = a.n(eI);
      let eT = (e) => {
        let {
            isAppClient: n,
            contents: a,
            tagList: t,
            contentBanners: l,
            isLoading: r,
            currentPage: d,
            totalPages: p,
            selectedTag: _,
            userLicenses: u,
            onChangeSelectedTag: h,
            onChangePage: f,
            onClickBack: x,
          } = e,
          j = (0, i.useRef)(null),
          b = (0, i.useRef)(null),
          v = l.length > 0 && "" === _,
          N = (0, i.useCallback)(() => {
            var e;
            null === (e = j.current) ||
              void 0 === e ||
              e.scrollIntoView({ behavior: "smooth", block: "start" });
          }, []);
        (0, i.useEffect)(() => {
          if (null === b.current) {
            b.current = "".concat(_, ":").concat(d);
            return;
          }
          let [e, n] = b.current.split(":");
          (n !== String(d) && e === _ && N(),
            (b.current = "".concat(_, ":").concat(d)));
        }, [d, N, _]);
        let g = (e) => {
          let a = new URL(
            "/fanclubs/contents/".concat(e.slug),
            J.Bq.PARROT_FRONTEND_URL,
          );
          return (
            _ && a.searchParams.append("tag", _),
            n && a.searchParams.append("client", "app"),
            a.href
          );
        };
        return (0, s.jsxs)("div", {
          "data-testid": "ContentsTop",
          className: c()(ek().contentsTop, n && ek().app),
          children: [
            (0, s.jsxs)("div", {
              className: ek().container,
              children: [
                (0, s.jsxs)("div", {
                  className: ek().mainInner,
                  children: [
                    v &&
                      (0, s.jsxs)("div", {
                        className: ek().contentSlider,
                        children: [
                          (0, s.jsxs)("div", {
                            className: ek().contentSliderTitle,
                            children: [
                              (0, s.jsx)("p", {
                                className: ek().contentSliderTitleText,
                                children: "FANCLUBS",
                              }),
                              !n &&
                                (0, s.jsx)(M(), {
                                  href: "/fanclubs",
                                  className: ek().contentSliderTitleLink,
                                  children: "ファンクラブ一覧へ",
                                }),
                            ],
                          }),
                          (0, s.jsx)(m.jL, { contentBanners: l }),
                        ],
                      }),
                    (0, s.jsxs)("div", {
                      className: ek().header,
                      ref: j,
                      children: [
                        (0, s.jsx)(o.d7, {
                          className: ek().timelineTitle,
                          tag: _,
                          onClickBack: x,
                        }),
                        !!_ ||
                          (0, s.jsx)(o.sR, {
                            className: ek().tagList,
                            tagList: t,
                            onChangeSelectedTag: (e) => {
                              e !== _ && h(e);
                            },
                            hasExpand: !0,
                          }),
                      ],
                    }),
                    a.length > 0
                      ? a.map((e) =>
                          (0, s.jsx)(
                            m.uW,
                            {
                              isAppClient: n,
                              content: e,
                              userLicenses: u,
                              link: g(e),
                            },
                            e.slug,
                          ),
                        )
                      : r
                        ? null
                        : (0, s.jsx)("p", {
                            className: ek().emptyMessage,
                            children: "対象のコンテンツは存在しませんでした",
                          }),
                    p > 1 &&
                      (0, s.jsx)(o.d8, {
                        className: ek().paginationWrapper,
                        currentPage: d,
                        totalPages: p,
                        onChangePage: (e) => {
                          e !== d && f(e);
                        },
                      }),
                  ],
                }),
                !n && (0, s.jsx)(m.ug, { contentBanners: l }),
              ],
            }),
            !n && (0, s.jsx)(o.$_, { defaultScrollToTop: N }),
          ],
        });
      };
      var eS = a(54038),
        eB = a.n(eS);
      let eA = (e) => {
        let {
          isAppClient: n,
          content: a,
          contentBanners: t,
          userLicense: l,
          onTogglePaymentModal: i,
          canOpenPaymentModal: r,
        } = e;
        return (0, s.jsx)("div", {
          "data-testid": "ContentsDetail",
          className: eB().contentDetail,
          children: (0, s.jsxs)("div", {
            className: eB().container,
            children: [
              (0, s.jsx)(m.T$, {
                isAppClient: n,
                content: a,
                userLicense: l,
                onTogglePaymentModal: i,
                canOpenPaymentModal: r,
              }),
              !n && (0, s.jsx)(m.ug, { contentBanners: t }),
            ],
          }),
        });
      };
      var eM = a(25504),
        eO = a.n(eM);
      let eW = (e) => {
        let { banners: n, fanclubs: a, livers: l, hasAddressAlert: r } = e,
          p = (0, t.useRouter)(),
          { activeUserLicenses: _ } = (0, d.SE)(),
          [u, h] = (0, i.useState)(null),
          [f, x] = (0, i.useState)(!1),
          [j, b] = (0, i.useState)(""),
          [v, N] = (0, i.useState)(null),
          g = (0, i.useRef)(null),
          y = a
            .map((e) => e.liverPanelImageUrl)
            .filter((e) => "string" == typeof e),
          C = (0, i.useMemo)(
            () =>
              l
                .flatMap((e) => {
                  let n = a.find((n) => {
                    var a;
                    return (
                      "active" === n.status &&
                      (null === (a = n.licenses) || void 0 === a
                        ? void 0
                        : a.some((e) => "active" === e.status)) === !0 &&
                      n.microCmsTalentSlug === e.slug &&
                      !!n.portraitImageUrl
                    );
                  });
                  return n
                    ? [{ name: e.name, portraitImageUrl: n.portraitImageUrl }]
                    : [];
                })
                .slice(0, 2),
            [a, l],
          );
        (0, i.useEffect)(() => {
          let e = new IntersectionObserver(
              (e) => {
                let [n] = e;
                h(n.isIntersecting);
              },
              { threshold: 0.9 },
            ),
            n = g.current;
          return (
            n && e.observe(n),
            () => {
              n && e.unobserve(n);
            }
          );
        }, []);
        let w = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            (b(e), x(!f));
          },
          L = (e) => {
            let n = e.currentTarget;
            N(n.naturalWidth / n.naturalHeight);
          },
          [k, T] = (0, i.useMemo)(() => {
            let [e, n] = a.reduce(
              (e, n) => (
                "nijisanji-all" === n.slug ? e[0].push(n) : e[1].push(n),
                e
              ),
              [[], []],
            );
            return [e[0], n];
          }, [a]),
          S = n.length > 0,
          B = (e, n) => n.some((n) => n.license.fanclub.slug === e),
          A = () => {
            p.push({
              pathname: "/fanclubs/".concat(k.slug),
              query: { mode: "payment" },
            });
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            r ? (0, s.jsx)(m.AO, {}) : null,
            (0, s.jsxs)("div", {
              id: "fanclub-top",
              className: eO().fanclubsTop,
              "data-testid": "FanclubsTop",
              children: [
                (0, s.jsxs)("div", {
                  className: c()(eO().header, !S && eO().withoutBannerHeader),
                  children: [
                    (0, s.jsxs)("div", {
                      className: c()(
                        eO().logoAndLinks,
                        !S && eO().withoutBanner,
                      ),
                      children: [
                        (0, s.jsx)("h1", {
                          className: eO().logo,
                          children: (0, s.jsx)(W.Z, {
                            src: "/logo/fanclub-logo.png",
                            fill: !0,
                            alt: "にじさんじファンクラブ",
                          }),
                        }),
                        (0, s.jsxs)(M(), {
                          href: "/fanclubs/contents",
                          className: eO().fanclubLink,
                          children: [
                            (0, s.jsxs)("span", {
                              className: eO().pcOnly,
                              children: [
                                "ファンクラブ",
                                (0, s.jsx)("wbr", {}),
                                "コンテンツ一覧へ",
                              ],
                            }),
                            (0, s.jsx)("span", {
                              className: eO().spOnly,
                              children: "コンテンツ一覧",
                            }),
                            (0, s.jsx)("span", {
                              role: "img",
                              className: eO().fanclubLinkIcon,
                            }),
                          ],
                        }),
                      ],
                    }),
                    S &&
                      (0, s.jsx)(o.gY, {
                        sliderBanners: n,
                        className: eO().sliderBanners,
                        fixedPcBannerHeight: 40.5,
                        spaceBetween: 80,
                      }),
                  ],
                }),
                (0, s.jsx)(m.tT, { liverPanelImageUrls: y, toggleModal: w }),
                (0, s.jsx)("div", {
                  id: "plan-list",
                  className: eO().fanclubPlanWrapper,
                  children: (0, s.jsxs)("div", {
                    className: eO().inner,
                    children: [
                      (0, s.jsxs)("div", {
                        className: eO().titleWrapper,
                        children: [
                          (0, s.jsx)(I.V1, {
                            title: "PLAN",
                            className: eO().title,
                          }),
                          (0, s.jsx)("div", {
                            className: eO().titleSub,
                            children: "プランと料金",
                          }),
                        ],
                      }),
                      (0, s.jsx)(m.U2, {
                        planBenefits: [
                          {
                            name: "会員証",
                            imageUrl: "/images/membership-card.png",
                          },
                          {
                            name: "会報(年3回)",
                            imageUrl: "/images/bulletin.png",
                          },
                          {
                            name: "年賀状",
                            imageUrl: "/images/new-years-card.png",
                          },
                        ],
                        toggleModal: w,
                        planTypes: ["basic", "premium", "nijisanjiAll"],
                      }),
                    ],
                  }),
                }),
                (0, s.jsxs)("div", {
                  id: "fanclub-list",
                  className: c()(eO().inner, eO().fanclubList),
                  children: [
                    (0, s.jsxs)("div", {
                      className: eO().titleWrapper,
                      children: [
                        (0, s.jsx)(I.V1, {
                          title: "FANCLUBS",
                          className: eO().title,
                        }),
                        (0, s.jsx)("div", {
                          className: eO().titleSub,
                          children: "ファンクラブ一覧",
                        }),
                      ],
                    }),
                    k &&
                      (0, s.jsxs)("div", {
                        className: eO().fanclubTypeWrapper,
                        children: [
                          (0, s.jsx)(o.Jn, {
                            fanclubType: "nijisanjiAll",
                            className: c()(eO().pcOnly, eO().fanclubTypeBadge),
                          }),
                          (0, s.jsxs)("div", {
                            className: c()(
                              eO().fanclubItems,
                              eO().nijisanjiAllFanclub,
                            ),
                            children: [
                              (0, s.jsx)(M(), {
                                href: "/fanclubs/".concat(k.slug),
                                className: eO().nijisanjiAllIconWrapper,
                                children: (0, s.jsx)(I.e3, {
                                  iconUrl: k.iconUrl,
                                  liverName: k.name,
                                  shadow: !0,
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: eO().nijisanjiAllNameAndButton,
                                children: [
                                  (0, s.jsx)("div", {
                                    className: eO().nijisanjiAllName,
                                    children: k.liverName,
                                  }),
                                  B(k.slug, _)
                                    ? (0, s.jsx)(I.Be, {
                                        className: eO().nijisanjiAllButton,
                                        value: "プラン変更",
                                        buttonType: "white",
                                        borderType: "blue",
                                        onClick: A,
                                      })
                                    : (0, s.jsx)(I.p_, {
                                        className: eO().nijisanjiAllButton,
                                        label: "入会する",
                                        onClick: A,
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, s.jsxs)("div", {
                      className: eO().fanclubTypeWrapper,
                      children: [
                        (0, s.jsx)(o.Jn, {
                          fanclubType: "liver",
                          className: c()(
                            eO().pcOnly,
                            eO().fanclubTypeBadge,
                            eO().liverBadge,
                          ),
                        }),
                        (0, s.jsx)("div", {
                          className: eO().fanclubItems,
                          children: T.map((e) =>
                            (0, s.jsx)(
                              o.i2,
                              {
                                fanclub: e,
                                className: eO().fanclubItem,
                                isJoinedFanClub: B(e.slug, _),
                              },
                              e.slug,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  id: "app-introduction",
                  children: (0, s.jsx)(m.ui, { livers: C }),
                }),
                (0, s.jsx)(o.Vn, {
                  className: c()(eO().fanclubJoinLink, u && eO().hidden),
                }),
                (0, s.jsx)("div", { ref: g }),
                f &&
                  (0, s.jsx)(() => {
                    let e = () => {
                        w();
                      },
                      n = (e) => {
                        e.stopPropagation();
                      };
                    return j.includes("https://player.vimeo.com/video/")
                      ? (0, s.jsx)("div", {
                          className: eO().modalWrapper,
                          onClick: e,
                          children: (0, s.jsxs)("div", {
                            className: eO().modal,
                            children: [
                              (0, s.jsx)(I.zx, { className: eO().closeButton }),
                              (0, s.jsx)("iframe", {
                                onClick: n,
                                className: eO().videoFrame,
                                src: j,
                                allow: "fullscreen",
                                allowFullScreen: !0,
                              }),
                            ],
                          }),
                        })
                      : (0, s.jsx)("div", {
                          className: eO().modalWrapper,
                          onClick: e,
                          children: (0, s.jsxs)("div", {
                            className: eO().modal,
                            style: v ? { aspectRatio: "".concat(v) } : void 0,
                            children: [
                              (0, s.jsx)(I.zx, { className: eO().closeButton }),
                              (0, s.jsx)(W.Z, {
                                src: j,
                                fill: !0,
                                onLoad: L,
                                onClick: n,
                                alt: "PREMIUM 特典",
                              }),
                            ],
                          }),
                        });
                  }, {}),
              ],
            }),
          ],
        });
      };
      var eP = a(71967),
        eR = a(56697),
        eF = a(1801),
        eE = a.n(eF);
      let eU = (e) => {
        let { content: n, userLicense: a, onClickContent: t } = e,
          l = !n.isLimited || n.canPreview,
          i = "premium" === n.plan,
          r = n.fanclub
            ? J.nf.DEFAULT_FANCLUB_COVER_IMAGE_URL
            : J.nf.DEFAULT_PORTAL_COVER_IMAGE_URL;
        return (0, s.jsx)("div", {
          "data-testid": "ContentCard",
          className: eE().contentCardWrapper,
          children: (0, s.jsxs)("div", {
            className: eE().contentCard,
            onClick: t,
            children: [
              (0, s.jsx)("div", {
                "data-testid": "RenderInformation",
                className: eE().contentHeader,
                children: (0, s.jsxs)("div", {
                  className: eE().informationWrapper,
                  children: [
                    (0, s.jsx)("p", {
                      className: eE().title,
                      children: n.name,
                    }),
                    (0, s.jsx)(o.JQ, {
                      className: eE().date,
                      publishDate: n.publishedAt,
                      isLimited: n.isLimited,
                      hasLicense: (0, eR.s)(a ? [a] : [], n),
                      canPreview: n.canPreview,
                      isPremium: i,
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className: eE().contentBody,
                children: [
                  l &&
                    (0, s.jsx)(I.IP, {
                      className: eE().textClip,
                      text: n.textFirstChar,
                      slug: n.slug,
                    }),
                  (0, s.jsx)("div", {
                    className: eE().thumbnail,
                    children: (0, s.jsx)(W.Z, {
                      src: n.coverImageUrl || r,
                      fill: !0,
                      alt: n.name,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var eD = a(4669),
        eY = a.n(eD);
      let eG = (e) => {
        let {
            isAppClient: n,
            fanclub: a,
            contents: l,
            userLicense: r,
            isLoading: d,
            currentPage: p,
            totalPages: _,
            onChangePage: u,
            hasAddressAlert: h,
            onTogglePaymentModal: f,
            canOpenPaymentModal: x,
          } = e,
          j = (0, t.useRouter)(),
          b = (0, i.useRef)(null),
          v = (0, i.useRef)(null),
          N = (0, i.useCallback)(() => {
            b.current &&
              b.current.scrollIntoView({ behavior: "smooth", block: "end" });
          }, []),
          g = (0, i.useCallback)(() => {
            b.current &&
              b.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, []);
        return (
          (0, i.useEffect)(() => {
            d ||
              (null !== v.current && v.current !== p && g(), (v.current = p));
          }, [p, d, g]),
          (0, s.jsxs)("div", {
            "data-testid": "FanclubsDetail",
            className: c()(eY().fanclubsDetail, n && eY().app),
            children: [
              h ? (0, s.jsx)(eP.A, {}) : null,
              (0, s.jsx)(m.FG, {
                isAppClient: n,
                scrollToTopRef: b,
                fanclub: a,
                userLicense: r,
                onTogglePaymentModal: f,
                canOpenPaymentModal: x,
              }),
              (0, s.jsxs)("div", {
                className: eY().container,
                children: [
                  l.length > 0
                    ? l.map((e) =>
                        (0, s.jsx)(
                          eU,
                          {
                            content: e,
                            userLicense: r,
                            onClickContent: () => {
                              let s = new URLSearchParams({ fanclub: a.slug });
                              (n && s.set("client", "app"),
                                j.push(
                                  "/fanclubs/contents/"
                                    .concat(e.slug, "?")
                                    .concat(s.toString()),
                                ));
                            },
                          },
                          e.slug,
                        ),
                      )
                    : !d && p <= _
                      ? (0, s.jsx)("p", {
                          className: eY().emptyMessage,
                          children: "対象のコンテンツは存在しませんでした",
                        })
                      : null,
                  _ > 1 &&
                    (0, s.jsx)(o.d8, {
                      className: eY().paginationWrapper,
                      currentPage: p,
                      totalPages: _,
                      onChangePage: u,
                    }),
                ],
              }),
              !n && (0, s.jsx)(o.$_, { defaultScrollToTop: N }),
            ],
          })
        );
      };
      var eH = a(23925),
        eV = a.n(eH);
      let eq = () =>
        (0, s.jsxs)("div", {
          className: eV().termsOfUse,
          "data-testid": "FanclubTerms",
          children: [
            (0, s.jsxs)("h1", {
              className: eV().pageTitle,
              children: [
                "にじさんじFAN CLUB",
                (0, s.jsx)("br", {}),
                "利用規約",
              ],
            }),
            (0, s.jsx)("section", {
              className: eV().section,
              children: (0, s.jsx)("p", {
                className: eV().content,
                children:
                  "本規約では、にじさんじFAN CLUBの利用の条件や会員の皆様と当社との間の権利義務関係が定められています。にじさんじFAN CLUBをご利用いただくためには、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要がございます。",
              }),
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１条（目的）",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children:
                    "にじさんじFAN CLUBは、当社に所属するバーチャルライバー及びアーティスト（いずれも個人またはグループを含みます。）の活動を応援するためのサービスであり、会員に対して各種コンテンツを提供することを目的とします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２条（定義）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "本規約において使用する用語の定義は、下記のとおりとします。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ にじさんじFAN CLUB：当社が運営する『にじさんじFAN CLUB』という名称のサービス（理由の如何を問わず、名称が変更された場合は、当該名称変更後のサービスを含みます。）",
                        (0, s.jsx)("br", {}),
                        "⑵ 会員：にじさんじFAN CLUBを利用するために、本規約の規定に従い入会手続を完了している者",
                        (0, s.jsx)("br", {}),
                        "⑶ 当社：ANYCOLOR株式会社",
                        (0, s.jsx)("br", {}),
                        "⑷ バーチャルライバー：主に動画配信サービスにおいて動画の投稿及び配信を行い、当該動画に登場するキャラクターとして、実演を行う実演家",
                        (0, s.jsx)("br", {}),
                        "⑸ バーチャルライバー等：バーチャルライバー及びアーティスト",
                        (0, s.jsx)("br", {}),
                        "⑹ 本コンテンツ：にじさんじFAN CLUBを通じて会員に対して提供される各種コンテンツ",
                        (0, s.jsx)("br", {}),
                        "⑺ 本コンテンツ等：にじさんじFAN CLUB及び本コンテンツ",
                        (0, s.jsx)("br", {}),
                        "⑻ 本契約：会員と当社との間で締結される、本コンテンツ等に関する一切の契約",
                        (0, s.jsx)("br", {}),
                        "⑼ にじさんじFAN CLUB専用サイト：そのドメインが（nijisanji.jp）である、当社が運営するウェブサイト（理由の如何を問わず、ウェブサイトのドメインまたは内容が変更された場合は、当該変更後のウェブサイトを含みます。）",
                        (0, s.jsx)("br", {}),
                        "⑽ にじさんじFAN CLUB専用アプリ：当社が運営する『にじさんじFAN CLUB』という名称のアプリケーション（理由の如何を問わず、アプリケーションの名称や内容が変更された場合は、当該変更後のアプリケーションを含みます。）",
                        (0, s.jsx)("br", {}),
                        "⑾ 入会：本ファンクラブへの入会",
                        (0, s.jsx)("br", {}),
                        "⑿ 入会希望者：本ファンクラブへの入会を希望する者",
                        (0, s.jsx)("br", {}),
                        "⒀ 会員情報：入会希望者が入会の申請の際に当社に対して提供する情報として当社が定めるもの",
                        (0, s.jsx)("br", {}),
                        "⒁ ANYCOLOR ID：当社または当社と提携する第三者が提供する各種サービス（本コンテンツ等に限らない。）で利用可能な統合アカウント",
                        (0, s.jsx)("br", {}),
                        "⒂ 入会申請者：入会の申請を行った入会希望者",
                        (0, s.jsx)("br", {}),
                        "⒃ 本ファンクラブ：当社が運営するバーチャルライバー等に関するファンクラブであって、本コンテンツに含まれるもの",
                        (0, s.jsx)("br", {}),
                        "⒄ 会費：本ファンクラブの会員資格を維持するために発生する利用料として当社が定めるもの",
                        (0, s.jsx)("br", {}),
                        "⒅ スタッフ：当社の従業員または本コンテンツ等の運営業務の受託者",
                        (0, s.jsx)("br", {}),
                        "⒆ 知的財産権：著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）",
                        (0, s.jsx)("br", {}),
                        "⒇ 反社会的勢力：現在、暴力団、暴力団員、暴力団員でなくなったときから５年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第３条（適用）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 本規約は、本コンテンツ等の利用に関する一切の場合について適用され、会員は、にじさんじFAN CLUBの利用を申し込んだ時点で、本規約内容に同意し、本規約を本契約の内容とすることを合意するものとします。",
                    (0, s.jsx)("br", {}),
                    "２ 本規約のほか、当社が定め、当社ウェブサイトまたは当社が提供するアプリケーション上で掲載する、本コンテンツ等を利用するためのルール及び各種規程（ヘルプや投稿を含みます。）は、本契約の一部を構成するものとします。",
                    (0, s.jsx)("br", {}),
                    "３ 本規約の内容と前項のルール、各種規程、その他の本規約外における本コンテンツ等の説明とが異なる場合は、本規約の規定が優先して適用されるものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第４条（通知）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社が会員に対して行う、本規約の変更等のご案内、イベントの告知などの本契約に関して必要な情報の通知は、にじさんじ FAN CLUB専用サイトまたはにじさんじFAN CLUB専用アプリへの掲載、電子メールの送信、その他当社が適切と認める方法により行うものとします。",
                    (0, s.jsx)("br", {}),
                    "２ 前項に規定する通知は、本規約に別段の定めがある場合を除き、次の各号に掲げる時点をもって、完了したものとします。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ 当該通知がにじさんじFAN CLUB専用サイトまたはにじさんじFAN CLUB専用アプリへの掲載をもって行われる場合",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("span", {
                          className: eV().subContent,
                          children:
                            "当該通知がにじさんじFAN CLUB専用サイトまたはにじさんじFAN CLUB専用アプリに表示され、会員において閲覧し得る状態となった時点",
                        }),
                        "⑵ 当該通知が電子メールの送信によって行われる場合",
                        (0, s.jsx)("span", {
                          className: eV().subContent,
                          children:
                            "当該時点において登録されている会員の電子メールアドレス宛に電子メールが送信された時点",
                        }),
                        "⑶ 当該通知が会員が届け出た連絡先への送付によって行われる場合",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("span", {
                          className: eV().subContent,
                          children: "当該通知が会員の連絡先へ到達した時点",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第５条（入会手続）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 会員は、入会手続を完了することで、本コンテンツ等を利用することができます。",
                    (0, s.jsx)("br", {}),
                    "２ 入会希望者は、本規約を遵守することに同意し、かつ、登録情報を当社に提供することにより、当社に対し、入会申請することができます。",
                    (0, s.jsx)("br", {}),
                    "３ 前項の規定に基づく入会希望者から当社への会員情報の提供は、ANYCOLOR IDへの登録手続をもって行うものとします。",
                    (0, s.jsx)("br", {}),
                    "４ 当社は、当社の定めた基準に従って、登録申請者の入会の可否を判断し、当社が入会を認める場合にはその旨を登録申請者に通知します。登録申請者の入会は、当社が同通知を行ったことをもって完了したものとします。",
                    (0, s.jsx)("br", {}),
                    "５ 前項に定める入会手続の完了時に、本契約が会員と当社との間に成立し、会員は、にじさんじFAN CLUBを本規約に従い利用することができるようになります。",
                    (0, s.jsx)("br", {}),
                    "６ 登録申請者が未成年である場合には、登録申請者は、民法その他の法令の規定に基づき親権者等の法定代理人の同意を得たうえで、入会申請をするものとします。この場合において、登録申請者が入会申請を行ったときは、親権者等の法定代理人の同意が得られているものとみなします。",
                    (0, s.jsx)("br", {}),
                    "７ 当社は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、入会及び再入会を拒否することがあります。なお、当社は、その理由について一切の開示義務を負いません。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ 当社に提供した登録情報の全部または一部につき虚偽、誤記または記載漏れがあった場合",
                        (0, s.jsx)("br", {}),
                        "⑵ 登録申請者が実在しないか、または、実体的な活動を行っていない場合",
                        (0, s.jsx)("br", {}),
                        "⑶ 登録申請者以外の者の情報を登録情報として提供した場合",
                        (0, s.jsx)("br", {}),
                        "⑷ 登録申請者が過去に当社との契約に違反した事実がある、またはその関係者であると当社が判断した場合",
                        (0, s.jsx)("br", {}),
                        "⑸ 登録申請者が本規約に違反するおそれがあると当社が判断した場合",
                        (0, s.jsx)("br", {}),
                        "⑹ その他、当社が入会を適当でないと判断した場合",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第６条（会員情報の変更）",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children:
                    "会員は、登録情報に変更があった場合、当社の定める方法により当該変更情報を遅滞なく当社に通知するものとします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第７条（パスワード及び会員IDの管理）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 会員は、自己の責任において、ANYCOLOR IDに関するパスワード及び会員ＩＤを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものとします。",
                    (0, s.jsx)("br", {}),
                    "２ ANYCOLOR IDに関するパスワードまたは会員ＩＤの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は、会員が負うものとし、当社は、一切の責任を負いません。",
                    (0, s.jsx)("br", {}),
                    "３ 会員は、ANYCOLOR IDのパスワードまたは会員ＩＤが第三者により盗用された場合には、その事実を遅滞なく当社に通知するものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第８条 (料金及び支払方法)",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 会員が本ファンクラブへ入会し、会員としての資格を維持するためには、会員は、当社所定の方法により、所定の支払期日までに、会費を支払うものとします。",
                    (0, s.jsx)("br", {}),
                    "２ 前項の場合のほか、本コンテンツを利用する際に利用料が発生する場合があります。",
                    (0, s.jsx)("br", {}),
                    "３ 本コンテンツの会費等の金額、支払方法、支払期日、返金処理等の詳細は、にじさんじFAN CLUB専用サイトまたはにじさんじFAN CLUB専用アプリにて定めるものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第９条（禁止事項）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "会員は、本コンテンツ等の利用にあたり、以下の各号のいずれかに該当する行為及び当該行為の準備・誘発行為、または当該行為に該当すると当社が判断する行為をしてはなりません。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ 法令に違反する行為、犯罪行為に関連する行為または公序良俗に反する行為",
                        (0, s.jsx)("br", {}),
                        "⑵ 当社、他の会員またはその他の第三者に対する詐欺または脅迫行為",
                        (0, s.jsx)("br", {}),
                        "⑶ 当社、他の会員またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為",
                        (0, s.jsx)("br", {}),
                        "⑷ 本コンテンツ等の運営を妨害するおそれのある行為",
                        (0, s.jsx)("br", {}),
                        "⑸ 当社のネットワークまたはシステム等に不正にアクセスし、または不正なアクセスを試みる行為",
                        (0, s.jsx)("br", {}),
                        "⑹ 第三者に成りすます行為",
                        (0, s.jsx)("br", {}),
                        "⑺ 他の会員のIDまたはパスワードを利用する行為",
                        (0, s.jsx)("br", {}),
                        "⑻ 他の会員の情報を収集する行為",
                        (0, s.jsx)("br", {}),
                        "⑼ 当社、他の会員またはその他の第三者に不利益、損害、不快感を与える行為",
                        (0, s.jsx)("br", {}),
                        "⑽ 当社のバーチャルライバー等が出演する公演等の主催者から入手したチケット、当社が会員に付与した権利およびコンテンツ（データ、物品を含むがこれに限らない。）またはこれに類するものを、第三者に転売または譲渡する行為",
                        (0, s.jsx)("br", {}),
                        "⑾ 本規約及びにじさんじFAN CLUB専用サイトまたはにじさんじFAN CLUB専用アプリ上で掲載するルール、各種規定に抵触する行為",
                        (0, s.jsx)("br", {}),
                        "⑿ バーチャルライバー等またはスタッフに対する以下に規定するような迷惑行為",
                        (0, s.jsx)("br", {}),
                        (0, s.jsxs)("span", {
                          className: eV().subContent,
                          children: [
                            "① バーチャルライバー等またはスタッフの財産、名誉、信用、プライバシー等の権利を侵害する行為",
                            (0, s.jsx)("br", {}),
                            "② バーチャルライバー等またはスタッフの承諾を得ることなく、バーチャルライバー等またはスタッフの写真、動画等を撮影、録音、録画する行為",
                            (0, s.jsx)("br", {}),
                            "③ バーチャルライバー等またはスタッフに対する付きまとい、誹謗中傷行為",
                            (0, s.jsx)("br", {}),
                            "④ バーチャルライバー等またはスタッフに連絡や面会を強要する行為",
                            (0, s.jsx)("br", {}),
                            "⑤ バーチャルライバー等またはスタッフに対し危害を加えまたは危害を加える旨を告知する行為",
                            (0, s.jsx)("br", {}),
                            "⑥ バーチャルライバー等またはスタッフを待ち伏せ、追尾する行為",
                          ],
                        }),
                        "⒀ 反社会的勢力等へ利益を供与する行為",
                        (0, s.jsx)("br", {}),
                        "⒁ 面識のない異性との出会いを目的とした行為",
                        (0, s.jsx)("br", {}),
                        "⒂ 前各号の行為を直接または間接に惹起し、または容易にする行為",
                        (0, s.jsx)("br", {}),
                        "⒃ 本コンテンツ等のプログラム解析、逆アセンブル、逆コンパイルその他のリバースエンジニアリング",
                        (0, s.jsx)("br", {}),
                        "⒄ 本コンテンツ等を翻訳、転載、引用、複写、コピーなどして利用する行為",
                        (0, s.jsx)("br", {}),
                        "⒅ 本コンテンツ等を通じ、以下に該当し、または該当すると当社が判断する情報を当社または他の会員に送信する行為",
                        (0, s.jsx)("br", {}),
                        (0, s.jsxs)("span", {
                          className: eV().subContent,
                          children: [
                            "① 過度に暴力的または残虐な表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "② コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報",
                            (0, s.jsx)("br", {}),
                            "③ 当社、他の会員またはその他の第三者の名誉または信用を毀損する表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "④ 過度にわいせつな表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "⑤ 差別を助長する表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "⑥ 自殺、自傷行為を助長する表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "⑦ 薬物の不適切な利用を助長する表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "⑧ 反社会的な表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "⑨ チェーンメール等の第三者への情報の拡散を求める情報",
                            (0, s.jsx)("br", {}),
                            "⑩ 他人に不快感を与える表現を含む情報",
                            (0, s.jsx)("br", {}),
                            "⑪ 面識のない異性との出会いを目的とした情報",
                            (0, s.jsx)("br", {}),
                            "⑫ その他当社が不適切と判断する情報",
                          ],
                        }),
                        "⒆ その他、当社が不適切と判断する行為",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１０条（本コンテンツ等の停止等）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 以下の各号のいずれかに該当する場合には、当社が会員に対して本コンテンツ等を提供する義務の全部または一部は、当該事由が解消するまでの間消滅するものとし、当社は、会員に対する事前の通知や会員からの承諾を受けることなく、本コンテンツ等の全部または一部の提供を停止または中断することができるものとします。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ 本コンテンツ等に係るコンピューター・システム（当社が第三者の提供に係るシステムを利用している場合には、当該システムを含みます。）の点検または保守作業を緊急に行う場合",
                        (0, s.jsx)("br", {}),
                        "⑵ コンピューター、通信回線等が事故により停止した場合",
                        (0, s.jsx)("br", {}),
                        "⑶ 地震、落雷、火災、風水害、停電、天変地変などの不可抗力により本コンテンツ等の運営ができなくなった場合",
                        (0, s.jsx)("br", {}),
                        "⑷ その他、当社が停止または中断を必要と判断した場合",
                      ],
                    }),
                    "２ 当社は、本規約第１７条第２項及び同第３項の規定にかかわらず、前条に基づき当社が行った措置に基づき会員に生じた損害については責任を負いません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１１条（反社会的勢力の排除）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社及び会員は、自己または自己の代理人もしくは媒介をする者が、反社会的勢力に該当しないこと、及び次の各号のいずれにも該当しないことを表明、保証し、かつ将来にわたっても該当しないことを相互に確約します。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ 反社会的勢力が経営を支配していると認められる関係を有すること",
                        (0, s.jsx)("br", {}),
                        "⑵ 反社会的勢力が経営に実質的に関与していると認められる関係を有すること",
                        (0, s.jsx)("br", {}),
                        "⑶ 自己もしくは第三者の不正の利益を図る目的または第三者に損害を加える目的をもってするなど、不当に反社会的勢力を利用していると認められる関係を有すること",
                        (0, s.jsx)("br", {}),
                        "⑷ 反社会的勢力に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有すること",
                        (0, s.jsx)("br", {}),
                        "⑸ 役員または経営に実質的に関与している者が反社会的勢力と社会的に非難されるべき関係を有すること",
                      ],
                    }),
                    "２ 当社及び会員は、前項の確約に反して、相手方当事者または相手方当事者の代理もしくは媒介をする者が反社会的勢力あるいは前項各号の一つにでも該当することが判明したときは、何らの催告を要せず、直ちに本契約を解除、ANYCOLOR IDへの登録の抹消等をすることができるものとします。",
                    (0, s.jsx)("br", {}),
                    "３ 当社または会員が前項の規定により契約を解除した場合には、解除により相手方に生じた損害の一切について賠償する義務を負わないものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１２条（権利帰属）",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children:
                    "にじさんじFAN CLUB専用サイト、にじさんじFAN CLUB専用アプリ及び本コンテンツ等に関連する一切の知的財産権は、当社または当社にライセンスを許諾している第三者に帰属します。会員は、知的財産権を侵害する一切の行為が禁じられます。また、本コンテンツ等の利用の許諾は、当社または当社にライセンスを許諾している第三者の上記知的財産権の使用許諾を意味するものではありません。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１３条（会員資格の抹消等）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社は、会員が、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、当該会員について本コンテンツ等の利用を一時的に停止すること、または会員入会を抹消することがあります。なお、当社は、会員が以下の各号に該当するか否かの判断が完了するまでの間においても、本条記載の必要な措置を講じることができるものとします。",
                    (0, s.jsx)("br", {}),
                    (0, s.jsxs)("span", {
                      className: eV().subContent,
                      children: [
                        "⑴ 本契約のいずれかの条項に違反した場合",
                        (0, s.jsx)("br", {}),
                        "⑵ 登録情報に虚偽の事実があることが判明した場合",
                        (0, s.jsx)("br", {}),
                        "⑶ 支払停止もしくは支払不能となり、または破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始もしくはこれらに類する手続の開始の申立てがあった場合",
                        (0, s.jsx)("br", {}),
                        "⑷ 当社からの問い合わせその他の回答を求める連絡に対して１か月以上応答がない場合",
                        (0, s.jsx)("br", {}),
                        "⑸ 第５条第７項各号に規定する事項に該当する場合",
                        (0, s.jsx)("br", {}),
                        "⑹ その他、当社が本コンテンツ等の利用、入会を適当でないと判断した場合",
                      ],
                    }),
                    "２ 前項各号のいずれかの事由に該当した場合、会員は、当社に対して負っている債務の一切について当然に期限の利益を失い、直ちに当社に対して全ての債務の支払を行わなければなりません。",
                    (0, s.jsx)("br", {}),
                    "３ 当社は、本条に基づき当社が行った行為により会員に生じた損害については責任を負いません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１４条（退会）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 会員は、当社所定の方法で当社に通知することにより、既に会費を支払い済みである本コンテンツ（コンビニ決済を選択した場合、入会申請から支払完了までのものを含みます。）の利用期間の満了をもって退会することができます。",
                    (0, s.jsx)("br", {}),
                    "２ 退会にあたり、会員が当社に対して負っている債務がある場合は、会員は、当社に対して負っている債務の一切について当然に期限の利益を失い、当社の求めがあった場合には、直ちに当社に対して全ての債務の支払を行わなければなりません。",
                    (0, s.jsx)("br", {}),
                    "３ 当社は、退会した会員の登録情報や本コンテンツ等の利用を通じて蓄積された当該会員の利用データ等を継続して保有する義務を負わないものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１５条（本コンテンツ等の内容の変更、終了）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社は、当社の判断により、本コンテンツ等の内容を変更し、または提供を終了することができます。当社が本コンテンツ等の提供を終了する場合、当社は会員に事前に通知するものとします。",
                    (0, s.jsx)("br", {}),
                    "２ 当社は、前条に基づき当社が行った措置に基づき会員に生じた損害については責任を負いません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１６条（損害賠償）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 会員は、本コンテンツ等の利用に関して、自己の責めに帰すべき事由により当社またはその他の第三者に対して損害を与えた場合、これを賠償する責任を負います。",
                    (0, s.jsx)("br", {}),
                    "２ 会員は、にじさんじFAN CLUBの利用に関して、他の会員またはその他の第三者からクレームや請求を受けまたは紛争が生じた場合、自己の責任と費用負担でこれを解決するものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１７条（保証の否認及び免責）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社は、本コンテンツ等の内容、そこで提供する情報等に関し、その完全性、正確性、最新性、その他いかなる保証も行うものではありません。",
                    (0, s.jsx)("br", {}),
                    "２ 当社は、本コンテンツ等の利用、各種情報の提供に関して発生した会員の直接または間接の損害につき、当該損害が当社の責めに帰すべき事由により発生した場合を除き、いかなる責任も負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "３ 当社は、当社による本コンテンツ等の提供の中断または停止、会員が本コンテンツ等に送信したメッセージまたは情報の削除または消失、入会の抹消、本コンテンツ等の利用による登録データの消失または機器の故障もしくは損傷、その他の事情により会員が被った損害につき、当該損害が当社の責めに帰すべき事由により発生した場合を除き、いかなる責任も負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "４ 会員がパーソナルコンピューター等の本コンテンツ等を利用するうえで必要となるデジタル機器やインターネット環境を利用しないことによって、本コンテンツ等の提供を受けられない場合や情報伝達の遅れなどの不都合が生じた場合につき、当社はいかなる責任も負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "５ 当社が通知したお知らせに対して、会員が申込期限内に申し込まなかった場合（会員がお知らせを確認しないまま期限を過ぎた場合を含みます。）には、申込の権利は失効し、会員は一切の異議を申し述べることができないものとします。",
                    (0, s.jsx)("br", {}),
                    "６ 金融機関による手続上の不備や郵便事故等に関し、当社は責任を負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "７ 本コンテンツ等またはにじさんじFAN CLUB専用サイト若しくはにじさんじFAN CLUB専用アプリ上での会員と他の会員または第三者との間での連絡、チャット等に起因して紛争等（個人情報の流出や誹謗中傷を理由とする紛争を含みますが、これらに限られません。）が生じた場合であっても、当社は一切責任を負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "８ にじさんじFAN CLUB専用サイト若しくはにじさんじFAN CLUB専用アプリから他のウェブサイトへのリンク、または、他のウェブサイトからにじさんじFAN CLUB専用サイト若しくはにじさんじFAN CLUB専用アプリへのリンクが提供されている場合でも、当社は、にじさんじFAN CLUB専用サイト及びにじさんじFAN CLUB専用アプリ以外の当社の管理しないウェブサイト及びアプリケーション並びにそこから得られる情報に関して、いかなる理由に基づいても一切の責任を負わないものとします。",
                    (0, s.jsx)("br", {}),
                    "９ 理由の如何を問わず、本コンテンツ等の利用または本規約に規定する当社の措置に関連して会員に生じた損害につき当社が損害賠償責任を負う場合であっても、当社は、当社に故意または重過失が存する場合を除き、当該会員が本コンテンツの対価として支払った利用料の総額を限度額として賠償責任を負うものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１８条（秘密保持）",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children:
                    "会員は、本コンテンツ等に関連して当社が会員に対して秘密に取り扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取り扱うものとし、第三者に開示することはできないものとします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第１９条（会員情報の取扱い）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社による会員の情報の取扱いについては、別途に定める当社プライバシーポリシー（",
                    (0, s.jsx)("a", {
                      className: eV().link,
                      href: "https://www.anycolor.co.jp/privacy/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "https://www.anycolor.co.jp/privacy/",
                    }),
                    "）によるものとし、会員は、当社がこのプライバシーポリシーに従って会員の情報を取扱うことについて同意するものとします。",
                    (0, s.jsx)("br", {}),
                    "２ 当社は、会員が当社に提供した情報、データ等を、個人を特定できない形での統計的な情報として、当社の裁量で、利用及び公開することができるものとし、会員は、これに異議を唱えないものとします。",
                    (0, s.jsx)("br", {}),
                    "３ 当社は、サーバーの稼動状況や統計障害情報の分析、会員の利便性向上のためのサイトマーケティングへの利用を目的として、Google Analytics・Sentry等を使用し、会員のアクセスログ・操作画面等の収集・解析を行い、会員は、この会員のアクセスログ・操作画面等の収集・解析について同意するものとします。",
                    (0, s.jsx)("br", {}),
                    "４ この他、会員が当社の各種サービス利用登録時に当社に送信した情報、会員が当社の各種サービスを利用するために登録情報のほかに追加で送信した情報、全会員のサービスの利用状況に関する情報は、当社のデータベースに蓄積され、同データベースは当社にその権利が帰属します。会員は、当社が同データベースを当社のプライバシーポリシーに定める利用目的の範囲内で当社が提供する各種サービスの運用に利用できることを承諾します。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２０条（第三者サービスの利用の同意）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "会員は、にじさんじFAN CLUB専用サイトまたはにじさんじFAN CLUB専用アプリを利用することによりYouTubeの利用規約（",
                    (0, s.jsx)("a", {
                      className: eV().link,
                      href: "https://www.youtube.com/t/terms",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "https://www.youtube.com/t/terms",
                    }),
                    "）にもご同意いただいたものとみなします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２１条（本規約等の変更）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 当社は、本規約を変更、追加、削除等（以下「変更等」といいます。）することがあります。",
                    (0, s.jsx)("br", {}),
                    "２ 当社は、前項に基づき本規約を変更等する場合には、会員に対し、相当期間前までに、当社の定める方法により変更等の内容及び変更後の本規約の効力発生時期を通知するものとします。",
                    (0, s.jsx)("br", {}),
                    "３ 第１項に定める本規約の変更が、会員の利益に適合するものである場合または本規約の目的に反せず、かつ、合理的なものである場合には、会員が本規約の変更に同意したものとみなし、前項に定める変更後の本規約の効力発生時期より、変更後の本規約の効力が発生するものとします。",
                    (0, s.jsx)("br", {}),
                    "４ 前項の規定にかかわらず、第２項に定める変更後の本規約の効力発生時期以降に、会員が本コンテンツ等を利用した場合には、会員は、本規約の変更に同意したものとみなします。",
                    (0, s.jsx)("br", {}),
                    "５ 会員は、自己の責任において、随時、本規約の最新の内容を確認のうえ、本コンテンツ等の利用を行うものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２２条（連絡／通知）",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children:
                    "本コンテンツ等に関する問い合わせその他の会員から当社に対する連絡は、当社の定める方法で行うものとします。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２３条（本コンテンツの利用者たる地位の譲渡等）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 会員は、当社の書面による事前の承諾なく、本コンテンツ等の利用者たる地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。",
                    (0, s.jsx)("br", {}),
                    "２ 当社は、本コンテンツ等に係る事業を他者に譲渡した場合には、当該事業譲渡に伴い本契約上の地位、本契約に基づく権利及び義務並びに会員の登録情報その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、会員は、係る譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２４条（分離可能性）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 本規約のいずれかの条項またはその一部が、法令に基づいて無効または執行不能と判断された場合であっても、本規約の残りの規定及び無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。",
                    (0, s.jsx)("br", {}),
                    "２ 本規約等の規定の一部がある利用者との関係で無効とされまたは取り消された場合でも、本規約等はその他の利用者との関係では有効とします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２５条（準拠法及び管轄裁判所）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 本契約の準拠法は日本法とします。",
                    (0, s.jsx)("br", {}),
                    "２ 本契約に起因し、または関連する一切の紛争については、東京地方裁判所または東京簡易裁判所を第一審の専属的合意管轄裁判所とします。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().title,
                  children: "第２６条（権利侵害の場合の取扱い）",
                }),
                (0, s.jsxs)("p", {
                  className: eV().content,
                  children: [
                    "１ 本コンテンツ等内において、ご自身の権利侵害がなされている場合または第三者の権利侵害をした場合には、当該権利の種類・内容、侵害態様、相手方及びご自身の氏名・住所電話番号を当社までご連絡ください。",
                    (0, s.jsx)("br", {}),
                    "２ 前項に基づきご連絡いただいたとしても、当社が何らかの行為を行うことを保証するものではありません。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: eV().section,
              children: [
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2020年5月25日制定】",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2021年2月8日改定】",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2021年5月17日改定】",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2021年8月6日改定】",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2024年5月7日改定】",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2024年8月26日改定】",
                }),
                (0, s.jsx)("p", {
                  className: eV().content,
                  children: "【2026年3月10日改定】",
                }),
              ],
            }),
          ],
        });
      var eZ = a(55487),
        ez = a.n(eZ);
      let eJ = () =>
        (0, s.jsxs)("div", {
          className: ez().termsOfUse,
          "data-testid": "FanclubLegal",
          children: [
            (0, s.jsxs)("h1", {
              className: ez().pageTitle,
              children: [
                "にじさんじFAN CLUB",
                (0, s.jsx)("br", {}),
                "特定商取引法に基づく表記",
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", { className: ez().title, children: "事業者" }),
                (0, s.jsx)("p", {
                  className: ez().content,
                  children: "ANYCOLOR株式会社",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", { className: ez().title, children: "代表者" }),
                (0, s.jsx)("p", {
                  className: ez().content,
                  children: "田角陸",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "ホームページ",
                }),
                (0, s.jsx)("p", {
                  className: ez().content,
                  children: (0, s.jsx)("a", {
                    className: ez().link,
                    href: J.Gp.JP_CORPORATE_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: J.Gp.JP_CORPORATE_URL,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", { className: ez().title, children: "所在地" }),
                (0, s.jsxs)("p", {
                  className: ez().content,
                  children: [
                    "<本社>",
                    (0, s.jsx)("br", {}),
                    "〒107-0052",
                    (0, s.jsx)("br", {}),
                    "東京都港区赤坂9-7-2",
                    (0, s.jsx)("br", {}),
                    "ミッドタウン・イースト11F",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "お問い合わせ",
                }),
                (0, s.jsxs)("p", {
                  className: ez().content,
                  children: [
                    "下記サービスホームページの問い合わせフォームよりご連絡ください。",
                    (0, s.jsx)("br", {}),
                    "連絡先電話についても、同お問い合わせフォームよりご請求いただければ、遅滞なく開示いたします。",
                    (0, s.jsx)("br", {}),
                    "ただし、お取引やサービスについてのお問い合わせは、電話では受け付けておりませんのでご注意ください。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "サービスホームページURL",
                }),
                (0, s.jsx)("p", {
                  className: ez().content,
                  children: (0, s.jsx)(M(), {
                    href: J.Gp.FAN_CLUB_TOP_URL,
                    className: ez().link,
                    children: J.Gp.FAN_CLUB_TOP_URL,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "販売価格／役務の対価",
                }),
                (0, s.jsxs)("p", {
                  className: ez().content,
                  children: [
                    "・本サービスをご利用いただくには、当社所定の方法により、所定の支払期日までに、月額基本料金として、月額会費を支払う必要がございます。",
                    (0, s.jsx)("br", {}),
                    "・また、上記月額会費とは別途、各種コンテンツ利用料を支払っていただくことで、各種オプションサービスをご利用いただけます。",
                    (0, s.jsx)("br", {}),
                    "・月額会費及びコンテンツ利用料の金額や支払い方法については、サービスホームページにてご確認ください。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "代金の支払時期／支払方法",
                }),
                (0, s.jsx)("p", {
                  className: ez().content,
                  children:
                    "クレジット決済（前払い）、コンビニ決済（前払い）※コンビニ決済では１９０円の手数料が発生します。",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "サービスの提供時間／商品の引渡時期",
                }),
                (0, s.jsxs)("p", {
                  className: ez().content,
                  children: [
                    "・月額会費のお支払いが完了次第、本サービス内の各ファンクラブへの入会が可能となります。",
                    (0, s.jsx)("br", {}),
                    "・各オプションサービスに対応した各コンテンツ利用料のお支払いが完了次第、速やかに当該コンテンツを提供いたします。",
                    (0, s.jsx)("br", {}),
                    "・オプションサービスのうち、商品の引き渡しが必要となるものにつきましては、各コンテンツ利用料のお支払い完了次第、速やかに当該商品を発送いたします。送料については、各商品ページにてご確認ください。",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: ez().section,
              children: [
                (0, s.jsx)("p", {
                  className: ez().title,
                  children: "キャンセル・返金等",
                }),
                (0, s.jsxs)("p", {
                  className: ez().content,
                  children: [
                    "・お客様都合での本サービス利用申込みのキャンセル、本サービス会員からの退会等に伴う返金は一切いたしません。",
                    (0, s.jsx)("br", {}),
                    "・下記「返金が生じる場合」には、お客様から受領した月額会費のうち下記「返金額」記載の金額を返金いたします。",
                    (0, s.jsx)("br", {}),
                    "【返金が生じる場合】",
                    (0, s.jsx)("br", {}),
                    "\xa0① 弊社所属のバーチャルライバーまたはタレント等の卒業または脱退により、当該バーチャルライバーまたはタレントのファンクラブが閉鎖した場合",
                    (0, s.jsx)("br", {}),
                    "\xa0② 理由の如何を問わず、本サービスの提供が終了した場合",
                    (0, s.jsx)("br", {}),
                    "【返金額】",
                    (0, s.jsx)("br", {}),
                    "・お客様から受領した月額会費のうち、未消化月分にかかる月額会費相当分",
                    (0, s.jsx)("br", {}),
                    "例１：お客様が月額会費を６か月分まとめてお支払いいただいた時点から４０日後にタレントの脱退により、当該ファンクラブが閉鎖となったときは、４か月分の月額会費相当分を返金いたします。",
                    (0, s.jsx)("br", {}),
                    "例２：お客様が月額会費を１か月分お支払いいただいた時点から１０日後にタレントの脱退により、当該ファンクラブが閉鎖となったときは、返金対象となりません。",
                  ],
                }),
              ],
            }),
          ],
        });
      var eK = a(23565),
        eQ = a.n(eK);
      let eX = (e) => {
        let { helps: n, isAppClient: a } = e,
          l = (0, t.useRouter)(),
          r = l.query,
          { t: o } = (0, L.$G)(),
          m = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          l.isReady &&
            r.slug &&
            m.current &&
            m.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, [l.isReady, r.slug]);
        let d = (e) => !!e && r.slug === e;
        return (0, s.jsxs)("div", {
          className: eQ().fanclubHelp,
          "data-testid": "FanclubHelp",
          children: [
            (0, s.jsx)(I.V1, { title: "FANCLUB HELP", className: eQ().title }),
            (0, s.jsxs)("section", {
              className: eQ().section,
              children: [
                (0, s.jsx)("h2", {
                  className: eQ().content,
                  children: o(a ? "description.app" : "description.web", {
                    ns: "help",
                  }),
                }),
                (0, s.jsx)("ul", {
                  children: n.map((e) =>
                    (0, s.jsx)(
                      "li",
                      {
                        className: c()(
                          eQ().listItem,
                          d(null == e ? void 0 : e.slug) ? eQ().anker : "",
                        ),
                        id: d(null == e ? void 0 : e.slug) ? e.slug : void 0,
                        ref: d(null == e ? void 0 : e.slug) ? m : null,
                        children: (0, s.jsxs)(I.UQ, {
                          isInitialOpen: d(null == e ? void 0 : e.slug),
                          className: eQ().border,
                          children: [
                            (0, s.jsx)("span", { children: e.title }),
                            (0, s.jsx)("div", {
                              className: eQ().body,
                              dangerouslySetInnerHTML: { __html: e.content },
                            }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      };
      var e$ = a(8163),
        e0 = a(79142),
        e1 = a.n(e0);
      let e2 = (e) => {
        let { userInfo: n } = e,
          { isLoggedIn: a } = (0, d.Eu)(),
          { userLicenses: t } = (0, e$.L_)(),
          l = (0, i.useRef)(null),
          {
            isScrollEnd: r,
            unReadFanclubSlugs: c,
            moreContentAvailable: o,
            onAnnouncementDetail: p,
            onScroll: _,
            managementAnnouncements: u,
            announcementDetail: h,
          } = (0, e$.WX)(),
          { onToggleFanclubInfoState: f } = (0, d.SE)();
        return (
          (0, i.useEffect)(() => {
            (async () => {
              await f(n);
            })();
          }, [f, n]),
          (0, s.jsx)("div", {
            className: e1().container,
            ref: l,
            onScroll: () => _(l.current),
            children: (0, s.jsx)(m.u$, {
              isLoggedIn: a,
              isScrollEnd: r,
              isApp: !0,
              moreContentAvailable: o,
              managementAnnouncements: u,
              announcementDetail: h,
              userLicenses: t,
              unReadFanclubSlugs: c,
              onAnnouncementDetail: p,
            }),
          })
        );
      };
      var e5 = a(30552),
        e6 = a(27974),
        e8 = a.n(e6);
      let e3 = (e) => {
        let { className: n = "", statusCode: a, message: t } = e,
          l = String(null != a ? a : ""),
          { width: r } = (0, e5.Z)(),
          [o, m] = (0, i.useState)(100);
        return (
          (0, i.useEffect)(() => {
            m(r / 8);
          }, [r]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(nL, {
                pageTitle: l,
                pageUrl: l,
                pageOgImage: "",
                noIndex: !0,
              }),
              (0, s.jsx)("div", {
                className: c()(e8().error, n),
                "data-testid": "Error",
                children: (0, s.jsx)("div", {
                  className: e8().container,
                  children: (0, s.jsxs)("div", {
                    className: e8().frame,
                    children: [
                      a &&
                        (0, s.jsx)("p", {
                          className: e8().errorCode,
                          children: l,
                        }),
                      (0, s.jsx)("div", {
                        className: e8().iconWrapper,
                        children: (0, s.jsx)(W.Z, {
                          src: "/simusanji/icon/error.svg",
                          width: Math.min(o, 100),
                          height: Math.min(o, 100),
                          alt: "404",
                        }),
                      }),
                      t &&
                        (0, s.jsx)("p", {
                          className: e8().errorMessage,
                          children: t,
                        }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
      var e4 = a(40309),
        e7 = a.n(e4);
      let e9 = (e) => {
        let {
            fanclubDetail: n,
            isPaymentModalOpen: a,
            isTransition: t,
            isMenuProcessing: l,
            isProcessing: r,
            currentStepData: o,
            confirmDialogData: d,
            selectedStepValues: p,
            incompleteKomojuOrder: _,
            pickPayAmountWithTax: u,
            onTogglePaymentModal: h,
            onOpenConfirmDialog: f,
            onSelectedMenu: x,
            onSelectedBack: j,
            stripeElementForm: b,
          } = e,
          v = "plan" === o.step,
          N = "complete" === o.step,
          [g, y] = (0, i.useState)(0),
          [C, w] = (0, i.useState)(!1),
          [L, k] = (0, i.useState)(""),
          [T, S] = (0, i.useState)(null),
          B = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          if (!B.current) return;
          let e = new ResizeObserver((e) => {
            for (let n of e) y(n.contentRect.height);
          });
          B.current && e.observe(B.current);
        }, [B]);
        let A = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            (k(e), w(!C));
          },
          M = (e) => {
            let n = e.currentTarget;
            S(n.naturalWidth / n.naturalHeight);
          };
        return (0, s.jsxs)("div", {
          className: c()(e7().paymentModal, !a && e7().disabled),
          "data-testid": "PaymentModal",
          children: [
            (0, s.jsx)(I.zx, {
              className: e7().closeButton,
              onClick: () =>
                ["registered", "payment", "confirm"].includes(o.step) &&
                !o.isKomojuOrder
                  ? f("paymentModalClose")
                  : h(),
            }),
            (0, s.jsxs)("div", {
              className: c()(e7().modalBase, t && e7().trans),
              children: [
                (0, s.jsx)("div", {
                  className: c()(e7().container, N && e7().hide),
                  children: (0, s.jsx)(m.eg, {
                    fanclubDetail: n,
                    isTransition: t,
                    isProcessing: r,
                    menuWidgetHeight: g,
                    currentStepData: o,
                    selectedStepValues: p,
                    incompleteKomojuOrder: _,
                    pickPayAmountWithTax: u,
                    onSelectedBack: j,
                    onOpenConfirmDialog: f,
                    onTogglePaymentModal: h,
                    stripeElementForm: b,
                  }),
                }),
                (0, s.jsx)(m.J$, { fanclubDetail: n, isCompleteStep: N }),
                v &&
                  (0, s.jsx)(m.xz, {
                    fanclubDetail: n,
                    isTransition: t,
                    menuWidgetHeight: g,
                    toggleModal: A,
                  }),
                (0, s.jsx)(m.DK, {
                  className: c()(!N && e7().hide),
                  fanclubDetail: n,
                  currentStepData: o,
                  onTogglePaymentModal: h,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: c()(e7().menuWidgetWrap),
              children: (0, s.jsx)(m.gf, {
                isTransition: t,
                isMenuProcessing: l,
                menuWidgetRef: B,
                currentStepData: o,
                pickPayAmountWithTax: u,
                fanclubSlug: n.slug,
                onTogglePaymentModal: h,
                onSelectedMenu: x,
              }),
            }),
            C &&
              (0, s.jsx)(
                () =>
                  (0, s.jsx)("div", {
                    className: e7().previewModal,
                    onClick: () => {
                      A();
                    },
                    children: (0, s.jsxs)("div", {
                      className: e7().modal,
                      style: T ? { aspectRatio: "".concat(T) } : void 0,
                      children: [
                        (0, s.jsx)(I.zx, { className: e7().closeButton }),
                        (0, s.jsx)(W.Z, {
                          src: L,
                          fill: !0,
                          onLoad: M,
                          onClick: (e) => {
                            e.stopPropagation();
                          },
                          alt: "PREMIUM 特典",
                        }),
                      ],
                    }),
                  }),
                {},
              ),
            (0, s.jsx)(m.gP, { confirmDialogData: d }),
          ],
        });
      };
      var ne = a(31257),
        nn = a.n(ne);
      let na = (e) => {
        let {
            mypageModalStatus: n,
            displayFanclubDetailSlug: a,
            isPageTransitioning: l,
            isSpMenuOpen: r,
            activeMypageMenus: o,
            paymentMethodWithLicenses: d,
            openMypageModal: p,
            closeMypageModal: _,
            onChangeFanclubDetailSlug: u,
            onToggleSpMenu: h,
            confirmDialogStatus: f,
            confirmDialogProps: x,
            onDeletePaymentMethodConfirm: j,
            isApp: b = !1,
          } = e,
          v = (0, i.useRef)(null),
          N = (0, t.useRouter)();
        return (
          (0, i.useEffect)(() => {
            "close" !== n && v.current && v.current.scrollTo(0, 0);
          }, [n]),
          (0, i.useEffect)(() => {
            if (!N.isReady) return;
            let e = () => {
              "close" !== n && _();
            };
            return (
              N.events.on("routeChangeStart", e),
              () => {
                N.events.off("routeChangeStart", e);
              }
            );
          }, [_, n, N]),
          (0, s.jsxs)("div", {
            className: c()(
              nn().mypageModal,
              "close" !== n && nn().isOpen,
              b && nn().isApp,
            ),
            "data-testid": "MypageModal",
            children: [
              !b &&
                (0, s.jsx)(I.zx, { className: nn().closeButton, onClick: _ }),
              (0, s.jsxs)("div", {
                className: c()(nn().modalBase, b && nn().isApp),
                children: [
                  !b &&
                    (0, s.jsx)("div", {
                      className: nn().menuArea,
                      children: (0, s.jsx)(m.LY, {
                        mypageModalStatus: n,
                        activeMypageMenus: o,
                        openMypageModal: p,
                      }),
                    }),
                  (0, s.jsx)("div", {
                    className: c()(
                      nn().contentArea,
                      l && nn().transitioning,
                      b && nn().isApp,
                    ),
                    ref: v,
                    children: {
                      close: null,
                      "mypage-top": (0, s.jsx)(m.qs, {
                        activeMypageMenus: o,
                        openMypageModal: p,
                      }),
                      "fanclub-subscription": (0, s.jsx)(m.d7, {
                        openMypageModal: p,
                        closeMypageModal: _,
                        onChangeFanclubDetailSlug: u,
                        isApp: b,
                      }),
                      "fanclub-detail": (0, s.jsx)(m.fx, {
                        displayFanclubDetailSlug: a,
                        openMypageModal: p,
                        closeMypageModal: _,
                        onChangeFanclubDetailSlug: u,
                        isApp: b,
                      }),
                      "payment-setting": (0, s.jsx)(m.$5, {
                        paymentMethodWithLicenses: d,
                        onDeletePaymentMethodConfirm: j,
                        openMypageModal: p,
                        onChangeFanclubDetailSlug: u,
                      }),
                    }[n],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: c()(nn().spMypageMenuWidget, r && nn().open),
                children: (0, s.jsx)("div", {
                  className: nn().spMypageMenu,
                  children: (0, s.jsx)(m.LY, {
                    mypageModalStatus: n,
                    activeMypageMenus: o,
                    openMypageModal: p,
                  }),
                }),
              }),
              !b &&
                (0, s.jsx)(I.zx, {
                  className: c()(nn().spMenuButton, r && nn().toClose),
                  onClick: h,
                  children: (0, s.jsx)("p", { children: r ? "CLOSE" : "MENU" }),
                }),
              (0, s.jsx)(nl, { confirmDialogStatus: f, confirmDialogProps: x }),
            ],
          })
        );
      };
      var ns = a(84100),
        nt = a.n(ns);
      let nl = (e) => {
        let { confirmDialogStatus: n, confirmDialogProps: a } = e,
          { heading: t, message: l, options: i } = a,
          r = { label: nt().label, caution: nt().caution };
        return (0, s.jsx)("div", {
          className: c()(nt().confirmDialog, "close" !== n && nt().open),
          children: (0, s.jsxs)("div", {
            className: nt().dialogBase,
            children: [
              (0, s.jsx)("p", { className: nt().heading, children: t }),
              (0, s.jsx)("p", { className: nt().text, children: l }),
              (0, s.jsx)("div", {
                className: nt().buttonList,
                children: i.map((e, n) =>
                  (0, s.jsx)(
                    "button",
                    {
                      className: c()(nt().button, r[e.type]),
                      onClick: e.onClick,
                      children: e.label,
                    },
                    n,
                  ),
                ),
              }),
              (0, s.jsx)("div", {
                className: c()(
                  nt().loading,
                  "processing" === n && nt().processing,
                ),
                children: (0, s.jsx)(I.Ho, {}),
              }),
            ],
          }),
        });
      };
      var ni = a(25935),
        nr = a(41104),
        nc = a.n(nr);
      let no = (e) => {
        let { closeModal: n } = e,
          { t: a } = (0, L.$G)(["contact", "common"]);
        return (
          (0, i.useEffect)(
            () => (
              (document.body.style.top = "-".concat(window.scrollY, "px")),
              (document.body.style.position = "fixed"),
              () => {
                let e = document.body.style.top;
                ((document.body.style.position = ""),
                  (document.body.style.top = ""),
                  window.scrollTo(0, -1 * parseInt(e || "0")));
              }
            ),
          ),
          (0, s.jsxs)("div", {
            className: nc().privacyModal,
            "data-testid": "ContactPrivacyModal",
            children: [
              (0, s.jsx)("div", {
                className: nc().overlayForClose,
                onClick: n,
              }),
              (0, s.jsxs)("div", {
                className: nc().inner,
                children: [
                  (0, s.jsx)("h2", {
                    className: nc().title,
                    children: a("atelierColorsPrivacy.title", {
                      ns: "contact",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: nc().content,
                    children: [
                      (0, s.jsx)("p", {
                        children: a("atelierColorsPrivacy.introduction", {
                          ns: "contact",
                        }),
                      }),
                      a("atelierColorsPrivacy.contents", {
                        ns: "contact",
                        returnObjects: !0,
                      }).map((e) =>
                        (0, s.jsxs)(
                          "dl",
                          {
                            children: [
                              (0, s.jsx)("dt", {
                                className: nc().heading,
                                children: e.heading,
                              }),
                              e.text.map((e, n) =>
                                (0, s.jsx)(
                                  "dd",
                                  { children: (0, ni.ZP)(e) },
                                  n,
                                ),
                              ),
                            ],
                          },
                          e.heading,
                        ),
                      ),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: nc().footer,
                    children: (0, s.jsx)("button", {
                      className: nc().close,
                      onClick: n,
                      children: a("modal.close", { ns: "common" }).toString(),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var nm = a(14673),
        nd = a.n(nm);
      let np = (e) => {
        let { onClickAgree: n } = e,
          { t: a } = (0, L.$G)(["common"]),
          [t, l] = (0, i.useState)(!1);
        return (0, s.jsxs)("div", {
          className: nd().termsOfUseCheckModal,
          "data-testid": "TermsOfUseCheckModal",
          children: [
            (0, s.jsx)("div", { className: nd().overlay }),
            (0, s.jsxs)("div", {
              className: nd().inner,
              children: [
                (0, s.jsx)("p", {
                  className: nd().title,
                  children: a("termsOfUse.heading", { ns: "common" }),
                }),
                (0, s.jsx)("p", {
                  className: nd().description,
                  children: (0, s.jsx)(L.cC, {
                    i18nKey: "termsOfUse.body",
                    ns: "common",
                    components: {
                      l: (0, s.jsx)("a", {
                        href: "/terms-of-use",
                        className: nd().toTermsOfUse,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "にじさんじポータル利用規約",
                      }),
                      l2: (0, s.jsx)("a", {
                        href: "/fanclub-terms",
                        className: nd().toTermsOfUse,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "にじさんじFAN CLUB 利用規約",
                      }),
                      l3: (0, s.jsx)("a", {
                        href: "https://www.anycolor.co.jp/privacy",
                        className: nd().toTermsOfUse,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "プライバシーポリシー",
                      }),
                    },
                  }),
                }),
                (0, s.jsx)(o.XZ, {
                  option: {
                    id: "agree",
                    name: "agree",
                    value: "agree",
                    label: a("termsOfUse.agree", { ns: "common" }),
                  },
                  isChecked: t,
                  onChange: () => {
                    l(!t);
                  },
                  className: nd().checkbox,
                }),
                (0, s.jsx)(I.zx, {
                  buttonType: "rainbow",
                  onClick: n,
                  disabled: !t,
                  className: nd().agree,
                  children: a("termsOfUse.use", { ns: "common" }),
                }),
              ],
            }),
          ],
        });
      };
      var n_ = a(6223),
        nu = a(31089),
        nh = a(27571),
        nf = a(50542),
        nx = a(15738),
        nj = a.n(nx);
      let nb = (e) => {
        var n, a, t;
        let {
            stream: l,
            streamLiver: r,
            allLivers: m,
            closeModal: _,
            onClickLoginOrRegister: u,
          } = e,
          h = (0, E.b)(),
          { t: f } = (0, L.$G)(["streams"]),
          { currentParrotUser: x } = (0, d.Eu)(),
          { bookmarkedLiverIds: j } = (0, d.SE)(),
          { disableFavButton: b, onClickFavorite: v } = (0, p.s4)(),
          { setStream: N, streamDetail: g } = (0, nf.l)(),
          [y, C] = (0, i.useState)(!1),
          w = (0, i.useRef)(null),
          T =
            null !==
              (a =
                null === (n = r.profile) || void 0 === n ? void 0 : n.color) &&
            void 0 !== a
              ? a
              : k.$Ui,
          S = "ja" === h ? r.name : r.enName,
          B = encodeURIComponent(l.title),
          A = "http://x.com/intent/tweet?url="
            .concat(l.url, "&text=")
            .concat(B, "&hashtags=")
            .concat(
              f("detailModal.hashTag", { ns: "streams" }) +
                (r.hidden ? "" : ",".concat(S.replace(/\s+/g, ""))),
            ),
          O =
            null !==
              (t = l.channel.main ? r.subscriberCount : r.secondChSubscCount) &&
            void 0 !== t
              ? t
              : 0,
          P =
            "twitch" === l.platform
              ? "detailModal.watchTwitch"
              : "detailModal.watchYoutube",
          R = (e) => m.filter((n) => n.id === e)[0],
          F = () => {
            C(!0);
          };
        (0, i.useEffect)(() => {
          N(l);
        }, []);
        let U = l["event-livers"]
          .map((e) => {
            let n = R(e["external-id"]);
            return n && !n.hidden ? n : null;
          })
          .filter((e) => null !== e);
        return (0, s.jsxs)(n_.Z, {
          className: c()(
            nj().detailModal,
            "twitch" === l.platform ? nj().twitch : "",
          ),
          "data-testid": "LiveStreamDetailModal",
          children: [
            (0, s.jsx)("div", { className: nj().overlayForClose, onClick: _ }),
            (0, s.jsx)(I.zx, {
              className: nj().closeButton,
              onClick: _,
              "data-testid": "CloseButton",
            }),
            (0, s.jsxs)("div", {
              className: nj().inner,
              children: [
                (0, s.jsxs)("div", {
                  className: nj().content,
                  children: [
                    (0, s.jsxs)("header", {
                      className: nj().contentHeader,
                      children: [
                        (0, s.jsxs)("div", {
                          className: nj().startAt,
                          children: [
                            (0, s.jsx)("p", {
                              className: nj().date,
                              children: (0, es.B)(l["start-at"]).format("M/DD"),
                            }),
                            (0, s.jsxs)("p", {
                              className: c()(
                                nj().time,
                                "on_air" === l.status ? nj().nowOnAir : "",
                              ),
                              children: [
                                "on_air" === l.status &&
                                  (0, s.jsx)("span", {
                                    className: nj().onAir,
                                    children: "ON AIR",
                                  }),
                                (0, s.jsx)("span", {
                                  children: (0, es.B)(l["start-at"]).format(
                                    "HH:mm",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !r.hidden &&
                          (0, s.jsxs)(M(), {
                            href: "/talents/l/".concat(r.slug),
                            className: nj().toLiverDetail,
                            children: [
                              (0, s.jsx)("span", {
                                children: f("detailModal.profile", {
                                  ns: "streams",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: nj().iconWrapper,
                                children: (0, s.jsx)(W.Z, {
                                  src: "/simusanji/icon/page_next_bold.svg",
                                  alt: f("detailModal.profile", {
                                    ns: "streams",
                                  }),
                                  fill: !0,
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: nj().scroll,
                      children: [
                        (0, s.jsx)("div", {
                          className: nj().thumbnailWrapper,
                          children: (0, s.jsx)(nh.C, {
                            platform: l.platform,
                            thumbnailUrl: l["thumbnail-url"],
                            fallbackThumbnailUrl: l["fallback-thumbnail-url"],
                            alt: l.title,
                            displayType: "modal",
                            liverColor: T,
                            fill: !0,
                          }),
                        }),
                        (0, s.jsx)("p", {
                          className: nj().title,
                          children: l.title,
                        }),
                        (0, s.jsxs)("div", {
                          className: nj().liver,
                          children: [
                            (0, s.jsx)("div", {
                              className: nj().iconWrapper,
                              children: (0, s.jsx)(W.Z, {
                                src: r.images.head.url,
                                fetchwidth: 200,
                                alt: r.name,
                                fill: !0,
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("p", {
                                  className: nj().name,
                                  children: l.channel.main ? S : l.channel.name,
                                }),
                                "youtube" === l.platform &&
                                  (0, s.jsxs)("p", {
                                    className: nj().subscribersNum,
                                    children: [
                                      f("detailModal.subscriber", {
                                        ns: "streams",
                                      }),
                                      " ",
                                      "ja" === h
                                        ? "".concat(O / 1e4, "万人")
                                        : "".concat(O / 1e3, "k"),
                                    ],
                                  }),
                              ],
                            }),
                            (0, s.jsx)(I._6, {
                              className: nj().favoriteButton,
                              isFavorite: !!x && j.includes(r.id),
                              onClick: () => (x ? !b.current && v(r.id) : F()),
                            }),
                          ],
                        }),
                        y &&
                          (0, s.jsx)("div", {
                            className: nj().suggestLoginModal,
                            ref: w,
                            children: (0, s.jsx)(o.DS, {
                              mainText: f("detailModal.suggestLogin", {
                                ns: "streams",
                              }),
                              visible: y,
                              onClickLoginOrRegister: u,
                              closeModal: () => {
                                C(!1);
                              },
                            }),
                          }),
                        !!U.length &&
                          (0, s.jsx)("div", {
                            className: nj().otherLivers,
                            children: U.map((e, n) =>
                              (0, s.jsx)(
                                M(),
                                {
                                  href: "/talents/l/".concat(e.slug),
                                  className: nj().iconWrapper,
                                  "data-testid":
                                    "LiveStreamDetailModalOtherLiver",
                                  children: (0, s.jsx)(W.Z, {
                                    src: e.images.head.url,
                                    fetchwidth: 200,
                                    alt: e.name,
                                    fill: !0,
                                  }),
                                },
                                n,
                              ),
                            ),
                          }),
                        "youtube" === l.platform &&
                          (0, s.jsx)("p", {
                            className: nj().description,
                            children: null == g ? void 0 : g.description,
                          }),
                      ],
                    }),
                    (0, s.jsxs)("footer", {
                      className: nj().contentFooter,
                      children: [
                        (0, s.jsxs)("div", {
                          className: nj().left,
                          children: [
                            (0, s.jsx)("div", {
                              className: nj().iconWrapper,
                              children: (0, s.jsx)(nu.v, {
                                platform: l.platform,
                                className: nj().platformIcon,
                              }),
                            }),
                            (0, s.jsx)("span", {
                              children: f(P, { ns: "streams" }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("a", {
                          href: l.url,
                          target: "_blank",
                          rel: "noreferrer",
                          className: c()(
                            "twitch" === l.platform && nj().toTwitch,
                            "youtube" === l.platform && nj().toYoutube,
                          ),
                          children: [
                            (0, s.jsx)("span", {
                              children: f("detailModal.toStream", {
                                ns: "streams",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: nj().iconWrapper,
                              children: (0, s.jsx)(W.Z, {
                                src: "/simusanji/icon/external_link_white.svg",
                                alt: "".concat(l.platform, "_external_link"),
                                fill: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: nj().buttons,
                  children: [
                    (0, s.jsxs)("a", {
                      href: A,
                      target: "_blank",
                      rel: "noreferrer",
                      className: nj().xShare,
                      children: [
                        (0, s.jsx)("div", {
                          className: nj().iconWrapper,
                          children: (0, s.jsx)(W.Z, {
                            src: "/simusanji/icon/sns/x_white.svg",
                            alt: "X",
                            fill: !0,
                          }),
                        }),
                        (0, s.jsx)("span", {
                          className: nj().spOnly,
                          children: f("detailModal.post", { ns: "streams" }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("button", {
                      onClick: () => {
                        let e = (0, es.B)(l["start-at"]).format(
                            "YYYYMMDDTHHmmss",
                          ),
                          n = l["end-at"]
                            ? (0, es.B)(l["end-at"]).format("YYYYMMDDTHHmmss")
                            : (0, es.B)(l["start-at"])
                                .add(1, "hour")
                                .format("YYYYMMDDTHHmmss"),
                          a = "".concat(e, "/").concat(n),
                          s = encodeURIComponent("[".concat(S, "] ")) + B,
                          t = encodeURI(
                            '<a href="'
                              .concat(l.url, '" "target="_blank">')
                              .concat(l.url, "</a>"),
                          );
                        window.location.href =
                          "https://www.google.com/calendar/render?action=TEMPLATE&text="
                            .concat(s, "&dates=")
                            .concat(a, "&details=")
                            .concat(t);
                      },
                      className: c()(nj().addToCalendar, nj().spOnly),
                      children: [
                        (0, s.jsx)("div", {
                          className: nj().iconWrapper,
                          children: (0, s.jsx)(W.Z, {
                            src: "/simusanji/icon/calendar.svg",
                            alt: "Google Calendar",
                            fill: !0,
                          }),
                        }),
                        (0, s.jsx)("span", {
                          children: f("detailModal.addCalendar", {
                            ns: "streams",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var nv = a(92695),
        nN = a(90216),
        ng = a.n(nN);
      let ny = () => {
        let e = (0, t.useRouter)(),
          [n, a] = (0, i.useState)(!1),
          { errorForDialog: l, onCloseErrorDialog: r } = (0, d.Eu)();
        (0, i.useEffect)(() => {
          a(!!l);
        }, [l]);
        let {
          title: o,
          description: m,
          execute: p,
        } = l instanceof nv.Hb
          ? {
              title: "予期せぬエラーが発生しました。",
              description: "時間を置いてもう一度お試しください。",
            }
          : l instanceof nv.fF
            ? {
                title: "セッションの有効期限が切れました。",
                description: "もう一度ログインしてください。",
                execute: {
                  label: "ログイン",
                  onClick: () => {
                    (0, b.x4)(e.asPath);
                  },
                },
              }
            : { title: "予期せぬエラーが発生しました。" };
        return (0, s.jsx)("div", {
          className: c()(ng().clientSideErrorDialog, n && ng().open),
          "data-testid": "ErrorDialog",
          children: (0, s.jsxs)("div", {
            className: ng().inner,
            children: [
              (0, s.jsx)("div", { className: ng().errorIcon }),
              (0, s.jsx)("p", { className: ng().title, children: o }),
              m &&
                (0, s.jsx)("p", { className: ng().description, children: m }),
              (0, s.jsxs)("div", {
                className: ng().buttonList,
                children: [
                  (0, s.jsx)("button", {
                    className: c()(ng().button, ng().cancel),
                    onClick: r,
                    children: "閉じる",
                  }),
                  p &&
                    (0, s.jsx)("button", {
                      className: c()(ng().button, ng().execute),
                      onClick: p.onClick,
                      children: p.label,
                    }),
                ],
              }),
            ],
          }),
        });
      };
      var nC = a(9008),
        nw = a.n(nC);
      let nL = (e) => {
        let {
            pageTitle: n,
            pageUrl: a,
            pageOgImage: t,
            pageDescription: l,
            noIndex: i = !1,
            redirectTo: r,
            canonical: c,
          } = e,
          o = (0, E.b)(),
          m = "ja" === o ? "にじさんじ" : "NIJISANJI",
          d = n ? "".concat(n, " | ").concat(m) : m,
          p =
            l ||
            ("ja" === o
              ? "ANYCOLOR株式会社が運営するVTuber/バーチャルライバーグループ「にじさんじ」公式サイトです。にじさんじの最新情報やライバー紹介、お問い合わせフォームなどを掲載しています。"
              : 'This is the official website of VTuber/Virtual Liver group "Nijisanji" operated by ANYCOLOR Inc. The site provides the latest information on NijiSanji, introductions of the group\'s drivers, and an inquiry form.'),
          _ = a
            ? ""
                .concat(J.Bq.PARROT_FRONTEND_URL)
                .concat("en" === o ? "en/" : "")
                .concat(a, "/")
            : J.Bq.PARROT_FRONTEND_URL,
          u = t || "".concat(J.Bq.PARROT_FRONTEND_URL, "ogp.png");
        return (0, s.jsxs)(nw(), {
          children: [
            // (0, s.jsx)("title", { children: d }),
            (0, s.jsx)("meta", { charSet: "utf-8" }),
            (0, s.jsx)("meta", { name: "description", content: p }),
            r &&
              (0, s.jsx)("meta", {
                httpEquiv: "Refresh",
                content: "0; URL=".concat(J.Bq.PARROT_FRONTEND_URL).concat(r),
              }),
            (0, s.jsx)("meta", { property: "og:title", content: d }),
            (0, s.jsx)("meta", { property: "og:type", content: "website" }),
            (0, s.jsx)("meta", { property: "og:url", content: _ }),
            (0, s.jsx)("meta", { property: "og:description", content: p }),
            (0, s.jsx)("meta", {
              property: "og:site_name",
              content: "ja" === o ? "にじさんじ" : "NIJISANJI",
            }),
            (0, s.jsx)("meta", { property: "og:image", content: u }),
            (0, s.jsx)("meta", { property: "og:locale", content: "ja_JP" }),
            (0, s.jsx)("meta", { property: "fb:app_id", content: "" }),
            (0, s.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("meta", {
              name: "twitter:site",
              content: "@nijisanji_app",
            }),
            (0, s.jsx)("meta", { name: "twitter:title", content: d }),
            (0, s.jsx)("meta", { name: "twitter:description", content: p }),
            (0, s.jsx)("meta", { name: "twitter:url", content: _ }),
            (0, s.jsx)("meta", { name: "twitter:image", content: u }),
            (0, s.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            }),
            (0, s.jsx)("meta", {
              name: "format-detection",
              content: "telephone=no",
            }),
            i && (0, s.jsx)("meta", { name: "robots", content: "noindex" }),
            c && (0, s.jsx)("link", { rel: "canonical", href: c }),
            // (0, s.jsx)("link", {
            //   rel: "shortcut icon",
            //   type: "image/svg+xml",
            //   href: "https://www.nijisanji.jp/favicon.svg",
            // }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-touch-icon.png",
            }),
            (0, s.jsx)("link", {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            }),
            (0, s.jsx)("link", {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossOrigin: "true",
            }),
          ],
        });
      };
      var nI = a(16602),
        nk = a.n(nI);
      let nT = (e) => {
          let {
            unshippedPremiumUserLicenses: n,
            pendingShipmentPremiumUserLicenses: a,
            shippedMembershipCardShipments: t,
            membershipCardShipmentsSchedule: l,
            requestInputs: i,
            requestInputsError: r,
            onChangeContactInput: c,
            onClickSetAlbUserInfo: o,
            confirm: d,
          } = e;
          return (0, s.jsxs)("div", {
            className: nk().membershipCard,
            "data-testid": "FanclubMembershipCardTop",
            children: [
              (0, s.jsx)(I.V1, {
                className: nk().title,
                title: "ファンクラブ 会員証お申し込み",
              }),
              (0, s.jsx)(m.vb, {
                unshippedPremiumUserLicenses: n,
                pendingShipmentPremiumUserLicenses: a,
                shippedMembershipCardShipments: t,
              }),
              n &&
                n.length > 0 &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (null == l ? void 0 : l.shipmentDateText) &&
                      (0, s.jsx)("div", {
                        className: nk().messageBar,
                        children: (0, s.jsx)(I.Nm, {
                          enableClose: !1,
                          children: (0, s.jsx)("p", {
                            children: "発送予定日：".concat(l.shipmentDateText),
                          }),
                        }),
                      }),
                    (0, s.jsx)(m.LD, {
                      className: nk().step,
                      step: 1,
                      stepTranslationKey: "membership-card-steps",
                      langOption: { lng: "ja" },
                    }),
                    (0, s.jsx)(m.g8, {
                      className: nk().form,
                      requestInputs: i,
                      requestInputsError: r,
                      onChangeContactInput: c,
                      onClickSetAlbUserInfo: o,
                    }),
                    (0, s.jsx)("button", {
                      className: nk().confirm,
                      onClick: d,
                      children: "入力内容を確認する",
                    }),
                  ],
                }),
            ],
          });
        },
        nS = (e) => {
          let { requestInputs: n, goBackToInput: a, submit: t } = e,
            l = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              l &&
                l.current &&
                l.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
            }, [l]),
            (0, s.jsxs)("div", {
              className: ev().contact,
              "data-testid": "FanclubMembershipCardConfirm",
              children: [
                (0, s.jsx)(I.V1, {
                  className: ev().title,
                  title: "FAN CLUB 会員証お申し込み",
                }),
                (0, s.jsx)(m.Rn, {
                  className: ev().upperPart,
                  isMembershipCardRequest: !0,
                }),
                (0, s.jsx)("div", {
                  ref: l,
                  children: (0, s.jsx)(m.LD, {
                    className: ev().step,
                    step: 2,
                    stepTranslationKey: "membership-card-steps",
                    langOption: { lng: "ja" },
                  }),
                }),
                (0, s.jsx)(m.Lv, { className: ev().confirm, requestInputs: n }),
                (0, s.jsx)(m.j$, {
                  className: ev().privacy,
                  isMembershipCardRequest: !0,
                }),
                (0, s.jsxs)("div", {
                  className: ev().buttonsWrapper,
                  children: [
                    (0, s.jsx)("button", {
                      className: ev().back,
                      onClick: a,
                      children: "編集に戻る",
                    }),
                    (0, s.jsx)("button", {
                      className: ev().submit,
                      onClick: t,
                      children: "送信",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        nB = () => {
          let { maintenanceInfo: e, isLoading: n } = (0, e$.fV)(),
            a = (0, i.useCallback)(
              () =>
                n
                  ? ""
                  : (null == e ? void 0 : e.message) ||
                    "ただいまメンテナンス中です。しばらくお待ちください。",
              [n, e],
            );
          return (0, s.jsx)("div", {
            "data-testid": "FanclubMaintenance",
            children: (0, s.jsx)(e3, { statusCode: 503, message: a() }),
          });
        };
    },
    50542: function (e, n, a) {
      "use strict";
      a.d(n, {
        l: function () {
          return v;
        },
        I: function () {
          return b;
        },
      });
      var s = a(11163),
        t = a(67294),
        l = a(27484),
        i = a.n(l),
        r = a(78953),
        c = a(5575),
        o = a(79607);
      let m = new (a(49520).ZP)("parrot-config");
      m.version(1).stores({ streams: "++id, display, filter" });
      let d = m.table("streams");
      var p = a(66477),
        _ = a(5435),
        u = a(92695),
        h = a(34365),
        f = a(1493);
      let x = async (e) => {
          let n = await fetch(
            "".concat(c.F0.ApiRoute.STREAMS, "?day_offset=").concat(e),
          );
          return await n.json();
        },
        j = async (e) => {
          try {
            let n = await fetch(
              ""
                .concat(c.F0.ApiRoute.STREAM_DETAIL, "?id=")
                .concat(e.id, "&platform=")
                .concat(e.platform),
            );
            return await n.json();
          } catch (e) {
            return null;
          }
        },
        b = (e, n) => {
          let { currentParrotUser: a } = (0, o.Eu)(),
            { bookmarkedLiverIds: l } = (0, o.SE)(),
            {
              modalStream: c,
              modalLiver: m,
              updateModalContext: j,
              referrer: b,
            } = (0, o.sV)(),
            [v, N] = (0, t.useState)(e),
            [g, y] = (0, t.useState)("all"),
            [C, w] = (0, t.useState)("list"),
            [L, I] = (0, t.useState)("all"),
            k = (0, t.useMemo)(() => {
              let e = "all" === L ? v : v.filter((e) => e.platform === L);
              if ("all" === g) return e;
              if (0 === l.length) return [];
              let n = new Set(l),
                a = e.filter((e) => n.has((0, f.Q9)(e)));
              return (
                a.sort((e, n) =>
                  e["start-at"] !== n["start-at"]
                    ? i()(e["start-at"]).isAfter(n["start-at"])
                      ? 1
                      : -1
                    : 0,
                ),
                a
              );
            }, [v, g, l, L]),
            [T, S] = (0, t.useState)(void 0),
            [B, A] = (0, t.useState)(!1),
            [M, O] = (0, t.useState)(),
            [W, P] = (0, t.useState)(),
            { error: R, setError: F } = (0, _.VI)({
              statusCode: null,
              message: null,
            }),
            [E, U] = (0, t.useState)([]),
            [D, Y] = (0, t.useState)(!0),
            G = (0, h.b)(),
            [H, V] = (0, t.useState)(!1),
            q = (0, s.useRouter)(),
            Z = (0, t.useRef)(!1),
            z = (0, t.useRef)(new Set(n || [])),
            J = (0, t.useCallback)(
              (e) => {
                z.current.has(e) ||
                  (z.current.add(e),
                  (async () => {
                    V(!0);
                    try {
                      let n = await x(e);
                      N((e) => {
                        let a = e.concat(n);
                        return (
                          a.sort((e, n) =>
                            e["start-at"] !== n["start-at"]
                              ? i()(e["start-at"]).isAfter(n["start-at"])
                                ? 1
                                : -1
                              : 0,
                          ),
                          a
                        );
                      });
                    } catch (n) {
                      (z.current.delete(e), F((0, u.BU)(n)));
                    } finally {
                      V(!1);
                    }
                  })());
              },
              [F],
            ),
            K = () => {
              let e = null == m ? void 0 : m.slug;
              return (
                !!e && b[0].includes(e) && null !== b[1].match(/\/streams$/)
              );
            },
            Q = async () => {
              try {
                var e, n;
                let a = await d.get(1);
                (w(
                  null !== (e = null == a ? void 0 : a.display) && void 0 !== e
                    ? e
                    : "list",
                ),
                  I(
                    null !== (n = null == a ? void 0 : a.platform) &&
                      void 0 !== n
                      ? n
                      : "all",
                  ),
                  S(a));
              } catch (e) {
                (console.error(
                  "Failed to fetch stream preferences: ".concat(e),
                ),
                  w("list"));
              }
            },
            X = async () => {
              try {
                let e = { id: 1, display: C, filter: g, platform: L };
                (await d.put(e), S(e));
              } catch (e) {
                console.error(
                  "Failed to upsert stream preferences: ".concat(e),
                );
              }
            },
            $ = (e, n) => {
              (O(e), P(n), j(e, n), A(!0));
            };
          return (
            (0, t.useEffect)(() => {
              D || X();
            }, [C, g, L]),
            (0, t.useEffect)(() => {
              Z.current ||
                ((Z.current = !0),
                (async () => {
                  await Q();
                  try {
                    let [e, n, a] = await Promise.all([
                      (0, r.GB)({
                        locale: G,
                        affiliation: "nijisanji",
                        includeAll: !0,
                      }),
                      (0, r.GB)({
                        locale: G,
                        affiliation: "virtuareal",
                        includeAll: !0,
                      }),
                      (0, r.GB)({
                        locale: G,
                        affiliation: "nijisanjien",
                        includeAll: !0,
                      }),
                    ]);
                    U([...e, ...n, ...a]);
                  } catch (e) {
                    (F((0, u.BU)(e)), Y(!1));
                  }
                  (K() && c && m && $(c, m), Y(!1));
                })());
            }, []),
            (0, t.useEffect)(() => {
              a && (null == T ? void 0 : T.filter) === "favorite"
                ? y("favorite")
                : y("all");
            }, [a, T]),
            {
              locale: G,
              isLoading: D,
              error: R,
              displayedStreams: k,
              livers: E,
              filter: g,
              display: C,
              platform: L,
              isAdditionalLoading: H,
              onAdditionalFetch: J,
              onChangeFilter: (e) => {
                y(e);
              },
              onChangeDisplay: (e) => {
                w(e);
              },
              onChangePlatform: (e) => {
                I(e);
              },
              onClickLoginOrRegister: () => {
                (0, p.x4)(q.asPath);
              },
              openDetailModal: $,
              isOpenDetailModal: B,
              openingModalDetail: M,
              openingModalLiver: W,
              closeDetailModal: () => {
                (j(null, null), A(!1));
              },
            }
          );
        },
        v = () => {
          let [e, n] = (0, t.useState)(null),
            [a, s] = (0, t.useState)(null),
            { error: l, setError: i } = (0, _.VI)({
              statusCode: null,
              message: null,
            });
          return (
            (0, t.useEffect)(() => {
              (async () => {
                try {
                  if (!e) return;
                  s(await j(e));
                } catch (e) {
                  i((0, u.BU)(e));
                }
              })();
            }, [e]),
            { setStream: n, streamDetail: a, error: l }
          );
        };
    },
    25255: function (e) {
      e.exports = {
        calendarRow: "calendar-row_calendarRow__7jq62",
        date: "calendar-row_date__0vECJ",
        day: "calendar-row_day__1wmO8",
        events: "calendar-row_events__CyDTA",
        exist: "calendar-row_exist__K4s6C",
        saturday: "calendar-row_saturday__TzB6W",
        sunday: "calendar-row_sunday__nRSjP",
        holiday: "calendar-row_holiday___VPcJ",
      };
    },
    17059: function (e) {
      e.exports = {
        confirmForCompany: "confirm-for-company_confirmForCompany__0nlWg",
        confirmItem: "confirm-for-company_confirmItem__2rzcx",
        label: "confirm-for-company_label__WfZAG",
        content: "confirm-for-company_content__eTax1",
      };
    },
    21458: function (e) {
      e.exports = {
        confirmForOrdinary: "confirm-for-ordinary_confirmForOrdinary__YMIsc",
        confirmItem: "confirm-for-ordinary_confirmItem__O8NwU",
        label: "confirm-for-ordinary_label__KpF_h",
        content: "confirm-for-ordinary_content__afP_z",
      };
    },
    21158: function (e) {
      e.exports = {
        formForCompany: "form-for-company_formForCompany__4hU0X",
        formItem: "form-for-company_formItem__x1Izr",
        error: "form-for-company_error__aXU9x",
      };
    },
    75716: function (e) {
      e.exports = {
        formForOrdinary: "form-for-ordinary_formForOrdinary__TZhJE",
        formItem: "form-for-ordinary_formItem__VksUc",
        error: "form-for-ordinary_error__FViSO",
        attention: "form-for-ordinary_attention__3nFtu",
      };
    },
    18994: function (e) {
      e.exports = {
        notes: "notes_notes__bAU1E",
        introduction: "notes_introduction__sa93K",
        content: "notes_content___NzJX",
        title: "notes_title__wDsrW",
        textList: "notes_textList__X7pOq",
        annotation: "notes_annotation__3BZWP",
        ja: "notes_ja__DVA9n",
        en: "notes_en__wyBEJ",
        caution: "notes_caution__JcSyl",
      };
    },
    31826: function (e) {
      e.exports = {
        privacyNotes: "privacy-notes_privacyNotes__bQVzn",
        link: "privacy-notes_link__C6xep",
      };
    },
    61046: function (e) {
      e.exports = {
        steps: "steps_steps___aYS_",
        inner: "steps_inner____BYP",
        label: "steps_label__fOvoV",
        colored: "steps_colored__hoMFY",
        line: "steps_line__f7UVr",
        gradient: "steps_gradient__IvkEe",
        step1: "steps_step1__G6iQP",
        step2: "steps_step2__X1I2_",
        step3: "steps_step3__2CZAX",
        gray: "steps_gray__pnUqA",
      };
    },
    29877: function (e) {
      e.exports = {
        contentBanners: "content-banner-list_contentBanners__r6jCq",
        fanclub: "content-banner-list_fanclub__DIgQ6",
        fanclubIcon: "content-banner-list_fanclubIcon__U0CJk",
        banners: "content-banner-list_banners__7PSim",
        imageWrapper: "content-banner-list_imageWrapper__CV77u",
      };
    },
    88253: function (e) {
      e.exports = {
        contentBannerSlider: "content-banner-slider_contentBannerSlider__wCRnS",
        swiper: "content-banner-slider_swiper__Fty5E",
        imageWrapper: "content-banner-slider_imageWrapper__8bTT5",
      };
    },
    70452: function (e) {
      e.exports = {
        contentCard: "content-card_contentCard__K_sQ3",
        contentLink: "content-card_contentLink__KZr_6",
        contentHeader: "content-card_contentHeader__OpCfR",
        contentBody: "content-card_contentBody__g1re_",
        fanclubLink: "content-card_fanclubLink__IJF1S",
        iconWrapper: "content-card_iconWrapper__Tdhbr",
        informationWrapper: "content-card_informationWrapper__sJJHa",
        date: "content-card_date__7a3BS",
        textClip: "content-card_textClip__gHQPo",
        title: "content-card_title__YfQ7K",
        thumbnail: "content-card_thumbnail__GvymI",
      };
    },
    88133: function (e) {
      e.exports = {
        contentDetailHeader: "content-detail-header_contentDetailHeader__mIr_3",
        title: "content-detail-header_title__639M1",
        information: "content-detail-header_information__us1Tf",
        fanclubInfo: "content-detail-header_fanclubInfo__Eck5h",
        fanclubIcon: "content-detail-header_fanclubIcon__LB4ZN",
        text: "content-detail-header_text__oxoGU",
        fanclubName: "content-detail-header_fanclubName__kaFcF",
        liverName: "content-detail-header_liverName__NzHui",
        activePlanName: "content-detail-header_activePlanName__3G6HR",
        premium: "content-detail-header_premium__WCyVH",
        basic: "content-detail-header_basic__Od5KC",
        pcOnly: "content-detail-header_pcOnly__X21Ka",
        spOnly: "content-detail-header_spOnly___0H2I",
      };
    },
    78714: function (e) {
      e.exports = {
        contentDetailInner: "content-detail-inner_contentDetailInner__9qBZU",
        wrapper: "content-detail-inner_wrapper__UYmrr",
        thumbnail: "content-detail-inner_thumbnail__EjOsw",
        backRoundButton: "content-detail-inner_backRoundButton__3ja4J",
        tagList: "content-detail-inner_tagList__4HiYH",
        tagListBottom: "content-detail-inner_tagListBottom__brFm_",
        emptyMessage: "content-detail-inner_emptyMessage__68mw4",
      };
    },
    46161: function (e) {
      e.exports = {
        contentMemberOnlyNotice:
          "content-member-only-notice_contentMemberOnlyNotice__7zvGP",
        header: "content-member-only-notice_header__53tk_",
        body: "content-member-only-notice_body__fh1FK",
        title: "content-member-only-notice_title__kPOmt",
        name: "content-member-only-notice_name__NY3MA",
        wrapper: "content-member-only-notice_wrapper__yDNik",
        liverText: "content-member-only-notice_liverText__ix56_",
        liverIcon: "content-member-only-notice_liverIcon__w_Eq_",
        nijisanjiFanclub: "content-member-only-notice_nijisanjiFanclub___RqQd",
        nijisanjiFanclubIcon:
          "content-member-only-notice_nijisanjiFanclubIcon__TtDtV",
        nijisanjiFanclubText:
          "content-member-only-notice_nijisanjiFanclubText__3hWnD",
        detailButton: "content-member-only-notice_detailButton__ehths",
        pcOnly: "content-member-only-notice_pcOnly__oWbzK",
        spOnly: "content-member-only-notice_spOnly__7XWUk",
      };
    },
    96276: function (e) {
      e.exports = {
        addressAlertBar: "address-alert-bar_addressAlertBar__Bibt0",
        wrapper: "address-alert-bar_wrapper__3dlX3",
      };
    },
    83553: function (e) {
      e.exports = {
        appIntroduction: "app-Introduction_appIntroduction__7lqtD",
        inner: "app-Introduction_inner__8XYrk",
        appIconWrapper: "app-Introduction_appIconWrapper__gGQ3l",
        appIcon: "app-Introduction_appIcon__IlUKa",
        appLinks: "app-Introduction_appLinks__3O_Mb",
        ios: "app-Introduction_ios__iZvan",
        android: "app-Introduction_android__wjlc_",
        swiperWrapper: "app-Introduction_swiperWrapper__w1sc3",
        swiper: "app-Introduction_swiper__OewVn",
        swiperSlide: "app-Introduction_swiperSlide__R71Lq",
        liversWrapper: "app-Introduction_liversWrapper__TFNPl",
        liverImageWrapper: "app-Introduction_liverImageWrapper__GEkG3",
        pcOnly: "app-Introduction_pcOnly__9WtvN",
        spOnly: "app-Introduction_spOnly__m8Mla",
      };
    },
    1801: function (e) {
      e.exports = {
        contentCardWrapper: "content-card_contentCardWrapper__bs4bZ",
        contentCard: "content-card_contentCard__uIFgR",
        contentHeader: "content-card_contentHeader___tmjI",
        contentBody: "content-card_contentBody__TAqhy",
        fanclubLink: "content-card_fanclubLink__gkQk0",
        iconWrapper: "content-card_iconWrapper__lsjEe",
        informationWrapper: "content-card_informationWrapper__7_8S1",
        date: "content-card_date__DdHeO",
        textClip: "content-card_textClip__Rc1yy",
        title: "content-card_title__xUkbY",
        thumbnail: "content-card_thumbnail__jVlit",
      };
    },
    84001: function (e) {
      e.exports = {
        fanclubHeader: "fanclub-header_fanclubHeader__ZpQ_P",
        container: "fanclub-header_container__0WbT5",
        subContainer: "fanclub-header_subContainer__Lz5H_",
        image: "fanclub-header_image___YMOI",
        iconLine: "fanclub-header_iconLine__vq9Pa",
        iconContainer: "fanclub-header_iconContainer__tDZ_i",
        iconOverride: "fanclub-header_iconOverride__tcBwn",
        titleLine: "fanclub-header_titleLine__BM8qF",
        fanclubName: "fanclub-header_fanclubName__QptIt",
        liverName: "fanclub-header_liverName__jGuwP",
        description: "fanclub-header_description___99j4",
      };
    },
    71834: function (e) {
      e.exports = {
        fanclubIntroduction: "fanclub-introduction_fanclubIntroduction__B08kV",
        introWrapper: "fanclub-introduction_introWrapper__TMf_i",
        introHeading: "fanclub-introduction_introHeading__iUXbG",
        introText: "fanclub-introduction_introText__0iYun",
        videoWrapper: "fanclub-introduction_videoWrapper__Sl6rs",
        videoTitle: "fanclub-introduction_videoTitle__7FdEW",
        videoList: "fanclub-introduction_videoList__zttHV",
        videoItem: "fanclub-introduction_videoItem__4FfYV",
        image: "fanclub-introduction_image__EgxjL",
        fanclubLink: "fanclub-introduction_fanclubLink__Iyhdc",
        fanclubLinkIcon: "fanclub-introduction_fanclubLinkIcon__OJQI1",
        innerLink: "fanclub-introduction_innerLink__O1LLY",
        pcOnly: "fanclub-introduction_pcOnly__1Rf4D",
        spOnly: "fanclub-introduction_spOnly__UKChj",
      };
    },
    64083: function (e) {
      e.exports = {
        fanclubPlan: "fanclub-plan_fanclubPlan__DmS5Z",
        fanclubPlanInner: "fanclub-plan_fanclubPlanInner__7XlN0",
        liverPlans: "fanclub-plan_liverPlans__5e0oj",
        liverPlansBody: "fanclub-plan_liverPlansBody__eG_Gk",
        basic: "fanclub-plan_basic__FTpOq",
        premium: "fanclub-plan_premium__e9_QO",
        nijisanjiAllPlans: "fanclub-plan_nijisanjiAllPlans__UPWZH",
        heading: "fanclub-plan_heading__ljcxF",
        fanclub: "fanclub-plan_fanclub__vXS2G",
        nijisanjiAll: "fanclub-plan_nijisanjiAll__33tdJ",
        note: "fanclub-plan_note__8t9fo",
        warning: "fanclub-plan_warning__H3rfS",
        link: "fanclub-plan_link__6OzUi",
        premiumPlanBenefits: "fanclub-plan_premiumPlanBenefits__tAWHO",
      };
    },
    31640: function (e) {
      e.exports = {
        favoriteFilter: "favorite-filter_favoriteFilter__WsuJX",
        button: "favorite-filter_button__TTAN3",
        selected: "favorite-filter_selected__TAHGv",
        favorite: "favorite-filter_favorite__E_h1s",
        ja: "favorite-filter_ja__wG8p_",
        en: "favorite-filter_en__e5S4Y",
        all: "favorite-filter_all__oCvkM",
        unloggedinModal: "favorite-filter_unloggedinModal__deDK7",
        suggestLoginModal: "favorite-filter_suggestLoginModal___uW_c",
      };
    },
    13976: function (e) {
      e.exports = {
        announcement: "fanclub-info-body_announcement__ohczt",
        item: "fanclub-info-body_item__h9XGG",
        wrap: "fanclub-info-body_wrap__ucNGv",
        accordion: "fanclub-info-body_accordion__rANiK",
        img: "fanclub-info-body_img__Bl6PI",
        announce: "fanclub-info-body_announce__xeKXO",
        publish: "fanclub-info-body_publish__m0ATr",
        info: "fanclub-info-body_info__g_fJx",
        dot: "fanclub-info-body_dot__6DVdE",
        title: "fanclub-info-body_title__sb8Z3",
        bar: "fanclub-info-body_bar__LcxBl",
        paymentHistory: "fanclub-info-body_paymentHistory__wNy7I",
        time: "fanclub-info-body_time__J26Xh",
        komojuIncomplete: "fanclub-info-body_komojuIncomplete__TL66A",
        incomplete: "fanclub-info-body_incomplete__cBZZM",
        fanclub: "fanclub-info-body_fanclub___dPAq",
        name: "fanclub-info-body_name__67vZJ",
        license: "fanclub-info-body_license__I_qcQ",
        capture: "fanclub-info-body_capture__MifBX",
        event: "fanclub-info-body_event__TMFxH",
        charge: "fanclub-info-body_charge__nvhRn",
        button: "fanclub-info-body_button__0OoLf",
        alert: "fanclub-info-body_alert__5w6o5",
        subscription: "fanclub-info-body_subscription__UBomv",
        body: "fanclub-info-body_body__vvEkC",
        titleWrap: "fanclub-info-body_titleWrap__ep2xH",
        plan: "fanclub-info-body_plan__Tb9ff",
        nameWrap: "fanclub-info-body_nameWrap__s2mas",
        expire: "fanclub-info-body_expire__bPTVd",
        orderStatusMessage: "fanclub-info-body_orderStatusMessage__1Zp5B",
        pcOnly: "fanclub-info-body_pcOnly__SuxzS",
        spOnly: "fanclub-info-body_spOnly__STYjt",
      };
    },
    10454: function (e) {
      e.exports = {
        mypageFanclubDetail: "mypage-fanclub-detail_mypageFanclubDetail__Fv9I7",
        backFanclubSubscription:
          "mypage-fanclub-detail_backFanclubSubscription__V_KJe",
        changePlanButton: "mypage-fanclub-detail_changePlanButton__0cIV_",
        subscriptionDetail: "mypage-fanclub-detail_subscriptionDetail__g6Cu8",
        isApp: "mypage-fanclub-detail_isApp__yUymU",
        noticeArea: "mypage-fanclub-detail_noticeArea__Ntzga",
        fanclubInfo: "mypage-fanclub-detail_fanclubInfo__qdhUe",
        coverImage: "mypage-fanclub-detail_coverImage__gAy3W",
        licenseInfo: "mypage-fanclub-detail_licenseInfo__elOQg",
        liverName: "mypage-fanclub-detail_liverName__MZnGR",
        fanclubName: "mypage-fanclub-detail_fanclubName__pMWIP",
        plan: "mypage-fanclub-detail_plan__vMGxb",
        name: "mypage-fanclub-detail_name__KvGRl",
        subscriptionInfo: "mypage-fanclub-detail_subscriptionInfo__P83z1",
        warning: "mypage-fanclub-detail_warning__GW6TG",
        paymentHistoryItem: "mypage-fanclub-detail_paymentHistoryItem__QY7s7",
        paymentDate: "mypage-fanclub-detail_paymentDate__FKSuq",
        paymentMethod: "mypage-fanclub-detail_paymentMethod__ACnDL",
        paymentAmount: "mypage-fanclub-detail_paymentAmount__JVyQU",
        transactionActionsItem:
          "mypage-fanclub-detail_transactionActionsItem__Eybn9",
        emptyPaymentHistory: "mypage-fanclub-detail_emptyPaymentHistory__mZKjC",
      };
    },
    56781: function (e) {
      e.exports = {
        mypageFanclubSubscription:
          "mypage-fanclub-subscription_mypageFanclubSubscription__8NTtt",
        backMypageTop: "mypage-fanclub-subscription_backMypageTop__YU5_m",
        noticeArea: "mypage-fanclub-subscription_noticeArea__Mdc56",
        subscriptionItem: "mypage-fanclub-subscription_subscriptionItem__PMr4L",
        fanclubInfo: "mypage-fanclub-subscription_fanclubInfo__t0EXG",
        coverImage: "mypage-fanclub-subscription_coverImage__WUXCm",
        licenseInfo: "mypage-fanclub-subscription_licenseInfo__p8WR6",
        plan: "mypage-fanclub-subscription_plan__NX_Nf",
        name: "mypage-fanclub-subscription_name__GTTFV",
        bar: "mypage-fanclub-subscription_bar__xQVK0",
      };
    },
    62834: function (e) {
      e.exports = {
        mypageMenu: "mypage-menu_mypageMenu__mmv6g",
        menuItem: "mypage-menu_menuItem__Nq7lX",
        menuSecondary: "mypage-menu_menuSecondary__1k9WA",
        menuPrimary: "mypage-menu_menuPrimary__b3Fw6",
        current: "mypage-menu_current__Lvg1v",
        unClickable: "mypage-menu_unClickable__m1zmj",
        pageLink: "mypage-menu_pageLink__RR1au",
        disabled: "mypage-menu_disabled__QD5H_",
        internalLink: "mypage-menu_internalLink__YkhVw",
        externalLink: "mypage-menu_externalLink__EYQu9",
        userInfo: "mypage-menu_userInfo__NbFVl",
        userIcon: "mypage-menu_userIcon__eeDeD",
        userName: "mypage-menu_userName__gdjCP",
        userEmail: "mypage-menu_userEmail__scLmx",
      };
    },
    31893: function (e) {
      e.exports = {
        mypagePaymentSetting:
          "mypage-payment-setting_mypagePaymentSetting__pR1JO",
        backMypageTop: "mypage-payment-setting_backMypageTop__UD402",
        paymentMethodItem: "mypage-payment-setting_paymentMethodItem__DEbeZ",
        cardInfo: "mypage-payment-setting_cardInfo__cuV2Y",
        brand: "mypage-payment-setting_brand__b7NVN",
        label: "mypage-payment-setting_label__SkWDv",
        deleteButton: "mypage-payment-setting_deleteButton__9_K2E",
        disabled: "mypage-payment-setting_disabled__ZawLI",
        additionalInfo: "mypage-payment-setting_additionalInfo__yrHeH",
        warning: "mypage-payment-setting_warning__ZWvyv",
        warningMessage: "mypage-payment-setting_warningMessage__QtYCY",
        licenseList: "mypage-payment-setting_licenseList__RfMko",
        licenseItem: "mypage-payment-setting_licenseItem__J1g1f",
        ellipsis: "mypage-payment-setting_ellipsis__u8HiZ",
        warningRemarks: "mypage-payment-setting_warningRemarks__YM9AQ",
        remarks: "mypage-payment-setting_remarks__O5p8R",
      };
    },
    17603: function (e) {
      e.exports = {
        mypageTop: "mypage-top_mypageTop__eP3QS",
        anycolorId: "mypage-top_anycolorId__zkjFk",
        userIcon: "mypage-top_userIcon__qLwCc",
        userInfo: "mypage-top_userInfo__3X9Lf",
        id: "mypage-top_id__6Bu8w",
        name: "mypage-top_name__cLnqj",
        email: "mypage-top_email__pRgiN",
        userNav: "mypage-top_userNav__qaWQj",
        link: "mypage-top_link__zCino",
        noticeArea: "mypage-top_noticeArea__V_mwU",
        fanclubMenu: "mypage-top_fanclubMenu__J0SWV",
        fanclubMenuItem: "mypage-top_fanclubMenuItem___NbPF",
        subscription: "mypage-top_subscription__5X2lD",
        paymentHistory: "mypage-top_paymentHistory__FbdZj",
        paymentSetting: "mypage-top_paymentSetting__HAKRD",
        membership: "mypage-top_membership__uCbHc",
        maintenance: "mypage-top_maintenance__GmJ0m",
        disabled: "mypage-top_disabled__sgwWk",
        logout: "mypage-top_logout__pqmgd",
        pcOnly: "mypage-top_pcOnly__I4ipl",
      };
    },
    46148: function (e) {
      e.exports = {
        paymentBackgroundImage:
          "payment-background-image_paymentBackgroundImage__QBqpf",
        imageWrap: "payment-background-image_imageWrap__NmAUy",
        haze: "payment-background-image_haze__z808B",
        left: "payment-background-image_left__H2Ddv",
        center: "payment-background-image_center__wqQpU",
        right: "payment-background-image_right__G5azU",
        hide: "payment-background-image_hide__woZG_",
      };
    },
    76220: function (e) {
      e.exports = {
        paymentComplete: "payment-complete_paymentComplete__zaL8M",
        upperContents: "payment-complete_upperContents__vUMaZ",
        imageArea: "payment-complete_imageArea__qpUD2",
        liverImageWrap: "payment-complete_liverImageWrap__ly2gf",
        messageArea: "payment-complete_messageArea__TOs8y",
        thankyouWrap: "payment-complete_thankyouWrap__LAbGp",
        underContents: "payment-complete_underContents__pmL1W",
        appInformation: "payment-complete_appInformation__VPtD_",
        appWrap: "payment-complete_appWrap__1EjT_",
        iconWrap: "payment-complete_iconWrap__CWfMe",
        description: "payment-complete_description__2Qrx_",
        downloads: "payment-complete_downloads__GpeWJ",
        apple: "payment-complete_apple__S8hv_",
        google: "payment-complete_google__m5G0o",
        swiperWrap: "payment-complete_swiperWrap__BSNvC",
        swiperSlide: "payment-complete_swiperSlide__JDy2e",
        fanclubJoinPost: "payment-complete_fanclubJoinPost__dsWah",
        text: "payment-complete_text__1WT__",
        link: "payment-complete_link__F3k6v",
        post: "payment-complete_post__jdVsR",
        button: "payment-complete_button__WGeWm",
        label: "payment-complete_label__oF2BS",
        hazeList: "payment-complete_hazeList___v3QD",
        haze: "payment-complete_haze___4emU",
        pcOnly: "payment-complete_pcOnly__VCT51",
        spOnly: "payment-complete_spOnly__ehaxb",
      };
    },
    6860: function (e) {
      e.exports = {
        paymentConfirmDialog:
          "payment-confirm-dialog_paymentConfirmDialog__86uxg",
        dialogBase: "payment-confirm-dialog_dialogBase__DTQSk",
        heading: "payment-confirm-dialog_heading__SvcsR",
        text: "payment-confirm-dialog_text__DBSeH",
        cardInfo: "payment-confirm-dialog_cardInfo__IFKqq",
        buttonList: "payment-confirm-dialog_buttonList__9CNDM",
        button: "payment-confirm-dialog_button__qG247",
        execute: "payment-confirm-dialog_execute__8_U3g",
        cancel: "payment-confirm-dialog_cancel__IhYK8",
        loading: "payment-confirm-dialog_loading__0LT8L",
        processing: "payment-confirm-dialog_processing__pl8Nr",
        open: "payment-confirm-dialog_open__KHqLO",
      };
    },
    70289: function (e) {
      e.exports = {
        paymentContentFrame: "payment-content-frame_paymentContentFrame__fVvBd",
        planStep: "payment-content-frame_planStep__LDgnW",
        informationWrap: "payment-content-frame_informationWrap__aCFgI",
        fanclubInformation: "payment-content-frame_fanclubInformation__IXg78",
        prevBack: "payment-content-frame_prevBack__vr_VB",
        prevBack_processing: "payment-content-frame_prevBack_processing__FEtdl",
        liverName: "payment-content-frame_liverName__XwNC2",
        fanclubName: "payment-content-frame_fanclubName___mSaV",
        planName: "payment-content-frame_planName__9A9eb",
        stepInformation: "payment-content-frame_stepInformation___83gj",
        currentStep: "payment-content-frame_currentStep__4Oqk3",
        fanclubDescription: "payment-content-frame_fanclubDescription__SdK8e",
        stepDescription: "payment-content-frame_stepDescription__UxNZL",
        registerConfirm: "payment-content-frame_registerConfirm__5vgib",
        customerConfirm: "payment-content-frame_customerConfirm__DkkWL",
        stripeForm: "payment-content-frame_stripeForm__JWGOD",
        paymentNote: "payment-content-frame_paymentNote__Vll2d",
        menuWidgetSpace: "payment-content-frame_menuWidgetSpace__ryi3E",
        trans: "payment-content-frame_trans__hN4Nn",
        hide: "payment-content-frame_hide__imqqm",
        loadingWrap: "payment-content-frame_loadingWrap__fPLeB",
        pcOnly: "payment-content-frame_pcOnly__sU9Ng",
        spOnly: "payment-content-frame_spOnly__caQOb",
      };
    },
    81626: function (e) {
      e.exports = {
        paymentMenuWidget: "payment-menu-widget_paymentMenuWidget__KGdUK",
        trans: "payment-menu-widget_trans__bFosN",
      };
    },
    30973: function (e) {
      e.exports = {
        paymentPlanInformation:
          "payment-plan-information_paymentPlanInformation__bAw0c",
        planList: "payment-plan-information_planList__YqxVf",
        titleWrapper: "payment-plan-information_titleWrapper__YJ_RJ",
        title: "payment-plan-information_title__2mcsZ",
        titleSub: "payment-plan-information_titleSub__9am8J",
        fanclubPlan: "payment-plan-information_fanclubPlan__iTsXQ",
        remarks: "payment-plan-information_remarks__tFdho",
        link: "payment-plan-information_link__AUwHh",
        caution: "payment-plan-information_caution__o_q_o",
        menuWidgetSpace: "payment-plan-information_menuWidgetSpace__nL185",
        hide: "payment-plan-information_hide__qJjPZ",
      };
    },
    35865: function (e) {
      e.exports = {
        liveStreamColumn: "live-stream-column_liveStreamColumn__zONl5",
        wideColumn: "live-stream-column_wideColumn__RDXl2",
        today: "live-stream-column_today__08dmA",
        scrollWrapper: "live-stream-column_scrollWrapper__Kq3G8",
        inner: "live-stream-column_inner__ViN71",
        list: "live-stream-column_list__ETuuv",
        tile: "live-stream-column_tile__IKZro",
        section: "live-stream-column_section__2f9e9",
        timeRange: "live-stream-column_timeRange__viS1i",
        liveStreamItemWrapper:
          "live-stream-column_liveStreamItemWrapper__H_c_y",
      };
    },
    80546: function (e) {
      e.exports = {
        liveStreamItem: "live-stream-item-tile_liveStreamItem__1R5Ye",
        nowOnAir: "live-stream-item-tile_nowOnAir__OJ7_u",
        onAir: "live-stream-item-tile_onAir__NBjGr",
        startAt: "live-stream-item-tile_startAt__39D2K",
        platformIcon: "live-stream-item-tile_platformIcon__rUYWC",
        twitchIcon: "live-stream-item-tile_twitchIcon__yL8hk",
        liver: "live-stream-item-tile_liver__mBYqS",
        liverIconWrapper: "live-stream-item-tile_liverIconWrapper__1vkkO",
        favorite: "live-stream-item-tile_favorite__Q2J_s",
        favoriteIconWrapper: "live-stream-item-tile_favoriteIconWrapper__0XCZZ",
        liverName: "live-stream-item-tile_liverName__301ok",
      };
    },
    90121: function (e) {
      e.exports = {
        liveStreamItem: "live-stream-item_liveStreamItem__Y08CT",
        wideColumn: "live-stream-item_wideColumn__SnMDF",
        today: "live-stream-item_today__6sBM_",
        inner: "live-stream-item_inner__sqh8Q",
        startAt: "live-stream-item_startAt__HVgpe",
        platformIcon: "live-stream-item_platformIcon__3Wmp2",
        twitchIcon: "live-stream-item_twitchIcon__ry_QI",
        time: "live-stream-item_time__rpAiW",
        nowOnAir: "live-stream-item_nowOnAir__57OdE",
        premiere: "live-stream-item_premiere__NVhOX",
        onAir: "live-stream-item_onAir__i2AeK",
        content: "live-stream-item_content__oTpnN",
        liver: "live-stream-item_liver__bWy8A",
        liverIconWrapper: "live-stream-item_liverIconWrapper__uLStv",
        favorite: "live-stream-item_favorite__KSiYB",
        favoriteIconWrapper: "live-stream-item_favoriteIconWrapper__tqIps",
        center: "live-stream-item_center__KIe6_",
        name: "live-stream-item_name__aInBW",
        title: "live-stream-item_title___3JEX",
        thumbnail: "live-stream-item_thumbnail__hJMzM",
        thumbnailWrapper: "live-stream-item_thumbnailWrapper__fRnPX",
      };
    },
    29380: function (e) {
      e.exports = {
        membershipCardForm: "membership-card-form_membershipCardForm__djO0f",
        anycolorInfo: "membership-card-form_anycolorInfo__r8IwA",
        anycolorBox: "membership-card-form_anycolorBox__eGBW_",
        text: "membership-card-form_text__nZb_p",
        caution: "membership-card-form_caution__JObVA",
        formItem: "membership-card-form_formItem__e8oTY",
        info: "membership-card-form_info__UtYeB",
        error: "membership-card-form_error__R2OpY",
        attention: "membership-card-form_attention__sW0qC",
      };
    },
    35518: function (e) {
      e.exports = {
        membershipCardInfo: "membership-card-info_membershipCardInfo__n9VVm",
        readText: "membership-card-info_readText__np67X",
        content: "membership-card-info_content__p7GTl",
        messageBar: "membership-card-info_messageBar__xZS1N",
        bar: "membership-card-info_bar__2z0LT",
        infoTitle: "membership-card-info_infoTitle__G4Hsb",
        infoMessage: "membership-card-info_infoMessage__qdp_Z",
        fanclubRequestInfo: "membership-card-info_fanclubRequestInfo__doMCt",
        item: "membership-card-info_item__W10Nh",
        fanclubIcon: "membership-card-info_fanclubIcon__itqvy",
        text: "membership-card-info_text__R82mn",
        fanclubName: "membership-card-info_fanclubName__ehIdt",
        liverName: "membership-card-info_liverName__xdtHL",
        pendingMessage: "membership-card-info_pendingMessage__K5SdV",
        precautions: "membership-card-info_precautions__LdtVu",
        href: "membership-card-info_href__rWbb_",
        fanclubIgnoreInfo: "membership-card-info_fanclubIgnoreInfo__SDw8y",
        ignoreItem: "membership-card-info_ignoreItem__uPSCS",
        title: "membership-card-info_title__tiTt4",
        message: "membership-card-info_message__mq95a",
        status: "membership-card-info_status__8JHPa",
        body: "membership-card-info_body__E7oSk",
        info: "membership-card-info_info__b7yK9",
        address: "membership-card-info_address__EMVUk",
      };
    },
    50806: function (e) {
      e.exports = {
        menu: "menu_menu__1JPx2",
        inner: "menu_inner__V8xQ1",
        upperContents: "menu_upperContents__2NV_H",
        logoWrapper: "menu_logoWrapper__KiIaU",
        ja: "menu_ja___ARa_",
        en: "menu_en__Jl92e",
        middleContents: "menu_middleContents__TRLxV",
        largeLinks: "menu_largeLinks__gUz27",
        textLink: "menu_textLink__IWJLk",
        externalIconList: "menu_externalIconList__BMuKY",
        externalIconWrapper: "menu_externalIconWrapper__TVcIo",
        anycolorMagazine: "menu_anycolorMagazine__gjcXA",
        nijiBuddy: "menu_nijiBuddy__tTcv1",
        officialStore: "menu_officialStore__wpg1p",
        snsColumn: "menu_snsColumn__WI3xJ",
        lowerContents: "menu_lowerContents__XrrBM",
        copyright: "menu_copyright__aGT_8",
        closeBtn: "menu_closeBtn__MZdG7",
      };
    },
    6701: function (e) {
      e.exports = {
        newsSlider: "news-slider_newsSlider__PDESv",
        swiper: "news-slider_swiper__J0J3z",
        swiperSlide: "news-slider_swiperSlide__8jMT7",
        swiperButton: "news-slider_swiperButton__55Lmr",
        prev: "news-slider_prev__kWUuC",
        next: "news-slider_next__XUeQ2",
      };
    },
    67944: function (e) {
      e.exports = {
        galleryModal: "gallery-modal_galleryModal__Ds4P3",
        open: "gallery-modal_open__Z7kUs",
        close: "gallery-modal_close__cfXBC",
        swiper: "gallery-modal_swiper__getRL",
        swiperButton: "gallery-modal_swiperButton__LCnkj",
        swiperSlide: "gallery-modal_swiperSlide__As75y",
        closeWrap: "gallery-modal_closeWrap__7Yq2H",
      };
    },
    52809: function (e) {
      e.exports = {
        fanclubSlider: "fanclub-slider_fanclubSlider__u6rfg",
        swiper: "fanclub-slider_swiper__LaM8W",
        swiperSlide: "fanclub-slider_swiperSlide___oFlV",
        swiperButton: "fanclub-slider_swiperButton__RFA2R",
        prev: "fanclub-slider_prev__lhOs1",
        next: "fanclub-slider_next___Qu3R",
        pcOnly: "fanclub-slider_pcOnly__sLnqp",
      };
    },
    16611: function (e) {
      e.exports = {
        topFanclub: "fanclub_topFanclub__yv_9M",
        detail: "fanclub_detail__VkCe5",
        description: "fanclub_description__nei5n",
        iconWrapper: "fanclub_iconWrapper__oTdUv",
        text: "fanclub_text__9S3lg",
        image: "fanclub_image__T1sbK",
        imageBezel: "fanclub_imageBezel__fOT50",
        imageWrapper: "fanclub_imageWrapper__xQv6c",
        imageBackground: "fanclub_imageBackground__Eyts_",
        downloadButtons: "fanclub_downloadButtons__kMCsx",
        buttonWrapper: "fanclub_buttonWrapper__2VFFm",
        fanclubSlider: "fanclub_fanclubSlider__9sk8u",
        button: "fanclub_button__w75jC",
        spOnly: "fanclub_spOnly__9MrTI",
      };
    },
    1645: function (e) {
      e.exports = {
        topNews: "news_topNews___9JbA",
        sectionTitleRow: "news_sectionTitleRow__9OGiB",
        slideWrapper: "news_slideWrapper__uYiNE",
        newsListButton: "news_newsListButton__Oinsp",
      };
    },
    7230: function (e) {
      e.exports = {
        calendar: "nijisanji-calendar_calendar__2ku9J",
        logoWrapper: "nijisanji-calendar_logoWrapper__Fjkbr",
        sectionTitle: "nijisanji-calendar_sectionTitle__z4_QM",
        paginationWrapper: "nijisanji-calendar_paginationWrapper__CNY5u",
        inner: "nijisanji-calendar_inner__MiL83",
        monthButton: "nijisanji-calendar_monthButton__ekXMk",
        selected: "nijisanji-calendar_selected__5drYY",
        pastMonth: "nijisanji-calendar_pastMonth__v9ZNp",
        border: "nijisanji-calendar_border__h0dzB",
        subtitle: "nijisanji-calendar_subtitle__MqxHW",
        eventList: "nijisanji-calendar_eventList__GQ9kU",
        emptyMessage: "nijisanji-calendar_emptyMessage__e8lQU",
        calendarLinkButton: "nijisanji-calendar_calendarLinkButton__3d9iA",
      };
    },
    93322: function (e) {
      e.exports = {
        nowOnAir: "now-on-air_nowOnAir__vfJik",
        sectionTitle: "now-on-air_sectionTitle___sSEF",
        list: "now-on-air_list__W_SBE",
        moreItem: "now-on-air_moreItem__Sjs81",
        empty: "now-on-air_empty___phl0",
        button: "now-on-air_button__UZapm",
      };
    },
    76766: function (e) {
      e.exports = {
        officialProgram: "official-program_officialProgram__v7gzo",
        sectionTitle: "official-program_sectionTitle__MLodv",
        officialProgramWrapper:
          "official-program_officialProgramWrapper__gHTzC",
        buttonWrap: "official-program_buttonWrap__WAKFu",
        button: "official-program_button__7KmfQ",
        pcOnly: "official-program_pcOnly__pg_bP",
      };
    },
    44449: function (e) {
      e.exports = {
        talents: "talents_talents__EWQyr",
        sectionTitleRow: "talents_sectionTitleRow__7UxzU",
        button: "talents_button__Z6LPP",
      };
    },
    79142: function (e) {
      e.exports = { container: "top_container__79VbY" };
    },
    90216: function (e) {
      e.exports = {
        clientSideErrorDialog: "error-dialog_clientSideErrorDialog__rZ1iL",
        inner: "error-dialog_inner__osicw",
        errorIcon: "error-dialog_errorIcon__cXi53",
        title: "error-dialog_title__iMnjq",
        description: "error-dialog_description____L46",
        buttonList: "error-dialog_buttonList__x0bCS",
        button: "error-dialog_button__b7nDv",
        cancel: "error-dialog_cancel__PgZ62",
        execute: "error-dialog_execute__ptOrw",
        open: "error-dialog_open__W_RPw",
      };
    },
    34568: function (e) {
      e.exports = {
        calendar: "calendar_calendar__W8x93",
        sortWrapper: "calendar_sortWrapper____X76",
        sortButton: "calendar_sortButton__vmdbg",
        active: "calendar_active__ziiqE",
        sortLabel: "calendar_sortLabel__i_UHA",
        sortIcon: "calendar_sortIcon__LqXJ4",
        sortModal: "calendar_sortModal__WUpve",
        swiper: "calendar_swiper___A6Sy",
        swiperSlide: "calendar_swiperSlide__I9GvJ",
        pageTitle: "calendar_pageTitle__XGKHd",
        paginationWrapper: "calendar_paginationWrapper__fUAp2",
        inner: "calendar_inner__r8Q7B",
        next: "calendar_next___sSi4",
        pcOnly: "calendar_pcOnly__ls3fz",
        spOnly: "calendar_spOnly__sUcqy",
      };
    },
    70062: function (e) {
      e.exports = {
        contact: "contact-complete_contact__0ONSw",
        app: "contact-complete_app__94nQB",
        title: "contact-complete_title__TniRu",
        step: "contact-complete_step__PhSp2",
        text: "contact-complete_text__3vRdM",
        userInfo: "contact-complete_userInfo__ixFZW",
        userInfoItem: "contact-complete_userInfoItem__Bqcpg",
        note: "contact-complete_note__GWjGc",
      };
    },
    54861: function (e) {
      e.exports = {
        contact: "contact-confirm_contact__VEQ8a",
        title: "contact-confirm_title__7EUhK",
        upperPart: "contact-confirm_upperPart__HS00f",
        step: "contact-confirm_step__bv7_t",
        confirm: "contact-confirm_confirm__6rUYz",
        privacy: "contact-confirm_privacy__LKPvi",
        buttonsWrapper: "contact-confirm_buttonsWrapper__GUPcm",
        back: "contact-confirm_back__LLHRy",
        submit: "contact-confirm_submit__T0eis",
      };
    },
    41104: function (e) {
      e.exports = {
        privacyModal: "contact-privacy-modal_privacyModal__kuQKT",
        overlayForClose: "contact-privacy-modal_overlayForClose__I1Tba",
        inner: "contact-privacy-modal_inner__CTR6r",
        title: "contact-privacy-modal_title__lS4Qo",
        content: "contact-privacy-modal_content__AHkCf",
        heading: "contact-privacy-modal_heading___bqPM",
        footer: "contact-privacy-modal_footer__bhvmv",
        close: "contact-privacy-modal_close__EvqoI",
      };
    },
    23433: function (e) {
      e.exports = {
        contact: "contact-top_contact__AUXim",
        title: "contact-top_title__lNA28",
        switchButton: "contact-top_switchButton__T9IB8",
        switchInner: "contact-top_switchInner__qOnG0",
        companySelected: "contact-top_companySelected__VeEgk",
        ordinarySelected: "contact-top_ordinarySelected__belbL",
        checkboxWrap: "contact-top_checkboxWrap__TSDLs",
        checkbox: "contact-top_checkbox__iqKcG",
        label: "contact-top_label__rfM8r",
        upperPart: "contact-top_upperPart__IbFeD",
        step: "contact-top_step__4_U5N",
        form: "contact-top_form__8nKvB",
        privacy: "contact-top_privacy__0OaVz",
        confirm: "contact-top_confirm__QkOlt",
      };
    },
    54038: function (e) {
      e.exports = {
        contentDetail: "contents-detail_contentDetail__nGuD3",
        container: "contents-detail_container__6D3pv",
      };
    },
    51061: function (e) {
      e.exports = {
        contentsTop: "contents-top_contentsTop__U3WAC",
        app: "contents-top_app__FNKHP",
        container: "contents-top_container__Y_eck",
        mainInner: "contents-top_mainInner__Ug1LA",
        paginationWrapper: "contents-top_paginationWrapper__3XiHS",
        header: "contents-top_header__DAn6f",
        timelineTitle: "contents-top_timelineTitle__2_MP1",
        tagList: "contents-top_tagList__hEuY8",
        contentSlider: "contents-top_contentSlider__inVMf",
        contentSliderTitle: "contents-top_contentSliderTitle__AATze",
        contentSliderTitleText: "contents-top_contentSliderTitleText__q1vzt",
        contentSliderTitleLink: "contents-top_contentSliderTitleLink__hOBds",
        emptyMessage: "contents-top_emptyMessage__4fH8E",
      };
    },
    27974: function (e) {
      e.exports = {
        error: "error_error__Wjfme",
        container: "error_container__vrnrO",
        frame: "error_frame__pllUJ",
        errorCode: "error_errorCode__W1nMs",
        iconWrapper: "error_iconWrapper__PcLbF",
        errorMessage: "error_errorMessage__TVs_U",
      };
    },
    85413: function (e) {
      e.exports = {
        eventsTop: "events_eventsTop__c_vWt",
        eventsInner: "events_eventsInner__wFqaD",
        titleWrapper: "events_titleWrapper__gP9Eq",
        title: "events_title__HZ_hu",
        eventsWrapper: "events_eventsWrapper__PIjcA",
        loading: "events_loading__gVjVO",
        articleTitle: "events_articleTitle__BQgS8",
        futureEventList: "events_futureEventList__OVsyD",
        emptyMessage: "events_emptyMessage__ihpbc",
        historyEventList: "events_historyEventList__girp8",
        paginationWrapper: "events_paginationWrapper__TxZr7",
        loaderContainer: "events_loaderContainer__UCGjd",
        loader: "events_loader__zOmpg",
        load8: "events_load8__SGQwL",
        pcOnly: "events_pcOnly__RpSaM",
        spOnly: "events_spOnly__9BaGa",
      };
    },
    23565: function (e) {
      e.exports = {
        fanclubHelp: "fanclub-help_fanclubHelp__Rh0Va",
        title: "fanclub-help_title__00oYl",
        section: "fanclub-help_section__L8oKb",
        content: "fanclub-help_content__Ap05O",
        listItem: "fanclub-help_listItem__Kbtax",
        anker: "fanclub-help_anker__3oS6D",
        border: "fanclub-help_border__oVc7J",
        body: "fanclub-help_body__REsWW",
      };
    },
    55487: function (e) {
      e.exports = {
        termsOfUse: "fanclub-legal_termsOfUse__tsfVz",
        pageTitle: "fanclub-legal_pageTitle___4_OB",
        section: "fanclub-legal_section__UsYje",
        title: "fanclub-legal_title__1Q9QB",
        content: "fanclub-legal_content__NWyTG",
        link: "fanclub-legal_link__h0gra",
        pcOnly: "fanclub-legal_pcOnly__v8f5B",
      };
    },
    16602: function (e) {
      e.exports = {
        membershipCard: "top_membershipCard__bB6wK",
        title: "top_title__4d317",
        messageBar: "top_messageBar__QgV_Y",
        step: "top_step__HmRwE",
        form: "top_form__ma2cW",
        privacy: "top_privacy__gg5sQ",
        confirm: "top_confirm__r_qNX",
      };
    },
    23925: function (e) {
      e.exports = {
        termsOfUse: "fanclub-terms_termsOfUse__ynzPh",
        pageTitle: "fanclub-terms_pageTitle__vHxiX",
        section: "fanclub-terms_section__3xkRC",
        title: "fanclub-terms_title__adYLJ",
        content: "fanclub-terms_content__hEPXp",
        subContent: "fanclub-terms_subContent___5XyR",
        link: "fanclub-terms_link__j3Ubm",
      };
    },
    4669: function (e) {
      e.exports = {
        fanclubsDetail: "fanclubs-detail_fanclubsDetail__Txdu5",
        app: "fanclubs-detail_app__gldn7",
        container: "fanclubs-detail_container__uqNpf",
        paginationWrapper: "fanclubs-detail_paginationWrapper__8xTBz",
        emptyMessage: "fanclubs-detail_emptyMessage__lT0YL",
      };
    },
    25504: function (e) {
      e.exports = {
        fanclubsTop: "fanclubs-top_fanclubsTop__Krwdq",
        titleWrapper: "fanclubs-top_titleWrapper__LHrry",
        title: "fanclubs-top_title__jSm8U",
        titleSub: "fanclubs-top_titleSub__y9y3k",
        fanclubPlanWrapper: "fanclubs-top_fanclubPlanWrapper__Jz1dn",
        inner: "fanclubs-top_inner__1qDDp",
        listWrapper: "fanclubs-top_listWrapper__pIAKl",
        fanclubItem: "fanclubs-top_fanclubItem__bJx8J",
        header: "fanclubs-top_header__dhJzd",
        withoutBannerHeader: "fanclubs-top_withoutBannerHeader__WoWRH",
        logoAndLinksContainer: "fanclubs-top_logoAndLinksContainer__JDzoS",
        logoAndLinks: "fanclubs-top_logoAndLinks__Sx45k",
        withoutBanner: "fanclubs-top_withoutBanner__pofIl",
        fanclubLink: "fanclubs-top_fanclubLink__KsDnu",
        fanclubLinkIcon: "fanclubs-top_fanclubLinkIcon__N5kis",
        logo: "fanclubs-top_logo__Qtr_d",
        sliderBanners: "fanclubs-top_sliderBanners__zpObR",
        fanclubJoinLink: "fanclubs-top_fanclubJoinLink__YQhSR",
        hidden: "fanclubs-top_hidden__iO4F5",
        fanclubList: "fanclubs-top_fanclubList__p0Hb5",
        rainbowText: "fanclubs-top_rainbowText__H__n6",
        fanclubTypeWrapper: "fanclubs-top_fanclubTypeWrapper__ETLoo",
        fanclubTypeBadge: "fanclubs-top_fanclubTypeBadge__S2VpI",
        liverBadge: "fanclubs-top_liverBadge__6y90X",
        fanclubItems: "fanclubs-top_fanclubItems__4k18i",
        nijisanjiAllFanclub: "fanclubs-top_nijisanjiAllFanclub__qcP5_",
        nijisanjiAllIconWrapper: "fanclubs-top_nijisanjiAllIconWrapper__XoO8U",
        nijisanjiAllNameAndButton:
          "fanclubs-top_nijisanjiAllNameAndButton__hfSMP",
        nijisanjiAllName: "fanclubs-top_nijisanjiAllName__4OmOX",
        nijisanjiAllButton: "fanclubs-top_nijisanjiAllButton__yTDnk",
        modalWrapper: "fanclubs-top_modalWrapper__L9zxZ",
        modal: "fanclubs-top_modal__H1lZk",
        closeButton: "fanclubs-top_closeButton__Z3TMr",
        videoFrame: "fanclubs-top_videoFrame__hQWyX",
        pcOnly: "fanclubs-top_pcOnly__7I1cl",
        spOnly: "fanclubs-top_spOnly__RF0Wg",
      };
    },
    84100: function (e) {
      e.exports = {
        confirmDialog: "confirm-dialog_confirmDialog__Fn9XE",
        dialogBase: "confirm-dialog_dialogBase__Blwx4",
        heading: "confirm-dialog_heading__GzVC0",
        text: "confirm-dialog_text__ewHaU",
        buttonList: "confirm-dialog_buttonList__wHzDL",
        button: "confirm-dialog_button__ciYy6",
        label: "confirm-dialog_label__3Ltde",
        caution: "confirm-dialog_caution__gBvJy",
        loading: "confirm-dialog_loading__qliKY",
        processing: "confirm-dialog_processing__GHkjL",
        open: "confirm-dialog_open__mzndL",
      };
    },
    77698: function (e) {
      e.exports = {
        layout: "layout_layout__44_sX",
        app: "layout_app__eeuMh",
        error: "layout_error__qqAM_",
        menu: "layout_menu__56nnz",
        open: "layout_open__EYap0",
        close: "layout_close__mNfJN",
        main: "layout_main__NBXhf",
        bgLiver: "layout_bgLiver__Gl6mC",
        bg: "layout_bg__YVSlq",
        top: "layout_top__M3Prq",
        inner: "layout_inner__UzsoO",
        stickyPosition: "layout_stickyPosition__B7Tka",
      };
    },
    31257: function (e) {
      e.exports = {
        mypageModal: "mypage-modal_mypageModal__uBICz",
        isApp: "mypage-modal_isApp__mAKT_",
        isOpen: "mypage-modal_isOpen__MnGX9",
        closeButton: "mypage-modal_closeButton__6oIZQ",
        modalBase: "mypage-modal_modalBase__Eq9MS",
        menuArea: "mypage-modal_menuArea__R1w3K",
        contentArea: "mypage-modal_contentArea__uyhTn",
        transitioning: "mypage-modal_transitioning__4Pl2R",
        spMypageMenuWidget: "mypage-modal_spMypageMenuWidget__DQvk4",
        spMypageMenu: "mypage-modal_spMypageMenu__mClG0",
        open: "mypage-modal_open__O5PUU",
        spMenuButton: "mypage-modal_spMenuButton__aCDVU",
        toClose: "mypage-modal_toClose__E1qSp",
      };
    },
    40309: function (e) {
      e.exports = {
        paymentModal: "payment-modal_paymentModal__T6K5_",
        closeButton: "payment-modal_closeButton__joHko",
        modalBase: "payment-modal_modalBase__6wZzt",
        trans: "payment-modal_trans__ir45u",
        container: "payment-modal_container__5CADP",
        hide: "payment-modal_hide__5tqjT",
        disabled: "payment-modal_disabled__jjkFL",
        menuWidgetWrap: "payment-modal_menuWidgetWrap__hnjmT",
        previewModal: "payment-modal_previewModal__hB7tF",
        modal: "payment-modal_modal__RHpnO",
      };
    },
    15738: function (e) {
      e.exports = {
        detailModal: "detail-modal_detailModal__XApqR",
        overlayForClose: "detail-modal_overlayForClose__CERz7",
        closeButton: "detail-modal_closeButton___7KfB",
        inner: "detail-modal_inner__h2Q4U",
        content: "detail-modal_content__AEvCM",
        contentHeader: "detail-modal_contentHeader__2jfWq",
        startAt: "detail-modal_startAt__VsukL",
        date: "detail-modal_date__8SYUK",
        time: "detail-modal_time__JNflq",
        nowOnAir: "detail-modal_nowOnAir__xwpA_",
        onAir: "detail-modal_onAir__eemEM",
        toLiverDetail: "detail-modal_toLiverDetail__8gMDD",
        iconWrapper: "detail-modal_iconWrapper__R_I_P",
        scroll: "detail-modal_scroll___isUf",
        thumbnailWrapper: "detail-modal_thumbnailWrapper__qWrNO",
        title: "detail-modal_title__eoLvc",
        liver: "detail-modal_liver___ytGm",
        name: "detail-modal_name__SpOiR",
        subscribersNum: "detail-modal_subscribersNum__2M_cx",
        favoriteButton: "detail-modal_favoriteButton__DWGlG",
        suggestLoginModal: "detail-modal_suggestLoginModal__Hl4is",
        otherLivers: "detail-modal_otherLivers__vvvKw",
        description: "detail-modal_description__sfxV2",
        contentFooter: "detail-modal_contentFooter__dSMoT",
        left: "detail-modal_left__yPiNc",
        platformIcon: "detail-modal_platformIcon__NKQWG",
        toYoutube: "detail-modal_toYoutube__LusTw",
        toTwitch: "detail-modal_toTwitch__gyARS",
        xShare: "detail-modal_xShare__NRb5J",
        addToCalendar: "detail-modal_addToCalendar___aKHZ",
        buttons: "detail-modal_buttons__xariK",
        twitch: "detail-modal_twitch__4TOkK",
        pcOnly: "detail-modal_pcOnly__CNREC",
        spOnly: "detail-modal_spOnly__mKuc8",
      };
    },
    80944: function (e) {
      e.exports = {
        liveStream: "live-stream_liveStream__dy1Q1",
        headerBlock: "live-stream_headerBlock__9b8Wv",
        header: "live-stream_header__8QD1R",
        pageTitle: "live-stream_pageTitle___lthu",
        filterArea: "live-stream_filterArea__kqemT",
        filterWrapper: "live-stream_filterWrapper__3Pa3z",
        filterButton: "live-stream_filterButton__Dz292",
        active: "live-stream_active__VGF7M",
        filterModal: "live-stream_filterModal__tp_ci",
        swiper: "live-stream_swiper__YZ_oL",
        slide: "live-stream_slide___vVWZ",
        dates: "live-stream_dates__xQ_gP",
        date: "live-stream_date__0RlSH",
        beforeDate: "live-stream_beforeDate__WrRR4",
        afterDate: "live-stream_afterDate__a4yPY",
        paginationWrapper: "live-stream_paginationWrapper__qnT2a",
        inner: "live-stream_inner__8tj6E",
        prev: "live-stream_prev___MFmK",
        next: "live-stream_next__ojadd",
        suggestLoginModal: "live-stream_suggestLoginModal__VMgJG",
        pcOnly: "live-stream_pcOnly__6wPQN",
        spOnly: "live-stream_spOnly__WsFsf",
      };
    },
    83015: function (e) {
      e.exports = {
        newsDetail: "news-detail_newsDetail__GGa3u",
        newsDetailHeader: "news-detail_newsDetailHeader__OFNhJ",
        newsListLink: "news-detail_newsListLink__vhwkT",
        tagWrapper: "news-detail_tagWrapper__PX_ov",
        tag: "news-detail_tag__SZH3u",
        ja: "news-detail_ja__Vr_td",
        en: "news-detail_en__TbEru",
        date: "news-detail_date__9ZoQq",
        content: "news-detail_content__LFWcH",
        title: "news-detail_title__aOP03",
        thumbnailWrapper: "news-detail_thumbnailWrapper___KcYJ",
        newsSlider: "news-detail_newsSlider__x98_l",
        sectionTitleRow: "news-detail_sectionTitleRow__mPoUU",
        slideWrapper: "news-detail_slideWrapper__6ZTNb",
        newsListButton: "news-detail_newsListButton__3RsR9",
        newsBody: "news-detail_newsBody__mh9NH",
      };
    },
    72226: function (e) {
      e.exports = {
        newsTop: "news-top_newsTop__0Qkk8",
        inner: "news-top_inner__bTr8K",
        titleWrapper: "news-top_titleWrapper__Abs7t",
        pageTitle: "news-top_pageTitle__atfP5",
        filteringTab: "news-top_filteringTab__iozW4",
        newsList: "news-top_newsList__Gq2y_",
        loading: "news-top_loading___Hgft",
        newsItem: "news-top_newsItem__3x1az",
        emptyMessage: "news-top_emptyMessage__jRxbO",
        paginationWrapper: "news-top_paginationWrapper__LDwSJ",
      };
    },
    55472: function (e) {
      e.exports = {
        officialPrograms: "official-programs_officialPrograms__ZECSf",
        pageTitle: "official-programs_pageTitle__kkA2r",
        channelListWrapper: "official-programs_channelListWrapper___fBHm",
        channelName: "official-programs_channelName__uM8oZ",
        channelList: "official-programs_channelList__Q1vSZ",
        channel: "official-programs_channel__TRl9X",
        otherChannels: "official-programs_otherChannels__jr3gj",
        otherChannel: "official-programs_otherChannel__NH97E",
      };
    },
    16741: function (e) {
      e.exports = {
        talentDetail: "liver-profile_talentDetail__ErpQY",
        upperParts: "liver-profile_upperParts__elHlN",
        contentsWrap: "liver-profile_contentsWrap__5FJct",
        talentListLink: "liver-profile_talentListLink__L_UPc",
        favoriteButtonWrapper: "liver-profile_favoriteButtonWrapper___mDUr",
        unLoginModal: "liver-profile_unLoginModal__ePsyx",
        suggestLoginModal: "liver-profile_suggestLoginModal__nZjlB",
        textContents: "liver-profile_textContents__vQeX8",
        white: "liver-profile_white__W3cyT",
        liverName: "liver-profile_liverName__SU689",
        scFontName: "liver-profile_scFontName__IfvgI",
        liverRuby: "liver-profile_liverRuby__WYI5L",
        liverEnName: "liver-profile_liverEnName__guVEu",
        liverDescription: "liver-profile_liverDescription__0se0l",
        scFontDescription: "liver-profile_scFontDescription__iDUoG",
        youtube: "liver-profile_youtube__xR45e",
        liverPhoto: "liver-profile_liverPhoto__ECnvX",
        imageContents: "liver-profile_imageContents__IMIMQ",
        loading: "liver-profile_loading__NvjJO",
        magnifying: "liver-profile_magnifying__6qgUo",
        zoomIcon: "liver-profile_zoomIcon__vk_ij",
        middleParts: "liver-profile_middleParts__ov2uO",
        lowerParts: "liver-profile_lowerParts__QPqTC",
        profile: "liver-profile_profile__Y7FWV",
        row: "liver-profile_row__odNkS",
        title: "liver-profile_title__wu_ce",
        content: "liver-profile_content__DNQou",
        scFontProfile: "liver-profile_scFontProfile__HNlYk",
        account: "liver-profile_account__aMH8N",
        noProfile: "liver-profile_noProfile__V7yng",
        accountTitle: "liver-profile_accountTitle__1QDGe",
        caption: "liver-profile_caption__0eRo_",
        image: "liver-profile_image__jJlki",
        pcOnly: "liver-profile_pcOnly__qFdJO",
        smallPcOnly: "liver-profile_smallPcOnly__o_Wor",
      };
    },
    56877: function (e) {
      e.exports = {
        talentsTop: "talents-top_talentsTop__6i_8r",
        pageTitleWrapper: "talents-top_pageTitleWrapper__nJdGR",
        favoriteFilter: "talents-top_favoriteFilter__S551J",
        inner: "talents-top_inner__JbL1H",
        filteringTabWrapper: "talents-top_filteringTabWrapper__moeBW",
        filteringTab: "talents-top_filteringTab__b7z_V",
        sortWrapper: "talents-top_sortWrapper__KhmXw",
        sortButton: "talents-top_sortButton__6Ppxm",
        active: "talents-top_active__a2tBg",
        sortModal: "talents-top_sortModal__iRoHm",
        listWrapper: "talents-top_listWrapper__2OVzy",
        loading: "talents-top_loading__mfSOF",
        liverItem: "talents-top_liverItem__3l4rV",
        loaderContainer: "talents-top_loaderContainer__q1nW_",
        loader: "talents-top_loader___X1Ri",
        load8: "talents-top_load8__FfGdZ",
        empty: "talents-top_empty__D5bVp",
      };
    },
    46960: function (e) {
      e.exports = {
        termsOfUse: "terms-of-use_termsOfUse__HATVH",
        pageTitle: "terms-of-use_pageTitle__Ku7if",
        section: "terms-of-use_section__j64mF",
        title: "terms-of-use_title__OUX5p",
        content: "terms-of-use_content___5p_r",
      };
    },
    14673: function (e) {
      e.exports = {
        termsOfUseCheckModal:
          "terms-of-use-check-modal_termsOfUseCheckModal__biM8Y",
        overlay: "terms-of-use-check-modal_overlay__OUwks",
        inner: "terms-of-use-check-modal_inner___esTu",
        title: "terms-of-use-check-modal_title__XzbrC",
        description: "terms-of-use-check-modal_description__HSUSv",
        toTermsOfUse: "terms-of-use-check-modal_toTermsOfUse__5Gy6R",
        checkbox: "terms-of-use-check-modal_checkbox__2Zegc",
        agree: "terms-of-use-check-modal_agree__pofjk",
      };
    },
    1692: function (e) {
      e.exports = {
        topContents: "top_topContents__ruER6",
        news: "top_news__cNo23",
        calendar: "top_calendar__cpgyX",
        nowOnAir: "top_nowOnAir__jfV2l",
        talents: "top_talents__9QFgA",
        officialProgram: "top_officialProgram__CrcRW",
        fanclub: "top_fanclub__XDSfr",
        officialX: "top_officialX__ILfhR",
      };
    },
  },
]);
