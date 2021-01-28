import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};

const Style = StyleSheet.create({});

export default BlogContext;
