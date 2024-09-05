const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = process.env.PORT || 3000;

//não esquece de ligar a porcaria do servidor,
//e abra o navegador com o localhost e não pelo live server.

const servidor = http.createServer((pedido, resposta) => {
    if (pedido.url === '/') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/index.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    } 
    if (pedido.url === '/educacao') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/educacao.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/saude') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/saude.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/meioAmbiente') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/meioAmbiente.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/seguranca') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/seguranca.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/economia') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/economia.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/cultura') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/cultura.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/gestao') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/gestao.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/politicaInterna') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/politicaInterna.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/politicaExterna') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/politicaExterna.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/qualidadeDeVida') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/qualidadeDeVida.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/exercito') {
        fs.readFile(path.resolve(__dirname, '../frontend/view/exercito.html'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }

    //A partir da linha 156, entramos na area de CSS

    if (pedido.url === "/css/global.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/global.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/cultura.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/cultura.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/economia.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/economia.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/educacao.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/educacao.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/exercito.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/exercito.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/gestao.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/gestao.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/meioAmbiente.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/meioAmbiente.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/politicaExterna.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/politicaExterna.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/politicaInterna.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/politicaInterna.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/qualidadeDeVida.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/qualidadeDeVida.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/saude.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/saude.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === "/css/seguranca.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/seguranca.css'), (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Desculpe, não foi possivel encontrar sua pesquisa, recarregue a pagína ou tente novamente mais tarde!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
});

servidor.listen(portaDeEntrada, '0.0.0.0');