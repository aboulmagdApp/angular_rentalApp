const { rentals, users } = require('./data');
const Rental = require('../models/rental');
const User = require('../models/user');

class FackeDB {
    async clean() {
        await Rental.deleteMany({});
        await User.deleteMany({});
    }

    async addData() {
        await Rental.create(rentals);
        await User.create(users);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = FackeDB;