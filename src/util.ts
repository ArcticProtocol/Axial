import { ethers } from "ethers";

enum CreditType {
  Ocean,
  Clean,
  Plastic,
}

const integerToCreditTypeMap: Record<number, CreditType> = {
  0: CreditType.Ocean,
  1: CreditType.Clean,
  2: CreditType.Plastic,
};

function getIntegerByCreditType(cred: CreditType) {
  if (cred === CreditType.Ocean) {
    return 0;
  } else if (cred === CreditType.Clean) {
    return 1;
  } else if (cred === CreditType.Plastic) {
    return 2;
  }
}

function getIntegerByCreditTypeString(cred: string) {
  if (cred === "Ocean") {
    return 0;
  } else if (cred === "Clean") {
    return 1;
  } else if (cred === "Plastic") {
    return 2;
  }
}

function weiToEther(wei: any) {
  const ether = ethers.utils.formatEther(wei);
  const etherWithLimitedDecimals = parseFloat(ether).toFixed(2);
  return etherWithLimitedDecimals;
}

function etherToWei(ether: any) {
  const wei = ethers.utils.parseEther(ether);
  return wei;
}

function formatTimestampMonth(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  const month = date.toLocaleString("en-US", { month: "long" }); // Get the full month name
  return month;
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  const month = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  }); // Get the full month name
  return month;
}

const nftStorageUrl = "ipfs.nftstorage.link";
const AXIAL_MARKET_CONTRACT_ADDRESS =
  "0xa1F04d4146d7BB676d61F78d0d12285f0298122F";
const AXIAL_DAO_CONTRACT_ADDRESS = "0x3094B2A14D0642F8788EDab226f03060c3D751fB";
const AXIAL_PROJECT_TRACKER_ADDRESS =
  "0xd8dd9765b796E4863C1fC03aF3231014847A1F23";
const AXIAL_DAO_MEMBERSHIP_NFT_ADDRESS =
  "0x71CC76eD0043842d5E00bB28bEB527E8EF19C57d";

const AXIAL_DAO_MEMBERSHIP_NFT_TOKEN_URI = `https://bafybeignvku4eg6gmbanwweoxo53mkos5jmhy5hyflerowgylk2p2h3tki.${nftStorageUrl}`;

const AOT_ADDRESS = "0xD10Fa568841E5e5B214A7cF91C2BC0DBafDdD29D";
const ACT_ADDRESS = "0x9f72Edc0F99066d14b7AcB752d7144F4A5cCdf1D";
const APT_ADDRESS = "0xD7c19583873A992d8fC276725a896358fcD714F3";

export {
  getIntegerByCreditType,
  getIntegerByCreditTypeString,
  weiToEther,
  etherToWei,
  AXIAL_MARKET_CONTRACT_ADDRESS,
  AXIAL_DAO_CONTRACT_ADDRESS,
  AXIAL_PROJECT_TRACKER_ADDRESS,
  AXIAL_DAO_MEMBERSHIP_NFT_ADDRESS,
  AOT_ADDRESS,
  ACT_ADDRESS,
  APT_ADDRESS,
  AXIAL_DAO_MEMBERSHIP_NFT_TOKEN_URI,
  formatTimestampMonth,
  formatTimestamp,
};
export { CreditType };
