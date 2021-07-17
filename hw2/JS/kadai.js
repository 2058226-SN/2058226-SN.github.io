function pon(hand)
{
    var min = 1 ;
    var max = 3 ;
    var cp = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    var message = "";
    // 1＝グー　２＝チョキ　3＝パー
    console.log(cp);
    if(hand == 1)
    {
        if(cp==1)
        {
            message = "アイコ";
        }
        else if(cp==2)
        {
            message = "勝ったよ";
        }
        else
        {
            message = "負けたよ";
        }
    } 
    else if(hand == 2)
    {
        if(cp==1)
        {
            message = "負けたよ";
        }
        else if(cp==2)
        {
            message = "アイコ";
        }
        else
        {
            message = "勝ったよ";
        }
    } 
    else if(hand == 3)
    {
        if(cp==1)
        {
            message = "負けたよ";
        }
        else if(cp==2)
        {
            message = "勝ったよ";
        }
        else
        {
            message = "アイコ";
        }
    } 
    // alert(message);
    
    var html_inputMessage = document.getElementById("inputMessage");
    html_inputMessage.innerHTML = message;
}
