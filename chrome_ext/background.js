chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        url: "http://be.go.su"
    });
});
