import React, { useState } from "react";
import '../components/HorizontalText.css'

function MovingWords() {
  const [words] = useState(["Hello", "world", "this", "is", "a", "moving", "words", "example"]);

  return (
    <div className="moving-words-container">
      {words.map((word, index) => (
        <span key={index} className="moving-word">
          {word}
        </span>
      ))}
    </div>
  );
}

export default MovingWords;