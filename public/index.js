const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = process.env.PORT || 3000;



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
    if (pedido.url === "/css/index.css") {
        fs.readFile(path.resolve(__dirname, '../frontend/view/css/index.css'), (erro, dadosDoArquivo) => {
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