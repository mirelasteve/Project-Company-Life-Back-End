class JobAdsController {
    constructor(data) {
        this.data = data;
    }
    async getAllJobAds() {
        const jobAds = await this.data.jobAds.getAll();
        return jobAds;
    }
}

module.exports = JobAdsController;
