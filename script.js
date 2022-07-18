let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotesInspirational = [
    "'When you have a dream, you've got to grab it and never let go.' - Carol Burnett",
    "'Nothing is impossible. The word itself says 'I'm possible!'' - Audrey Hepburn",
    "'The bad news is time flies. The good news is you're the pilot.' - Michael Altshuler",
    "'You define your own life. Don't let other people write your script.' - Oprah Winfrey",
    "'You are never too old to set another goal or to dream a new dream.' - Malala Yousafzai",
];

btn.addEventListener('click', function() {
    var randomQuote = quotesInspirational[Math.floor(Math.random() * quotesInspirational.length)]
    output.innerHTML = randomQuote;
});

let btn1 = document.getElementById('btn1');
let output1 = document.getElementById('output1');

let quotesCheerMe = [
    "'I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with them later'. - Mitch Hedberg",
    "'I used to sell furniture for a living. The trouble was, it was my own.' - Les Dawson",
    "'I'm not insane. My mother had me tested.' - Sheldon Cooper (Jim Parsons), The Big Bang Theory",
    "'Common sense is like deodorant. The people who need it most never use it.' - Anonymous",
    "'A day without sunshine is like, you know, night.' - Steve Martin",
];

btn1.addEventListener('click', function() {
    var randomQuoteMe = quotesCheerMe[Math.floor(Math.random() * quotesCheerMe.length)]
    output1.innerHTML = randomQuoteMe;
});

let btn2 = document.getElementById('btn2');
let output2 = document.getElementById('output2');

let randomMe = [
    "'I'm about as intimidating as a butterfly.' - Dan Howell",
    "'Life is what happens when you're busy making other plans.' -John Lennon",
    "'Never put off till tomorrow what you can do the day after tomorrow just as well.' - Mark Twain",
    "'Woke up today. It was terrible.' - Grumpy Cat",
    "'I like long walks, especially when they are taken by people who annoy me.' - Noel Coward",
];

btn2.addEventListener('click', function() {
    var randomQuote2 = randomMe[Math.floor(Math.random() * randomMe.length)]
    output2.innerHTML = randomQuote2;
});