const mongoose= require('mongoose');
const pageContent = mongoose.model('PageContent');
const sendJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
};

module.exports.home = function(request, response) {
    pageContent
        .findOne({pageName: "Home"})
        .exec(function(err, content) {
            if (!content) {
                sendJsonResponse(response, 404, {
                    message: "page content not found"
                });
            } else if (err) {
                sendJsonResponse(response, 404, err);
                return
            }
            sendJsonResponse(response, 200, content);
        });
};

module.exports.about = function(request, response) {
    pageContent
        .findOne({pageName: "About"})
        .exec(function(err, content) {
            if (!content) {
                sendJsonResponse(response, 404, {
                    message: "page content not found"
                });
            } else if (err) {
                sendJsonResponse(response, 404, err);
                return
            }
            sendJsonResponse(response, 200, content);
        });
};

module.exports.contact = function(request, response) {
    pageContent
        .findOne({pageName: "Contact"})
        .exec(function(err, content) {
            if (!content) {
                sendJsonResponse(response, 404, {
                    message: "page content not found"
                });
            } else if (err) {
                sendJsonResponse(response, 404, err);
                return
            }
            sendJsonResponse(response, 200, content);
        });
};

