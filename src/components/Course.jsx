import React from 'react';

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-3 -z-10 shadow-lg min-w-[15rem] bg-white rounded-md">
      <img src={image} alt="" />
      <div className="mt-2 text-xs text-teal-500">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <ion-icon name="people-outline"></ion-icon>
          </div>
          <div className="text-sm font-bold">{participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <ion-icon name="star-outline"></ion-icon>
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">${price}</div>
      </div>
    </div>
  );
};

export default Course;
