
import React from "react";
import { Text, Image, View, FlatList } from "react-native"
import useHomeController from "./HomeController";
import HomeStyle from "./styled";
import { Product } from "../../Type/Producst";

interface CardComponentProps {
    product: Product;
};

const CardComponent: React.FC<CardComponentProps> = ({ product }) => (
    <View style={HomeStyle.item}>
      <Text>
        {product.title}
      </Text>
      <Image style={HomeStyle.image} source={{ uri: product.image }} />
    </View>
  );
  

const HomeScreen: React.FC = () => {

    const { products } = useHomeController();

    return (
        <View style={HomeStyle.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CardComponent product={item} />}
                keyExtractor={(item) => String(item.id)}
                numColumns={2} 
            />
        </View>
    )
}

export default HomeScreen;