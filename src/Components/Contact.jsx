function Contact() {
  return (
    <div className="relative h-75 md:h-87.5 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a2f]/70  pt-30 px-40 max-md:px-10">
          <h1 className="text-white text-[3rem] ">Contact Us</h1>
          <p className="text-white font-semibold text-[1rem] max-md:text-[0.8rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            facilis tenetur iste, facere quasi reprehenderit fugit praesentium,
            voluptate perferendis a quas excepturi possimus, in voluptas dolorum
            magnam ratione ducimus ipsam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
