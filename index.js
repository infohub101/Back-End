require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`\n** Infohub101 server is running on port ${PORT} **\n`);
});