import { Heading, Center, Box, Image } from "@chakra-ui/react";
import testImage from "../assets/testImage.jpg"

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center>
        <Box boxSize="xxl" p={6}>
          <Image
            src={testImage}
            alt="sampleimage"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Welcome;