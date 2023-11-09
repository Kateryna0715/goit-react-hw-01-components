import CSS from './index.module.css';

const Statistics = ({ stats }) => {
  return (
    <section className={CSS.statistics}>
      {stats.title && <h2 className={CSS.title}>{stats.title}</h2>}
      <ul className={CSS.statList}>
        {stats.map(stat => (
          <li className={CSS.item} key={stat.id}>
            <span className={CSS.label}>{stat.label}</span>
            <span className={CSS.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
