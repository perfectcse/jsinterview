function SearchButton({ onSearch }) {
  return (
    <button onClick={() => onSearch("React")}>
      Search
    </button>
  );
}

function App() {
  function handleSearch(searchTerm) {
    console.log(searchTerm);
  }

  return <SearchButton onSearch={handleSearch} />;
}

export default App;