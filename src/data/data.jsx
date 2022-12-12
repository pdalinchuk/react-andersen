const data = [
  {
    inputType: 'text',
    title: 'Имя',
    name: 'name',
    placeholder: 'Введите свое имя',
  },
  {
    inputType: 'text',
    title: 'Фамилия',
    name: 'surname',
    placeholder: 'Введите свою фамилию',
  },
  { inputType: 'date', title: 'Дата рождения', name: 'birthday' },
  {
    inputType: 'tel',
    title: 'Телефон',
    name: 'phone',
    placeholder: '+375 (ХХ) ХХХ-ХХ-ХХ',
  },
  { title: 'О себе', name: 'about', rows: 7, placeholder: 'Расскажите о себе' },
  {
    title: 'Стек технологий',
    name: 'technologies',
    rows: 7,
    placeholder: 'HTML5, CSS3, JavaScript...',
  },
  {
    title: 'Описание последнего проекта',
    name: 'last_project',
    rows: 7,
    placeholder: 'Опишите ваш последний проект',
  },
];

export default data;
