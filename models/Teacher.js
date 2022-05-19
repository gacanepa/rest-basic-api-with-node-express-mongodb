const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
	},
	age: {
		required: true,
		type: Number,
	},
	isEnabled: {
		required: true,
		type: Boolean,
	},
	skills: {
		required: true,
		type: Array,
	},
	country: {
		required: true,
		type: String,
	},
});

// Relate the model with the teachers collection or create it in the database if not already present
module.exports = mongoose.model('Teacher', dataSchema);

