class Data {
    constructor(Model) {
        this.Model = Model;
    }

    getAll() {
        return this.Model.findAll();
    }

    getByName(value) {
        return this.Model.findOne({
            where: {
                hidden: value,
            },
        });
    }

    getCount(id) {
        return this.Model.findAll({
            where: {
                userId: id,
            },
          });
    }

    getById(value) {
        return this.Model.findAll({
            where: {
                jobId: value,
            },
        });
    }

    create(newObject) {
        return this.Model.create(newObject);
    }

    update(object, id) {
        return this.Model.update(object, {
            where: {
                id,
            },
        });
    }

    delete(id) {
        this.Model.destroy({
            where: {
                id,
            },
        });
    }
}

module.exports = Data;