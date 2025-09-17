
export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#6a88a3] to-[#9bb4c2]">

    {/* animasi awan */}
      <div className="relative w-full h-full overflow-hidden ">
        <div
          className="absolute top-0 right-0 w-[780rem] h-full z-0 animate-cloudLoop"
          style={{
            backgroundImage: "url('/image/cloud.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "50% auto",
          }}
        />
      </div>

    {/* tutup animasi awan */}
    
      {/* <div className="border w-full min-h-full">
        <Image className="w-full h-full object-cover" src={"/image/masjid-agung-demak.jpeg"} height={800} width={800} alt="Icon Demak"/>
      </div> */}
    </div>
  );
}
