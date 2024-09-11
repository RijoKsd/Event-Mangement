import { useEffect, useState } from "react";
import UserCard from "../../components/admin/UserCard";
import useUserData from "../../hooks/useUserData";

const UserManagement = () => {
  const { users, loading, error, fetchUsers } = useUserData();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
    if (users) {
      setUserList(users);
    }
  }, [users]);

 
  const handleStatusChange = (userId, newStatus) => {
    setUserList((prevUsers) =>
      prevUsers
        .map((user) =>
          user.id === userId ? { ...user, status: newStatus } : user
        )
        .filter((user) => user.status !== "removed")
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return <div className="text-center text-error">Error: {error}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">User Management</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-4">
        {userList.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
