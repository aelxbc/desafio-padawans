function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send() 
    
    return request.responseText

}

function criaLinhaPost(usuario) {

    // userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true
    console.log(usuario)
    let linha = document.createElement('tr')
    let tdUserId = document.createElement('td')
    let tdId = document.createElement('td')
    let tdTitle = document.createElement('td')
  
    tdUserId.innerHTML = usuario.userId
    tdId.innerHTML = usuario.id  
    tdTitle.innerHTML = usuario.title  

    linha.appendChild(tdUserId)
    linha.appendChild(tdId)
    linha.appendChild(tdTitle)

    return linha
}

function main() {
    let data = fazGet('https://jsonplaceholder.typicode.com/posts')
    usuarios = JSON.parse(data)
    let tabela = document.getElementById('posts')

    usuarios.forEach(element => {
        let linha = criaLinhaPost(element)
        tabela.appendChild(linha)
    })
}

main()