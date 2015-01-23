var gen = require('../generator.js');

describe("generate", function() {

  it("Must have a function named generate()", function() {
    expect(gen.generate).toBeDefined();
    expect(gen.generate).toEqual(jasmine.any(Function));
  });

  it("should return an array of 'n' amount of randomnly generated numbers", function(){
    var array1 = gen.generate(1000);
    expect(array1.length).toEqual(1000);
    var array2 = gen.generate(1000);
    expect(array2.length).toEqual(1000);
    
    var uniq = {};
    for (var i=0; i < array1.length; i++) {
      uniq[array1[i]] = true;
    }
    expect(Object.keys(uniq).length).toEqual(array1.length);
    
    var uniq2 = {};
    for (var j=0; j < array2.length; j++) {
      uniq2[array2[j]] = true;
    }
    expect(Object.keys(uniq2).length).toEqual(array2.length);

  });
});