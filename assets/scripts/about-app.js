$(".menu-button").click(function() {
    $("#wrapper").toggleClass("toggled");
});


var tmax_optionsGlobal = {
  repeat: 0,
  repeatDelay: 0.65,
  yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#head *, #menu *,#face *, #about *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-1000, 1000 ),
    y: '+=' + getRandom(-1000, 1000 ),
    rotation: '+=' + getRandom(-720, 720),
    scale: 0,
    opacity: 0
  });
});

var stagger_opts_to = {
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  rotation: 0,
  ease: Power4.easeOut
};

var reverse_stagger_opts = {
  x: '+=' + getRandom(-20, 20 ),
  y: '+=' + getRandom(-20, 20 ),
  rotation: '+=' + getRandom(-720, 720),
  scale: 1,
  ease: Power4.easeOut
};

tl.staggerTo('#wrapper', 1, {opacity:1, ease: Power4.easeIn}, 0.1);
tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('#face *', 4.5, stagger_opts_to, 0.01, 0.1);
tl.staggerTo('#about *', 1, stagger_opts_to, 0.01, 0.1);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 8);

// $("#link *").hover(
//   function() {
//     tl.staggerTo('#link *', duration, reverse_stagger_opts, stagger_val);
// });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChcIi5tZW51LWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKFwiI3dyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGVkXCIpO1xufSk7XG5cblxudmFyIHRtYXhfb3B0aW9uc0dsb2JhbCA9IHtcbiAgcmVwZWF0OiAwLFxuICByZXBlYXREZWxheTogMC42NSxcbiAgeW95bzogZmFsc2Vcbn07XG5cbkNTU1BsdWdpbi51c2VTVkdUcmFuc2Zvcm1BdHRyID0gdHJ1ZTtcblxudmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHRtYXhfb3B0aW9uc0dsb2JhbCksXG4gICAgcGF0aCA9ICcjaGVhZCAqLCAjbWVudSAqLCNmYWNlICosICNhYm91dCAqJyxcbiAgICBzdGFnZ2VyX3ZhbCA9IDAuMDAyLFxuICAgIGR1cmF0aW9uID0gMjtcblxuJC5lYWNoKCQocGF0aCksIGZ1bmN0aW9uKGksIGVsKSB7XG4gIHRsLnNldCgkKHRoaXMpLCB7XG4gICAgeDogJys9JyArIGdldFJhbmRvbSgtMTAwMCwgMTAwMCApLFxuICAgIHk6ICcrPScgKyBnZXRSYW5kb20oLTEwMDAsIDEwMDAgKSxcbiAgICByb3RhdGlvbjogJys9JyArIGdldFJhbmRvbSgtNzIwLCA3MjApLFxuICAgIHNjYWxlOiAwLFxuICAgIG9wYWNpdHk6IDBcbiAgfSk7XG59KTtcblxudmFyIHN0YWdnZXJfb3B0c190byA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgc2NhbGU6IDEsXG4gIHJvdGF0aW9uOiAwLFxuICBlYXNlOiBQb3dlcjQuZWFzZU91dFxufTtcblxudmFyIHJldmVyc2Vfc3RhZ2dlcl9vcHRzID0ge1xuICB4OiAnKz0nICsgZ2V0UmFuZG9tKC0yMCwgMjAgKSxcbiAgeTogJys9JyArIGdldFJhbmRvbSgtMjAsIDIwICksXG4gIHJvdGF0aW9uOiAnKz0nICsgZ2V0UmFuZG9tKC03MjAsIDcyMCksXG4gIHNjYWxlOiAxLFxuICBlYXNlOiBQb3dlcjQuZWFzZU91dFxufTtcblxudGwuc3RhZ2dlclRvKCcjd3JhcHBlcicsIDEsIHtvcGFjaXR5OjEsIGVhc2U6IFBvd2VyNC5lYXNlSW59LCAwLjEpO1xudGwuc3RhZ2dlclRvKCcjaGVhZCAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwpO1xudGwuc3RhZ2dlclRvKCcjZmFjZSAqJywgNC41LCBzdGFnZ2VyX29wdHNfdG8sIDAuMDEsIDAuMSk7XG50bC5zdGFnZ2VyVG8oJyNhYm91dCAqJywgMSwgc3RhZ2dlcl9vcHRzX3RvLCAwLjAxLCAwLjEpO1xudGwuc3RhZ2dlclRvKCcjbWVudSAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwsIDgpO1xuXG4vLyAkKFwiI2xpbmsgKlwiKS5ob3Zlcihcbi8vICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgdGwuc3RhZ2dlclRvKCcjbGluayAqJywgZHVyYXRpb24sIHJldmVyc2Vfc3RhZ2dlcl9vcHRzLCBzdGFnZ2VyX3ZhbCk7XG4vLyB9KTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59Il0sImZpbGUiOiJhYm91dC1hcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
