/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {
    async initLedger(ctx){
        await ctx.stub.putState("key1","No Data");
        return "success"
    }

    async writeData(ctx,Tag,organization,imagehash,imageId,Imagename){
        let array1 = [];
        array1[0] = Tag;
        array1[1] = organization;
        array1[2] = imagehash;
        array1[3] = imageId;
        array1[4] = Imagename;
        let array2 = [];
        array2[0] = array1[3];
        array2[1] = array1[1];
        let key = ctx.stub.createCompositeKey("array1",array2);
        await ctx.stub.putState(key,array1.toString())
        // console.log("This is key : " , key);
        return array1.toString();
    }

    async readData(ctx,imageId,organization){
        let array1 = [];
        array1[0] = imageId;
        array1[1] = organization;
        let key = ctx.stub.createCompositeKey("array1",array1);
        let str = await ctx.stub.getState(key);
        str = str.toString();
        let  array2 = str.split(",");
        array2.forEach(element => {
            console.log(element);
        });
        return array2;
    }

    async updateData(ctx,imageId,organization,newhash){
        let array1 = [];
        array1[0] = imageId;
        array1[1] = organization;
        let key = ctx.stub.createCompositeKey("array1",array1);
        let str = await ctx.stub.getState(key);
        str = str.toString();
        let  array2 = str.split(",");
        if(!array2[4])
        {
            throw new Error(`${imageId}  does not exit`);
        }
        array2[2] = newhash;
        await ctx.stub.putState(key,array2.toString())
        return array2.toString();
    }
}

module.exports = FabCar;
