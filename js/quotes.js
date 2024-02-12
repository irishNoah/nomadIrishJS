const quotes = [
    {
    quote: '시간은 돈이다.',
    author: '미상'
    },
    {
    quote: '시간은 모든 상처를 치유합니다.',
    author: '미상'
    },
    {
    quote: '잃어버린 시간은 다시는 찾을 수 없습니다.',
    author: '미상'
    },
    {
    quote: '천하에 모든 일에는 다 때가 있고 모든 일에는 때가 있나니',
    author: '전도서 [3:1]'
    },
    {
    quote: '즐거운 시간을 보내고 있으면 시간이 빨리 갑니다.',
    author: '미상'
    },
    {
    quote: '1분 늦은 것보다 3시간 빠른 것이 더 좋습니다.',
    author: '윌리엄 셰익스피어'
    },
    {
    quote: '시간과 조류는 사람을 기다리지 않는다.',
    author: '미상'
    },
    {
    quote: '시간이 필요한 유일한 이유는 모든 일이 한꺼번에 일어나지 않기 위해서입니다.',
    author: '알베르트 아인슈타인'
    },
    {
    quote: '시간은 두 장소 사이의 가장 긴 거리이다.',
    author: '테네시 윌리엄스'
    },
    {
    quote: '모든 것을 보는 시간이 당신을 발견했습니다.',
    author: '소포클레스'
    }
];

const spanQuote = document.querySelector("#quote span:first-child");
const spanAuthor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

spanQuote.innerText = "명언 = " + todaysQuote.quote;
spanAuthor.innerText = "저자 = " + todaysQuote.author;