function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show');
       
       
      }
    });
  }
  
let options = {
    threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.navigation');
    let observer2 = new IntersectionObserver(onEntry, options);
    let elements2 = document.querySelectorAll('.heading-about');
    let observer3 = new IntersectionObserver(onEntry, options);
    let elements3 = document.querySelectorAll('.image-card');
    let observer6 = new IntersectionObserver(onEntry, options);
    let elements6 = document.querySelectorAll('.heading-product');
    let observer7 = new IntersectionObserver(onEntry, options);
    let elements7 = document.querySelectorAll('.glass');
    let observer8 = new IntersectionObserver(onEntry, options);
    let elements8 = document.querySelectorAll('.glass-2');
    let observer9 = new IntersectionObserver(onEntry, options);
    let elements9 = document.querySelectorAll('.glass-3');
    let observer10 = new IntersectionObserver(onEntry, options);
    let elements10 = document.querySelectorAll('.cooperation');
    let observer11 = new IntersectionObserver(onEntry, options);
    let elements11 = document.querySelectorAll('.our-socials');

    for (let elm of elements) {observer.observe(elm);}
    for (let elm of elements2) {observer2.observe(elm);}
    for (let elm of elements3) {observer3.observe(elm);}
    for (let elm of elements6) {observer6.observe(elm);}
    for (let elm of elements7) {observer7.observe(elm);}
    for (let elm of elements8) {observer8.observe(elm);}
    for (let elm of elements9) {observer9.observe(elm);}
    for (let elm of elements10) {observer10.observe(elm);}
    for (let elm of elements11) {observer11.observe(elm);}

