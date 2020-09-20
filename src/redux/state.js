const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let posts = [
  { id: 1, msg: "Hi, it's Name", likesCount: 23 },
  { id: 2, msg: "Hi, it's Surname", likesCount: 233 },
];

let dialogs = [
  {
    id: "1",
    name: "Alexey",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
  },
  {
    id: "2",
    name: "Nastya",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
  },
  {
    id: "3",
    name: "Vadim",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
  },
  {
    id: "4",
    name: "Alcoholic",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
  },
];

let messages = [
  { id: "1", msg: "Hi it's u?" },
  { id: "2", msg: "Hello it's u?" },
  { id: "3", msg: "Bye it's u?" },
];

let friends = [
  {
    id: 1,
    name: "Alex",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
    link: "/",
  },
  {
    id: 2,
    name: "Vadim",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
    link: "/",
  },
  {
    id: 3,
    name: "Sasha",
    img:
      "https://www.gravatar.com/avatar/be299f224394ab488001c9cab12eae2c?d=wavatar&s=256",
    link: "/",
  },
];

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

let state = {
  profilePage: {
    posts,
    newPostText: "",
  },
  messagePage: {
    dialogs,
    messages,
  },
  friendsPage: {
    friends,
  },
};

let store = {
  _state: state,
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("rrr");
  },
  _addPost() {
    let newPost = {
      id: 3,
      msg: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newText);
    }
  },
};

export default store;
