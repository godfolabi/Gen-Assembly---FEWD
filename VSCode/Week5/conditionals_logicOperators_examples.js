// && (AND)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


// || (OR)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// ||
// If neither side is truthy, || will return the rightmost falsy thing.
// Otherwise, it returns the leftmost truthy thing.
// If either side is truthy, || will return the leftmost truthy thing.
// Otherwise, it returns the rightmost falsy thing.
// For example:
console.log("a" || 1)
console.log("" || 0)

let firstName = "Mark"
console.log(firstName || "Martin")

// &&
// If both sides are truthy, && will return the rightmost truthy thing.
// Otherwise, it returns the leftmost falsy thing.
// If either side is falsy, && will return the leftmost falsy thing.
// Otherwise, it will return the rightmost truthy thing.
// For example:
console.log("" && 1)