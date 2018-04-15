class JobApplicationsController {
    constructor(data) {
        this.data = data;
    }
    async getAllJobApplications(value) {
        const jobApplications = await this.data.jobApplications.getById(value);
        return jobApplications;
    }
};

module.exports = JobApplicationsController;
