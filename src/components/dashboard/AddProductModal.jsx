// components/dashboard/AddProductModal.js
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const AddProductModal = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productData = {
      name: formData.get('name'),
      picture: formData.get('picture'),
      description: formData.get('description'),
      gender: formData.get('gender'),
      category: formData.get('category'),
      price: formData.get('price')
    };
    onSubmit(productData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" />
            </FormControl>
            <FormControl id="picture" isRequired>
              <FormLabel>Picture URL</FormLabel>
              <Input name="picture" />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input name="description" />
            </FormControl>
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select name="gender" placeholder="Select gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Select name="category" placeholder="Select category">
                <option value="makeup">Makeup</option>
                <option value="skincare">Skincare</option>
                <option value="haircare">Haircare</option>
              </Select>
            </FormControl>
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input name="price" type="number" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit">Add</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddProductModal;
