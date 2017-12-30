module.exports.index = function(request, response, next) {
    response.render('index', {title: 'Express Framework'})
};