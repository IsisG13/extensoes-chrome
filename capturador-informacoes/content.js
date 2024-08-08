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
            // Ignora elementos de script e estilo
            const elementos = document.querySelectorAll('body *:not(script):not(style)');
            let textosVisiveis = [];

            elementos.forEach(elemento => {
                // Filtra elementos com display não visível
                const estilo = getComputedStyle(elemento);
                if (estilo.display !== 'none' && estilo.visibility !== 'hidden') {
                    const texto = getTextoVisivel(elemento);
                    if (texto) {
                        textosVisiveis.push(texto);
                    }
                }
            });

            return textosVisiveis;
        }

        function capturarLinks() {
            return Array.from(document.querySelectorAll('a')).map(a => ({
                texto: a.innerText.trim(),
                href: a.href
            }));
        }

        var informacoes = {
            pagina: {
                titulo: document.title,
                url: window.location.href,
                metaDescricao: document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute('content') : null
            },
            conteudo: {
                textosVisiveis: capturarTextoDeElementos(),  // Captura todo o texto visível na tela
                links: capturarLinks()  // Captura todos os links
            }
        };

        return JSON.stringify(informacoes, null, 2);
    }
    
    return capturarInformacoes();
})();
