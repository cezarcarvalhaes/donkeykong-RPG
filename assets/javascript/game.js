$(document).ready(function() {
    //Global variables and functions
    var dkAttackPower = 9;
    var diddyAttackPower = 8;
    var kroolAttackPower = 12;
    var klumpAttackPower = 10;

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
            $(this).attr("id","foe").removeClass("user-character").appendTo(".your-character"); 
            $(".your-character").addClass("battle");
            $(".npc-character").off("click");
        });
        //Attack!!
        $(".attack").on("click",function(){
            //Character is Donkey Kong
            if ($(".user-character").is("#donkey-kong")){
                dkAttack();
                console.log(dkAttackPower);
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

});