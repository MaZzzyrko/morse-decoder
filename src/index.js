const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(x) {
        const number = new RegExp(".{1,10}", "ig");
        const theMessage = x.match(number);
        
        var endMessage = "";
                    theMessage.forEach(theMessage => {
                    if(theMessage === "**********")endMessage = endMessage + " ";
                    else {
                    
            var messageMorse = "";
            
             for(var i = 0; i < theMessage.length - 1; i = i + 2) {
                    if(theMessage[i] + theMessage[i + 1] === '10')messageMorse = messageMorse + ".";
                    if(theMessage[i] + theMessage[i + 1] === '11')messageMorse = messageMorse + "-";
             
            }
            endMessage = endMessage + MORSE_TABLE[messageMorse];
          }
        });
        
        return endMessage;
      
}


module.exports = {
    decode
}