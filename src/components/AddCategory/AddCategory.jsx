import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { createCategory } from '../../services/categoryService';

const AddCategory = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categoryName, setCategoryName] = useState("")

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = async () => {
      await createCategory({ name: categoryName })
      window.location.reload("/");
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  return (
    <>
     <div>
    <Button type="primary" onClick={showModal}>
      Add Category
    </Button>
    </div>
    <Modal title="Add Category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>  
    <div>
        <label>
            Name :
        </label>
        <Input placeholder="Name" value={categoryName} onChange={(e) => setCategoryName( e.target.value)} />
    </div>          
    </Modal>
  </>
  )
}

export default AddCategory