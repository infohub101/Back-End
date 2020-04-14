exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('apidatabase').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('apidatabase').insert(
        [
          // Education
          {
            category: "Education",
            api_id: "Ed1",
            title: 'NASA - Astronomy Picture of the Day',
            description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
            url: 'https://api.nasa.gov/planetary/apod?api_key=7K9WRASFdJrzyD0pWRNUNsbtgADoFHBIwDhaxeLJ',
          },

          // News
          {
            category: "News",
            api_id: "N1",
            title: 'NewsAPI - Headlines',
            description: 'Daily US Headlines',
            img: 'https://i1.wp.com/www.madeiraislandnews.com/wp-content/uploads/2016/11/onslaatstenieuws.jpg?resize=759%2C343&ssl=1',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },

           // Entertainment 
           {
            category: "Entertainment",
            api_id: "E1",
            title: "Powerball Ticket",
            description: "Powerball Ticket retrieves the latest Powerball winning numbers",
            img: "https://s3.amazonaws.com/cdn.powerball.com/drupal/files/powerball-power-play-68px.png",
            url: "https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32",
          }
        ]
      );
    });
};