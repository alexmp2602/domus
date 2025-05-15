window.addEventListener("DOMContentLoaded", () => {
  const animate = (selector, direction = "up") => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el, index) => {
      const base = el;
      base.style.opacity = "0";

      let translate = "translateY(0)";
      if (direction === "up") translate = "translateY(20px)";
      if (direction === "left") translate = "translateX(-20px)";
      if (direction === "right") translate = "translateX(20px)";

      base.style.transform = translate;
      base.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

      setTimeout(() => {
        base.style.opacity = "1";
        base.style.transform = "translateX(0) translateY(0)";
      }, 100 + index * 150);
    });
  };

  animate(".fade-simple", "up");
  animate(".fade-left", "left");
  animate(".fade-right", "right");
});
