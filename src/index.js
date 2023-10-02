import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'components/App';
// import './index.css';
import StarRating from 'components/StarRating';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={30} color="pink" className="test" />
  </React.StrictMode>
);
