import { createClient } from '@supabase/supabase-js';
import { getConfig } from './config.js';

const initializeDB = () => {
	const config = getConfig();

	return createClient(config['SUPABASE_URL'], config['SUPABASE_KEY']);
};

export const getDB = () => {
	return initializeDB();
};
