/* GET home page */
module.exports.homelist = function(request, response) {
    response.render('docs-list', {pageTitle: 'Home'});
};

/* GET contracts page */
module.exports.contracts = function(request, response) {
    response.render('index', {pageTitle: 'Contracte'});
};

/* GET notices page */

module.exports.notices = function(request, response) {
    response.render('index', {pageTitle: 'Notificari'});
};
/* GET corporate page */

module.exports.corporate = function(request, response) {
    response.render('index', {pageTitle: 'Documente Societare'});
};

/* GET court page */
module.exports.court = function(request, response){
    response.render('index', {pageTitle: 'Actiuni judiciare'});
};

