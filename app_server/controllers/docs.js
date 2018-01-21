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
            docList: ["de comodat", "de mandat", "de inchiriere"]
        },
        side: sideContent,
        options: [
            {
                type: 'de comodat',
                parties : [
                    ['Doua Parti', 'two'],
                    ['Parti Multiple', 'multiple']
                ],
                object : [
                    ['Bun Mobil', 'moveable'],
                    ['Bun Imobil', 'real-estate']
                ]
            },

            {
                type: 'de mandat',
                parties: [
                    ['Doua Parti', 'two'],
                    ['Parti Multiple', 'multiple']
                ],
                object : []
            }

        ]
    });
};

/* GET notices page */

module.exports.notices = function(request, response) {
    response.render('notices', {
        pageTitle: 'LegalDocs - Notificari',
        pageHeader: {
            title: 'Notificari',
            strapline: 'Creati notificari in mod simplu si eficient'
        },
        pageContent: {
            leadline: 'Tipuri de notificari',
            type: 'Notificare',
            docList: ["de neplata", "de evacuare", "de neexecutare"]
        },
        side: sideContent
    });
};
/* GET corporate page */

module.exports.corporate = function(request, response) {
    response.render('corporate', {
        pageTitle: 'LegalDocs - Societati',
        pageHeader: {
            title: 'Documente Societare',
            strapline: 'Schimbarile societare la indemana'
        },
        pageContent: {
          leadline: 'Tipuri de documente societare',
          type: 'Hotarare',
          docList: ['AGA(SRL cu asociat unic)', 'AGA(SRL)', 'AGA(SA)'],
          formSections: {

          }
        },
        side: sideContent
    });
};

/* GET court page */
module.exports.court = function(request, response){
    response.render('court', {
        pageTitle: 'LegalDocs - Instanta',
        pageHeader: {
            title: 'Cereri Judiciare',
            strapline: 'Adresati-va instantei in mod facil'
        },
        pageContent: {
          leadline: 'Tipuri de cereri',
          type: ['Cerere'],
          docList: ['de eliberare certificat de grefa', 'de legalizare', 'contraventionala', 'de chemare in judecata']
        },
        side: sideContent
    });
};

