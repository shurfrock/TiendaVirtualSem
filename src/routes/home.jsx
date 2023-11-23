import React from 'react';
import { Flex, Card, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <Flex justify="center" align="center" direction="column" h="100vh">
      <Card shadow="sm" p="lg" radius="xl" mih="800px" miw="1200px" withBorder>
        <Button
          variant="filled"
          color="yellow"
          size="xl"
          radius="xl"
          onClick={() => navigate('/login')}
          style={{
            width: '250px',
            height: '85px',
            margin: 'auto', // Esto centrará horizontalmente el botón
            marginTop: 'auto', // Esto centrará verticalmente el botón
          }}
        >
          IR A TIENDA.
        </Button>
      </Card>
    </Flex>
  );
}

export default Home;
