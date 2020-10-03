document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();
  tl.to(".role", { opacity: 1, stagger: 0.5, duration: 2.5, ease: "power3.out" });
  tl.fromTo(
    ".picture-profile",
    { y: 200, scale: 1.2 },
    { y: 0, scale: 1, opacity: 1, stagger: 0.5, duration: 2, ease: "power3.out" },
    "-=2"
  );
  tl.fromTo(
    ".name",
    { y: 100 },
    { y: 0, opacity: 1, stagger: 0.5, duration: 3, ease: "power4.out" },
    "<1"
  );
});
