import React, { useState, useEffect } from 'react';

import BubbleState from '../services/BubbleState';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    BubbleState.setColorList = setColorList;
    BubbleState.setEditing = setEditing;
    BubbleState.setDeleting = setDeleting;
    if (!editing && !deleting) {
      BubbleState.getColors();
    }
  }, [editing, deleting]);

  return (
    <>
      <ColorList colors={colorList} editing={editing} setEditing={setEditing} setDeleting={setDeleting} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
