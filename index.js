import fs from 'fs';



function soma (a,b){
  return a + b;
}

function mdLinks (caminhoDoArquivo){
 return new Promise (function (resolve, reject){
    fs.readFile(caminhoDoArquivo, "utf8", (err, data) => {
      if (err) reject(err); 
      resolve (data);
      const pattern = /\[([^\]]+)\]\((https?[^)]+)\)/g;
      const links =[]; //cria um array para armazenar os links encontrados. 
      let match; //declara uma variável match para armazenar cada correspondência encontrada

    });
});


}


export {soma, mdLinks};

