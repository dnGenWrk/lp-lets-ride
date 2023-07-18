import gsap from "gsap";
const animateFutureItems = function () {
  console.log("Feature: start");
  const elems = document.querySelectorAll(".lp-feature-section__card");
  if (elems) {
    gsap.fromTo(elems, { x: -2000 }, { stagger: 0.1, x: 0, duration: 0.9, delay: 0.4, scrollTrigger: { trigger: ".section-animate" } });
  }
};
export default animateFutureItems;
