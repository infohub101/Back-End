exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userapidatabase').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('userapidatabase').insert(
        [
          {
            user_id: 1, 
            category: "News",
            title: 'Title',
            description: 'Description',
            img: 'http://img.google.com',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },
          {
            user_id: 2, 
            category: "News",
            title: 'Title',
            description: 'Description',
            img: 'http://img.google.com',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },
          {
            user_id: 3, 
            category: "Social",
            title: 'Title',
            description: 'Description',
            img: 'http://img.google.com',
            url: 'https://newsapi.org/v2/sources?language=en&country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },
        ]
      );
    });
};