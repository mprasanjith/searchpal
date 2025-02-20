import styled from "styled-components";
import { classes, mediaQuery, getBorder } from "../../../../../utils/css";

export const Container = styled.div`
  display: flex;
  /* width: 50%; */
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  ${getBorder("left")}
`;
export const Top = styled.div`
  width: auto;
  flex-grow: 1.1;
  padding: var(---preview-pad);
  display: flex;
  justify-content: center;
  align-items: center;
  ${getBorder("bottom")}
`;
export const Details = styled.div<{ scrollable: boolean }>`
  max-height: 400px;
  display: flex;
  /* flex: 1 1 auto; */
  /* flex-grow: 1; */
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  ${(props) => props.scrollable && getBorder("bottom")}
`;

export const DetailList = styled.dl`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  -moz-column-gap: 0.75rem;
  column-gap: 0.75rem;
  row-gap: 0.5rem;
  padding: var(---preview-pad);
  padding-bottom: calc(var(---preview-pad) / 2);
  /* padding-bottom: 0; */
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0px;
  ${classes.text.size.sm}
  ${mediaQuery("md")} {
    ${classes.text.size.md}
    -moz-column-gap: 1.3rem;
    column-gap: 1.3rem;
    row-gap: 0.75rem;
  }
`;

export const Divider = styled.hr`
  visibility: hidden;
  /* flex-grow: 1; */
  border-style: none;
  opacity: 0;
`;

export const Bottom = styled.div`
  padding: var(---preview-pad);
  & a {
    text-decoration: none;
  }
`;

export const DetailTitle = styled.dt`
  grid-column-end: 1;
  font-weight: 600;
`;

export const DetailDescription = styled.dd`
  margin: 0px;
`;
