chrome.action.onClicked.addListener((tab) => {
  if (chrome.scripting && chrome.scripting.executeScript) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["imageSwap.js"]
    });
  } else if (chrome.tabs && chrome.tabs.executeScript) {
    chrome.tabs.executeScript(tab.id, { file: "imageSwap.js" });
  } else {
    console.error("No supported script injection API found.");
  }
});