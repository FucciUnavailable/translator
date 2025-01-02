const Translator = require('../components/translator'); // Adjust the path based on where your Translator class is located
const assert = require('chai').assert;

describe('Unit Tests', function() {
    let translator;

    beforeEach(function() {
        translator = new Translator(); // Create a new instance of the Translator class before each test
    });

    // British English translation suite
    describe('Translation to British English', function() {
        it('should translate "Mangoes are my favorite fruit." to British English', function() {
            const text = 'Mangoes are my favorite fruit.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        });

        it('should translate "I ate yogurt for breakfast." to British English', function() {
            const text = 'I ate yogurt for breakfast.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
        });

        it('should translate "We had a party at my friend\'s condo." to British English', function() {
            const text = 'We had a party at my friend\'s condo.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, `We had a party at my friend's <span class="highlight">flat</span>.`);
        });

        it('should translate "Can you toss this in the trashcan for me?" to British English', function() {
            const text = 'Can you toss this in the trashcan for me?';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'Can you toss this in the <span class="highlight">bin</span> for me?');
        });

        it('should translate "The parking lot was full." to British English', function() {
            const text = 'The parking lot was full.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'The <span class="highlight">car park</span> was full.');
        });

        it('should translate "Like a high tech Rube Goldberg machine." to British English', function() {
            const text = 'Like a high tech Rube Goldberg machine.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
        });

        it('should translate "To play hooky means to skip class or work." to British English', function() {
            const text = 'To play hooky means to skip class or work.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'To <span class="highlight">bunk off</span> means to skip class or work.');
        });

        it('should translate "No Mr. Bond, I expect you to die." to British English', function() {
            const text = 'No Mr. Bond, I expect you to die.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
        });

        it('should translate "Dr. Grosh will see you now." to British English', function() {
            const text = 'Dr. Grosh will see you now.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, '<span class="highlight">Dr</span> Grosh will see you now.');
        });

        it('should translate "Lunch is at 12:15 today." to British English', function() {
            const text = 'Lunch is at 12:15 today.';
            const result = translator.translate(text, 'american-to-british');
            assert.strictEqual(result, 'Lunch is at <span class="highlight">12.15</span> today.');
        });
    });

    // American English translation suite
    describe('Translation to American English', function() {
        it('should translate "We watched the footie match for a while." to American English', function() {
            const text = 'We watched the footie match for a while.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
        });

        it('should translate "Paracetamol takes up to an hour to work." to American English', function() {
            const text = 'Paracetamol takes up to an hour to work.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
        });

        it('should translate "First, caramelise the onions." to American English', function() {
            const text = 'First, caramelise the onions.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'First, <span class="highlight">caramelize</span> the onions.');
        });

        it('should translate "I spent the bank holiday at the funfair." to American English', function() {
            const text = 'I spent the bank holiday at the funfair.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
        });

        it('should translate "I had a bicky then went to the chippy." to American English', function() {
            const text = 'I had a bicky then went to the chippy.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
        });

        it('should translate "I\'ve just got bits and bobs in my bum bag." to American English', function() {
            const text = 'I\'ve just got bits and bobs in my bum bag.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
        });

        it('should translate "The car boot sale at Boxted Airfield was called off." to American English', function() {
            const text = 'The car boot sale at Boxted Airfield was called off.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
        });

        it('should translate "Have you met Mrs Kalyani?" to American English', function() {
            const text = 'Have you met Mrs Kalyani?';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
        });

        it('should translate "Prof Joyner of King\'s College, London." to American English', function() {
            const text = 'Prof Joyner of King\'s College, London.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, `<span class="highlight">Prof.</span> Joyner of King's College, London.`);
        });

        it('should translate "Tea time is usually around 4 or 4.30." to American English', function() {
            const text = 'Tea time is usually around 4 or 4.30.';
            const result = translator.translate(text, 'british-to-american');
            assert.strictEqual(result, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
        });
    });

    // Highlight translation suite
    describe('Highlight translation', function() {
        it('should highlight translation in "Mangoes are my favorite fruit."', function() {
            const text = 'Mangoes are my favorite fruit.';
            const result = translator.translate(text, 'american-to-british');
            assert.include(result, '<span class="highlight">favourite</span>');
        });

        it('should highlight translation in "I ate yogurt for breakfast."', function() {
            const text = 'I ate yogurt for breakfast.';
            const result = translator.translate(text, 'american-to-british');
            assert.include(result, '<span class="highlight">yoghurt</span>');
        });

        it('should highlight translation in "We watched the footie match for a while."', function() {
            const text = 'We watched the footie match for a while.';
            const result = translator.translate(text, 'british-to-american');
            assert.include(result, '<span class="highlight">soccer</span>');
        });

        it('should highlight translation in "Paracetamol takes up to an hour to work."', function() {
            const text = 'Paracetamol takes up to an hour to work.';
            const result = translator.translate(text, 'british-to-american');
            assert.include(result, '<span class="highlight">Tylenol</span>');
        });
    });
});
