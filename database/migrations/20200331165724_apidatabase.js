exports.up = function(knex) {
    return knex.schema.createTable('apidatabase', api => {
      // Auto Incrementing ID
      api.increments();
      // API ID
      api.string('api_id').notNullable()
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
      // Time Stamp
      api.timestamp('created_date').defaultTo(knex.fn.now()).notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('apidatabase');
  };