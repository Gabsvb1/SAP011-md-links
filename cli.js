import { soma, lerArquivo } from './index.js';
import { yellow, bgGrey } from 'chalk';



const resultado = soma(1, 2);

console.log(yellow(resultado));

const caminhoArquivo = process.argv[2];
lerArquivo(caminhoArquivo)
    .then((conteudoArquivo) => {
        console.log(bgGrey(conteudoArquivo))

    });

const inputs = process.argv
console.log(inputs)


