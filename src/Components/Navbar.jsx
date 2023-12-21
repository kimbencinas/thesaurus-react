import React from 'react'
import Search from './Search'

export default function Navbar({ onSearch }) {

    return (
        <div className="navbar">
            <Search onSearch={onSearch} />
        </div>
    );
}