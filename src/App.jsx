import styles from "./App.module.css";
import ButtonsContainer from "./assets/components/ButtonsContainer";
import Container from "./assets/components/Container";
import Display from "./assets/components/Display";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else if (buttonText === "%") {
      const newPercent = calValue / 100;
      setCalValue(newPercent);
    } else if (buttonText === "DEL") {
      setCalValue(calValue.slice(0, -1, -2) || 0);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.App}>
      <h1 className={styles.head}>React Simple-Calculator App</h1>
        <div className={styles.calculator}>
          <Display displayValue={calValue}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
        <Container></Container>
      </div>
    </>
  );
}

export default App;
