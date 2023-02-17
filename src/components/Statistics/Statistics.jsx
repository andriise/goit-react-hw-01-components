export const Statistics = ({ items }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul>
        {items.map(item => {
          return (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
