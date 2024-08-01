const readline = require('readline-sync');

let livros = [];
let escritores = [];

function menu(){
  console.log('')
  console.log('=========Menu==========');
  console.log('1. Adicionar Escritor');
  console.log('2. Adicionar um livro');
  console.log('3. Alterar informacao do Escritor');
  console.log('4. Alterar informacao do livro');
  console.log('5. Excluir um escritor');
  console.log('6. Excluir um livro');
  console.log('7. listar');
  console.log('8. Sair do sistema');
  console.log('=======================')
  let opcao = readline.question('Escolha uma opcao entre 1 e 8: ');
  console.log('');
  switch(opcao){
    case'1':
      addEscritor();
      break;
    case'2':
      addLivro();
      break;
    case'3':
      alterarEscritor();
      break;
    case'4':
      alterarLivro();
      break;
    case'5':
      deletarEscritor();
      break;
    case'6':
      deletarLivro();
      break;
    case'7':
      listar();
      break;
    case'8':
      console.log('Programa encerrado!');
      return;
    default:
      console.log('Opcao invalida. Escolha entre 1 e 8: ')
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
function alterarEscritor(){
    let escolha = parseInt(readline.question('Digite o id do Escritor que deseja alterar: ')) -1;
    if(escolha >= 0 && escolha < escritores.length){
        novoNome = readline.question('Digite o novo Nome: ')
        escritores[escolha].nome = novoNome
        console.log('')
        console.log('Nome alterado com sucesso!')
    }else{
        console.log('')
        console.log('Escritor nao encontrado! ')
    }menu();
}
function alterarLivro(){
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
function deletarEscritor(){
    escolha = readline.question('Informe o id do Escritor que deseja excluir: ') -1;
    if(escolha >= 0 && escolha < escritores.length){
        let escritorExcluido = escritores.splice(escolha,1)[0]
        livros = livros.filter(livro => livro.idEscritor !== escritorExcluido.id)
        console.log('')
        console.log('Escritor excluido com sucesso!')
    }else{
        console.log('')
        console.log('Escritor nao encontrado!')
    }menu();
}
function deletarLivro(){
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
function listar(){
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
