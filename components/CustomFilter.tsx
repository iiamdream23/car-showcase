import React from "react";

interface CustomFilterProps {
  title: string;
}

const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  // Your CustomFilter component implementation here
  return <div>{title}</div>;
};

export default CustomFilter;


// import React from 'react'

// const CustomFilter = () => {
//   return (
//     <div>{title}</div>
//   )
// }

// export default CustomFilter