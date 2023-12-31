const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e) => {
    observer.observe(e);
})