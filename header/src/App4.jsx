import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CollapsibleMenu2 from "./components/CollapsibleMenu2";
import LoginForm from "./components/LoginForm";
import CityList from "./components/CityList";
import CityItinerary from "./components/CityItinerary";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleLogin = (username) => {
    alert(`Welcome, ${username}!`);
  };

  return (
    <Router>
      <Header />
      <CollapsibleMenu2 />

      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

        <Route
          path="/cities"
          element={
            <div className="app">
              <h1>Cities to Choose</h1>
              {!selectedCity ? (
                <CityList onSelectCity={setSelectedCity} />
              ) : (
                <CityItinerary
                  city={selectedCity}
                  onBack={() => setSelectedCity(null)}
                />
              )}
            </div>
          }
        />

        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;