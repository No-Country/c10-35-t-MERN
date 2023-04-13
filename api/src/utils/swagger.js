const {Express, Request, Response} = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const {version} = require('../../package.json');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Stocker API Documentation',
            version: version,
            description: 'Stocker API Documentation',
        },
    },
    apis: [
        "./src/routes/brands.routes.js",
        "./src/routes/categories.routes.js",
        "./src/routes/products.routes.js",
        "./src/routes/suppliers.routes.js",
    ],
    components: {
        schemas: {
            Brand: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Brand name',
                    },
                },
            },
        },
    },
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);



module.exports = swaggerSpec;