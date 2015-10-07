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
    path = '#name *, #menu *, #title *, #link *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-4, 4 ),
    y: '+=' + getRandom(-4, 4 ),
    rotation: '+=' + getRandom(-320, 320),
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
tl.staggerTo('#name *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('#title *', duration, stagger_opts_to, stagger_val, 0.5);
tl.staggerTo('#link *', 0.5, stagger_opts_to, 0.0015, 1);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

// $("#link *").hover(
//   function() {
//     tl.staggerTo('#link *', duration, reverse_stagger_opts, stagger_val);
// });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChcIi5tZW51LWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKFwiI3dyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGVkXCIpO1xufSk7XG5cbnZhciB0bWF4X29wdGlvbnNHbG9iYWwgPSB7XG4gIHJlcGVhdDogMCxcbiAgcmVwZWF0RGVsYXk6IDAuNjUsXG4gIHlveW86IGZhbHNlXG59O1xuXG5DU1NQbHVnaW4udXNlU1ZHVHJhbnNmb3JtQXR0ciA9IHRydWU7XG5cbnZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh0bWF4X29wdGlvbnNHbG9iYWwpLFxuICAgIHBhdGggPSAnI25hbWUgKiwgI21lbnUgKiwgI3RpdGxlICosICNsaW5rIConLFxuICAgIHN0YWdnZXJfdmFsID0gMC4wMDIsXG4gICAgZHVyYXRpb24gPSAyO1xuXG4kLmVhY2goJChwYXRoKSwgZnVuY3Rpb24oaSwgZWwpIHtcbiAgdGwuc2V0KCQodGhpcyksIHtcbiAgICB4OiAnKz0nICsgZ2V0UmFuZG9tKC00LCA0ICksXG4gICAgeTogJys9JyArIGdldFJhbmRvbSgtNCwgNCApLFxuICAgIHJvdGF0aW9uOiAnKz0nICsgZ2V0UmFuZG9tKC0zMjAsIDMyMCksXG4gICAgc2NhbGU6IDAsXG4gICAgb3BhY2l0eTogMFxuICB9KTtcbn0pO1xuXG52YXIgc3RhZ2dlcl9vcHRzX3RvID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICBzY2FsZTogMSxcbiAgcm90YXRpb246IDAsXG4gIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG59O1xuXG52YXIgcmV2ZXJzZV9zdGFnZ2VyX29wdHMgPSB7XG4gIHg6ICcrPScgKyBnZXRSYW5kb20oLTIwLCAyMCApLFxuICB5OiAnKz0nICsgZ2V0UmFuZG9tKC0yMCwgMjAgKSxcbiAgcm90YXRpb246ICcrPScgKyBnZXRSYW5kb20oLTcyMCwgNzIwKSxcbiAgc2NhbGU6IDEsXG4gIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG59O1xuXG50bC5zdGFnZ2VyVG8oJyN3cmFwcGVyJywgMSwge29wYWNpdHk6MSwgZWFzZTogUG93ZXI0LmVhc2VJbn0sIDAuMSk7XG50bC5zdGFnZ2VyVG8oJyNuYW1lIConLCBkdXJhdGlvbiwgc3RhZ2dlcl9vcHRzX3RvLCBzdGFnZ2VyX3ZhbCk7XG50bC5zdGFnZ2VyVG8oJyN0aXRsZSAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwsIDAuNSk7XG50bC5zdGFnZ2VyVG8oJyNsaW5rIConLCAwLjUsIHN0YWdnZXJfb3B0c190bywgMC4wMDE1LCAxKTtcbnRsLnN0YWdnZXJUbygnI21lbnUgKicsIGR1cmF0aW9uLCBzdGFnZ2VyX29wdHNfdG8sIHN0YWdnZXJfdmFsLCAzLjUpO1xuXG4vLyAkKFwiI2xpbmsgKlwiKS5ob3Zlcihcbi8vICAgZnVuY3Rpb24oKSB7XG4vLyAgICAgdGwuc3RhZ2dlclRvKCcjbGluayAqJywgZHVyYXRpb24sIHJldmVyc2Vfc3RhZ2dlcl9vcHRzLCBzdGFnZ2VyX3ZhbCk7XG4vLyB9KTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59Il0sImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
