const findTheOldest = people => {
  const thisYear = new Date().getFullYear();               // MDN docs ⟶【6†L21-L34】

  // Helper that always yields a valid age
  const age = p => (p.yearOfDeath ?? thisYear) - p.yearOfBirth;

  let oldest = people[0];                                 // start with the first entry
  for (let i = 1; i < people.length; i++) {
    if (age(people[i]) > age(oldest)) {
      oldest = people[i];
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
