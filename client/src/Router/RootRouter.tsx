import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import React, { Suspense } from "react";

const Users = React.lazy(() => import('../pages/Users/Users'));
const UserDetail = React.lazy(() => import('../pages/UserDetail/UserDetail'));

export const RootRouter: React.FC = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <Routes>
            <Route path={ROUTES.home} element={<Users />} />
            <Route path={ROUTES.userByID} element={<UserDetail />} />
            <Route path='*' element={<h2>Ресурс не найден!</h2>} />
        </Routes>
    </Suspense>
);