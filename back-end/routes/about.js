const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: "Shritha Gundapuneni",
    about: "I'm a senior at NYU majoring in Computer Science and I am orignially from Delaware. In the future I hope to work in Cybersecurity or Product Management. ",
    hobbies: "I love going to new workout classes, trying new cafes, and spending time with my friends!",
    image: "selfie.jpg"
  });
});

module.exports = router;
