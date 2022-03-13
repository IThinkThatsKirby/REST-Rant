const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/thaispice.jpg",
      creditLoc:"https://unsplash.com/@calumlewis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      creditName:"Calum Lewis"
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/catEating.jpg",
      creditLoc: "https://unsplash.com/@felicewoelke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      creditName: "Felice Wölke",
    },
  ];
  res.render("places/index", { places });
});

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router;
