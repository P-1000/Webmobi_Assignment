import React from 'react';

const Hiring = () => {
  const hiringData = [
    {
      title: ' Hiring',
      description: 'Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals.'
    },
    {
      title: 'Human Resources Management',
      description: 'We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup.'
    },
    {
      title: 'Taxation',
      description: 'Our team navigates through the complexities of the tax system, ensuring compliance while optimizing financial efficiency.'
    },
    {
      title: 'Regulatory Guidance',
      description: "We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup's operations stay within legal boundaries."
    }
  ];

  return (
    <div className="bg-gray-200 py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:xl font-bold text-center mb-10 text-blue-600 ">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hiringData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg hover:shadow-lg hover:text-blue-500 hover:px-8  transition-all p-6 border-[1px] border-black">
              <h3 className="text-xl font-semibold text-center mb-4">{item.title}</h3>
              <p className="text-gray-700 ml-4 pl-2 font-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Hiring;
