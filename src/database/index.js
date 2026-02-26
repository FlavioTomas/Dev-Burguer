import { Sequelize } from 'sequelize';
import category from '../app/models/category.js';
import product from '../app/models/product.js';
import User from '../app/models/user.js';
import databaseConfig from '../config/database.cjs';


const models = [User, product, category];

class Database {
	constructor() {
		this.init();
	}

	init() {
		this.connection = new Sequelize(databaseConfig);
		models.map((model) => model.init(this.connection));
	}
}

export default new Database();
