import { IProduct } from "@/interfaces";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import React, { FC } from "react";

interface Props {
  product: IProduct;
}
export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Grid item xs={6} sm={4} key={product.slug}>
      <Card>
        <CardActionArea>
          <CardMedia component="image" image={`product/${product.images[0]}`} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
