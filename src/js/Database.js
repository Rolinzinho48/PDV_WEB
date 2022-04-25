const banco = openDatabase("PDV","1.0","Banco de dados do PDV", 1024*1024)
banco.transaction((tx)=>{
    tx.executeSql('CREATE TABLE Usuario (ID INTEGER PRIMARY KEY, usuario VARCHAR(25), senha VARCHAR(20), cargo VARCHAR(15))')
})

export {banco}