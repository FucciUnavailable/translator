const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert; // Use assert instead of expect
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

describe('Functional Tests', () => {
    suite('POST /api/translate', () => {

        // Test case 1: Translation with text and locale fields
        it('should return translated text when both text and locale fields are provided', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
            text: 'Hello',
            locale: 'american-to-british'
            })
            .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, 'text');
            assert.equal(res.body.text, 'Hello');
            assert.property(res.body, 'translation');
            assert.isString(res.body.translation); // Assuming translation is returned
            done();
            });
        });
    
        // Test case 2: Translation with text and invalid locale field
        it('should return an error when an invalid locale field is provided', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
            text: 'Hello',
            locale: 'invalid-locale'
            })
            .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, 'error');
            assert.equal(res.body.error, 'Invalid value for locale field');
            done();
            });
        });
    
        // Test case 3: Translation with missing text field
        it('should return an error when the text field is missing', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
            locale: 'american-to-british' // Locale provided but no text
            })
            .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, 'error');
            assert.equal(res.body.error, 'Required field(s) missing');
            done();
            });
        });
    
        // Test case 4: Translation with missing locale field
        it('should return an error when the locale field is missing', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
            text: 'Hello' // Text provided but no locale
            })
            .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, 'error');
            assert.equal(res.body.error, 'Required field(s) missing');
            done();
            });
        });
    
        // Test case 5: Translation with empty text
        it('should return an error when the text field is empty', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
            text: '', // Empty text
            locale: 'american-to-british'
            })
            .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, 'error');
            assert.equal(res.body.error, 'No text to translate');
            done();
            });
        });
    
        // Test case 6: Translation with text that needs no translation
        it('should return the same text when no translation is needed', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
            text: 'Hello',
            locale: 'british-to-american' // Assuming "Hello" doesn't require translation in this case
            })
            .end((err, res) => {
            assert.equal(res.status, 200);
            assert.property(res.body, 'text');
            assert.equal(res.body.text, 'Hello');
            assert.property(res.body, 'translation');
            assert.equal(res.body.translation, 'Everything looks good to me!'); // Text should remain unchanged
            done();

            });
        });
    
    });
});

