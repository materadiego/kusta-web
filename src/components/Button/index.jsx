const Button = ({ text, action, color, margin }) => {
  return (
    <button
      className={`Button ${color}`}
      style={{ margin: margin }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
