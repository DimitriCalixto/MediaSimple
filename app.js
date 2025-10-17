let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
let media = 0;

function mediaNotas(){
    media = (nota1 + nota2 + nota3 + nota4) / 4;
}
mediaNotas();

console.log(`A media é: ${media}`)

function verificarMedia(){
    if (media >= 5){
        console.log('Passou!')
    } else{
        console.log('Não passou!')
    }
}

verificarMedia();
