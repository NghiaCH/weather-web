const index = (props) => {
  const { skeletonStyles } = props;
  return (
    <div
      className="skeleton"
      style={{
        ...skeletonStyles,
      }}
    ></div>
  );
};

export default index;
