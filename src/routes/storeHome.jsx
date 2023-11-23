import React from 'react';
import { Flex, Card, Avatar, Tabs, Table, Space, Burger, Button, Input, Modal, Title, PasswordInput, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

function StoreHome() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const navigate = useNavigate();

    const elementsProducts = [
        { image: 'Imagen',
        cost: 'Costo', 
        action: (
            <Flex 
                    justify="space-between"
                    align="center"
            >
                <Button variant="filled" color="lime" radius="xl">Agregar Producto</Button>
                <Button variant="filled" radius="xl">Editar</Button>
                <Button variant="filled" radius="xl" color="red">Eliminar</Button>
            </Flex>         
        ), 
        category: 'Categoria', 
        name: 'Nombre' },
    ];

    const rowsProducts = elementsProducts.map((elementsProducts) => (
        <Table.Tr key={elementsProducts.name}>
            <Table.Td>{elementsProducts.image}</Table.Td>
            <Table.Td>{elementsProducts.name}</Table.Td>
            <Table.Td>{elementsProducts.cost}</Table.Td>
            <Table.Td>{elementsProducts.category}</Table.Td>
            <Table.Td>{elementsProducts.action}</Table.Td>
        </Table.Tr>
    ));

    return (
        
        <Flex justify="center" align="center" direction="column" h="100vh">
            <Modal opened={opened} onClose={close} title="Ayuda...">
                <Space h="25px" />
                <Text size="lg">¿Estas seguro que deseas Salir de la pagina?</Text>
                <Space h="25px" />
                <Flex 
                    align="center"
                    gap="25px"
                >
                    <Button variant="filled" radius="xl" color="red" onClick={() => navigate('/login')}>Salir</Button>
                    <Button variant="filled" radius="xl" color="gray" onClick={close}>Cancelar</Button>
                </Flex>
                <Space h="25px" />
            </Modal>
            <Card
                shadow="sm"
                p="lg"
                radius="xl"
                mih="800px"
                miw="1400px"
                withBorder
            >
                <Flex 
                    justify="space-between"
                    align="center"
                >
                    <Avatar src={null} alt="no image here" />
                    <Title order={1}>Home Tienda</Title>
                    <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                </Flex>
                <Space h="25px" />
                <Tabs color="yellow" variant="pills" radius="xl" defaultValue="products" >
                    <Tabs.List grow justify="center">
                        <Tabs.Tab value="products" leftSection={null} style={{ fontSize: '20px' }}>
                        Productos
                        </Tabs.Tab>
                        <Tabs.Tab value="store" leftSection={null} style={{ fontSize: '20px' }}>
                        Tienda Configuracion
                        </Tabs.Tab>
                    </Tabs.List>
                    <Tabs.Panel value="products">
                        <Space h="25px" />
                        <Button variant="filled" color="lime" radius="xl">Crear Producto</Button>
                        <Space h="25px" />
                        <Table verticalSpacing="lg" horizontalSpacing="md" highlightOnHover>
                                <Table.Tr>
                                    <Table.Th width="300px">Imagen</Table.Th>
                                    <Table.Th width="250px">Nombre Producto</Table.Th>
                                    <Table.Th width="150px">Costo</Table.Th>
                                    <Table.Th width="150px">Categoria</Table.Th>
                                    <Table.Th>Acciones</Table.Th>
                                </Table.Tr>
                            <Table.Tbody>{rowsProducts}</Table.Tbody>
                        </Table>
                    </Tabs.Panel>

                    <Tabs.Panel value="store">
                        <Space h="25px" /> 
                        <Button variant="filled" radius="xl">Editar</Button>
                        <Space h="25px" /> 
                        <Flex justify="center" align="center" direction="column" gap="35px">
                            <Input.Wrapper label="Tienda">
                                <Input placeholder="Nombre Tienda" style={{ width: '550px' }}/>
                            </Input.Wrapper>
 
                            <Input.Wrapper label="Correo">
                                <Input placeholder="Correo" style={{ width: '550px' }}/>
                            </Input.Wrapper>

                            <Input.Wrapper label="Dueño">
                                <Input placeholder="Dueño" style={{ width: '550px' }}/>
                            </Input.Wrapper>

                            <PasswordInput
                                radius="xs"
                                label="Contraseña"
                                placeholder="Contraseña"
                                style={{ width: '550px' }}
                            />
                        </Flex>
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </Flex>
    );
}

export default StoreHome;
