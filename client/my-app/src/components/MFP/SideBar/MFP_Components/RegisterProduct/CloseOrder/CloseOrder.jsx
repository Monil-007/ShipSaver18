import React, { useState } from 'react';
import '../CloseOrder/CloseOrder.css';
import SideBar from '../../../Sidebar';

const CloseOrder = () => {
    const [orders, setOrders] = useState([
        { id: 1, name: 'Order 1', isExtended: false, isHovered: false },
        { id: 2, name: 'Order 2', isExtended: false, isHovered: false },
        { id: 3, name: 'Order 3', isExtended: false, isHovered: false },
    ]);

    const toggleOrderExtended = (orderId) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isExtended: !order.isExtended } : order
            )
        );
    };

    const toggleOrderHovered = (orderId, isHovered) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isHovered: isHovered } : order
            )
        );
    };
    const handleOrderClose = (orderId) => {
        // Add code here to handle order close
        console.log(`Closing order ${orderId}`);
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, isExtended: !order.isExtended } : order
            )
        );

    };

    const handleOrderPending = (orderId) => {
        // Add code here to handle order pending
        console.log(`Marking order ${orderId} as pending`);
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className="mainWrapperCO">
                <h1>Radhe Govind</h1>
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className={`orderRow ${order.isExtended ? 'extended' : ''} ${order.isHovered ? 'hovered' : ''
                            }`}
                        onMouseEnter={() => toggleOrderHovered(order.id, true)}
                        onMouseLeave={() => toggleOrderHovered(order.id, false)}
                    >
                        <div>{order.name}</div>
                        {order.isExtended ? (
                            <div className="buttonsWrapper">
                                <button onClick={() => handleOrderClose(order.id)}>
                                    Close Order
                                </button>
                                <button onClick={() => handleOrderPending(order.id)}>
                                    Order Still Pending
                                </button>
                            </div>
                        ) : (
                            <button onClick={() => toggleOrderExtended(order.id)}>
                                Expand
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloseOrder;





// import React from 'react'
// import '../CloseOrder/CloseOrder.css';
// import SideBar from '../../../Sidebar';


// const CloseOrder = () => {
//     return (
//         <div style={{ "display": "flex", }}>
//             <SideBar />
//             <div className="mainWrapperCO">
//                 <h1>Radhe Govind</h1>
//             </div>

//         </div>
//     )
// }

// export default CloseOrder;

