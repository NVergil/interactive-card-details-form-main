import { useState } from "react";
import Form from "./components/Form";
import { handleErrorStates } from "./utils";

const App = () => {
  const [cardDigits, setCardDigits] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [digits, setDigits] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorCardNumber, setErrorCardNumber] = useState("");
  const [errorMM, setErrorMM] = useState("");
  const [errorYY, setErrorYY] = useState("");
  const [errorCvc, setErrorCvc] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    if (success) {
      setSuccess(false);
      setCardDigits("");
      setCardMM("");
      setCardYY("");
      setDigits("");
      setCvc("");
      setName("");
    } else {
      handleErrorStates(
        e,
        name,
        setErrorName,
        digits,
        setErrorCardNumber,
        cardMM,
        setErrorMM,
        cardYY,
        setErrorYY,
        cvc,
        setErrorCvc,
        setSuccess
      );
    }
  };

  return (
    <main>
      <div className="side-background"></div>
      <section className="container">
        <picture>
          <img className="front" src="/bg-card-front.png" alt="" />
          <img className="back" src="/bg-card-back.png" alt="" />
          <div className="card-front-data">
            <img className="logo" src="/card-logo.svg" alt="" />
            <div className="card-front-data-info">
              <span className="front-digits">
                {cardDigits ? cardDigits : "0000 0000 0000 0000"}
              </span>
              <div>
                <p className="name">{name ? name : "JANE APPLESEED"}</p>
                <span className="exp-date-numbers">
                  {cardMM ? cardMM : "00"}/{cardYY ? cardYY : "00"}
                </span>
              </div>
            </div>
          </div>
          <div className="card-back-data">
            <span>{cvc ? cvc : "000"}</span>
          </div>
        </picture>
        {!success ? (
          <Form
            errorName={errorName}
            setName={setName}
            setErrorName={setErrorName}
            errorCardNumber={errorCardNumber}
            setErrorCardNumber={setErrorCardNumber}
            setCardDigits={setCardDigits}
            setDigits={setDigits}
            errorMM={errorMM}
            setCardMM={setCardMM}
            setErrorMM={setErrorMM}
            errorYY={errorYY}
            setErrorYY={setErrorYY}
            setCardYY={setCardYY}
            errorCvc={errorCvc}
            setCvc={setCvc}
            setErrorCvc={setErrorCvc}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div className="success-container">
            <img src="/icon-complete.svg" alt="" />
            <h1>thank you</h1>
            <p>We&apos;ve added your card details</p>
            <button onClick={handleSubmit}>Continue</button>
          </div>
        )}
      </section>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/NVergil" target="_blank" rel="noreferrer">VerDanT</a>.
      </footer>
    </main>
  );
};

export default App;
