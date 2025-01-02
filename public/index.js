
const translateHandler = async () => {
  const textArea = document.getElementById("text-input");
  const localeArea = document.getElementById("locale-select");
  const errorArea = document.getElementById("error-msg");
  const translatedArea = document.getElementById("translated-sentence");
  
  errorArea.innerText = "";
  translatedArea.innerText = "";

  const data = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify({"text": textArea.value, "locale": localeArea.value})
  });

  const parsed = await data.json();
  if (parsed.error) {
    errorArea.innerText = JSON.stringify(parsed);
    return;
  }

  translatedArea.innerHTML = parsed.translation;
  return;
};



document.getElementById("translate-btn").addEventListener("click", translateHandler)
// List of fun phrases for both American to British and British to American
const funPhrases = {
  "american-to-british": [
      "I’m going to the mall to grab a soda pop.",
      "I ate yogurt for breakfast.",
      "Like a high tech Rube Goldberg machine.",
      "To play hooky means to skip class or work.",
      "The parking lot was full."
  ],
  "british-to-american": [
      "Paracetamol takes up to an hour to work.",
      "The car boot sale at Boxted Airfield was called off.",
      "I had a bicky then went to the chippy.'",
      "I spent the bank holiday at the funfair.",
      "First, caramelise the onions."
  ]
};

// Add event listener to the fun phrase button
document.getElementById('fun-phrase-btn').addEventListener('click', () => {
  const locale = document.getElementById('locale-select').value;
  const phrases = funPhrases[locale];
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  // Insert the random fun phrase into the textarea
  document.getElementById('text-input').value = randomPhrase;
});
