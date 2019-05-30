var describe = function(description, aFunction) {
  console.log(description);
  aFunction();
};

var it = function(message, aFunction) {
  describe(" " + message, aFunction);
};

var expect = function(value) {
  return matchers(value);
};

var matchers = function(expect) {
  return {
    toBe: function(assertion) {
      if (expect === assertion) {
        console.log("**pass**");
        return true;
      } else {
        console.warn("assertion does not equal expectation");
        return false;
      }
    },

    toMatchArray: function(assertion) {
      if (assertion.length !== expect.length) {
        console.warn("arrays are not of equal length");
        return false;
      }
      for (var i = 0; i < assertion.length; i++) {
        if (assertion[i] !== expect[i]) {
          console.warn("array elements are not equal");
          return false;
        }
      }
      console.log("**pass**");
      return true;
    }
  };
};
