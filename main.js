const form = document.getElementById('agenda-telefonica')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputnomeContato = document.getElementById('nome-contato')
    const inputnumeroContato = document.getElementById('numero-contato')

    let linha = '<tr>'
    linha += `<td>${inputnomeContato.value}</td>`
    linha += `<td>${inputnumeroContato.value}</td>`
    linha += '</tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputnomeContato.value = ''
    inputnumeroContato.value = ''

})