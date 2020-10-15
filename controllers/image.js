const clarifai=require('clarifai')


const appcalrifai =new clarifai.App({
    apiKey:"b48024407ad04798a8eb1429fcc41f5b"

});

const handleApicall=(req,res)=>{
    appcalrifai.models
    .predict(clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>{res.json(data);})
    .catch(err=>{res.status(400).json('unable to get API')})
}

const handleImage=(req,res,db)=>{
    const {id}=req.body;
    db('users').where('id','=',id)
    .increment('entries',1)
    .returning('entries')
    .then (entries=>{
        return res.json(entries[0]);
    })
    .catch(err=>res.status(400).json('unable to get entries') )
}

module.exports={
    handleImage:handleImage,
    handleApicall:handleApicall
}