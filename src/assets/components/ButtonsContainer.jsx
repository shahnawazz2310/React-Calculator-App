import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "%",
    "0",
    ".",
    "+",
    "AC",
    "DEL",
    "=",
  ];

  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonsNames.map((buttonName) => (
          <button
            className={styles.buttons}
            key={buttonName}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsContainer;
