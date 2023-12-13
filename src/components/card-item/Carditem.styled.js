import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 274px;
  height: 426px;
  flex-basis: calc((100% - 87px) / 4);
`;

export const IMG = styled.div`
  position: relative;
`;
export const Heart = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;
`;

export const Checkbox = styled.input`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding-bottom: 12px;
  padding-top: 12px;
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 12px;
  background-color: rgba(52, 112, 255, 1);
`;

export const Header2 = styled.h2`
  display: flex;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  margin-top: 14px;
`;

export const SpanPrice = styled.span`
  margin-left: auto;
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: calc(24 / 18);
`;
