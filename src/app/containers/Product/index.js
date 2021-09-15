import React from 'react';

import { Card } from '../../components/Card';
import { Box } from '../../components/foundation/layout/Box';

import DetailsRanges from './detailsRanges';
import DetailsProducts from './detailsProducts';

export default function Product() {
  return (
    <Box width="100%" displat="flex" flexDirection="column">
      <Card>
        <DetailsProducts />
      </Card>
      <Box>
        <DetailsRanges />
      </Box>
    </Box>
  );
}
