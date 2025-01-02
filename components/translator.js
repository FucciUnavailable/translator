class Translator {
    constructor() {
        this.mappings = {
            "american-to-british": {
                spelling: require('./american-to-british-spelling.js'),
                titles: require('./american-titles.js'),
                dictionary: require('./american-only.js')
            },
            "british-to-american": {
                spelling: this.invertMapping(require('./american-to-british-spelling.js')),
                titles: require('./british-titles.js'),
                dictionary: require('./british-only.js')
            }
        };
    }

    // Helper to invert key-value mappings
    invertMapping(mapping) {
        return Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
    }

    // Generic text replacement logic
    replaceText(text, mapping) {
        let result = text;
        for (const [term, replacement] of Object.entries(mapping)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi'); // Match whole words case-insensitively
            result = result.replace(regex, `<span class="highlight">`+replacement+`</span>`);
        }
        return result;
    }
    // text replace titles 
    replaceTitles(text, mapping){
        let result = text.split(" ")
        for (let i = 0; i<result.length; i++){
            for(const [term,replacement] of Object.entries(mapping)){
                if(result[i].toLowerCase()===term){
                    result[i]=(`<span class="highlight">`+replacement+`</span>`)
                }
            }
        }
        return result.join(' ')

    }
    replaceTime(text, locale) {
        let response = text;
        if (locale === "american-to-british") {
            const regex = /\b(\d{1,2}):(\d{2})\b/g; // Match American time format
            response = response.replace(regex, (match, hours, minutes) => {
                return `<span class="highlight">${hours}.${minutes}</span>`;
            });
        }
        if (locale === "british-to-american") {
            const regex = /\b(\d{1,2})\.(\d{2})\b/g; // Match British time format
            response = response.replace(regex, (match, hours, minutes) => {
                return `<span class="highlight">${hours}:${minutes}</span>`;
            });
        }
        return response;
    }
    
    // Main translation logic
    translate(text, locale) {
        if (!text) return '';
        if (!this.mappings[locale]) {
            throw new Error(`Invalid locale: ${locale}`);
        }

        const { spelling, titles, dictionary } = this.mappings[locale];

        const first =  this.replaceText(
            this.replaceText(text, dictionary), // Apply dictionary translations
            spelling // Apply spelling corrections
        )
       
        const final = this.replaceTitles(first, titles)
        const response = this.replaceTime(final, locale)

        if(response === text){
            return  "Everything looks good to me!"
        }
        console.log(response)
        return response
        
    }
}

module.exports = Translator;
