export const metadata = {
  title: "BongFlow AI",
  description: "AI-powered WhatsApp CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
