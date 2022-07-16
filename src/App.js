import React from 'react';
import AddPet from './pages/AddPet';
import PetList from './pages/PetList';
import AddCategory from './components/AddCategory/AddCategory';

function App() {
  return (
    <div style={{padding: "20px"}}>
    <h1>Welcome for PET application</h1>
    <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: "10px", marginTop: "10px"}}>

    <AddPet/>
    <AddCategory />
    </div>
      <PetList/>
  </div>
     );
}

export default App;
