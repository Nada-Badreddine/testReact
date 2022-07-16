import React, { useState, useEffect } from 'react'
import Card from '../components/Card/Card';
import { getAllPets, getPetByStatus } from '../services/petService';

const STATUS = ["available", "pending", "sold"];

const PetList = () => {
    const [petList, setPetList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentStatus, setCurrentStatus] = useState('');

    useEffect(() => {
        const fetchPetList = async () => {
           const petListData = await getAllPets()
           setPetList(petListData.data.result)
           setLoading(false)
        }
        const fetchPetListByStatus = async () => {
          const petListData = await getPetByStatus(currentStatus)
          setPetList(petListData.data.result)
          setLoading(false)
       }
       currentStatus ? fetchPetListByStatus() :  fetchPetList()
    }, [currentStatus])

    if(loading) return <p>loading...</p>;

  return (
    <div>
 <div className="form-group">
                            <label>
                            status : 
                            </label>
                            <select 
                            name="status" 
                            id="status"
                            onChange={(e) => setCurrentStatus( e.target.value)}>
                              <option
                                 value=""
                                 selected={"" === currentStatus}
                                 >
                                   All
                                </option> 
                                {STATUS.map((st) => <option
                                key={st}
                                 value={st}
                                 selected={st === currentStatus}
                                 >
                                    {st}
                                    </option> )}
                            </select>
                        </div>
    <div style={{ display: 'flex', gap:"10px" }}>
        {petList?.map((pet) =><div key={pet._id}><Card pet={pet}/></div>)}
    </div>
    </div>
  )
}

export default PetList