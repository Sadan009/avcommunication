import imagemin from "imagemin";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import fs from "fs";
import { glob } from "glob";

const inputDir = "public/assets/gallery";
const outputDir = "public/assets/gallery-optimized";

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const filePaths = await glob(
    "public/assets/{gallery,clients,banner}/*.{jpg,jpeg,png}"
  );


  const files = await imagemin(filePaths, {
    destination: outputDir,
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8], speed: 1 }),
    ],
  });

  console.log(`✅ Optimized ${files.length} image(s) to ${outputDir}`);
})();
