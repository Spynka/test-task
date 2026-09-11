const CREATIVES = [
    {
        title: "Креатив 1. Прямой вопрос",
        desc: "Гипотеза: цепляем мужчину 35+ прямым вопросом о проблеме. Не стыдим, а показываем, что решение есть. Клик — за счёт узнавания ситуации и обещания бесплатной упаковки.",
        img: "1.png"
    },
    {
        title: "Креатив 2. До / после",
        desc: "Гипотеза: визуальное сравнение уверенности до и после. Работает на эмоции и желание вернуть ощущение силы. В тексте — мягкий оффер «Эрголонг» и бесплатная упаковка.",
        img: "2.png"
    },
    {
        title: "Креатив 3. Рекомендация",
        desc: "Гипотеза: креатив в стиле рекомендации специалиста. Повышает доверие у аудитории 35+, которая боится сомнительных средств. Клик — за счёт ощущения безопасности.",
        img: "3.png"
    },
    {
        title: "Креатив 4. Оффер «Бесплатно»",
        desc: "Гипотеза: главный акцент — слово «бесплатно». Человек кликает, чтобы узнать условия. На лендинге оставляет контакты, дальше менеджер объясняет: 1 упаковка бесплатно при заказе курса.",
        img: "4.gif"
    },
    {
        title: "Креатив 5. История клиента",
        desc: "Гипотеза: социальное доказательство. Показываем историю мужчины 35+, который решил деликатную тему. Цепляет тех, кто сомневается и ищет подтверждение.",
        img: "5.gif"
    },
    {
        title: "Креатив 6. Вопрос-крючок",
        desc: "Гипотеза: короткий вопрос в заголовке останавливает скролл. Дальше — обещание решения и бесплатной упаковки. Клик — из-за любопытства и личной боли.",
        img: "6.png"
    }
];

const page = document.querySelector(".creative-page");
const index = parseInt(page.dataset.creative, 10) - 1;
const total = CREATIVES.length;
const item = CREATIVES[index];

document.getElementById("creativeImg").src = item.img;
document.getElementById("creativeImg").alt = item.title;
document.getElementById("creativeTitle").textContent = item.title;
document.getElementById("creativeDesc").textContent = item.desc;
document.getElementById("creativeCounter").textContent = `${index + 1} / ${total}`;

function go(offset) {
    const next = (index + offset + total) % total;
    window.location.href = `creative-${next + 1}.html`;
}

document.getElementById("prevBtn").addEventListener("click", () => go(-1));
document.getElementById("nextBtn").addEventListener("click", () => go(1));

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  go(-1);
    if (e.key === "ArrowRight") go(1);
    if (e.key === "Escape")     window.location.href = "../index.html";
});