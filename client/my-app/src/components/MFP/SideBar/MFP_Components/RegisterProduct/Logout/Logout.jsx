import React, { useEffect, useState } from 'react'
import SideBar from '../../../Sidebar';
import './Logout.css';
import { Button } from 'reactstrap';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import dummyImage from '../../../../../../assets/icons/dummyImage.png'
import SmilingDuck from '../../../../../../assets/icons/SmilingDuck.jpg';


const Logout = ({ formData, user }) => {
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {

    }, [showModal])
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleLogout = () => {
        // Perform logout logic here
        // Redirect or update state as needed
        navigate('/');
        closeModal(); // Close the modal after logout
    };
    return (
        // <div className="FSC">
        //     <div className="GSC">
        <div className="logoutPage">
            <SideBar />
            {!showModal && <div className="desc">
                <h1>Glad, you're back !!!!</h1>
                <img src={SmilingDuck} alt="validatingDuck" className='ValidatingDuck'></img>

            </div>}
            {showModal && <div className="modal">
                <div className="modal-content">
                    <h2>Are you sure you want to log out?</h2>
                    <div className="buttons">
                        <button className='Cancel' onClick={closeModal}>Cancel</button>
                        <button className='Yes' onClick={handleLogout}>Yeah, Sure</button>
                    </div>
                </div>
            </div>}
        </div>


    );



}

// const mapStateToProps = (state) => {
//     return {
//         formData: state.formData.formData,
//         user: state.formData.user,
//     };
// };

export default Logout;
// export default FindSimilarCustomers;
