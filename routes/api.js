'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      
      const {text, locale}= req.body
      if(!text || !locale){
        if (text==='' && locale){return res.send({ error: 'No text to translate' })}
        return res.send({ error: 'Required field(s) missing' })
      }
      if (locale !== "american-to-british" && locale !== "british-to-american"){
        return res.send({ error: 'Invalid value for locale field' })
      }
      res.send({text: text, translation: translator.translate(text, locale)})
      
    });
};
