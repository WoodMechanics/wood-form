import { Hono } from 'hono';
import { createClient } from '../service/db.js';
import { HTTPException } from 'hono/http-exception';

export const auth = new Hono();

auth.post('/signup', async (c) => {
	const db = createClient();

	const body = await c.req.json();
	const { email, password } = body;
	const { data, error } = await db.auth.signUp({
		email,
		password,
	});

	if (error) {
		throw new HTTPException(404, error);
	}
	console.log(data, error);
	return c.json({ accessToken: data.session.access_token });
});

auth.post('/signin', async (c) => {
	const db = createClient();

	const body = await c.req.json();
	const { email, password } = body;
	const { data, error } = await db.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		throw new HTTPException(404, error);
	}
	console.log(data, error);
	return c.json({ accessToken: data.session.access_token, refreshToken: data.session.refresh_token });
});
