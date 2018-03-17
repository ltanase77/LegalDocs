/* GET home page */
const Request = require('request');
let apiOptions = {
    server: "http://localhost:5050"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://easytemplate.azurewebsites.net';
}

let renderPage = function(req, res, view, body) {
    res.render(`${view}`, {
        pageTitle: body.pageTitle,
        pageHeader: {
            title: body.pageHeader.title,
            strapline: body.pageHeader.strapline
        },
        pageContent: {
            leadline: body.pageContent.leadline,
            type: body.pageContent.type,
            panelTitle: body.pageContent.panelTitle,
            docList: body.pageContent.docList,
            formsSection: {}
        },
        side: body.side,

        options: [
            {
                type: 'de comodat',
                parties : [
                    ['Doua Parti', 'two'],
                    ['Parti Multiple', 'multiple']
                ],
                object : [
                    ['Bun Mobil', 'moveable'],
                    ['Bun Imobil', 'real-estate']
                ]
            },

            {
                type: 'de mandat',
                parties: [
                    ['Doua Parti', 'two'],
                    ['Parti Multiple', 'multiple']
                ],
                object : []
            }

        ]
    })
};

module.exports.homelist = function(req, res) {
    let path = '/api';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'docs-list', body)
    });
};

/* GET contracts page */
module.exports.contracts = function(req, res) {
    let path = '/api/contracts';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'contracts', body);
    });

};

/* GET notices page */

module.exports.notices = function(req, res) {
    let path = '/api/notices';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'notices', body);
    });
};
/* GET corporate page */

module.exports.corporate = function(req, res) {
    let path = '/api/corporate';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'corporate', body);
    });
};

/* GET court page */
module.exports.court = function(req, res){
    let path = '/api/court';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'court', body);
    });
};


