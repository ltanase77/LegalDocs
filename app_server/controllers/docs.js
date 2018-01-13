/* GET home page */
module.exports.homelist = function(request, response) {
    response.render('docs-list', {
        pageTitle: 'LegalDocs',
        pageHeader: {
            title: 'LegalDocs',
            strapline: 'Documente juridice la discretie!'
        },
        pageContent: {
            leadline: 'LegalDocs te ajuta sa obtii documentele de care ai nevoie'
        }
    });
};

/* GET contracts page */
module.exports.contracts = function(request, response) {
    response.render('contracts', {
        pageTitle: 'LegalDocs - Contracte',
        pageHeader: {
            title: 'Contracte',
            strapline: 'Generati contracte in mod dinamic!'
        },
        pageContent: {
            leadline: 'Tipuri de contracte',
            contractsList: ["comodat", "mandat", "inchiriere"]
        }


    });
};

/* GET notices page */

module.exports.notices = function(request, response) {
    response.render('index', {
        pageTitle: 'LegalDocs - Notificari',
        pageHeader: {
            title: 'Notificari',
            strapline: 'Lore ipsum'
        }

    });
};
/* GET corporate page */

module.exports.corporate = function(request, response) {
    response.render('index', {
        pageTitle: 'LegalDocs - Societati',
        pageHeader: {
            title: 'Documente Societare',
            strapline: 'Lore ipsum'
        }
    });
};

/* GET court page */
module.exports.court = function(request, response){
    response.render('index', {
        pageTitle: 'LegalDocs - Instanta',
        pageHeader: {
            title: 'Cereri Judiciare',
            strapline: 'Lore ipsum'
        }
    });
};

