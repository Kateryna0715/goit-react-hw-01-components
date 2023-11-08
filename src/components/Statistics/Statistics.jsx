import CSS from './index.module.css';

const Statistics = stats => {
  return (
    <section className={CSS.statistics}>
      {stats.title && <h2 className={CSS.title}>{stats.title}</h2>}
      <ul className={CSS.statList}>{getStatistics(stats)}</ul>
    </section>
  );
};

function getStatistics(data) {
  return data.stats.map(stat => (
    <li className={CSS.item} key={stat.id}>
      <span className={CSS.label}>{stat.label}</span>
      <span className={CSS.percentage}>{stat.percentage}%</span>
    </li>
  ));
}

export default Statistics;
