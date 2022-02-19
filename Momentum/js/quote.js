const quotes =[
    {
        quote: "Seize the day.",
        kor: "오늘을 즐기세요.",
    },
    {
        quote: "Don't beat yourself up.",
        kor: "자책하지 마세요.",
    },
    {
        quote: "Don't dream, Be it.",
        kor: "꿈만 꾸지 말고 되어라.",
    },
    {
        quote: "Life is unfair, get used to it.",
        kor: "인생은 불공평합니다. 익숙해지세요.",
    },    
    {
        quote: "Past is just past.",
        kor: "과거는 과거일 뿐입니다..",
    },
    {
        quote: "When they go low, we go high.",
        kor: "타인들이 저급해도 우리는 품위있게 갑시다.",
    },
    {
        quote: "This is how life is.",
        kor: "이런게 인생이지요.",
    },
    {
        quote: "If not now, then when?",
        kor: "지금 아니면 언제하실 건가요?",
    },
];

const quote = document.querySelector("#quote span:first-child");
const kor = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
kor.innerText = todaysQuote.kor;