
module.exports = {
    host:{ 
        baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/apis' : 'http://sunfafa.cn:9000'
    },
    mongoDB:{
        hostname:'203.195.175.18', 
        port:'27017',
        dbname:'test'
    }
}