```javascript
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to the home route
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}
export default App;
```