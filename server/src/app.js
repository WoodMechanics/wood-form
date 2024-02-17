import { createApp, toWebHandler } from 'h3';
import { createRouter } from './router';
import { setConfig } from './service/config.js';
import { getDB } from './service/db.js';

function initializeApp(injection) {
	const app = createApp();

	app.use(injection.router);

	return app;
}

export function fetchToApp(request, env) {
	setConfig(env);
	const db = getDB();
	const router = createRouter({ db });
	const app = initializeApp({ db, router });
	return toWebHandler(app)(request);
}
