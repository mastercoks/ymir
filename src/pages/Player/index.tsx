import { useEffect, useState } from "react";

import { useQuery, useScript } from "../../hooks";
import { Wrapper } from "./style";

export const Player: React.FC = () => {
  const query = useQuery();
  const [isRunning, setIsRunning] = useState(false);

  const hash = query.get("hash");
  const title = query.get("name");
  const imdbId = query.get("name");

  // useEffect(() => {
  //   const onRemove = async () => {
  //     setInterval(() => {
  //       console.log("vai deletar");
  //       // window.document
  //       //   .querySelectorAll(".mejs__button mejs__logo-button")
  //       //   .forEach((el) => el.remove());
  //       console.log("deletou");
  //     }, 1000);
  //   };
  //   onRemove();
  // }, []);

  useEffect(() => {
    const onExec = async () => {
      setIsRunning(true);
      window.webtor = window.webtor || [];
      window.webtor.push({
        id: "player",
        width: "100%",
        height: "100%",
        // poster:
        //   "https://epipoca.com.br/wp-content/uploads/2021/04/Poster-de-Mortal-Kombat-2.jpg",
        magnet: `magnet:?xt=urn:btih:${hash}&dn=Url+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80`,
        // magnet: `magnet:?xt=urn:btih:${hash}&dn=Url+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80&tr=udp://open.demonii.com:1337/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://p4p.arenabg.com:1337&tr=udp://tracker.leechers-paradise.org:6969`,
        on: function (e: any) {
          // if (e.name === window.webtor.INITED) {
          //   e.player.play();
          // }

          if (e.name === window.webtor.TORRENT_FETCHED) {
            console.log("Torrent fetched!", e.data);
          }
          if (e.name === window.webtor.TORRENT_ERROR) {
            console.log("Torrent error!");
          }
          console.log(e);
        },
        title,
        imdbId,
        // subtitles: [
        //   {
        //     srclang: "en",
        //     label: "test",
        //     src:
        //       "https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt",
        //     default: true,
        //   },
        // ],
        lang: "pt",
        userLang: "pt",
        features: {
          // p2pProgress: false,
          embed: false,
          // autoSubtitles: true,
          settings: false,
          download: false,
          browse: false,
        },
      });
      // console.log("vai deletar");
      // window.document
      //   .querySelectorAll(".mejs__button mejs__logo-button")
      //   .forEach((el) => el.remove());
    };

    // const onLoad = () => {
    //   const button = document.getElementById("button");
    //   const player = document.getElementById("player");
    //   const loading = document.getElementById("loading");
    //   if (!player || !loading || !button) return;

    //   player.style.display = "none";
    //   loading.style.display = "none";
    //   button.addEventListener("click", function () {
    //     button.style.display = "none";
    //     loading.style.display = "block";
    //     initPlayer();
    //   });

    //   function initPlayer() {
    //     window.webtor = window.webtor || [];
    //     window.webtor.push({
    //       id: "player",
    //       title,
    //       imdbId,
    //       width: "100%",
    //       magnet: `magnet:?xt=urn:btih:${hash}&dn=Url+Encoded+Movie+Name&tr=http://track.one:1234/announce&tr=udp://track.two:80`,
    //       lang: "pt",
    //       userLang: "pt",
    //       features: {
    //         p2pProgress: false,
    //         embed: false,
    //         settings: false,
    //         download: false,
    //         browse: false,
    //       },
    //       on: function (e) {
    //         if (e.name == window.webtor.INITED) {
    //           e.player.play();
    //           player.style.display = "block";
    //           loading.style.display = "none";
    //         }
    //       },
    //     });
    //   }
    // };

    if (!isRunning) onExec();
  }, [hash, imdbId, isRunning, title]);

  useScript(
    "https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"
  );

  return <Wrapper id="player" className="webtor" />;
};
