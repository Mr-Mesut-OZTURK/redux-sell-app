import React from 'react'

const NotFound = () => {
    return (
        <div style={{
            width: '100%',
            height: "100vh",
            backgroundColor:"cornsilk",
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            position: "absolute",
            top:0,
            left: 0,
            zIndex: -1,
        }}>
            <h2>Page Not Found!...</h2>
        </div>
    )
}

export default NotFound
