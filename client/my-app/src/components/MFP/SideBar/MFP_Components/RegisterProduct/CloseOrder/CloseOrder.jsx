import React, { useState } from 'react';
import '../CloseOrder/CloseOrder.css';
import SideBar from '../../../Sidebar';

const CloseOrder = () => {
    const [hoveredRow, setHoveredRow] = useState(null);
    const [extended, setExtended] = useState(false);

    const [orders, setOrders] = useState([
        { id: 1, name: 'Order 1', isExtended: false },
        { id: 2, name: 'Order 2', isExtended: false },
        { id: 3, name: 'Order 3', isExtended: false },
    ]);

    const toggleOrderExtended = (orderId) => {
        setExtended(true);
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isExtended: !order.isExtended } : order
            )
        );
    };

    const handleOrderClose = (orderId) => {
        setExtended(false);
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isExtended: !order.isExtended } : order
            )
        );

        console.log(`Closing order ${orderId}`);
    };

    const handleOrderPending = (orderId) => {
        console.log(`Marking order ${orderId} as pending`);
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
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className={`orderRow ${order.isExtended ? 'extended' : ''} ${order.id === hoveredRow ? 'hovered' : ''
                            }`}
                        onMouseEnter={() => handleRowHover(order.id)}
                        onMouseLeave={handleRowLeave}
                    >
                        <div>{order.name}</div>
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