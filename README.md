# DERS (DeFi Early Risk System)

## Overview
DERS is a decentralized protocol designed to protect DeFi smart contracts from real-world threats and attacks that traditional smart contract audits might not catch. Unlike conventional smart contract audits that focus on code vulnerabilities, DERS specifically targets runtime threats like flash loan attacks, price oracle manipulation, and other sophisticated attack vectors that could potentially compromise DeFi protocols.

## Key Features

### Decentralized Validation System
- Validator-driven alert system for identifying potential threats
- Staking mechanism for validators to ensure honest participation
- Consensus-based decision making for threat validation
- Ranking system to reward honest validator behavior

### Alert Types
- **High Priority Alerts**
  - Faster consensus reaching
  - Higher rewards for validators
  - Immediate contract pause capability
  - Rapid severity point escalation

- **Low Priority Alerts**
  - Standard consensus timeline
  - Regular reward distribution
  - Normal severity point accumulation

### Smart Contract Integration

#### Interface Implementation
```solidity
interface ISeverityChecker {
    function checkSeverity(uint256 contractId) external view returns (uint256);
    function isCritical(uint256 contractId) external view returns (bool);
}
```

### AI-Powered Threat Detection
- LSTM-based model built with PyTorch
- Monitors and classifies transactions based on:
  - Transfer amounts
  - Transaction action density
  - Gas fees patterns
  - Other relevant metrics
- Automated AI-pause feature with creator-only override

## How It Works

1. **Contract Registration**
   - Smart contract owners register their contracts
   - Stake required reward amount
   - Contract enters monitoring phase

2. **Threat Monitoring**
   - Validators actively monitor registered contracts
   - AI system analyzes transaction patterns
   - Alerts raised when threats detected

3. **Alert Processing**
   - Validators vote on raised alerts
   - Staking required for voting and alert creation
   - Rewards distributed based on consensus
   - Contract owner can finalize unresolved alerts after set period

## Implementation Methods

### Frontend Integration
- Severity checker implementation in frontend
- User warnings based on threat levels

### Smart Contract Integration
- Direct interface implementation in DeFi contracts
- Recommended for DEXs and other DeFi protocols
- Automated pause functionality on threat detection

## Video Demo
[Watch the DERS Protocol Demo](https://youtu.be/_XbmYPxigZE)
[Watch the DERS AI modal Demo](https://youtu.be/Een_oRAOdoY)

## Security Considerations
- Multiple validation layers (AI + Human validators)
- Stake-based participation ensures honest behavior
- Ranking system prevents malicious activities
- Quick consensus mechanism for critical threats

## Get Started
1. Register your smart contract with DERS
2. Implement the ISeverityChecker interface
3. Set up monitoring parameters
4. Configure alert response mechanisms

## Contributing
We welcome contributions from the community. Please refer to our contribution guidelines for more information.

## License
[Add License Information]