document.addEventListener('DOMContentLoaded', () => {
    const mensagemBtn = document.getElementById('mensagemBtn');
    const mensagemParagrafo = document.getElementById('mensagem');
 
    mensagemBtn.addEventListener('click', () => {
        if (mensagemParagrafo.classList.contains('hidden')) {
            mensagemParagrafo.textContent = "🥳 Bom apetite! Que seu pudim seja delicioso! 🥳";
            mensagemParagrafo.classList.remove('hidden');
        } else {
            mensagemParagrafo.classList.add('hidden');
        }
    });
});