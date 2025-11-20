export interface Tweet {
    id: string;
    user: string;
    text: string;
    createdAt?: string;
  }
  
  export const tweets: Tweet[] = [
    {
      id: "t1",
      user: "@morph",
      text: "Понял, что лучший баг — это тот, который я сам не создавал. Время кофе ☕️",
      createdAt: "2025-11-19T12:00:00Z"
    },
    {
      id: "t2",
      user: "@byteGuru",
      text: "Сегодня вечерний рефактор: удаляю 3 устаревших хука и чувствую себя богом.",
      createdAt: "2025-11-18T20:15:00Z"
    },
    {
      id: "t3",
      user: "@frontendfox",
      text: "Когда tailwind вытягивает дизайн за 10 минут — это магия. Когда не вытягивает — это карма.",
      createdAt: "2025-11-17T09:42:00Z"
    },
    {
      id: "t4",
      user: "@eth_scribbler",
      text: "Сделал мелкую оптимизацию смарт-контракта: газ просел, настроение выросло.",
      createdAt: "2025-11-16T14:30:00Z"
    },
    {
      id: "t5",
      user: "@lazyOps",
      text: "Если скрипт работает — добавь лог и поставь на cron. Через неделю забудешь, зачем он нужен.",
      createdAt: "2025-11-15T07:05:00Z"
    },
    {
      id: "t6",
      user: "@css_hermit",
      text: "Задача: сделать центрирование по вертикали. Решение: потерять полчаса и потом вспомнить про flex.",
      createdAt: "2025-11-14T22:10:00Z"
    },
    {
      id: "t7",
      user: "@queryMaster",
      text: "SQL в 3 утра: SELECT * FROM regrets WHERE paid = false;",
      createdAt: "2025-11-13T03:03:00Z"
    },
    {
      id: "t8",
      user: "@nodeNinja",
      text: "Небольшой мем: npm install — оно решает всё, пока не начнёт ломать всё.",
      createdAt: "2025-11-12T18:50:00Z"
    },
    {
      id: "t9",
      user: "@ux_sensei",
      text: "Кнопка должна быть понятной. Если не понятно — добавь текст. Если и текст не помогает — добавь tooltip.",
      createdAt: "2025-11-11T11:11:00Z"
    },
    {
      id: "t10",
      user: "@wander_dev",
      text: "Пора сделать небольшой side-project: генератор случайных идей для README. Начинаю с этого твита.",
      createdAt: "2025-11-10T16:25:00Z"
    },
    {
        id: "t11",
        user: "@wander_dev",
        text: "Пора сделать небольшой side-project: генератор случайных идей для README. Начинаю с этого твита.",
        createdAt: "2025-11-10T16:25:00Z"
      },
    
      {
        id: "t12",
        user: "@wander_dev",
        text: "Пора сделать небольшой side-project: генератор случайных идей для README. Начинаю с этого твита.",
        createdAt: "2025-11-10T16:25:00Z"
      },

  ];

  export const profilesInfo = [{
      id: "1",
      name: "morph",
      tag: "@morph.eth",
      description: "something about me lol",
      created_at: new Date().toString()
    }, ]
    
  
  
  export default tweets; profilesInfo;
  