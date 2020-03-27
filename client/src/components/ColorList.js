import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BubbleState from '../services/BubbleState';

const initialColor = {
  color: '',
  code: { hex: '' }
};

const ColorList = ({ colors, editing, setEditing, setDeleting, setAdded }) => {
  const history = useHistory();
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = event => {
    event.preventDefault();
    BubbleState.editColor(colorToEdit);
    setColorToEdit(initialColor);
  };

  const deleteColor = color => {
    setDeleting(true);
    BubbleState.deleteColor(color.id);
  };

  const saveAddColor = event => {
    event.preventDefault();
    setAdded(true);
    BubbleState.addColor(colorToAdd);
    setColorToAdd(initialColor);
  }

  const handleLogout = () => {
    BubbleState.logout();
    history.push('/');
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <form onSubmit={saveAddColor}>
        <legend>add color</legend>
        <label>
          color name:
          <input
            onChange={e =>
              setColorToAdd({ ...colorToAdd, color: e.target.value })
            }
            value={colorToAdd.color}
          />
        </label>
        <label>
          hex code:
          <input
            onChange={e =>
              setColorToAdd({
                ...colorToAdd,
                code: { hex: e.target.value }
              })
            }
            value={colorToAdd.code.hex}
          />
        </label>
        <div className="button-row">
          <button type="submit">add</button>
        </div>
      </form>
      <div className="button-row">
        <button onClick={handleLogout}>logout</button>
      </div>
      <div className="spacer" />
    </div>
  );
};

export default ColorList;
