describe("describe", function() {
  it("executes a callback function", function() {
    var executes = 0;
    var callback = function() {
      executes += 1;
    };
    var actual = describe("*testing describe*", callback);
    expect(executes).toBe(1);
  });
});

describe("it", function() {
  it("executes a describe function", function() {
    var executes = 0;
    var describe = function() {
      executes += 1;
    };
    var actual = it("*testing it*", describe);
    expect(executes).toBe(1);
  });
});

describe("expect", function() {
  it("returns an object with toBe function", function() {
    var actual = expect(true);

    expect(typeof actual).toBe("object");
    expect(typeof actual.toBe).toBe("function");
  });
});

describe("matchers", function() {
  describe("toBe", function() {
    it("returns true if expect and assertion are equal", function() {
      var test = matchers(1).toBe(1);
      expect(test).toBe(true);
    });
    it("returns false if expect and assertion are not equal", function() {
      var test = matchers(2).toBe(1);
      expect(test).toBe(false);
    });
  });
});
