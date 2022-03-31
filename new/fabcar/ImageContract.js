'use strict';

// Fabric smart contract classes
const { Contract, Context } = require('fabric-contract-api');

// medicochain specifc classes
const Image = require('./Image.js');
const ImageList = require('./ImageList.js');



class ImageContext extends Context {

    constructor() {
        super();
        this.imageList = new ImageList(this);
    }

}

class ImageContract extends Contract {

    constructor() {
        // Unique namespace when multiple contracts per chaincode file
        super('org.geo-spatial.Image');
    }

    
    createContext() {
        return new ImageContext();
    }

    async Simage(
        ctx,
        Tag,
        organization,
        imagehash,
        imageId,
        Imagename
    ){
        let image = Image.createInstance(
        Tag,
        organization,
        imagehash,
        imageId,
        Imagename
        )

         createInstance(
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
    
    await ctx.imageList.addImage(image);
    return image;
}

async getImage(ctx, imageId, organization) {
    // Retrieve the current drug using key fields provided

    let imageKey = Image.makeKey([imageId, organization]);
    let state = await ctx.imageList.getImage(imageKey);

    logg('history from contract', state);

    return state || JSON.stringify({});
}
}