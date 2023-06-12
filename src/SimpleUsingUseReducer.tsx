import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

type State = {
  name: string;
  age: number;
};

type Action = Partial<State>;

const SimpleUsingUseReducer = () => {
  // const navigation = useNavigation();
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<number>(0);

  const [event, updateEvent] = useReducer(
    (state: State, action: Action) => {
      return {
        ...state,
        ...action,
      };
    },
    { name, age }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateEvent({ name, age })
  };

  console.log(event);

  return (
    <div className="App">
      <h1>Maintain React TS Multiple States with useReducer</h1>

      <form className="form-data" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Enter your age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>My name is {event.name}</h2>
        <h2>My age is {event.age}</h2>
      </div>

      <button>
        <Link to="/redux-style">Redux Style</Link>
      </button>
    </div>
  );
};

export default SimpleUsingUseReducer;
