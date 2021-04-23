import '../styles/Loader.css';

function Loader() {

  return (
    <main className="loader-container"> 
        <div role="alert" aria-busy="true" aria-label="Loading">Loading...</div>
    </main>
  );
}

export default Loader;
