export const App = () => {
  const { REACT_APP_VERSION, NODE_ENV } = process.env;
  console.log(
    NODE_ENV === 'production'
      ? window.REACT_APP_VERSION
      : process.env.REACT_APP_VERSION
  );
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      {process.env.REACT_APP_VERSION}
      {window.REACT_APP_VERSION}
    </div>
  );
};
