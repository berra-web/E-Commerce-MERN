import React from 'react';
import Menu from './Menu';
import "../styles.css"

export default function Layout({ title = 'Title', description = 'Description', className, children }) {
    return (
        <div>
            <Menu />
            <div className='jumbotron text-center'>
                <h2 className='display-4'>{title}</h2>
                <p className='lead'>{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
    )
}
