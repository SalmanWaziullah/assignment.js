function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;

}
var result = kilometerToMeter(5);

console.log(result)











function budgetCalculator(watch, mobile, laptop) {
    var forWatch = watch * 50;
    var forMobile = mobile * 100;
    var forLaptop = laptop * 500;

    var sum = forWatch + forMobile + forLaptop;

    return sum;

}
var result = budgetCalculator(1, 2, 1)
console.log(result);












function hotelCost(day) {

    var cost = 0;

    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        firstDays = 10 * 100;
        var remaining = day - 10;
        var secondDays = remaining * 80;
        cost = firstDays + secondDays;
    } else {
        var firstDays = 10 * 100;
        var secondDays = 10 * 80;
        var remaining = day - 20;
        var thirdDays = remaining * 50;
        cost = firstDays + secondDays + thirdDays;
    }
    return cost;
}
var result = hotelCost(21);
console.log(result)









function megaFriend(friends) {
    var friend = 0;
    var bigName;

    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > friend) {
            var friend = friends[i].length;
            bigName = friends[i];
        }
    }
    return bigName;
}
var names = [
    "kamal", "jamal", "rubel", "salman"
];
var result = megaFriend(names);

console.log(result)