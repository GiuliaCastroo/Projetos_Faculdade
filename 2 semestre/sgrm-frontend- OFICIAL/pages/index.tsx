import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Image from "next/image";

export default function IndexPage() {
  return (
    <DefaultLayout screenType="">
      <div style={{
        backgroundImage: `url('/assets/2.png')`,
        backgroundSize: "cover",

      }} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 min-w-screen">
        {/* <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 bg-white shadow-md">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center w-full md:flex-row">
              {/* <div className="flex justify-center w-full md:w-1/3">
                 <Image className="w-32 h-32" src="" alt="logo" /> 
              </div> 
              <div className="flex flex-col items-start justify-center w-full mt-6 text-white md:w-2/3 md:mt-0">
                <h4 className="text-2xl font-bold">Projeto SGRM</h4>
                <p className="mt-4 text-justify">
                  "Simplicidade ao Alcance de Todos" O SGRM é fácil de usar, mesmo para quem não tem experiência com tecnologia. Em poucos cliques, você pode:
                  Visualizar suas prescrições médicas. Encontrar farmácias próximas e comparar preços. Receber notificações para não perder o horário dos seus medicamentos. Médicos e farmácias têm acesso a ferramentas que agilizam a comunicação e a entrega.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div id="sobre" className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 mt-8 bg-white shadow-md">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center w-full md:flex-row">
              <div className="flex flex-col items-start justify-center w-full mt-6 text-black md:w-1/2 md:mt-0">
                <h4 className="text-2xl font-bold">"Por que um Sistema de Gerenciamento de Receitas Médicas é Essencial?"</h4>
                <h5 className="mt-4 text-xl font-semibold">Objetivos e Metas</h5>
                <p className="mt-4 text-justify">
                  75% dos pacientes esquecem ao menos uma dose de medicamento por mês. Sistemas integrados aumentam em até 30% a adesão ao tratamento. Farmácias relatam um aumento de 20% na eficiência ao utilizar plataformas digitais.
                </p>
                <div className="mt-4">
                  <span className="text-blue-500 cursor-pointer">Saiba Mais</span>
                </div>
              </div>
              <div className="flex justify-center w-full mt-6 md:w-1/2 md:mt-0">
                {/* <Image className="w-64 h-64" src="" alt="" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 mt-8 bg-white shadow-md">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center w-full md:flex-row">
              <div className="flex flex-col items-start justify-center w-full mt-6 md:w-1/2 md:mt-0">
                <h4 className="text-2xl font-bold">Seção: Segurança de Dados</h4>
                <p className="mt-4 text-justify">
                  "Segurança e Privacidade: Nossa Prioridade" Seus dados são criptografados e protegidos por tecnologia de ponta. O SGRM segue rigorosamente as diretrizes da LGPD (Lei Geral de Proteção de Dados), garantindo a privacidade de informações sensíveis.
                </p>
              </div>
              <div className="flex justify-center w-full mt-6 md:w-1/2 md:mt-0">
                <div id="carouselExampleControls" className="relative w-full">
                  <div className="relative w-full overflow-hidden">
                    <div className="relative w-full">
                      {/* <Image className="w-full h-64" src="../../assets/img/desigualdade.jpeg" alt="Primeiro Slide" /> */}
                    </div>
                    <div className="relative w-full">
                      {/* <Image className="w-full h-64" src="../../assets/img/desigualdade2.jpg" alt="Segundo Slide" /> */}
                    </div>
                    <div className="relative w-full">
                      {/* <Image className="w-full h-64" src="../../assets/img/desigualdade3.jpg" alt="Terceiro Slide" /> */}
                    </div>
                  </div>
                  <a className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 bg-gray-800 bg-opacity-50 cursor-pointer" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="text-white">‹</span>
                  </a>
                  <a className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 bg-gray-800 bg-opacity-50 cursor-pointer" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="text-white">›</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 mt-8 bg-white shadow-md">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <div className="flex flex-col items-center justify-center w-full md:flex-row">
              <div className="flex justify-center w-full md:w-1/2">
                {/* <iframe className="w-full h-56" src="https://www.youtube.com/watch?v=Wvxc6-zv8hQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
              </div>
              <div className="flex flex-col items-start justify-center w-full mt-6 md:w-1/2 md:mt-0">
                <h4 className="text-2xl font-bold">Seção: Perguntas Frequentes (FAQ)</h4>
                <p className="mt-4 text-justify">
                  "Preciso pagar pelo SGRM?" O acesso básico é gratuito. Planos avançados para clínicas e farmácias incluem recursos adicionais.
                  "Como encontro farmácias próximas?" Utilizamos geolocalização para mostrar farmácias com estoque atualizado, preços e promoções.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="tech" className="flex flex-col items-center justify-center w-full max-w-6xl px-4 py-8 mt-8 bg-gray-800">
          <h1 className="text-3xl font-bold text-white">Ferramentas Usadas</h1>
          <div className="flex flex-wrap justify-center w-full mt-8">
            <div className="flex flex-col items-center w-full p-4 md:w-1/4">
              {/* <Image className="w-32 h-32" src="../../assets/img/spring2.png" alt="Imagem de capa do card" /> */}
              <h5 className="mt-4 text-xl font-bold text-white">SGRM</h5>
              <p className="mt-2 text-justify text-white">
                O SGRM é uma plataforma inovadora para gerenciar receitas médicas, facilitando o cuidado com a saúde. Conectamos médicos, pacientes e farmácias em um sistema integrado e intuitivo.
              </p>
            </div>
            <div className="flex flex-col items-center w-full p-4 md:w-1/4">
              {/* <Image className="w-32 h-32" src="" alt="Imagem de capa do card" /> */}
              <h5 className="mt-4 text-xl font-bold text-white">Pacientes</h5>
              <p className="mt-2 text-justify text-white">
                "Sua saúde na palma da mão." Nunca foi tão fácil gerenciar suas receitas médicas. Receba lembretes, localize farmácias próximas e acompanhe seu tratamento de forma segura e prática.
              </p>
            </div>
            <div className="flex flex-col items-center w-full p-4 md:w-1/4">
              {/* <Image className="w-32 h-32" src="" alt="Imagem de capa do card" /> */}
              <h5 className="mt-4 text-xl font-bold text-white">Farmacias</h5>
              <p className="mt-2 text-justify text-white">
                "Conecte-se aos pacientes de forma simples e eficiente." Com o SGRM, sua farmácia recebe notificações automáticas de prescrições e pode oferecer atendimento mais rápido, aumentando a satisfação dos clientes.
              </p>
            </div>
            <div className="flex flex-col items-center w-full p-4 md:w-1/4">
              {/* <Image className="w-32 h-32" src="" alt="Imagem de capa do card" /> */}
              <h5 className="mt-4 text-xl font-bold text-white">Laboratórios</h5>
              <p className="mt-2 text-justify text-white">
                "Aumente a eficiência na distribuição e rastreabilidade dos medicamentos." O SGRM permite que laboratórios acompanhem a demanda em tempo real, otimizando a logística e garantindo que os pacientes tenham acesso aos seus medicamentos de forma ágil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}