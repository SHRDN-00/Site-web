let nom = prompt("Comment tu t'appelles ?");
console.log(nom);
let salut=document.querySelector("#salut");
salut.textContent = " Bonjour " + nom + "!";