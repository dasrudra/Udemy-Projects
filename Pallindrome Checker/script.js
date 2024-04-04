function isPalindrome(str){
    const cleanStr = str.toLowercase().replace(/[^a-z0-9]/g,'');
    //console.log(cleanStr);
    const reverseStr = cleanStr.split('').reverse().join('');
    //console.log(reverseStr);
    return cleanStr === reverseStr;
}

function palindromeChecker(){

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    if(isPalindrome(inputText.value)){
        result.textContent ='"${inputText.value}" is a Palindrome';

    }else{
        result.textContent ='"${inputText.value}" is not a Palindrome';

    }
    result.classList.add('fadeIn');

    inputText.value = '';
}

document.getElementById('checkButton').
addEventListener("click",palindromeChecker);