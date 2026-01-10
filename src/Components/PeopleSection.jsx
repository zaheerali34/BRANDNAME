import React from 'react';
import Datas from '../Data/Datas.json';

const PeopleSection = () => {
 

  return (
    <section className="bg-[#162136] py-24 px-10 md:px-20 font-serif">
      <div className="max-w-7xl mx-auto">
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Datas.additionalTeam.map((member, index) => (
            <div key={index} className="bg-[#1c2a44] flex flex-col shadow-2xl overflow-hidden border border-white/5">
              
              {/* Member Image */}
              <div className="h-80 w-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Details */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-white text-3xl font-normal mb-1 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-[#7fb5f5] text-[11px] font-sans tracking-[0.2em] font-bold mb-6">
                  {member.role}
                </p>
                
                <div className="w-16 h-[1px] bg-white/30 mb-6"></div>

                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-10 opacity-80 line-clamp-4">
                  {member.bio}
                </p>

                {/* Full Bio Button */}
                <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/10 group cursor-pointer">
                  <span className="text-[10px] tracking-[0.3em] text-gray-400 font-sans font-bold group-hover:text-white transition-colors">
                    FULL BIO
                  </span>
                  <div className="h-5 w-5 rounded-full border border-gray-500 flex items-center justify-center group-hover:bg-[#7fb5f5] group-hover:border-[#7fb5f5] transition-all">
                    <span className="text-white text-xs">+</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PeopleSection;