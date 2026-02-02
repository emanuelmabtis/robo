
import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Users, 
  Clock, 
  Lock, 
  ChevronDown, 
  ChevronUp,
  Star
} from 'lucide-react';

// --- Components ---

// Fix for error: Property 'children' is missing in type... but required...
// Making children optional in the type definition to satisfy the compiler's JSX checking for nested content.
const Button = ({ href, children, className = "" }: { href: string, children?: React.ReactNode, className?: string }) => (
  <a 
    href={href} 
    className={`orange-btn inline-block text-white font-extrabold py-4 px-8 rounded-xl shadow-lg text-center uppercase tracking-wider text-lg md:text-xl w-full md:w-auto ${className}`}
  >
    {children}
  </a>
);

const Hero = () => (
  <header className="gradient-bg pt-16 pb-24 px-4 text-white">
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-block bg-orange-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-8 animate-pulse">
        🔥 PROMOÇÃO RELÂMPAGO - OFERTA POR TEMPO LIMITADO
      </div>
      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
        WA DOMINATOR PRO
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
        O Robô de WhatsApp que Domina Grupos com Inteligência Artificial e Proteção Anti-Ban 100%
      </p>
      
      <div className="mb-10">
        <Button href="https://pay.kiwify.com.br/uY6X1mU?afid=5hcUzxRd">
          QUERO O WA DOMINATOR POR APENAS R$ 189,90!
        </Button>
        <p className="mt-4 text-blue-200 text-sm italic">
          De <span className="line-through">R$ 287,90</span> por apenas R$ 189,90 (Economia de R$ 98,00)
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto relative group">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-slate-400 ml-4 font-mono">dashboard_wa_dominator_pro.exe</span>
          </div>
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-xs mb-1">Mensagens Enviadas</p>
                <p className="text-2xl font-bold text-blue-400">12.458</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-xs mb-1">Leads Captados</p>
                <p className="text-2xl font-bold text-green-400">1.892</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-blue-500/50">
                <p className="text-slate-400 text-xs mb-1">Status</p>
                <p className="text-xl font-bold text-blue-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" /> CONTA SEGURA
                </p>
              </div>
            </div>
            <div className="h-48 md:h-64 bg-slate-800/50 rounded-lg flex items-center justify-center border border-dashed border-slate-600">
              <p className="text-slate-500 text-sm">Visualização do Monitoramento em Tempo Real...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const PainSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-slate-800">
        Você Já Passou por Isso?
      </h2>
      <div className="space-y-4 mb-12">
        {[
          "Conta do WhatsApp BANIDA sem explicação",
          "Perdeu CLIENTES e VENDAS por não responder a tempo",
          "Gasta HORAS divulgando manualmente em grupos",
          "Medo constante de tomar bloqueio permanente",
          "Dificuldade para escalar seu negócio no WhatsApp"
        ].map((pain, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
            <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-lg text-slate-700 font-medium">❌ {pain}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-slate-800 italic">
          "Se você cansa de viver nesse ciclo de medo e trabalho sem resultados... <span className="text-blue-600 underline">Sua solução chegou AGORA.</span>"
        </p>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900 leading-tight">
        Conheça o WA Dominator Pro: <br/>
        <span className="text-blue-600">Seu Assistente de Vendas 24/7 no WhatsApp</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-500">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase">Divulgação Inteligente</h3>
          <p className="text-slate-600 leading-relaxed">
            Envio em massa para grupos e contatos com personalização por nome, horários estratégicos e limites seguros.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-500">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase">Respostas com IA</h3>
          <p className="text-slate-600 leading-relaxed">
            Sistema que identifica perguntas, envia catálogos automáticos, responde dúvidas frequentes e fecha vendas sozinho.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-500">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase">Monitoramento 24/7</h3>
          <p className="text-slate-600 leading-relaxed">
            Captura automaticamente leads, oportunidades e palavras-chave em até 100 grupos simultaneamente.
          </p>
        </div>
      </div>

      <div className="bg-blue-600 p-8 md:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck className="w-48 h-48" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
            <ShieldCheck className="w-16 h-16 text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 flex items-center gap-2">
              ⚡ SISTEMA ANTI-BAN 100% COMPROVADO
            </h3>
            <p className="text-lg md:text-xl font-medium text-blue-50 leading-relaxed">
              Tecnologia patenteada que imita comportamento humano real, com criptografia de ponta a ponta e limites otimizados pela nossa IA. 
              <span className="block mt-2 font-black uppercase text-white tracking-widest">RISCO ZERO DE BANIMENTO - Garantido!</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {['Atualizações Constantes (+40 versões)', 'Compatível com Android/iPhone', 'Não precisa de root/jailbreak'].map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-full text-slate-700 text-sm font-bold">
            <CheckCircle className="w-4 h-4 text-blue-600" /> {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto border-4 border-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full font-bold">
        SELO DE QUALIDADE
      </div>
      <h2 className="text-2xl md:text-4xl font-black text-center mb-8 uppercase tracking-tighter">
        GARANTIA WA DOMINATOR PRO - RISCO ZERO
      </h2>
      <p className="text-lg md:text-xl text-slate-700 text-center mb-8 leading-relaxed">
        Se em 7 dias o robô: 1) Não funcionar como prometido, 2) Você sofrer QUALQUER tipo de banimento, 3) Não aprender a configurar facilmente... <span className="font-bold underline">Nós devolvemos 100% do seu investimento.</span> Sem burocracia, sem perguntas.
      </p>
      <div className="bg-blue-50 border-2 border-dashed border-blue-300 p-6 rounded-2xl flex items-center gap-4 flex-col md:flex-row text-center md:text-left">
        <Users className="w-12 h-12 text-blue-600 flex-shrink-0" />
        <div>
          <h4 className="font-bold text-blue-800 text-lg uppercase">+ SUPORTE VITALÍCIO VIP</h4>
          <p className="text-blue-700">Via Telegram com resposta em até 2 horas. Tire TODAS suas dúvidas com nossa equipe especializada.</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
          <Lock className="w-5 h-5 text-green-600" />
          <span className="text-sm font-bold text-slate-600 uppercase">Compra 100% Segura via Kiwify</span>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const reviews = [
    { name: "Carlos R.", business: "E-commerce", text: "De 10 para 50 vendas/dia em 3 semanas. O anti-ban é REAL!" },
    { name: "Juliana M.", business: "Imobiliária", text: "Capto 30+ leads por dia de grupos sem trabalhar. Revolucionou!" },
    { name: "Roberto L.", business: "Infoprodutor", text: "Banido 3x com outros bots. Com o Dominator, 4 meses de paz." },
    { name: "Ana Clara", business: "Consultora", text: "A IA responde tão bem que clientes acham que sou eu 24h." },
    { name: "Marcelo T.", business: "Coach", text: "Vendi R$ 15.000 em 1 mês no automático. Investimento voltou no 1° dia." },
    { name: "Fernanda S.", business: "Corretora", text: "O suporte salvou minha configuração. São rápidos e pacientes!" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900 leading-tight">
          +40 Clientes já Dominam o WhatsApp <br/>
          <span className="text-blue-600">com Segurança Total</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{rev.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{rev.name}</p>
                <p className="text-sm text-blue-600 uppercase font-semibold">{rev.business}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 font-bold px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            40+ Avaliações 5 Estrelas na Plataforma
          </div>
        </div>
      </div>
    </section>
  );
};

// Fix for error: Type '{ key: number; question: string; answer: string; }' is not assignable to type...
// Adding key as an optional prop to satisfy the JSX validator when mapping over items in standard React patterns.
const FAQItem = ({ question, answer }: { question: string, answer: string, key?: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-bold pr-8">{question}</span>
        {isOpen ? <ChevronUp className="w-6 h-6 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 leading-relaxed font-medium">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "Vou ser banido usando esse robô?", a: "NÃO! Nosso Sistema Anti-Ban 100% usa machine learning para imitar comportamento humano. Garantimos risco zero ou devolvemos seu dinheiro." },
    { q: "Preciso de celular extra ou número novo?", a: "Não! Funciona no seu número pessoal via WhatsApp Web. Mantenha seu celular normal." },
    { q: "É difícil de configurar?", a: "Em 10 minutos você está operando. Temos tutorial passo a passo + suporte para ajudar." },
    { q: "O WhatsApp atualiza e para de funcionar?", a: "Atualizamos em até 24h. Já passamos por +40 atualizações do WhatsApp sem problemas." },
    { q: "Posso usar em quantos grupos/contatos?", a: "Até 100 grupos simultâneos e contatos ilimitados, sempre dentro dos limites seguros." },
    { q: "Como funciona a garantia de 7 dias?", a: "Basta solicitar no suporte dentro de 7 dias. Devolução 100% sem questionar." },
    { q: "O link de pagamento é seguro?", a: "Totalmente! Pagamento processado pela Kiwify, plataforma líder em infoprodutos com segurança SSL." }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">
          Tire Todas as Suas Dúvidas Antes de Garantir:
        </h2>
        <div className="bg-slate-50 rounded-3xl px-8 border border-slate-200">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalOffer = () => {
  const [timeLeft, setTimeLeft] = useState(10799); // 02:59:59 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-20 px-4 gradient-bg text-white">
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-10 leading-tight">
          Resumo do Tudo que Você Vai Levar HOJE:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            "Acesso Imediato ao WA Dominator Pro",
            "Sistema Anti-Ban 100% Comprovado",
            "Garantia de 7 Dias (Risco Zero)",
            "Suporte Vitalício VIP no Telegram",
            "+40 Atualizações Gratuitas Vitalícias",
            "Bônus: Templates de Mensagens Prontas"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="font-bold text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-8 text-center text-white mb-10 shadow-lg ring-4 ring-blue-500 ring-offset-4">
          <p className="text-lg opacity-80 mb-2">Valor Original: <span className="line-through">R$ 287,90</span></p>
          <p className="text-4xl md:text-6xl font-black mb-2 uppercase tracking-tight">R$ 189,90</p>
          <p className="text-xl font-bold mb-4">ou 12x de R$ 18,82</p>
          <div className="inline-block bg-white/20 px-4 py-1 rounded-full font-black text-sm uppercase">
            ECONOMIA IMEDIATA DE R$ 98,00
          </div>
        </div>

        <div className="text-center mb-8">
          <Button href="https://pay.kiwify.com.br/uY6X1mU?afid=5hcUzxRd" className="w-full py-6">
            SIM! QUERO DOMINAR O WHATSAPP AGORA POR R$ 189,90!
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-slate-500 font-bold bg-slate-100 px-6 py-2 rounded-full border border-slate-200">
            <Clock className="w-5 h-5 text-red-500 animate-pulse" />
            Oferta expira em: <span className="text-red-500 font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {['Pagamento 100% Seguro', 'Garantia de 7 Dias', 'Acesso Imediato', 'Suporte 24/7'].map((label, i) => (
              <div key={i} className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase">
                <CheckCircle className="w-3 h-3 text-green-500" /> {label}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500 italic text-center max-w-lg">
            "Vagas limitadas por conta da capacidade do suporte. Garanta sua vaga antes que o preço volte para R$ 287,90!"
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4 bg-slate-900 text-slate-400 text-center border-t border-slate-800">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-bold uppercase tracking-widest text-slate-200">
        <a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Contato (Suporte)</a>
      </div>
      <p className="text-xs leading-relaxed mb-6 opacity-60">
        Este produto não é afiliado, endossado ou patrocinado pelo WhatsApp Inc. ou Meta Platforms Inc. WhatsApp é uma marca registrada da Meta Platforms, Inc.
      </p>
      <p className="text-xs font-bold uppercase tracking-wider">
        © 2024 WA Dominator Pro. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-bounce-in bg-white/80 backdrop-blur-lg border-t border-slate-200 md:hidden">
      <Button href="https://pay.kiwify.com.br/uY6X1mU?afid=5hcUzxRd" className="w-full py-4 text-base">
        QUERO O WA DOMINATOR AGORA!
      </Button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainSection />
      <SolutionSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalOffer />
      <Footer />
      <FloatingCTA />
      
      {/* Hidden SEO/Alt stuff could go here if needed, but keeping it clean */}
      <style>{`
        @keyframes bounce-in {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </main>
  );
}
