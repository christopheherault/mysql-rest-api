const config = require('./config/mysql.config.js');
const mysql = require('mysql');

function Database() {

    // pour la connect
    this.__pool__ = null;
    this.connect = function () {
        this.__pool__ = mysql.createPool(config);
    }


    this.query = function (queryStr) {
        const $self = this;
        return new Promise((resolve, reject) => {
            const result = {};
            if ($self.__pool__ == null) {
                resolve({ error: 'no connection' });
            }
            $self.__pool__.query(queryStr, function (error, results, fields) {
                if (error) resolve({ error });
                result.json = JSON.stringify(results);
                resolve(result);
            });

        });
    }

}
module.exports = Database;