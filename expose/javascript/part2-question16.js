let statistics= {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (var car in statistics){
    let includesR = car.indexOf("r");
    if (includesR || (statistics[car] % 2 === 1) {
        console.log('${car}: ${statistics[property]}`);
    }
}

