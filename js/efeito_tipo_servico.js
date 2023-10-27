const tiposServico = document.querySelectorAll('.servicos__listagem-servicos__servico');

for (let i = 0; i < tiposServico.length; i++) {
    const tipoServico = tiposServico[i];
    const categoriaTipoServico = tipoServico.children[0];
    const nomeTipoServico = tipoServico.children[1];
    const descricaoTipoServico = tipoServico.children[2];
    const btnEntrarContato = tipoServico.children[3];
    tipoServico.addEventListener('mouseover', () => {
        tipoServico.style.backgroundColor = 'rgb(0, 255, 67)';
        categoriaTipoServico.style.color = '#000000';
        nomeTipoServico.style.color = '#000000';
        descricaoTipoServico.style.color = '#000000';
        btnEntrarContato.style.color = '#000000';
    });
    tipoServico.addEventListener('mouseleave', () => {
        tipoServico.style.backgroundColor = '#000000';
        categoriaTipoServico.style.color = '#ffffff';
        nomeTipoServico.style.color = 'rgb(0, 255, 67)';
        descricaoTipoServico.style.color = '#ffffff';
        btnEntrarContato.style.color = '#ffffff';
    });
}