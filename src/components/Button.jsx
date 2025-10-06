export const Button = ({ text, color, onClick }) => {
  const style = {
    backgroundColor: color,
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};
