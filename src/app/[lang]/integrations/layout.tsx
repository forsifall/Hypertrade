export const metadata = {
  title: "integrations",
  description: "integrations page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; 
}