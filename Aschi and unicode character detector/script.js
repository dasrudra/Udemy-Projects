function detectCharacter(){
    const characteInput = document.getElementById("characterInput");
    const result = document.getElementById("result");

    const character = characteInput.value;
    if(isASCII(character)){
        result.innerText = 'The entered character is an ASCII Character'
    }else{
        result.innerText = 'The entered character is an Unicode Character'
    }
}

function isASCII(character){
    return character.charCodeAt(0)<=127;
}