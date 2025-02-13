module.exports = {
  canto: {
    tvl: async (_, _1, _2, { api }) => {
      const totalSupply = await api.call({ target: '0xfb8255f0de21acebf490f1df6f0bdd48cc1df03b', abi: 'uint256:totalSupply'});
      const rate = await api.call({ target: '0x1d18c02bc80b1921255e71cf2939c03258d75470', abi: 'function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)'});

      return {
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": (totalSupply * rate.answer)/1e8
      };
    }
  }
};
