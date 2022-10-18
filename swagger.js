const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Village Lane Publishing Books API',
        description: 'Village Lane Publishing Books',
    },
    host: 'localhost:8080',
    schemes: ['http', 'https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);