# Lista de Convidados

Este é um pequeno projeto em JavaScript que permite cadastrar e listar os convidados de um evento. Os dados dos convidados são salvos no localStorage do navegador para persistência dos dados.

## Funcionalidades
Adicionar nome do convidado
Verificar se o nome já foi cadastrado anteriormente
Excluir convidado da lista

## Como utilizar
Faça o clone ou download deste repositório para sua máquina local.
Abra o arquivo index.html em seu navegador.
Digite o nome do convidado no campo de texto e clique em "Adicionar".
Para excluir um convidado da lista, clique no ícone de lixeira ao lado do nome.
Tecnologias utilizadas
HTML
CSS
JavaScript

## Como funciona
O código busca os dados salvos no localStorage do navegador e inicializa um array vazio caso não exista nenhum dado salvo. Os elementos do DOM são obtidos para uso posterior.

Quando o botão de cadastro é clicado, o código verifica se o nome já está cadastrado. Se o nome já foi cadastrado, é exibido um alerta informando que o nome já está na lista. Caso contrário, um objeto com a propriedade "nome" é adicionado ao array de convidados e a função salvarConvidados é chamada.

A função salvarConvidados salva os dados no localStorage e chama a função listarConvidados.

A função listarConvidados limpa a lista de convidados e adiciona cada convidado cadastrado como um elemento li na lista. Cada li possui um botão de exclusão que, quando clicado, remove o convidado da lista e chama a função salvarConvidados.

A função botaoExcluir cria um botão com um ícone de lixeira.