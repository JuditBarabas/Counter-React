export function IntervalInput({ changeInterval }) {
  return (
    <>
      <input type="number" min="1" defaultValue="1" onChange={changeInterval} />
    </>
  );
}
