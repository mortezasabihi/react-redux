import type { FC } from "react";
import { Skeleton, Grid } from "@mui/material";

const ProductsLoading: FC = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width="100%" height={543} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsLoading;
