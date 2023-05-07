import React from 'react'

const DataDisplay = (props) => {
    var loadingStatus = props.isLoading;
    if (loadingStatus) {
        return (
            <div style={{ color: "green", display: "flex", margin: "auto", justifyContent: "center", fontSize: "25px" }}>Loading.................. rk</div>
        )
    }
    else {
        return (
            <div></div>
        )
    }

}

export default DataDisplay;