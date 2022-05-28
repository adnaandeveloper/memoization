const data = [
  {
    id: 1,
    url: 'https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=',
    number: 0,
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/photos/funny-winking-kitten-picture-id1267021092?k=20&m=1267021092&s=612x612&w=0&h=yzwxZXklHn5NwDTgKmbq2Ojtg3pga6j8K3oT7lLneAY=',
    number: 0,
  },
];
const imageDataReducer = (state = data, action) => {
  switch (action.type) {
    case 'ADD':
      return state.map((item) => {
        if (item.id !== action.payload) {
          return item;
        }
        return {
          ...item,
          number: item.number + 1,
        };
      });
    default:
      return state;
  }
};

export default imageDataReducer;
