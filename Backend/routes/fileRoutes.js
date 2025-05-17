// backend/routes/fileRoutes.js
const express = require('express');
const multer = require('multer');
const FileHistory = require('../models/FileHistory');

const router = express.Router();

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // You can configure the destination here
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Route to handle file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  const { userId } = req.body; // Assuming you are sending userId from frontend

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required.' });
  }

  try {
    const file = req.file;
    const currentDate = new Date();

    // File details object
    const newFile = {
      name: file.filename,
      uploadedAt: currentDate,
    };

    // Find the user's file history
    let userHistory = await FileHistory.findOne({ userId });

    if (userHistory) {
      // If history exists, update it by adding the new file
      if (userHistory.files.length >= 5) {
        return res.status(400).json({ message: 'Maximum of 5 files allowed.' });
      }
      userHistory.files.push(newFile);
      await userHistory.save();
    } else {
      // If no history, create a new entry
      userHistory = new FileHistory({ userId, files: [newFile] });
      await userHistory.save();
    }

    res.status(200).json({ message: 'File uploaded successfully.', file: newFile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while uploading file.' });
  }
});

// Route to fetch file history
router.get('/history/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const userHistory = await FileHistory.findOne({ userId });
    if (!userHistory) {
      return res.status(404).json({ message: 'No history found for this user.' });
    }

    res.status(200).json(userHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching file history.' });
  }
});

// Route to delete a file from history
router.delete('/delete/:userId/:fileId', async (req, res) => {
  const { userId, fileId } = req.params;

  try {
    const userHistory = await FileHistory.findOne({ userId });
    if (!userHistory) {
      return res.status(404).json({ message: 'No history found for this user.' });
    }

    // Find and remove the file
    userHistory.files = userHistory.files.filter(file => file._id.toString() !== fileId);
    await userHistory.save();

    res.status(200).json({ message: 'File deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while deleting file.' });
  }
});

module.exports = router;
