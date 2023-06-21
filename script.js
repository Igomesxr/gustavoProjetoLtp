class MeuError extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }


class Produto {
    constructor(nome,cadastro, descricao ,preco){
this.nome = nome;
this.cadastro = cadastro;
this.descricao = descricao;
this.preco = preco;
}


  retornarAtributos() {
    try {
      return this.Mostrar_produtos();
    } catch (erro) {
      console.log(erro.stack)
    }
  }
Mostrar_produtos(){
    if(this.nome != "" && this.cadastro != "" && this.descricao != "" && this.preco != ""){
        return `
    <div>${this.cadastro}</div> 
    <div>${this.nome}</div> 
    <div>${this.descricao}</div> 
    <div>${this.preco}</div> 
`
}
    else{
  throw new MeuError("Algum campo está em branco")
    }
    
}

}



class ProdutoDestaque extends Produto{
constructor(nome,cadastro, descricao ,preco , imagem){
super(nome,cadastro, descricao ,preco)
this.imagem = imagem;
}

retornarAtributosDestaque() {
    try {
      return this.Mostrar_produtos_destaque();
    } catch (erro) {
      console.log(erro.stack)
    }
  }



Mostrar_produtos_destaque(){
    if(this.nome != "" && this.cadastro != "" && this.descricao != "" && this.preco != "" && this.imagem != ""){
        return `
    <div>${this.cadastro}</div> 
    <div>${this.nome}</div> 
   <img class ="img" src= " ${this.imagem}"><img>
    <div>${this.descricao}</div> 
    <div>${this.preco}</div> 
    `

}
    else{
  throw new MeuError("Algum campo está em branco")
    }
    
}

}
let produto = new Produto("Calça Nike 50% Original","GGomes","Confia que é Original","R$50")
console.log(produto.Mostrar_produtos())
 
let produtodestaque = new ProdutoDestaque("Camiseta Nike 100% Original ","GGomes","É Original po, confia", "R$:70","https://cdnv2.moovin.com.br/lojasalana/imagens/produtos/det/e9bd8926286dfd17118ef44ef6116500.jpg")
console.log(produtodestaque.retornarAtributosDestaque())

const div = document.getElementById("destaque")
div.insertAdjacentHTML("afterbegin",produtodestaque.Mostrar_produtos_destaque() )

const div2 = document.getElementById("lista-produtos")
div2.insertAdjacentHTML("afterbegin",produto.Mostrar_produtos() )
