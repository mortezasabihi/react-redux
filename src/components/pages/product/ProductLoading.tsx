import type { FC } from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const ProductLoading: FC = () => {
  return (
    <Box>
      <Skeleton variant="text" width="80%" height="80px" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          {Array.from({ length: 24 }).map((_, i) => (
            <Skeleton key={i} variant="text" width="100%" />
          ))}
        </Grid>
        <Grid item xs={12} sm={7}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="425px"
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductLoading;
