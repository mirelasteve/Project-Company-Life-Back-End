class AuthController {
    constructor(data) {
        this.data = data;
    }
    async createUser(newObject) {
        const createdUser =
        await this.data.users.create(newObject);
        return createdUser;
    }
    async findUser(email) {
        const user = await this.data.users.getUserByEmail(email);
        return user;
    }
}

module.exports = AuthController;
