import armazenamento from './armazenamento'

function addFilho(filho) {
    filho.objetivos = []
    filho.tarefas = []
    armazenamento.addFilho(filho)
}

function listFilhos() {
    return armazenamento.listaDeFilhos()
}

function buscaFilhoPeloNome(nome) {
    return armazenamento.listaDeFilhos().find(function (elem) {
        return elem.nome === nome
    })
}

export default {
    addFilho: addFilho,
    listFilhos: listFilhos,
    buscaFilhoPeloNome: buscaFilhoPeloNome
};
