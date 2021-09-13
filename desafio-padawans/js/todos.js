function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send() 
    
    return request.responseText

}

function criaLinhaTodo(usuario) {

    // userId, id, title, body
    console.log(usuario)
    let linha = document.createElement('tr')
    let tdUserId = document.createElement('td')
    let tdId = document.createElement('td')
    let tdTitle = document.createElement('td')
    let tdBody = document.createElement('td')
  
    tdUserId.innerHTML = usuario.userId
    tdId.innerHTML = usuario.id  
    tdTitle.innerHTML = usuario.title
    tdBody.innerHTML = usuario.body

    linha.appendChild(tdUserId)
    linha.appendChild(tdId)
    linha.appendChild(tdTitle)
    linha.appendChild(tdBody)

    return linha
}

function main() {
    let data = fazGet('https://jsonplaceholder.typicode.com/posts')
    toDos = JSON.parse(data)
    let tabela = document.getElementById('todos')

    toDos.forEach(element => {
        let linha = criaLinhaTodo(element)
        tabela.appendChild(linha)
    })
}

main()