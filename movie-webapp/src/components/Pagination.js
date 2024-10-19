import React from 'react';

const Pagination = ({ page, setPage }) => {
    const handleNext = () => setPage(page + 1);
    const handlePrevious = () => setPage(page - 1);

    return (
        <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={handlePrevious} disabled={page === 1}>
                Previous
            </button>
            <button className="btn btn-secondary" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
