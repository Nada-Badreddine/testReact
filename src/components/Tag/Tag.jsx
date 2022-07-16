import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

const PetTag = ({ tagsData, setPet }) => {
  const [tags, setTags] = useState(tagsData ?? []);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, []);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setPet('tags', newTags)
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags((prevTags) =>
        [...prevTags, {name: inputValue}]
        );
        setPet('tags', [...tags, {name: inputValue}])
    }
    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag.name}
      </Tag>
    );
    return (
      <span
        key={tag._id}
        style={{
          display: 'inline-block',
        }}
      >
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
          {tagChild}
      </div>
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={showInput} className="site-tag-plus">
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </div>
  );
};

export default PetTag;