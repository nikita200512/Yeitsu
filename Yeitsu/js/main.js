function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.directions__title, .directions__text, .directions__item, .directions__item-3, .directions__item-4, .phenomenon__content, .connection__content, .items');
for (let elm of elements) {
  observer.observe(elm);
}

