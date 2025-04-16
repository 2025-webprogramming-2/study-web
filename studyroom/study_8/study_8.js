const quotes = [
  "공부는 배신하지 않는다.",
  "포기하지 마라, 끝까지 해보자.",
  "지금 흘리는 땀은 내일의 자산이다.",
  "오늘의 노력이 내일의 나를 만든다.",
  "작은 습관이 큰 변화를 만든다.",
  "실패는 성공의 어머니이다.",
  "계속하는 자가 이긴다.",
  "너라면 할 수 있어!",
  "천천히 가도 포기하지 마라.",
  "끝까지 가는 사람이 결국 승자다.",
  "늦었다고 생각했을 때가 진짜 너무 늦었다.",
  "권유민, 이시온, 신혁규 파이팅!"
];

const softColors = [
  "#FFB6B9", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA", "#FAD0C3"
];

const quoteElement = document.getElementById("quote");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomColorIndex = Math.floor(Math.random() * softColors.length);
  quoteElement.textContent = quotes[randomIndex];
  quoteElement.style.color = softColors[randomColorIndex];
}

showRandomQuote();
setInterval(showRandomQuote, 5000);

