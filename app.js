const MongoClient = require('mongodb').MongoClient



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err) {
    return console.log('unable to connect to Mongo server')
  }
  console.log('Connected to Mongo server')
  db.collection('Todos').find({text: 'something'}).toArray().then((arr)=>{
    console.log(arr)
  });

  // db.close();
  // db.collection('Todos').insertOne({
  //   text: 'something',
  //   completed: false
  // },(err,res)=>{
  //   if (err){
  //     return console.log("unable to create document",err)
  //   }
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2))
  // });
  //
  // db.close();
});
