exports.up = function(knex) {
    return knex.schema.createTable('apidatabase', api=>{
      //Auto Incrementing ID
      api.increments();
      //Foreign Key
      api.integer('user_id')
      .unsigned() //does not allow integers to be negative 
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      //Title
      api.string('url').notNullable()
      //Time Stemp
      api.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('apidatabase');
  };