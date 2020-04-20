require('dotenv').config();

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('apidatabase').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('apidatabase').insert(
        [
          // Calender
          {
            category: "Calender",
            api_id: "Cal1",
            title: 'US Holidays - 2020',
            description: 'Public holidays in the United States in Year 2020',
            img: 'https://p1.hiclipart.com/preview/965/850/482/happy-new-year-2020-new-years-2020-2020-png-clipart-thumbnail.jpg',
            url: `https://calendarific.com/api/v2/holidays?&api_key=${process.env.USHolidayAPI}&country=US&year=2020`,
          },

          // Education
          {
            category: "Education",
            api_id: "Ed1",
            title: 'NASA - Astronomy Picture of the Day',
            description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
            url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NasaAPI}`,
          },

           // Entertainment 
           {
            category: "Entertainment",
            api_id: "E1",
            title: "The Movie DB",
            description: "Get a list of upcoming movies in the US theatres. ",
            img: "https://f0.pngfuel.com/png/815/325/red-and-white-popcorn-container-and-movie-tickets-clip-art-png-clip-art-thumbnail.png",
            url: "https://api.themoviedb.org/3/movie/upcoming?api_key=2989523a56793797d69a0424d54817de&language=en-US&page=1&region=US",
          },
          
           // Gambling 
          {
            category: "Gambling",
            api_id: "G1",
            title: "Powerball Ticket",
            description: "Powerball Ticket retrieves the latest Powerball winning numbers",
            img: "https://s3.amazonaws.com/cdn.powerball.com/drupal/files/powerball-power-play-68px.png",
            url: "https://games.api.lottery.com/api/v2.0/results?game=59bc2b6031947b9daf338d32",
          },

          // News
          {
            category: "News",
            api_id: "N1",
            title: 'NewsAPI - Headlines',
            description: 'Daily US Headlines',
            img: 'https://i1.wp.com/www.madeiraislandnews.com/wp-content/uploads/2016/11/onslaatstenieuws.jpg?resize=759%2C343&ssl=1',
            url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.USNewsAPI}`,
          }
        ]
      );
    });
};