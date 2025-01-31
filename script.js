$(document).ready(function() {

    let player = "X";

    let board = ["","","","","","","","","",];

    function kiemtra() {
        const win = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let combo of win) {
            let [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        if(board.includes("")){
            return null;
        }
        else{
            return "draw";
        }
    }

    function clickvao(){
        
        let cell = $(this);
        let index = cell.data("index");

        if (board[index] !== "") {
            return;
        }
        
        board[index] = player;

        cell.text(player);


        let winner = kiemtra();
                if (winner) {
                    if (winner === "draw") {
                        $("#result").text("Hòa!");
                    } 
                    else {
                        $("#result").text("Player "+ winner + " is Winner !");
                    }
                    $(".cell").off("click");
                    return;
                }

       if(player === "X"){
        player = "O";
       } 
       else{
        player = "X";
       }
    }

    $(".cell").click(clickvao);

    /* hàm reset game */
    $("#back").click(function() {
        $(".cell").text("").off("click").click(clickvao); // Xóa nội dung & bật lại sự kiện click
        board = ["", "", "", "", "", "", "", "", ""]; // Đặt lại trạng thái bàn cờ
        player = "X"; // Đặt lại lượt chơi
        $("#result").text(""); // Xóa thông báo thắng/thua
    });
});
    
