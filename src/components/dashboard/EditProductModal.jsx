// components/dashboard/EditProductModal.js
import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const EditProductModal = ({ isOpen, onClose, onSubmit, product }) => {
  const defaultProduct = {
    name: '',
    picture: '',
    description: '',
    gender: '',
    category: '',
    price: 0
  };

  const [formData, setFormData] = useState(product || defaultProduct);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product.id, formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="picture" isRequired>
              <FormLabel>Picture URL</FormLabel>
              <Input name="picture" value={formData.picture} onChange={handleChange} />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input name="description" value={formData.description} onChange={handleChange} />
            </FormControl>
            <FormControl id="gender" isRequired>
              <FormLabel>Gender</FormLabel>
              <Select name="gender" value={formData.gender} onChange={handleChange} placeholder="Select gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl id="category" isRequired>
              <FormLabel>Category</FormLabel>
              <Select name="category" value={formData.category} onChange={handleChange} placeholder="Select category">
                <option value="makeup">Makeup</option>
                <option value="skincare">Skincare</option>
                <option value="haircare">Haircare</option>
              </Select>
            </FormControl>
            <FormControl id="price" isRequired>
              <FormLabel>Price</FormLabel>
              <Input name="price" type="number" value={formData.price} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" type="submit">Save</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditProductModal;
