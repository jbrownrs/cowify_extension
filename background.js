if (typeof browser == "undefined") {
  // Chrome does not support the browser namespace yet.
  globalThis.browser = chrome;
}

browser.action.onClicked.addListener((tab) => {
  if (browser.scripting && browser.scripting.executeScript) {
    browser.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["imageSwap.js"]
    });
  } else if (browser.tabs && browser.tabs.executeScript) {
    browser.tabs.executeScript(tab.id, { file: "imageSwap.js" });
  } else {
    console.error("No supported script injection API found.");
  }
});