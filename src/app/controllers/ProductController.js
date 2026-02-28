import * as Yup from 'yup';
import category from '../models/category.js';
import Product from '../models/product.js'

class ProductController {
	async store(request, response) {
		const schema = Yup.object({
			name: Yup.string().required(),
			price: Yup.number().required(),
			category_id: Yup.number().required(),
			offer: Yup.boolean()
		});

		try {
			schema.validateSync(request.body, { abortEarly: false });
		} catch (err) {
			return response.status(400).json({ error: err.errors });
		}

		const { name, price, category_id, offer } = request.body;
		const { filename } = request.file;


		const newProduct = await Product.create({
			name,
			price,
			category_id,
			path: filename,
			offer
		})


		return response.status(201).json(newProduct);
	}


	async index(request, response) {
		const products = await Product.findAll({
			include: {
				model: category,
				as: 'category',
				attributes: ['id', 'name']
			}
		})

		console.log(request.userId)

		return response.status(200).json(products)
	}




}

export default new ProductController();
