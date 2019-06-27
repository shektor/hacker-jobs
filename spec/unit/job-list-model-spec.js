describe("JobList", function() {
  describe("#getRecentJobs", function() {
    it("returns a list of job IDs", function() {
      var api = {
        request: function(_, callback) {
          callback([1, 2, 3]);
        }
      };

      var jobList = new JobList(api);
      jobList.getRecentJobs(function(result) {
        expect(result).toMatchArray([1, 2, 3]);
      });
    });

    it("calls api request on jobstories.json", function() {
      var endPointQuery = "jobstories.json";

      var api = {
        request: function(endPointQuery, callback) {
          callback(endPointQuery);
        }
      };

      var jobList = new JobList(api, endPointQuery);
      jobList.getRecentJobs(function(result) {
        expect(result).toBe(endPointQuery);
      });
    });
  });

  describe("getJob", function() {
    it("returns job object", function() {
      var endPointQuery = "jobstories.json";

      var job = { id: 1 };

      function JobMock() {}

      var api = {
        request: function(_, callback) {
          callback(new JobMock());
        }
      };

      var jobList = new JobList(api, endPointQuery, JobMock);
      jobList.getJob(job.id, function(result) {
        expect(result instanceof JobMock).toBe(true);
      });
    });

    it("calls api request with jobID query", function() {
      var endPointQuery = "jobstories.json";

      var job = { id: 1 };

      function JobMock(jobQuery) {
        this.jobQuery = jobQuery;
      }

      var api = {
        request: function(request, callback) {
          callback(request);
        }
      };

      var jobQuery = ["item/", job.id, ".json"].join("");

      var jobList = new JobList(api, endPointQuery, JobMock);
      jobList.getJob(job.id, function(result) {
        expect(result.jobQuery).toBe(jobQuery);
      });
    });
  });
});
