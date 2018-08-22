import armazenamento from './armazenamento'
import filhosService from './filhosService'

function addObjetivo(filho, objetivo) {
    filho.objetivos.push(objetivo)
    armazenamento.atualizaFilho(filho)
}

function listObjetivos(filho) {
    const filhoEncontrado = filhosService.buscaFilhoPeloNome(filho.nome)
    return filhoEncontrado.objetivos
}

function deleteObjetivo(filho, indiceDoObjetivo) {
    filho.objetivos.splice(indiceDoObjetivo, 1)
    armazenamento.atualizaFilho(filho)
}

export default {
    addObjetivo: addObjetivo,
    listObjetivos: listObjetivos,
    deleteObjetivo: deleteObjetivo
};