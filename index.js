// Code your solution in this file!

function distanceFromHqInBlocks(dist) {
  return Math.abs(dist - 42);
}

function distanceFromHqInFeet(dist) {
  return (distanceFromHqInBlocks(dist) * 264);
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}