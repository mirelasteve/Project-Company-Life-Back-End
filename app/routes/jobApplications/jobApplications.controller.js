class JobApplicationsController {
    constructor(data) {
        this.data = data;
    }
    async getAll() {
        const jobApplications = await this.data.jobApplications.getAll();
        return jobApplications;
    }
    async getAllJobApplications(value) {
        const jobApplications = await this.data.jobApplications.getById(value);
        return jobApplications;
    }
    async getNumberOfJobsForUser(id) {
        const numberOfJobs = await this.data.jobApplications.getCount(id);
        return numberOfJobs;
    }
    async create(newObject) {
        const createdJobApplication =
        await this.data.jobApplications.create(newObject);
        return createdJobApplication;
    }
    async update(object, id) {
        const updatedJobApplication =
        await this.data.jobApplications.updateApplication(object, id);
        return updatedJobApplication;
    }
}

module.exports = JobApplicationsController;
