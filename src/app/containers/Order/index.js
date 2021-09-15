import React from 'react';

import OrderDetails from './OrderDetails';
import DeliveryDetails from './DeliveryDetails';
import PaymentDetails from './PaymnetDetails';

import { OrderWrapper, DeliveryWrapper, PaymentWrapper } from './styles';
import { Box } from '../../components/foundation/layout/Box';
import Button from '../../components/Button';

export default function Order() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <OrderWrapper>
        <Button href="/" goback />
        <OrderDetails />
      </OrderWrapper>
      <Box display="flex" flexDirection="row">
        <DeliveryWrapper>
          <DeliveryDetails />
        </DeliveryWrapper>
        <PaymentWrapper>
          <PaymentDetails />
        </PaymentWrapper>
      </Box>
    </Box>
  );
}
