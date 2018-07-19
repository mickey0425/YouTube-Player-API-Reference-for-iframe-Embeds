
function onYouTubePlayerAPIReady() {
  let player;
    player = new YT.Player('YouTubeVideoPlayer', {

        videoId: 'wPnD1-o0MJY',
        playerVars: {
          enablejsapi: 1,
          rel: 0 ,             //是否應顯示相關視頻
          muted: 0,            // 靜音
          autoplay: 1,         // 在讀取時自動播放影片＊
          controls: 0,         // 在播放器顯示暫停／播放按鈕
          showinfo: 0,         // 隱藏影片標題
          modestbranding: 1,   // 隱藏YouTube Logo
          loop: 1,             // 讓影片循環播放＊
          fs: 0,               // 隱藏全螢幕按鈕
          cc_load_policty: 0,  // 隱藏字幕
          iv_load_policy: 3 ,  // 隱藏影片註解
          autohide: 1 ,        // 當播放影片時隱藏影片控制列
          playlist : 'wPnD1-o0MJY', //循環播放表單＊

        },
        events: {
         onReady: function(e) {
         e.target.mute();
      }
    }

    });
}


//YouTube Player API Reference for iframe Embeds
//https://developers.google.com/youtube/iframe_api_reference

//播放器參數
//https://developers.google.com/youtube/player_parameters
