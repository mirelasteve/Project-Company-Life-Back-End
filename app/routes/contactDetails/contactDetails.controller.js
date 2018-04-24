class ContactDetailsController {
    constructor(data) {
        this.data = data;
    }
    async getAllContactDetails() {
        const contactDetails = await this.data.contactDetails.getAll();
        return contactDetails;
    }
    async create(newObject) {
        const createdContactsDetail =
        await this.data.contactDetails.create(newObject);
        return createdContactsDetail;
    }
    async update(editedObject, id) {
        const editedContactsDetails =
        await this.data.contactDetails.update(editedObject, id);
        return editedContactsDetails;
    }
    async delete(id) {
        const deletedContactsDetails =
        await this.data.contactDetails.delete(id);
        return deletedContactsDetails;
    }
}

module.exports = ContactDetailsController;
