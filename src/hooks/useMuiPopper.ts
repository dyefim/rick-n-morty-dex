import React from 'react';
import { PopperPlacementType } from '@material-ui/core/Popper/Popper';

const useMuiPopper = (popperPlacement: PopperPlacementType = 'bottom') => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] =
    React.useState<PopperPlacementType>(popperPlacement);

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen(prev => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  const close = () => {
    setOpen(false);
  };

  const toggle = handleClick(popperPlacement);

  return { open, anchorEl, placement, toggle, close };
};

export default useMuiPopper;
