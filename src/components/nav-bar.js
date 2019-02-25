import React from 'react';
import './nav-bar.css'
import SearchForm from './search-form';

export default function NavBar(props) {
    return <nav>
        <button>Home</button>
        <button>My Lists</button>
        <button>Post Gift</button>
        <button>Logout</button>
        <SearchForm />
    </nav>;
};