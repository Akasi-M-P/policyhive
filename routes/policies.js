const express = require("express");
const router = express.Router();

const policies = [
  {
    id: 1,
    text: "Provide free internet access in public schools to enhance digital learning.",
    sector: "Education",
    username: "KwameA",
    date: "2025-08-01",
  },
  {
    id: 2,
    text: "Introduce subsidies for local farmers to access modern farming equipment.",
    sector: "Agriculture",
    username: "AmaB",
    date: "2025-08-02",
  },
  {
    id: 3,
    text: "Develop community tourism programs that involve local residents as guides and hosts.",
    sector: "Tourism",
    username: "KofiC",
    date: "2025-08-03",
  },
  {
    id: 4,
    text: "Establish nationwide recycling centers to promote environmental sustainability.",
    sector: "Environment",
    username: "AkuaD",
    date: "2025-08-04",
  },
  {
    id: 5,
    text: "Launch a healthcare outreach program to provide free checkups in rural areas.",
    sector: "Healthcare",
    username: "YawE",
    date: "2025-08-05",
  },
  {
    id: 6,
    text: "Create startup grants for young entrepreneurs in technology and innovation.",
    sector: "Technology",
    username: "EsiF",
    date: "2025-08-06",
  },
  {
    id: 7,
    text: "Introduce a public transportation card system to streamline urban mobility.",
    sector: "Transport",
    username: "KojoG",
    date: "2025-08-07",
  },
  {
    id: 8,
    text: "Offer scholarships for students pursuing renewable energy studies.",
    sector: "Energy",
    username: "AkosuaH",
    date: "2025-08-08",
  },
  {
    id: 9,
    text: "Mandate tree planting for all new housing and road construction projects.",
    sector: "Environment",
    username: "NanaI",
    date: "2025-08-09",
  },
  {
    id: 10,
    text: "Establish a national digital ID system for easier access to government services.",
    sector: "Governance",
    username: "AdwoaJ",
    date: "2025-08-10",
  },
];

// GET ALL POLICIES
router.get("/", (req, res) => {
  res.json({ success: true, data: policies });
});

// GET SINGLE POLICY
router.get("/:id", (req, res) => {
  const policy = policies.find((policy) => policy.id === +req.params.id);

  if (!policy) {
    return res
      .status(404)
      .json({ success: false, error: "Resource Not Found" });
  }
  res.json({ success: true, data: policy });
});

// Add a policy
router.post("/", (req, res) => {
  const policy = {
    id: policies.length + 1,
    text: req.body.text,
    sector: req.body.sector,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  policies.push(policy);

  res.json({ success: true, data: policy });
});

// Update/Edit a policy
router.put("/:id", (req, res) => {
  const policy = policies.find((policy) => policy.id === +req.params.id);

  if (!policy) {
    return res
      .status(404)
      .json({ success: false, error: "Resource Not Found" });
  }

  policy.text = req.body.text || policy.text;
  policy.sector = req.body.sector || policy.sector;

  res.json({ success: true, data: policy });
});

// Delete a policy
router.delete("/:id", (req, res) => {
  const policy = policies.find((policy) => policy.id === +req.params.id);

  if (!policy) {
    return res
      .status(404)
      .json({ success: false, error: "Resource Not Found" });
  }

  // policy.text = req.body.text || policy.text;
  // policy.sector = req.body.sector || policy.sector;

  const index = policies.indexOf(policy);

  policies.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
