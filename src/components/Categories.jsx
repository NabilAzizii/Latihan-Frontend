import React from 'react';

const Categories = ({ icon, category }) => {
  return (
    <div className="flex items-center -z-10 flex-col gap-4 bg-gray-300 p-10 rounded-md">
      <div className="text-4xl text-teal-500">{icon}</div>
      <div>{category}</div>
      <a href="/" className="text-sm text-gray-800">
        View More
      </a>
    </div>
  );
};

export default Categories;
