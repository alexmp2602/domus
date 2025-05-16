window.addEventListener("DOMContentLoaded", () => {
  const animateElements = (selector, direction = "up") => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.opacity = "0";

            let transform = "translateY(0)";
            if (direction === "up") transform = "translateY(20px)";
            if (direction === "left") transform = "translateX(-20px)";
            if (direction === "right") transform = "translateX(20px)";

            el.style.transform = transform;
            el.style.transition =
              "opacity 0.6s ease-out, transform 0.6s ease-out";

            const delay = 100 + index * 100;

            const runAnimation = () => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateX(0) translateY(0)";
              }, delay);
            };

            if ("requestIdleCallback" in window) {
              requestIdleCallback(runAnimation);
            } else {
              runAnimation();
            }

            observer.unobserve(el); // Solo animar una vez
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  };

  animateElements(".fade-simple", "up");
  animateElements(".fade-left", "left");
  animateElements(".fade-right", "right");
});
