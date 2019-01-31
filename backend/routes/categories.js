const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/categories/${req.params.id}`
    );
    // eslint-disable-next-line camelcase
    const {path_from_root} = response.data;
    const categories = path_from_root.map(category => category.name);
    res.json(categories);
  } catch (error) {
    console.log(error);
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  }
});

module.exports = router;