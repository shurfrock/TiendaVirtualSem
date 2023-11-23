import React from 'react';
import { Flex, Card, Avatar, Tabs, Table, Space, Burger, Button, Modal, Title, Text, PasswordInput, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

function ClientHome() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const [openedA, { toggle: toggleA, close: closeA }] = useDisclosure(false);

    const navigate = useNavigate();
    const elementsProducts = [
        { image: 'Imagen',
        cost: 'Costo', 
        action: (
            <Flex 
                justify="space-between"
                align="center"
            > 
                <Button variant="filled" color="lime" radius="xl">Agregar</Button>
                <Button variant="filled" radius="xl">Ver...</Button>
            </Flex>
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
            <Flex 
                justify="space-between"
                align="center"
            >
                <Button variant="filled" color="lime" radius="xl">Agregar</Button>
                <Button variant="filled" color="red" radius="xl">Eliminar</Button>
            </Flex>
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
            </Modal>
            <Modal opened={openedA} onClose={closeA} title="Perfil de Ususario">
                <Space h="10px" />
                <Flex justify="center" align="center" direction="column" gap="15px">
                    <Input.Wrapper label="Nombre">
                        <Input placeholder="Nombre " style={{ width: '350px' }}/>
                    </Input.Wrapper>

                    <Input.Wrapper label="Apellido">
                        <Input placeholder="Apellido" style={{ width: '350px' }}/>
                    </Input.Wrapper>

                    <Input.Wrapper label="Correo">
                        <Input placeholder="Correo" style={{ width: '350px' }}/>
                    </Input.Wrapper>                       

                    <PasswordInput
                        radius="xs"
                        label="Contraseña"
                        placeholder="Contraseña"
                        style={{ width: '350px' }}
                    />
                </Flex>
                <Space h="35px" />
                <Flex 
                    align="center"
                    gap="25px"
                >
                    <Button variant="filled" radius="xl" color="blue">Editar</Button>
                    <Button variant="filled" radius="xl" color="gray" onClick={closeA}>Cancelar</Button>
                </Flex>
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
                    <Avatar opened={openedA} onClick={toggleA} variant="filled" radius="xl" color="yellow" src=""/>
                    <Title order={1}>Home Cliente</Title>
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
                        Productos de las Tiendas.
                        <Table verticalSpacing="lg" horizontalSpacing="md" highlightOnHover>
                                <Table.Tr>
                                    <Table.Th width="300px">Imagen</Table.Th>
                                    <Table.Th width="250px">Nombre Producto</Table.Th>
                                    <Table.Th width="200px">Costo</Table.Th>
                                    <Table.Th width="250px">Categoria</Table.Th>
                                    <Table.Th>Acciones</Table.Th>
                                </Table.Tr>
                            <Table.Tbody>{rowsProducts}</Table.Tbody>
                        </Table>
                    </Tabs.Panel>

                    <Tabs.Panel value="store">
                        <Space h="25px" />
                        Tiendas
                        <Table verticalSpacing="lg" horizontalSpacing="md" highlightOnHover>
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
                        Carito de Compras
                        <Table verticalSpacing="lg" horizontalSpacing="md" highlightOnHover>
                                <Table.Tr>
                                    <Table.Th width="300px">Imagen</Table.Th>
                                    <Table.Th width="300px">Nombre Producto</Table.Th>
                                    <Table.Th width="200px">Costo</Table.Th>
                                    <Table.Th width="150px">Categoria</Table.Th>
                                    <Table.Th width="100px">Cantidad</Table.Th>
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
