import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Site extends React.Component {
  render() {
    return (
      <div>
        <h1>Willkommen auf der Website des DorfQuartier!</h1>
        <p>Da wir momentan unsere Website restrukturieren, entschuldigen wir uns,
        für eventuelle Unannehmlichkeiten diesbezüglich.
        <br />Bei dringenden Anfragen, erreichen Sie uns nach wie vor unter:
        <br /><b>+49 5971 8 99 95 31</b>
        </p>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);
