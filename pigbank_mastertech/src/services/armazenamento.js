import config from './config'

const mae = localStorage.getItem(config.PIG_BANK_KEY)
if (!mae) {
    const mae = JSON.stringify({
        filhos: []
    })
    localStorage.setItem(config.PIG_BANK_KEY, mae)
}

function listaDeFilhos() {
    const mae = JSON.parse(localStorage.getItem(config.PIG_BANK_KEY));
    return mae.filhos
}

function addFilho(filho) {
    const mae = JSON.parse(localStorage.getItem(config.PIG_BANK_KEY));
    mae.filhos.push(filho);
    localStorage.setItem(config.PIG_BANK_KEY, JSON.stringify(mae))
}

function atualizaFilho(filho) {
    const mae = JSON.parse(localStorage.getItem(config.PIG_BANK_KEY));
    const indice = mae.filhos.findIndex(function (elem) {
        return elem.nome === filho.nome
    })
    if (indice === -1) {
        return
    }
    //Remove o filho, e re insere com os dados atualizados
    mae.filhos.splice(indice, 1, filho)
    localStorage.setItem(config.PIG_BANK_KEY, JSON.stringify(mae))
}

export default {
    listaDeFilhos,
    addFilho,
    atualizaFilho
}