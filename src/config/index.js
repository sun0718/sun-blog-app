
module.exports = {
    host:{ 
        baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/apis' : 'https://203.195.175.18:9000/api'
    },
    mongoDB:{
        hostname:'203.195.175.18', 
        port:'27017',
        dbname:'test'
    }
}