import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { createClient } from '../service/db.js';

export const form = new Hono();

form.get('/', async (c) => {
	const db = createClient(c.session);

	const { data, error } = await db.from('forms').select();
	if (error) {
		throw new HTTPException(401, { message: formError });
	}
	return c.json(data);
});
form.post('/', async (c) => {
	const body = await c.req.json();
	return c.json(body);
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
