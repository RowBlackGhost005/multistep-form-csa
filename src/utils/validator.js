export const validateText = (text) => text !== "";

export const validateOnlyText = (text) =>  /[a-zA-Z]/.test(text);

export const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

export const validateOnlyNumbers = (number) => /[0-9]/.test(number);

export const validateCurrency = (value) => /^\d+(\.\d{1,2})?$/.test(value);

export const validatePhone = (phone) => /^\d{10}$/.test(phone);

