import type { FC } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { getItems } from "@/redux/modules/products";
import { ProductCard } from "@/components/ui";

const ProductsList: FC = () => {
  const items = useSelector(getItems);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {items.map((item, i) => (
        <Grid key={i} item xs={4}>
          <ProductCard product={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
