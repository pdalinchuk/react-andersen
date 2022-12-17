const trimInput = function (info) {
  const userInfo = {};
  for (const [key, value] of Object.entries(info)) {
    userInfo[key] = value.trim();
  }
  return userInfo;
};

export const validateForm = function (userInfo) {
  const trimmedUserInfo = trimInput(userInfo);
  const { firstName, lastName, birthday, phone, url } = trimmedUserInfo;
  const formErrors = {};

  const regexPhone = /^[0-9]{1}[-]{1}[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;

  for (const [key, value] of Object.entries(trimmedUserInfo)) {
    if (!value) formErrors[key] = 'Поле пустое! Заполните, пожалуйста!';
  }

  if (firstName && firstName[0] !== firstName[0].toUpperCase())
    formErrors.firstName = 'Имя должно начинаться с заглавной буквы!';
  if (lastName && lastName[0] !== lastName[0].toUpperCase())
    formErrors.lastName = 'Фамилия должна начинаться с заглавной буквы!';
  if (birthday && Date.now() < Date.parse(birthday))
    formErrors.birthday = 'Дата рождения должна быть раньше текущей!';
  if (phone && !regexPhone.test(phone))
    formErrors.phone = 'Номер должен состоять из 12 символов!';
  if (url && !url.startsWith('https://'))
    formErrors.url = `Сайт должен начинаться с 'https://'!`;

  return { trimmedUserInfo, formErrors };
};
