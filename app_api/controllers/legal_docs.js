const mongoose= require('mongoose');
const pageContent = mongoose.model('PageContent');

const sendJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
};

module.exports.contracts = function(request, response) {
    pageContent.findOne({pageName: "Contracts"}, function(err, content) {
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

module.exports.notices = function(request, response) {
    pageContent.findOne({pageName: "Notices"}, function(err, content) {
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

module.exports.corporate = function(request, response) {
    pageContent.findOne({pageName: "Corporate"}, function(err, content) {
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

module.exports.court = function(request, response) {
    pageContent.findOne({pageName: "Court"}, function(err, content) {
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