const tarefas = [
    {
        itens: 'bola'
    }
]

function addTarefa(tarefa) {
    tarefas.push(tarefa)
}

function listTarefas() {
    return tarefas
}

function buscaTarefaPeloItens(itens) {
    return tarefas.find(function (elem) {
        return elem.itens === itens
    })
}

export default {
    addTarefa: addTarefa,
    listTarefas: listTarefas,
    buscaTarefaPeloItens: buscaTarefaPeloItens
};