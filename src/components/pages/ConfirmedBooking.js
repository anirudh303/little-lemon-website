import React from "react";
import { useLocation } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardBody,
  Divider,
} from "@chakra-ui/react";

export default function ConfirmedBooking() {
  const location = useLocation();

  const bookingData = location.state?.bookingData;

  if (!bookingData) {
    return <div>No booking data found.</div>;
  }

  const { date, guests, occasion, time } = bookingData;

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bg="#495E57"
        padding={4}
      >
        <Card
          width="100%"
          maxWidth="500px"
          boxShadow="md"
          borderRadius="md"
          bg="white"
        >
          <CardBody>
            <VStack spacing={4} align="start">
              <Heading
                as="h1"
                size="lg"
                textAlign="center"
                width="100%"
                color="#F4CE14"
                fontFamily="markazi text"
              >
                Your reservation was successful!
              </Heading>
              <Divider />
              <HStack width="100%">
                <Text fontWeight="bold" fontFamily="karla" color="#495E57">
                  Date:
                </Text>
                <Text color="gray.800" fontFamily="karla">
                  {date}
                </Text>
              </HStack>
              <HStack width="100%">
                <Text fontWeight="bold" color="#495E57" fontFamily="karla">
                  Time:
                </Text>
                <Text color="#495E57" fontFamily="karla">
                  {time}
                </Text>
              </HStack>
              <HStack width="100%">
                <Text fontWeight="bold" color="#495E57" fontFamily="karla">
                  Number of Guests:
                </Text>
                <Text color="#495E57" fontFamily="karla">
                  {guests}
                </Text>
              </HStack>
              <HStack width="100%">
                <Text fontWeight="bold" color="#495E57" fontFamily="karla">
                  Occasion:
                </Text>
                <Text color="#495E57" fontFamily="karla">
                  {occasion}
                </Text>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}
