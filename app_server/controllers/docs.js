/* GET home page */
var sideContent = [
    {
        item: "/contracts",
        heading: "Contracte",
        text: "Obtineti access la forme contractuale necesare activitatii dumneavoastra"
    },

    {
        item: "/notices",
        heading: "Notificari",
        text: "Atentionati partenerii dumneavoastra despre incalcarea obligatiilor contractuale"
    },

    {
        item: "/corporate",
        heading: "Documente Societare",
        text: "Folositi documente societare adaptate situatiei dumneavoastra"
    },

    {
        item: "/court",
        heading: "Cereri judiciare",
        text: "Adresati-va instantelor de judecata intr-un limbaj profesionit"
    }
];

module.exports.homelist = function(request, response) {
    response.render('docs-list', {
        pageTitle: 'LegalDocs',
        pageHeader: {
            title: 'LegalDocs',
            strapline: 'Documente juridice la discretie!'
        },
        pageContent: {
            leadline: 'LegalDocs te ajuta sa obtii documentele de care ai nevoie',
            panelTitle: [ "Concept", "Cum functioneaza", "Tehnologie" ]
        },
        side: sideContent
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
            type: 'Contract',
            docList: ["comodat", "mandat", "inchiriere"]
        },
        side: sideContent
    });
};

/* GET notices page */

module.exports.notices = function(request, response) {
    response.render('notices', {
        pageTitle: 'LegalDocs - Notificari',
        pageHeader: {
            title: 'Notificari',
            strapline: 'Lore ipsum'
        },
        pageContent: {
            leadline: 'Tipuri de notificari',
            type: 'Notificare',
            docList: ["neplata", "evacuare", "neexecutare"]
        },
        side: sideContent
    });
};
/* GET corporate page */

module.exports.corporate = function(request, response) {
    response.render('index', {
        pageTitle: 'LegalDocs - Societati',
        pageHeader: {
            title: 'Documente Societare',
            strapline: 'Lore ipsum'
        },
        side: sideContent
    });
};

/* GET court page */
module.exports.court = function(request, response){
    response.render('index', {
        pageTitle: 'LegalDocs - Instanta',
        pageHeader: {
            title: 'Cereri Judiciare',
            strapline: 'Lore ipsum'
        },
        side: sideContent
    });
};

