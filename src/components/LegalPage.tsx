import BreadCrumb from '@/components/BreadCrumb';
import { Container } from '@/components/ui/Container';
import AnimatedSection from '@/components/ui/AnimatedSection';

export type LegalContentType = 'paragraph' | 'list';

export type LegalContent = {
  title?: string;
  type: LegalContentType;
  paragraph?: string;
  list?: string[];
};

type LegalPageProps = {
  title: string;
  content: LegalContent[];
};

const LegalPage = ({ title, content }: LegalPageProps) => {
  return (
    <>
      <BreadCrumb sub_title={title} title={title} />
      <section className="bg-black py-16 sm:py-20">
        <Container variant="xl">
          <div className="space-y-8">
            {content.map((item, index) => (
              <AnimatedSection 
                key={`${item.title ?? 'section'}-${index}`}
                direction="up"
                delay={index * 0.1}
              >
                {item.title && (
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                )}
                {item.type === 'paragraph' && (
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/60 sm:text-base">
                    {item.paragraph}
                  </p>
                )}
                {item.type === 'list' && (
                  <ul className="mt-3 space-y-2">
                    {item.list?.map((listItem, idx) => (
                      <li
                        key={`${listItem}-${idx}`}
                        className="flex gap-2.5 text-sm leading-relaxed text-white/60 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#fbce6b]" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default LegalPage;
