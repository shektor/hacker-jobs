describe("API", function() {
  describe("#request", function() {
    it("returns result to callback", function() {
      var save = window.XMLHttpRequest;

      window.XMLHttpRequest = function() {
        return {
          status: 200,
          response: JSON.stringify("called"),
          open: function() {},
          onload: {},
          send: function() {
            this.onload();
          }
        };
      };

      var api = new API("endpoint");

      api.request("query", function(result) {
        expect(result).toBe("called");
      });

      window.XMLHttpRequest = save;
    });

    it("will GET endpoint/query URL", function() {
      var save = window.XMLHttpRequest;

      window.XMLHttpRequest = function() {
        return {
          status: 200,
          response: JSON.stringify("called"),
          open: function(request, url, async) {
            openSpy = [request, url, async];
          },
          onload: {},
          send: function() {
            this.onload();
          }
        };
      };

      var openSpy;

      var api = new API("endpoint");

      api.request("query", function(result) {
        expect(openSpy).toMatchArray(["GET", "endpointquery", true]);
      });

      window.XMLHttpRequest = save;
    });
  });
});
