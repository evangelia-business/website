import { Grid, GridItem } from '@chakra-ui/react'
import Header from "@/components/Header/Header";

export default function HomePage() {
    return (
        <Grid templateAreas={`"header "
            "hello"
            "products"
            "footer"
            `}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"30% 25% 35% 10%"}
            height='90vh'
        >
            <Header />
        </Grid >

    );
}
