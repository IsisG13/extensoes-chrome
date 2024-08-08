(function() {
    function capturarInformacoes() {
    var informacoes = {
    titulo: document.title,
    url: window.location.href,
    metaDescricao: document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute('content') : null,
    h1: document.querySelector('h1') ? document.querySelector('h1').innerText : null,
    paragrafos: Array.from(document.querySelectorAll('p')).map(p => p.innerText),
    links: Array.from(document.querySelectorAll('a')).map(a => ({texto: a.innerText, href: a.href}))
    };
    
    return JSON.stringify(informacoes, null, 2);
    }
   
    var infoJson = capturarInformacoes();
    console.log(infoJson);
    alert("Informações capturadas! Verifique o console do desenvolvedor.");
   })();