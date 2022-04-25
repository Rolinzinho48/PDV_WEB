import {banco} from '/src/js/Database.js'

//funcao que coleta os dados dos inputs e verifica se existe no banco de dados
const verificarLogin = (event)=>{
    event.preventDefault()

    const txtLogin = document.getElementById("loginInput").value
    const txtSenha = document.getElementById("passwordInput").value

    banco.transaction((tx)=>{
        tx.executeSql("SELECT * FROM Usuario",[],function(cx,resultado){
            let rows = resultado.rows
            
            let achei = false
            for(let i=0; i<rows.length; i++){
                if(txtLogin==rows[i].usuario ){
                    if(txtSenha==rows[i].senha){
                        achei = true
                    }
                    
                }
            }
            console.log(achei)
    
        })
    })
}

//adicionando evento de click no botao de entrar
const btnEntrar = document.getElementById("btn_entrar")
btnEntrar.addEventListener("click",verificarLogin)