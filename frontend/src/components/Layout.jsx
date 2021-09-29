import React from 'react';
import Menu from './Menu';
import "../styles.css"

export default function Layout({ title = 'Title', description = 'Description', className, children }) {
    return (
        <div>
            <Menu />
            
            <div className={className}>{children}</div>
        </div>
    )
}
