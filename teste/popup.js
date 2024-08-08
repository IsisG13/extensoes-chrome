document.getElementById('extractData').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: extractData
    }, (results) => {
      const extractedData = results[0].result;
      chrome.storage.local.set({ extractedData }, () => {
        chrome.tabs.create({ url: 'result.html' });
      });
    });
  });
});

function extractData() {
  // Define como os dados serão extraídos da página
  const data = document.body.innerText; // Exemplo: pega todo o texto da página
  return data;
}
