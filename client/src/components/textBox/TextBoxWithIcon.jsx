import React from "react";


export const TextBoxWithIcon = ({ setFilter, filter}) => {
  const handleChange = (e) => {
    setFilter({ ...filter, search: e.target.value });
  };

  return (
    <>
      <input
        className="inputSearch"
        type="text"
        onChange={handleChange}
        placeholder="Buscar"
      />
    </>
  );
};