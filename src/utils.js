const trimInput = (info) => {
  const userInfo = {};
  for (const [key, value] of Object.entries(info)) {
    userInfo[key] = value.trim();
  }
  return userInfo;
};

export const validateForm = (userInfo) => {
  const trimmedUserInfo = trimInput(userInfo);
  const {
    firstName,
    lastName,
    birthday,
    phone,
    url,
    about,
    technologies,
    lastProject,
  } = trimmedUserInfo;
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
    formErrors.phone =
      'Номер должен состоять из 12 символов формата 7-7777-77-77!';
  if (url && !url.startsWith('https://'))
    formErrors.url = `Сайт должен начинаться с 'https://'!`;
  if (about && about.trim().length > 600)
    formErrors.about = 'Лимит превышен - удалите лишний текст!';
  if (technologies && technologies.trim().length > 600)
    formErrors.technologies = 'Лимит превышен - удалите лишний текст!';
  if (lastProject && lastProject.trim().length > 600)
    formErrors.lastProject = 'Лимит превышен - удалите лишний текст!';

  return { trimmedUserInfo, formErrors };
};
