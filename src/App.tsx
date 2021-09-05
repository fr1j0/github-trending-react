import TrendingLists from './components/trendingLists';

function App() {
  return (
    <div>
      <header>
        <h1>Trending</h1>
        <p>
          See what the GitHub community is most excited about today.
        </p>
      </header>
      <TrendingLists />
    </div>
  );
}

export default App;
