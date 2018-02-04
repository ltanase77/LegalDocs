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

let optionsSchema = new monoose.Schema({
    type: String,
    parties: [String],
    object: [String]
});

let pageSchema = new mongoose.Schema({
    pageTitle: {type: String, required: true},
    pageHeader: pageHeaderSchema,
    pageContent: pageContentSchema,
    side: sideContentSchema,
    options: [optionsSchema]
});

moongose.model('PageContent', pageSchema, 'pagecontents');