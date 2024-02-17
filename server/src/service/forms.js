import { createError, createRouter, eventHandler } from 'h3';
import { nestedRoute } from '../lib/nested_route';

export default function (injection) {
	const db = injection.db;

	const formRouter = createRouter();

	formRouter.get(
		'/',
		eventHandler(async () => {
			const { data: forms, error: formError } = await db.from('forms').select();
			console.log(formError);
			if (formError) {
				throw createError({
					status: 400,
					message: 'Error at request to forms data',
				});
			}

			return Response.json(forms);
		}),
	);

	return nestedRoute('/api/forms', formRouter);
}

// TODO

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
