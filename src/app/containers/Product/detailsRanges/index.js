import React from 'react';

import { Card } from '../../../components/Card';
import { Box } from '../../../components/foundation/layout/Box';

import Ranges from './ranges';
import OptionRange from './optionRange';

export default function DetailsRanges() {
  return (
    <Box display="flex">
      <Card flex="1" margin="0 0 40px 40px">
        <Ranges />
      </Card>
      <Card flex="8" margin="0 40px 40px 40px">
        <OptionRange />
      </Card>
    </Box>
  );
}
