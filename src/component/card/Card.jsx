import styles from './Card.module.css';

const Card = ({ cardData, title }) => {
  if (!cardData) return null;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {Object.entries(cardData).map(([key, value]) => (
        <div className={styles.cell} key={key}>
          <div className={styles.value}>{key}</div>
          <div className={styles.value}>{value}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
