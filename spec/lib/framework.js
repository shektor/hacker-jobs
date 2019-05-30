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
    }
  };
};
