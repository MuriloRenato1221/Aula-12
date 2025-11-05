
function entrar(){
var usuarioEmail = document.getElementById('usuario').value
var senha = document.getElementById('senha').value

if(usuarioEmail == "senai" && senha == "Senai123" || usuarioEmail == "senai@senai.com" && senha == "Senai123"){
window.location.href = "page.html"
} else {
    Swal.fire({
  title: "Usuário ou Email Incorretos!",
  text: "Tente Novamente!",
  icon: "error"
});

}
}


