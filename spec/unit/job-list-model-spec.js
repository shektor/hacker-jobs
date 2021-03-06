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
        request: function(url, _) {
          expect(url).toBe(endPointQuery);
        }
      };

      var jobList = new JobList(api, endPointQuery);
      jobList.getRecentJobs();
    });
  });

  describe("getJob", function() {
    it("returns job object", function() {
      var endPointQuery = "jobstories.json";

      var job = { id: 1 };

      function JobMock() {}

      var api = {
        request: function(_, callback) {
          callback(job);
        }
      };

      var jobList = new JobList(api, endPointQuery, JobMock);
      jobList.getJob(job.id, function(result) {
        expect(result instanceof JobMock).toBe(true);
      });
    });

    it("job constructor is passed API result", function() {
      var endPointQuery = "jobstories.json";

      var job = { id: 1 };

      function JobMock(result) {
        this.id = result.id;
      }

      var api = {
        request: function(_, callback) {
          callback(job);
        }
      };

      var jobList = new JobList(api, endPointQuery, JobMock);
      jobList.getJob(job.id, function(result) {
        expect(result.id).toBe(job.id);
      });
    });

    it("calls api request with jobID query", function() {
      var endPointQuery = "jobstories.json";

      var job = { id: 1 };

      function JobMock(jobQuery) {
        this.jobQuery = jobQuery;
      }

      var api = {
        request: function(url, callback) {
          expect(url).toBe(jobQuery);
        }
      };

      var jobQuery = "item/1.json";

      var jobList = new JobList(api, endPointQuery, JobMock);
      jobList.getJob(1, function() {});
    });
  });
});
