const objetivos = [
    {
        item: 'bola'
    }
]

function addObjetivo(objetivo) {
    objetivos.push(objetivo)
}

function listObjetivos() {
    return objetivos
}

function buscaObjetivoPeloItem(item) {
    return objetivos.find(function (elem) {
        return elem.item === item
    })
}

export default {
    addObjetivo: addObjetivo,
    listObjetivos: listObjetivos,
    buscaObjetivoPeloItem: buscaObjetivoPeloItem
};