! function(e) {
    var t = {
        draw: function(e, a) {
            t.render(e, a), a.Window.resize(function() {
                t.render(e, a)
            }), setTimeout(function() {
                t.render(e, a)
            }, 200)
        },
        render: function(a, n) {
            clearInterval(n.swapInterval);
            var r = n.HeaderContainer.width(),
                i = t.getColumns(r);
            n.HeaderContent.css("height", "");
            for (var o = n.ImageFrame.find("li").removeAttr("style"), s = 0; s < o.length; s++)
                e(o[s]).attr("data-index", s);
            var d = r / i,
                m = n.HeaderContent.outerHeight();
            o.css({
                width: d,
                height: d
            }), m % d != 0 && (m = Math.ceil(m / d) * d, n.HeaderContent.css({
                height: m,
                margin: d,
                "box-sizing": "border-box"
            }), n.HeaderContainer.css({
                height: m + 2 * d
            }));
            for (var l = bottomImages = i, g = rightImages = m / d, f = (l + bottomImages + g + rightImages, n.HeaderContent.outerHeight() + d), u = n.HeaderContent.outerWidth() + d, h = 0, s = 0; l > s; s++)
                o.eq(s).css({
                    left: d * s,
                    top: 0
                }).show();
            h = l;
            for (var s = 0; s < rightImages; s++)
                o.eq(s + h).css({
                    left: u,
                    top: d * (s + 1)
                }).show();
            h = l + rightImages;
            for (var s = 0; s < bottomImages; s++)
                o.eq(s + h).css({
                    left: d * (bottomImages - (s + 1)),
                    top: f
                }).show();
            h = l + rightImages + bottomImages;
            for (var s = 0; g > s; s++)
                o.eq(s + h).css({
                    left: 0,
                    top: d * (g - s)
                }).show();
            t.swap(a, n)
        },
        swap: function(e, a) {
            var n, r, i, o, s, d, m, l, g = a.ImageFrame.find("li:visible"),
                f = !1;
            a.swapInterval = setInterval(function() {
                f || (f = !0, n = t.RandomNumber(0, g.length - 1), i = g.filter("[data-index=" + n + "]"), s = i.find("img").clone(), r = t.RandomNumber(0, 1), c = t.RandomNumber(0, 1), r = 0 == n ? 0 == c ? g.length - 1 : 1 : n == g.length - 1 ? 0 == c ? 1 - g.length : -1 : 0 == r ? -1 : 1, o = g.filter("[data-index=" + (n + r) + "]"), d = o.find("img").clone(), m = i.position(), l = o.position(), i.animate({
                    top: l.top,
                    left: l.left
                }, e.duration, function() {
                    i.attr("data-index", n + r)
                }), o.animate({
                    top: m.top,
                    left: m.left
                }, e.duration, function() {
                    o.attr("data-index", n), f = !1
                }))
            }, e.interval)
        },
        getColumns: function(e) {
            var t = 9;
            return e >= 1050 ? t = 10 : e >= 850 ? t = 9 : e >= 650 ? t = 8 : e >= 450 ? t = 7 : e >= 300 && (t = 9), t
        },
        RandomNumber: function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }
    };
    e.fn.extend({
        imageframe: function(a) {
            var n = "<style type='text/css'>.imageframe { position: relative; }.imageframe ul { padding: 0; margin: 0; }.imageframe ul li { list-style: none; display: none; padding: 0; margin: 0; position: absolute; z-index: 999999; }.imageframe ul li img { display: block; width: 100%; height: 100%; }</style>";
            e("head").append(n);
            var r, i = {
                interval: 2e3,
                duration: 600
            };
            return this.each(function(n, o) {
                e.extend(i, a), r = {
                    Window: e(window),
                    ImageFrame: e(o).css({
                        position: "relative"
                    }),
                    swapInterval: null
                }, r.ImageFrame.addClass("imageframe"), e.extend(r, {
                    HeaderContainer: r.ImageFrame.parent(),
                    HeaderContent: r.ImageFrame.siblings("div")
                }), t.draw(i, r)
            }), {
                start: function() {
                    t.swap(i, r)
                },
                stop: function() {
                    clearInterval(r.swapInterval)
                }
            }
        }
    })
}(jQuery);