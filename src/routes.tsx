import { Routes, Route } from 'react-router-dom';
import { SignInPage } from './pages/SignIn';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage/>} />
    </Routes>
  );
}
