import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 380px;
  min-height: 580px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  margin: 30px auto;

  a[attr='data-header'] {
    position: absolute;
    align-self: flex-start;
    padding: 15px;
    color: #3b74f2;
  }

  h1 {
    font-size: 16px;
    padding: 8px 0px;
  }

  img {
    margin: 5px auto;
    max-width: 100px;
  }
`;
