import {banco} from '/src/js/Database.js'

const tabelaCompra = document.getElementById("tabela_produto")

const comprar = () =>{

    let txtCodigo = document.getElementById("codigoPesquisa").value

    banco.transaction((tx)=>{
        tx.executeSql("SELECT * FROM Produto",[],function(cx,resultado){
            let rows = resultado.rows
            
                for(let i=0; i<rows.length; i++){
                    if(txtCodigo == rows[i].codigo_produto){
                        tabelaCompra.innerHTML += `  <tr>
                                                        <th>${rows[i].nome}</th>
                                                
                                                        <th>${rows[i].codigo_produto}</th>
                                                   
                                                        <th>${rows[i].preco}</th>
                                                    </tr>`
                    }
                }
    
        })
    })
}

let btnAdicionar = document.getElementById("adicionarProduto")
btnAdicionar.addEventListener("click",comprar)
