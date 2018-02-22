$(document).ready(function() {
    //Global variables and functions
    //AttackPower variables to store incremented attack values
    var dkAttackPower = 0;
    var diddyAttackPower = 0;
    var kroolAttackPower = 0;
    var klumpAttackPower = 0;

    //HP variables to store diminishing HP values
    var dkHp = 120;
    var diddyHp = 100; 
    var kroolHp = 180;
    var klumpHp = 150;

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

    //select character and start game. Enemies move below.
    $(".character").on("click", function (){
        $(this).removeClass("character").addClass("user-character");
        $(".character").removeClass("character").addClass("npc-character").appendTo(".your-enemies");
        $(".character").off("click");
        //Select a defender and remove ability to select multiple defenders
        $(".npc-character").on("click", function(){
            $(this).addClass("foe").removeClass("user-character").appendTo(".your-character"); 
            $(".your-character").addClass("battle");
            $(".npc-character").off("click");
        });
    });
        //Attack!!

        $(".attack").on("click",function(){
            //Character is Donkey Kong
            if ($(".user-character").is("#donkey-kong")){
                dkAttack();
                //Attack sequences
                if ($(".foe").is("#king-k-rool")){
                    kroolHp = kroolHp - dkAttackPower;
                    var a = parseInt(document.getElementById("dk-hp").textContent);
                    $("#dk-hp").html(a - 25);
                    $("#messages").html("<p>You attacked King K. Rool for " + dkAttackPower +" damage!</p><p>King K. Rool counter-attacked for 25 damage!</p>");
                };

            };

            //Character is Diddy Kong
            if ($(".user-character").is("#diddy-kong")){
                console.log("diddy");
            };

            //Character is King K. Rool
            if ($(".user-character").is("#king-k-rool")){
                console.log("kroc!");
            };

            //Character is Klump
            if ($(".user-character").is("#gen-klump")){
                console.log("klump");
            };
            
        });


});