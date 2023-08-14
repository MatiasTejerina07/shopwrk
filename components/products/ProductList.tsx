import { IProduct } from "@/interfaces";
import { Grid } from "@mui/material";
import { FC } from "react";
import { ProductCard } from ".";

interface Props {
  products: IProduct[];
}
export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((products) => (
        <ProductCard key={products.slug} product={products} />
      ))}
    </Grid>
  );
};
