import React, { useState, useEffect } from 'react';

import '../CloseOrder/CloseOrder.css';
import SideBar from '../../../Sidebar';
import { useSelector } from 'react-redux';

const CloseOrder = () => {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [extended, setExtended] = useState(false);
    const formData18 = useSelector(state => state.formData);
    const reduxUser = useSelector(state => state.formData.user);
    const [fg, setFg] = useState(false);
    const [yourOrders, setYourOrders] = useState([
        { id: 5, name: 'Order 1', isExtended: false },
        // { id: 2, name: 'Order 2', isExtended: false },
        // { id: 3, name: 'Order 3', isExtended: false },
    ]);
    const getYourOrders = () => {
        if (formData18.user && formData18.user.id) {
            console.log(typeof (formData18.user.id));
            const userData = {
                userID: `${formData18.user.id}`
            } // Log the updated formData
            fetch('http://localhost:3000/DeliverySaverApi/rkGetYourOrders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(resp => resp.json())
                .then((dt1) => {
                    console.log(dt1);
                    setYourOrders(dt1);
                    setFg(!fg);
                })
                .catch(err => console.log(err));
            console.log(yourOrders);
        }
    }
    useEffect(() => {
        getYourOrders();

    }, [formData18]);

    const toggleOrderExtended = (orderId) => {
        setExtended(true);
        setYourOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isExtended: !order.isExtended } : order
            )
        );
    };

    const handleOrderClose = (orderId) => {
        setExtended(false);
        setYourOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isExtended: !order.isExtended } : order
            )
        );
        fetch('http://localhost:3000/DeliverySaverApi/rkCloseOrder', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderId }), // Pass the orderId to the backend
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Order closed successfully, remove the order from the state
                    setYourOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
                } else {
                    // Failed to close order, handle the error
                    console.log(data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleOrderPending = (orderId) => {
        console.log(`Marking order ${orderId} as pending`);
        setExtended(false);
    };

    const handleRowHover = (orderId) => {
        setHoveredRow(orderId);
    };

    const handleRowLeave = () => {
        setHoveredRow(null);
    };


    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className="mainWrapperCO">
                <h1>Radhe Govind</h1>
                {yourOrders.map((order) => (
                    <div
                        key={order.id}
                        className={`orderRow ${order.isExtended ? 'extended' : ''} ${order.id === hoveredRow ? 'hovered' : ''
                            }`}
                        onMouseEnter={() => handleRowHover(order.id)}
                        onMouseLeave={handleRowLeave}
                    >
                        <div>{order.firstName}</div>
                        <button className="expandButton" onClick={() => toggleOrderExtended(order.id)}>
                            {extended ? 'View Less' : 'Expand'}
                            <span className={`arrow ${order.isExtended ? 'rotate' : ''}`}>&#9660;</span>
                        </button>
                        {order.isExtended && (

                            <div className="buttonsWrapper">
                                <button onClick={() => handleOrderClose(order.id)}>Close Order</button>
                                <button onClick={() => handleOrderPending(order.id)}>Order Pending</button>
                            </div>
                        )}
                        {/* {!order.isExtended && (
                            <button className="expandButton" onClick={() => toggleOrderExtended(order.id)}>
                                {order.id === hoveredRow ? 'View Less' : 'Expand'}
                                <span className={`arrow ${order.isExtended ? 'rotate' : ''}`}>&#9660;</span>
                            </button>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloseOrder;