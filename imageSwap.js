// Ensure works on multiple browsers
window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

console.log("Cowify imageSwap script started");
replace();

function replace() {
    let images = document.querySelectorAll('img', 'picture, figure');
    for (imgElt of images) {
        let cowFile = 'images/cow.jpeg';
        imgElt.src = browser.runtime.getURL(cowFile);
        imgElt.style.objectFit = 'cover';
        imgElt.style.objectPosition = '50%';
    }
}