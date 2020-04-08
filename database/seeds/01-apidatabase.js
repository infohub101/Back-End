exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('apidatabase').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('apidatabase').insert(
        [
          // News
          {
            category: "News",
            api_id: 1,
            title: 'Title',
            description: 'Description',
            img: 'http://img.google.com',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },
          {
            category: "News",
            api_id: 2,
            title: 'Title',
            description: 'Description',
            img: 'http://img.google.com',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },

          // Social
          {
            category: "Social",
            api_id: 3,
            title: 'Title',
            description: 'Description',
            img: 'http://img.google.com',
            url: 'https://newsapi.org/v2/sources?language=en&country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          }
        ]
      );
    });
};