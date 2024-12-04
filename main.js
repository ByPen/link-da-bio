// Seleciona todos os botões
const buttons = document.querySelectorAll("button");

// Adiciona evento de clique para animar os botões
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Adiciona a classe de animação
        button.classList.add("animate");

        // Remove a classe de animação após o término
        setTimeout(() => {
            button.classList.remove("animate");
        }, 200); // Tempo deve corresponder à duração da animação no CSS
    });
});

