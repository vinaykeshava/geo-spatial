function writeData(Tag ,organization,imagehash,imageId,Imagename){
    let array1 = [];
    array1[0] = Tag;
    array1[1] = organization;
    array1[2] = imagehash;
    array1[3] = imageId;
    array1[4] = Imagename;
    let array2 = [];
    array2[0] = array1[3];
    array2[1] = array1[1];
    let key = "hello";
    // await ctx.stub.putState(key,array1.toString())
    console.log("This is key : " , key);
    console.log(array2);
    return array1;
}

let array1 = writeData('123','org1','des1754223','1111','data1')
console.log(array1)