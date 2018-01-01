/* GET about page */

module.exports.about = function(request, response) {
    response.render('index', {pageTitle: 'About LegalDocs'});
};

module.exports.contact = function(request, response ) {
    response.render('contact', {pageTitle: 'Contact'});
};