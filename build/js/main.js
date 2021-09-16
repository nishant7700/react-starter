$.fn.promo = function () {
  this.each(function () {
    var t,
      e,
      i,
      n,
      s = $(this),
      r = s.find(".promo__content"),
      o = s.find(".promo__item"),
      a = s.find(".promo__next"),
      l = !0;
    $help.appendTo(s),
      $help.data("ui-help").enable(),
      site.device.isMobile
        ? ((t = $('<div class="promo__bullets" />').appendTo(s)),
          s.sly({
            horizontal: !0,
            itemNav: "forceCentered",
            smart: !0,
            activateMiddle: !0,
            mouseDragging: !0,
            touchDragging: !0,
            releaseSwing: !0,
            scrollBy: 0,
            speed: 600,
            elasticBounds: !0,
            pagesBar: t,
            activatePageOn: "click",
            pageBuilder: function (t) {
              return '<i class="promo__bullets__item" />';
            },
          }),
          $window.on("resize.promo", function () {
            s.sly("reload");
          }))
        : (o
            .first()
            .addClass("promo__item_active")
            .next()
            .addClass("promo__item_next")
            .nextUntil()
            .addClass("promo__item_far"),
          (e = TweenMax.to(r, 1, {
            y: "6%",
            scale: 0.94,
            opacity: 0.7,
            ease: Linear.easeNone,
          })),
          (i = TweenMax.to($help, 1, {
            y: -15,
            opacity: 0,
            ease: Cubic.easeOut,
          })),
          (n = new TimelineMax()).add([e, i]),
          new ScrollScene({
            triggerElement: s,
            triggerHook: 0,
            offset: 80,
            duration: $window.height() - 80,
          })
            .setTween(n)
            .addTo(site.scroller));
    function c() {
      if (!l) return !1;
      (l = !1),
        s
          .find(".promo__item_active")
          .removeClass("promo__item_active")
          .prev()
          .addClass("promo__item_far")
          .appendTo(r),
        s
          .find(".promo__item_next")
          .removeClass("promo__item_next")
          .addClass("promo__item_active")
          .next()
          .addClass("promo__item_next")
          .removeClass("promo__item_far"),
        setTimeout(function () {
          l = !0;
        }, site.durations.move);
    }
    site.device.support.touch ||
      a.hover(
        function () {
          s.addClass("promo_next");
        },
        function () {
          s.removeClass("promo_next");
        }
      ),
      a.on("click", c),
      $document.on("keydown.promo", function (t) {
        $(t.target).is("input,textarea,select") ||
          (37 == t.which &&
            (function () {
              if (!l) return;
              l = !1;
              var t = s.find(".promo__item_active").prev();
              t.length || (t = s.find(".promo__item:last").prependTo(r)),
                t
                  .removeClass("promo__item_next promo__item_far")
                  .next()
                  .removeClass("promo__item_active")
                  .addClass("promo__item_next")
                  .next()
                  .removeClass("promo__item_next")
                  .addClass("promo__item_far"),
                setTimeout(function () {
                  t.addClass("promo__item_active");
                }, 1),
                setTimeout(function () {
                  l = !0;
                }, site.durations.move);
            })(),
          39 == t.which && c());
      });
  });
};
($root = $("#root")),
  ($html = $("html")),
  ($body = $("body")),
  ($window = $(window)),
  ($document = $(document)),
  ($menu = $root.find(".menu")),
  ($panel = $root.find(".panel"));
$(function () {
  $root.find(".promo").promo();
});
