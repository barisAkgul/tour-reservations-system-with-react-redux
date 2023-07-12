import styled from "styled-components";

export const TopSection = styled.div`
  width: 100vw;
  height: 200px;
  background-color: #1a1a3d;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  position: relative;

  img {
    width: 100vw;
    height: 100%;
    opacity: 0.5;
  }

  .top-section-header {
    position: absolute;
    color: white;
    top: 60px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 44px;
  }
`;
