pragma solidity ^0.8.9;

interface IERC20 {
  function balanceOf(address account) external view returns (uint256);
}

contract TokenBalance {
  function getBalances(address walletAddress, address[] calldata tokenAddress) external view returns (uint256[] memory) {
    uint256[] memory balances = new uint256[](tokenAddress.length);

    for (uint256 i = 0; i < tokenAddress.length; i++) {
      IERC20 token = IERC20(tokenAddress[i]);
      balances[i] = token.balanceOf(walletAddress);
    }
    return balances;
  }
}