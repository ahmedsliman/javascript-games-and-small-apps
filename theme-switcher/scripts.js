document.querySelectorAll(".clickable").forEach(
    (div) => div.addEventListener('click', function () {
        document.body.style.backgroundColor = div.style.backgroundColor;
    })
);
