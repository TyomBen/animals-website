import React, { useEffect } from "react";
import { gettingData } from "../../feauters/actions/carts";
import { useDispatch, useSelector } from "react-redux";
import CartContent from "../CartContent";
import "./styles.css";
import { Spin } from "antd";
const Cart = () => {
  const { data, isloading, initialValue } = useSelector(({ carts }) => carts);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(gettingData());
    } catch (eror) {
      console.log(eror);
    }
  }, []);

  return (
    <main className="main">
      <section className="data-container">
        {isloading ? (
          <div className="spin-container">
            <Spin size="large" className="spin" />
          </div>
        ) : (
          data.map((datas) => {
            const { articul } = datas;
            return (
              <article key={articul}>
                <CartContent datas={datas} />
              </article>
            );
          })
        )}
      </section>
    </main>
  );
};

export default Cart;
