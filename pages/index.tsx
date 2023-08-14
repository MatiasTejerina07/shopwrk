import { ShopLayout } from "@/components/layouts";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { initialData } from "@/database/products";

export default function Home() {
  return (
    <>
      <ShopLayout
        title={"Shop | WRK"}
        pageDescription={
          "Encuentra los mejores productos de ropa e idumentaria"
        }
      >
        <Typography variant="h1" component="h1">
          Tienda
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }} component="h1">
          Todos los productos
        </Typography>
      </ShopLayout>
      <Grid container spacing={4}>
        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`products/${product.images[0]}`}
                  alt={product.title}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
