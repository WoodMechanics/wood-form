import { Hono } from 'hono';
import { api } from './routes/api.js';
import { auth } from './routes/auth.js';
import { setConfig } from './service/config.js';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', async (c, next) => {
	setConfig(c.env);
	auth.use('*');
	await next();
});

app.use(
	'*',
	cors({
		origin: 'http://localhost:5175',
		allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
		allowMethods: ['POST', 'GET', 'OPTIONS', 'DELETE'],
		maxAge: 600,
		credentials: true,
	}),
);

app.route('/api', api);
app.route('/auth', auth);

export default app;
