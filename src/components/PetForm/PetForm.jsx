import React, { useState, useEffect } from 'react';
import { Input } from 'antd'
import { getAllCategories } from '../../services/categoryService';
import PetTag from '../Tag/Tag';

const STATUS = ["available", "pending", "sold"];

const PetForm = ({ petItem, setPet }) => {
 const [categories, setCategories] = useState([])

 useEffect(() => {
    const fetchCategories = async () => {
       const categoriesListData = await getAllCategories()
       setCategories(categoriesListData.data.result)
    }
    fetchCategories()
}, [])

  return (
      <div className="form-group">
        <div>
                            <label>
                            Name :
                            </label>
            <Input placeholder="Name" value={petItem?.name ?? ''} onChange={(e) => setPet('name', e.target.value)} />
                          
                        </div>
                        <div className="form-group" style={{ marginTop: "10px"}}>
                            <label>
                            Category :
                            </label>
                            <select 
                            style={{width: '100%'}}
                            name="category" 
                            id="category"
                            onChange={(e) => setPet('category', e.target.value)}>
                                {categories?.map((cat) =>
                                 <option 
                                   value={cat._id}
                                   selected={petItem?.category?.name === cat?.name}
                                  >
                                    {cat?.name}
                                </option>
                                  )}
                            </select>
                        </div>
                        <div className="form-group" style={{ marginTop: "10px"}}>
                            <label>
                            Tags :
                            </label>
                        <PetTag tagsData={petItem?.tags ?? []} setPet={setPet} />
                        </div>
                        <div className="form-group">
                            <label>
                            Status :
                            </label>
                            <select 
                            style={{width: '100%'}}
                            name="status" 
                            id="status"
                            onChange={(e) => setPet('status', e.target.value)}>
                                {STATUS.map((st) => <option
                                key={st}
                                 value={st}
                                 selected={st === petItem.status}
                                 >
                                    {st}
                                    </option> )}
                            </select>
                        </div>
                    </div>
                    )
}

export default PetForm