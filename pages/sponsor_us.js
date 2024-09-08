import React, { useState, useEffect } from "react";

function Sponsorus() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationEmail: "",
    contactName: "",
    contactEmail: "",
    phoneNumber: "",
    notes: "",
  });
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight / 2 - window.innerHeight / 2,
      behavior: "smooth",
    });
  }, []);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sponsor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Unexpected response type");
      }

      const result = await response.json();

      if (response.ok) {
        console.log("Form submitted successfully", result);
        setShowPopup(true);
        setFormData({
          organizationName: "",
          organizationEmail: "",
          contactName: "",
          contactEmail: "",
          phoneNumber: "",
          notes: "",
        });
      } else {
        console.error("Form submission error", result);
      }
    } catch (error) {
      console.error("Unexpected error", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.href = "/"
  };

  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute">
        <div className="relative h-full w-full">
          <img
            src="https://github.com/user-attachments/assets/d22f4ba6-99c8-4f70-bebb-293e913b0403"
            className="absolute bottom-12 right-12"
            alt="Sponsor 1"
          />
          <img
            src="https://github.com/user-attachments/assets/24f55e89-073f-4f60-a8da-9a8bd8f1fb22"
            className="absolute top-52 left-8 max-sm:hidden"
            alt="Sponsor 2"
          />
          <img
            src="https://github.com/user-attachments/assets/79abccc7-f149-47c5-9718-0f2bad78ed05"
            className="absolute bottom-0"
            alt="Sponsor 3"
          />
          <img
            src="https://github.com/user-attachments/assets/02c086cd-24ba-427e-b766-bd3aac3a6626"
            className="absolute top-0 right-0 h-32 w-96"
            alt="Sponsor 4"
          />
          <img
            src="https://github.com/user-attachments/assets/7a87e4b9-de02-421b-852b-6d842171697e"
            className="absolute top-0 right-80 h-12"
            alt="Sponsor 5"
          />
        </div>
      </div>
      <div className="flex min-h-screen flex-col justify-center items-center max-w-6xl mx-auto relative w-full py-20 max-sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-lg text-center font-medium italic px-16 max-sm:px-8 mb-2">
          GirlScript Summer of Code is a platform where students learn,
          contribute, and grow in the field of open-source development. By
          sponsoring GSSoC, you help empower future tech innovators, promote
          diversity, and contribute to creating a more inclusive community.
        </div>
        <div className="text-3xl my-8 text-center font-medium">
          OUR PREVIOUS SPONSORS
        </div>
        <div className="flex w-full flex-wrap gap-12 justify-between max-lg:justify-center">
          <div className="bg-gray-200 w-36 h-40"></div>
          <div className="bg-gray-200 w-36 h-40"></div>
          <div className="bg-gray-200 w-36 h-40"></div>
          <div className="bg-gray-200 w-36 h-40"></div>
          <div className="bg-gray-200 w-36 h-40"></div>
        </div>
        <div className="text-3xl my-8 text-center font-medium">
          WISH TO CONTRIBUTE IN OUR ENDEAVOUR? SPONSOR US
        </div>
        <div className="space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label
                  htmlFor="organizationName"
                  className="text-sm font-medium text-gray-700 flex gap-1"
                >
                  ORGANIZATION/ INDIVIDUAL NAME{" "}
                  <span className="text-xs text-red-500">(required)</span>
                </label>
                <input
                  type="text"
                  id="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="organizationEmail"
                  className="text-sm font-medium text-gray-700 flex gap-1"
                >
                  ORGANIZATION EMAIL ID{" "}
                  <span className="text-xs text-red-500">(required)</span>
                </label>
                <input
                  type="email"
                  id="organizationEmail"
                  value={formData.organizationEmail}
                  onChange={handleChange}
                  className="mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contactName"
                  className="text-sm font-medium text-gray-700 flex gap-1"
                >
                  NAME OF PERSON OF CONTACT{" "}
                  <span className="text-xs text-red-500">(required)</span>
                </label>
                <input
                  type="text"
                  id="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
              <div>
                <label
                  htmlFor="contactEmail"
                  className="text-sm font-medium text-gray-700 flex gap-1"
                >
                  POC EMAIL-ID{" "}
                  <span className="text-xs text-red-500">(required)</span>
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-700 flex gap-1"
                >
                  POC PHONE NUMBER{" "}
                  <span className="text-xs text-red-500">(required)</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="text-sm font-medium text-gray-700 flex gap-1"
                >
                  NOTES <span className="text-xs text-red-500">(required)</span>
                </label>
                <input
                  type="text"
                  id="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 max-md:justify-center">
              <button
                type="submit"
                className="bg-[#df551a] rounded-lg text-white text-xl font-medium w-36 py-2 px-4 text-center"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p className="text-lg mb-6">
              Thank you for your interest in sponsoring us. We will contact you
              soon!
            </p>
            <button
              onClick={handleClosePopup}
              className="bg-[#F96727] text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sponsorus;
