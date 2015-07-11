var fs = require('fs');

module.exports = function (express) {
   var router = express.Router();
   router.get('/', function (req, res) {
      fs.readFile('./devices.json', 'utf8', function (err, data) {
         if(err) throw err;
         devices = JSON.parse(data);

         res.render('modules', {devices: devices});
      });
   });
   return router;
}
