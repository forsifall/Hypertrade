export const metadata = {
  title: "Обо мне - [Ваше Имя] | [Профессия/Специализация]",
  description: "Привет! Я [Ваше Имя], [профессия]. Здесь вы можете узнать о моем опыте, навыках, образовании и профессиональном пути.",
  openGraph: {
    title: "Обо мне - [Ваше Имя]",
    description: "Познакомьтесь с моим профессиональным опытом и навыками",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; 
}