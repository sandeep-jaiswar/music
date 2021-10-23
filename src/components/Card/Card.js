import React from 'react'

function Card(props) {
    const { children, className } = props;
    return (
        <div className={`lib-card ${className}`}>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default Card
