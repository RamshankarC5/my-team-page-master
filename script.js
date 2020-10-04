const splitText = (text) => {
  if (text) {
    let array = text.textContent.split(" "),
      length = array.length,
      div = [];

    text.innerHTML = "";

    for (let i = 0; i < length; i++) {
      div.push(document.createElement("div"));
      div[i].style.position = "relative";
      div[i].style.display = "inline-block";
      div[i].style.opacity = 1;
      div[i].style.whiteSpace = "pre";
      div[i].style.overflow = "hidden";
      div[i].style.willChange = "transform";
      if (array[i]) {
        div[i].textContent = array[i] + " ";
        text.appendChild(div[i]);
      }
    }
    return div;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let mainTitleSplit = splitText(document.querySelector(".main-title"));

  const tl = gsap.timeline();

  for (const word of mainTitleSplit) {
    tl.fromTo(word, 0.5, { width: 0 }, {width: "auto", ease: "linear"});
  }

  tl.from(".second-title", { opacity: 0, duration: 1.5 });

  tl.from(
    ".line-anim",
    {
      y: 15,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "linear",
    },
    "<1"
  );

  tl.to(".role", { opacity: 1, stagger: 0.5, duration: 2.5, ease: "power3.out" });

  tl.fromTo(
    ".picture-profile",
    { y: 200, scale: 1.2, boxShadow: "0 -50px 100px #a8a8a8" },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      boxShadow: "0 0px 0px #c9c9c9",
      stagger: 0.5,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=2"
  );
  tl.fromTo(
    ".name",
    { y: 100 },
    { y: 0, opacity: 1, stagger: 0.5, duration: 3, ease: "power4.out" },
    "<1"
  );
});
