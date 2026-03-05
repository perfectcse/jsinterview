function Counter({ title, count }) {
  return (
    <div className="counter-box">
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;