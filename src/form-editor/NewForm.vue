<script setup>
import { onMounted } from 'vue'
import router from '../routes.js'

function createNewForm() {
	const formId = (Date.now() * 1000).toString(32)
	router.push(`/form/${formId}/edit`)
}

onMounted(() => {
	createNewForm()
})
</script>

// button create // new-form (id) // form/{id}/edit
