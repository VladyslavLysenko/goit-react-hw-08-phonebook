import { useDispatch} from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from '@chakra-ui/react';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email}</p>
      <Button backgroundColor='white' type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
