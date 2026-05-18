import { useState } from 'react';

function ApplyModal({ jobTitle, onClose }) {
  const [application, setApplication] = useState({
    name: "",
    coverLetter: "",
  });
  const [cvName, setCvName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setApplication((currentApplication) => ({
      ...currentApplication,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-green-800">Apply for {jobTitle}</h2>
            <p className="text-sm text-gray-600">Enter your details below.</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg border border-gray-300 px-3 py-1">
            Close
          </button>
        </div>

        {submitted ? (
          <div className="rounded-lg bg-green-50 p-4 text-green-800">
            Thanks, {application.name}. Your application has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={application.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(event) => setCvName(event.target.files[0]?.name || "")}
              required
              className="rounded-lg border border-gray-300 px-4 py-2"
            />
            {cvName && <p className="text-sm text-gray-600">Selected CV: {cvName}</p>}
            <textarea
              name="coverLetter"
              placeholder="Cover letter"
              value={application.coverLetter}
              onChange={handleChange}
              required
              className="min-h-32 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
            />
            <button type="submit" className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ApplyModal;
