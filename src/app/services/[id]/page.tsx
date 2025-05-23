import { services } from '@/components/Service/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map(service => ({
    id: service.id
  }));
}

export default async function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <section className="pt-[150px] pb-[120px] bg-gradient-to-b from-purple-900/20 to-violet-900/10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
          <p className="text-lg text-violet-100 max-w-3xl mx-auto">{service.description}</p>
        </div>

        <div className="mb-16">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-white mb-10 text-center">
            Our {service.title} Services
          </h3>

          <div className="grid gap-10 md:grid-cols-2">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start bg-violet-900/30 rounded-lg border border-violet-700/30 p-6 hover:shadow-xl hover:scale-[1.01] transition-transform"
              >
                <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                  <div className="relative w-full h-48 md:h-full rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-white text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-violet-200 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-violet-700/30">
          <h4 className="text-white text-2xl font-semibold mb-4">
            Why Choose Our {service.title} Services?
          </h4>
          <p className="text-violet-200 mb-6 max-w-3xl">
            Our team of experts combines cutting-edge technology with industry knowledge to deliver solutions that drive real business results. We take a collaborative approach, working closely with you to understand your unique challenges and goals.
          </p>

          <div className="bg-violet-900/30 rounded-lg p-6 border border-violet-700/20">
            <h5 className="text-white text-lg font-medium mb-3">Ready to transform your business?</h5>
            <p className="text-violet-200 mb-4">
              Contact us today to discuss how our {service.title} services can help you achieve your goals.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
