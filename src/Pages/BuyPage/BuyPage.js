import { React, useState } from "react";
import { useEffect } from "react";
import Dados from "../../Components/Dados/Dados.json";
import Filtro from "../../Components/Filtro/Filtro";
import Card from "../../Components/Card/Card";
import Pagination from "../../Components/Pagination/Pagination";
import { Header } from "../../Components/Header/Header";
import { Container, ContainerCard, Division } from "./style";
import { Footer } from "../../Components/Footer/Footer";

const BuyPage = (props) => {
  //Filtro
  const higherValue = Dados.reduce(function (prev, current) {
    return prev.value > current.value ? prev : current;
  });
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(higherValue.value);
  const [order, setOrder] = useState("");

  const cleanSearch = () => {
    props.setSearchName("");
    setMinValue(0);
    console.log(higherValue);
    setMaxValue(higherValue.value);
    setOrder("");
  };

  //Quantidade carinho

  const cartItems = () => {
    props.setFill1("red");
    props.setFill2("white");
  };

  useEffect(() => {
    cartItems();
  }, []);

  //Paginação
  const max_items = 11;
  const pages = Math.ceil(Dados.length / max_items);
  const [page, setPage] = useState(1);

  

  return (
    <>
      <Header
        name={props.name}
        setName={props.setName}
        setSearchName={props.setSearchName}
        clientName={props.clientName}
        cartPage={props.cartPage}
        counter={props.counter}
        fill1={props.fill1}
        fill2={props.fill2}
        home={props.home}
        items={props.items}
      />

      <Container>
        <Filtro
          minValue={minValue}
          setMinValue={setMinValue}
          maxValue={maxValue}
          setMaxValue={setMaxValue}
          order={order}
          setOrder={setOrder}
          cleanSearch={cleanSearch}
          higherValue={higherValue.value}
        />
        <Division>
          <ContainerCard>
            {Dados.filter((item) => {
              return item.name
                .toLocaleLowerCase()
                .includes(props.searchName.toLocaleLowerCase());
            })
              .filter((item) => {
                return item.value >= minValue;
              })
              .filter((item) => {
                return item.value <= maxValue;
              })
              .sort((a, b) => {
                if (order === "increasing") return a.value - b.value;

                if (order === "decreasing") return b.value - a.value;

                return 0;
              })
              // .filter((_, index) => {
              //   return (
              //     index >= (page - 1) * max_items && index <= page * max_items
              //   );
              // })
              .map((item) => {
                return (
                  <Card
                    cart={props.cart}
                    setCart={props.setCart}
                    key={item.id}
                    Dados={item}
                    cartItems={cartItems}
                    change={props.change}
                    setChange={props.setChange}
                  />
                );
              })}
          </ContainerCard>
          {/* <Pagination total={pages} page={page} setPage={setPage} /> */}
        </Division>
      </Container>

      <Footer/>
    </>
  );
};

export default BuyPage;
