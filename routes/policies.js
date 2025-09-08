const express = require("express");
const router = express.Router();

const Policy = require("../models/Policy");

// GET ALL POLICIES
router.get("/", async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json({ success: true, data: policies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// GET SINGLE POLICY
router.get("/:id", async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    res.json({ success: true, data: policy });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Add a policy
router.post("/", async (req, res) => {
  const policy = new Policy({
    text: req.body.text,
    sector: req.body.sector,
    username: req.body.username,
  });

  try {
    const savedPolicy = await policy.save();
    res.json({ success: true, data: savedPolicy });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Update/Edit a policy
router.put("/:id", async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);

    // When usernames match
    if (policy.username === req.body.username) {
      const updatedPolicy = await Policy.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            sector: req.body.sector,
          },
        },
        { new: true }
      );
      return res.json({ success: true, data: updatedPolicy });
    }

    // When usernames do not match
    res.status(403).json({
      success: false,
      error: "Sorry, You are not authorized to update this resource",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Delete a policy
router.delete("/:id", async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);

    // When usernames match
    if (policy.username === req.body.username) {
      await Policy.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }

    // When usernames do not match
    res.status(403).json({
      success: false,
      error: "Sorry, You are not authorized to delete this resource",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
