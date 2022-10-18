const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Village Lane Publishing Books API',
        description: 'Village Lane Publishing Books',
    },
    host: 'https://cse341node-books.onrender.com',
    schemes: ['http', 'https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);