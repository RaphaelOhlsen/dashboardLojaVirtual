import React from 'react';

import { Box } from '../../components/foundation/layout/Box';
import { Card } from '../../components/Card';
import CategoryDetails from './categoryDetails';
import ProductList from './productList';

export default function Category() {
  return (
    <Box width="100%">
      <Card>
        <Box marginBottom="35px">
          <CategoryDetails />
        </Box>
        <hr />
        <Box marginTop="35px">
          <ProductList />
        </Box>
      </Card>
    </Box>
  );
}
