import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
// import App from 'components/App';
// import './index.css';
import StarRating from 'components/StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={30} color="pink" className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
