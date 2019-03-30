
module.exports = {
    host:{ 
        baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/apis' : '/api'
    }
}