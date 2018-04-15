class ContactDetailsController {
    constructor(data) {
        this.data = data;
    }
    async getAllContactDetails() {
        const contactDetails = await this.data.contactDetails.getAll();
        return contactDetails;
    }
}

module.exports = ContactDetailsController;
