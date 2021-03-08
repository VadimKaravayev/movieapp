import styled from 'styled-components';

export const Icon = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #232323;
  cursor: pointer;
  &:after {
    content: '•••';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    font-size: 15px;
    letter-spacing: 4px;
    margin-top: 2px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  color: #ffffff;
  background-color: #232323;
  width: 100px;
  padding: 20px 0px 10px 0px;
  border-radius: 5%;
}
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 3px;
  right: 7px;
  cursor: pointer;
  &:before {
    content: 'x';
    color: #fff;
    font-weight: 300;
    font-family: Arial, sans-serif;
  }
`;

export const Action = styled.div`
  padding: 5px 20px 5px 20px;
  &:hover {
    background-color: #f65261;
    cursor: pointer;
  }
`;
