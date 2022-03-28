import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Detalle</Heading>
        <Text>Si ya tenés una cuenta, hacé click aquí para logearte.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input placeholder="Juan" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Apellido</FormLabel>
            <Input placeholder="Perez" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Dirección</FormLabel>
            <Input placeholder="San Martin 530" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Ciudad</FormLabel>
            <Input placeholder="Buenos Aires" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>País</FormLabel>
            <Select>
              <option value="arg">Argentina</option>
              <option value="ur">Uruguay</option>
              <option value="br">Brazil</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Enviar a la dirección de cobro</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Realizar pedido
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
