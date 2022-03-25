import React from 'react'
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';


const products=[
    {
        id:1, name:'Shoes', description: 'Runnings Shoes', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/revolution-5-womens-road-running-shoes-hC41Vf.png'
    },
    {
        id:2, name:'Macbook', description: 'Apple Macbook', price: '$5', image: 'https://media.ldlc.com/r1600/ld/products/00/05/89/86/LD0005898603_1_0005898622_0005898652_0005899621_0005905266.jpg'
    }
]

const Products = () => {
    const classes = useStyles();
 return(
    <main className={classes.content}>
        <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
           {products.map((product)=>(
               <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  
                  <Product product={product} />
                   </Grid>
           ))}
    </Grid>
</main>
 )
}

export default Products