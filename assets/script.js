const quotes = [{ text: "You have to believe in yourself when no one else does.", author: "Venus Williams" },
    { text: "When you have a dream, you’ve got to grab it and never let go.", author: "Carol Burnett" },
    { text: "The most important thing is to enjoy your life—to be happy—it’s all that matters.", author: "Steve Jobs" },
    { text: "Spread love everywhere you go. Let no one ever come without leaving happier.", author: "Mother Teresa" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "Some people want it to happen,some wish it would happen,others make it happen.", author: "Michael Jordan" },
    { text: "You’ve got to be in it to win it.", author: "Denise Austin" },
    { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" }
];
const quoteBody = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".button");
//add event listener to 'Generate Quote' button
generateBtn.addEventListener("click",pickQuote);

//callback function for event listener
function pickQuote(){
    var selectedIndex = Math.floor(Math.random()*quotes.length);
    quoteBody.textContent = `" ${quotes[selectedIndex].text} "`;
    author.textContent = quotes[selectedIndex].author;
}