const db = require('../dbConfig') //connects to database

//Find All Users in db
function find(){
    return db('userapidatabase')
    .select('id', 'user_id', 'api_id', 'category', 'title', 'description', 'img', 'url')
}
//Find All posts by filter
function findBy(filter){
    return db('userapidatabase').where(filter);
}
//Find User by ID
function findById(id) {
    return db('userapidatabase')
    .select('id', 'user_id', 'api_id', 'category', 'title', 'description', 'img', 'url', 'status')
    .where({id})
    .first();
}
//Insert new API to userapidatabase
async function insert(api) {
    console.log("API", api)
    const [id] =  await db('userapidatabase').insert(api);
    return findById(id);
  }
//Remove User API
function remove(id){
    return db('userapidatabase')
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