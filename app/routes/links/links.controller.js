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
}

module.exports = LinksController;
