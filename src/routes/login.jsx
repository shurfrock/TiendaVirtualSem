import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Flex, Card, Button, Space, Modal, TextInput, Checkbox, Group,Box, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Flex justify="center" align="center" direction="column" h="100vh">
      <Modal opened={opened} onClose={close} title="Iniciar sesion" centered>
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit(values => console.log(values))}>
            <TextInput
              withAsterisk
              size="md"
              radius="xl"
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />
            <Space h="25px" />
            <PasswordInput
              size="md"
              radius="xl"
              label="Contraseña"
              withAsterisk
              placeholder="Contraseña"
            />
            <Space h="25px" />
            <Checkbox
              mt="md"
              label="Acepto terminos y condiciones"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit">
                Siguiente
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>

      <Card shadow="sm" p="lg" radius="xl" mih="400px" miw="400px" withBorder>
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          h="100%"
        >
          <Button
            variant="filled"
            color="rgba(56, 201, 88, 0.8)"
            style={{
              width: '250px',
              height: '85px',
            }}
            size="xl"
            radius="lg"
            onClick={open}
          >
            Iniciar Sesion
          </Button>
          <Space h="50px" />
          <Button
            variant="filled"
            color="rgba(56, 201, 88, 0.8)"
            style={{
              width: '250px',
              height: '85px',
            }}
            size="xl"
            radius="lg"
            onClick={() => navigate('/register')}
          >
            Registarse
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Login;
