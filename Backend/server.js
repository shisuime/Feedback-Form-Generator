const express = require("express");
const mongoose = require("mongoose");
const Form = require("./models/Form");
const cors=require("cors")

const app = express();

// Parse JSON request body
app.use(cors())
app.use(express.json());

// Connect to MongoDB Atlas
console.log("Before connect");

mongoose
  .connect(
    "mongodb+srv://gunarnabsinha17_db_user:kKgte5opZh3Xyey9@cluster0.rii01s0.mongodb.net/FormBuilder?appName=Cluster0",
    {
      serverSelectionTimeoutMS: 5000,
    }
  )
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB Error");
    console.error(err);
  });

console.log("After connect");

// ===========================================
// Root
// ===========================================

app.get("/", (req, res) => {
  res.send("Hello my first API");
});

// ===========================================
// GET ALL FORMS
// ===========================================

app.get("/forms", async (req, res) => {
  try {
    const forms = await Form.find();

    res.json(forms);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Unable to fetch forms",
      error: err.message,
    });
  }
});

// ===========================================
// GET FORM BY ID
// ===========================================

app.get("/forms/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({
        message: "Form not found",
      });
    }

    res.json(form);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Unable to fetch form",
      error: err.message,
    });
  }
});

// ===========================================
// CREATE FORM
// ===========================================

app.post("/forms", async (req, res) => {
  try {
    const { name } = req.body;

    const form = await Form.create({
      name,
    });

    res.status(201).json({
      id: form._id,
      name: form.name,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Unable to create form",
      error: err.message,
    });
  }
});

// ===========================================
// UPDATE FORM
// ===========================================

app.put("/forms/:id", async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedForm) {
      return res.status(404).json({
        message: "Form not found",
      });
    }

    res.json(updatedForm);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Unable to update form",
      error: err.message,
    });
  }
});

// ===========================================
// DELETE FORM
// ===========================================

app.delete("/forms/:id", async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);

    if (!deletedForm) {
      return res.status(404).json({
        message: "Form not found",
      });
    }

    res.json({
      message: "Form deleted successfully.",
      id: deletedForm._id,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Unable to delete form",
      error: err.message,
    });
  }
});


// ===========================================
// Start Server
// ===========================================

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});