const mongoose= require('mongoose');
const pageContent = mongoose.model('PageContent');
const Comment = mongoose.model('Comment');
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
module.exports.feedback = function(request,response) {
   Comment.find({tag: "comment"}).exec(function(err, comments) {
       pageContent.findOne({pageName: "Feedback"}).exec(function(err, page) {
           let content = comments.concat(page);
           sendJsonResponse(response, 200, content);
       });

   });
};

module.exports.createFeedback = function(request, response) {
    Comment.create({
        tag: "comment",
        name: request.body.name,
        content: request.body.content
        },
        function(err, comment){
           if (err) {
               sendJsonResponse(response, 400, err);
           } else {
               sendJsonResponse(response, 201, comment );
           }
        }
    );
};