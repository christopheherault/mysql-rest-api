const dbRouter = require('./config/db-router.config.js');
const mysql = require('mysql');

function Router() {

    this.route = function (app, method, request, response) {
        const path = request.params[0];
        let data = {};
        if (method == 'GET' || method == 'DELETE') {
            for (let d in request.query) {
                if (isNaN(request.query[d])) {
                    data[d] = request.query[d];
                }
                else
                    data[d] = parseFloat(request.query[d]);
            }
        }
        else
            data = request.body;
        this.doResponse(method, path, data, response);
    }

    this.doResponse = async function (method, path, data, response) {
        const route = dbRouter[path];
        if (typeof route == 'undefined') {
            response.end(JSON.stringify({ error: `${path} not found` }));
            return;
        }
        const query = route[method];
        if (typeof query == 'undefined') {
            response.end(JSON.stringify({ error: `${method} for path ${path} not found` }));
            return;
        }
        const results = await this.execute(query, data);
        response.end(results);


        //const rep = await dbRouter.route(method, path, data);
        //response.end(rep);
    }

    this.execute = async function (query, data) {
        const q = mysql.format(query, data);
        const queryResult = await global.__db__.query(q);
        if (queryResult.error)
            return JSON.stringify({ error: queryResult.error });
        else
            return queryResult.json;
    }

}
module.exports = Router;