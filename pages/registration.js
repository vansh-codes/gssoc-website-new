import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Registration = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'email' && !validateEmail(value)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address.',
      });
    } else {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateEmail(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post('/api/registration', { role, ...formData });
      setShowSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error registering. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderForm = () => {
    switch (role) {
      case 'CA':
        return (
          <>
            <InputField label="Name" name="name" handleChange={handleInputChange} error={errors.name} />
            <InputField label="Gender" name="gender" handleChange={handleInputChange} error={errors.gender} />
            <InputField label="Email" name="email" handleChange={handleInputChange} error={errors.email} />
            <InputField label="Phone Number" name="phoneNumber" handleChange={handleInputChange} error={errors.phoneNumber} />
            <InputField label="College/Office Name" name="collegeOrOffice" handleChange={handleInputChange} error={errors.collegeOrOffice} />
            <InputField label="LinkedIn Profile URL" name="linkedInProfileUrl" handleChange={handleInputChange} error={errors.linkedInProfileUrl} />
            <InputField label="Discord Username" name="discordUsername" handleChange={handleInputChange} error={errors.discordUsername} />
            <InputField label="Country" name="country" handleChange={handleInputChange} error={errors.country} />
            <InputField label="Experience as CA" name="experienceAsCA" handleChange={handleInputChange} error={errors.experienceAsCA} />
            <TextAreaField label="Reason" name="reason" handleChange={handleInputChange} error={errors.reason} />
          </>
        );
      case 'Contributor':
        return (
          <>
            <InputField label="Name" name="name" handleChange={handleInputChange} error={errors.name} />
            <InputField label="Gender" name="gender" handleChange={handleInputChange} error={errors.gender} />
            <InputField label="Email" name="email" handleChange={handleInputChange} error={errors.email} />
            <InputField label="Phone Number" name="phoneNumber" handleChange={handleInputChange} error={errors.phoneNumber} />
            <InputField label="College/Office Name" name="collegeOrOffice" handleChange={handleInputChange} error={errors.collegeOrOffice} />
            <InputField label="GitHub Profile URL" name="gitHubProfileUrl" handleChange={handleInputChange} error={errors.gitHubProfileUrl} />
            <InputField label="Discord Username" name="discordUsername" handleChange={handleInputChange} error={errors.discordUsername} />
            <InputField label="Country" name="country" handleChange={handleInputChange} error={errors.country} />
            <TextAreaField label="Reason" name="reason" handleChange={handleInputChange} error={errors.reason} />
          </>
        );
      case 'Mentor':
        return (
          <>
            <InputField label="Name" name="name" handleChange={handleInputChange} error={errors.name} />
            <InputField label="Gender" name="gender" handleChange={handleInputChange} error={errors.gender} />
            <InputField label="Email" name="email" handleChange={handleInputChange} error={errors.email} />
            <InputField label="Phone Number" name="phoneNumber" handleChange={handleInputChange} error={errors.phoneNumber} />
            <InputField label="College" name="college" handleChange={handleInputChange} error={errors.college} />
            <InputField label="GitHub Profile URL" name="gitHubProfileUrl" handleChange={handleInputChange} error={errors.gitHubProfileUrl} />
            <InputField label="Discord Username" name="discordUsername" handleChange={handleInputChange} error={errors.discordUsername} />
            <InputField label="Country" name="country" handleChange={handleInputChange} error={errors.country} />
            <InputField label="Address" name="address" handleChange={handleInputChange} error={errors.address} />
            <TextAreaField label="Tech Stacks" name="techStacks" handleChange={handleInputChange} error={errors.techStacks} />
            <TextAreaField label="Reason" name="reason" handleChange={handleInputChange} error={errors.reason} />
          </>
        );
      case 'ProjectAdmin':
        return (
          <>
            <InputField label="Name" name="name" handleChange={handleInputChange} error={errors.name} />
            <InputField label="Gender" name="gender" handleChange={handleInputChange} error={errors.gender} />
            <InputField label="Email" name="email" handleChange={handleInputChange} error={errors.email} />
            <InputField label="Phone Number" name="phoneNumber" handleChange={handleInputChange} error={errors.phoneNumber} />
            <InputField label="GitHub Profile URL" name="gitHubProfileUrl" handleChange={handleInputChange} error={errors.gitHubProfileUrl} />
            <InputField label="Discord Username" name="discordUsername" handleChange={handleInputChange} error={errors.discordUsername} />
            <InputField label="Country" name="country" handleChange={handleInputChange} error={errors.country} />
            <InputField label="Address" name="address" handleChange={handleInputChange} error={errors.address} />
            <TextAreaField label="Tech Stacks" name="techStacks" handleChange={handleInputChange} error={errors.techStacks} />
            <TextAreaField label="Project Name" name="projectName" handleChange={handleInputChange} error={errors.projectName} />
            <TextAreaField label="Project Description" name="projectDescription" handleChange={handleInputChange} error={errors.projectDescription} />
            <InputField label="Organization Name" name="organizationName" handleChange={handleInputChange} error={errors.organizationName} />
            <TextAreaField label="Organization Description" name="organizationDescription" handleChange={handleInputChange} error={errors.organizationDescription} />
            <InputField label="Repository URL" name="repositoryUrl" handleChange={handleInputChange} error={errors.repositoryUrl} />
            <InputField label="Deployment Link" name="deploymentLink" handleChange={handleInputChange} error={errors.deploymentLink} />
            <InputField label="Expected Number of Mentors/Reviewers" name="expectedMentors" handleChange={handleInputChange} error={errors.expectedMentors} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Select Role</label>
            <select
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleRoleChange}
              value={role}
            >
              <option value="" disabled>Select your role</option>
              <option value="CA">CA (Campus Ambassador)</option>
              <option value="Contributor">Contributor</option>
              <option value="Mentor">Mentor</option>
              <option value="ProjectAdmin">Project Admin</option>
            </select>
          </div>
          {renderForm()}
          <div className="mt-6">
            <button
              type="submit"
              className={`w-full bg-[#f57d33] text-white py-2 px-4 rounded-lg shadow hover:bg-[#F26611] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-35">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-4">Registration Successful!</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = 'text', placeholder = '', handleChange, error }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">{label}</label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
        error ? 'border-red-500 focus:border-red-500' : 'focus:border-indigo-500'
      }`}
      onChange={handleChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      required
    />
    {error && (
      <p id={`${name}-error`} className="mt-1 text-xs text-red-600">{error}</p>
    )}
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

const TextAreaField = ({ label, name, placeholder = '', handleChange, error }) => (
  <div className="mb-6">
    <label htmlFor={name} className="block text-sm font-semibold text-gray-800 mb-2">{label}</label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
        error ? 'border-red-500 focus:border-red-500' : 'focus:border-indigo-500'
      }`}
      onChange={handleChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      required
    ></textarea>
    {error && (
      <p id={`${name}-error`} className="mt-1 text-xs text-red-600">{error}</p>
    )}
  </div>
);

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Registration;
