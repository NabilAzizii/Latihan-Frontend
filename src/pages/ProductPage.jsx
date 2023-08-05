import React from 'react';
import { categories } from '../Data';
import { courses } from '../Data';
import Categories from '../components/Categories';
import Course from '../components/Course';

const ProductPage = () => {
  return (
    <div className="section mt-40">
      <div className="text-center ">
        <div className="sm:text-3xl text-2xl font-bold mb-5 ">
          Our Top <span className="text-teal-500">Categories</span>
        </div>
        <p className="text-sm text-gray-500 leading-7 max-w-[700px] mx-auto md:px-0 px-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eum? Facere enim, odio vel ut quae delectus fuga non blanditiis eum, eius tempore laudantium ratione dolorem odit hic deleniti optio.
        </p>
      </div>
      <div className="content-center grid md:grid-cols-4 sm:grid-cols-2 mt-12 px-8 gap-8">
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>
      <div className="text-xl text-center font-bold mt-10">Most <span className='text-teal-500'>Popular</span> Courses</div>
      <div className="mt-12 px-2 mb-4 md:mb-14">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 mt-12 px-8 gap-8">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
