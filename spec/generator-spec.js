var gen = require('../generator');

describe("generate", function() {

  it("Must have a function named generate()", function(){
    expect(gen.generate).toBeDefined();
  });

  it("should return an array of 'n' amount of randomnly generated numbers", function(){
    var array = gen.generate(1000);
    expect(array.length).toEqual(1000);
    var array2 = gen.generate(1000);
    expect(array2.length).toEqual(1000);
    expect(array).not.toEqual(array2);

  });
});