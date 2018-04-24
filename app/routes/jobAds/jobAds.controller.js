class JobAdsController {
    constructor(data) {
        this.data = data;
    }
    async getAllJobAds() {
        const jobAds = await this.data.jobAds.getAll();
        return jobAds;
    }
    async create(newObject) {
        const createdJobAd =
        await this.data.jobAds.create(newObject);
        return createdJobAd;
    }
    async update(editedObject, id) {
        const editedJobAd =
        await this.data.jobAds.update(editedObject, id);
        return editedJobAd;
    }
    async delete(id) {
        const deletedjobAd =
        await this.data.jobAds.delete(id);
        return deletedjobAd;
    }
}

module.exports = JobAdsController;
