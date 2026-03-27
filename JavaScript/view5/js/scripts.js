const form = document.querySelector('#formInscricao');

form.addEventListener('submit', function(event) {
    event.preventDefault();
 

    const nome = document.querySelector('#nomeCompleto').value;
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const dataNascimento = document.querySelector('#dataNascimento').value;
    const horarioPreferido = document.querySelector('#horarioPreferido').value;
    const urlPortfolio = document.querySelector('#urlPortfolio').value;
    const cursoSelecionado = document.querySelector('#cursos').value;
    const turno = document.querySelector('input[name="turno"]:checked') ? document.querySelector('input[name="turno"]:checked').value : '';
    const interesses = Array.from(document.querySelectorAll('input[name="interesses"]:checked')).map(checkbox => checkbox.value);
    const termosUso = document.querySelector('#termosUso').checked;
    const motivacao = document.querySelector('#motivacoes').value;
    const erroCampo = document.querySelector('#erroCampo');

    const dataNascimentoDate = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoDate.getMonth();
    const dia = hoje.getDate() - dataNascimentoDate.getDate();

    if (nome == '' || email == '' || senha == '' || dataNascimento == '' || horarioPreferido == '' || urlPortfolio == '' || cursoSelecionado == '' || turno == '' || interesses.length === 0 || motivacao == '' || !termosUso) {  
        erroCampo.textContent = 'Por favor, preencha todos os campos e aceite os termos de uso.';
         
    }
    else if(idade < 16 || (idade === 16 && mes < 0) || (idade === 16 && mes === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
        erroCampo.textContent = 'A idade mínima para inscrição é de 16 anos.';
    }
    else if (senha.length < 6) {
        erroCampo.textContent = 'A senha deve conter pelo menos 6 caracteres.';
    }
    else if (interesses.length < 2) {
        erroCampo.textContent = 'Por favor, selecione pelo menos 2 interesses.';
    }
    else if (motivacao.length < 20) {
        erroCampo.textContent = 'As motivações devem conter pelo menos 20 caracteres.';
    }
    else {
        alert('Inscrição realizada com sucesso!');
        alert(`Idade calculada: ${idade} anos`);
        form.reset();
        form.style.display = 'none';
        const resultadoDiv = document.createElement('div');
        resultadoDiv.innerHTML = `
            <h2>Dados da Inscrição:</h2>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Data de Nascimento:</strong> ${dataNascimento}</p>
            <p><strong>Horário Preferido:</strong> ${horarioPreferido}</p>
            <p><strong>URL do Portfólio:</strong> ${urlPortfolio}</p>
            <p><strong>Curso Selecionado:</strong> ${cursoSelecionado}</p>
            <p><strong>Turno:</strong> ${turno}</p>
            <p><strong>Interesses:</strong> ${interesses.join(', ')}</p>
            <p><strong>Motivações:</strong> ${motivacao}</p>
        `;
        document.body.appendChild(resultadoDiv);
    }
    
  
});