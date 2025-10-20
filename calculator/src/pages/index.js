import { useState } from "react";
import Container from "@/components/Container";
import Head from "next/head";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Input from "@/components/Input";
import Row from "@/components/Row";
import Button from "@/components/Button";


export default function Home() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [resultDisplayed, setResultDisplayed] = useState(false);

  const handleAddNumber = (num) => {
    // Se um resultado foi exibido, inicia nova entrada
    if (resultDisplayed) {
      setCurrentNumber(num);
      setResultDisplayed(false);
    } else {
      setCurrentNumber((prev) =>
        prev === "0" ? num : prev + num
      );
    }
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
    setResultDisplayed(false);
  };

  const handleAddDot = () => {
    // Se resultado foi exibido, inicia novo número com "0."
    if (resultDisplayed) {
      setCurrentNumber("0.");
      setResultDisplayed(false);
    } else if (!currentNumber.includes(".")) {
      setCurrentNumber((prev) => prev + ".");
    }
  };

  const handleSumNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("+");
    setResultDisplayed(false); // Limpa flag ao escolher operação
  };

  const handleMinusNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("-");
    setResultDisplayed(false);
  };

  const handleMultiNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("*");
    setResultDisplayed(false);
  };

  const handleDiviNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("/");
    setResultDisplayed(false);
  };

  const handleModNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("MOD");
    setResultDisplayed(false);
  }

  const handlePercentNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber("0");
    setOperation("PERCENT");
    setResultDisplayed(false);
  }

  const handleEquals = () => {
    if (!firstNumber || !operation) return;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    let result = 0;
    if (operation === "+") result = num1 + num2;
    if (operation === "-") result = num1 - num2;
    if (operation === "*") result = num1 * num2;
    if (operation === "/") result = num1 / num2;
    if (operation === "MOD") result = num1 % num2;
    if (operation === "PERCENT") result = (num1 * num2) / 100;

    setCurrentNumber(result.toString());
    setOperation(null);
    setFirstNumber(null);
    setResultDisplayed(true); // Marca que resultado foi exibido
  };

  return (
    <>
      <Head>
        <title>Calculadora</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Content>
          <Header></Header>
          <Input value={currentNumber} />
          <Row>
            <Button label="%" onClick={handlePercentNumbers} variant="action" />
            <Button label="/" onClick={handleDiviNumbers} variant="action" />
            <Button label="MOD" onClick={handleModNumbers} variant="action" />
            <Button label="CE" onClick={handleOnClear} variant="action" />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="x" onClick={handleMultiNumbers} variant="action" />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="-" onClick={handleMinusNumbers} variant="action" />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="+" onClick={handleSumNumbers} variant="action" />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')} />
            <Button label="." onClick={handleAddDot} />
            <Button label="=" onClick={handleEquals} span={2} variant="equal" />
          </Row>
        </Content>
      </Container>

    </>
  );
}
