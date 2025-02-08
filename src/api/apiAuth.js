import clienteAxios from '../../config/axios'

export default {
    csrf() {
        return clienteAxios.get('/sanctum/csrf-cookie')
    },
    registro(data) {
        return clienteAxios.post('/register', data)
    },
    login(data) {
        return clienteAxios.post('/login', data)
    },
}
