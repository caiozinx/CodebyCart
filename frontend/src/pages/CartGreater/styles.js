import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  width: 90%;

  li {
    padding: 5px 0px;
    display: flex;

    &:nth-last-child() {
      margin-bottom: 5px;
    }
  }

  li img {
    max-height: 85px;
    border: 1px solid #e3e3e3;
    margin: 0;
  }

  li div {
    margin-left: 10px;
    align-self: center;
    align-items: center;
  }

  li div small {
    color: #a3a3a3;
    font-size: 9px;
  }

  li div label,
  li div span {
    font-size: 11px;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5px;
  border-top: 1px solid #e3e3e3;
  width: 100%;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  div label {
    font-size: 16px;
    font-weight: bold;
    padding: 20px 20px;
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  width: 90%;
  margin: auto;
  margin-bottom: 12px;
  padding: 10px 0;
  border-radius: 7px;
  margin-top: 20px;
  background-color: #3b74f2;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const FreeShipping = styled.div`
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  margin: auto;
  p {
    padding: 8px;
    border-radius: 15px;
    background-color: #c7ffa6;
    color: #237c02;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
