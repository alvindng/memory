function User(name, turn) {
  this.name = name;
  this.turn = turn;
}

User.prototype.changeTurn = function(turnInterval) {
  this.turn = this.turn + turnInterval;
};

User.prototype.isMatch = function(id1, id2) {
  var matches = [['a1', 'd3'], ['a2', 'd2'], ['a3', 'c4'], ['a4', 'c1'], ['b1', 'd4'], ['b2', 'c2'], ['b3', 'd1'], ['b4', 'c3']];
  var possible = [id1, id2].sort();
  console.log(possible);
  var answer = false;
  for (var i = 0; i < matches.length; i++) {
    var possibleTest = possible.join(' ');
    var matchesTest = matches[i].join(' ');
    if (possibleTest === matchesTest) {
      answer = true;
      break;
    } else {
      answer = false;
    }
  }
  return answer;
};

exports.userModule = User;
