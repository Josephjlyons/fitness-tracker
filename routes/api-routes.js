const router = require('express').Router();
const Workout = require('../models/workout');


router.get("/api/workouts", async (req, res) => {
    try {

        const workout = await Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
    } catch (err) {
        res.status(400).json(err);
    };
});


router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutRange = await Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
    } catch (err) {
        res.status(500).json(err)
    };
});


router.put('/api/workouts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const workoutUp = await Workout.updateOne(
            { id: id },
            {
                $push: {
                    exercises: { ...body }
                },
            }
        ).then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })

    } catch (err) {
        res.status(500).json(err)
    };
});


router.post('/api/workouts', async (req, res) => {
    try {
        const response = await Workout.create(req.body)
            .then((response) => {
                res.status(200).json(response);
            })
    } catch (err) {
        res.status(500).json(err)
    };
});



module.exports = router;