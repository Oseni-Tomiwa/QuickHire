import { useState } from 'react';

const emptyJob = {
  title: "",
  company: "",
  location: "",
  type: "Full-time",
  salary: "",
  description: "",
};

function CreateJob({ onCreateJob }) {
  const [job, setJob] = useState(emptyJob);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob((currentJob) => ({
      ...currentJob,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCreateJob(job);
    setJob(emptyJob);
  };

  return (
    <section className="p-5">
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold text-green-800">Create a new job</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="title"
            placeholder="Job title"
            value={job.title}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={job.company}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            name="type"
            value={job.type}
            onChange={handleChange}
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Remote</option>
          </select>
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
            required
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="description"
            placeholder="Job description"
            value={job.description}
            onChange={handleChange}
            required
            className="min-h-24 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 md:col-span-2"
          />
        </div>

        <button type="submit" className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
          Create Job
        </button>
      </form>
    </section>
  );
}

export default CreateJob;
