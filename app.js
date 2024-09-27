
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa") 

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Personagem Não Encontrado.</p>"
        return
    }

        campoPesquisa = campoPesquisa.toLowerCase()

    let resultados ="";
    let titulo="";
    let descricao="";
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados +=`
        <div class="item-resultado">
        <img src=${dado.foto} alt="">
            <h2><a href=${dado.link} target="_blank">${dado.titulo}</a></h2> 
                <p class="descricao-meta">${dado.descricao}</p> 
        </div>
    `
        }
    
        if(!resultados){
            resultados == "<p>Nada foi Encontrado</p>"
        }

    }
    section.innerHTML=resultados
}