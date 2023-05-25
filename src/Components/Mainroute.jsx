import React from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}
