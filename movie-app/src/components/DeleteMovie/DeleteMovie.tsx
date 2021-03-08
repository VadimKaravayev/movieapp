import React from 'react';
import { useState } from 'react';
import { Action } from '../ThreeDotsIcon/styled/ThreeDotsIcon.styled';
import styled from 'styled-components';

const DeteteModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  .modal-content {
    margin: 5% auto 15% auto;
    width: 80%;
    background-color: #232323;
  }
`;

export const DeleteMovie: React.FC = () => {
  const [isDelete, setDelete] = useState(false);
  return (
    <>
      {isDelete ? (
        <DeteteModal>
          <div className="modal-content">
            <span onClick={e => setDelete(false)}>Close</span>
            <div>delete movie</div>
            <div>Are you sure you want to delete this movie?</div>
            <button>Confirm</button>
          </div>
        </DeteteModal>
      ) : (
        <Action onClick={e => setDelete(true)}>Delete</Action>
      )}
    </>
  );
};
