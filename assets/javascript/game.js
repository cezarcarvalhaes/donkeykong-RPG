$(document).ready(function() {
    //Global variables and functions
    //AttackPower variables to store incremented attack values
    var dkAttackPower = 0;
    var diddyAttackPower = 0;
    var kroolAttackPower = 0;
    var klumpAttackPower = 0;

    //functions to increment attack power
    function dkAttack() {
        dkAttackPower += 9;
    };
    function diddyAttack() {
        diddyAttackPower += 8;
    };
    function kroolAttack() {
        kroolAttackPower += 12;
    };
    function klumpAttack() {
        klumpAttackPower += 10;
    };

    //hides buttons until needed.
    $(".restart").hide();
    $(".attack").hide();

    function selectFoe (){
        //Select a defender and remove ability to select multiple defenders
        $(".npc-character").on("click", function(){
            $(this).addClass("foe").removeClass("user-character").appendTo(".your-character"); 
            $(".your-character").addClass("battle");
            if ($(".your-character").has(".foe")){
                $(".npc-character").off("click");
                $(".attack").show();
            };
        });
    };

    function winGame (){
        $("#messages").html("<p>You Win! Click to play again!</p>");
        $(".restart").show();
        console.log("you win!")
    }

    function loseGame(){
        $("#messages").html("<p>You Lose! Click to play again!</p>");
        $(".restart").show();
    }

    //select character and start game. Enemies move below.

    $(".character").on("click", function (){
        $(this).removeClass("character").addClass("user-character");
        $(".character").removeClass("character").addClass("npc-character").appendTo(".your-enemies");
        $(".character").off("click");

        selectFoe();
    });
        //Attack!!

        $(".attack").on("click",function(){
            //Character is Donkey Kong
            if ($(".user-character").is("#donkey-kong")){
                dkAttack();
                //Attack King K Rool
                if ($(".foe").is("#king-k-rool")){
                    var a = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(a - 20);
                    var b = parseInt(document.getElementById("krool-hp").textContent);
                    $("#krool-hp").html(b - dkAttackPower);
                    $("#messages").html("<p>You attacked King K. Rool for " + dkAttackPower +" damage!</p><p>King K. Rool counter-attacked for 25 damage!</p>");
                    //K. Rool dies
                    if (parseInt(document.getElementById("krool-hp").textContent)<=0) {
                        $("#king-k-rool").remove();
                        selectFoe();
                    };
                };
                //Attack Klump
                if ($(".foe").is("#gen-klump")){
                    var a = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(a - 15);
                    var b = parseInt(document.getElementById("klump-hp").textContent);
                    $("#klump-hp").html(b - dkAttackPower);
                    $("#messages").html("<p>You attacked Klump for " + dkAttackPower +" damage!</p><p>Klump counter-attacked for 20 damage!</p>");
                    //Klump dies
                    if (parseInt(document.getElementById("klump-hp").textContent)<=0) {
                        $("#gen-klump").remove();
                        selectFoe();
                    };
                };
                //Attack Diddy
                if ($(".foe").is("#diddy-kong")){
                    var a = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(a - 10);
                    var b = parseInt(document.getElementById("diddy-hp").textContent);
                    $("#diddy-hp").html(b - dkAttackPower);
                    $("#messages").html("<p>You attacked Diddy Kong for " + dkAttackPower +" damage!</p><p>Diddy Kong counter-attacked for 10 damage!</p>");
                    //Diddy dies
                    if (parseInt(document.getElementById("diddy-hp").textContent)<=0) {
                        $("#diddy-kong").remove();
                        selectFoe();
                    };                
                };
                //DK dies
                if (parseInt(document.getElementById("dk-hp").textContent)<=0) {
                    loseGame();
                };
            };

            //Character is Diddy Kong
            if ($(".user-character").is("#diddy-kong")){
                //Attack King K Rool
                diddyAttack();
                if ($(".foe").is("#king-k-rool")){
                    var a = parseInt(document.getElementById("diddy-hp").textContent);
                    $("#diddy-hp").html(a - 20);
                    var b = parseInt(document.getElementById("krool-hp").textContent);
                    $("#krool-hp").html(b - diddyAttackPower);
                    $("#messages").html("<p>You attacked King K. Rool for " + diddyAttackPower +" damage!</p><p>King K. Rool counter-attacked for 25 damage!</p>");
                    //K. Rool dies
                    if (parseInt(document.getElementById("krool-hp").textContent)<=0) {
                        $("#king-k-rool").remove();
                        selectFoe();
                    };
                };
                //Attack Klump
                if ($(".foe").is("#gen-klump")){
                    var a = parseInt(document.getElementById("diddy-hp").textContent);
                    $("#diddy-hp").html(a - 15);
                    var b = parseInt(document.getElementById("klump-hp").textContent);
                    $("#klump-hp").html(b - diddyAttackPower);
                    $("#messages").html("<p>You attacked Klump for " + diddyAttackPower +" damage!</p><p>Klump counter-attacked for 20 damage!</p>");
                    //Klump dies
                    if (parseInt(document.getElementById("klump-hp").textContent)<=0) {
                        $("#gen-klump").remove();
                        selectFoe();
                    };             
                };

                //Attack DK
                if ($(".foe").is("#donkey-kong")){
                    var a = parseInt(document.getElementById("diddy-hp").textContent);
                    $("#dk-hp").html(a - 10);
                    var b = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(b - diddyAttackPower);
                    $("#messages").html("<p>You attacked Donkey Kong for " + diddyAttackPower +" damage!</p><p>Donkey Kong counter-attacked for 10 damage!</p>");
                    //DK dies
                    if (parseInt(document.getElementById("dk-hp").textContent)<=0) {
                        $("#donkey-kong").remove();
                        selectFoe();
                    };   
                };
                //Diddy dies
                if (parseInt(document.getElementById("diddy-hp").textContent)<=0) {
                    loseGame();
                };               
            };

            //Character is King K. Rool
            if ($(".user-character").is("#king-k-rool")){
                kroolAttack();
                //Attack Diddy
                if ($(".foe").is("#diddy-kong")){
                    var a = parseInt(document.getElementById("krool-hp").textContent);
                    $("#krool-hp").html(a - 10);
                    var b = parseInt(document.getElementById("diddy-hp").textContent);
                    $("#diddy-hp").html(b - kroolAttackPower);
                    $("#messages").html("<p>You attacked Diddy Kong for " + kroolAttackPower +" damage!</p><p>Diddy Kong counter-attacked for 25 damage!</p>");
                    //Diddy dies
                    if (parseInt(document.getElementById("diddy-hp").textContent)<=0) {
                        $("#diddy-kong").remove();
                        selectFoe();
                    };                
                };
                //Attack Klump
                if ($(".foe").is("#gen-klump")){
                    var a = parseInt(document.getElementById("krool-hp").textContent);
                    $("#krool-hp").html(a - 15);
                    var b = parseInt(document.getElementById("klump-hp").textContent);
                    $("#klump-hp").html(b - kroolAttackPower);
                    $("#messages").html("<p>You attacked Klump for " + kroolAttackPower +" damage!</p><p>Klump counter-attacked for 20 damage!</p>");
                    //Klump dies
                    if (parseInt(document.getElementById("klump-hp").textContent)<=0) {
                        $("#gen-klump").remove();
                        selectFoe();
                    };              
                };

                //Attack DK
                if ($(".foe").is("#donkey-kong")){
                    var a = parseInt(document.getElementById("krool-hp").textContent);
                    $("#krool-hp").html(a - 20);
                    var b = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(b - kroolAttackPower);
                    $("#messages").html("<p>You attacked Donkey Kong for " + kroolAttackPower +" damage!</p><p>Donkey Kong counter-attacked for 10 damage!</p>");
                    //DK dies
                    if (parseInt(document.getElementById("dk-hp").textContent)<=0) {
                        $("#donkey-kong").remove();
                        selectFoe();
                    };  
                };
                //King K Rool dies
                if (parseInt(document.getElementById("krool-hp").textContent)<=0) {
                    loseGame();
                };
            };

            //Character is Klump
            if ($(".user-character").is("#gen-klump")){
                klumpAttack();
                if ($(".foe").is("#diddy-kong")){
                    var a = parseInt(document.getElementById("klump-hp").textContent);
                    $("#klump-hp").html(a - 5);
                    var b = parseInt(document.getElementById("diddy-hp").textContent);
                    $("#diddy-hp").html(b - klumpAttackPower);
                    $("#messages").html("<p>You attacked Diddy Kong for " + klumpAttackPower +" damage!</p><p>Diddy Kong counter-attacked for 25 damage!</p>");
                    //Diddy dies
                    if (parseInt(document.getElementById("diddy-hp").textContent)<=0) {
                        $("#diddy-kong").remove();
                        selectFoe();
                    };   
                };
                //Attack King K Rool
                if ($(".foe").is("#king-k-rool")){
                    var a = parseInt(document.getElementById("klump-hp").textContent);
                    $("#klump-hp").html(a - 15);
                    var b = parseInt(document.getElementById("krool-hp").textContent);
                    $("#krool-hp").html(b - klumpAttackPower);
                    $("#messages").html("<p>You attacked Klump for " + klumpAttackPower +" damage!</p><p>King K. Rool counter-attacked for 20 damage!</p>");
                    //K. Rool dies
                    if (parseInt(document.getElementById("krool-hp").textContent)<=0) {
                        $("#king-k-rool").remove();
                        selectFoe();
                    };              
                };

                //Attack DK
                if ($(".foe").is("#donkey-kong")){
                    var a = parseInt(document.getElementById("klump-hp").textContent);
                    $("#klump-hp").html(a - 25);
                    var b = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(b - klumpAttackPower);
                    $("#messages").html("<p>You attacked Donkey Kong for " + klumpAttackPower +" damage!</p><p>Donkey Kong counter-attacked for 10 damage!</p>");
                    //DK dies
                    if (parseInt(document.getElementById("dk-hp").textContent)<=0) {
                        $("#donkey-kong").remove();
                        selectFoe();
                    };                 
                };
                //Klump dies
                if (parseInt(document.getElementById("klump-hp").textContent)<=0) {
                    loseGame();
                };
            };
        //win condition
        if (!$("div").hasClass("npc-character")){
           winGame();
        }

        $("#restart-button").click(function() {
            location.reload();
        });

        });

});