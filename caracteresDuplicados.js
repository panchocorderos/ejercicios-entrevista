// Función hecha con dos for
function hasDuplicatedCharacters(str){
    for (let i = 0; i < str.length; i++){
        let caracter = str[i];
        for (let j = i+1; j < str.length; j++){
            if (caracter == str[j]){
                return true;
            }
        }
    }
    return false;
}

// Función con un while y un for
function hasDuplicatedCharacters2(str){
    let n = 0
    while (n <= str.length){
        for (let i = 1; i < str.length; i++){
            if (str[n] == str[i]){
                return true;
            } 
        }
        n++;
    }
    return false;
}

// Función hecha con un for
function hasDuplicatedCharacters3(str){
    for (let i = 0; i < str.length; i++){
        if (str.includes(str[i], i+1)){
            return true;
        }
    }
    return false;
}

// Main
console.log(hasDuplicatedCharacters('nasaaaaaas'));
console.log(hasDuplicatedCharacters2('nasaaaaaas'));
console.log(hasDuplicatedCharacters3('nasaaaaaas'));


