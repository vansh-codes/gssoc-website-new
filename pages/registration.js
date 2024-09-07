import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import CountryStateSelect from "../components/CountryStateSelect";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Registration = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const [isRegistrationsOpen, setIsRegistrationsOpen] = useState(false);
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({});
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry ? selectedCountry.label : "",
      state: "",
    }));
  };

  const handleStateChange = (selectedState) => {
    setFormData((prevData) => ({
      ...prevData,
      state: selectedState ? selectedState.label : "",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "email" && !validateEmail(value)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address.",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    console.log("Form data before validation:", formData);

    let newErrors = {};

    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.year) newErrors.year = "Year is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.discordUsername)
      newErrors.discordUsername = "Discord username is required.";

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }


    if (Object.keys(newErrors).length > 0) {
      console.log("Validation errors:", newErrors);
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const finalData = {
      role,
      ...formData,
      linkedInProfileUrl: formData.linkedInProfileUrl || "",
      experience: formData.experience || "",
      referral: formData.referral || "",
      projectDescription: formData.projectDescription || "",
      organizationName: formData.organizationName || "",
      organizationDescription: formData.organizationDescription || "",
      expectedMentors: formData.expectedMentors || "",
      referralCode: formData.referralCode || "",
    };


    console.log("Form data after validation and before submission:", finalData);

    try {
      const response = await axios.post("/api/registration", finalData);

      console.log("Server response:", response);

      setShowSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error registering. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderForm = () => {
    switch (role) {
      case "CA":
        return (
          <>
            <InputField
              label="Name"
              name="name"
              handleChange={handleInputChange}
              error={errors.name}
            />
            <SelectField
              label="Gender"
              name="gender"
              options={["Select Gender", "Male", "Female", "Others"]}
              handleChange={handleInputChange}
              error={errors.gender}
            />
            <InputField
              label="Email"
              name="email"
              handleChange={handleInputChange}
              error={errors.email}
            />
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={"india"}
                value={formData.phoneNumber || ""}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  width: "100%",
                  padding: "10px 50px",
                }}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>

            <CountryStateSelect
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
            />
            <InputField
              label="City"
              name="city"
              handleChange={handleInputChange}
              error={errors.city}
            />
            <InputField
              label="College/Office Name"
              name="collegeOrOffice"
              handleChange={handleInputChange}
              error={errors.collegeOrOffice}
            />

            <SelectField
              label="Year"
              name="year"
              options={[
                "Select Year",
                "1st Year",
                "2nd Year",
                "3rd Year",
                "4th Year",
              ]}
              handleChange={handleInputChange}
              error={errors.year}
            />
            <InputField
              label="Field of Study"
              name="fieldOfStudy"
              handleChange={handleInputChange}
              error={errors.fieldOfStudy}
            />
            <InputField
              label="GitHub Profile URL"
              name="gitHubProfileUrl"
              handleChange={handleInputChange}
              error={errors.gitHubProfileUrl}
            />
            <InputField
              label="LinkedIn Profile URL"
              name="linkedInProfileUrl"
              handleChange={handleInputChange}
              error={errors.linkedInProfileUrl}
            />
            <InputField
              label="Discord Username"
              name="discordUsername"
              handleChange={handleInputChange}
              error={errors.discordUsername}
            />
            <TextAreaField
              label="Experience (Optional)"
              name="experience"
              handleChange={handleInputChange}
              error={errors.experience}
              required={false}
            />
            <TextAreaField
              label="Reason"
              name="reason"
              handleChange={handleInputChange}
              error={errors.reason}
            />
          </>
        );

      case "Contributor":
        return (
          <>
            <InputField
              label="Name"
              name="name"
              handleChange={handleInputChange}
              error={errors.name}
            />
            <SelectField
              label="Gender"
              name="gender"
              options={["Select Gender", "Male", "Female", "Others"]}
              handleChange={handleInputChange}
              error={errors.gender}
            />
            <InputField
              label="Email"
              name="email"
              handleChange={handleInputChange}
              error={errors.email}
            />
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={"in"}
                value={formData.phoneNumber || ""}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  width: "100%",
                  padding: "10px 50px",
                }}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
            <CountryStateSelect
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
            />
            <InputField
              label="City"
              name="city"
              handleChange={handleInputChange}
              error={errors.city}
            />
            <InputField
              label="College/Office Name"
              name="collegeOrOffice"
              handleChange={handleInputChange}
              error={errors.collegeOrOffice}
            />
            <SelectField
              label="Year"
              name="year"
              options={[
                "Select Year",
                "1st Year",
                "2nd Year",
                "3rd Year",
                "4th Year",
              ]}
              handleChange={handleInputChange}
              error={errors.year}
            />
            <InputField
              label="Field of Study"
              name="fieldOfStudy"
              handleChange={handleInputChange}
              error={errors.fieldOfStudy}
            />
            <InputField
              label="GitHub Profile URL"
              name="gitHubProfileUrl"
              handleChange={handleInputChange}
              error={errors.gitHubProfileUrl}
            />
            <InputField
              label="LinkedIn Profile URL (Optional)"
              name="linkedInProfileUrl"
              handleChange={handleInputChange}
              error={errors.linkedInProfileUrl}
              required={false}
            />
            <InputField
              label="Discord Username"
              name="discordUsername"
              handleChange={handleInputChange}
              error={errors.discordUsername}
            />
            <TextAreaField
              label="Reason"
              name="reason"
              handleChange={handleInputChange}
              error={errors.reason}
            />
            <TextAreaField
              label="Have you been part of any of the program before?"
              name="partOfProgramBefore"
              handleChange={handleInputChange}
              error={errors.partOfProgramBefore}
            />
            <InputField
              label="Referral Code (Optional)"
              name="referral"
              handleChange={handleInputChange}
              error={errors.referral}
              required={false}
            />
          </>
        );
      case "Mentor":
        return (
          <>
            <InputField
              label="Name"
              name="name"
              handleChange={handleInputChange}
              error={errors.name}
            />
            <SelectField
              label="Gender"
              name="gender"
              options={["Select Gender", "Male", "Female", "Others"]}
              handleChange={handleInputChange}
              error={errors.gender}
            />
            <InputField
              label="Email"
              name="email"
              handleChange={handleInputChange}
              error={errors.email}
            />
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={"in"}
                value={formData.phoneNumber || ""}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  width: "100%",
                  padding: "10px 50px",
                }}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
            <InputField
              label="College/Office Name"
              name="collegeOrOffice"
              handleChange={handleInputChange}
              error={errors.collegeOrOffice}
            />
            <CountryStateSelect
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
            />
            <InputField
              label="GitHub Profile URL"
              name="gitHubProfileUrl"
              handleChange={handleInputChange}
              error={errors.gitHubProfileUrl}
            />
            <InputField
              label="LinkedIn Profile URL (Optional)"
              name="linkedInProfileUrl"
              handleChange={handleInputChange}
              error={errors.linkedInProfileUrl}
            />
            <InputField
              label="Discord Username"
              name="discordUsername"
              handleChange={handleInputChange}
              error={errors.discordUsername}
            />
            <SelectField
              label="Year"
              name="year"
              options={[
                "Select Year",
                "1st Year",
                "2nd Year",
                "3rd Year",
                "4th Year",
              ]}
              handleChange={handleInputChange}
              error={errors.year}
            />
            <TextAreaField
              label="Tech Stacks (Required)"
              name="techStacks"
              handleChange={handleInputChange}
              error={errors.techStacks}
            />
            <TextAreaField
              label="Reason"
              name="reason"
              handleChange={handleInputChange}
              error={errors.reason}
            />
            <InputField
              label="Referral Code (Optional)"
              name="referralCode"
              handleChange={handleInputChange}
              error={errors.referralCode}
              required={false}
            />
          </>
        );
      case "ProjectAdmin":
        return (
          <>
            <InputField
              label="Name"
              name="name"
              handleChange={handleInputChange}
              error={errors.name}
            />
            <SelectField
              label="Gender"
              name="gender"
              options={["Select Gender", "Male", "Female", "Others"]}
              handleChange={handleInputChange}
              error={errors.gender}
            />
            <InputField
              label="Email"
              name="email"
              handleChange={handleInputChange}
              error={errors.email}
            />
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <PhoneInput
                country={"in"}
                value={formData.phoneNumber || ""}
                onChange={handlePhoneChange}
                inputProps={{
                  name: "phoneNumber",
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  width: "100%",
                  padding: "10px 50px",
                }}
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
            <InputField
              label="GitHub Profile URL"
              name="gitHubProfileUrl"
              handleChange={handleInputChange}
              error={errors.gitHubProfileUrl}
            />
            <InputField
              label="LinkedIn Profile URL (Optional)"
              name="linkedInProfileUrl"
              handleChange={handleInputChange}
              error={errors.linkedInProfileUrl}
              required={false}
            />
            <InputField
              label="Discord Username"
              name="discordUsername"
              handleChange={handleInputChange}
              error={errors.discordUsername}
            />
            <CountryStateSelect
              onCountryChange={handleCountryChange}
              onStateChange={handleStateChange}
            />
            <TextAreaField
              label="Tech Stacks"
              name="techStacks"
              handleChange={handleInputChange}
              error={errors.techStacks}
            />
            <InputField
              label="Project Name"
              name="projectName"
              handleChange={handleInputChange}
              error={errors.projectName}
            />
            <TextAreaField
              label="Project Description (Optional)"
              name="projectDescription"
              handleChange={handleInputChange}
              error={errors.projectDescription}
              required={false}
            />
            <InputField
              label="Organization Name (Optional)"
              name="organizationName"
              handleChange={handleInputChange}
              error={errors.organizationName}
              required={false}
            />
            <TextAreaField
              label="Organization Description (Optional)"
              name="organizationDescription"
              handleChange={handleInputChange}
              error={errors.organizationDescription}
              required={false}
            />
            <InputField
              label="Repository URL"
              name="repositoryUrl"
              handleChange={handleInputChange}
              error={errors.repositoryUrl}
            />
            <InputField
              label="Deployment Link"
              name="deploymentLink"
              handleChange={handleInputChange}
              error={errors.deploymentLink}
            />
            <InputField
              label="Expected Number of Mentors/Reviewers (Optional)"
              name="expectedMentors"
              handleChange={handleInputChange}
              error={errors.expectedMentors}
              required={false}
            />
            <InputField
              label="Referral Code (Optional)"
              name="referralCode"
              handleChange={handleInputChange}
              error={errors.referralCode}
              required={false}
            />
          </>
        );

      default:
        return null;
    }
  };
  if (!isRegistrationsOpen) {
    return (
      <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Coming Soon
          </h1>
          <p className="text-center text-gray-700">
            Registrations are not open at the moment. Please check back later.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen p-10 bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleRoleChange}
              value={role}
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="CA">CA (Campus Ambassador)</option>
              {/* <option value="Contributor">Contributor</option>
              <option value="Mentor">Mentor</option>
              <option value="ProjectAdmin">Project Admin</option> */}
            </select>
          </div>
          {renderForm()}
          <div className="mt-6">
            <button
              type="submit"
              className={`w-full bg-[#f57d33] text-white py-2 px-4 rounded-lg shadow hover:bg-[#F26611] ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-35">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-4">
                Registration Successful!
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  handleChange = () => {},
  error,
  required = true,
}) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-gray-800 mb-2"
    >
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      className={`block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
        error
          ? "border-red-500 focus:border-red-500"
          : "focus:border-indigo-500"
      }`}
      onChange={handleChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      required={required}
    />
    {error && (
      <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
        {error}
      </p>
    )}
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};
const SelectField = ({
  label,
  name,
  options,
  handleChange = () => {},
  error,
  required = true,
}) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-gray-800 mb-2"
    >
      {label}
    </label>
    <select
      id={name}
      name={name}
      className={`block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
        error
          ? "border-red-500 focus:border-red-500"
          : "focus:border-indigo-500"
      }`}
      onChange={handleChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      required={required}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && (
      <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
        {error}
      </p>
    )}
  </div>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};

const TextAreaField = ({
  label,
  name,
  placeholder = "",
  handleChange = () => {},
  error,
  required = true,
}) => (
  <div className="mb-6">
    <label
      htmlFor={name}
      className="block text-sm font-semibold text-gray-800 mb-2"
    >
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      className={`block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
        error
          ? "border-red-500 focus:border-red-500"
          : "focus:border-indigo-500"
      }`}
      onChange={handleChange}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      required={required}
    ></textarea>
    {error && (
      <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
        {error}
      </p>
    )}
  </div>
);

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};

export default Registration;
