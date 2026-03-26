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
    const motivacao = document.querySelector('#motivacoes').value;

    const dataNascimentoDate = new Date(dataNascimento);
    const hoje = new Date();
    const idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoDate.getMonth();

    if (nome == '' || email == '' || senha == '' || dataNascimento == '' || horarioPreferido == '' || urlPortfolio == '' || cursoSelecionado == '' || turno == '' || interesses.length === 0 || motivacao == '') {  
        alert('Por favor, preencha todos os campos.');
    }
    else if(idade < 16 || (idade === 16 && mes < 0) || (idade === 16 && mes === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
        alert('A idade mínima para inscrição é de 16 anos.');
    }
    else if (senha.length < 6) {
        alert('A senha deve conter pelo menos 6 caracteres.');
    }
    else if (interesses.length < 2) {
        alert('Por favor, selecione pelo menos 2 interesses.');
    }
    else if (motivacao.length < 20) {
        alert('As motivações devem conter pelo menos 20 caracteres.');
    }
    else {
        alert('Inscrição realizada com sucesso!');
        alert(`Idade calculada: ${idade} anos`);
        form.reset();
    }

    
  
});