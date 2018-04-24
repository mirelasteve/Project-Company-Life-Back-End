class JobApplicationsController {
    constructor(data) {
        this.data = data;
    }
    async getAllJobApplications(value) {
        const jobApplications = await this.data.jobApplications.getById(value);
        return jobApplications;
    }
    async getNumberOfJobsForUser(id) {
        const numberOfJobs = await this.data.jobApplications.getCount(id);
        return numberOfJobs;
    }
}

module.exports = JobApplicationsController;
