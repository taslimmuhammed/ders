export const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "contractid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "highPriority",
				"type": "bool"
			}
		],
		"name": "AlertCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum AlertStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "AlertResolved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "contractOwner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minStake",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minRank",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minReward",
				"type": "uint256"
			}
		],
		"name": "ContractRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "validator",
				"type": "address"
			}
		],
		"name": "ValidatorRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			}
		],
		"name": "ImplementAiPause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "alertMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creatorAddress",
				"type": "address"
			},
			{
				"internalType": "enum AlertStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "creationTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalPositiveStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalNegetiveStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalPositiveRank",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalNegetiveRank",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isHighPriority",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "alertURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_validator",
				"type": "address"
			}
		],
		"name": "calculateAllRewardAndRank",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_validator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_alertId",
				"type": "uint256"
			}
		],
		"name": "calculateRewardAndRank",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rankThreshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_highPriorityRankThreshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_stakeThreshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_highPrioritySakeThreshold",
				"type": "uint256"
			}
		],
		"name": "changeThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			}
		],
		"name": "checkSeverity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contractMapping",
		"outputs": [
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "enum ContractStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "contractOwner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "severity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "minRank",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "aiPause",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_isHighPriority",
				"type": "bool"
			}
		],
		"name": "createAlert",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_alertId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_accept",
				"type": "bool"
			}
		],
		"name": "declareAlertResult",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getAlertDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "alertId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "contractId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					},
					{
						"internalType": "enum AlertStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "stake",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isHighPriority",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "votersCount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					}
				],
				"internalType": "struct RAlert",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "alerts",
				"type": "uint256[]"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getAlertsBulk",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "alertId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "contractId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					},
					{
						"internalType": "enum AlertStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "stake",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isHighPriority",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "votersCount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					}
				],
				"internalType": "struct RAlert[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContracts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "contractId",
						"type": "uint256"
					},
					{
						"internalType": "enum ContractStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "contractAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "alertReward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "severity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minStake",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minRank",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "alerts",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "resolvedAlerts",
						"type": "uint256[]"
					},
					{
						"internalType": "bool",
						"name": "aiPause",
						"type": "bool"
					}
				],
				"internalType": "struct RContract[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUnresolvedAlerts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "alertId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "contractId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					},
					{
						"internalType": "enum AlertStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "stake",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isHighPriority",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "votersCount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					}
				],
				"internalType": "struct RAlert[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_validator",
				"type": "address"
			}
		],
		"name": "getUserContracts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "contractId",
						"type": "uint256"
					},
					{
						"internalType": "enum ContractStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "contractAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "alertReward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "severity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minStake",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minRank",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "alerts",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256[]",
						"name": "resolvedAlerts",
						"type": "uint256[]"
					},
					{
						"internalType": "bool",
						"name": "aiPause",
						"type": "bool"
					}
				],
				"internalType": "struct RContract[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserUnClaimedList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "alertId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "contractId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "creationTime",
						"type": "uint256"
					},
					{
						"internalType": "enum AlertStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "reward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "stake",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isHighPriority",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "votersCount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "voted",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					}
				],
				"internalType": "struct RAlert[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_alertId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_voter",
				"type": "address"
			}
		],
		"name": "getVote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "support",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "rank",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			}
		],
		"name": "increaseContractBalance",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "contractId",
				"type": "uint256"
			}
		],
		"name": "isCritical",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			}
		],
		"name": "puaseContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_contractAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_minStake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minRank",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardAmount",
				"type": "uint256"
			}
		],
		"name": "registerContract",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_alertId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_uri",
				"type": "string"
			}
		],
		"name": "resolveAlert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			}
		],
		"name": "resolvedAiPuase",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "resolvedURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "validatorMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rank",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rankCounter",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalClaimedReward",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastCreationTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_alertId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_support",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_contractId",
				"type": "uint256"
			}
		],
		"name": "withdrawbalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]