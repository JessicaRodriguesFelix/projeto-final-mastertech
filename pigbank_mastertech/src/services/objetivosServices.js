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

export default {
    addObjetivo: addObjetivo,
    listObjetivos: listObjetivos
};