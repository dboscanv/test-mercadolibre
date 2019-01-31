const express = require("express");
const axios = require("axios");
const { mapItem, mapResponse } = require("../utils");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
    );
    const categories = response.data.filters.find(
      filter => filter.id === "category"
    );
    res.json(mapResponse(response.data.results, categories));
  } catch (error) {
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  }
});

router.get("/:id", async (req, res) => {
  try {
    const item = await axios.get(
      `https://api.mercadolibre.com/items/${req.params.id}`
    );
    const description = await axios.get(
      `https://api.mercadolibre.com/items/${req.params.id}/description`
    );
    const response = mapItem(item.data);
    response.description = description.data.plain_text; // Ver formato del text
    res.json(response);
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
