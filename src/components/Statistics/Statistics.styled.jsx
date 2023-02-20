import styled from 'styled-components';
export const StatisticsSection = styled.section`
  margin-top: 15px;
  width: 400px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 5px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 15px;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid red;
  border-radius: 5px;
`;
