chrome.runtime.onMessage.addListener(function(request) {
    document.getElementById('infoJson').textContent = request.data;
});
