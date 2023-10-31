const projetos = document.querySelectorAll('.projetos__lista-projetos__projeto-card');

projetos.forEach((projeto) => {
    projeto.addEventListener('mouseover', () => {
        const corpoCardProjeto = projeto.children[1];
        corpoCardProjeto.classList.add('aparecer');
        const nomeProjetoCard = corpoCardProjeto.children[0];
        const linkVisualizarProjeto = corpoCardProjeto.children[1];
        nomeProjetoCard.classList.add('aparecer');
        linkVisualizarProjeto.classList.add('aparecer');
    });
    projeto.addEventListener('mouseleave', () => {
        const corpoCardProjeto = projeto.children[1];
        corpoCardProjeto.classList.remove('aparecer');
        const nomeProjetoCard = corpoCardProjeto.children[0];
        const linkVisualizarProjeto = corpoCardProjeto.children[1];
        nomeProjetoCard.classList.remove('aparecer');
        linkVisualizarProjeto.classList.remove('aparecer');
    });
});