const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/guess/:word", (req, res) => {
  const userWord = req.params.word;
  let answer = [];
  let theasnwer = "bread";

  for (let i = 0; i < userWord.length; i++) {
    const ch = userWord[i];

    if (ch == theasnwer[i]) {
      answer.push(1);
    } else if (theasnwer.includes(ch)) {
      answer.push(0);
    } else {
      answer.push(-1);
    }
  }
  res.send;
  res.json(answer);
});

server.listen(5500, () => {
  console.log("its working boys");
});
