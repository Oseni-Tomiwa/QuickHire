import { useState } from 'react';
import ApplyModal from './ApplyModal';

function JobDetails({job, setDetails}) {
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <div className='w-full  border-1 border-gray-200 rounded-lg p-5'>
      <div className='parent flex justify-between items-start gap-5'>
         <div>
            <h1>{job.title}</h1>
             <p>{job.description}</p>
             <p><strong>Company:</strong> {job.company}</p>
             <p><strong>Location:</strong> {job.location}</p>
             <p><strong>Type:</strong> {job.type}</p>
             <p><strong>Salary:</strong> {job.salary}</p>
             <button
              className='px-4 py-2 border-1 rounded-lg border-green-300 mt-3'
              onClick={() => setShowApplyModal(true)}
             >
              Apply
             </button>    
         </div>
         
          <button className='px-4 py-2 border-1 rounded-lg border-green-300' onClick={() => setDetails(false)}>Back</button>
      </div>    
      {showApplyModal && (
        <ApplyModal jobTitle={job.title} onClose={() => setShowApplyModal(false)} />
      )}
    </div>
    
  );
}


export default JobDetails
