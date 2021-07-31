import React from 'react';

interface Props {
  id: string;
  episodeName: string;
  isComplete: boolean;
  handleCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  handleRemove: (id: string) => void;
}

const ListItem = ({
  id,
  episodeName,
  isComplete,
  handleCheckbox,
  handleRemove,
}: Props) => {
  return (
    <li key={id}>
      {episodeName}{' '}
      <input
        type="checkbox"
        checked={isComplete}
        id={id}
        onChange={handleCheckbox}
      />
      <button onClick={() => handleRemove(id)}>x</button>
    </li>
  );
};

export default ListItem;
