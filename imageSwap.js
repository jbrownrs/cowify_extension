// Ensure works on multiple browsers
window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

console.log("Cowify content script started");

let images = document.querySelectorAll('img', 'picture, figure');
for (imgElt of images) {
    let cowFile = 'images/cow.jpeg';
    let url = browser.extension.getURL(cowFile);
    imgElt.src = url;
    imgElt.style.objectFit = 'cover'
    imgElt.style.objectPosition = '50%'
}