import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {
  const [members, setMembers] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => setMembers(users));
    console.log(count)
  }, [count]) //only run if count changes

const onSearchChange = (event) => {
  setSearchfield(event.target.value)
}

const filteredMembers = members.filter(member => {
  return member.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  return !members.length ?
    <h1 className='tc f1'>Loading...</h1> :
  (
    <div className='tc'>  
      <h1 className='f1'> Robofriends </h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
      <ErrorBoundry>           
        <CardList members={filteredMembers}/>
      </ErrorBoundry>
      </Scroll>
    </div> 
);
}  
    
export default App;
