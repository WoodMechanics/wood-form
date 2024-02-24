import { Hono } from 'hono';
import { api } from './routes/api.js';
import { auth } from './routes/auth.js';
import { setConfig } from './service/config.js';

const app = new Hono();

app.use('*', async (c, next) => {
	setConfig(c.env);
	await next();
});

app.route('/api', api);
app.route('/auth', auth);

export default app;
