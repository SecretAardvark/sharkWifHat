import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SharkWifHat", (m) => {
    const sharkWifHat = m.contract("SharkWifHat");

    // Mint some tokens to the deployer
    // const mintAmount = m.getParameter("mintAmount", "1000000000000000000000000"); // Default to 1 million tokens
    // m.call(sharkWifHat, "mint", [m.getAccount(0), mintAmount]);

    // Demonstrate some functionality
    m.call(sharkWifHat, "swimInTheOcean");
    m.call(sharkWifHat, "tipHat");

    // Export the contract instance
    return { sharkWifHat };
});
