import { fs } from "fs";



function soma (a,b){
  return a + b;
}

function lerArquivo (caminhoDoArquivo){
 return new Promise (function (resolve, reject){
    fs.readFile(caminhoDoArquivo, "utf8", (err, data) => {
      if (err) reject(err); 
      resolve (data);
    });
});
  
}


export {soma, lerArquivo};

