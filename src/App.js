import { useState } from "react";
function App() {
  const num = [620610791];
  const [counter, setcounter] = useState(620610791);
  const persons = [
    {
      name: "Thanachok Wirotsasithon 620610791",
      gender: "male",
      age: "20"
    },
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      {/* Code me please! */}
      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{counter}</p>
        <button
          onClick={() => {
            setcounter(Number(counter - 1));
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setcounter(Number(num));
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            setcounter(Number(counter + 1));
          }}
        >
          +
        </button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      {persons.map((item) => {
        return (
          <div>
            <table class="table is-bordered mb-3">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                </tr>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
