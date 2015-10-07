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
    path = '#head *, #menu *,#contact *, #link *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-40, 40 ),
    y: '+=' + getRandom(-40, 40 ),
    rotation: '+=' + getRandom(-350, 350),
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

tl.staggerTo('#wrapper', .1, {opacity:1, ease: Power4.easeIn}, 0.0001);
tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('#contact *', 2, stagger_opts_to, 0.001, 1);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

// $("#link *").hover(
//   function() {
//     tl.staggerTo('#link *', duration, reverse_stagger_opts, stagger_val);
// });

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250YWN0LWFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKFwiLm1lbnUtYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoXCIjd3JhcHBlclwiKS50b2dnbGVDbGFzcyhcInRvZ2dsZWRcIik7XG59KTtcblxudmFyIHRtYXhfb3B0aW9uc0dsb2JhbCA9IHtcbiAgcmVwZWF0OiAwLFxuICByZXBlYXREZWxheTogMC42NSxcbiAgeW95bzogZmFsc2Vcbn07XG5cbkNTU1BsdWdpbi51c2VTVkdUcmFuc2Zvcm1BdHRyID0gdHJ1ZTtcblxudmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHRtYXhfb3B0aW9uc0dsb2JhbCksXG4gICAgcGF0aCA9ICcjaGVhZCAqLCAjbWVudSAqLCNjb250YWN0ICosICNsaW5rIConLFxuICAgIHN0YWdnZXJfdmFsID0gMC4wMDIsXG4gICAgZHVyYXRpb24gPSAyO1xuXG4kLmVhY2goJChwYXRoKSwgZnVuY3Rpb24oaSwgZWwpIHtcbiAgdGwuc2V0KCQodGhpcyksIHtcbiAgICB4OiAnKz0nICsgZ2V0UmFuZG9tKC00MCwgNDAgKSxcbiAgICB5OiAnKz0nICsgZ2V0UmFuZG9tKC00MCwgNDAgKSxcbiAgICByb3RhdGlvbjogJys9JyArIGdldFJhbmRvbSgtMzUwLCAzNTApLFxuICAgIHNjYWxlOiAwLFxuICAgIG9wYWNpdHk6IDBcbiAgfSk7XG59KTtcblxudmFyIHN0YWdnZXJfb3B0c190byA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgc2NhbGU6IDEsXG4gIHJvdGF0aW9uOiAwLFxuICBlYXNlOiBQb3dlcjQuZWFzZU91dFxufTtcblxudmFyIHJldmVyc2Vfc3RhZ2dlcl9vcHRzID0ge1xuICB4OiAnKz0nICsgZ2V0UmFuZG9tKC0yMCwgMjAgKSxcbiAgeTogJys9JyArIGdldFJhbmRvbSgtMjAsIDIwICksXG4gIHJvdGF0aW9uOiAnKz0nICsgZ2V0UmFuZG9tKC03MjAsIDcyMCksXG4gIHNjYWxlOiAxLFxuICBlYXNlOiBQb3dlcjQuZWFzZU91dFxufTtcblxudGwuc3RhZ2dlclRvKCcjd3JhcHBlcicsIC4xLCB7b3BhY2l0eToxLCBlYXNlOiBQb3dlcjQuZWFzZUlufSwgMC4wMDAxKTtcbnRsLnN0YWdnZXJUbygnI2hlYWQgKicsIGR1cmF0aW9uLCBzdGFnZ2VyX29wdHNfdG8sIHN0YWdnZXJfdmFsKTtcbnRsLnN0YWdnZXJUbygnI2NvbnRhY3QgKicsIDIsIHN0YWdnZXJfb3B0c190bywgMC4wMDEsIDEpO1xudGwuc3RhZ2dlclRvKCcjbWVudSAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwsIDMuNSk7XG5cbi8vICQoXCIjbGluayAqXCIpLmhvdmVyKFxuLy8gICBmdW5jdGlvbigpIHtcbi8vICAgICB0bC5zdGFnZ2VyVG8oJyNsaW5rIConLCBkdXJhdGlvbiwgcmV2ZXJzZV9zdGFnZ2VyX29wdHMsIHN0YWdnZXJfdmFsKTtcbi8vIH0pO1xuXG5mdW5jdGlvbiBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn0iXSwiZmlsZSI6ImNvbnRhY3QtYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
