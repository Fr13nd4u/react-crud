import React from "react";

interface ProductFilterProps {
  onFilter: (filterBy: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const [filterText, setFilterText] = React.useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterText(value);
    onFilter(value);
  };

  return (
    <input
      type="text"
      placeholder="Filter by title"
      value={filterText}
      onChange={handleFilterChange}
    />
  );
};

export default ProductFilter;
