import styled from "styled-components";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: ""; // 가상 요소 사용시 content 필수 사용
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;