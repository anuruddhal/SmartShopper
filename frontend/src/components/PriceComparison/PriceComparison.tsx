import { Box, Text, VStack } from "@chakra-ui/react";

import SupermarketPriceRow from "./SupermarketPriceRow";

import { SupermarketItem } from "@/hooks/usePriceLists";

interface Props {
  priceLists: SupermarketItem[];
  selectedSupermarketItem: SupermarketItem | null;
  setSupermarketItem: (priceList: SupermarketItem) => void;
}

const PriceComparison = ({
  priceLists,
  selectedSupermarketItem,
  setSupermarketItem,
}: Props) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={8}>
        Price Comparison
      </Text>
      <VStack w="full" spacing={4}>
        {priceLists?.map((item, index) => (
          <SupermarketPriceRow
            key={index}
            supermarketItem={item}
            selectedPriceList={selectedSupermarketItem}
            onClick={() => setSupermarketItem(item)}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default PriceComparison;
