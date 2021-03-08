import React from 'react';
import { Menu, CloseIcon, Action, Icon } from './styled/ThreeDotsIcon.styled';
import { EditMovie } from '../EditMovie/EditMovie';
import { useState } from 'react';
import { DeleteMovie } from '../DeleteMovie/DeleteMovie';

export const ThreeDotsIcon: React.FC = () => {
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <>
      {isShowMenu ? (
        <Menu>
          <CloseIcon id="cls" onClick={e => setShowMenu(false)} />
          <EditMovie />
          <DeleteMovie />
        </Menu>
      ) : (
        <Icon onClick={e => setShowMenu(true)} />
      )}
    </>
  );
};
//onMouseLeave={() => setShowMenu(false)}
