const word = 'Biscuit';
console.log(word)


function reversal(str) {
    let temp = '';
    for(let i = str.length - 1; i>=0; i--){
        //let i = the max length of the string - 1. This puts us at the last postiion of the sring
        temp = temp += str[i];
        //as the loop continues, it will subtract. append the value going backwards to temp variable
    }
    console.log(temp);
}

reversal(word);
