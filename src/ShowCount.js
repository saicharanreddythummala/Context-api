import Context from "./Context";

export default function ShowCount() {
  return (
    <div>
      <Context.Consumer>
        {(Context) => {
          return <div>{Context.count}</div>;
        }}
      </Context.Consumer>
    </div>
  );
}
