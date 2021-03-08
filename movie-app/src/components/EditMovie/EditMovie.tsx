import React from 'react';
import { Action } from '../ThreeDotsIcon/styled/ThreeDotsIcon.styled';
import { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
`;

const ModalContent = styled.div`
  background-color: #232323;
  margin: auto;
  padding: 50px;
  border: 1px solid #888;
  width: 50%;
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #424242;
  }
`;

interface EditMovieProps {}

export const EditMovie: React.FC<EditMovieProps> = () => {
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <Modal>
          <ModalContent>
            <span onClick={e => setEdit(false)}>Close</span>
            <h1>edit movie</h1>
            <form>
              <div>
                <div>movie id</div>
                <div>mo32820th</div>
              </div>
              <div>
                <label>title</label>
                <input type="text" />
              </div>
              <div>
                <label>release date</label>
                <input type="date" />
              </div>
              <div>
                <label>movie url</label>
                <input type="text" />
              </div>
              <div>
                <label>genre</label>
                <input type="text" />
              </div>
              <div>
                <label>overview</label>
                <input type="text" />
              </div>
              <div>
                <label>runtime</label>
                <input type="text" />
              </div>
              <button>reset</button>
              <button>save</button>
            </form>
          </ModalContent>
        </Modal>
      ) : (
        <Action
          onClick={e => {
            setEdit(true);
          }}
        >
          Edit
        </Action>
      )}
    </>
  );
};
