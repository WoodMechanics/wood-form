import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { createClient } from '../service/db.js';

export const form = new Hono();

form.get('/', async (c) => {
	const db = createClient();

	const { data, error } = await db.from('forms').select();
	if (error) {
		throw new HTTPException(400, error);
	}
	return c.json(data);
});

form.post('/', async (c) => {
	const db = createClient(c.session);

	const body = await c.req.json();
	const { title } = body;

	if (!title) {
		throw new HTTPException(400, { message: 'required field [title] is missing' });
	}

	const { data, error } = await db.from('forms').insert([{ title }]).select();

	if (error) {
		throw new HTTPException(400, error);
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

form.delete('/', async (c) => {
	const db = createClient(c.session);

	const body = await c.req.json();
	const { id } = body;

	if (!id) {
		throw new HTTPException(400, { message: 'required field [id] is missing' });
	}

	const { error } = await db.from('forms').delete().eq('form_id', id);

	if (error) {
		throw new HTTPException(400, error);
	}

	return c.json({ message: `Form deleted successfully` });
});

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
