import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
  screenType = 'default',
}: {
  children: React.ReactNode;
  screenType: string | undefined
}) {
  return (
    <div className="bg-[#b8e1f1] relative flex flex-col h-full">
      <Head />
      {screenType !== 'auth' && (
        <Navbar />
      )}
      <main className="bg-[#b8e1f1] container mx-auto flex-grow">
        {children}
      </main>
      {screenType !== 'auth' && (
        <footer className="bg-[#b8e1f1] w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
            title="nextui.org homepage"
          >
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">NextUI</p>
          </Link>
        </footer>
      )}
    </div>
  );
}
