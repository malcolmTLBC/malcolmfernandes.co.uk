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
    path = '#head *, #menu *, #heading *, #link *',
    stagger_val = 0.002,
    duration = 2;

$.each($(path), function(i, el) {
  tl.set($(this), {
    x: '+=' + getRandom(-50, 50 ),
    y: '+=' + getRandom(-0, 0 ),
    rotation: '+=' + getRandom(-300, 300),
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
  scale: 0.9
});

tl.staggerTo('#wrapper', 1, {opacity:1, ease: Power4.easeIn}, 0.1);
tl.staggerTo('#head *', duration, stagger_opts_to, stagger_val);
tl.staggerTo('.content-style', 5, {opacity: 1, scale: 1, ease: Power4.easeOut}, .5, .5);
tl.staggerTo('#heading *', 3, stagger_opts_to, 0.04, 0);
tl.staggerTo('#menu *', duration, stagger_opts_to, stagger_val, 3.5);

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdi1hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChcIi5tZW51LWJ1dHRvblwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKFwiI3dyYXBwZXJcIikudG9nZ2xlQ2xhc3MoXCJ0b2dnbGVkXCIpO1xufSk7XG5cblxudmFyIHRtYXhfb3B0aW9uc0dsb2JhbCA9IHtcbiAgcmVwZWF0OiAwLFxuICByZXBlYXREZWxheTogMC42NSxcbiAgeW95bzogZmFsc2Vcbn07XG5cbkNTU1BsdWdpbi51c2VTVkdUcmFuc2Zvcm1BdHRyID0gdHJ1ZTtcblxudmFyIHRsID0gbmV3IFRpbWVsaW5lTWF4KHRtYXhfb3B0aW9uc0dsb2JhbCksXG4gICAgcGF0aCA9ICcjaGVhZCAqLCAjbWVudSAqLCAjaGVhZGluZyAqLCAjbGluayAqJyxcbiAgICBzdGFnZ2VyX3ZhbCA9IDAuMDAyLFxuICAgIGR1cmF0aW9uID0gMjtcblxuJC5lYWNoKCQocGF0aCksIGZ1bmN0aW9uKGksIGVsKSB7XG4gIHRsLnNldCgkKHRoaXMpLCB7XG4gICAgeDogJys9JyArIGdldFJhbmRvbSgtNTAsIDUwICksXG4gICAgeTogJys9JyArIGdldFJhbmRvbSgtMCwgMCApLFxuICAgIHJvdGF0aW9uOiAnKz0nICsgZ2V0UmFuZG9tKC0zMDAsIDMwMCksXG4gICAgc2NhbGU6IDAsXG4gICAgb3BhY2l0eTogMFxuICB9KTtcbn0pO1xuXG52YXIgc3RhZ2dlcl9vcHRzX3RvID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICBzY2FsZTogMSxcbiAgcm90YXRpb246IDAsXG4gIGVhc2U6IFBvd2VyNC5lYXNlT3V0XG59O1xuXG50bC5zZXQoJCgnLmNvbnRlbnQtc3R5bGUnKSwge1xuICBvcGFjaXR5OiAwLFxuICBzY2FsZTogMC45XG59KTtcblxudGwuc3RhZ2dlclRvKCcjd3JhcHBlcicsIDEsIHtvcGFjaXR5OjEsIGVhc2U6IFBvd2VyNC5lYXNlSW59LCAwLjEpO1xudGwuc3RhZ2dlclRvKCcjaGVhZCAqJywgZHVyYXRpb24sIHN0YWdnZXJfb3B0c190bywgc3RhZ2dlcl92YWwpO1xudGwuc3RhZ2dlclRvKCcuY29udGVudC1zdHlsZScsIDUsIHtvcGFjaXR5OiAxLCBzY2FsZTogMSwgZWFzZTogUG93ZXI0LmVhc2VPdXR9LCAuNSwgLjUpO1xudGwuc3RhZ2dlclRvKCcjaGVhZGluZyAqJywgMywgc3RhZ2dlcl9vcHRzX3RvLCAwLjA0LCAwKTtcbnRsLnN0YWdnZXJUbygnI21lbnUgKicsIGR1cmF0aW9uLCBzdGFnZ2VyX29wdHNfdG8sIHN0YWdnZXJfdmFsLCAzLjUpO1xuXG5mdW5jdGlvbiBnZXRSYW5kb20obWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn0iXSwiZmlsZSI6ImN2LWFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
