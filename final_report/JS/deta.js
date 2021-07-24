function card(player_card) 
{
  var min = 2 ;
  var max = 14 ;
  var message = "";
  var pointMessage = "";
  var point = 0;
    if (player_card == 0)
    {
        VET = 1;
        message = "ANTIに賭けます。Playerの欄のカードを引いてください。";
        var html_inputMessage = document.getElementById("BETinputMessage");
        html_inputMessage.innerHTML = message;
    } 
    else if(player_card ==1)
    {
        VET  =2;
        message = "TIEに賭けます。Playerの欄のカードを引いてください。";
        var html_inputMessage = document.getElementById("BETinputMessage");
        html_inputMessage.innerHTML = message;
    }   
    else if (player_card == 2)
    {
      var cp = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      console.log(cp);
      if(cp==2)
      {
          message = "2";
          CP = '2' - 0;
      }
      else if(cp==3)
      {
          message = "3";
          CP = '3' - 0;
      }
      else if(cp==4)
      {
          message = "4";
          CP = '4' - 0;
      }
      else if(cp==5)
      {
          message = "5";
          CP = '5' - 0;
      }
      else if(cp==6)
      {
          message = "6";
          CP = '6' - 0;
      }
      else if(cp==7)
      {
          message = "7";
          CP = '7' - 0;
      }
      else if(cp==8)
      {
          message = "8";
          CP = '8' - 0;
      }
      else if(cp==9)
      {
          message = "9";
          CP = '9' - 0;
      }
      else if(cp==10)
      {
          message = "10";
          CP = '10' - 0;
      }
      else if(cp==11)
      {
          message = "11";
          CP = '11' - 0;
      }
      else if(cp==12)
      {
          message = "12";
          CP = '12' - 0;
      }
      else if(cp==13)
      {
          message = "13";
          CP = '13' - 0;
      }
      else 
      {
          message = "A";
          CP = '14' - 0;
      }
      var html_inputMessage = document.getElementById("inputMessage");
      html_inputMessage.innerHTML = message;
    }

    else if (player_card == 3)
    { 
      var cd = Math.floor( Math.random() * (max + 1 - min) ) + min ;
      console.log(cd);
      if(cd==2)
      {
          message = "2";
          CD = '2' - 0;
      }
      else if(cd==3)
      {
          message = "3";
          CD = '3' - 0;
      }
      else if(cd==4)
      {
          message = "4";
          CD = '4' - 0;
      }
      else if(cd==5)
      {
          message = "5";
          CD = '5' - 0;
      }
      else if(cd==6)
      {
          message = "6";
          CD = '6' - 0;
      }
      else if(cd==7)
      {
          message = "7";
          CD = '7' - 0;
      }
      else if(cd==8)
      {
          message = "8";
          CD = '8' - 0;
      }
      else if(cd==9)
      {
          message = "9";
          CD = '9' - 0;
      }
      else if(cd==10)
      {
        message = "10";
        CD = '10' - 0;
      }
      else if(cd==11)
      {
          message = "11";
          CD = '11' - 0;
      }
      else if(cd==12)
      {
          message = "12";
          CD = '12' - 0;
      }
      else if(cd==13)
      {
          message = "13";
          CD = '13' - 0;
      }
      else 
      {
          message = "A";
          CD = '14' - 0;
      }
      var html_inputMessage = document.getElementById("DealerInputMessage");
      html_inputMessage.innerHTML = message;
    }
    else if (player_card == 4)
    {
        console.log(CP);
        console.log(CD);
      if (CP > CD)
        {
          if (VET ==1)
          {
            message = "あなたの勝ちです。あなたはANTIを選んだのでポイントは";
            point = CP * 2;
            console.log(point);
            pointMessage = point;
          }
          else if(VET ==2)
          {
            message = "あなたはTIEを選んだので、負けです。ポイントは";
            point = 0;
            console.log(point);
            pointMessage = '0';
          }
        }
        else if (CP == CD)
        {
            if (VET ==1)
          {
            message = "あなたはANTIを選んだので、負けです。ポイントは";
            point = 0; 
            console.log(point);
            pointMessage = '0';
          }
          else if(VET ==2)
          {
            message = "引き分けです。しかしあなたはTIEを選んだので、ポイントは";
            point = CP * 10;
            console.log(point);
            pointMessage = point;
          }
        }
        else
        {
          point = 0; 
          console.log(point);
          message = "あなたの負けです。あなたのポイントは";
          pointMessage = "0";
        }
        var html_inputMessage = document.getElementById("ResultInputMessage");
        html_inputMessage.innerHTML = message;     
        var html_inputMessage = document.getElementById("PointInputMessage");
        html_inputMessage.innerHTML = pointMessage;   
    }  
}

