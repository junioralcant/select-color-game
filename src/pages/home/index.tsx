import {
  Container,
  Content,
  Header,
  Reset,
  Score,
  Time,
} from './styles';

export function Home() {
  return (
    <Container>
      <Content>
        <h1>Adivinhe a cor</h1>

        <Header>
          <Time>
            <span>Tempo</span>
            <span className="number">17</span>
          </Time>

          <Reset className="restart-box">Resetar</Reset>

          <Score>
            <div>
              <span className="text">
                Pontuação<br></br>total
              </span>
              <span className="number">13</span>
            </div>

            <div className="score-total">
              <span className="text">Pontuação</span>
              <span className="number">13</span>
            </div>
          </Score>
        </Header>
      </Content>
    </Container>
  );
}
