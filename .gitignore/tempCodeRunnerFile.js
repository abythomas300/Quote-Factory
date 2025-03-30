const quotes = ["You have believe in yourself when no one else does.", 
                "When you have a dream, you’ve got to grab it and never let go.", 
                "The most important thing is to enjoy your life—to be happy—it’s all that matters.",
                "Spread love everywhere you go. Let no one ever come without leaving happier.",
                "Be yourself; everyone else is already taken.",
                "The biggest adventure you can take is to live the life of your dreams",
                "The only thing we have to fear is fear itself.",
                "Some people want it to happen, some wish it would happen, others make it happen.",
                "You’ve got to be in it to win it.",
                "It does not matter how slowly you go, as long as you do not stop.",
                "Find out who you are and do it on purpose.",
                "Confident people have a way of carrying themselves that makes others attracted to them.",
                "If you can do what you do best and be happy, you are further along in life than most people.",
                "You can be everything. You can be the infinite amount of things that people are.",
                "Always go with your passions. Never ask yourself if it’s realistic or not."
            ];
const quoteBody = document.querySelector(".quote");
const generateBtn = document.querySelector(".button");

//add event listener to 'Generate Quote' button
generateBtn.addEventListener("click",pickQuote);

//callback function for event listener
function pickQuote(){
    var selectedIndex = Math.floor(Math.random()*quotes.length);
    quoteBody.textContent = `" ${quotes[selectedIndex]} "`;
}