import classes from "./CardContainer.styles.module.scss";

function CardContainer({ icon, title, description, backColor }) {
  return (
    <div
      className={classes.cardContainer}
      style={{ backgroundColor: `${backColor}` }}
    >
      <div className={classes.imgContainer}>
        <img src={icon} />
      </div>

      <h1>{title}</h1>
      <p>{description}</p>

      <button style={{ color: `${backColor}` }}>Learn More</button>
    </div>
  );
}

export default CardContainer;
