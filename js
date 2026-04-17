// 1. GESTÃO DE DADOS (Simulação de API/Conteúdo)
const benefitsData = [
    { title: "Mais Energia", desc: "Alimentos integrais fornecem combustível constante." },
    { title: "Foco Mental", desc: "Nutrientes que auxiliam a função cognitiva." },
    { title: "Longevidade", desc: "Prevenção de doenças através de escolhas saudáveis." }
];

const faqData = [
    { q: "Preciso cortar carboidratos?", a: "Não, o segredo é o equilíbrio e a escolha de carboidratos complexos." },
    { q: "O que é alimentação intuitiva?", a: "É ouvir os sinais de fome e saciedade do seu corpo." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function initDynamicContent() {
    const grid = document.getElementById('benefits-grid');
    benefitsData.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    const faqContainer = document.getElementById('faq-container');
    faqData.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" aria-controls="faq-${index}">
                    ${item.q}
                </button>
                <div id="faq-${index}" class="accordion-content">
                    <p>${item.a}</p>
                </div>
            </div>
        `;
    });
}
