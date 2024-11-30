import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import Image from "next/image";

export default function DocsPage() {
  return (
    <DefaultLayout screenType="auth">
      <section style={{
        backgroundImage: `url('/assets/1.png')`,
        backgroundSize: "cover",
        
      }} className="flex flex-col items-center justify-center h-screen w-screen">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="grid gap-4 bg-white rounded-md p-12 w-96">
            <h1 className={"text-2xl"}>Login</h1>
            <Input type="email" label="Email" />
            <Input type="password" label="Senha" />
            <div className="flex gap-2 w-full justify-between">
              <Button fullWidth>Entrar</Button>
              <Link href="/cadastro"><Button fullWidth>Cadastrar</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
