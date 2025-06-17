/*
 Crie uma função chamada validarSenha que recebe uma string e verifica se
ela atende aos seguintes critérios (caso prefira pode usar regex!):
    Ter no mínimo 8 caracteres.
    Conter pelo menos uma letra maiúscula.
    Conter pelo menos uma letra minúscula.
    Conter pelo menos um número.
    Conter pelo menos um caractere especial (como !@#$%&* ).
    A função deve retornar:
    "Senha válida" se a senha atender a todos os critérios.
    "Senha inválida" se não atender a algum critério.
*/
function validaSenha(senha){
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,}$/
;
  if(regex.test(senha))return "Senha válida";
  else return "Senha inválida";
}

console.log(validaSenha("SenhaForte123*"));//Senha válida
console.log(validaSenha("senha123"));//Senha inválida
console.log(validaSenha("XyZ!789g"));//Senha válida