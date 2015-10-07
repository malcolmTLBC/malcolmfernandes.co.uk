$(".menu-button").click(function() {
    $("#wrapper").toggleClass("toggled");
});

var tmax_optionsGlobal = {
  // repeat: 0,
  // repeatDelay: 0.65,
  // yoyo: false
};

CSSPlugin.useSVGTransformAttr = true;

var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#head *, #menu *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-20, 20 ),
    y: '+=' + getRandom(-20, 20 ),
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

tl.set($('.content-style'), {
  opacity: 0,
  scale: 0.8
});

tl.staggerTo('#wrapper', 1, {opacity:1, ease: Power4.easeIn}, 0.1);
tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('.content-style', 7, {opacity: 1, scale: 1, ease: Power4.easeOut}, .5, .5);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9qZWN0cy1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChcIi5tZW51LWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKFwiI3dyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGVkXCIpO1xufSk7XG5cbnZhciB0bWF4X29wdGlvbnNHbG9iYWwgPSB7XG4gIC8vIHJlcGVhdDogMCxcbiAgLy8gcmVwZWF0RGVsYXk6IDAuNjUsXG4gIC8vIHlveW86IGZhbHNlXG59O1xuXG5DU1NQbHVnaW4udXNlU1ZHVHJhbnNmb3JtQXR0ciA9IHRydWU7XG5cbnZhciB0bCA9IG5ldyBUaW1lbGluZU1heCh0bWF4X29wdGlvbnNHbG9iYWwpLFxuICAgIHBhdGggPSAnI2hlYWQgKiwgI21lbnUgKicsXG4gICAgc3RhZ2dlcl92YWwgPSAwLjAwMixcbiAgICBkdXJhdGlvbiA9IDI7XG5cbiQuZWFjaCgkKHBhdGgpLCBmdW5jdGlvbihpLCBlbCkge1xuICB0bC5zZXQoJCh0aGlzKSwge1xuICAgIHg6ICcrPScgKyBnZXRSYW5kb20oLTIwLCAyMCApLFxuICAgIHk6ICcrPScgKyBnZXRSYW5kb20oLTIwLCAyMCApLFxuICAgIHJvdGF0aW9uOiAnKz0nICsgZ2V0UmFuZG9tKC03MjAsIDcyMCksXG4gICAgc2NhbGU6IDAsXG4gICAgb3BhY2l0eTogMFxuICB9KTtcbn0pO1xuXG52YXIgc3RhZ2dlcl9vcHRzX3RvID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICBzY2FsZTogMSxcbiAgcm90YXRpb246IDAsXG4gIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG59O1xuXG50bC5zZXQoJCgnLmNvbnRlbnQtc3R5bGUnKSwge1xuICBvcGFjaXR5OiAwLFxuICBzY2FsZTogMC44XG59KTtcblxudGwuc3RhZ2dlclRvKCcjd3JhcHBlcicsIDEsIHtvcGFjaXR5OjEsIGVhc2U6IFBvd2VyNC5lYXNlSW59LCAwLjEpO1xudGwuc3RhZ2dlclRvKCcjaGVhZCAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwpO1xudGwuc3RhZ2dlclRvKCcuY29udGVudC1zdHlsZScsIDcsIHtvcGFjaXR5OiAxLCBzY2FsZTogMSwgZWFzZTogUG93ZXI0LmVhc2VPdXR9LCAuNSwgLjUpO1xudGwuc3RhZ2dlclRvKCcjbWVudSAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwsIDMuNSk7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufSJdLCJmaWxlIjoicHJvamVjdHMtYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
