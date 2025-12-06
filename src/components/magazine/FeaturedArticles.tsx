import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Liderança",
    title: "Os 10 Princípios da Liderança Moderna em África",
    excerpt: "Descubra como os líderes africanos estão a redefinir o conceito de gestão empresarial no século XXI.",
    author: "Maria Santos",
    date: "5 Dez 2024",
    featured: true,
  },
  {
    id: 2,
    category: "Tecnologia",
    title: "Fintech Angolana Atrai Investimento Recorde",
    excerpt: "A transformação digital do sector financeiro acelera com novas soluções de pagamento.",
    author: "João Fernandes",
    date: "4 Dez 2024",
    featured: false,
  },
  {
    id: 3,
    category: "Empreendedorismo",
    title: "De Luanda para o Mundo: Startups que Exportam Inovação",
    excerpt: "Histórias de sucesso de empresas angolanas que conquistaram mercados internacionais.",
    author: "Ana Nascimento",
    date: "3 Dez 2024",
    featured: false,
  },
  {
    id: 4,
    category: "Gestão",
    title: "Sustentabilidade Empresarial: O Novo Imperativo",
    excerpt: "Como as empresas angolanas estão a integrar práticas ESG nas suas estratégias de crescimento.",
    author: "Pedro Almeida",
    date: "2 Dez 2024",
    featured: false,
  },
];

export const FeaturedArticles = () => {
  const mainArticle = articles[0];
  const sideArticles = articles.slice(1);

  return (
    <section id="negocios" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="category-tag">Destaque</span>
            <h2 className="section-title mt-2">Artigos em Destaque</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span className="font-sans text-sm uppercase tracking-wider">Ver Todos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <article className="group cursor-pointer h-full">
              <div className="relative overflow-hidden rounded-lg bg-muted aspect-[16/9] lg:aspect-[16/10]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-serif text-primary/10 font-bold select-none">
                    L
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                  <span className="category-tag">{mainArticle.category}</span>
                  <h3 className="article-title text-2xl lg:text-3xl mt-3 text-foreground group-hover:text-primary">
                    {mainArticle.title}
                  </h3>
                  <p className="body-text mt-3 line-clamp-2 lg:line-clamp-3">
                    {mainArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-sm text-foreground">{mainArticle.author}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{mainArticle.date}</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer p-6 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_74%_49%/0.1)]"
              >
                <span className="category-tag">{article.category}</span>
                <h3 className="article-title text-lg mt-2">{article.title}</h3>
                <p className="body-text text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-xs text-foreground">{article.author}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile View All Link */}
        <a
          href="#"
          className="flex md:hidden items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors mt-8"
        >
          <span className="font-sans text-sm uppercase tracking-wider">Ver Todos os Artigos</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
