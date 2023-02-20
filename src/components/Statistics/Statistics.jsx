import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';
export const Statistics = ({ title, items }) => {
  return (
    <StatisticsSection className="statistics">
      {title && <title>{title}</title>}
      <StatisticsList>
        {items.map(item => {
          return (
            <StatisticsItem key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
