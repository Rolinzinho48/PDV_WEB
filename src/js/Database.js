const banco = openDatabase("PDV","1.0","Banco de dados do PDV", 1024*1024)

banco.transaction((tx)=>{
    tx.executeSql('CREATE TABLE Usuario (ID INTEGER PRIMARY KEY, usuario VARCHAR(25), senha VARCHAR(20), cargo VARCHAR(15))')
    
})
banco.transaction((tx)=>{
    tx.executeSql('CREATE TABLE Produto (codigo_produto INTEGER PRIMARY KEY, nome VARCHAR(255), preco NUMERIC(5,2))')
})

export {banco}