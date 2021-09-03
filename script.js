window.onload = () => {
    var grid = [
      [7 , 0 , 0 , 0 , 0 , 0 , 2 , 0 , 0],
      [4 , 0 , 2 , 0 , 0 , 0 , 0 , 0 , 3],
      [0 , 0 , 0 , 2 , 0 , 1 , 0 , 0 , 0],
      [3 , 0 , 0 , 1 , 8 , 0 , 0 , 9 , 7],
      [0 , 0 , 9 , 0 , 7 , 0 , 6 , 0 , 0],
      [6 , 5 , 0 , 0 , 3 , 2 , 0 , 0 , 1],
      [0 , 0 , 0 , 4 , 0 , 9 , 0 , 0 , 0],
      [5 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 6],
      [0 , 0 , 6 , 0 , 0 , 0 , 0 , 0 , 8],
    ];
  
    let a = document.querySelectorAll("input");
    a.forEach(function (item) {
      var x, y;
      item.onmouseover = function () {
        item.classList.add("hover");
      };
      item.onmouseleave = function () {
        item.classList.remove("hover");
      };
      x = item.getAttribute("id").substring(0, 1);
      y = item.getAttribute("id").substring(1);
      item.onfocus = function () {
        changeSelected(x, y, "#e2ebf3");
        changeRe(item.value, false); 
        item.style.backgroundColor = "#bbdefb";
      };
      item.onblur = function () {
        grid[x][y] = parseInt(item.value);
        changeRe(item.value, true); 
        reduc();
        changeSelected(x, y, "white");
      };
      item.oninput = function () {
        changeRe(item.value, false); 
      };
      item.onchange = () => {
      };
    });
    gridFilling = (grid) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          var id = i + "" + j;
          document.getElementById(id).value = "";
          document.getElementById(id).style.backgroundColor = "#fff";
          document.getElementById(id).removeAttribute("disabled", "disabled");
          document.getElementById(id).classList.remove("dis");
          if (grid[i][j] != 0) {
            document.getElementById(id).value = grid[i][j]; 
            document.getElementById(id).setAttribute("disabled", "disabled");
          document.getElementById(id).style.backgroundColor = "#ebebe4";
            document.getElementById(id).classList.add("dis");
          }
        }
      }
    };
    gridFilling(grid);
    easySudoku = () => {
      grid = [
      [7 , 0 , 0 , 0 , 0 , 0 , 2 , 0 , 0],
      [4 , 0 , 2 , 0 , 0 , 0 , 0 , 0 , 3],
      [0 , 0 , 0 , 2 , 0 , 1 , 0 , 0 , 0],
      [3 , 0 , 0 , 1 , 8 , 0 , 0 , 9 , 7],
      [0 , 0 , 9 , 0 , 7 , 0 , 6 , 0 , 0],
      [6 , 5 , 0 , 0 , 3 , 2 , 0 , 0 , 1],
      [0 , 0 , 0 , 4 , 0 , 9 , 0 , 0 , 0],
      [5 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 6],
      [0 , 0 , 6 , 0 , 0 , 0 , 0 , 0 , 8],
      ];
      gridFilling(grid);
    };
    mediumSudoku = () => {
      grid = [
      [9 , 1 , 0 , 0 , 2 , 0 , 8 , 0 , 0],
      [0 , 0 , 0 , 0 , 0 , 0 , 1 , 9 , 5],
      [0 , 0 , 6 , 0 , 3 , 0 , 0 , 0 , 0],
      [1 , 6 , 0 , 0 , 0 , 8 , 0 , 5 , 0],
      [0 , 0 , 8 , 0 , 0 , 0 , 4 , 1 , 0],
      [0 , 9 , 0 , 1 , 7 , 3 , 0 , 0 , 0],
      [3 , 0 , 0 , 8 , 0 , 0 , 0 , 0 , 0],
      [5 , 0 , 0 , 3 , 0 , 0 , 2 , 4 , 0],
      [0 , 8 , 2 , 0 , 9 , 0 , 0 , 0 , 0],
      ];
      gridFilling(grid);
    };
    hardSudoku = () => {
      grid = [
        [0 , 7 , 0 , 0 , 3 , 0 , 0 , 0 , 8],
        [0 , 0 , 2 , 0 , 0 , 0 , 0 , 1 , 4],
        [1 , 0 , 8 , 0 , 0 , 4 , 7 , 0 , 0],
        [0 , 8 , 0 , 0 , 0 , 5 , 0 , 0 , 0],
        [0 , 0 , 7 , 8 , 1 , 2 , 9 , 0 , 0],
        [0 , 0 , 0 , 4 , 0 , 0 , 0 , 8 , 0],
        [0 , 0 , 5 , 6 , 0 , 0 , 3 , 0 , 9],
        [7 , 2 , 0 , 0 , 0 , 0 , 6 , 0 , 0],
        [6 , 0 , 0 , 0 , 4 , 0 , 0 , 7 , 0],
      ];
  
      gridFilling(grid);
    };
    changeSelected = (x, y, color) => {
      for (let i = 0; i < 9; i++) {
        let id = x + "" + i;
        if (
          document.getElementById(id).classList.contains("dis") &&
          color == "white"
        ) {
          document.getElementById(id).style.backgroundColor = "#ebebe4";
        } else {
          document.getElementById(id).style.backgroundColor = color;
        }
      }
      for (let i = 0; i < 9; i++) {
        let id = i + "" + y;
        if (
          document.getElementById(id).classList.contains("dis") &&
          color == "white"
        ) {
          document.getElementById(id).style.backgroundColor = "#ebebe4";
        } else {
          document.getElementById(id).style.backgroundColor = color;
        }
      }
      let xLen = 8;
      let startXLen = 6;
      let yLen = 8;
      let startYLen = 6;
      if (x >= 0 && x <= 2) {
        xLen = 2;
        startXLen = 0;
      } else if (x > 2 && x <= 5) {
        xLen = 5;
        startXLen = 3;
      }
      if (y >= 0 && y <= 2) {
        yLen = 2;
        startYLen = 0;
      } else if (y > 2 && y <= 5) {
        yLen = 5;
        startYLen = 3;
      }
      for (let i = startXLen; i <= xLen; i++) {
        for (let j = startYLen; j <= yLen; j++) {
          const id = i + "" + j;
          if (
            document.getElementById(id).classList.contains("dis") &&
            color == "white"
          ) {
            document.getElementById(id).style.backgroundColor = "#ebebe4";
          } else {
            document.getElementById(id).style.backgroundColor = color;
          }
        }
      }
    };
    reduc=()=>{
      for (let i = 0; i < 9; i++) {
      
        for (let j = 0; j < 9; j++) {
       
          if(!document.getElementById(i + "" + j).classList.contains("dis")){
            document.getElementById(i + "" + j).style.backgroundColor = "#fff";
          }
        }
      }
    }
    changeRe = (value, white) => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (
            document.getElementById(i + "" + j).classList.contains("dis") &&
            white == true
          ) {
            document.getElementById(i + "" + j).style.backgroundColor = "#ebebe4";
          } else if (
            document.getElementById(i + "" + j).value == value &&
            value != 0
          ) {
            document.getElementById(i + "" + j).style.backgroundColor = "#bbdefb";
          }
        }
      }
  
    };
  
    
    let validates1 = (x) => {
      var sumrow = 0;
      var sumcol = 0;
      var set1 = new Set();
      var set2 = new Set();
      for (let i = 0; i < 9; i++) {
        set1.add(grid[x][i]);
        sumrow += grid[x][i];
      }
      if (set1.size != 9 || sumrow != 45) {
        return false;
      }
      for (let i = 0; i < 9; i++) {
        set2.add(grid[i][x]);
        sumcol += grid[i][x];
      }
      if (set2.size != 9 || sumcol != 45) {
        return false;
      }
  
      return true;
    };
    let validates2 = (x, y) => {
      var sumbox = 0;
      var set3 = new Set();
      let xLen = 8;
      let startXLen = 6;
      let yLen = 8;
      let startYLen = 6;
      if (x >= 0 && x <= 2) {
        xLen = 2;
        startXLen = 0;
      } else if (x > 2 && x <= 5) {
        xLen = 5;
        startXLen = 3;
      }
      if (y >= 0 && y <= 2) {
        yLen = 2;
        startYLen = 0;
      } else if (y > 2 && y <= 5) {
        yLen = 5;
        startYLen = 3;
      }
      for (let i = startXLen; i <= xLen; i++) {
        for (let j = startYLen; j <= yLen; j++) {
         
          set3.add(grid[i][j]);
          
          sumbox += grid[i][j];
        }
      }
     
      if (set3.size != 9 || sumbox != 45) {
        return false;
      }
      return true;
    };
    validate = () => {
      var v1 = [];
      var v2 = [];
      for (let i = 0; i < 9; i++) {
        let c = validates1(i);
        v1.push(c);
        console.log(c);
      }
      for (let i = 0; i < 9; i = i + 3) {
        for (let j = 0; j < 9; j = j + 3) {
          let v = validates2(i, j);
          v2.push(v);
          console.log(v);
        }
      }
  
      var z = true;
      for (let i = 0; i < 9; i++) {
        if (v1[i] != v2[i] || v1[i] != true || v2[i] != true) {
          z = false;
          break;
        }
      }
      if (z == true) {
        alert("Congratulations You Have Solved It !🥳");
      } else {
        alert("You Have Made Some Mistake !😔");
      }
    };
  };
  
  