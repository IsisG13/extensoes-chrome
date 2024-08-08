(function() {
    function capturarInformacoes() {
        function getTextoVisivel(elemento) {
            // Filtra o texto visível (sem espaços em branco excessivos)
            return Array.from(elemento.childNodes)
                .filter(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '')
                .map(node => node.nodeValue.trim())
                .join(' ');
        }

        function capturarTextoDeElementos() {
            const elementos = document.querySelectorAll('body *');  // Seleciona todos os elementos da página
            let textosVisiveis = [];

            elementos.forEach(elemento => {
                const texto = getTextoVisivel(elemento);
                if (texto) {
                    textosVisiveis.push(texto);
                }
            });

            return textosVisiveis;
        }

        var informacoes = {
            titulo: document.title,
            url: window.location.href,
            metaDescricao: document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute('content') : null,
            textosVisiveis: capturarTextoDeElementos()  // Captura todo o texto visível na tela
        };

        return JSON.stringify(informacoes, null, 2);
    }
    
    return capturarInformacoes();
})();
