import type { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { getItems } from "@/redux/modules/products";
import { ProductCard } from "@/components/ui";
import { actionCartAddItem } from "@/redux/modules/cart";
import { Product } from "@/types/products";

const ProductsList: FC = () => {
  const dispatch = useDispatch();

  const items = useSelector(getItems);

  const handleAddToCart = (product: Product) => {
    dispatch(actionCartAddItem(product));
  };

  return (
    <Grid container spacing={2} alignItems="stretch">
      {items.map((item: Product, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <ProductCard
            product={item}
            onAddToCart={() => handleAddToCart(item)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
