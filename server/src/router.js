import { createRouter as h3createRouter } from 'h3';
import NotFound from './errors/404';
import Forms from './service/forms';
import { getConfig } from './service/config.js';

export function createRouter(injection) {
	const router = h3createRouter();

	router.use(...Forms({ db: injection.db }));

	router.use('**', NotFound);

	return router;
}
