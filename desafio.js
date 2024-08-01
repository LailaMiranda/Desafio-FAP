const readline = require('readline-sync');

let livros = [];
let escritores = [];

function menu(){
  console.log('')
  console.log('=========Menu==========');
  console.log('1. Adicionar Escritor');
  console.log('2. Adicionar um livro');
  console.log('3. Alterar informacao do livro');
  console.log('4. Excluir um livro');
  console.log('5. listar livros');
  console.log('6. Sair do sistema');
  console.log('=======================')
  let opcao = readline.question('Escolha uma opcao entre 1 e 6: ');
  console.log('');
  switch(opcao){
    case'1':
      addEscritor();
      break;
    case'2':
      addLivro();
      break;
    case'3':
      alterar();
      break;
    case'4':
      deletar();
      break;
    case'5':
      listarLivros();
      break;
    case'6':
      console.log('Programa encerrado!');
      return;
    default:
      console.log('Opcao invalida. Escolha entre 1 e 6: ')
      menu();
  }
  }
function addEscritor(){
  let nome = readline.question('Digite o nome do escritor: ');
  let escritor = {
    id: escritores.length + 1,
    nome: nome,
    };
    escritores.push(escritor);
    console.log('')
    console.log('Escritor cadastrado com sucesso!')
    menu();
  }
  function addLivro(){
    let idEscritor = readline.question('Digite o id do escritor: ');
    let nomeLivro = readline.question('Digite o Titulo do livro: ')
    let genero = readline.question('Digite o genero do livro: ')
    let livro = {
      idLivro: livros.length + 1,
      idEscritor: idEscritor,
      nomeLivro: nomeLivro,
      genero: genero
      };
      livros.push(livro);
      console.log('')
      console.log('Livro cadastrado com sucesso!')
      menu();
    }
 function alterar(){
  let escolha = parseInt(readline.question('Digite o id do livro que deseja alterar: ')) -1;
  if(escolha >= 0 && escolha < livros.length){
    opcao = readline.question('Digite 1 para alterar o Titulo, 2 para alterar o genero ou 3 para alterar os dois: ')
    switch(opcao){
      case'1':
        novoNome = readline.question('Digite o novo Titulo: ')
        livros[escolha].nomeLivro = novoNome
        console.log('')
        console.log('Titulo alterado com sucesso!')
        break;
      case'2':
        novoGenero = readline.question('Digite o novo genero: ')
        livros[escolha].genero = novoGenero
        console.log('')
        console.log('Genero alterado com sucesso!')
        break;
      case'3':
        novoNome = readline.question('Digite o novo Titulo: ')
        novoGenero = readline.question('Digite o novo genero: ')
        livros[escolha].genero = novoGenero
        livros[escolha].nomeLivro = novoNome
        console.log('')
        console.log('Livro alterado com sucesso!')
        break;
      default:
        console.log('')
        console.log('Opcao invalida!')
        break;
    }
    }else{
      console.log('')
      console.log('Livro nao encontrado! ')
    }
    menu();
  }
  function deletar(){
  escolha = readline.question('Informe o id do livro que deseja excluir: ') -1;
  if(escolha >= 0 && escolha < livros.length){
    livros.splice(escolha, 1);
    console.log('')
    console.log('Livro removido com sucesso!');
  }else{
    console.log('')
    console.log('Livro nao encontrado!');
  }
  menu();
}
  function listarLivros(){
    for(let escritor of escritores){
      console.log('')
      console.log(`Id do escritor: ${escritor.id} Nome do Escritor: ${escritor.nome}`)
      console.log('Livros: ')
      for(let livro of livros){
        if(livro.idEscritor == escritor.id){
          console.log(`Id do livro: ${livro.idLivro} Titulo do livro: ${livro.nomeLivro} Genero: ${livro.genero}`)
        }
      }
    } menu();
 }
 menu();