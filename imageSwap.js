COWS = ['https://images.freeimages.com/images/large-previews/671/cow-1366498.jpg',
    'https://images.freeimages.com/images/large-previews/03b/cow-1402871.jpg',
    'https://live.staticflickr.com/2696/4185100143_125677f422_z.jpg',
    'https://images.freeimages.com/images/large-previews/d2a/curious-cows-1-1368003.jpg',
    'https://images.freeimages.com/images/large-previews/810/highlander-1325292.jpg',
    'https://images.freeimages.com/images/large-previews/85d/galloway-cows-1-1487504.jpg'
]

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
    for (img of images) {
        let cowFile = rand(COWS);
        if (img.getAttribute('srcset')) {
            img.setAttribute('srcset', cowFile);
        }
        if (img.getAttribute('src')) {
            img.setAttribute('src', cowFile);
        }

        img.style.objectFit = 'scale-down';
        img.style.objectPosition = '50% 50%';
    }

    function rand(items) {
        return items[items.length * Math.random() | 0];
    }
}