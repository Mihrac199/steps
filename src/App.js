const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {

  const step = 1;

  return (

    <div className="steps">

      <div className="numbers">

        <div className={`${step >= 1 ? "active" : null}`}>1</div>
        <div className={`${step >= 2 ? "active" : null}`}>2</div>
        <div className={`${step >= 3 ? "active" : null}`}>3</div>

      </div>

      <div className="message">

        <p>Step {step}: {messages[step - 1]}</p>

      </div>


      <div className="buttons">

        <button className="btn">Prevıous</button>
        <button className="btn">Next</button>

      </div>

    </div>

  );

};

export default App;