(function(exports) {
  function JobList(api, endPointQuery, job = Job) {
    this._api = api;
    this._endPointQuery = endPointQuery;
    this._job = job;
  }

  JobList.prototype.getRecentJobs = function(callback) {
    this._api.request(this._endPointQuery, function(result) {
      callback(result);
    });
  };

  JobList.prototype.getJob = function(jobID, callback) {
    var jobQuery = ["item/", jobID, ".json"].join("");

    var self = this;
    this._api.request(jobQuery, function(result) {
      var job = new self._job(result);
      callback(job);
    });
  };

  exports.JobList = JobList;
})(this);
