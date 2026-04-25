// State management - No longer needed as we only have one mode
// let currentMode = 'directa';

// DOM Elements
const v1Input = document.getElementById('v1');
const v2Input = document.getElementById('v2');
const v3Input = document.getElementById('v3');
const resultDisplay = document.getElementById('result-display');
const showMoreBtn = document.getElementById('showmore');
const clearBtn = document.getElementById('clear-btn');

// Calculation logic
function calculate() {
    const a = parseFloat(v1Input.value);
    const b = parseFloat(v2Input.value);
    const c = parseFloat(v3Input.value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        resultDisplay.innerText = '0';
        return;
    }

    // Direct: A -> B, C -> X => X = (C * B) / A
    const res = (c * b) / a;

    // Format result
    if (Number.isInteger(res)) {
        resultDisplay.innerText = res.toString();
    } else {
        resultDisplay.innerText = res.toFixed(2).replace(/\.00$/, '');
    }
}

// Event Listeners
[v1Input, v2Input, v3Input].forEach(input => {
    input.addEventListener('input', calculate);
});

clearBtn.addEventListener('click', () => {
    v1Input.value = '';
    v2Input.value = '';
    v3Input.value = '';
    calculate();
});

showMoreBtn.addEventListener('click', () => {
    const content = "En la <b>regla directa</b>, al aumentar una magnitud, aumenta la otra proporcionalmente (Si A aumenta, B aumenta).";
    const imageUrl = 'https://www.educapeques.com/wp-content/uploads/2018/11/ejemplo-regla-de-tres.jpg.webp';

    Swal.fire({
        title: 'Regla Directa',
        html: `<p style="font-size: 0.9rem; margin-bottom: 1rem;">${content}</p>`,
        imageUrl: imageUrl,
        imageHeight: 250,
        imageAlt: 'Fórmula',
        background: '#1e293b',
        color: '#f8fafc',
        confirmButtonColor: '#818cf8',
        confirmButtonText: 'Entendido'
    });
});

// Initial state
lucide.createIcons();