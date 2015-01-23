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
    expect(array1).not.toEqual(array2);

  });
});