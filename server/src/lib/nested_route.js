import { useBase } from 'h3';

export function nestedRoute(path, router) {
	const handler = useBase(path, router.handler);
	return [path, handler];
}

export function plainRoute(path, router) {
	return [path, router.handler];
}
