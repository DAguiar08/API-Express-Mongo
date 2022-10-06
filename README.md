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



## Licence

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Api-Express-Mongo