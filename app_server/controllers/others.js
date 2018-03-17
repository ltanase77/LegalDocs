/* GET about page */
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
        },
        side: body.side,
        comments: {
            name: body.name,
            comment: body.content
        }

    })
};

let renderFeedback = function(req, res, view, body) {
    res.render(`${view}`, {
        pageTitle: body[2].pageTitle,
        pageHeader: {
            title: body[2].pageHeader.title,
            strapline: body[2].pageHeader.strapline
        },
        pageContent: {
            leadline: body[2].pageContent.leadline,
        },
        side: body[2].side,
    })
};

module.exports.about = function(req, res) {
    let path = '/api/about';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'about', body)
    });
};

module.exports.contact = function(req, res ) {
    let path = '/api/contact';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderPage(req, res, 'contact', body)
    });
};

module.exports.feedback = function (req, res) {
    let path = '/api/feedback';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        renderFeedback(req, res, 'feedback', body)
    });
};