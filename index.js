import { download as electronDownload } from "@electron/get";

async function download(version) {
  let pctDone = 0;
  const getProgressCallback = (progress) => {
    console.log("Logging percentage");
    console.log(progress.percent);

    const pct = Math.round(progress.percent * 100);
    if (pctDone + 10 <= pct) {
      const emoji = pct >= 100 ? "🏁" : "⏳";
      console.log(`${emoji} downloading ${version} - ${pct}%`);
      pctDone = pct;
    }
  };
  const zipFile = await electronDownload(version, {
    downloadOptions: {
      quiet: true,
      getProgressCallback,
    },
  });

  return zipFile;
}

(async () => {
  await download("20.0.0");
})();
