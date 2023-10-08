import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Layout = lazy(() => import("../components/layout"));
const Dashboard = lazy(() => import("../pages/dashboad"));
const Services = lazy(() => import("../pages/services"));

const Routing = () => {
    return (
        <Routes>
            <Route
                path="/" element={<Layout />}
            >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services" element={<Services />} />
                <Route path="/" element={<Navigate replace to="/dashboard" />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};

export default Routing;
