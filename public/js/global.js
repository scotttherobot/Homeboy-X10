$(function() {
   api = {
      on : function (house, node) {
         return this.req('POST', house + "/" + node);
      },
      off : function (house, node) {
         return this.req('DELETE', house + "/" + node);
      },
      req : function (method, endpoint) {
         $.ajax({
            url : "/api/" + endpoint,
            type : method,
            success : function (res) {
               console.log(res);
            }
         });
         // Return this so we can CHAIN COMMANDS BABY!
         return this;
      }
   };
});
