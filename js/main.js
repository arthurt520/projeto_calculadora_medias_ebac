const form_notas = document.getElementById('form');
let linhas ='';
const imgAprovado ='<img src="./images/aprovado.png">';
const imgReprovado = '<img src="./images/reprovado.png">';
const atividades = [];
const notas = [];
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaminima = parseFloat(prompt("Qual é a nota mínima:")); //Com esse prompt, o professor pode definir qual a nota mínima do aluno//

form_notas.addEventListener('submit', function(a){
    a.preventDefault(); // Aqui ele está impedindo da página atualizar e apagar as informações após o submit ser executado//
    adicionarlinha();
    atualizartabela();
    atualizarmedia()
});

function adicionarlinha(){
    const NomeAtividade = document.getElementById('atividade');
    const idNota = document.getElementById('nota');
    //o array atividade se encontra vazio, logo, quando eu adicionar o primeiro nome da matéria ela ainda não existe no array, 
    //somente depois de eu apertar em "adicionar" ela vai existir, é nesse momento que o include vai verificar se possui essa palavra no array e barrar//
    if(atividades.includes(NomeAtividade.value)){
    alert(`A atividade ${NomeAtividade.value} já foi inserida`)
    }else{

    atividades.push(NomeAtividade.value);
    notas.push(parseFloat(idNota.value));

    let linha = `<tr>`;
    linha+= `<td>${NomeAtividade.value}</td>`
    linha+= `<td>${idNota.value}</td>`
    linha+= `<td>${idNota.value>=notaminima ?imgAprovado:imgReprovado}</td>`
    linha+= `</tr>`

    linhas += linha;

    NomeAtividade.value ="";
    idNota.value="";
}


}
function atualizartabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML =linhas
}

function atualizarmedia(){
    const mediafinal = calculomediafinal();
    document.getElementById("media-final-valor").innerHTML = mediafinal;
    document.getElementById("resultadofinal").innerHTML = mediafinal>=notaminima?spanaprovado:spanreprovado;

}

function calculomediafinal(){
    let somadasnotas = 0;

    for(let i=0;i<notas.length;i++)
    somadasnotas += notas[i]
    return media = somadasnotas/notas.length
}