export const metadata = {
  title: "FAQ - Часто задаваемые вопросы о Hypertrade | Ответы на все вопросы",
  description:
    "Полные ответы на популярные вопросы: что такое Hypertrade, комиссии за обмен, поддерживаемые токены, безопасность платформы, отличия от обычных DEX, токен HYPE и как начать работу.",
  keywords: [
    "Hypertrade FAQ",
    "часто задаваемые вопросы",
    "токен HYPE",
    "комиссии Hypertrade",
    "безопасность Hypertrade",
    "симуляция Invisium",
    "как начать Hypertrade",
    "поддерживаемые токены",
  ].join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
