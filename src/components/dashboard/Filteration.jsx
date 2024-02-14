import React from 'react'

const Filteration = () => {
  return (
    // <div>Filteration</div>
    <Menu secondary>
        <MenuItem>
          <Select
            placeholder="Sort by price"
            options={sortOptions}
            value={sortOrder}
            onChange={(e, { value }) => setSortOrder(value)}
          />
        </MenuItem>
        <MenuItem>
          <Input
            icon="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </MenuItem>

        <MenuItem>
          <Select
            placeholder="Filter by category"
            options={filterOptions}
            value={selectedCategory}
            onChange={(e, { value }) => setSelectedCategory(value)}
          />
        </MenuItem>
        <MenuItem>
          <Select
            placeholder="Filter by gender"
            options={filterOptionsforgender}
            value={selectedCategorygender}
            onChange={(e, { value }) => setSelectedCategoryGender(value)}
          />
        </MenuItem>
        <MenuItem>
          <>
            <Button basic color="blue" onClick={() => setIsCreateOpen(true)}>
              Add
            </Button>

            <Modal isOpen={isOpen} onClose={() => setIsCreateOpen(false)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create new product</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Picture</FormLabel>
                    <Input
                      placeholder="Enter picture url"
                      value={picture}
                      onChange={(e) => setPicture(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                      placeholder="Enter Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      placeholder="Choose gender"
                      options={filterOptionsforgender}
                      value={gender}
                      onChange={(e, { value }) => setGender(value)}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Category</FormLabel>
                    <Select
                      placeholder="Choose category"
                      options={filterOptions}
                      value={category}
                      onChange={(e, { value }) => setCategory(value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                      placeholder="$"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button mr={3} onClick={submitAdd}>
                    Create
                  </Button>
                  <Button
                    color="red"
                    onClick={() => setIsCreateOpen(false)}
                    basic
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        </MenuItem>
      </Menu>
  )
}

export default Filteration