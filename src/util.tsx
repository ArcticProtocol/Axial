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
  
export { getIntegerByCreditType , getIntegerByCreditTypeString};
export { CreditType };
