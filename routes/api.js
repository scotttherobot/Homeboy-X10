module.exports = function (express, x10) {
   var router = express.Router();
   router.get('/:house/:node', function (req, res) {
      res.send('ok');
   });
   router.post('/:house/:node', function (req, res) {
      x10.on(req.params.house, req.params.node);
      console.log("on", req.params.house, req.params.node);
      res.send('ok');
   });
   router.patch('/:house/:node', function (req, res) {
      x10.dim(req.params.house, req.params.node);
      res.send('ok');
   });
   router.put('/:house/:node', function (req, res) {
      x10.bright(req.params.house, req.params.node);
      res.send('ok');
   });
   router.delete('/:house/:node', function (req, res) {
      x10.off(req.params.house, req.params.node);
      console.log("off", req.params.house, req.params.node);
      res.send('ok');
   });
   return router;
}
