import React from 'react';

const Users = ({ users }) => {
  return (
    <div className="space-y-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg bg-gray-50 flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Gen: {user.gen}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
