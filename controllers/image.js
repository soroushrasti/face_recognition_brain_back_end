const Clarifai=require('clarifai')

const appcalrifai =new Clarifai.App({
    apiKey:"13f27f1f734f454d8c959f960c8ccc26"

});

const handleApicall=(req,res)=>{

    appcalrifai.models
    .predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data=>{res.json(data);})
    //.then(data=>{console.log('I am in apicall', data)})
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
    handleImage,
    handleApicall
}