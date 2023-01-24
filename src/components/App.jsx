import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../components/redux/auth/operations';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { Layout } from './Layout';
import { Progress, Center } from '@chakra-ui/react';

const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Center h="100px" color="black">
      <Progress size="lg" isIndeterminate />
      <b>Refreshing user...</b>
    </Center>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
