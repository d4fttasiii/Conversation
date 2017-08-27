'use strict';

const environment = require('../../environment/environment');
const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: environment.elastic,
    log: 'trace',
});

exports.listAllMessages = function (res) {
    client.search({
        index: environment.indexName,
        type: environment.typeName,
        body: {
            query: {
                match_all: {}
            },
            size: 24,
            from: 0,
            sort: [{
                sentAt: {
                    order: 'asc'
                }
            }]
        }
    }).then(
        response => {
            console.log(`Messages returned: ${JSON.stringify(response.hits.hits)}`);
            res.json(response.hits.hits);
        },
        error => console.error(`Error happend while getting the messages: ${JSON.stringify(error)}`)
        );
};

exports.sendMessage = function (req, res) {
    const message = req.body;
    message.sentAt = new Date();
    client.index({
        index: environment.indexName,
        type: environment.typeName,
        body: message
    }).then(
        response => {
            console.log(`Document indexed: ${JSON.stringify(response)}`);
            res.sendStatus(201);
        },
        error => console.error(`Error happend while indexing a message: ${JSON.stringify(error)}`)
        );
};
