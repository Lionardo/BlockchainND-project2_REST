# Poject2 RESTful WEB API

Minimalistic restful api for the blockchain nanodegree project.

## Framework

Express.js
with the help of express generator in this project
https://expressjs.com/

### Prerequisites

```
npm
express.js
nodemon
level
crypto-js
```
### Installing

1- npm i 
2- npm run start

## Enpoints

### Show blockheight
>localhost:8000/

**method**: GET

**URL params**: none

**sucess response**: 
Code: 200 
Example: 
Content: 1

### Add a block to the blockchain

>localhost:8000/block

**method**: POST

**URL params**: data

Example:
```json
{
      "data": "some arbitrary data"
}
```
**sucess response**: 
Example: 
Code: 200 
Content: 
```json
{"hash":"48b51758b9623202b96420c90472f602beb831b967cf7c3d22e60c029515df35","height":37,"body":"some arbitrary data","time":"1537009388","previousBlockHash":"3d0bbb88a323ef3e683ac1e228d227a52439cd6437f9b662182268021fcea99d"}
```
### Get block with height

> localhost:8000/block/:height

**method**: GET

**URL params**: height

Example:
localhost:8000/block/:10

**sucess response**: 
Code: 200 
Example: 
```json
{"hash":"48b51758b9623202b96420c90472f602beb831b967cf7c3d22e60c029515df35","height":10,"body":"some arbitrary data","time":"1537009388","previousBlockHash":"3d0bbb88a323ef3e683ac1e228d227a52439cd6437f9b662182268021fcea99d"}
```

## Authors

* **Lio Mendonca**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
