import React,{useState,useEffect} from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Orders = () => {
   let [orders,setorderes]=useState([]);

   useEffect(()=>{
     axios.get("http://localhost:3002/allorderes").then((res)=>{
      setorderes(res.data);
     });
   },[]);

   return (
    <div className="orders-container">
      <h3 className="title">Orders ({orders.length})</h3>

      {orders.length > 0 ? (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Type</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const value = order.price * order.qty;
                const typeClass = order.mode === 'buy' ? 'buy-order' : 'sell-order';

                return (
                  <tr key={index} className={typeClass}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>{order.price.toFixed(2)}</td>
                    <td>
                      <span className={`order-type ${typeClass}`}>
                        {order.mode.toUpperCase()}
                      </span>
                    </td>
                    <td>{value.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};


export default Orders;
