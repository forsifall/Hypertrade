import en from '../translations/en.json';
import ru from '../translations/ru.json';
import ja from '../translations/ja.json';

const dictionaries = {
  en,
  ru,
  ja,
};

export type Language = keyof typeof dictionaries;

export function getDictionary(lang: Language) {
  return dictionaries[lang] || dictionaries.en;
}


export function changeLanguage(lang: string) {
  const select = document.querySelector<HTMLSelectElement>('select.goog-te-combo');
  console.log(select)
  if (!select) return;
  select.value = lang;
  select.dispatchEvent(new Event('change'));
}