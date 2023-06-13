/* eslint-disable react/prop-types */
import {
  handleCardNumbersChange,
  handleCardMMchange,
  handleCardYYchange,
  handleCardCvcChange,
} from "../utils";

const Form = ({
  errorName,
  setName,
  setErrorName,
  errorCardNumber,
  setErrorCardNumber,
  setCardDigits,
  setDigits,
  errorMM,
  setCardMM,
  setErrorMM,
  errorYY,
  setErrorYY,
  setCardYY,
  errorCvc,
  setCvc,
  setErrorCvc,
  handleSubmit
}) => {

  const handleKeyPress = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <form>
      <label htmlFor="cardholder">cardholder name</label>
      <input
        className={errorName && "error-states-inputs"}
        id="cardholder"
        type="text"
        placeholder="e.g. Jane Appleseed"
        maxLength={25}
        onInput={(e) => setName(e.target.value)}
        onFocus={() => setErrorName("")}
      />
      {errorName && <span className="error-states-messages">{errorName}</span>}
      <label htmlFor="cardnumber">card number</label>
      <input
        className={errorCardNumber && "error-states-inputs"}
        id="cardnumber"
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={16}
        onInput={(e) => handleCardNumbersChange(e, setCardDigits, setDigits)}
        onKeyDown={handleKeyPress}
        onFocus={() => setErrorCardNumber("")}
      />
      {errorCardNumber && (
        <span className="error-states-messages">{errorCardNumber}</span>
      )}
      <div className="date-container">
        <div>
          <label htmlFor="exp-date">exp.date (mm/yy)</label>
          <div className="exp-date">
            <div>
              <input
                className={errorMM && "error-states-inputs"}
                id="exp-date"
                type="text"
                placeholder="MM"
                maxLength={2}
                onInput={(e) => handleCardMMchange(e, setCardMM)}
                onKeyDown={handleKeyPress}
                onFocus={() => setErrorMM("")}
              />
              <br />
              {errorMM && (
                <span className="error-states-messages">{errorMM}</span>
              )}
            </div>
            <div>
              <input
                className={errorYY && "error-states-inputs"}
                id="exp-date-yy"
                type="text"
                placeholder="YY"
                maxLength={2}
                onInput={(e) => handleCardYYchange(e, setCardYY)}
                onKeyDown={handleKeyPress}
                onFocus={() => setErrorYY("")}
              />
              {errorYY && (
                <span className="error-states-messages">{errorYY}</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <label className="cvc" htmlFor="cvc">
            cvc
          </label>
          <input
            className={errorCvc && "error-states-inputs"}
            id="cvc"
            type="text"
            placeholder="e.g. 123"
            maxLength={4}
            onInput={(e) => handleCardCvcChange(e, setCvc)}
            onKeyDown={handleKeyPress}
            onFocus={() => setErrorCvc("")}
          />
          {errorCvc && (
            <span className="error-states-messages">{errorCvc}</span>
          )}
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
