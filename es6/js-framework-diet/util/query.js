//### Selectors
// const map = $('[data-map]');
// const marker = $('[data-map-marker]', map);
function $(selector, scope = document) {
    return scope.querySelector(selector);
}

// const imageGalleries = $$('[data-image-gallery]');
// $$('[data-image-gallery]').forEach(imageGallery => {
//     //
// });
function $$(selector, scope = document) {
    return Array.from(scope.querySelectorAll(selector));
}