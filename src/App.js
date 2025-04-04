import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevıous() {
    if (step > 1) {
      setStep(s => s - 1);
    };
  };

  function handleNext() {
    if (step < 3) {
      setStep(s => s + 1);
    };
  };

  function handleClose() {
    setIsOpen(is => !is);

    setStep(1);
  };

  return (

    <>

      <button className="close" onClick={handleClose}>&times;</button>

      {isOpen && (

        <div className="steps">

          <div className="numbers">

            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>

          </div>

          <div className="message">

            <p>Step {step}: {messages[step - 1]}</p>

          </div>


          <div className="buttons">

            <button className="btn" onClick={handlePrevıous}>Prevıous</button>
            <button className="btn" onClick={handleNext}>Next</button>

          </div>

        </div>

      )}

    </>

  );

};
export default App;