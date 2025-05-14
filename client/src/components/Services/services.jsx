import { services, iconMap } from "../Data/servicesData";

const ServicesSection = () => {
  return (
    <section className="bg-white flex flex-col items-center px-4">
      <span className="text-xs tracking-wider text-gray-400 font-semibold uppercase mb-2">
        Category
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
        We Offer Best Services
      </h2>
      {/* Container with horizontal scroll on mobile */}
      <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex flex-row gap-4 md:gap-8 md:justify-center md:max-w-4xl md:mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-md px-7 py-8 flex-shrink-0 flex flex-col items-center gap-4 transition hover:scale-105 hover:shadow-lg duration-200 w-[280px] md:w-auto md:flex-1"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                {iconMap[service.icon] || (
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 text-center">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm text-center max-w-xs">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
