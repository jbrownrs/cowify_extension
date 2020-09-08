// Ensure works on multiple browsers
window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();
browser.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "imageSwap.js"});
});