const articles = (state = [], action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
    console.log(state)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          read: false
        }
      ];
    //   case 'TOGGLE_TODO':
    //     return state.map(todo =>
    //       (todo.id === action.id)
    //         ? {...todo, completed: !todo.completed}
    //         : todo
    //     )
    default:
      return state;
  }
};

export default articles;
