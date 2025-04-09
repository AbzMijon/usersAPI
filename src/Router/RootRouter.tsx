import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

export const RootRouter: React.FC = () => (
    <Routes>
        <Route path={ROUTES.home} element={<UserList />} />
        <Route path={ROUTES.userByID} element={<UserDetail />} />
    </Routes>
);