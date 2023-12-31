import { getRandomHslColor } from "utils/js/getRandomColor";
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
                  style={{
                      backgroundColor: getRandomHslColor(),
                  }}
              className={css.item}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })
}