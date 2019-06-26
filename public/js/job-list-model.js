(function(exports) {
  function JobList(api, endPointQuery) {
    this._api = api;
    this._endPointQuery = endPointQuery;
  }

  JobList.prototype.getRecentJobs = function(callback) {
    this._api.request(this._endPointQuery, function(result) {
      callback(result);
    });
  };

  exports.JobList = JobList;
})(this);
