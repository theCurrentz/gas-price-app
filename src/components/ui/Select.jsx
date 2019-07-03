import React from "react";
import styled from "styled-components";

const SelectBox = styled.select`
  color: #593cbe;
  width: 24%;
  min-width: 100px;
  margin-left: 8px;
  height: 36px;
  border: #e5e5e5 1px solid;
  background: white;
  font-size: 1.04rem;
  font-weight: 500;
  box-shadow: 0px 2px 16px -4px rgba(0, 0, 0, 0.2);
  @media (max-width: 424px) {
    width: 100%;
    margin: 0px;
    font-size: 1rem;
  }
`;
/**
 * Displays the distance picker
 * @param {*} props
 * @returns {jsx} - selector component
 */
export default function Selector(props) {
  const distances = [1, 3, 5, 10, 15, 20, 25, 30];
  const { setSelectedDistance } = props;
  return (
    <SelectBox onChange={e => setSelectedDistance(e.target.value)}>
      {distances.map((distance, i) => (
        <option value={distance} key={distance}>
          {distance} mile(s)
        </option>
      ))}
    </SelectBox>
  );
}
