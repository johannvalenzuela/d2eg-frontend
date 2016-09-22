function getChannelInfo(name){
  // Twitch-API
  // GET https://api.twitch.tv/kraken/channels/:player.twitch.name
  var xmlhttpuno = new XMLHttpRequest();
  var urlTwitchChannel = "https://api.twitch.tv/kraken/channels/"+name;
  xmlhttpuno.onreadystatechange = function() {
    if (xmlhttpuno.readyState == 4 && xmlhttpuno.status == 200) {
      var channelInfo = JSON.parse(xmlhttpuno.responseText);
      document.getElementById("twitch_name").innerHTML = channelInfo.name;
      document.getElementById("twitch_views").innerHTML = channelInfo.views;
      document.getElementById("twitch_followers").innerHTML = channelInfo.followers;
      document.getElementById("twitch_banner").style.background = " linear-gradient(to bottom, rgba(100, 65, 165,0.9), rgba(38, 38, 38,0.9)), url('"+channelInfo.profile_banner+"') no-repeat";
      document.getElementById("twitch_banner").style.backgroundSize = "cover";
      document.getElementById("twitch_logo").src = channelInfo.logo;
    }
  };
  xmlhttpuno.open("GET", urlTwitchChannel, true);
  xmlhttpuno.send();
}

function getStreamInfo(name){
  // Twitch-API
  // GET https://api.twitch.tv/kraken/streams/:player.twitch.name
  var xmlhttp2 = new XMLHttpRequest();
  var urlTwitchStream = "https://api.twitch.tv/kraken/streams/"+name;
  xmlhttp2.onreadystatechange = function() {
    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
      var streamInfo = JSON.parse(xmlhttp2.responseText);
      if(streamInfo.stream != null){
        document.getElementById("bigpicture").innerHTML = '<iframe id="stream" frameborder="0" scrolling="no" height="560" style="min-width: 100%;background-color :black;z-index: -100;"></iframe>';
        document.getElementById("stream").setAttribute("src","https://player.twitch.tv/?channel="+name);
      }
    }
  };
  xmlhttp2.open("GET", urlTwitchStream, true);
  xmlhttp2.send();
}
