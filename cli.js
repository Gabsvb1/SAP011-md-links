import { soma, mdLinks } from './index.js';
import chalk from 'chalk';




const resultado = soma(1, 2);

console.log(chalk.yellow(resultado));

const caminhoArquivo = process.argv[2];
mdLinks(caminhoArquivo)
    .then((conteudoArquivo) => {
         console.log(chalk.bgGrey(conteudoArquivo))
        for (const link of conteudoArquivo) {
            console.log(chalk.bgGreenBright.bold(link.text) + chalk.bgBlue.bold(' URL: '))
        }

    });

const inputs = process.argv[2]
console.log(inputs)


