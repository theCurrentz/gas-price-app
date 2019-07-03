import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: calc(100% - 32px);
  margin: 0px auto 0px 32px;
  padding-bottom: 100px;
  border-top-left-radius: 32px;
  background: white;
  box-shadow: 0px 2px 88px -32px rgba(0, 0, 0, 0.44);
  @media (max-width: 424px) {
    width: calc(100% - 18px);
    margin-left: 18px;
    padding-left: 18px;
  }
  section {
    display: flex;
    align-self: center;
    align-items: center;
    flex: 1 1;
    margin: 32px 20px 12px 32px;
    color: #84789c;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export default Container;
