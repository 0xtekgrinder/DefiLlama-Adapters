const { staking } = require("../helper/staking");
const ADDRESSES = require('../helper/coreAssets.json')

module.exports = {
  methodology: "Total USDC locked in the Vest Exchange.",
  start: '2024-03-17',
  era: {
    tvl: staking([
        "0xf7483A1464DeF6b8d5A6Caca4A8ce7E5be8F1F68",
        "0x7ccF5BbeC69c790D27dA3b5398B9e0d6D6EeC9F3",
        "0xf0bcF4eDe69e5cb0EB1c9E35b4d408a5e7fdA56b",
      ], ADDRESSES.era.USDC),
  },
  base: {
    tvl: staking(
      ["0xE80F92077131b9890599E418AE323de71cE1C35a","0x32d95F243F9E2c1344E4BAa91a8D32711527ef7e"],
      ADDRESSES.base.USDC
    ),
  },
  optimism: {
    tvl: staking(
      "0xE80F92077131b9890599E418AE323de71cE1C35a",
      ADDRESSES.optimism.USDC_CIRCLE
    ),
  },
  ethereum: {
    tvl: staking(
      "0xE80F92077131b9890599E418AE323de71cE1C35a",
      ADDRESSES.ethereum.USDC
    ),
  },
  polygon: {
    tvl: staking(
      "0xE80F92077131b9890599E418AE323de71cE1C35a",
      ADDRESSES.polygon.USDC_CIRCLE
    ),
  },
  arbitrum: {
    tvl: staking(
      "0x80C526d1c2fddADB3Cd39810cd7A79E07b0EDa00",
      ADDRESSES.arbitrum.USDC_CIRCLE
    ),
  },
  bsc: {
    tvl: staking(
      "0xef14da66876476C1A75dC057343B97b6Bd372c41",
      ADDRESSES.bsc.USDC
    ),
  },
}

