function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send() 
    
    return request.responseText

}

function criaLinhaAlbum(usuario) {

    let linha = document.createElement('tr') 
    let tdId = document.createElement('td')
    let tdTitle = document.createElement('td')
    let tdUserId = document.createElement('td')
    
    tdId.innerHTML = usuario.id  
    tdTitle.innerHTML = usuario.title
    tdUserId.innerHTML = usuario.userId
   
    linha.appendChild(tdId)
    linha.appendChild(tdTitle)
    linha.appendChild(tdUserId)

    return linha
}

function main() {
    let data = fazGet('https://jsonplaceholder.typicode.com/albums')
    toDos = JSON.parse(data)
    let tabela = document.getElementById('albums')

    toDos.forEach(element => {
        let linha = criaLinhaAlbum(element)
        tabela.appendChild(linha)
    })
}

main()