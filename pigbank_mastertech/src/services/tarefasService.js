import armazenamento from './armazenamento'
import filhosService from './filhosService'

function addTarefa(filho, tarefa) {
    filho.tarefas.push(tarefa)
    armazenamento.atualizaFilho(filho)
}

function listTarefas(filho) {
    const filhoEncontrado = filhosService.buscaFilhoPeloNome(filho.nome)
    return filhoEncontrado.tarefas
}

export default {
    addTarefa: addTarefa,
    listTarefas: listTarefas,
};