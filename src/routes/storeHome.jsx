import React from 'react';
import { Flex, Card, Avatar, Tabs, Table, Space, Burger, Button, Input, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

function StoreHome() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const navigate = useNavigate();

    const elementsProducts = [
        { image: 'Imagen',
        cost: 'Costo', 
        action: (
            <> 
                <Button variant="filled" color="lime" radius="xl">Agregar</Button>
                <Button variant="filled" radius="xl">Editar</Button>
                <Button variant="filled" radius="xl" color="red">Eliminar</Button>
            </>
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
                <Button variant="filled" radius="xl" color="red" onClick={() => navigate('/login')}>Salir</Button>
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
                    mih={50}
                    gap={1200}
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                >
                    <Avatar src={null} alt="no image here" />
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
                        Products 
                        <Button variant="filled" color="lime" radius="xl">Agregar Producto</Button>
                        <Table verticalSpacing="lg">
                                <Table.Tr>
                                    <Table.Th>Imagen</Table.Th>
                                    <Table.Th>Nombre Producto</Table.Th>
                                    <Table.Th>Costo</Table.Th>
                                    <Table.Th>Categoria</Table.Th>
                                    <Table.Th>Acciones</Table.Th>
                                </Table.Tr>
                            <Table.Tbody>{rowsProducts}</Table.Tbody>
                        </Table>
                    </Tabs.Panel>

                    <Tabs.Panel value="store">
                        <Space h="25px" />
                        Store configuration  
                        <Button variant="filled" radius="xl">Editar</Button>
                        <Input.Wrapper label="Tienda">
                            <Input placeholder="Nombre Tienda"/>
                        </Input.Wrapper>
                        <Input.Wrapper label="Correo">
                            <Input placeholder="Correo"/>
                        </Input.Wrapper>
                        <Input.Wrapper label="Dueño">
                            <Input placeholder="Dueño"/>
                        </Input.Wrapper>
                        <Input.Wrapper label="Contraseña">
                            <Input placeholder="Contraseña" />
                        </Input.Wrapper>
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </Flex>
    );
}

export default StoreHome;
