
const botaoinserir = document.getElementById("botaoinserir")
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const CPF = document.getElementById("cpf")
const data = document.getElementById("data")
data.value= ''
const motivacao =document.getElementById("motivacao")
botaoinserir.addEventListener("click", verificar)
function verificar(){
    if (nome.value ==''){
        alert('O campo nome está vazio')
    }
    else if(sobrenome.value ==''){
        alert('O campo sobrenome está vazio')
    }
    else if(CPF.value ==''){
        alert('O campo CPF está vazio')
    }
    else if( data.value == ''){
        alert('oi')
    }
    else if(motivacao.value ==''){
        alert('O campo motivação está vazio')
    }
    else{
        alert('dados colocados inseridos, obrigado')
    }
}
/*const botaoinserir = document.getElementById("botaoinserir")

botaoinserir.addEventListener("click", function(){
    const campos = document.querySelectorAll("input['text'], input['date']")
    for(let x=0 ; x< campos.length ; x++){
        if (campos[x].value == ''){
        }
    }
})*/