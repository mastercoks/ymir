import { useEffect, useLayoutEffect, useState } from "react";

import { useScript } from "../../hooks";
import { Wrapper } from "./style";

export const Player: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);

  useLayoutEffect(() => {
    const onExec = () => {
      setIsRunning(true);
      window.webtor = window.webtor || [];
      window.webtor.push({
        id: "player",
        width: "100%",
        height: "100%",
        poster:
          "https://epipoca.com.br/wp-content/uploads/2021/04/Poster-de-Mortal-Kombat-2.jpg",
        magnet:
          "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F",
        on: function (e) {
          if (e.name == window.webtor.TORRENT_FETCHED) {
            console.log("Torrent fetched!", e.data);
          }
          if (e.name == window.webtor.TORRENT_ERROR) {
            console.log("Torrent error!");
          }
        },
        title: "Nome do filme",
        imdbId: "tt12402620",
        subtitles: [
          {
            srclang: "en",
            label: "test",
            src:
              "https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt",
            default: true,
          },
        ],
        lang: "pt",
        userLang: "pt",
        i18n: {
          pt: {
            common: {
              "prepare to play": "Preparing Video Stream... Please Wait...",
            },
            stat: {
              seeding: "Semeando",
              waiting: "Client initialization",
              "waiting for peers": "Waiting for peers",
              from: "de",
            },
          },
        },
        features: {
          embed: false,
          settings: false,
        },
      });
    };

    if (!isRunning) onExec();
  }, [isRunning]);

  useScript(
    "https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"
  );
  return <Wrapper id="player" className="webtor" />;
};
