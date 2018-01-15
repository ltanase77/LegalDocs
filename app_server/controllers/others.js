/* GET about page */
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

module.exports.about = function(request, response) {
    response.render('about', {
        pageTitle: 'LegalDocs - Despre Noi',
        pageHeader: {
            title: 'Despre Noi',
            strapline: 'Sincronizam dreptul cu tehnologia'

        },
        pageContent: {
            leadline: 'Dreptul din perspectiva programarii'
        },
        side: sideContent
    });
};

module.exports.contact = function(request, response ) {
    response.render('contact', {
        pageTitle: 'LegalDocs - Contact',
        pageHeader: {
            title: 'Contactati-ne',
            strapline: 'Opinia dumneavoastra contacteaza'

        },
        side: sideContent
    });
};