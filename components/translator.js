const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    dictionaryCheck(term,dictionary){
        for(let word in dictionary){
            if(word == term){
                return dictionary[word]
            }
        }
    }
    spellCheckA(term){
        for(let word in americanToBritishSpelling){
            if (word == term){
                return americanToBritishSpelling[word]
            }
        }
    }
    spellCheckB(term){
        for(let word in americanToBritishSpelling){
            if(americanToBritishSpelling[word]== term){
                return word
            }
        }
    }
    prefixEditA(term){
       for(let prefix in americanToBritishTitles){
            if(term==americanToBritishTitles[prefix]){
                return prefix
            }
       }
    }
    prefixEditB(term){
        for(let prefix in americanToBritishTitles){
             if(term==prefix){
                 return americanToBritishTitles[prefix]
             }
        }
     }
    translateAmerican(text){
        let textArray = text.split(' ')
        let responseArray = []
        for (let word of textArray){
            if(this.dictionaryCheck(word,americanOnly)){

                responseArray.push(this.dictionaryCheck(word,americanOnly))
            }else{
 
                responseArray.push(word)
            }
        }
        return responseArray
    }
        translateBritish(text){
        let textArray = text.split(' ')
        let responseArray = []
        for (let word of textArray){
            if(this.dictionaryCheck(word,britishOnly)){
   
                responseArray.push(this.dictionaryCheck(word,britishOnly))
            }else{
   
                responseArray.push(word)
            }
        }
        return responseArray
    }
    translate(text,locale){
        if(locale=="american-to-british"){
            
            const translatedText = this.translateAmerican(text)
            const spellCheckedText = []
            for(let term of translatedText){
                if(this.spellCheckA(term)){
                    spellCheckedText.push(this.spellCheckA(term))
                    
                }else{
                    spellCheckedText.push(term)
                }
            } 
            for(let i=0;i< spellCheckedText.length;i++){
                if(this.prefixEditA(spellCheckedText[i])){
              
                    spellCheckedText[i] = this.prefixEditA(spellCheckedText[i])
                }
            }
            console.log(spellCheckedText)
            return spellCheckedText.join(' ')  
        }
        
        
        
         if(locale=="british-to-american"){
            const translatedText = this.translateBritish(text)
            const spellCheckedText = []
            for(let term of translatedText){
                if(this.spellCheckB(term)){
                    spellCheckedText.push(this.spellCheckB(term))
                }else{
                    spellCheckedText.push(term)
                }
            }  
            for(let i=0;i< spellCheckedText.length;i++){
                if(this.prefixEditB(spellCheckedText[i])){
              
                    spellCheckedText[i] = this.prefixEditB(spellCheckedText[i])
                }
            }
            return spellCheckedText.join(' ')
         }

    }
   // fix the mr and mrs function
   //check the spelling function
}

module.exports = Translator;