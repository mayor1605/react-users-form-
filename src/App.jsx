import React, { useState } from 'react';
import Users from './Users';
import UsersForm from './UsersForm';

function App() {
  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'john@example.com', gen: 12 },
    { name: 'Jane Smith', email: 'jane@example.com', gen: 8 },
    { name: 'Emily Johnson', email: 'emily@example.com', gen: 5 },
  ]);

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User List</h1>
        <Users users={users} />
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Add New User</h2>
        <UsersForm handleAddUser={handleAddUser} />
      </div>
    </div>
  );
}

export default App;
