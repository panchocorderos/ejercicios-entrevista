// Escalerita 1 (hecho en la entrevista)
function escalerita(n){
    const process = require('process');
    for (let i = 1; i <= n; i++){
        let cantidadEspacios = n - i;
        let cantidadHash = i;
        // console.log('Hola mundo');
        for (let j = 1; j <= cantidadEspacios; j++){
            process.stdout.write(' ');
        }
        for (let x = 1; x < cantidadHash; x++){
            process.stdout.write('#');
        }
        console.log("#");
    }
}

// Escalerita 2 (hecho después)
function escalerita2(n){
    for (let i = 1; i <= n; i++){
        let escalera = '';
        escalera = ' '.repeat(n-i);
        escalera+= '#'.repeat(i)
        console.log(escalera)
    }
}

// Main
escalerita(6);
escalerita2(6);