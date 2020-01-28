import React from 'react';
import './App.css';
import Jokes from './Jokes';

function App() {
  return (
    <div className="jokes">

      <h1>Weiting's Hand Selected Jokes for You Today!</h1>

      <div className="single-joke-item">
        <Jokes
          question="What's the best thing about Switzerland?"
          punchLine="I don't know, but the flag is a big plus!"
        />
      </div>
      <div className="single-joke-item">
        <Jokes
          question=""
          punchLine="I told my wife she was drawing her eyebrows too high. She looked surprised."
        />
      </div>
      <div className="single-joke-item">
        <Jokes
          question="What happens if you eat yeast and shoe polish?"
          punchLine="Every morning you’ll rise and shine!"
        />
      </div>
      <div className="single-joke-item">
        <Jokes
          question=""
          punchLine="Working in a mirror factory is something I can totally see myself doing."
        />
      </div>
      <div className="single-joke-item">
        <Jokes
          question="What’s the difference between a guitar and a fish?"
          punchLine="You can’t tuna fish."
        />
      </div>
      <div className="single-joke-item">
        <Jokes
          question="Did you hear about that new broom?"
          punchLine="It’s sweeping the nation!"
        />
      </div>

      <p>Weiting's practice project. </p>
      <p>See more on www.wontosa.com/projects.</p>
      <p>Made with ♥ in 2020.</p>
    </div>
  );
}

export default App;
