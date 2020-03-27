import React, { useState, useEffect } from 'react';

import BubbleState from '../services/BubbleState';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing) {
      BubbleState.colorList = colorList;
      BubbleState.setColorList = setColorList;
      BubbleState.setEditing = setEditing;
      BubbleState.getColors();
    }
  }, [editing]);

  return (
    <>
      <ColorList colors={colorList} editing={editing} setEditing={setEditing} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
