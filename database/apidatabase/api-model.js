const db = require('../dbConfig') //connects to database

//Find All Users in db
function find(){
    return db('apidatabase')
    .select('id', 'user_id', 'url');
}
//Find All posts by filter
function findBy(filter){
    return db('apidatabase').where(filter);
}
//Find User by ID
function findById(id) {
    return db('apidatabase')
    .select('id', 'user_id', 'url')
    .where({id})
    .first();
}
// //Insert new user to db
// async function insert(post) {
//     return await db('posts').insert(post).returning(['id', 'title']);
//   }
// //Remove User
// function remove(id){
//     return db('posts')
//     .where({id})
//     .del(); //deletes the record that matches the id
// }
// //Update User
// function update(changes, id){
//     return db('posts')
//     .where({id})
//     .update(changes); //updates the record with 'changes' where the id matches
// }

module.exports ={
    find,
    findBy,
    findById,
    // insert,
    // remove,
    // update
}