// 1 scroll


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}


// 2 scroll
const scrollers2 = document.querySelectorAll(".scroller2");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation2();
}

function addAnimation2() {
  scrollers2.forEach((scroller2) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller2.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner2 = scroller2.querySelector(".scroller__inner2");
    const scrollerContent2 = Array.from(scrollerInner2.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent2.forEach((item) => {
      const duplicatedItem2 = item.cloneNode(true);
      duplicatedItem2.setAttribute("aria-hidden", true);
      scrollerInner2.appendChild(duplicatedItem2);
    });
  });
}


// 3 scroll 
const scrollers3 = document.querySelectorAll(".scroller3");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation3();
}

function addAnimation3() {
  scrollers3.forEach((scroller3) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller3.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner3 = scroller3.querySelector(".scroller__inner3");
    const scrollerContent3 = Array.from(scrollerInner3.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent3.forEach((item) => {
      const duplicatedItem3 = item.cloneNode(true);
      duplicatedItem3.setAttribute("aria-hidden", true);
      scrollerInner3.appendChild(duplicatedItem3);
    });
  });
}

// 4 scroll 
const scrollers4 = document.querySelectorAll(".scroller4");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation4();
}

function addAnimation4() {
  scrollers4.forEach((scroller4) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller4.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner4 = scroller4.querySelector(".scroller__inner4");
    const scrollerContent4 = Array.from(scrollerInner4.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent4.forEach((item) => {
      const duplicatedItem4 = item.cloneNode(true);
      duplicatedItem4.setAttribute("aria-hidden", true);
      scrollerInner4.appendChild(duplicatedItem4);
    });
  });
}

// 7 scroll 
const scrollers7 = document.querySelectorAll(".scroller7");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation7();
}

function addAnimation7() {
  scrollers7.forEach((scroller7) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller7.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner7 = scroller7.querySelector(".scroller__inner7");
    const scrollerContent7 = Array.from(scrollerInner7.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent7.forEach((item) => {
      const duplicatedItem7 = item.cloneNode(true);
      duplicatedItem7.setAttribute("aria-hidden", true);
      scrollerInner7.appendChild(duplicatedItem7);
    });
  });
}
