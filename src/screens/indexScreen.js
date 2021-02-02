import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Buttton title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={blogPosts}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>
      <Text>{value}</Text>
    </View>
  );
};

const Style = StyleSheet.create({});

export default IndexScreen;
