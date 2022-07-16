import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import PetForm from '../components/PetForm/PetForm';
import { createPet } from '../services/petService';

const AddPet = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [petItem, setPetItem] = useState({})
    const setPet = (key, value) => setPetItem((prev) => ({
        ...prev,
        [key]: value
     }))
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = async () => {
      await createPet(petItem)
      window.location.reload("/");
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  return (
    <>
     <div >
    <Button type="primary" onClick={showModal}>
      Add Pet
    </Button>
    </div>
    <Modal title="Add Pet" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>  
   <PetForm setPet={setPet} petItem={petItem} />
    </Modal>
  </>
  )
}

export default AddPet