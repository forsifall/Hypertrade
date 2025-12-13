export const metadata = {
  title: "контакты",
  description: "страница контактов",
  openGraph: {
    title: "контакты",
    description: "множество контактов",
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