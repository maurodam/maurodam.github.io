const scrollers = document.querySelectorAll(".scroller");

scrollers.forEach((scroller) => {
  const scrollerInner = scroller.querySelector(".scroller__inner");
  const scrollerContent = Array.from(scrollerInner.children);

  const totalWidth = scrollerContent.reduce((acc, item) => {
    return acc + item.offsetWidth * 10;
  }, 0);
  console.log(totalWidth);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    scrollerInner.appendChild(duplicatedItem);
  });

  scrollerInner.style.width = `${totalWidth * 2}px`;
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}