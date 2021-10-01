import React from 'react';
import Menu from './Menu';
import "../styles.css"
import { Container } from 'react-bootstrap'
export default function Layout({ title = 'Title', description = 'Description', className, children }) {
    return (
        <div >
            <Menu />
            <Container className={className}>{children}</Container>
        </div>
    )
}
