import mongoose from "mongoose";

const projectAdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
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
  techStacks: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true,
    trim: true
  },
  projectDescription: {
    type: String,
    trim: true
  },
  organizationName: {
    type: String,
    trim: true
  },
  organizationDescription: {
    type: String,
    trim: true
  },
  repositoryUrl: {
    type: String,
    trim: true
  },
  deploymentLink: {
    type: String,
    trim: true
  },
  expectedMentors: {
    type: Number,
    trim: true
  }
}, { timestamps: true });

const ProjectAdmin = mongoose.models.projectAdmin || mongoose.model("projectAdmin", projectAdminSchema);

export default ProjectAdmin;
