(function(exports) {
  function Job(result) {
    this._id = result.id;
    this._title = result.title;
    this._url = result.url;
    this._time = result.time;
  }

  Job.prototype.id = function() {
    return this._id;
  };

  Job.prototype.title = function() {
    return this._title;
  };

  Job.prototype.url = function() {
    return this._url;
  };

  Job.prototype.time = function() {
    return this._time;
  };

  exports.Job = Job;
})(this);
