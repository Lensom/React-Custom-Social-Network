let posts = [
  { id: 1, msg: "Hi, it's Name", like: 23 },
  { id: 2, msg: "Hi, it's Surname", like: 233 }
]

let dialogs = [
  { id: '1', name: 'Alexey' },
  { id: '2', name: 'Nastya' },
  { id: '3', name: 'Vadim' },
  { id: '4', name: 'Alcoholic' }
]

let messages = [
  { id: '1', msg: "Hi it's u?" },
  { id: '2', msg: "Hello it's u?" },
  { id: '3', msg: "Bye it's u?" }
]

let friends = [
  { id: 1, name: 'Alex', img: 'https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256', link: "/" },
  { id: 2, name: 'Vadim', img: 'https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256', link: "/" },
  { id: 3, name: 'Sasha', img: 'https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256', link: "/" },
]

let state = {
  profilePage: {
    posts,
  },
  messagePage: {
    dialogs,
    messages
  },
  friendsPage: {
    friends
  }
}

export default state;