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

module.exports = mongoose.model('Teacher', dataSchema);

