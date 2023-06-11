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

export { getIntegerByCreditType, getIntegerByCreditTypeString, weiToEther , etherToWei};
export { CreditType };
