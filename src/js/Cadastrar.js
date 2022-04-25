import {Pessoa} from '/src/js/classes/Pessoa.js'
import {banco} from '/src/js/Database.js'


//Coletando os inputs para adicionar ao Banco de dados
const criarUsuario =(event) =>{
  //  event.preventDefault()

    const txtUser       =       document.querySelector("#userInput").value
    const txtSenha      =       document.querySelector("#senhaInput").value
    const txtCargo      =       document.querySelector("#cargoInput").value

    const User = new Pessoa(txtUser,txtSenha,txtCargo)

    adicionarBD(User)

}

const adicionarBD =(User)=>{
    banco.transaction((tx)=>{
        tx.executeSql('INSERT INTO Usuario(usuario, senha, cargo) VALUES(?,?,?)',[User.login,User.senha,User.cargo])
    })
}


//Adicionando eventos no botao cadastrar
const btnCadastro = document.getElementById("btn_cadastrar")
btnCadastro.addEventListener("click",criarUsuario)