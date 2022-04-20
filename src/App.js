import Counter from "./Counter";
import Provider from "./Provider";
import ShowCount from "./ShowCount";

export default function App() {
  return (
    <Provider>
      <Counter />
      <ShowCount />
    </Provider>
  );
}
