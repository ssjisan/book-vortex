// eslint-disable-next-line
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import AllBooks from '../Pages/AllBooks';
import AddBook from '../Pages/AddBook';
import SaleBook from '../Pages/SaleBook';

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-books" element={<AllBooks />} />
            <Route path="/add-books" element={<AddBook />} />
            <Route path="/sale-books" element={<SaleBook />} />
        </Routes>
    )
}
