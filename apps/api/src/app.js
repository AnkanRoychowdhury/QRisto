
const bodyParser = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 7777

class Application {

    constructor(){
        this.app = express();
    }

    #useMiddlewares(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    #init(){
        this.app.listen(PORT, () => {
            console.info(`Api running on: http://localhost:${PORT}`);
        });
    }

    async main(){
        this.#useMiddlewares();
        this.#init();
    }
}

module.exports = Application;