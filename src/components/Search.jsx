function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search jobs, companies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 text-lg border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

export default Search;
