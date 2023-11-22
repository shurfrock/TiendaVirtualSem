import React from 'react';
import { Flex, Card, Avatar, Tabs, Table, Space, Burger, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

function ClientHome() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const navigate = useNavigate();
    const elementsProducts = [
        { image: 'Imagen',
        cost: 'Costo', 
        action: (
            <> 
                <Button variant="filled" color="lime" radius="xl">Agregar</Button>
                <Button variant="filled" radius="xl">Ver...</Button>
            </>
        ), 
        category: 'Categoria', 
        name: 'Nombre' },
    ];

    const elementsStore = [{ 
        image: 'Imagen',
        location: 'Ubicacion', 
        action:<Button variant="filled" color="lime" radius="xl">Ver productos</Button>,       
        description: 'Descripcion', 
        name: 'Tienda' 
    },];

    const elementsCar= [
        { image: 'Imagen',
        cost: 'Costo', 
        action: (
            <> 
                <Button variant="filled" color="lime" radius="xl">Agregar</Button>
                <Button variant="filled" color="red" radius="xl">Eliminar</Button>
            </>
        ), 
        category: 'Categoria', 
        name: 'Nombre',
        amount: 'Cantidad' 
    },];
    

    const rowsProducts = elementsProducts.map((elementsProducts) => (
        <Table.Tr key={elementsProducts.name}>
            <Table.Td>{elementsProducts.image}</Table.Td>
            <Table.Td>{elementsProducts.name}</Table.Td>
            <Table.Td>{elementsProducts.cost}</Table.Td>
            <Table.Td>{elementsProducts.category}</Table.Td>
            <Table.Td>{elementsProducts.action}</Table.Td>
        </Table.Tr>
    ));

    const rowsStore = elementsStore.map((elementsStore) => (
        <Table.Tr key={elementsStore.name}>
            <Table.Td>{elementsStore.image}</Table.Td>
            <Table.Td>{elementsStore.name}</Table.Td>
            <Table.Td>{elementsStore.location}</Table.Td>
            <Table.Td>{elementsStore.description}</Table.Td>
            <Table.Td>{elementsStore.action}</Table.Td>
        </Table.Tr>
    ));


    const rowsCar = elementsCar.map((elementsCar) => (
        <Table.Tr key={elementsCar.name}>
            <Table.Td>{elementsCar.image}</Table.Td>
            <Table.Td>{elementsCar.name}</Table.Td>
            <Table.Td>{elementsCar.cost}</Table.Td>
            <Table.Td>{elementsCar.category}</Table.Td>
            <Table.Td>{elementsCar.amount}</Table.Td>
            <Table.Td>{elementsCar.action}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Flex justify="center" align="center" direction="column" h="100vh" >
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
                        Tiendas
                        </Tabs.Tab>
                        <Tabs.Tab value="car" leftSection={null} style={{ fontSize: '20px' }}>
                        Carrito
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="products">
                        <Space h="25px" />
                        Products content
                        <Table horizontalSpacing="sm" verticalSpacing="lg">
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
                        Store tab content
                        <Table horizontalSpacing="sm" verticalSpacing="lg">
                                <Table.Tr>
                                    <Table.Th>Imagen</Table.Th>
                                    <Table.Th>Tienda</Table.Th>
                                    <Table.Th>Ubicacion</Table.Th>
                                    <Table.Th>Descripcion</Table.Th>
                                    <Table.Th>Acciones</Table.Th>
                                </Table.Tr>
                            <Table.Tbody>{rowsStore}</Table.Tbody>
                        </Table>
                    </Tabs.Panel>

                    <Tabs.Panel value="car">
                        <Space h="25px" />
                        Car tab content
                        <Table horizontalSpacing="sm" verticalSpacing="lg">
                                <Table.Tr>
                                    <Table.Th>Imagen</Table.Th>
                                    <Table.Th>Nombre Producto</Table.Th>
                                    <Table.Th>Costo</Table.Th>
                                    <Table.Th>Categoria</Table.Th>
                                    <Table.Th>Cantidad</Table.Th>
                                    <Table.Th>Acciones</Table.Th>
                                </Table.Tr>
                            <Table.Tbody>{rowsCar}</Table.Tbody>
                        </Table>
                        <Button variant="filled" color="lime" radius="xl" size="lg">Comprar</Button>
                    </Tabs.Panel>
                </Tabs>
            </Card>
        </Flex>
    );
}

export default ClientHome;
