import React, { useState, useEffect } from 'react';

import BubbleState from '../services/BubbleState';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    BubbleState.setColorList = setColorList;
    BubbleState.setEditing = setEditing;
    BubbleState.setDeleting = setDeleting;
    BubbleState.setAdded = setAdded;
    if (!editing && !deleting && !added) {
      BubbleState.getColors();
    }
  }, [editing, deleting, added]);

  return (
    <>
      <ColorList colors={colorList} editing={editing} setEditing={setEditing} setDeleting={setDeleting} setAdded={setAdded} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
