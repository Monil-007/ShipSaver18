import React from 'react'
import SideBar from '../../../Sidebar';
import '../FindSimilarCustomers/FindSimilarCustomers.css';
import { Button } from 'reactstrap';


const FindSimilarCustomers = () => {
    return (
        <div className="GSC">
            <SideBar />
            <div className="GSC-main">
                <div className="GSC-heading">
                    <h1>Find Similar Customers near you</h1>
                    <h4>Find Similar Customers like you to order together to save delivery charges</h4>
                </div>
                <button className='findButton'>Find it!!</button>

            </div>

        </div>
    )
}

export default FindSimilarCustomers;
