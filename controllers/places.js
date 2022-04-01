const router = require("express").Router();
const mongoose = require('mongoose');
const { useCallback } = require("react");
const db = require("../models");

// const agg =  db.Comment.aggregate([
// 	{$group:{_id: null,avg:{$avg: '$stars'}}}]).then(value => {
// 	console.log(value)
// 	return value 
// })



router.get("/", (req, res) => {
	db.Place.find()
		.then((places) => {
			res.render("places/index", { places });
		})
		.catch((err) => {
			console.log(err);
			res.render("error404");
		});
});

router.post("/", (req, res) => {
	db.Place.create(req.body)
		.then(() => {
			res.redirect("/places");
		})
		.catch((err) => {
			if (err && err.name == "ValidationError") {
				let message = "Validation Error: ";
				for (var field in err.errors) {
					message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}`;
				}
				res.render("places/new", { message });
			} else {
				res.render("error404");
			}
		});
});
router.get("/new", (req, res) => {
	res.render("places/new");
});

router.get("/:id", (req, res) => {
	db.Place.findOne({ _id: req.params.id })
		.populate('comments')
		.then((place) => {
			// console.log(place.comments)
			res.render("places/show", place);
		})
		.catch((err) => {
			console.log(req);
			console.log("err", err);
			res.render("error404");
		});
});

router.put("/:id", (req, res) => {
	res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
	res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
	res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
	res.send("GET /places/:id/rant stub");
});

router.post('/:id/comment', (req, res) => {
	console.log(req.body)
	db.Place.findById(req.params.id)
		.then((place) => {
			db.Comment.create(req.body)
				.then(comment => {
					place.comments.push(comment.id)
					place.save()
						.then(() => {
							res.redirect(`/places/${req.params.id}`)
						})
					//Todo: Save comment id to place
				})
				.catch(err => {
					res.render('error404')
				})
		})
		.catch(err => {
			res.render('error404')
		})
})

router.delete("/:id/rant/:rantId", (req, res) => {
	res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
