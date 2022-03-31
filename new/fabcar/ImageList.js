'use strict';

// Utility class for collections of ledger states --  a state list
const StateList = require('./../ledger-api/statelist.js');

const Image = require('./Image.js');

class ImageList extends StateList {

    constructor(ctx) {
        super(ctx, 'org.geo-spatial.imagelist');
        this.use(Image);
    }

    async addImage(image) {
        return this.addState(image);
    }

    async getimage(imageKey) {
        return this.getimage(imageKey);
    }

}
module.exports = ImageList;