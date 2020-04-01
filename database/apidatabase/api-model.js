const db = require('../dbConfig') //connects to database

//Find All Users in db
function find(){
    return db('apidatabase')
    .select('id', 'user_id', 'title', 'img', 'url')
}
//Find All posts by filter
function findBy(filter){
    return db('apidatabase').where(filter);
}
//Find User by ID
function findById(id) {
    return db('apidatabase')
    .select('id', 'user_id', 'title', 'img', 'url')
    .where({id})
    .first();
}
//Insert new API to apidatabase
async function insert(api) {
    console.log("API", api)
    const [id] =  await db('apidatabase').insert(api);
    return findById(id);
  }
//Remove User
function remove(id){
    return db('apidatabase')
    .where({id})
    .del(); //deletes the record that matches the id
}

module.exports ={
    find,
    findBy,
    findById,
    insert,
    remove
}