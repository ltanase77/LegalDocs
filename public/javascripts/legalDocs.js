angular.module('legalDocs', []);

let sideBar = function($scope) {
    $scope.data = [
        {
            "item":"/contracts",
            "heading":"Contracte",
            "text":"Obțineți acces la formele contractuale necesare activității dumneavoastră"
        },

        {
            "item":"/notices",
            "heading":"Notificări",
            "text":"Atenționați partenerii dumneavoastră despre încălcările obligațiilor comerciale"
        },

        {
            "item":"/corporate",
            "heading":"Documente societare",
            "text": "Folosiți documentele societare adaptate situației dumneavoastră"
        },

        {
            "item":"/court",
            "heading":"Cereri judiciare",
            "text":"Adresați-vă instanțelor de judecată într-un mod profesionist"
        }
    ]

};
angular.module('legalDocs')
    .controller("sideBarCtrl", sideBar);

