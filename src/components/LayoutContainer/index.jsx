const LayoutContainer = ({ children }) => {
  return (
    <div className="LayoutContainer">
      <div className="LayoutContainer--wrapper">{children}</div>
    </div>
  );
};

export default LayoutContainer;
