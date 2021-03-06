const express = require('express');
const board = express.Router();
const models = require("../modules");


const Board = models.boards;



board.get('/', async(req,res)=>{
    let result = await Board.findAll();
    res.send(result);
});

board.get('/:id', async(req,res)=>{
    let result = await Board.findOne({
        attributes:["content"],
        where:{
             id : req.params.id
        }
    })
    res.send(result);
});

board.post('/', async(req,res)=>{
    let result = true;
   try {
       await Board.create({
           content: req.body.content
       });
   } catch (error) {
       console.log(error);
   }
   console.log(result);
   res.send(result);
});

board.put('/:id', async(req,res)=>{
    let msg; 
    try {
        await Board.update({
            content : req.body.content
        }, {
            where:{
                id:req.params.id
            }
        });
        msg = '유저를 찾아서 '+req.body.content+' 으로 바뀌었습니다.';
    } catch (error) {
        console.log("유저를 찾을수 없습니다",error);
    }
    res.send(msg);
    }
);

board.delete('/:id', async(req,res)=>{
    let msg;
   
    try {
        await Board.destroy({    
            where:{
                id:req.params.id
            }
        }); 
       msg = req.params.id+" 를 가진 유저를 삭제하였습니다."
    } catch (error) {
        console.log(error);
    }

    res.send(msg);
});

module.exports = board;
