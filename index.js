// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const hqLocation = 42; // Headquarters is at block 43
    return Math.abs(blockNumber - hqLocation); // Absolute difference
  }
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber); // Reuse the blocks function
    const feetPerBlock = 264; // 1 block = 264 feet
    return blocks * feetPerBlock; // Convert blocks to feet
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(startBlock - endBlock); // Absolute difference
    const feetPerBlock = 264; // 1 block = 264 feet
    return blocksTravelled * feetPerBlock; // Convert blocks to feet
  }

  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock); // Reuse the distance function
  
    if (distanceInFeet <= 400) {
      return 0; // Free sample for the first 400 feet
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far';
    }
  }