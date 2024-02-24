import { Hono } from 'hono';
import { form } from './forms.js';

export const api = new Hono();

api.use('*', async (c, next) => {
	const session = c.req.header('Authorization');
	const token = session.split('Bearer')[1].trim();
	c.session = token;

	await next();
});

api.route('/forms', form);
