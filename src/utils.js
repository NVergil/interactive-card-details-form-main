const handleCardNumbersChange = (e, setCardDigits, setDigits) => {
  const inputDigits = e.target.value.replace(/\s/g, ""); // Eliminar espacios en blanco
  const formattedDigits = inputDigits.padEnd(16, "0").slice(0, 16);

  const spacedDigits = formattedDigits.replace(/(\d{4})/g, "$1 ");

  setCardDigits(spacedDigits);
  setDigits(e.target.value);
};

const handleCardMMchange = (e, setCardMM) => {
  const inputDigits = e.target.value.replace(/\s/g, "");
  const formattedDigits = inputDigits.padEnd(2, "0").slice(0, 2);

  setCardMM(formattedDigits);
};

const handleCardYYchange = (e, setCardYY) => {
  const inputDigits = e.target.value.replace(/\s/g, "");
  const formattedDigits = inputDigits.padEnd(2, "0").slice(0, 2);

  setCardYY(formattedDigits);
};

const handleCardCvcChange = (e, setCvc) => {
  const inputDigits = e.target.value.replace(/\s/g, "");

  setCvc(inputDigits);
};

const handleErrorStates = (
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
) => {
  e.preventDefault();

  const regex = /^\d*$/; // Expresión regular para solo permitir dígitos
  const regexOnlyLetters = /^[^0-9]*$/;
  const currentTime = new Date();
  const year = currentTime.getFullYear().toString().slice(-2);

  let isValid = true;

  if (!name.trim("")) {
    setErrorName("Can't be blank");
    isValid = false; // La validación falla, establecer isValid en false
  }

  if (!regexOnlyLetters.test(name)) {
    setErrorName("Please use just letters");
    isValid = false;
  }

  if (!digits) {
    setErrorCardNumber("Can't be blank");
    isValid = false;
  } else if (!regex.test(parseInt(digits))) {
    setErrorCardNumber("Wrong format, numbers only");
    isValid = false;
  } else if (digits.length < 16) {
    setErrorCardNumber("Wrong format, 16 digits required");
    isValid = false;
  }

  if (!cardMM) {
    setErrorMM("Can't be blank");
    isValid = false;
  } else if (!regex.test(parseInt(cardMM))) {
    setErrorMM("Wrong format");
    isValid = false;
  } else if (cardMM > 12 || cardMM < 1) {
    setErrorMM("Invalid date format");
    isValid = false;
  }

  if (!cardYY) {
    setErrorYY("Can't be blank");
    isValid = false;
  } else if (!regex.test(parseInt(cardYY))) {
    setErrorYY("Wrong format");
    isValid = false;
  } else if (cardYY < year) {
    setErrorYY("Expired");
    isValid = false;
  }

  if (!cvc) {
    setErrorCvc("Can't be blank");
    isValid = false;
  } else if (!regex.test(cvc)) {
    setErrorCvc("Wrong format");
    isValid = false;
  } else if (cvc.length < 3) {
    setErrorCvc("Min 3 digits");
    isValid = false;
  }

  setSuccess(isValid); // Devolver el estado general de las validaciones
};

export {
  handleCardNumbersChange,
  handleCardMMchange,
  handleCardYYchange,
  handleCardCvcChange,
  handleErrorStates,
};
