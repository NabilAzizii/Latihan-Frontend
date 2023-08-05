import React from 'react';

const Button = (props) => {
  return (
    <div className="flex items-center justify-center">
      <button className="bg-[#00ebc7] text-[#00214d] font-[Poppins] px-6 py-3 rounded-lg md:ml-8 hover:scale-110 hover:font-semibold hover:shadow-lg duration-100">{props.children}</button>
    </div>
  );
};

export default Button;
