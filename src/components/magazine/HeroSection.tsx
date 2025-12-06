import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import leaderPortrait from "@/assets/leader-portrait.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(43 74% 49%) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        {/* Gold accent lines */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-glow" />
                <span className="category-tag">Edição Dezembro 2024</span>
              </div>

              <h1 className="magazine-title leading-tight">
                Líderes
                <br />
                <span className="text-foreground">Angola</span>
              </h1>

              <p className="body-text text-lg max-w-xl mx-auto lg:mx-0">
                A revista de referência para executivos, empreendedores e jovens líderes.
                Histórias inspiradoras, estratégias de sucesso e visões do futuro de Angola.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="premium" size="xl">
                  Ler Agora
                  <ChevronRight className="w-5 h-5" />
                </Button>
                <Button variant="elegant" size="xl">
                  Edições Anteriores
                </Button>
              </div>
            </div>

            {/* Cover Headlines */}
            <div
              className="mt-12 grid grid-cols-2 gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { title: "O Futuro da Banca Angolana", category: "Finanças" },
                { title: "Startups que Transformam", category: "Tecnologia" },
                { title: "Liderança Feminina em Alta", category: "Gestão" },
                { title: "Investir em 2025", category: "Mercados" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-left p-4 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="category-tag text-xs">{item.category}</span>
                  <p className="text-sm text-foreground mt-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cover Image */}
          <div
            className="order-1 lg:order-2 relative opacity-0 animate-fade-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-lg" />
              <div className="absolute -inset-8 border border-primary/10 rounded-lg hidden lg:block" />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-lg shadow-[0_25px_80px_-20px_hsl(43_74%_49%/0.3)]">
                <img
                  src={leaderPortrait}
                  alt="Líder Empresarial Angolano"
                  className="w-full aspect-[3/4] object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Featured person info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="category-tag">Capa</span>
                  <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mt-2">
                    A Visão de um Líder
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Estratégias para o crescimento económico sustentável
                  </p>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
