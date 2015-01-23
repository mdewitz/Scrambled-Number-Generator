module.exports = {
  generate : function(n) {
    var maxNumPlusOne = n + 1;
    var uniq = [];

    for (var i = 0; i < n; i++){
      var randoNum = Math.floor(Math.random()*maxNumPlusOne);
      
      while (uniq.indexOf(randoNum) !== -1) {
        randoNum = Math.floor(Math.random()*maxNumPlusOne); 
      
      }
      uniq.push(randoNum);
    }  
    return uniq;
  }
};


