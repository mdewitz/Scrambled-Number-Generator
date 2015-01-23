module.exports = {
  generate : function(n) {
    var result = [];
    var maxNumPlusOne = 1001;
      for (var i = 0; i < n; i++){
      result.push(Math.floor(Math.random()*maxNumPlusOne));
      }
      return result;
  }
};


