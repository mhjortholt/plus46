const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const https = require('https')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// Keep server awake
setInterval(function() {
	https.get('https://plus46.herokuapp.com', (resp) => {
	  console.log('Ping!');
	}).on("error", (err) => {
	  console.log("Error when pinging: " + err.message);
	});
}, 13*60*1000);