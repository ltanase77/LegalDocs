let mongoose = require('mongoose');

let pageHeaderSchema = new mongoose.Schema({
    title: {type: String, required: true},
    strapline: {type: String, required: true}
});

let pageContentSchema = new mongoose.Schema({
    leadline: {type: String, required: true},
    panelTitle: [String],
    type: String,
    docList: [String]
});

let sideContentSchema = new mongoose.Schema({
    item: String,
    heading: String,
    text: String
});

let optionsSchema = new mongoose.Schema({
    type: String,
    parties: [String],
    object: [String]
});


let pageSchema = new mongoose.Schema({
    pageName: {type: String, required: true},
    pageTitle: {type: String, required: true},
    pageHeader: pageHeaderSchema,
    pageContent: pageContentSchema,
    side: [sideContentSchema],
    options: [optionsSchema]
});

let commentsSchema = new mongoose.Schema({
    tag: {type: String, required: true},
    name: {type: String, required: true},
    content: {type: String, required: true},
    postedOn: {type: Date, "default": Date.now}
});

mongoose.model('PageContent', pageSchema, 'pagecontents');
mongoose.model('Comment', commentsSchema, 'pagecontents');
