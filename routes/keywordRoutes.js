// Import the required modules
const express = require("express")
const router = express.Router();
const {keyword,allKeyword}=require("../controller/keywordController")
// Route for user login
router.post("/keyword",keyword);
router.get("/allKeyword",allKeyword);
// Export the router for use in the main application
module.exports = router