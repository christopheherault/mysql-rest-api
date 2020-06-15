module.exports = {

    '/tests':
    {
        'GET': 'SELECT * FROM test1 ',
    }
    ,

    '/test': {
        'GET': 'SELECT * FROM test1 WHERE ?',
        'DELETE': 'DELETE FROM test1 WHERE ?',
        'POST': 'INSERT INTO test1 SET ?',
        'PUT': 'REPLACE INTO test1 SET ?',
    },
    route: async function (method, path, data) {
        if (path == '/test') {
            const queryResult = await global.__db__.query('SELECT * FROM test1');
            if (queryResult.error)
                return JSON.stringify({ error: queryResult.error });
            else
                return queryResult.json;
        }
        else if (path == '/test2') {
            const queryResult = await global.__db__.query(`SELECT * FROM test1 WHERE ID=${data.id}`);
            if (queryResult.error)
                return JSON.stringify({ error: queryResult.error });
            else
                return queryResult.json;
        }
        else if (path == '/groupes' && method == 'GET') {
            var queryResult = await global.__db__.query(`SELECT * FROM grp`);
            if (queryResult.error)
                return JSON.stringify({ error: queryResult.error });
            else
                return queryResult.json;
        }
        else if (path == '/cdts' && method == 'GET') {
            if (typeof data.groupe == 'undefined')
                var queryResult = await global.__db__.query(`SELECT * FROM cdt`);
            else
                var queryResult = await global.__db__.query(`SELECT * FROM cdt WHERE groupe='${data.groupe}'`);
            if (queryResult.error)
                return JSON.stringify({ error: queryResult.error });
            else
                return queryResult.json;
        }
        else if (path == '/cdts' && method == 'POST') {
            var queryResult = await global.__db__.query(`INSERT INTO cdt (content,date,color,groupe) VALUES ("${data.content.replace(/\\/g, '\\\\')}","${data.date}","${data.color}","${data.groupe}")`);
            if (queryResult.error)
                return JSON.stringify({ error: queryResult.error });
            else
                return JSON.stringify({ error: 0 });
        }
        else if (path == '/cdts' && method == 'PUT') {
            if (typeof data.id != 'undefined') {
                let updateStr = '';
                if (data.content) {
                    updateStr += `content="${data.content.replace(/\\/g, '\\\\')}",`;
                }
                if (data.date) {
                    updateStr += `date="${data.date}",`;
                }
                if (data.color) {
                    updateStr += `color="${data.color}",`;
                }
                if (updateStr.length > 0) {
                    updateStr = updateStr.substring(0, updateStr.length - 1);
                    var queryResult = await global.__db__.query(`UPDATE cdt SET ${updateStr} WHERE id = ${data.id}`);
                    if (queryResult.error)
                        return JSON.stringify({ error: queryResult.error });
                    else
                        return JSON.stringify({ error: 0 });
                }
                else {
                    return JSON.stringify({ error: 'no data to update in cdt' });
                }

            }
            else
                return JSON.stringify({ error: 'no id provide' });

        }
        return JSON.stringify({ error: `${path} not found` });
    }
};