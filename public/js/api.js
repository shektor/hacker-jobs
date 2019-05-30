(function(exports) {
  function API(endpoint) {
    this.endpoint = endpoint;
  }

  API.prototype.request = function(query, callback) {
    var request = new XMLHttpRequest();
    var endpointQuery = [this.endpoint, query].join("");

    request.open("GET", endpointQuery, true);

    var self = this;
    request.onload = function() {
      var result = JSON.parse(this.response);

      if (self._isRequestSuccessful(request.status, endpointQuery)) {
        callback(result);
      }
    };
    request.send();
  };

  API.prototype._isRequestSuccessful = function(status, endpointQuery) {
    if (status >= 200 && status < 400) {
      return true;
    } else {
      console.log(["Request Error -", endpointQuery].join(""));
    }
  };

  exports.API = API;
})(this);
