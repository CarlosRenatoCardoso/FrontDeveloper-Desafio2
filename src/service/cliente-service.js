import service from "./service";

function obterCliente() {
    return new Promise((resolve, reject) => {
        service.get('/clientes')
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function adicionarCliente(cliente) {
    cliente.dataCadastro = new Date().toISOString();
    return new Promise((resolve, reject) => {
        service.post('/clientes', cliente)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function atualizarCliente(cliente) {
    return new Promise((resolve, reject) => {
        service.put(`/clientes/${cliente.id}`, cliente)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function excluirCliente(id) {
    return new Promise((resolve, reject) => {
        service.delete(`/clientes/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

export default {
    obterCliente,
    adicionarCliente,
    atualizarCliente,
    excluirCliente
}