import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { fetchProducts, getLoading } from "@/redux/modules/products";
import { ProductsList, ProductsLoading } from "@/components/pages/home";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        component="h1"
        marginBottom={8}
      >
        Products
      </Typography>

      {loading ? <ProductsLoading /> : <ProductsList />}
    </>
  );
};

export default HomePage;
