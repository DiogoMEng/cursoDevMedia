async function listaMedicos(tabela) {
    const medicos = await fetch("http://localhost:9000/medicos");
    const medicos_json = await medicos.json();

    medicos_json.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nome_medico}</td>
            <td>${item.telefone}</td>
            <td>${item.email}</td>
            <td>${item.especialidade}</td>
        `;
        tabela.appendChild(row);
    });
}