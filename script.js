const input = document.getElementById("senha");
const confirmInput = document.getElementById("confirmPassword");
const botao = document.getElementById("enviar");

botao.addEventListener("click", function () {
  const senha = input.value;
  const confirmPassword = confirmInput.value;

  if (senha !== confirmPassword) {
    alert("As senhas não coincidem");
  } else {
    alert("O login está liberado!");
  }
});
