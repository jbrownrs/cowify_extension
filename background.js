// Ensure works on multiple browsers
window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

browser.browserAction.onClicked.addListener(function(tab) {
    browser.storage.sync.get('state', function(data) {
        if (data.state === 'on') {
            browser.storage.sync.set({state: 'off'});
            browser.tabs.executeScript(null, {file: "reload.js"});
        } else {
            browser.storage.sync.set({state: 'on'});
            browser.tabs.executeScript(null, {file: "imageSwap.js"});
        }
    });
});