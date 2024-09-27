// JobSearch.tsx

import React, { useState } from "react";
import SearchComponent from "../../../Components/Search/Search";
import "./Jobsearch.css";

interface Job {
  jobTitle: string;
  jobLocation: string;
  jobDetails: string;
  apply: string;
}

const jobs: Job[] = [
  {
    jobTitle: "Backend Developer",
    jobLocation: "Lagos, Nigeria",
    jobDetails: "View Details",
    apply: "apply",
  },
  {
    jobTitle: "Frontend Developer",
    jobLocation: "Lagos, Nigeria",
    jobDetails: "View Details",
    apply: "apply",
  },
  {
    jobTitle: "Data Scientist",
    jobLocation: "Lagos, Nigeria",
    jobDetails: "View Details",
    apply: "apply",
  },
  {
    jobTitle: "Project Manager",
    jobLocation: "Lagos, Nigeria",
    jobDetails: "View Details",
    apply: "apply",
  },
];

const JobSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.jobLocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section">
      <SearchComponent onSearch={setSearchTerm} />{" "}
      <div className="job-list-container">
        <h3>Available Jobs List</h3>
        <h4>Engineering</h4>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-listing">
              <p>{job.jobTitle}</p>
              <p>{job.jobLocation}</p>
              <div className="apply-btn-div">
                <button className="button details-button">
                  {job.jobDetails}
                </button>
                <button className="button apply-btn">{job.apply}</button>
              </div>
            </div>
          ))
        ) : (
          <p>No matching job found</p>
        )}

        <h4>Marketing</h4>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-listing">
              <p>{job.jobTitle}</p>
              <p>{job.jobLocation}</p>
              <div className="apply-btn-div">
                <button className="button details-button">
                  {job.jobDetails}
                </button>
                <button className="button apply-btn">{job.apply}</button>
              </div>
            </div>
          ))
        ) : (
          <p>No matching job found</p>
        )}

        <h4>Identity, Risk and Fraud</h4>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="job-listing">
              <p>{job.jobTitle}</p>
              <p>{job.jobLocation}</p>
              <div className="apply-btn-div">
                <button className="button details-button">
                  {job.jobDetails}
                </button>
                <button className="button apply-btn">{job.apply}</button>
              </div>
            </div>
          ))
        ) : (
          <p>No matching job found</p>
        )}
      </div>
    </section>
  );
};

export default JobSearch;
