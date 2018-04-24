class LinksController {
    constructor(data) {
        this.data = data;
    }
    async getAllLinks() {
        const allLinks = await this.data.links.getAll();
        return allLinks;
    }
    async getAllLinksForHomePage(value) {
        const allLinksForHomePage = await this.data.links.getByName(value);
        return allLinksForHomePage;
    }
    async create(newObject) {
        const createdLinkDetail =
        await this.data.links.create(newObject);
        return createdLinkDetail;
    }
    async update(editedObject, id) {
        const editedLinkDetails =
        await this.data.links.update(editedObject, id);
        return editedLinkDetails;
    }
    async delete(id) {
        const deletedLinkDetails =
        await this.data.links.delete(id);
        return deletedLinkDetails;
    }
}

module.exports = LinksController;
