/* GET home page */
const Request = require('request');
let apiOptions = {
    server: "http://localhost:5000"
};

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

let _showError = function(req, res, status) {
    let title, content;
    if (status === 404) {
        title = "404 page not found";
        content = "Oops! We can not find this page!"
    } else {
        title = status + " something is gone wrong";
        content = "Something doe snot worked as expected";
    }

    res.status(status);
    res.render('error', {
        title: title,
        errorMsg: content
    });
};

module.exports.homelist = function(req, res) {
    let path = '/api';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        if (response.statusCode === 200) {
            renderPage(req, res, 'docs-list', body);
        } else {
            _showError(req, res, response.statusCode);
        }
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
        if (response.statusCode === 200) {
            renderPage(req, res, 'contracts', body);
        } else {
            _showError(req, res, response.statusCode);
        }
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
        if (response.statusCode === 200) {
            renderPage(req, res, 'notices', body);
        } else {
            _showError(req, res, response.statusCode);
        }
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
        if (response.statusCode === 200) {
            renderPage(req, res, 'corporate', body);
        } else {
            _showError(req, res, response.statusCode);
        }
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
        if (response.statusCode === 200) {
            renderPage(req, res, 'court', body);
        } else {
            _showError(req, res, response.statusCode);
        }
    });
};


