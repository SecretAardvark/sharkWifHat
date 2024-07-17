/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SharkWifHat,
  SharkWifHatInterface,
} from "../../contracts/SharkWifHat";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sharkBite",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swimInTheOcean",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tipHat",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336040518060400160405280600b81526020017f536861726b5769664861740000000000000000000000000000000000000000008152506040518060400160405280600381526020017f535748000000000000000000000000000000000000000000000000000000000081525081600390816200009091906200074d565b508060049081620000a291906200074d565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200011a5760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040162000111919062000879565b60405180910390fd5b6200012b816200015060201b60201c565b506200014a336b033b2e3c9fd0803ce80000006200021660201b60201c565b6200096b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200028b5760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040162000282919062000879565b60405180910390fd5b6200029f60008383620002a360201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620002f9578060026000828254620002ec9190620008c5565b92505081905550620003cf565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000388578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200037f9392919062000911565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200041a578060026000828254039250508190555062000467565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620004c691906200094e565b60405180910390a3505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200055557607f821691505b6020821081036200056b576200056a6200050d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005d57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000596565b620005e1868362000596565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200062e620006286200062284620005f9565b62000603565b620005f9565b9050919050565b6000819050919050565b6200064a836200060d565b62000662620006598262000635565b848454620005a3565b825550505050565b600090565b620006796200066a565b620006868184846200063f565b505050565b5b81811015620006ae57620006a26000826200066f565b6001810190506200068c565b5050565b601f821115620006fd57620006c78162000571565b620006d28462000586565b81016020851015620006e2578190505b620006fa620006f18562000586565b8301826200068b565b50505b505050565b600082821c905092915050565b6000620007226000198460080262000702565b1980831691505092915050565b60006200073d83836200070f565b9150826002028217905092915050565b6200075882620004d3565b67ffffffffffffffff811115620007745762000773620004de565b5b6200078082546200053c565b6200078d828285620006b2565b600060209050601f831160018114620007c55760008415620007b0578287015190505b620007bc85826200072f565b8655506200082c565b601f198416620007d58662000571565b60005b82811015620007ff57848901518255600182019150602085019450602081019050620007d8565b868310156200081f57848901516200081b601f8916826200070f565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620008618262000834565b9050919050565b620008738162000854565b82525050565b600060208201905062000890600083018462000868565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008d282620005f9565b9150620008df83620005f9565b9250828201905080821115620008fa57620008f962000896565b5b92915050565b6200090b81620005f9565b82525050565b600060608201905062000928600083018662000868565b62000937602083018562000900565b62000946604083018462000900565b949350505050565b600060208201905062000965600083018462000900565b92915050565b6114bd806200097b6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a25780638da5cb5b116100715780638da5cb5b146102bb57806395d89b41146102d9578063a9059cbb146102f7578063dd62ed3e14610327578063f2fde38b1461035757610116565b806370a0823114610247578063715018a61461027757806372e9b8911461028157806379cc67901461029f57610116565b806325846526116100e957806325846526146101b7578063313ce567146101d55780633eb92629146101f357806340c10f191461020f57806342966c681461022b57610116565b806306fdde031461011b578063095ea7b31461013957806318160ddd1461016957806323b872dd14610187575b600080fd5b610123610373565b604051610130919061104f565b60405180910390f35b610153600480360381019061014e919061110a565b610405565b6040516101609190611165565b60405180910390f35b610171610428565b60405161017e919061118f565b60405180910390f35b6101a1600480360381019061019c91906111aa565b610432565b6040516101ae9190611165565b60405180910390f35b6101bf610461565b6040516101cc919061104f565b60405180910390f35b6101dd61049e565b6040516101ea9190611219565b60405180910390f35b61020d6004803603810190610208919061110a565b6104a7565b005b6102296004803603810190610224919061110a565b6104bd565b005b61024560048036038101906102409190611234565b610534565b005b610261600480360381019061025c9190611261565b610548565b60405161026e919061118f565b60405180910390f35b61027f610590565b005b6102896105a4565b604051610296919061104f565b60405180910390f35b6102b960048036038101906102b4919061110a565b6105c4565b005b6102c36105e4565b6040516102d0919061129d565b60405180910390f35b6102e161060e565b6040516102ee919061104f565b60405180910390f35b610311600480360381019061030c919061110a565b6106a0565b60405161031e9190611165565b60405180910390f35b610341600480360381019061033c91906112b8565b6106c3565b60405161034e919061118f565b60405180910390f35b610371600480360381019061036c9190611261565b61074a565b005b60606003805461038290611327565b80601f01602080910402602001604051908101604052809291908181526020018280546103ae90611327565b80156103fb5780601f106103d0576101008083540402835291602001916103fb565b820191906000526020600020905b8154815290600101906020018083116103de57829003601f168201915b5050505050905090565b6000806104106107d0565b905061041d8185856107d8565b600191505092915050565b6000600254905090565b60008061043d6107d0565b905061044a8582856107ea565b61045585858561087e565b60019150509392505050565b60606040518060400160405280601b81526020017f536861726b2074697073206974732068617420706f6c6974656c790000000000815250905090565b60006012905090565b6104af610972565b6104b982826109f9565b5050565b6104c5610972565b6b033b2e3c9fd0803ce8000000816104db610428565b6104e59190611387565b1115610526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051d90611407565b60405180910390fd5b6105308282610a7b565b5050565b61054561053f6107d0565b826109f9565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610598610972565b6105a26000610afd565b565b606060405180606001604052806029815260200161145f60299139905090565b6105d6826105d06107d0565b836107ea565b6105e082826109f9565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461061d90611327565b80601f016020809104026020016040519081016040528092919081815260200182805461064990611327565b80156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b5050505050905090565b6000806106ab6107d0565b90506106b881858561087e565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610752610972565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107c45760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016107bb919061129d565b60405180910390fd5b6107cd81610afd565b50565b600033905090565b6107e58383836001610bc3565b505050565b60006107f684846106c3565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108785781811015610868578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161085f93929190611427565b60405180910390fd5b61087784848484036000610bc3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108f05760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016108e7919061129d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109625760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610959919061129d565b60405180910390fd5b61096d838383610d9a565b505050565b61097a6107d0565b73ffffffffffffffffffffffffffffffffffffffff166109986105e4565b73ffffffffffffffffffffffffffffffffffffffff16146109f7576109bb6107d0565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109ee919061129d565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a6b5760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610a62919061129d565b60405180910390fd5b610a7782600083610d9a565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aed5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610ae4919061129d565b60405180910390fd5b610af960008383610d9a565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610c355760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610c2c919061129d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ca75760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610c9e919061129d565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610d94578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610d8b919061118f565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610dec578060026000828254610de09190611387565b92505081905550610ebf565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610e78578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610e6f93929190611427565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f085780600260008282540392505081905550610f55565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610fb2919061118f565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ff9578082015181840152602081019050610fde565b60008484015250505050565b6000601f19601f8301169050919050565b600061102182610fbf565b61102b8185610fca565b935061103b818560208601610fdb565b61104481611005565b840191505092915050565b600060208201905081810360008301526110698184611016565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110a182611076565b9050919050565b6110b181611096565b81146110bc57600080fd5b50565b6000813590506110ce816110a8565b92915050565b6000819050919050565b6110e7816110d4565b81146110f257600080fd5b50565b600081359050611104816110de565b92915050565b6000806040838503121561112157611120611071565b5b600061112f858286016110bf565b9250506020611140858286016110f5565b9150509250929050565b60008115159050919050565b61115f8161114a565b82525050565b600060208201905061117a6000830184611156565b92915050565b611189816110d4565b82525050565b60006020820190506111a46000830184611180565b92915050565b6000806000606084860312156111c3576111c2611071565b5b60006111d1868287016110bf565b93505060206111e2868287016110bf565b92505060406111f3868287016110f5565b9150509250925092565b600060ff82169050919050565b611213816111fd565b82525050565b600060208201905061122e600083018461120a565b92915050565b60006020828403121561124a57611249611071565b5b6000611258848285016110f5565b91505092915050565b60006020828403121561127757611276611071565b5b6000611285848285016110bf565b91505092915050565b61129781611096565b82525050565b60006020820190506112b2600083018461128e565b92915050565b600080604083850312156112cf576112ce611071565b5b60006112dd858286016110bf565b92505060206112ee858286016110bf565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061133f57607f821691505b602082108103611352576113516112f8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611392826110d4565b915061139d836110d4565b92508282019050808211156113b5576113b4611358565b5b92915050565b7f43616e6e6f7420657863656564206d617820737570706c790000000000000000600082015250565b60006113f1601883610fca565b91506113fc826113bb565b602082019050919050565b60006020820190508181036000830152611420816113e4565b9050919050565b600060608201905061143c600083018661128e565b6114496020830185611180565b6114566040830184611180565b94935050505056fe536861726b20776966206120686174206973207377696d6d696e6720696e20746865206f6365616e21a2646970667358221220042a8234ca59564b53c7323b559b1f9306b812c200224bea969306e44f0ec76e64736f6c63430008180033";

type SharkWifHatConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SharkWifHatConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SharkWifHat__factory extends ContractFactory {
  constructor(...args: SharkWifHatConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SharkWifHat & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SharkWifHat__factory {
    return super.connect(runner) as SharkWifHat__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SharkWifHatInterface {
    return new Interface(_abi) as SharkWifHatInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SharkWifHat {
    return new Contract(address, _abi, runner) as unknown as SharkWifHat;
  }
}
