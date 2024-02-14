// components/dashboard/ProductTable.js
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const ProductTable = ({ products, onDelete, onEdit }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th>Description</Th>
          <Th>Gender</Th>
          <Th>Category</Th>
          <Th>Price</Th>
          <Th>Edit</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products && products.map((product) => (
          <Tr key={product.id}>
            <Td><img src={product.picture} alt={product.name} width="50" height="50" /></Td>
            <Td>{product.name}</Td>
            <Td>{product.description}</Td>
            <Td>{product.gender}</Td>
            <Td>{product.category}</Td>
            <Td>{product.price}</Td>
            <Td><Button colorScheme="teal" size="sm" onClick={() => onEdit(product)}>Edit</Button></Td>
            <Td><Button colorScheme="red" size="sm" onClick={() => onDelete(product.id)}>Delete</Button></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;
