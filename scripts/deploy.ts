import { ethers } from "hardhat";

async function main() {
  console.log("Deploying SharkWifHat token...");

  const SharkWifHat = await ethers.getContractFactory("SharkWifHat");
  const sharkWifHat = await SharkWifHat.deploy();

  await sharkWifHat.waitForDeployment();

  console.log("SharkWifHat deployed to:", await sharkWifHat.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
