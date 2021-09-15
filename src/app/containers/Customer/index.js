import React from 'react';

import OrdersDetails from './ordersDetails';
import CustomerDetails from './customerDetails';

import { Box } from '../../components/foundation/layout/Box';
import { Card } from '../../components/Card';

export default function Customer() {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Card>
        <CustomerDetails />
      </Card>
      <Card>
        <OrdersDetails />
      </Card>
    </Box>
  );
}
