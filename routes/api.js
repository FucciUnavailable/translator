'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let response
      const {text, locale}= req.body
      let translatedText = translator.translate(text, locale)
      if(locale == "british-to-american"){
        let regex = /(?<=\d)\.(?=\d)/g
         response = translatedText.replace(regex, ":")


      }
      if(locale == "american-to-british"){
        let regex = /(?<=\d)\:(?=\d)/gm
         response = translatedText.replace(regex, ".")
      }
        res.send({text: text, translation: response})

      
    });
};
