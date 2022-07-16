import React,{useState} from 'react'
import { Card, Tag  } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { removePet } from "../../services/petService";
import PetForm from '../PetForm/PetForm';
import {  Modal } from 'antd';
import { editEdit } from '../../services/petService';

const { Meta } = Card;

const CardItem = ({ pet }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [petItem, setPetItem] = useState(pet ?? {})
    const setPet = (key, value) => setPetItem((prev) => ({
        ...prev,
        [key]: value
     }))
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = async  () => {
        await editEdit(petItem._id, petItem)
        window.location.reload("/");
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <>
            <Card
                hoverable
                style={{ width: 240, textAlign: 'center' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                actions={[
                    <EditOutlined key="edit" onClick={showModal}   />,
                    <DeleteOutlined key="delete"  onClick={async () => {                 
                        await removePet(pet._id);
                        window.location.reload("/");
                      }} />,
                ]}
            >
            <Meta  title={pet?.name} description={pet?.category?.name}/>
            <div style={{marginTop: "10px"}}>

            {pet?.tags?.map((tag) => <Tag key={tag._id}> {tag?.name}</Tag>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: "10px"}}>
            <span style={{ float: 'right'}} className={`badge badge-primary`}>{pet?.status}</span>
            </div>
            </Card>
            <Modal title="Edit Pet" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <PetForm setPet={setPet} petItem={petItem} />
            </Modal>
            </>
    )
}

export default CardItem