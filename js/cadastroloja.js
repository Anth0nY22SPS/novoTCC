document.getElementById('formCadastro').addEventListener('submit', function(event) {
  event.preventDefault();

  const senha = document.getElementById('senha').value;
  const confirmeSenha = document.getElementById('confirmeSenha').value;
  const erro = document.getElementById('erro');

  if (senha !== confirmeSenha) {
    erro.textContent = 'Acesso negado: as senhas não coincidem.';
  } else {
    erro.textContent = '';
    abrirModal(); 
  }
});