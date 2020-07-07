function fizzBuzz(n){t
    if (n % 5 == 0 && n % 3 == 0){
        return "FizzBuzz";
    }
    else if (n % 5 == 0 ){
        return "Buzz";
    }
    else if (n % 3 == 0){
        return "Fizz";
    }
    else{
        return n;
    }
}

for (let i = 1; i <= 20; i++){
    console.log(fizzBuzz(i));
}