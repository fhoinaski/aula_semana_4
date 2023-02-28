// Busca os dados salvos no local storage ou inicializa um array vazio
var convidados = JSON.parse(localStorage.getItem("convidados")) || [];
console.log(convidados)
// Obtém os elementos do DOM que serão utilizados
var elLista = document.getElementById("listaConvidados");
var elcampo = document.getElementById("campo");
var elbotao = document.getElementById("botao");


// Adiciona um event listener para o botão de cadastro
elbotao.addEventListener("click", function () {
    var nome = elcampo.value.trim();
    if (nome !== "") {
        // Verifica se o nome já está cadastrado
        if (convidados.some(function(c) { return c.nome === nome; })) {
            alert("Este nome já foi cadastrado");
            return;
        }
        //adiciona um objeto com propriedade nome e o valor sera tambem nome  no array convidados
        convidados.push({ nome: nome });
        //limpa o input para digitar o nome
        elcampo.value = "";
        //chama a funçao salvarConvidados
        salvarConvidados();
    } else {
        // manda um alerta pra pessoa digitar um nome no campo de cadastro
        alert("Por favor, preencha o nome do convidado");
    }
});

// Função para salvar os dados no local storage
function salvarConvidados() {
    //salva o array convidados no local storage usando o metodo setItem
    localStorage.setItem("convidados", JSON.stringify(convidados));

    //depois de salvar array chama a função listarConvidados
    listarConvidados();
}


// Essa cadastra na pagina os convidados salvos no local storage
function listarConvidados() {
    // Limpa a lista de convidados antes de adicioná-los novamente
    elLista.innerHTML = "";
    // o For percorre a lista de convidados
    for (const convidado of convidados) {
        // Cria um elemento li para cada convidado
        var elConvidado = document.createElement('li');
        // Cria um nó de texto com o nome do convidado em letras maiusculas usando o toUpperCase
        var elNome = document.createTextNode(convidado.nome.toUpperCase());
        // Cria o botão recebendo a função botaoExcluir como valor
        var botaoExclui = botaoExcluir();
        // Adiciona o botaoExclui na li
        elConvidado.appendChild(botaoExclui);
        // Adiciona o nó de texto ao elemento li usando o appendChild
        elConvidado.appendChild(elNome);
        // Adiciona o elemento li à lista de convidados na pagina
        elLista.appendChild(elConvidado);

        // Adiciona um evento de clique para o botaoExcluir que remove o convidado da lista
        botaoExclui.addEventListener('click', function () {
            //lança um alerta se a pessoa quer confirmar a exclusão
            if (confirm("Tem certeza que deseja excluir o convidado?")) {
                convidados = convidados.filter(function (c) {
                    return c.nome !== convidado.nome;
                });
                //chama a função salvar convidados com a lista atualizada
                salvarConvidados();
            }
        });

    }
//função que cria um botão com o icone svg
    function botaoExcluir() {
        //cria o elemento botão
        var botao = document.createElement('button');
        //atribui a id ao botão
        botao.setAttribute('id', 'btnExcluir');
        //adiciona os elemtnos do botão no caso é um svg
        botao.innerHTML = '<svg width="14" height="14" fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.25 6.75-1.344 12.925A1.5 1.5 0 0 1 17.416 21H6.584a1.5 1.5 0 0 1-1.49-1.325L3.75 6.75"></path><path d="M21.75 3H2.25a.75.75 0 0 0-.75.75V6c0 .414.336.75.75.75h19.5A.75.75 0 0 0 22.5 6V3.75a.75.75 0 0 0-.75-.75Z"></path><path d="m14.625 11.25-5.25 5.25"></path><path d="m14.625 16.5-5.25-5.25"></path></svg>';
        //muda de display none para display flex
        botao.style.display = "flex";
        return botao;
    }

}

