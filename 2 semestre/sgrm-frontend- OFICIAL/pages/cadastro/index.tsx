import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { useMemo, useState } from "react";

export default function DocsPage() {

  const [selectedKeys, setSelectedKeys] = useState(["Tipo de Usuário"]);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <DefaultLayout screenType="auth">
      <section style={{
        backgroundImage: `url('/assets/1.png')`,
        backgroundSize: "cover",

      }} className="flex flex-col items-center justify-center h-screen w-screen">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="grid gap-4 bg-white rounded-md p-12 w-96">
            <h1 className={"text-2xl"}>Cadastro</h1>
            <Input type="text" label="Nome" />
            <Input type="text" label="CPF/CNPJ" />
            <Input type="email" label="Email" />
            <Input type="password" label="Senha" />
            <Input type="password" label="Confirme sua Senha" />
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize"
                >
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="light"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                <DropdownItem key="Paciente">Paciente</DropdownItem>
                <DropdownItem key="Farmácia">Farmácia</DropdownItem>
                <DropdownItem key="Laboratório">Laboratório</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <div className="flex gap-2 w-full justify-between">
              <Button fullWidth>Cadastrar</Button>
              <Link className="w-full" href="/login"><Button fullWidth>Entrar</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
