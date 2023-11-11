import React from 'react';
import { useState } from 'react';
import {
  Flex,
  Card,
  Button,
  Space,
  Modal,
  TextInput,
  Checkbox,
  Group,
  Box,
  PasswordInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [userOpened, userCloseOpened] = useState(false);
  const [sellerOpened, sellerCloseOpened] = useState(false);

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
      <Modal
        opened={userOpened}
        onClose={() => userCloseOpened(false)}
        title="Usuario Cliente"
        centered
      >
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit(values => console.log(values))}>
            <TextInput
              size="md"
              radius="xl"
              withAsterisk
              label="Email"
              placeholder="correo@email.com"
              {...form.getInputProps('email')}
            />
            <Space h="15px" />
            <TextInput
              size="md"
              radius="xl"
              withAsterisk
              label="Nombre"
              placeholder="Nombre"
            />
            <Space h="15px" />
            <TextInput
              size="md"
              radius="xl"
              withAsterisk
              label="Apellido"
              placeholder="Apellido"
            />
            <Space h="15px" />
            <PasswordInput
              size="md"
              radius="xl"
              label="Contraseña"
              withAsterisk
              placeholder="Contraseña"
            />
            <Space h="15px" />
            <PasswordInput
              size="md"
              radius="xl"
              label="Contraseña"
              withAsterisk
              placeholder="Contraseña"
            />
            <Space h="15px" />
            <Checkbox
              mt="md"
              label="Acepto terminos y condiciones"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit" color="green">
                Guardar
              </Button>
            </Group>
          </form>
        </Box>
      </Modal>
      <Modal
        opened={sellerOpened}
        onClose={() => sellerCloseOpened(false)}
        title="Vendedor Empleado"
        centered
      >
        <Box maw={340} mx="auto">
          <form onSubmit={form.onSubmit(values => console.log(values))}>
            <TextInput
              size="md"
              radius="xl"
              withAsterisk
              label="Nombre Empresa"
              placeholder="Nombre Empresa"
            />
            <Space h="15px" />
            <TextInput
              size="md"
              radius="xl"
              withAsterisk
              label="Email"
              placeholder="correo@email.com"
              {...form.getInputProps('email')}
            />
            <Space h="15px" />
            <TextInput
              size="md"
              radius="xl"
              withAsterisk
              label="Nombre Dueño"
              placeholder="Nombre Dueño"
            />
            <Space h="15px" />
            <PasswordInput
              size="md"
              radius="xl"
              label="Contraseña"
              withAsterisk
              placeholder="Contraseña"
            />
            <Space h="15px" />
            <PasswordInput
              size="md"
              radius="xl"
              label="Contraseña"
              withAsterisk
              placeholder="Contraseña"
            />
            <Space h="15px" />
            <Checkbox
              mt="md"
              label="Acepto terminos y condiciones"
              {...form.getInputProps('termsOfService', { type: 'checkbox' })}
            />
            <Group justify="flex-end" mt="md">
              <Button type="submit" color="green">
                Guardar
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
            color="rgba(20, 156, 104, 1)"
            style={{
              width: '250px',
              height: '85px',
            }}
            size="xl"
            radius="lg"
            onClick={() => userCloseOpened(true)}
          >
            Usuario Cliente
          </Button>
          <Space h="50px" />
          <Button
            variant="filled"
            color="rgba(20, 156, 104, 1)"
            style={{
              width: '250px',
              height: '85px',
            }}
            size="xl"
            radius="lg"
            onClick={() => sellerCloseOpened(true)}
          >
            Vendedor
          </Button>
          <Space h="15px" />
          <Button
            type="submit"
            color="gray"
            radius="xl"
            onClick={() => navigate('/login')}
          >
            Atras
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Register;
