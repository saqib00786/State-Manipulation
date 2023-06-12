import React, { useReducer } from "react";
import "../App.css";
import { Link } from "react-router-dom";

type State = {
  name: string;
  age: number;
};

type Action =
  | { type: "UPDATE_NAME"; payload: string }
  | { type: "UPDATE_AGE"; payload: number }
  | { type: "RESET" };

const UsingReduxStyle = () => {
  // const [name, setName] = React.useState<string>("");
  // const [age, setAge] = React.useState<number>(0);

  const [event, updateEvent] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "UPDATE_NAME":
          return { ...state, name: action.payload };
        case "UPDATE_AGE":
          return { ...state, age: action.payload };
        case "RESET":
          return { name: "", age: 0 };
        default:
          return state;
      }
    },
    { name: "", age: 0 }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(event);

  return (
    <div className="App">
      <h1>
        Maintain React TS Multiple States with useReducer in Redux-ify style
      </h1>

      <form className="form-data" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={event.name}
          placeholder="Enter your name"
          onChange={(e) =>
            updateEvent({ type: "UPDATE_NAME", payload: e.target.value })
          }
        />
        <input
          className="input"
          type="text"
          value={event.age}
          placeholder="Enter your age"
          onChange={(e) =>
            updateEvent({ type: "UPDATE_AGE", payload: Number(e.target.value) })
          }
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => updateEvent({ type: "RESET" })}>
          Reset Form
        </button>
      </form>

      <div>
        <h2>My name is {event.name}</h2>
        <h2>My age is {event.age}</h2>
      </div>

      <button>
        <Link to="/">Back Home</Link>
      </button>
      <button>
        <Link to="/user-info">User Info</Link>
      </button>
    </div>
  );
};

export default UsingReduxStyle;
