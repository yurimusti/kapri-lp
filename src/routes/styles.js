import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  max-height: 100vh;
`;

export const Sidebar = styled.div`
  width: 100%;
  max-height: 100%;
  flex: 1;
`;

export const Body = styled.div`
  /* width: calc(100% - 260px); */
  flex: 13;
  background: #fcfcfc;
  min-height: 100vh;
  overflow: scroll;
`;

export const Loading = styled.div`
  ${({ show }) => (show ? "display: flex;" : "display: none;")}
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: #00000088;
  justify-content: center;
  align-items: center;
`;
