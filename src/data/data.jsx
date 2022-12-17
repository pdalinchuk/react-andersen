const data = [
  {
    inputType: 'text',
    title: 'Имя',
    name: 'firstName',
    placeholder: 'Введите свое имя',
  },
  {
    inputType: 'text',
    title: 'Фамилия',
    name: 'lastName',
    placeholder: 'Введите свою фамилию',
  },
  { inputType: 'date', title: 'Дата рождения', name: 'birthday' },
  {
    inputType: 'tel',
    title: 'Телефон',
    name: 'phone',
    placeholder: '7-7777-77-77',
  },
  {
    inputType: 'url',
    title: 'Сайт',
    name: 'url',
    placeholder: 'https://ru.reactjs.org',
  },
  {
    title: 'О себе',
    name: 'about',
    rows: 7,
    placeholder: 'Расскажите о себе',
    maxlength: 600,
  },
  {
    title: 'Стек технологий',
    name: 'technologies',
    rows: 7,
    placeholder: 'HTML5, CSS3, JavaScript...',
    maxlength: 600,
  },
  {
    title: 'Описание последнего проекта',
    name: 'lastProject',
    rows: 7,
    placeholder: 'Опишите ваш последний проект',
    maxlength: 600,
  },
];

export default data;
