const user = require('../model/user')

exports.read = async (req, res) => {
    try{
        const data = await user.find()
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.create = async(req, res) =>{
    try{
        const data = new user({...req.body, image: req.file.path})
        await data.save()
        res.status(201).json("Data Successfuly Added!")
    }catch(err){
        res.status(400).json({error: err.messsage})
    }
}

exports.readId = async (req, res) =>{
    try{
        const data = await user.findById(req.params._id)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.deleteData =async (req, res) =>{
    try{
        const data = await user.findByIdAndDelete(req.params._id)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

exports.update = async(req, res) =>{
    try{
        const data = {...req.body}
        if(req.file){
            data.image = req.file.path
        }
        await user.findByIdAndUpdate(req.params._id, data)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}