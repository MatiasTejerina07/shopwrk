import { IProduct } from "@/interfaces";
import { Grid } from "@mui/material";
import { FC } from "react";

interface Props {
  products: IProduct[];
}
export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((products) => "")}
    </Grid>
  );
};
