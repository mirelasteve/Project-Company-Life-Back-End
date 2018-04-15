class JobTypesController {
    constructor(data) {
        this.data = data;
    }
    async getAllJobTypes() {
        const jobTypes = await this.data.jobTypes.getAll();
        return jobTypes;
    }
}

module.exports = JobTypesController;
