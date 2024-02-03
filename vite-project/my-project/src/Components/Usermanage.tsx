import React, { useState, useEffect } from 'react';
import { Weavy, WyChat } from "@weavy/uikit-web";
import '@weavy/uikit-web';

interface UserManagementProps {}

const weavy = new Weavy();
weavy.url = "https://1abc03fba2cc4a0780df8dbc12d76573.weavy.io";
weavy.tokenFactory = async (refresh) => "wys_4wxGZPMQFCrVlfnvYSK87lDTAmjWmn1nfNlj";


const UserManagement: React.FC<UserManagementProps> = () => {
  const [weavy, setWeavy] = useState<Weavy | null>(null);

  useEffect(() => {
    const initializeWeavy = async () => {
      const weavyInstance = new Weavy();
      weavyInstance.url = "https://myenvironment.weavy.io";
      weavyInstance.tokenFactory = async (refresh) => "access_token";
  
      await weavyInstance.init();
      setWeavy(weavyInstance);
    };
  
    initializeWeavy();
  }, []);
  

  const handleCreateUser = async () => {
    try {
      const response = await weavy.users.create({
        // Provide user creation data as needed
      });
  
      // Handle the response or perform additional actions
      console.log('User created:', response);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  

  const handleListUsers = async () => {
    try {
      const userList = await weavy.users.list();
  
      // Handle the list of users or perform additional actions
      console.log('User list:', userList);
    } catch (error) {
      console.error('Error listing users:', error);
    }
  };
  
  const handleGetUserDetails = async () => {
    try {
      const userId = 'user_id'; // Provide the user ID for which you want details
      const userDetails = await weavy.users.get(userId);
  
      // Handle the user details or perform additional actions
      console.log('User details:', userDetails);
    } catch (error) {
      console.error('Error getting user details:', error);
    }
  };
  
  const handleUpdateUser = async () => {
    try {
      const userId = 'user_id'; // Provide the user ID for which you want to update details
      const updatedUserData = {
        // Provide the updated user data
      };
      const updatedUser = await weavy.users.update(userId, updatedUserData);
  
      // Handle the updated user or perform additional actions
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  const handleDeleteUser = async () => {
    try {
      const userId = 'user_id'; // Provide the user ID for which you want to delete
      await weavy.users.delete(userId);
  
      // Handle successful deletion or perform additional actions
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
 
 

  return (
<div className="container mx-auto mt-10 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img src="your-image-url" alt="Your Image" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col items-center">
          <button className="user-management-button" onClick={handleCreateUser}>
            Create User
          </button>
          <button className="user-management-button" onClick={handleListUsers}>
            List Users
          </button>
          <button className="user-management-button" onClick={handleGetUserDetails}>
            Get User Details
          </button>
          <button className="user-management-button" onClick={handleUpdateUser}>
            Update User
          </button>
          <button className="user-management-button" onClick={handleDeleteUser}>
            Delete User
          </button>
        </div>
        <wy-chat uid="my-chat-1"></wy-chat>
        <wy-files uid="customer-2-files"></wy-files>
        <wy-posts uid="product-1-feed"></wy-posts>
      </div>
      {weavy && <WyChat weavy={weavy} />}
    </div>
  );
};

export default UserManagement;
