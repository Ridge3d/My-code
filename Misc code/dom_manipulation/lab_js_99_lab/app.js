let friends = ["Phil", "Paula", "Sierra", "Coy", "Ari"];

for (var i = 0; i < friends.length; i++) {
  for (var f = 99; f > 0; f--) {
    if (f > 2) {
      console.log(`${friends[i]} made ${f} lines of code today! Found 1 bug and took it away. Now there's ${f - 1} lines of code left to play!`);
    } else if (f == 2) {
      console.log(`${friends[i]} made ${f} lines of code today! Found 1 bug and took it away. Now there's ${f - 1} more line of code left to play!`);
    } else if (f == 1) {
      console.log(`${friends[i]} made ${f} line of code today! Found the only bug and took it away. Now there's no more lines of code left to play!`);
    };
  };
};