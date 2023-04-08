import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  background: ${(props) => props.theme['gray-100']};
  border: solid 2px ${(props) => props.theme['gray-500']};
  border-radius: 5px;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 6px 16px;

  height: 100%;
  width: 100%;
  color: ${(props) => props.theme['gray-700']};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;

  span.number {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const Reset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 300px;
  background: ${(props) => props.theme['gray-300']};
  border-left: solid 2px ${(props) => props.theme['gray-500']};
  border-right: solid 2px ${(props) => props.theme['gray-500']};

  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme['white']};
`;

export const Score = styled.div`
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  color: ${(props) => props.theme['gray-700']};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50%;
  }

  div.score-total {
    border-top: solid 2px ${(props) => props.theme['gray-500']};
  }

  span.number {
    font-size: 20px;
  }
`;
