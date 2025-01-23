const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { from_name, from_email, subject, message } = req.body;

    const newContact = new Contact({
      name: from_name,
      email: from_email,
      subject: subject,
      message: message
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message
    });
  }
};