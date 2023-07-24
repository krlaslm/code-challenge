// I'm not too sure on how to access the mainnet or testnet bsc api that interacts directly with the chain. So I just used the third party api given which isn't a valid solution and didn't manage to use ethers.

import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Bscscan API key from .env file
const bscscanApiKey = process.env.BSCSCAN_API_KEY;

// Bscscan API base URL
const bscscanBaseUrl = "https://api.bscscan.com";

// SWTH token contract address on the Binance Smart Chain
const swthTokenAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

// Addresses to look up
const addresses = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

// Function to retrieve the token balance for a specific address
async function getTokenBalance(address: string): Promise<number> {
  try {
    const response = await axios.get(
      `${bscscanBaseUrl}/api?module=account&action=balance&address=${address}&tag=latest&apikey=${bscscanApiKey}`
    );

    if (response.data.status === "1" && response.data.message === "OK") {
      return parseFloat(response.data.result) / 1e18;
    } else {
      console.error("Error retrieving token balance for address:", address);
      return 0;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return 0;
  }
}

// Function to retrieve the token balances for all specified addresses
async function retrieveTokenBalances() {
  console.log("Address\t\t\tBalance (SWTH)");

  for (const address of addresses) {
    const balance = await getTokenBalance(address);
    console.log(`${address}\t${balance.toLocaleString()}`);
  }
}

// Call the function to retrieve token balances
retrieveTokenBalances();
