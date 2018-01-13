/* GET about page */

module.exports.about = function(request, response) {
    response.render('about', {
        pageTitle: 'LegalDocs - Despre Noi',
        pageHeader: {
            title: 'Despre Noi',
            strapline: 'Sincronizam dreptul cu tehnologia'

        },
        pageContent: {
            leadline: 'Dreptul din perspectiva programarii'
        }
    });
};

module.exports.contact = function(request, response ) {
    response.render('contact', {
        pageTitle: 'LegalDocs - Contact',
        pageHeader: {
            title: 'Contactati-ne',
            strapline: 'Opinia dumneavoastra contacteaza'

        }
    });
};