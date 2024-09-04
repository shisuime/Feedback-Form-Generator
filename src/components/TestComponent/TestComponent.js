const TestComponent = ({ data }) => {
  if (!data) {
    return null;
  }
  return <div>{data}</div>;
};

export default TestComponent;
