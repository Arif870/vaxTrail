function vaxTrail(sample) {
  var Obj = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  sample.sort(function (a, b) {
    return (a.age % 2) - (b.age % 2) || a.age - b.age;
  });

  for (i = 0; i < sample.length; i++) {
    if (
      sample[i].age >= 20 &&
      sample[i].age <= 30 &&
      sample[i].temperature < 100
    ) {
      Obj["A"].push(sample[i]);
    } else if (
      sample[i].age >= 31 &&
      sample[i].age <= 40 &&
      sample[i].temperature < 100
    ) {
      Obj["B"].push(sample[i]);
    } else if (
      sample[i].age >= 41 &&
      sample[i].age <= 50 &&
      sample[i].temperature < 100
    ) {
      Obj["C"].push(sample[i]);
    } else {
      Obj["D"].push(sample[i]);
    }
  }
  return Obj;
}


