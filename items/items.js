//Load express
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

//Load mongoose
const mongoose = require("mongoose");

require("./Item")
const Item = mongoose.model("Item")

//Connect
mongoose.connect("mongodb+srv://tanya:tanya123@itemservice.ywh8m.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Database is connected");
});

app.get('/',(req,res) => {
    res.send("This is item service");
})

//create function
app.post("/item", (req,res) => {
    var newItem = {
        itemNumber: req.body.itemNumber,
        itemName: req.body.itemName,
        itemPrice: req.body.itemprice
    }

    //create a new book 
    var item = new Item(newItem)

    item.save().then(() => {
        console.log("New item created")
    }).catch((err) => {
        if(err) {
            throw err;
        }
    })
    res.send("A new item created with success");

})

app.get("/items", (req,res) => {
    Item.find().then((items) => {
        res.json(items)
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})


app.get("/item/:id", (req,res) => {
    Item.findById(req.params.id).then((item) => {
        if(item){
            res.json(item)
        }else{
            res.sendStatus(404); 
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

app.delete("/item/:id", (req, res) => {
    Item.findOneAndRemove(req.params.id).then(() => {
        res.send("Item removed with success")
    }).catch(err => {
        if(err){
            throw err
        }
    })
})

app.listen(5001, () => {
    console.log("Up and running");
})