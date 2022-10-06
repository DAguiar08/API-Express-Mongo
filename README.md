<h1 align="center">Final Project - CompassMart API</h1> 

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" style="max-width: 100%;"/>
<img src="https://img.shields.io/badge/Typescript-1E90FF?style=for-the-badge&amp;logo=Typescript&amp;logoColor=white" style="max-width: 100%;"/>
<img src="https://img.shields.io/badge/MongoDB-228b22?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" style="max-width: 100%;"/>
<img src="https://img.shields.io/badge/ExpressJs-778899?style=for-the-badge&amp;logo=javascript&amp;logoColor=white" style="max-width: 100%;"/>
<img src="https://img.shields.io/static/v1?label=STATUS&message=In Development&color=yellow&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=LICENCE&message=MIT&color=GREEN&style=for-the-badge"/>
</p>

## Description

<p align="justify">
  Compass.uol entered in a new branch of the market, CompassMart, a Departament store, where its focus is on the marketing of food. This API will be responsible for some endpoints of products.
</p>

## Requisites

:warning: [Node: v16.16.0](https://nodejs.org/en/download/) <br>
:warning: [NPM: v8.11.0](https://docs.npmjs.com/)

## Dependencies

- [Express: v4.18.1](http://expressjs.com/pt-br/)
- [Joi: v17.6.0](https://joi.dev/api/?v=17.6.1)
- [Mongoose: v6.6.1](https://mongoosejs.com/)
- [Swagger-ui-express: v4.5.0](https://www.npmjs.com/package/swagger-ui-express)

## DevDependencies

- [@types/express: v4.17.14](https://www.npmjs.com/package/@types/express)
- [@types/swagger-ui-express: v4.1.3](https://www.npmjs.com/package/@types/swagger-ui-express)
- [@typescript-eslint/eslint-plugin: v5.38.1](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser: v5.38.1](https://www.npmjs.com/package/@typescript-eslint/parser)
- [Eslint: v8.24.0](https://eslint.org/)
- [Prettier: v2.7.1](https://prettier.io/)
- [Typescript: v4.8.3](https://www.typescriptlang.org/)
- [ts-node-dev: v2.0.0](https://www.npmjs.com/package/ts-node-dev)


## How to run the app :arrow_forward:

### Clone the repository 

```
git clone https://github.com/DAguiar08/API-Express-Mongo.git
```

### Install the dependencies

```
npm install
```

## How to set up the DataBase

To connect the database simply change "username and "password" to your user and password from your MongoDB cluster, and finally change "Cluster0" to your cluster.

```
mongoose
  .connect("mongodb+srv://username:password@cluster0.etixs0l.mongodb.net/test")
  .then((data) => {
    console.log("MongoDB Connection Succeded");
  })

  .catch((err) => {
    console.log("Error in DB connection");
  });

app.listen(3000);
```

## Documentation :page_facing_up:

```
The project has a Swagger Documentation that you can access using the route: (http://localhost:3000/api-docs/#/).
```

# Product Endpoint :convenience_store:

## Create

`POST`

```
http://localhost:3000/product
```

#### Body exemple

```
{
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca soya lote X",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 100,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
}
```
`Status code: 201 Created`

```
{
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca soya lote X",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 200,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
    "_id": "633dead10a6a726f2a657f6f"
    "createdAt": "2022-10-05T20:36:33.765Z"
    "updatedAt": "2022-10-05T20:36:33.765Z"
    "__v": 0
}
```
`Status code: 400 Bad request`

```
"message": "Bad Request",
    "details": [
        {
            "message": "error message of the request"
        }
    ]
}
```

## Create with CSV file

`POST`

In this method, first you need to import your csv file in the project, then go to ProductService, find createCSV and change "test.csv" to your file!

```
http://localhost:3000/products/createCSV
```
`Status code: 201 Created`

```
Produtos cadastrados!
```

`Status code: 400 Bad request`

```
"message": "Bad Request",
    "details": [
        {
            "message": "error message of the request"
        }
    ]
}
```

## Get all products

`GET`

```
http://localhost:3000/products
```

`Status code: 200 OK`

```
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca soya lote X",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 200,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
    "_id": "633dead10a6a726f2a657f6f"
    "createdAt": "2022-10-05T20:36:33.765Z"
    "updatedAt": "2022-10-05T20:36:33.765Z"
    "__v": 0
```

`Status code: 400 Bad request`

```
"message": "Bad Request",
    "details": [
        {
            "message": "error message of the request"
        }
    ]
}
```

## Get a product by ID

`GET`

```
http://localhost:3000/product/:id
```

`Status code: 200 OK`

```
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca soya lote X",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 200,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
    "_id": "633dead10a6a726f2a657f6f"
    "createdAt": "2022-10-05T20:36:33.765Z"
    "updatedAt": "2022-10-05T20:36:33.765Z"
    "__v": 0
```

`Status code: 404 not found`

```
{
    "errorStatus": 404,
    "name": "NotFound",
    "message": "Id '633dead10a6a726f2a657f64' not found"
}
```

## Get low stock products

`GET`

```
http://localhost:3000/products/lowstock
```

`Status code: 200 OK`

```
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca soya lote X",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 50,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
    "_id": "633dead10a6a726f2a657f6f"
    "createdAt": "2022-10-05T20:36:33.765Z"
    "updatedAt": "2022-10-05T20:36:33.765Z"
    "__v": 0
```

`Status code: 400 Bad request`

```
"message": "Bad Request",
    "details": [
        {
            "message": "error message of the request"
        }
    ]
}
```

## Update with full body

`PUT`

```
http://localhost:3000/product/:id
```

#### Body exemple

```
{
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca laçador lote X",
    "departament": "Mercearia",
    "brand": "laçador",
    "qtd_stock": 100,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
}
```
`Status code: 200 OK`

```
{
    "title": "Oleo de soja 500ml",
    "description": "Oleo de soja contendo 500ml da marca soya lote X",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 200,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
    "_id": "633dead10a6a726f2a657f6f"
    "createdAt": "2022-10-05T20:36:33.765Z"
    "updatedAt": "2022-10-06T16:35:33.765Z"
    "__v": 0
}
```
`Status code: 404 not found`

```
{
    "errorStatus": 404,
    "name": "NotFound",
    "message": "Id '633dead10a6a726f2a657f64' not found"
}
```

## Update with partial body

`PATCH`

```
http://localhost:3000/product/:id
```

#### Body exemple

```
{
    "title": "Carne de suino",
    "description": "Panceta moida 500g"
}
```
`Status code: 200 OK`

```
{
    "title": "Carne de suino",
    "description": "Panceta moida 500g",
    "departament": "Mercearia",
    "brand": "Soya",
    "qtd_stock": 200,
    "price": 20.00,
    "bar_codes": "123asd123asd1"
    "_id": "633dead10a6a726f2a657f6f"
    "createdAt": "2022-10-05T20:36:33.765Z"
    "updatedAt": "2022-10-06T16:35:33.765Z"
    "__v": 0
}
```
`Status code: 404 not found`

```
{
    "errorStatus": 404,
    "name": "NotFound",
    "message": "Id '633dead10a6a726f2a657f64' not found"
}
```

## Delete product

`DELETE`

```
http://localhost:3000/product/:id
```

`Status code: 200 OK`

`Status code: 404 not found`

```
{
    "errorStatus": 404,
    "name": "NotFound",
    "message": "Id '633dead10a6a726f2a657f64' not found"
}
```




## Licence

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Api-Express-Mongo