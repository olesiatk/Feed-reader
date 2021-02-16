import React, { useState } from 'react'
import './App.css';
import { FeedScreen } from './components/FeedScreen/FeedScreen';
import { LoginScreen } from './components/LoginScreen/LoginScreen';


function App() {
  const [onFeedPage, setOnFeedPage] = useState(false);
  const [userId, setUserId] = useState(null);

  const goToFeedScreen = (id) => {
    setUserId(id);
    setOnFeedPage(true);
  }
  const goToLoginScreen = () => {
    setUserId(null);
    setOnFeedPage(false);
  }

  return (
    <div className="App">
      <main className="App-header">
        {!onFeedPage && (
          <LoginScreen 
          goToFeedScreen={goToFeedScreen}
          />
        )}
        {onFeedPage && userId && (
          <FeedScreen
          userId={userId}
          goToLoginScreen={goToLoginScreen}
          />
        )}
      </main>

    </div>
  );
}

export default App;
