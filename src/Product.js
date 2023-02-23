import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/Action';
import Cart from "./Cart"

const MyComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
    console.log("ps")
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
     <>
          {data.map((item) => (
            <Cart 
            keys = {item.id}
            title = {item.title}
            imag = {item.images[0]}
            description = {item.description}
            />
          ))}
     </>
  );
};

export default MyComponent;