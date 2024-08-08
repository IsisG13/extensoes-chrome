chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: 'content.js'}, function(result) {
        const jsonInfo = result[0];
        const url = chrome.runtime.getURL('index.html');
        chrome.tabs.create({ url: url }, function(newTab) {
            chrome.tabs.onUpdated.addListener(function onUpdated(tabId, changeInfo) {
                if (tabId === newTab.id && changeInfo.status === 'complete') {
                    chrome.tabs.sendMessage(newTab.id, { data: jsonInfo });
                    chrome.tabs.onUpdated.removeListener(onUpdated);
                }
            });
        });
    });
});
