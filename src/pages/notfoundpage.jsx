import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
    const location = useLocation();

    return(
        <div className="page-title bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-4">
                        <h1 className="mb-0">Not Found</h1>
                        <h4 className="text-muted mb-0">Sorry, we can't find anything here ({location.pathname})</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;