// TODO: basic component, replace  ReactList with other component
import ReactList from './ReactList';

function Hello() {
  const heading = 'DevDeploy';

  return (
    <div>
      <h2>{heading}</h2>
      <ReactList />
    </div>
  );
}

export default Hello;
