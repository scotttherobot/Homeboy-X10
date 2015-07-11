module.exports = function (express, x10) {
   var router = express.Router();
   router.get('/:house/:node', function (req, res) {
      res.send('ok');
   });
   router.post('/:house/:node', function (req, res) {
      x10.on(req.params.house, req.params.node);
      res.send('ok');
   });
   router.delete('/:house/:node', function (req, res) {
      x10.off(req.params.house, req.params.node);
      res.send('ok');
   });
   return router;
}
