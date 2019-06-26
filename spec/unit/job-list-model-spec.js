describe("JobList", function() {
  describe("#getRecentJobs", function() {
    it("returns a list of job IDs", function() {
      var api = {
        request: function(_, callback) {
          callback([1,2,3])
        }
      }

      var jobList = new JobList(api);
      jobList.getRecentJobs(function(result) {
        expect(result).toMatchArray([1,2,3])
      })
    });

    it("calls api request on jobstories.json", function() {
      var endPointQuery = "jobstories.json";

      var api = {
        request: function(endPointQuery, callback) {
          callback(endPointQuery)
        }
      }

      var jobList = new JobList(api, endPointQuery);
      jobList.getRecentJobs(function(result) {
        expect(result).toBe(endPointQuery)
      })
    });
  });
});
