module.exports = function (express, x10) {
   var router = express.Router();
   router.get('/on/:house/:node', function (req, res) {
      x10.on(req.params.house, req.params.node);
      res.send('ok');
   });
   router.get('/off/:house/:node', function (req, res) {
      x10.off(req.params.house, req.params.node);
      res.send('ok');
   });
   return router;
}
