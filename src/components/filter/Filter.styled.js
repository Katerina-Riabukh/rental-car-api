import styled from "styled-components";

export const LABEL = styled.label`
  position: relative;
  color: rgba(138, 138, 137, 1);
`;
export const INPUT1 = styled.input`
  padding-left: 70px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-top: none;
  border-bottom: none;
  border-left: none;
  border-right: 1px solid rgba(138, 138, 137, 1);
  background-color: rgba(247, 247, 251, 1);
  width: 60px;
`;

export const INPUT2 = styled.input`
  padding-left: 70px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  width: 60px;
`;
export const SPAN = styled.span`
  display: block;
  position: absolute;
  top: 9px;
  left: 0;
  margin-left: 24px;
`;

export const BUTTON = styled.button`
  padding: 14px 44px;
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 12px;
  background-color: rgba(52, 112, 255, 1);
  cursor: pointer;
`;

export const FORM = styled.form`
  display: flex;
  gap: 18px;
  margin-top: 30px;
`;

export const LabelSpan = styled.span`
  position: absolute;
  top: -25px;
  color: rgba(138, 138, 137, 1);
`;
export const LabelInput = styled.label`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const SpanLabel = styled.span`
  color: rgba(138, 138, 137, 1);
  position: absolute;
  top: -25px;
`;
