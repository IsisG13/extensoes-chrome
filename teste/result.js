document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('extractedData', (result) => {
      document.getElementById('extractedData').textContent = result.extractedData;
    });
  });
  