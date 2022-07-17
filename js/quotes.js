const quotes =[
    {
    quote : "아무것도 가지고 태어나지 않았기에 무엇이든 될 수 있다.",
    author : "소라"
    },
    {
        quote : "자신을 믿지 않는 자는 노력할 가치도 없다.",
        author : "마이트 가이"
    },
    {
        quote : "내일은 내일의 태양이 뜬다.",
        author : "스칼렛 오하라"
    },
    {
        quote : "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을만한 뛰어난 인물의 증거이다.",
        author : "베토벤"
    },
    {
        quote : "하루하루를 마지막 날이라고 생각하라." ,
        author : "호라티우스"
    },
    {
        quote : "작은 기회로부터 종종 위대한 업적이 시작된다." ,
        author : "데모스테네스"
    },
    {
        quote : "최고에 도달하려면 최저에서 시작하라.",
        author : "P.시루스"
    },
    {
        quote : "겨울이 오면 봄이 멀지 않으리.",
        author : "셸리"
    },
    {
        quote : "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한사람, 오직 나 자신 뿐이다.",
        author : "오손 웰스"
    },
    {
        quote : "길을 잃는다는 것은 곧 길을 알게 된다는 것이다.",
        author : "동아프리카 속담"
    }

];

const quote = document.querySelector("#quote");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote} -${todaysQuote.author}-`;
