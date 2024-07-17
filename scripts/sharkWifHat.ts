import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SharkWifHat", (m) => {

  const sharkWifHat = m.contract("SharkWifHat");

  // Mint some tokens to the deployer
  const mintAmount = m.getParameter("initialMintAmount", "1000000000000000000000000"); // Default 1 million tokens
  m.call(sharkWifHat, "mint", [m.getAccount(0), mintAmount]);

  // Swim in the ocean
  m.call(sharkWifHat, "swimInTheOcean");

  // Tip hat
  m.call(sharkWifHat, "tipHat");

  return { sharkWifHat };
});
