import logo from './logo.svg';
import './App.css';

function Header({title}) {
  return <h1>{title}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick(){
    console.log("increment like count");
  }

  return (
    <div>
      {/* Nesting the Header component */}
      <Header title="React <3" />
      <button onClick={handleClick}>Like</button>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
