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

// function driversByRevenue(array) {
//    const sortedDrivers = [ ...array]
//    sortedDrivers.sort(function (a, b) {
//       return a.revenue - b.revenue
//    })
//
//    return sortedDrivers
// }

function driversByRevenue(drivers) {
   const sortedDrivers = [ ...drivers]
   return sortedDrivers.sort(function (a, b) {
      return a.revenue - b.revenue
   })
}

function driversByName(drivers) {
  const sortedDrivers = [ ...drivers]
  return sortedDrivers.sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })
}

const reduceDriverRev = function (agg, el, i, arr) {
  return agg + el.revenue
}

const totalRevenue = function totalRevenue(drivers) {
  return drivers.reduce(reduceDriverRev, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
