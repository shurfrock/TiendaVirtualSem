import React from 'react';
import { Flex, Card } from '@mantine/core';

function Home() {
  return (
    <Flex justify="center" align="center" direction="column" h="100vh">
      <Card
        shadow="sm"
        p="lg"
        radius="xl"
        mih="800px"
        miw="1200px"
        withBorder
      ></Card>
    </Flex>
  );
}

export default Home;
