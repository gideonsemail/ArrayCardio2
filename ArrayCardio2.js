<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Cardio 💪💪</title>
</head>
<body>
  <p><em>Psst: have a look at the JavaScript Console</em> 💁</p>
  <script>
    // ## Array Cardio Day 2
    let people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
    let comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    // Some and Every Checks. Some will check if 1 of the items passes.
    // Array.prototype.some() // is at least one person 19 or older?
    let isAdult = people.some(function(person) {
    let currentYear = (new Date()).getFullYear();
      if(currentYear - person.year >= 19) {
        return true;
      }
    });
    console.log(isAdult)

    ///Shortr version
    let isAdult = people.some(person => {
    let currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19
    })

    // Array.prototype.every() // is everyone 19 or older?
    //Every method checks if ALL items(not just 1) passes the condition.
    //copy a shorter, modified version of above
    let allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({allAdults})

    // Array.prototype.find()
    //kinda like filter but instead of returning a subset of an array, it will return the first item that it finds.
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    let comment = comments.find(function(comment) {
      if(comment.id === 823423) {
        return true;
      }
    })
    console.log(comment)

    //es6 version, and shorter if statement to return boolean.
    let comment = comments.find(comment => comment.id === 823423)

    // Array.prototype.findIndex()
    // Find the comment with this ID
    //will find where something is inside the array.

    // delete the comment with the ID of 823423

    let index = comments.find(comment => comment.id === 823423)
    console.log(index)//return index of 1.
    //how do we delete it now that we've found it?
    comments.splice(index, 1)

  </script>
</body>
</html>
