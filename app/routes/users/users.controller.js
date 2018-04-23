class UsersController {
    constructor(data) {
        this.data = data;
    }
    async getAllUsers() {
        const allUsers = await this.data.users.getAll();
        delete allUsers.password;
        return allUsers;
    }
}

module.exports = UsersController;
