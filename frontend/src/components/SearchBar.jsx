import { FaSearch } from "react-icons/fa";

// A reusable search bar.
// Controlled component: the parent owns the text via props.
//
// Props:
// - value: current search text
// - onChange: function called when the user types
// - placeholder: placeholder text
function SearchBar({ value, onChange, placeholder = "Search for restaurants..." }) {
  return (
    <div className="w-full max-w-2xl">
      {/* The white pill container */}
      <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-card">
        {/* Search icon */}
        <FaSearch className="text-primary text-lg shrink-0" />

        {/* The actual input field */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-text placeholder-gray-400 outline-none text-sm sm:text-base"
        />
      </div>
    </div>
  );
}

export default SearchBar;
