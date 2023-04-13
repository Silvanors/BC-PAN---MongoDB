use fenda-biquini
show databases;

for(var i=0; i< 10000; i++){
    db.seller.insert({nome: "Seller" + i, age: i});
}

db.seller.find({});

db.getCollection('seller').createIndex({nome: 1},  {"nome": "idx_xnome"})

//--filtros e operadores $group $addFields

db.getCollection('seller').aggregate([{$group: {_id: "$age", total: {$sum: 1}}}])

db.getCollection('seller').aggregate([{$addFields :{"teste":true}}]);

//--funções $sum, $avg, $max e $min

db.getCollection('seller').aggregate([{$group: {_id: "$age", total :{$sum:1}, id_maximo: {$max: "$age"}}}]);

db.getCollection('seller').aggregate([{$group: {_id: "$age", total :{$sum:1}, id_minimo: {$min: "$age"}}}]);

db.getCollection('seller').aggregate([{$group: {_id: "$age", total :{$sum:1}, id_avg: {$avg: "$age"}}}]);


//--operadores lógicos $and, $or, $not e $nor

db.getCollection('seller').aggregate([{$match : {$and:[{nome:"Seller1"}, {age: 1}]}}]);

db.getCollection('seller').aggregate([{$match : {$or:[{nome:"Seller1"}, {age: 10}]}}]);


Building with Patterns: A Summary | MongoDB

Aggregation — MongoDB Manual

