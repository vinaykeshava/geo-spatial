'use strict';

// Utility class for ledger state
const State = require('./../ledger-api/state.js');


class Image extends State {

    constructor(obj) {
        super(Image.getClass(), [obj.imageId, obj.organization]);
        Object.assign(this, obj);
    }

    static fromBuffer(buffer) {
        return Image.deserialize(buffer);
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }


    static deserialize(data) {
        return State.deserializeClass(data, Image);
    }

    static createInstance(
        Tag,
        organization,
        imagehash,
        imageId,
        Imagename
    ) {
        return new Image({
        Tag,
        organization,
        imagehash,
        imageId,
        Imagename

        });
    }
static getClass() {
        return 'org.geo-spatial.image';
    }
}

module.exports = Image;
