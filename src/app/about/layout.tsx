type AboutLayoutProps = {
  children: React.ReactNode;
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <>
      <h1>AQUI VEM O LAYOUT DO ABOUT</h1>
      {children}
    </>
  );
}
