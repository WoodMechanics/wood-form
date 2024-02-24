import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { createClient } from '../service/db.js';

export const form = new Hono();

form.get('/', async (c) => {
	const db = createClient(c.session);

	const { data, error } = await db.from('forms').select();
	if (error) {
		throw new HTTPException(401, error);
	}
	return c.json(data);
});

form.post('/', async (c) => {
	const db = createClient(c.session);

	const body = await c.req.json();
	const { title } = body;

	const { data, error } = await db.from('forms').insert([{ title }]).select();

	if (error) {
		throw new HTTPException(401, error);
	}

	const remapFields = (item) => {
		item['createdAt'] = item.created_at;
		delete item.created_at;
		item['formId'] = item.form_id;
		delete item.form_id;
		return item;
	};

	const remapedData = data.map(remapFields);

	return c.json(remapedData);
});
// form.post('/', async (c) => {});

// POST /api/forms
// { "title": "New Form Title", "description": "Form Description" }
// { "id": "form_id", "title": "New Form Title", "description": "Form Description", "createdAt": "timestamp" }

// Get Single Form Details
// GET /api/forms/{formId}
// { "id": "form_id", "title": "Form Title", "description": "Form Description", "questions": [{ "questionId": "question_id", "questionText": "What is your name?", "questionType": "shortText", ... }], "createdAt": "timestamp" }

// Update Form
// PUT /api/forms/{formId}
// { "title": "Updated Form Title", "description": "Updated Form Description", "questions": [{ "questionId": "question_id", "questionText": "Updated Question?", "questionType": "multipleChoice", ... }] }
// { "id": "form_id", "title": "Updated Form Title", "description": "Updated Form Description", "questions": [{ "questionId": "question_id", "questionText": "Updated Question?", "questionType": "multipleChoice", ... }], "updatedAt": "timestamp" }

// Delete Form
// -
// { "message": "Form deleted successfully" }
