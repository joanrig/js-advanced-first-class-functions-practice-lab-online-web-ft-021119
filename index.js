// Code your solution in this file!

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];


function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
  console.log(driver.name)
  })}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
    console.log(driver.name)
    }
})}

// revs

// const revenueSorter = function (a, b) {
//   if (a.revenue < b.revenue){
//     return -1
//   }
//
//   if (a.revenue > b.revenue){
//     return 1
//   }
//
//   if (a.revenue = b.revenue){
//     return 0
//   }
// }
//
// function driversByRevenue(drivers) {
//   const sortedDrivers = [ ...drivers]
//   return sortedDrivers.sort(revenueSorter)
// }


function driversByRevenue(drivers) {
   const sortedDrivers = [ ...drivers]
   sortedDrivers.sort(function (a, b) {
      return a.revenue - b.revenue
   })

   return sortedDrivers
}

// names

const alphaSorter = function (a, b) {
  console.log(a.localeCompare(b));
}


function driversByName(drivers) {
  const sortedDrivers = [ ...drivers]
  return sortedDrivers.sort(alphaSorter)
}
