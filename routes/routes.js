// Initialize router
const express = require('express');
const router = express.Router();

// Import the Teacher model
const Teacher = require('../models/Teacher');

// GET (all records)
router.get('/get-all', async (req, res) => {
	try {
		const data = await Teacher.find();
		res.send(data);
	}
	catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// GET (one record)
router.get('/get-record/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const result = await Teacher.findOne({_id: id});
		res.send(result);
	}
	catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// POST (add new record)
router.post('/post', async (req, res) => {
	const { name, age, isEnabled, skills } = req.body;
	const data = new Teacher({
		name,
		age,
		isEnabled,
		skills,
		country,
	});
	try {
		const savedData = await data.save();
		res.send(savedData);
	}
	catch (error) {
		res.status(400).json({ message: error.message });
	}		
});

// PATCH (update record)
router.patch('/update/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const updatedData = req.body;
		let result = await Teacher.findOne({_id: id});
		result.save({
			...result,
			...updatedData
		});
		res.send(result);	
	}
	catch (error) {
		res.status(400).json({ message: error.message });
	}
});		

module.exports = router;
