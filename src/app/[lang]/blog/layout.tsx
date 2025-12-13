export const metadata = {
  title: "blog",
  description: "about blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; 
}