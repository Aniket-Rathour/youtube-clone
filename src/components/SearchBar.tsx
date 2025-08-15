export const SearchBar = () => (
  <form className="flex items-center max-w-md w-full border border-gray-500 rounded-full overflow-hidden">
    <input
      type="text"
      placeholder="Search"
      className="flex-grow px-4 py-2 bg-transparent focus:outline-black"
    />
    <button className="px-4">
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z" />
      </svg>
    </button>
  </form>
);
