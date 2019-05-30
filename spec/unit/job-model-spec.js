describe("Job", function() {
  var result = {
    id: 19938143,
    title: "jobsite is hiring",
    url: "www.jobsite.com",
    time: 1558089065
  };

  var job = new Job(result);

  describe("#id", function() {
    it("returns job id", function() {
      expect(job.id()).toBe(result.id);
    });
  });

  describe("#title", function() {
    it("returns job post title", function() {
      expect(job.title()).toBe(result.title);
    });
  });

  describe("#url", function() {
    it("returns job url link", function() {
      expect(job.url()).toBe(result.url);
    });
  });

  describe("#time", function() {
    it("returns job post time", function() {
      expect(job.time()).toBe(result.time);
    });
  });
});
