exports.up = function(knex) {
    return knex.schema.createTable('userapidatabase', api => {
      // Auto Incrementing ID
      api.increments();
      // Foreign Key
      api.integer('user_id')
        .unsigned() //does not allow integers to be negative 
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      // Foreign Key  
      api.string('api_id')
      .unsigned() //does not allow integers to be negative 
      .references('id')
      .inTable('apidatabase')
      .notNullable()
      // Category
      api.string('category').notNullable()
      // Title
      api.string('title').notNullable()
      // Description
      api.string('description').notNullable()
      // Image
      api.string('img')
      // API URL
      api.string('url').notNullable()
      // API status
      api.string('status').notNullable()
      // Time Stamp
      api.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('userapidatabase');
  };