import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  id: string;
  episodeName: string;
  isComplete: boolean;
  handleCheckbox: React.ChangeEventHandler<HTMLInputElement>;
  handleRemove: (id: string) => void;
}

const WatchListItem = ({
  id,
  episodeName,
  isComplete,
  handleCheckbox,
  handleRemove,
}: Props) => {
  return (
    <ListItem>
      <ListItemText primary={episodeName} />
      <ListItemSecondaryAction>
        <Checkbox
          id={id}
          checked={isComplete}
          onChange={handleCheckbox}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <IconButton
          onClick={() => handleRemove(id)}
          edge="end"
          aria-label="delete"
        >
          <DeleteIcon style={{ fill: '#c57' }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default WatchListItem;
