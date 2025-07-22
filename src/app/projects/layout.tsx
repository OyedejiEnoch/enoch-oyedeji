import ProjectNavbar from "@/sections/ProjectsNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
        <ProjectNavbar />
        {children}
      
    </div>
  );
}
