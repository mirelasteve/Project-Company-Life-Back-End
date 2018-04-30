class UsersController {
    constructor(data) {
        this.data = data;
    }
    async getAllUsers() {
        const allUsers = await this.data.users.getAll();
        delete allUsers.password;
        return allUsers;
    }
    async getEmail(email) {
        const userData = await this.data.users.getByEmail(email);
        return userData;
    }
}

module.exports = UsersController;