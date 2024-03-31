import { Hono } from 'hono';
import { form } from './forms.js';
// import { HTTPException } from 'hono/http-exception';

export const api = new Hono();

// api.use('*', async (c, next) => {
// 	const authHeader = c.req.header('Authorization');
//
// 	if (!authHeader) {
// 		throw new HTTPException(401, { message: 'Unauthorized' });
// 	}
//
// 	const getToken = (authHeader) => {
// 		if (authHeader.startsWith('Bearer ')) {
// 			return authHeader.substring(7, authHeader.length);
// 		} else {
// 			return null;
// 		}
// 	};
//
// 	const token = getToken(authHeader);
//
// 	if (!token) {
// 		throw new HTTPException(400, { message: 'Authorization error: Session is required' });
// 	}
//
// 	c.session = token;
//
// 	await next();
// });

api.route('/forms', form);
