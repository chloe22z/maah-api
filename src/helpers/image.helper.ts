import { pipeline } from "node:stream/promises";
import fs from 'node:fs';

export const imagesFolder = '/home/maahstud/public_html/images';

export const uploadImageFile = (folder: string, image: any, filename?: string) => {
    pipeline(image.file, fs.createWriteStream(`${imagesFolder}/${folder}/${filename ?? image.filename}`, { highWaterMark: 10 * 1024 * 1024 }))
}

export const removeImageFile = (folder: string, filename: string) => {
    const file = `${imagesFolder}/${folder}/${filename}`;
    if (fs.existsSync(file)) {
        fs.unlinkSync(`${imagesFolder}/${folder}/${filename}`)
    }
}

export const formatImageUrl = (folder: string, filename: string) => {
    return encodeURI(`https://maahstud.com/images/${folder}/${filename}`);
}