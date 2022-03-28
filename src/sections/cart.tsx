import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

const Cart = () => {
  const { toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400')
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Tu Carrito</Heading>
        <Text>
          Si el precio es muy brillante, probá{' '}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            cambiando a modo oscuro.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/images/mate.png" alt="Mate" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Mate camionero</Heading>
            <Text color={secondaryTextColor}>MATECAM7452</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $1.500,00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$1.500,00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Envío</Text>
          <Heading size="sm">$759,99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Impuestos</Text>
          <Heading size="sm">$236,83</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$2.496,82</Heading>
      </HStack>
    </VStack>
  )
}

export default Cart
