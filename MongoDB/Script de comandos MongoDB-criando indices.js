for(var i=0; i< 10000; i++){
    db.clients.insert({nome: "Cliente" + i, age: i});
}

db.clients.find({});
db.clients.count({});

db.getCollection('clients').find({nome: "Cliente0"}). explain(true)

//criando o índice
db.getCollection('clients').createIndex({name: 1},  {"name": "idx_name"})
