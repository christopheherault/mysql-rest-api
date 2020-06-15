const dbRouter = require('./config/db-router.config.js');

function Router() {

    this.route = function (app, method, request, response) {
        const path = request.params[0];
        let data = {};
        if (method == 'GET') {
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
        const rep = await dbRouter.route(method, path, data);
        response.end(rep);
    }

}
module.exports = Router;