COWS = [
    'https://images.freeimages.com/images/large-previews/671/cow-1366498.jpg',
    'https://images.freeimages.com/images/large-previews/03b/cow-1402871.jpg',
    'https://live.staticflickr.com/2696/4185100143_125677f422_z.jpg',
    'https://images.freeimages.com/images/large-previews/d2a/curious-cows-1-1368003.jpg',
    'https://images.freeimages.com/images/large-previews/810/highlander-1325292.jpg',
    'https://images.freeimages.com/images/large-previews/85d/galloway-cows-1-1487504.jpg'
]

console.log("Cowify imageSwap script started");
replace();

function replace() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const cowFile = rand(COWS);
        img.setAttribute('srcset', cowFile);
        img.setAttribute('src', cowFile);
        img.style.objectFit = 'scale-down';
        img.style.objectPosition = '50% 50%';
    });
    document.querySelectorAll('picture source').forEach(source => {
        const cowFile = rand(COWS);
        source.setAttribute('srcset', cowFile);
    });
}

function rand(items) {
    return items[items.length * Math.random() | 0];
}