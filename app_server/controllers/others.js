/* GET about page */
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
        },
        side: body.side,
    })
};

let renderFeedback = function(req, res, view, body) {
    let index = body.length - 1;
    res.render(`${view}`, {
        pageTitle: body[index].pageTitle,
        pageHeader: {
            title: body[index].pageHeader.title,
            strapline: body[index].pageHeader.strapline
        },
        pageContent: {
            leadline: body[index].pageContent.leadline,
        },
        side: body[index].side,
        comments: {
            name: body[0].name,
            content: body[0].content,
            date: body[0].postedOn
        },
        error: req.query.err
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

module.exports.about = function(req, res) {
    let path = '/api/about';
    let requestOptions = {
        url: apiOptions.server + path,
        method: "GET",
        json: {}
    };
    Request(requestOptions, function(err, response, body) {
        if (response.statusCode === 200) {
            renderPage(req, res, 'about', body);
        } else {
            _showError(req, res, response.statusCode);
        }
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
        if (response.statusCode === 200) {
            renderPage(req, res, 'contact', body);
        } else {
            _showError(req, res, response.statusCode);
        }
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
        if (response.statusCode === 200) {
            renderFeedback(req, res, 'feedback', body);
        } else {
            _showError(req, res, response.statusCode);
        }
    });
};

module.exports.createFeedback = function(req, res) {
    let path = '/api/feedback/create';
    let postdata = {
        tag: "comment",
        name: req.body.name,
        content: req.body.content
    };
    let requestOptions = {
        url: apiOptions.server + path,
        method: "POST",
        json: postdata
    };
    if (!postdata.name || !postdata.content) {
        res.redirect('/feedback?err=val')
    } else {
        Request(requestOptions, function (err, response, body) {
            if (response.statusCode === 201) {
                res.redirect('/feedback');
            } else if (response.statusCode === 400 && body.name && body.name === "ValidationError") {
                res.redirect('/feedback?err=val')
            } else {
                _showError(req, res, response.statusCode);
            }
        });
    }
};