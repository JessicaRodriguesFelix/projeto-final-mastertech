const filhos = [
    {
        nome: 'Maria Florzinha'
    }
]

function addFilho(filho) {
    filhos.push(filho)
}

function listFilhos() {
    return filhos
}

function buscaFilhoPeloNome(nome) {
    return filhos.find(function (elem) {
        return elem.nome === nome
    })
}

export default {
    addFilho: addFilho,
    listFilhos: listFilhos,
    buscaFilhoPeloNome: buscaFilhoPeloNome
};
