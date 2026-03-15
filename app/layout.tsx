import "./globals.css";

export const metadata = {
  title: "Программные свечи",
  description: "Лендинг программных свечей",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
