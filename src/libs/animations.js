// typical import
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import animateFutureItems from "../components/features/animate-feature";
(function () {
  const elems = document.querySelectorAll(".section-animate");
  if (elems) {
    gsap.to(elems, {
      scrollTrigger: elems,
      duration: 2,
      delay: 0.2,
      autoAlpha: 1,
    });
  }
})();
animateFutureItems();
