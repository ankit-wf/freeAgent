import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setAuthTokenAction} from '../store/authUser';

import {getAuthToken} from '../helpers/auth';

const useAuthorizedSession = () => {
  const authToken = useSelector(({authUser}) => authUser?.authToken ?? '');
  const dispatch = useDispatch();

  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const checkStoredTokenAvailability = async () => {
      const storedToken = await getAuthToken();

      if (storedToken) {
        dispatch(setAuthTokenAction(storedToken));
      } else {
        throw new Error('No token found');
      }
    };

    const validateSessionAndFetch = async () => {
      try {
        await checkStoredTokenAvailability();
      } catch {
      } finally {
        setIsInitializing(false);
      }
    };

    validateSessionAndFetch();
  }, []);

  return [authToken, isInitializing];
};

export default useAuthorizedSession;
