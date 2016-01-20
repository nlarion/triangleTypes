describe("triangleType", function(){
  it("is not a triangle if the sum of 2 sides is less than or equal to the length of the third side", function(){
    expect(triangleType([1, 2, 4])).to.equal(false);
  });

  it("is equilateral if all sides are equal", function(){
    expect(triangleType([2, 2, 2])).to.equal("equilateral");
  });

  it("is isosceles if two sides are equal", function(){
    expect(triangleType([2, 2, 3])).to.equal("isosceles");
  });

  it("is scalene if no sides are equal", function(){
    expect(triangleType([13, 9, 14])).to.equal("scalene");
  });

  it("is false if any side is blank", function(){
    expect(triangleType(["", 9, 14])).to.equal(false);
  });

  it("is false if any side is not a integer", function(){
    expect(triangleType(["hh", 9, 14])).to.equal(false);
  });
});

describe("isTriangle", function(){
  it("is true if 3 inputs equals a triangle.", function(){
    expect(isTriangle([14, 13, 9])).to.equal(true);
  });
});

describe("isValidInput", function(){
  it("is false if at least 1 input is not a number", function(){
    expect(isValidInput([13, 9, "g"])).to.equal(false);
  });

  it("is false if at least 1 input is blank", function(){
    expect(isValidInput([13, 9, ""])).to.equal(false);
  });
});