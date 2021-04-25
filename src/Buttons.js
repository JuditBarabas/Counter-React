export function Buttons({ increase, decrease, sign }) {
  return (
    <>
      <button
        onClick={sign === "+" ? increase : decrease}
        className={sign === "+" ? "increment" : "decrement"}
      >
        {sign}
      </button>
    </>
  );
}
