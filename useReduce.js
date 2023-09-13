// Initial form

const [users, setUsers] = useState();
const [topics, setTopics] = useState();

// Different form

const [state, setState] = useState({
  users: {},
  topics: [],
});

const updateUser = () => {
  // Update user logic
  setState();
};

const addReply = () => {
  setState();
};

const addTopic = () => {
  setState();
};

const reducer = (state, action) => {
  // State is the initial data
  // Action is an object, containing two keys, type, payload

  switch (action.type) {
    case "UPDATE_USER":
      // Update user logic
      return state;
    case "ADD_REPLY":
      // Update reply logic
      return state;
    case "ADD_TOPIC":
      // Update topic logic
      return state;
  }
};

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, { user: {}, topics: {} });

  const addReply = (content, userId) =>
    dispatch({ type: "ADD_REPLY", payload: { content: "", userId: 5 } });
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

dispatch({ type: "INCREMENT" });

const increment = () => dispatch({ type: "INCREMENT" })
const increment = dispatch({ type: "INCREMENT" })

<button onClick={increment}></button>



const someArray = [1,2,3,4,5]

const multiplyByTwo = number => number * 3
const anotherArray = someArray.map(number => number * 2)
const anotherArray = someArray.map(multiplyByTwo)
