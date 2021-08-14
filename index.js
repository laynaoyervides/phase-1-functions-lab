function distanceFromHqInBlocks(someValue){
    let numBlocks = Math.abs(someValue - 42);
    return numBlocks;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(someValue){
    distanceFromHqInBlocks(someValue);
        let someFeet = (distanceFromHqInBlocks(someValue)* 264);
        return someFeet;   
}
distanceFromHqInFeet();

function distanceTravelledInFeet (start,destination){
    let distNS = Math.abs(start-destination);
    let distNSFt = (distNS*264);
    return distNSFt;
}
distanceTravelledInFeet();

function calculatesFarePrice(start,destination){
     let distance = (distanceTravelledInFeet(start, destination));
        if ((distance <= 400)){
            return 0;
        }
        else if ((distance > 400) && (distance <= 2000)){
            return (.02 * (distance - 400));
        }
        else if ((distance > 2000) && (distance < 2500)){
            return 25;
        }
        else {
            return "cannot travel that far";
        }

}
calculatesFarePrice();
