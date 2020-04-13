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
            api_id: "N1",
            title: 'NewsAPI - Headlines',
            description: 'Daily US Headlines',
            img: 'http://https://lh3.googleusercontent.com/proxy/lD4D1xGL6fSr1RL--KKxXknjxkY7vUIQZOa9M3rpCRFdKRE696CnPc2kODWsNFfbxO06HRcvqV_Zr8Jleo_fBMlylDvxGHiuf7voTZcsWeGmjLYL36tYlpG0r7_AruzPziQQ41SgaNo.google.com',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          },
          // {
          //   category: "News",
          //   api_id: 2,
          //   title: 'Title',
          //   description: 'Description',
          //   img: 'https://lh3.googleusercontent.com/proxy/lD4D1xGL6fSr1RL--KKxXknjxkY7vUIQZOa9M3rpCRFdKRE696CnPc2kODWsNFfbxO06HRcvqV_Zr8Jleo_fBMlylDvxGHiuf7voTZcsWeGmjLYL36tYlpG0r7_AruzPziQQ41SgaNo',
          //   url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95',
          // },

          // Social
          // {
          //   category: "Social",
          //   api_id: 3,
          //   title: 'Powerball Ticket',
          //   description: 'Powerball Ticket retrieves the latest Powerball winning numbers',
          //   img: 'https://s3.amazonaws.com/cdn.powerball.com/drupal/files/powerball-power-play-68px.png',
          //   url: 'https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32',
          // },

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