const index = (props) => {
  const { skeletonStyles } = props;
  return (
    <div
      className={`blurSkeleton ${props?.className}`}
      style={{
        ...skeletonStyles,
      }}
    ></div>
  );
};

export default index;
