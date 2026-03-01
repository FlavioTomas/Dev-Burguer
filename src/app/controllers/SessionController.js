import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import authConfig from '../../config/auth.js';
import User from '../models/user.js';

class SessionController {
	async store(request, response) {
		const schema = Yup.object({
			email: Yup.string().email().required(),
			password: Yup.string().min(6).required(),
		});

		const isValid = await schema.isValid(request.body, { strict: true });

		const emailOrPasswordInvalid = () => {
			return response
				.status(400)
				.json({ error: 'Email or password incorrect!' });
		};

		if (!isValid) {
			emailOrPasswordInvalid();
		}

		const { email, password } = request.body;

		const existingUser = await User.findOne({
			where: {
				email,
			},
		});

		if (!existingUser) {
			emailOrPasswordInvalid();
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password_hash,
		);

		if (!isPasswordCorrect) {
			emailOrPasswordInvalid();
		}

		const token = jwt.sign(
			{
				id: existingUser.id,
				admin: existingUser.admin,
				name: existingUser.name
			},
			authConfig.secret,
			{
				expiresIn: authConfig.expiresIn,
			},
		);

		return response.status(200).json({
			id: existingUser.id,
			name: existingUser.name,
			email: existingUser.email,
			admin: existingUser.admin,
			token,
		});
	}
}

export default new SessionController();
