function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SKH5zQC4lb":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzS9vE7zkcZ4bsWvQN2cELAVmy73kURuoItzvrAWpAdA-OeSKrt4SpFX__9H21Gc5096A/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

