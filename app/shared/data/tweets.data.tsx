
const regData = new Date()


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


  export const profiles = {
    "@morph": {
      id: "p1",
      tag: "@morph",
      name: "Morph Weaver",
      description: "Любитель превращать баги в фичи. Кофе — мой компилятор.",
      created_at: regData.toLocaleDateString()
    },
    "@byteGuru": {
      id: "p2",
      tag: "@byteGuru",
      name: "Byte Guru",
      description: "Мастер оптимизаций. Если можно удалить — удалю.",
      created_at: regData.toLocaleDateString()
    },
    "@frontendfox": {
      id: "p3",
      tag: "@frontendfox",
      name: "Frontend Fox 🦊",
      description: "Живу между Tailwind и React. Лайки за аккуратный UI.",
      created_at: regData.toLocaleDateString()
    },
    "@eth_scribbler": {
      id: "p4",
      tag: "@eth_scribbler",
      name: "ETH Scribbler",
      description: "Пишу смарт-контракты так, будто за газ платит кто-то другой.",
      created_at: regData.toLocaleDateString()
    },
    "@lazyOps": {
      id: "p5",
      tag: "@lazyOps",
      name: "Lazy Ops",
      description: "Автоматизирую всё, что вижу. Остальное — завтра.",
      created_at: regData.toLocaleDateString()
    },
    "@css_hermit": {
      id: "p6",
      tag: "@css_hermit",
      name: "CSS Hermit",
      description: "Flex, Grid и немного дзена. Остальное — боль.",
      created_at: regData.toLocaleDateString()
    },
    "@queryMaster": {
      id: "p7",
      tag: "@queryMaster",
      name: "Query Master",
      description: "SQL колдун. SELECTаю — значит существую.",
      created_at: regData.toLocaleDateString()
    },
    "@nodeNinja": {
      id: "p8",
      tag: "@nodeNinja",
      name: "Node Ninja",
      description: "Разбираю баги быстрее, чем npm успевает сломаться.",
      created_at: regData.toLocaleDateString()
    },
    "@ux_sensei": {
      id: "p9",
      tag: "@ux_sensei",
      name: "UX Sensei",
      description: "Веду пользователей по пути просветления через интерфейс.",
      created_at: regData.toLocaleDateString()
    },
    "@wander_dev": {
      id: "p10",
      tag: "@wander_dev",
      name: "Wander Dev",
      description: "Блуждаю по идеям и side-project’ам. Пишу, что приходит в голову.",
      created_at: regData.toLocaleDateString()
    },
  };
  
  
  export const profilesInfo = [{
      id: "1",
      name: "morph",
      tag: "@morph.eth",
      description: "something about me lol",
      created_at: regData.toLocaleDateString()
    },
    {
      id: "2",
      name: "Guru",
      tag: "@byteGuru",
      description: "something about me lol",
      created_at: regData.toLocaleDateString()
    },
    {
      id: "3",
      name: `Frontend fox🦊`,
      tag: "@frontendfox",
      description: "something about me lol",
      created_at: regData.toLocaleDateString()
    }, ]
    
  
  
  export default tweets; profilesInfo; profiles;
  