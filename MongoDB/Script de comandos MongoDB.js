show databases;
use fenda-biquini
use fenda_biquini
db.createCollection("test", {capped: true, max: 2, size: 2});
show collections;
db.test.insertOne({"nome": "teste 1"});
db.test.find({});
db.test.insertOne({"nome": "teste 2"});
db.test.insertOne({"nome": "teste 3"});
db.test1.insertOne({"age": 10});
db.test1.find({});
//--
db.clients.insert([{"nome":"Patrick", "age":38},{"name":"Bob Esponja"}])
db.clients.find({});
db.clients.save({ "_id" : ObjectId("6435c84838c1eeabf634e5af"), "nome":"Patrick", "age":40})

db.clients.find({});

db.clients.update({"name": "Bob Esponja"}, {$set : {"age":41}});

db.clients.update({"nome": "Patrick"}, {$set : {"age":50}});

db.clients.find({});

db.clients.update({"age": 38}, {$set : {"age":39}});

db.clients.update({"age": 38}, {$set : {"age":39}}, {multi: true});
//--consultar a documentação do mongo

db.clients.updateMany({"age": 39},{$set: {"age":55}});

//para buscar o primeiro
db.clients.find({"age":55 }).limit(1);

//dois campos
db.clients.find({"age":41, "name": "Bob Esponja" });

//operador in
db.clients.insertOne({"nome":"Patrick2", "age":30});
db.clients.find({"age": {$in: [30, 41]}});

//comando or
db.clients.insertOne({"name": "Lula Molusco"}, {$set : {"age":43}});
db.clients.update({"name": "Lula Molusco"}, {$set : {"age":43}});
db.clients.find({$or: [{"name": "Lula Molusco"},{"age": 55}]});

//idade menor que 55 anos comando lt
db.clients.find({"age": {$lt: 55}});

//idade menor ou igual que 30 anos comando lte
db.clients.find({"age": {$lte: 30}});

//delete
db.clients.deleteOne({"_id": ObjectId("6435c89038c1eeabf634e5b8")});
db.clients.find({});
db.clients.deleteMany({"nome": "Patrick2"});

//verificar os comandos da documentação do Mongo
//docs.mongodb.com/manual/
