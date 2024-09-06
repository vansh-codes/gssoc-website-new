import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Others'], 
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"]
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  collegeOrOffice: {
    type: String,
    required: true,
    trim: true
  },
  referralCode: {
    type: String,
    trim: true
  },
  gitHubProfileUrl: {
    type: String,
    required: true,
    trim: true
  },
  linkedInProfileUrl: {
    type: String,
    trim: true
  },
  discordUsername: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  year: {
    type: String,
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'],
    required: true
  },
  fieldOfStudy: {
    type: String,
    trim: true
  },
  techStacks: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true });

const Mentor = mongoose.models.mentor || mongoose.model("mentor", mentorSchema);

export default Mentor;
