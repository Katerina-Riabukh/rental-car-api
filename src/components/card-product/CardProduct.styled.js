import styled from "styled-components";

export const Wraper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
`;

export const Span = styled.span`
  color: rgba(52, 112, 255, 1);
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: calc(24 / 18);
  margin-left: 5px;
  margin-right: 5px;
`;

export const ShortDescriptionWraper = styled.div`
  margin-top: 8px;
`;

export const ShortDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: calc(18 / 12);
  color: rgba(18, 20, 23, 0.5);
  &:last-child {
    margin-top: 4px;
  }
`;

// export const Descriotion = styled.p`

// `

export const Header2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(24 / 18);
  margin-top: 14px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-top: 14px;
`;

export const Header3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-top: 24px;
`;

export const AccessoriesUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(18 / 12);
  color: rgba(18, 20, 23, 0.5);
  margin-top: 8px;
`;

export const AccrssoriesLI = styled.li`
  /* &::after {
    display: flex;
    flex-wrap: wrap;
    content: "|";
    position: absolute;
  } */
`;

export const RentalConditionsUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const RentalConditionsLI = styled.li`
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: -2;
  display: block;
  border-radius: 35px;
  background-color: rgba(249, 249, 249, 1);
  /* background-color: lightcoral; */
  text-align: center;
  padding: 7px 14px;
`;

export const Numbers = styled.span`
  color: rgba(52, 112, 255, 1);
  font-weight: 600;
`;

export const Button = styled.button`
  width: 168px;
  height: 44px;
  margin-top: 24px;
  border: none;
  border-radius: 12px;
  background-color: rgba(52, 112, 255, 1);
`;
