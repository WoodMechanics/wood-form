import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { getConfig } from './config.js';

let db;
export const createClient = (token) => {
	if (db) return db;
	const config = getConfig();
	const headers = token ? { global: { headers: { Authorization: `Bearer ${token}` } } } : {};
	return createSupabaseClient(config['SUPABASE_URL'], config['SUPABASE_KEY'], headers);
};
