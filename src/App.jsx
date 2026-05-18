import './App.css'
import CreateJob from './components/CreateJob';
import JobCard from './components/JobCard';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { useState } from 'react'

const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Flutterwave",
    location: "Lagos",
    type: "Full-time",
    salary: "₦350,000 - ₦500,000",
    description: "We are looking for a passionate React developer to join our growing team.",
    posted: "2 days ago",
    logo: "💳"
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Paystack",
    location: "Remote",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000",
    description: "Create beautiful user experiences for millions of Nigerians.",
    posted: "1 day ago",
    logo: "💰"
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    company: "Kuda Bank",
    location: "Abuja",
    type: "Full-time",
    salary: "₦450,000 - ₦650,000",
    description: "Build secure and scalable financial systems.",
    posted: "3 days ago",
    logo: "🏦"
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Opay",
    location: "Lagos",
    type: "Contract",
    salary: "₦300,000 - ₦450,000",
    description: "Help us build the future of digital banking in Africa.",
    posted: "5 hours ago",
    logo: "📱"
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Flutterwave",
    location: "Lagos",
    type: "Full-time",
    salary: "₦350,000 - ₦500,000",
    description: "We are looking for a passionate React developer to join our growing team.",
    posted: "2 days ago",
    logo: "💳"
  },
  {
    id: 6,
    title: "Product Designer",
    company: "Paystack",
    location: "Remote",
    type: "Full-time",
    salary: "₦400,000 - ₦600,000",
    description: "Create beautiful user experiences for millions of Nigerians.",
    posted: "1 day ago",
    logo: "💰"
  },
  {
    id: 7,
    title: "Backend Engineer (Node.js)",
    company: "Kuda Bank",
    location: "Abuja",
    type: "Full-time",
    salary: "₦450,000 - ₦650,000",
    description: "Build secure and scalable financial systems.",
    posted: "3 days ago",
    logo: "🏦"
  },
  {
    id: 8,
    title: "Mobile App Developer",
    company: "Opay",
    location: "Lagos",
    type: "Contract",
    salary: "₦300,000 - ₦450,000",
    description: "Help us build the future of digital banking in Africa.",
    posted: "5 hours ago",
    logo: "📱"
  }
];

function App() {
const [jobs, setJobs] = useState(initialJobs);
const [searchTerm, setSearchTerm] = useState("");

const handleCreateJob = (newJob) => {
  setSearchTerm("");
  setJobs((currentJobs) => [
    {
      id: Date.now(),
      posted: "Just now",
      logo: "💼",
      ...newJob,
    },
    ...currentJobs,
  ]);
};

const filteredJobs = jobs.filter((job) =>
  job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.type.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <Navbar />
      <div className='p-5'>
          <div className='text-2xl font-bold text-green-800'>Welcome to QuickHire!</div>
          <div className='description'>Your one-stop solution for quick and efficient hiring.</div>
      </div>
      <div className='SearchBar'>    
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <CreateJob onCreateJob={handleCreateJob} />
      <div className='joblist'> 
        {filteredJobs.length === 0 ? (
          <div className='text-center text-gray-500 mt-10'>No jobs found.</div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
            {filteredJobs.map((job) => ( 
              
              <JobCard key={job.id} job={job} />

             ))}
          </div>
        )}
        

      </div>
        

    </div>
  )
}

export default App
