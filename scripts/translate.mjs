import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import fetch from "node-fetch"; // Node <18, иначе fetch встроен

// Настройки
const BASE_LANG = 'ru';
const TARGET_LANGS = ['en','ja']; // нужные языки
const NAMESPACE = 'common';
const LOCALES_PATH = join(process.cwd(), 'public/locales');

// Вспомогательные функции
const sleep = ms => new Promise(r => setTimeout(r, ms));

const smartSleep = async () => {
  const delay = 200 + Math.random() * 300; // небольшая пауза 0.2-0.5 сек
  await sleep(delay);
};

const shouldSkip = text => {
  if (!text || !text.trim()) return true;
  if (text.length < 3) return true;
  if (/^\d+$/.test(text)) return true; // только цифры
  if (/^\d{1,2}[./-]\d{1,2}[./-]\d{2,4}$/.test(text)) return true; // даты
  return false;
};

// функция для перевода через локальный LibreTranslate
async function translateText(text, target) {
  try {
    const res = await fetch("http://127.0.0.1:5000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,        // строка, а не массив
        source: BASE_LANG,
        target: target,
        format: "text"
      })
    });
    const data = await res.json();
    return data.translatedText; // <-- используем translatedText
  } catch (e) {
    console.error("Ошибка при переводе:", text, e.message);
    return text;
  }
}

async function main() {
  const baseFile = join(LOCALES_PATH, BASE_LANG, `${NAMESPACE}.json`);
  if (!existsSync(baseFile)) {
    console.error(`Файл ${baseFile} не найден`);
    process.exit(1);
  }

  const baseData = JSON.parse(readFileSync(baseFile, 'utf8'));

  for (const lang of TARGET_LANGS) {
    const targetDir = join(LOCALES_PATH, lang);
    if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });

    const targetFile = join(targetDir, `${NAMESPACE}.json`);
    let targetData = {};
    if (existsSync(targetFile)) {
      targetData = JSON.parse(readFileSync(targetFile, 'utf8'));
    }

    console.log(`\n=== Перевод на ${lang.toUpperCase()} ===`);

    for (const key of Object.keys(baseData)) {
      const textToTranslate = baseData[key];
      if (targetData[key] && targetData[key] !== baseData[key]) continue; // уже переведено
      if (shouldSkip(textToTranslate)) {
        targetData[key] = textToTranslate;
        continue;
      }

      const translated = await translateText(textToTranslate, lang);
      targetData[key] = translated;
      console.log(`[${lang}] ${textToTranslate} → ${translated}`);
      await smartSleep();
    }

    writeFileSync(targetFile, JSON.stringify(targetData, null, 2), 'utf8');
    console.log(`Файл ${targetFile} обновлён`);
  }

  console.log('\n✅ Автоперевод завершён');
}

main();