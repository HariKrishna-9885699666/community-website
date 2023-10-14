import { useEffect, useState, useMemo, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import jwt_decode from "jwt-decode";
import { clearLocalStorage, navigateToLoginPage, showSessionEndNotification } from '../utils/authUtils';
import { getUserDataAPI } from '../api/user';

const DefaultLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const expiryInSeconds = localStorage.getItem('tokenExpiresIn');
  const authToken = localStorage.getItem('authToken');
  const hasFetchedData = useRef(false);
  // Define a mutation for getting user data
  useEffect(() => {
    if (Date.now() > expiryInSeconds) {
      clearLocalStorage();
      showSessionEndNotification('Your session is ended, please login again.');
      navigateToLoginPage(navigate); 
    }
  }, [Date.now()]);
  
  const getUserDataMutation = useMutation(getUserDataAPI);
  const fetchData = useMemo(() => {
    return async () => {
      if (!hasFetchedData.current) {
        hasFetchedData.current = true;
        try {
          const decodedToken = jwt_decode(authToken, { complete: true });
          const { data: userData, error, headers } = await getUserDataMutation.mutateAsync(decodedToken.userId);
  
          if (error) {
            console.error('Error while fetching user data:', error);
            showSessionEndNotification('Error while fetching user data');
          } else {
            setUserInfo(userData.data);
            console.log('userData', userData);
          }
        } catch (error) {
          console.error('Unexpected error:', error);
          showSessionEndNotification('Unexpected error');
        }
      }
    };
  }, [authToken]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} userInfo={userInfo} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;
