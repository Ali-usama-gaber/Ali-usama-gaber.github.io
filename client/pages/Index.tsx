import { useState } from "react";

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-dark shadow-[0_0_15px_0_rgba(0,0,0,0.30)]">
        <nav className="container mx-auto px-6 lg:px-[120px] py-5 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8311ee5a720b07441165400ce82f961d965063c0?width=293"
              alt="Logo"
              className="h-[50px] w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-gold font-bold text-base hover:opacity-80 transition-opacity">Home</a>
            <a href="#about" className="text-gold/60 font-bold text-base hover:text-gold transition-colors">About</a>
            <a href="#services" className="text-gold/60 font-bold text-base hover:text-gold transition-colors">Services</a>
            <a href="#portfolio" className="text-gold/60 font-bold text-base hover:text-gold transition-colors">Portfolio</a>
            <a href="#contact" className="text-gold/60 font-bold text-base hover:text-gold transition-colors">Contact</a>
          </div>

          <button className="hidden md:block px-12 py-4 border border-gold rounded-[20px] text-gold font-bold text-base hover:bg-gold hover:text-dark transition-all">
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark border-t border-gold/20">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gold font-bold text-base py-2">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gold/60 font-bold text-base py-2">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gold/60 font-bold text-base py-2">Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-gold/60 font-bold text-base py-2">Portfolio</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gold/60 font-bold text-base py-2">Contact</a>
              <button className="px-12 py-4 border border-gold rounded-[20px] text-gold font-bold text-base w-full">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-[120px] py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[40px] leading-[160%] font-semibold text-white/86 capitalize">
                hi, i'm
              </h2>
              <h1 className="text-[48px] leading-[160%] font-semibold text-gold capitalize">
                ali usama
              </h1>
              <h3 className="text-[56px] leading-[160%] font-bold text-white/86 capitalize">
                UI/UX, Product Designer,<br />2D graphic design
              </h3>
              <p className="text-[24px] leading-[180%] text-white/75 capitalize max-w-[673px]">
                As a UI/UX designer, I prioritize users and business objectives in my work. My goal is to create delightful and meaningful digital products and experiences by focusing on user needs.
              </p>
              <button className="px-12 py-4 bg-gold rounded-[20px] text-dark font-bold text-base hover:opacity-90 transition-opacity">
                Hire Me
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/f610db17c8cee43aa3ea04c511602157a4f3b16b?width=1314" 
                alt="Work Illustration" 
                className="w-full max-w-[657px] mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative wavy line */}
        <svg className="absolute top-[200px] left-0 w-full h-auto opacity-50" viewBox="0 0 1440 405" fill="none">
          <path d="M0 181.122C148.132 12.7367 196.28 266.872 315.913 230.987C427.012 197.663 551.788 -52.254 666.572 12.7367C1008.76 206.485 762.827 301.778 666.572 268.484C552.878 229.159 479.576 -25.3084 838.304 12.7367C937.32 23.2379 960.717 254.642 1042.97 301.778C1199.11 391.258 1181.78 111.756 1440 403.052" stroke="#FFD700" strokeWidth="3" strokeDasharray="12 12"/>
        </svg>
      </section>

      {/* About Me Section */}
      <section id="about" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-[120px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[56px] leading-[160%] font-medium capitalize">
                <span className="text-white/86">About me</span>
                <span className="text-gold">.</span>
              </h2>
              <p className="text-[24px] leading-[180%] text-white/75 capitalize max-w-[701px]">
                As a UI/UX designer, I am passionate about creating exceptional user experiences. I pay close attention to detail and have a strong design sensibility. By understanding user needs and conducting thorough research, I ensure that my designs align with both user expectations and business goals.
              </p>
              <div className="flex gap-6 pt-6">
                <button className="px-12 py-4 bg-gold rounded-[20px] text-dark font-bold text-base hover:opacity-90 transition-opacity">
                  Hire Me
                </button>
                <button className="px-12 py-4 border border-gold rounded-[20px] text-gold font-bold text-base flex items-center gap-3 hover:bg-gold hover:text-dark transition-all">
                  Download CV
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/49a70a280c10f540b67e039bba4650a71f9c23b7?width=1356" 
                alt="Work in Beanbag" 
                className="w-full max-w-[678px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-[120px]">
          <h2 className="text-[56px] leading-[160%] font-medium text-center capitalize mb-16">
            <span className="text-white/86">services</span>
            <span className="text-gold">.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* UI/UX Design */}
            <div className="relative group">
              <div className="border-[3px] border-white/80 rounded-[14.1px] p-8 h-[280px] flex flex-col items-center justify-center hover:border-gold transition-colors">
                <div className="absolute top-0 left-0 w-[141px] h-[141px] border-t-[6px] border-l-[6px] border-gold rounded-tl-[14.1px]" />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6a447d6ad9c5d2a9b3ba4161345cefd4cf96bb75?width=564" 
                  alt="UI/UX Design" 
                  className="w-[170px] h-[178px] mb-4"
                />
              </div>
              <h3 className="text-[32px] font-bold text-white/86 text-center mt-6 capitalize">
                UI/UX Design
              </h3>
            </div>

            {/* Website Design */}
            <div className="relative group">
              <div className="border-[3px] border-white/80 rounded-[14.1px] p-8 h-[280px] flex flex-col items-center justify-center hover:border-gold transition-colors">
                <div className="absolute top-0 left-0 w-[141px] h-[141px] border-t-[6px] border-l-[6px] border-gold rounded-tl-[14.1px]" />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bcb3f70fb6239147455e81b7cfc4e843d53588c8?width=340" 
                  alt="Website Design" 
                  className="w-[170px] h-[178px] mb-4"
                />
              </div>
              <h3 className="text-[32px] font-medium text-white/86 text-center mt-6 capitalize">
                Website Design
              </h3>
            </div>

            {/* Graphic Design */}
            <div className="relative group">
              <div className="border-[3px] border-white/80 rounded-[14.1px] p-8 h-[280px] flex flex-col items-center justify-center hover:border-gold transition-colors">
                <div className="absolute top-0 left-0 w-[141px] h-[141px] border-t-[6px] border-l-[6px] border-gold rounded-tl-[14.1px]" />
                <svg className="w-[170px] h-[178px] mb-4" viewBox="0 0 170 178" fill="none">
                  <path d="M157.461 149.397H12.5391C5.62483 149.397 0 143.854 0 137.04V126.229C0 125.244 0.809851 124.447 1.80851 124.447H168.191C169.191 124.447 170 125.244 170 126.229V137.04C170 143.854 164.375 149.397 157.461 149.397Z" fill="white" fillOpacity="0.8"/>
                  <path d="M115.434 0.5C119.169 0.500117 122.675 1.9324 125.313 4.53223C127.952 7.1319 129.402 10.5847 129.402 14.2578C129.402 17.9311 127.952 21.3834 125.313 23.9834L83.113 65.5693L82.5632 65.8916L56.9871 73.4531C56.3078 73.5078 55.7781 73.2168 55.3552 71.8594L63.0281 46.6562L105.554 4.53223C108.193 1.93229 111.701 0.5 115.434 0.5Z" fill="#FFD700" stroke="#FFD700"/>
                </svg>
              </div>
              <h3 className="text-[32px] font-bold text-white/86 text-center mt-6 capitalize">
                Graphic Design
              </h3>
            </div>

            {/* App Design */}
            <div className="relative group">
              <div className="border-[3px] border-white/80 rounded-[14.1px] p-8 h-[280px] flex flex-col items-center justify-center hover:border-gold transition-colors">
                <div className="absolute top-0 left-0 w-[141px] h-[141px] border-t-[6px] border-l-[6px] border-gold rounded-tl-[14.1px]" />
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cf31c28eb32339cc4b9ab3e37bc90d225160c2fe?width=342" 
                  alt="App Design" 
                  className="w-[171px] h-[171px] mb-4"
                />
              </div>
              <h3 className="text-[32px] font-bold text-white/86 text-center mt-6 capitalize">
                app design
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-[120px]">
          <h2 className="text-[56px] leading-[160%] font-medium text-center capitalize mb-16">
            <span className="text-white/86">my skill</span>
            <span className="text-gold">.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Figma */}
            <div className="w-[180px] h-[180px] rounded-[39.727px] bg-[#14272C] shadow-[-3.516px_7.031px_24.609px_0_#171B21,-3.516px_3.516px_7.031px_0_rgba(0,18,22,0.90)_inset,7.031px_-7.031px_10.547px_0_rgba(1,17,21,0.70)_inset] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-[37.793px] bg-white" />
              <svg className="relative w-[134px] h-[134px]" viewBox="0 0 135 135" fill="none">
                <rect x="0.225807" y="0.22583" width="134.194" height="134.194" rx="67.0968" fill="white"/>
                <path d="M85.2151 87.899C95.0968 87.899 103.108 79.8882 103.108 70.0065C103.108 60.1247 95.0968 52.114 85.2151 52.114C75.3333 52.114 67.3226 60.1247 67.3226 70.0065C67.3226 79.8882 75.3333 87.899 85.2151 87.899Z" fill="#19BCFE"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.4301 123.684C62.0601 123.684 72.3226 113.421 72.3226 100.791V87.8989H49.4301C36.8001 87.8989 26.5376 98.1614 26.5376 110.791C26.5376 123.421 36.8001 123.684 49.4301 123.684Z" fill="#09CF83"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.4301 87.899H67.3226V52.114H49.4301C36.8001 52.114 26.5376 62.3765 26.5376 75.0065C26.5376 87.6365 36.8001 87.899 49.4301 87.899Z" fill="#A259FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.4301 52.1141H67.3226V16.3291H49.4301C36.8001 16.3291 26.5376 26.5916 26.5376 39.2216C26.5376 51.8516 36.8001 52.1141 49.4301 52.1141Z" fill="#F24E1E"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M85.2151 52.1141H67.3226V16.3291H85.2151C97.8451 16.3291 108.108 26.5916 108.108 39.2216C108.108 51.8516 97.8451 52.1141 85.2151 52.1141Z" fill="#FF7262"/>
              </svg>
            </div>

            {/* Adobe XD */}
            <div className="w-[180px] h-[180px] rounded-[39.727px] bg-[#14272C] shadow-[-3.516px_7.031px_24.609px_0_#171B21,-3.516px_3.516px_7.031px_0_rgba(0,18,22,0.90)_inset,7.031px_-7.031px_10.547px_0_rgba(1,17,21,0.70)_inset] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-[37.793px] bg-[#470137]" />
              <div className="relative w-[112px] h-[112px] rounded-full bg-white flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30.24 10.697L15.848 34.444L31.1996 59.6301L30 60L5 35L30.24 10.697Z" fill="#FF61F6"/>
                  <path d="M52.4039 51.3092C48.8539 51.3572 45.3039 50.6376 42.0896 49.1504L39.8456 42.1297L52.6107 42.3473C55.8614 42.3473 59.0893 41.3473 60.6055 39.3638C60.6055 36.6881 59.6055 34.0389 58.0893 31.8696C56.1748 30.8696 54.0939 30.3696 52.0107 30.3473L30 30.3473V10L52.4039 10C55.3039 10 58.0893 11 60.1093 13C62.0893 15 63.0893 17.5 63.0893 20C63.0893 22.5 62.0893 25 60.1093 27C58.0893 29 55.3039 30 52.4039 30V31C55.3039 31 58.0893 32 60.1093 34C62.0893 36 63.0893 38.5 63.0893 41C63.0893 43.5 62.0893 46 60.1093 48C58.0893 50 55.3039 51 52.4039 51V51.3092Z" fill="#FF61F6"/>
                </svg>
              </div>
            </div>

            {/* Adobe Illustrator */}
            <div className="w-[180px] h-[180px] rounded-[39.727px] bg-[#14272C] shadow-[-3.516px_7.031px_24.609px_0_#171B21,-3.516px_3.516px_7.031px_0_rgba(0,18,22,0.90)_inset,7.031px_-7.031px_10.547px_0_rgba(1,17,21,0.70)_inset] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-[37.793px] bg-[#330000]" />
              <div className="relative w-[112px] h-[112px] rounded-full bg-[#330000] flex items-center justify-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M38.843 49.356H20.997L17.3508 60.63H7.4202L27.34 15.9667L47.051 60.534H37.571L38.843 49.356ZM23.779 39.618H35.964L29.5 20L23.779 39.618Z" fill="#FF9A00"/>
                  <path d="M54.748 19.1329C53.165 19.1809 51.63 18.5572 50.479 17.4538C49.375 16.2545 48.8 14.6714 48.848 13.0403C48.8 11.4092 49.423 9.874 50.575 8.7706C51.726 7.6672 53.261 7.0916 54.844 7.0916C56.715 7.0916 58.154 7.6672 59.21 8.7706C60.265 9.922 60.841 11.4571 60.793 13.0403C60.841 14.6714 60.265 16.2545 59.114 17.4538C58.011 18.6052 56.379 19.2289 54.748 19.1329ZM49.375 60.774V23.8343H59.498V60.774H49.375Z" fill="#FF9A00"/>
                </svg>
              </div>
            </div>

            {/* Adobe Photoshop */}
            <div className="w-[180px] h-[180px] rounded-[39.727px] bg-[#14272C] shadow-[-3.516px_7.031px_24.609px_0_#171B21,-3.516px_3.516px_7.031px_0_rgba(0,18,22,0.90)_inset,7.031px_-7.031px_10.547px_0_rgba(1,17,21,0.70)_inset] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-[37.793px] bg-[#001E36]" />
              <div className="relative w-[128px] h-[128px] rounded-full bg-[#001E36] flex items-center justify-center">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path d="M9.9595 60.7202V3.0485H20.5059C25.5059 3.0485 29.6427 3.6562 32.7028 4.8331C35.4351 5.7859 37.9488 7.3552 40.0253 9.4289C41.7739 11.2224 43.1401 13.4082 44.0144 15.8182C44.8341 18.1722 45.2712 20.5822 45.2712 23.1042C45.2712 27.9242 44.1783 31.9035 41.9925 35.0421C39.8067 38.1807 36.7466 40.5347 33.1946 41.8798C29.4788 43.2809 25.3804 43.7853 20.8995 43.7853H14.1672V60.6641H9.9595V60.7202ZM14.1721 13.2489V33.0805H20.5059C23.0306 33.0805 25.1618 32.8563 27.1837 32.1838C28.9323 31.6793 30.4624 30.6145 31.6646 29.2133C32.8121 27.8121 33.3586 25.9066 33.3586 23.4405C33.4132 21.7031 32.9761 19.9657 32.1017 18.4524C31.1728 16.9952 29.8613 15.8743 28.2766 15.2578C26.2547 14.4171 24.0689 14.0808 21.8284 14.1368C20.4077 14.1368 19.1508 14.1368 18.1126 14.1929L14.1721 13.2489Z" fill="#31A8FF"/>
                  <path d="M75.37 28.6618C73.73 27.7651 71.982 27.1486 70.124 26.7563C68.1017 26.3079 66.0799 26.0276 64.0033 26.0276C62.9104 25.9716 61.7629 26.1397 60.7246 26.42C60.0142 26.5881 59.4131 26.9804 59.0306 27.5409C58.7574 27.9893 58.5935 28.5497 58.5935 29.0542C58.5935 29.5586 58.812 30.063 59.1399 30.5114C59.6317 31.1279 60.2875 31.6323 60.9979 32.0246C62.2547 32.6972 63.5662 33.3137 64.8777 33.8741C67.8285 34.883 70.67 36.2841 73.293 37.9655C75.096 39.1425 76.572 40.7118 77.61 42.6174C78.484 44.4108 78.921 46.3725 78.867 48.3901C78.921 51.0243 78.156 53.6585 76.736 55.8443C75.206 58.0861 73.074 59.8236 70.615 60.8324C67.9378 62.0094 64.6591 62.6259 60.7246 62.6259C58.2109 62.6259 55.7519 62.4017 53.2929 61.8973C51.3803 61.561 49.4677 60.9445 47.7191 60.1038L49.4458 50.2869C51.9595 51.1276 54.2 52.0243 56.6044 52.5848C58.6809 53.1452 60.8667 53.4255 63.0525 53.4255C65.129 53.4255 66.6044 53.1452 67.5881 52.6408C68.4624 52.2485 69.0635 51.2957 69.0635 50.2869C69.0635 49.5022 68.6263 48.7736 67.752 48.045C66.8777 47.3164 65.0744 46.4757 62.3968 45.4108C59.6099 44.402 57.0415 43.0569 54.6371 41.3755C52.9431 40.1425 51.5224 38.5172 50.4841 36.6116C49.6098 34.8181 49.1726 32.8565 49.2273 30.8948C49.2273 28.4849 49.883 26.187 51.0852 24.1132C52.4513 21.8714 54.4732 20.0779 56.8229 18.957C59.3913 17.6119 62.6153 16.9954 66.4951 16.9954C68.7356 16.9954 71.0307 17.1635 73.271 17.4998C74.91 17.724 76.495 18.1723 77.971 18.7888L75.37 28.6618Z" fill="#31A8FF"/>
                </svg>
              </div>
            </div>

            {/* Notion */}
            <div className="w-[180px] h-[180px] rounded-[39.727px] bg-[#14272C] shadow-[-3.516px_7.031px_24.609px_0_#171B21,-3.516px_3.516px_7.031px_0_rgba(0,18,22,0.90)_inset,7.031px_-7.031px_10.547px_0_rgba(1,17,21,0.70)_inset] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-[37.793px] bg-white" />
              <svg className="relative w-[133px] h-[133px]" viewBox="0 0 134 134" fill="none">
                <rect x="0.870972" y="0.87085" width="132.903" height="132.903" rx="64.5161" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M39.6248 38.7894L48.5433 40.5034L97.0786 37.5891L88.848 30.5642C87.3035 29.3651 85.2458 27.9919 81.3019 28.3354L34.3051 31.7632C32.5911 31.9331 32.2488 32.7901 32.9314 33.477L39.6248 38.7894ZM42.5388 50.1006V101.168C42.5388 103.913 43.9103 104.939 46.9971 104.77L100.337 101.683C103.426 101.513 103.77 99.6257 103.77 97.3962V46.6712C103.77 44.4453 102.914 43.245 101.023 43.4163L45.2819 46.6712C43.2248 46.8441 42.5388 47.8731 42.5388 50.1006ZM95.1962 52.8399L93.6494 56.0999L91.0795 56.6119V94.3133C88.848 95.5126 86.7903 96.1983 85.0757 96.1983C82.3304 96.1983 81.6428 95.3407 79.5866 92.7717L62.7755 66.3805V91.9147L68.0952 93.115V96.1983L51.9716 96.8846L51.6279 96.1983L53.1717 94.143L56.2593 93.2872V59.5261L51.9724 59.1826L52.4849 55.4126L54.8878 55.2399L67.5805 54.3843L85.0757 81.1191V57.4688L80.615 56.9568L81.6428 53.5291L95.1962 52.8399ZM30.3592 27.1364L79.2434 23.5365C85.2465 23.0216 86.791 23.3665 90.5641 26.1073L106.169 37.0749C108.743 38.9609 109.602 39.4744 109.602 41.5303V101.683C109.602 105.453 108.228 107.683 103.427 108.024L46.6574 111.452C43.0531 111.624 41.3377 111.11 39.4502 108.709L27.9588 93.8C25.8999 91.0554 25.0436 89.0023 25.0436 86.6002V33.1323C25.0436 30.0494 26.4174 27.4777 30.3592 27.1364Z" fill="black"/>
              </svg>
            </div>

            {/* Miro */}
            <div className="w-[180px] h-[180px] rounded-[39.727px] bg-[#14272C] shadow-[-3.516px_7.031px_24.609px_0_#171B21,-3.516px_3.516px_7.031px_0_rgba(0,18,22,0.90)_inset,7.031px_-7.031px_10.547px_0_rgba(1,17,21,0.70)_inset] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 rounded-[37.793px] bg-[#FECF2F]" />
              <div className="relative w-[125px] h-[125px] rounded-full bg-[#FFD02F] flex items-center justify-center">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path d="M48.8382 0H38.5144L47.6797 14.3722L28.3038 0H17.9799L27.1452 18.8316L7.7669 0H-2.557L6.4572 24.313L-2.557 71.759H7.7669L27.1452 20.8855L17.9799 71.759H28.3038L47.6797 16.426L38.5144 71.759H48.8382L68.3677 10.9779L48.8382 0Z" fill="#050038"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Works Section */}
      <section id="portfolio" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-[120px]">
          <h2 className="text-[56px] leading-[160%] font-medium text-center capitalize mb-16">
            <span className="text-white/86">My works</span>
            <span className="text-gold">.</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["All", "UI", "UX", "Web Design"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2.5 rounded-[24px] text-lg font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-gold text-dark shadow-[0_4px_4px_rgba(0,0,0,0.50)]"
                    : "bg-[#626262]/60 text-white/80 backdrop-blur-sm hover:bg-[#626262]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-[#626262]/60 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9f5ecdba949abb9708c0678dfd2fa81a9571c626?width=634" 
                  alt="Dashboard Design" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-[32px] font-medium text-gold text-center capitalize">
                dashboard design
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-[#626262]/60 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/98e9004a9d8ba946a11837c29b60490e9ea30b98?width=664" 
                  alt="Mobile App Design" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-[32px] font-medium text-gold text-center capitalize">
                mobile app design
              </h3>
            </div>

            <div className="space-y-4">
              <div className="bg-[#626262]/60 rounded-2xl p-8 backdrop-blur-sm">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bc9e9443cb245b8eea4e05107f180f54754d47d0?width=634" 
                  alt="Website Design" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <h3 className="text-[32px] font-medium text-gold text-center capitalize">
                website design
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-gold py-20 lg:py-32 mt-20">
        <div className="container mx-auto px-6 lg:px-[120px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[56px] leading-[160%] font-bold text-dark capitalize mb-12">
                Got a project in<br />mind?
              </h2>
              <div className="relative">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f3dd97f9ad54fc4e3d01e44933d5a91dc7b5a8de?width=293" 
                  alt="Workspace Illustration" 
                  className="w-full max-w-[485px]"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[#626262] font-bold text-lg mb-2">
                  Your name
                </label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-6 py-4 bg-[#626262] rounded-2xl text-white/80 font-bold text-lg placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-dark"
                />
              </div>

              <div>
                <label className="block text-[#626262] font-bold text-lg mb-2">
                  Your email
                </label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-6 py-4 bg-[#626262] rounded-2xl text-white/80 font-bold text-lg placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-dark"
                />
              </div>

              <div>
                <label className="block text-[#626262] font-bold text-lg mb-2">
                  Your Message
                </label>
                <textarea 
                  placeholder="Message" 
                  rows={6}
                  className="w-full px-6 py-4 bg-[#626262] rounded-2xl text-white/80 font-bold text-lg placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-dark resize-none"
                />
              </div>

              <button className="px-8 py-2.5 bg-dark rounded-[24px] text-gold font-bold text-lg flex items-center gap-3 shadow-[0_4px_4px_rgba(0,0,0,0.50)] hover:opacity-90 transition-opacity">
                Send Message
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M25 2L14 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25 2L18 22L14 13L5 9L25 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-gold/20">
        <div className="container mx-auto px-6 lg:px-[120px]">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8">
            <a href="#home" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-normal">Home</span>
            </a>

            <a href="#about" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-normal">About me</span>
            </a>

            <a href="#contact" className="flex items-center gap-3 text-white hover:text-gold transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22 20.49 21.56 20.99 20.99 21C17.5 21.38 14.2 20.3 11.5 18.5C9.04 16.84 7.07 14.6 5.5 12C3.7 9.3 2.62 6 3 2.51C3.01 1.94 3.51 1.5 4.08 1.5H7.08C7.64 1.5 8.11 1.94 8.18 2.5C8.32 3.61 8.62 4.68 9.07 5.69C9.23 6.06 9.12 6.5 8.82 6.78L7.09 8.51C8.51 11.06 10.44 12.99 12.99 14.41L14.72 12.68C15 12.38 15.44 12.27 15.81 12.43C16.82 12.88 17.89 13.18 19 13.32C19.56 13.39 20 13.86 20 14.42V17.42C20 17.99 19.56 18.49 18.99 18.5L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-normal">Contact</span>
            </a>
          </div>

          <div className="border-t border-gold pt-8 pb-8">
            <div className="flex justify-center gap-8">
              {/* WhatsApp */}
              <a href="#" className="text-gold hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.9651 19.174C22.5721 18.9775 20.6455 18.0307 20.2868 17.8988C19.9281 17.7683 19.667 17.7037 19.4046 18.0966C19.1435 18.487 18.3931 19.3705 18.165 19.6316L17.3158 19.7305C16.9241 19.5327 15.6608 19.1199 14.1641 17.7854L11.9843 15.0702C11.7562 14.6786 11.9592 14.4663 12.1557 14.2711L12.7439 13.5854C12.9403 13.3559 13.005 13.1924 13.1355 12.93L13.1025 12.2443L12.2217 10.1185L11.8946 9.33391L11.0137 8.66138L10.2621 8.64819C10.001 8.64819 9.57635 8.74577 9.21767 9.13875L7.84623 12.4078L9.24932 16.199L9.4458 16.4615L12.2085 20.6813L16.1395 22.3784L17.0758 22.782L18.3734 23.2026L19.3123 23.502L20.1668 23.4598L20.842 23.3582L23.1602 22.4101L23.4873 21.4949L23.813 20.5797L23.7154 19.6316L22.9637 19.174H22.9651ZM15.8151 28.9363C13.475 28.9367 11.183 28.3091 9.17415 27.1191L8.69942 26.8369L3.76487 28.1319L5.08225 23.3213L4.77235 22.8281C3.46703 20.7503 2.77624 18.3456 2.77981 15.8918C2.78244 8.7049 8.62953 2.85781 15.8204 2.85781C19.3017 2.85781 22.5747 4.21606 25.0354 6.67938L26.9079 4.80815C25.455 3.34562 23.7262 2.18598 21.8219 1.39643L15.8138 0.20855C7.17106 0.20855 0.134507 7.24378 0.131869 15.8905L0 31.8572L8.31305 29.6761C10.6127 30.929 13.1897 31.5855 15.8085 31.5856H15.8151C24.4578 31.5856 31.4944 24.5503 31.497 15.9023L30.3134 9.89572L26.9079 4.80815Z" fill="currentColor"/>
                </svg>
              </a>

              {/* Dribbble */}
              <a href="#" className="text-gold hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 0C7.16 0 0 7.16 0 16C0 24.84 7.16 32 16 32C24.84 32 32 24.84 32 16C32 7.16 24.84 0 16 0ZM26.23 7.5C28.1 9.72 29.22 12.57 29.22 15.69C28.85 15.62 25.03 14.78 21.17 15.27C21.1 15.13 21.03 14.99 20.96 14.85C20.68 14.21 20.37 13.57 20.04 12.93C24.29 11.08 26.02 8.05 26.23 7.5ZM16 2.78C19.39 2.78 22.44 4.09 24.66 6.23C24.49 6.75 22.96 9.57 18.87 11.21C16.79 7.43 14.49 4.34 14.18 3.93C14.79 2.86 15.39 2.78 16 2.78ZM11.79 4.79C12.09 5.18 14.36 8.28 16.46 12C10.43 13.61 5.14 13.58 4.62 13.58C5.46 9.5 8.22 6.16 11.79 4.79ZM2.78 16V15.41C3.3 15.42 9.52 15.49 15.98 13.54C16.38 14.27 16.75 15.02 17.1 15.77C16.94 15.81 16.77 15.86 16.61 15.91C9.93 18.01 6.53 24.01 6.31 24.43C4.17 22.16 2.78 19.21 2.78 16ZM16 29.22C12.88 29.22 10.03 28.1 7.81 26.23C7.99 25.82 10.43 20.57 17.64 18.16C17.67 18.15 17.69 18.15 17.72 18.14C19.43 22.6 20.11 26.39 20.29 27.53C19.01 28.63 17.56 29.22 16 29.22ZM22.96 26.21C22.83 25.43 22.19 21.83 20.6 17.42C24.24 16.87 27.41 17.81 27.82 17.94C27.32 21.52 25.52 24.66 22.96 26.21Z" fill="currentColor"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-gold hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M27.26 0H4.74C2.13 0 0 2.13 0 4.74V27.26C0 29.87 2.13 32 4.74 32H27.26C29.87 32 32 29.87 32 27.26V4.74C32 2.13 29.87 0 27.26 0ZM9.95 27.26H4.96V12H9.95V27.26ZM7.46 9.93C5.87 9.93 4.59 8.65 4.59 7.06C4.59 5.47 5.87 4.19 7.46 4.19C9.05 4.19 10.33 5.47 10.33 7.06C10.33 8.65 9.05 9.93 7.46 9.93ZM27.26 27.26H22.27V19.87C22.27 18.08 22.24 15.78 19.76 15.78C17.25 15.78 16.88 17.73 16.88 19.75V27.26H11.89V12H16.68V14.11H16.74C17.41 12.83 19.02 11.48 21.43 11.48C26.48 11.48 27.26 14.78 27.26 19.05V27.26Z" fill="currentColor"/>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="text-gold hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M28.81 6.37C27.56 6.92 26.23 7.29 24.84 7.46C26.26 6.59 27.34 5.23 27.86 3.61C26.51 4.42 25.02 4.99 23.46 5.29C22.19 3.94 20.41 3.09 18.44 3.09C14.65 3.09 11.58 6.16 11.58 9.95C11.58 10.49 11.64 11.01 11.76 11.51C6.1 11.24 1.06 8.51 -2.33 4.36C-2.93 5.39 -3.27 6.59 -3.27 7.87C-3.27 10.28 -2.04 12.39 -0.16 13.63C-1.3 13.6 -2.38 13.28 -3.33 12.76V12.84C-3.33 16.18 -0.92 18.93 2.2 19.56C1.62 19.72 1.01 19.8 0.37 19.8C-0.08 19.8 -0.52 19.76 -0.95 19.68C-0.06 22.39 2.52 24.38 5.53 24.44C3.14 26.3 0.16 27.42 -3.09 27.42C-3.64 27.42 -4.18 27.39 -4.72 27.33C-1.68 29.31 1.91 30.47 5.8 30.47C18.43 30.47 25.34 19.91 25.34 10.75C25.34 10.45 25.33 10.15 25.32 9.86C26.69 8.87 27.87 7.63 28.81 6.37Z" fill="currentColor"/>
                </svg>
              </a>

              {/* Behance */}
              <a href="#" className="text-gold hover:opacity-80 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M20.74 4.65H28.29V7.18H20.74V4.65ZM10.17 14.66C12.5 13.56 13.72 11.88 13.72 9.29C13.72 4.16 9.87 2.92 5.41 2.92H-6.86V28.65H5.75C10.48 28.65 14.91 26.41 14.91 21.18C14.91 17.95 13.37 15.56 10.17 14.66ZM-1.14 7.31H4.23C6.3 7.31 8.15 7.88 8.15 10.25C8.15 12.43 6.71 13.31 4.66 13.31H-1.14V7.31ZM4.97 24.28H-1.14V17.2H5.09C7.61 17.2 9.2 18.24 9.2 20.87C9.2 23.46 7.3 24.28 4.97 24.28ZM33.41 19.61C33.41 14.09 30.15 9.5 24.25 9.5C18.51 9.5 14.61 13.77 14.61 19.37C14.61 25.17 18.31 29.15 24.25 29.15C29.75 29.15 32.66 27.15 34.06 22.88H29.5C29 24.47 26.98 25.31 25.41 25.31C22.38 25.31 20.79 23.55 20.79 20.57H33.38C33.39 20.26 33.41 19.94 33.41 19.61ZM20.79 17.34C20.96 14.89 22.61 13.35 25.09 13.35C27.69 13.35 28.99 14.86 29.22 17.34H20.79Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <svg className="w-full max-w-[1000px] h-auto opacity-20" viewBox="0 0 1000 342" fill="none">
              <path d="M401.016 3.43115C402.267 1.52337 405.065 1.51762 406.325 3.42041L447.247 65.2212L497.401 140.805L542.655 209.153L592.814 284.971L599.351 294.773L614.809 318.195C620.698 327.119 614.297 339.018 603.602 339.018H378.842C362.234 339.024 346.739 330.683 337.59 316.827L321.579 292.567L310.612 276.002L265.356 207.651L219.548 138.611C216.696 134.318 210.387 134.332 207.56 138.643L162.177 207.891L114.293 280.616C110.043 287.072 114.671 295.669 122.407 295.669H217.058L244.309 334.087C245.714 336.201 244.197 339.03 241.664 339.03H15.4511C4.7562 339.03 -1.64573 327.131 4.24411 318.207L19.708 294.777L75.2304 210.326L120.253 141.501L169.94 65.6851L210.651 3.67822C211.902 1.77099 214.703 1.76406 215.965 3.66943L256.887 65.689L307.049 141.276L352.303 209.625L401.128 283.267C406.261 291.011 414.936 295.669 424.227 295.669H496.198C503.928 295.669 508.564 287.08 504.314 280.617L455.715 207.181L405.556 131.598L362.187 66.0933C361.488 65.0302 361.486 63.6546 362.183 62.5894L401.016 3.43115Z" stroke="#FFD700" strokeOpacity="0.2" strokeWidth="4"/>
              <path d="M826.586 65.1885L853.449 103.382C854.843 105.496 853.33 108.307 850.793 108.308H684.194C676.441 108.308 671.815 116.941 676.101 123.396L782.057 283.269C787.19 291.012 795.865 295.67 805.155 295.67H876.834C884.637 295.67 889.257 286.933 884.859 280.483L873.541 263.88L865.751 259.644L853.69 259.35C852.707 259.324 851.79 258.849 851.214 258.068L823.96 221.277C822.45 219.237 823.818 216.381 826.283 216.214L920.929 216.583C925.396 216.598 929.562 218.839 932.038 222.549L973.277 284.277L980.274 294.773L995.738 318.196C1001.63 327.12 995.232 339.019 984.53 339.019H760.012C743.409 339.024 727.915 330.689 718.766 316.827L702.749 292.562L691.318 275.297L566.258 86.373L565.987 85.9502C560.539 77.1005 566.848 65.5615 577.365 65.5059L639.501 65.1885H826.586Z" stroke="#FFD700" strokeOpacity="0.2" strokeWidth="4"/>
            </svg>
          </div>
        </div>
      </footer>

      {/* Decorative dots */}
      <div className="fixed right-0 top-1/3 flex flex-col gap-8 pr-12 hidden xl:flex">
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
      </div>

      <div className="fixed left-0 top-1/2 flex flex-col gap-8 pl-12 hidden xl:flex">
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
        <div className="w-2.5 h-2.5 rounded-full bg-gold" />
      </div>

      {/* Social icons sidebar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-50">
        <a href="#" className="text-gold hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.965 14.174C17.572 13.9775 15.6455 13.0307 15.2868 12.8988C14.9281 12.7683 14.667 12.7037 14.4046 13.0966C14.1435 13.487 13.3931 14.3705 13.165 14.6316C12.9356 14.894 12.7074 14.9257 12.3158 14.7305C11.9241 14.5327 10.6608 14.1199 9.16415 12.7854C7.99972 11.7463 7.21244 10.4632 6.98428 10.0702C6.75612 9.67859 6.95916 9.46632 7.15565 9.27114C7.33237 9.09572 7.54738 8.81348 7.74387 8.58532C7.9403 8.35589 8.00496 8.19236 8.13549 7.93004C8.26741 7.66893 8.20136 7.44077 8.10253 7.24428C8.00496 7.04779 7.22166 5.11854 6.89461 4.33392C6.57683 3.57039 6.25371 3.67456 6.01371 3.66138C5.78428 3.65083 5.52321 3.64819 5.26215 3.64819C5.00108 3.64819 4.57635 3.74577 4.21767 4.13875C3.85767 4.5304 2.84623 5.47851 2.84623 7.4078C2.84623 9.33572 4.24932 11.199 4.4458 11.4615C4.64229 11.7226 7.20851 15.6813 11.1395 17.3784C12.0758 17.782 12.805 18.0233 13.3734 18.2026C14.3123 18.502 15.1668 18.4598 15.842 18.3582C16.5936 18.2461 18.1602 17.4101 18.4873 16.4949C18.813 15.5797 18.813 14.7951 18.7154 14.6316C18.6178 14.4681 18.3567 14.3705 17.9637 14.174H17.965ZM10.8151 23.9363H10.8098C8.47496 23.9367 6.18296 23.3091 4.17415 22.1191L3.69942 21.8369L-1.23513 23.1319L0.0822457 18.3213L-0.227654 17.8281C-1.53297 15.7503 -2.22376 13.3456 -2.22019 10.8918C-2.21756 3.7049 3.62953 -2.14219 10.8204 -2.14219C14.3017 -2.14219 17.5747 -0.783937 20.0354 1.67938C21.2491 2.88807 22.2111 4.32543 22.8657 5.90829C23.5203 7.49116 23.8545 9.18807 23.8491 10.901C23.8464 18.0879 17.9993 23.9363 10.8151 23.9363Z" fill="currentColor"/>
          </svg>
        </a>

        <a href="#" className="text-gold hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM19.673 5.625C21.075 7.29 21.915 9.428 21.915 11.768C21.638 11.715 18.772 11.107 15.878 11.453C15.825 11.348 15.772 11.243 15.72 11.138C15.51 10.658 15.278 10.178 15.03 9.698C18.218 8.31 19.51 6.038 19.673 5.625ZM12 2.085C14.543 2.085 16.83 3.068 18.495 4.673C18.368 5.063 17.22 7.178 14.153 8.408C12.593 5.573 10.868 3.255 10.635 2.948C11.085 2.093 11.543 2.085 12 2.085ZM8.843 3.593C9.068 3.885 10.77 6.21 12.345 9C7.823 10.208 3.855 10.185 3.465 10.185C4.095 7.125 6.165 4.62 8.843 3.593ZM2.085 12V11.558C2.475 11.565 7.14 11.618 11.985 10.155C12.285 10.703 12.563 11.265 12.825 11.828C12.705 11.858 12.578 11.895 12.458 11.933C7.448 13.508 4.898 18.008 4.733 18.323C3.128 16.62 2.085 14.408 2.085 12ZM12 21.915C9.66 21.915 7.522 21.075 5.858 19.673C5.993 19.365 7.823 15.428 13.23 13.62C13.253 13.612 13.268 13.612 13.29 13.605C14.573 16.95 15.083 19.793 15.218 20.648C14.258 21.473 13.17 21.915 12 21.915ZM17.22 19.658C17.123 19.073 16.648 16.373 15.45 13.065C18.18 12.653 20.558 13.358 20.865 13.463C20.49 16.14 19.14 18.495 17.22 19.658Z" fill="currentColor"/>
          </svg>
        </a>

        <a href="#" className="text-gold hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.447 0H3.553C1.589 0 0 1.589 0 3.553V20.447C0 22.411 1.589 24 3.553 24H20.447C22.411 24 24 22.411 24 20.447V3.553C24 1.589 22.411 0 20.447 0ZM7.458 20.447H3.72V9H7.458V20.447ZM5.589 7.448C4.405 7.448 3.443 6.487 3.443 5.302C3.443 4.117 4.405 3.155 5.589 3.155C6.773 3.155 7.735 4.117 7.735 5.302C7.735 6.487 6.773 7.448 5.589 7.448ZM20.447 20.447H16.709V14.902C16.709 13.56 16.68 11.835 14.82 11.835C12.937 11.835 12.66 13.297 12.66 14.812V20.447H8.922V9H12.51V10.582H12.555C13.057 9.622 14.265 8.61 16.073 8.61C19.86 8.61 20.447 11.085 20.447 14.287V20.447Z" fill="currentColor"/>
          </svg>
        </a>

        <a href="#" className="text-gold hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.607 4.778C20.67 5.19 19.67 5.467 18.63 5.595C19.69 4.943 20.497 3.923 20.895 2.708C19.88 3.318 18.76 3.745 17.58 3.968C16.643 2.955 15.308 2.318 13.83 2.318C10.988 2.318 8.685 4.62 8.685 7.463C8.685 7.87 8.73 8.267 8.82 8.648C4.575 8.44 0.795 6.388 -1.748 3.27C-2.198 4.048 -2.455 4.943 -2.455 5.903C-2.455 7.71 -1.53 9.293 -0.12 10.223C-0.975 10.2 -1.785 9.96 -2.498 9.57V9.63C-2.498 12.135 -0.69 14.198 1.65 14.67C1.215 14.79 0.758 14.85 0.278 14.85C-0.06 14.85 -0.39 14.82 -0.713 14.76C-0.045 16.793 1.89 18.285 4.148 18.33C2.355 19.725 0.12 20.565 -2.318 20.565C-2.73 20.565 -3.135 20.543 -3.54 20.498C-1.26 21.983 1.433 22.853 4.35 22.853C13.818 22.853 19.005 14.93 19.005 8.063C19.005 7.838 19 7.613 18.99 7.395C20.018 6.653 20.903 5.723 21.607 4.778Z" fill="currentColor"/>
          </svg>
        </a>

        <a href="#" className="text-gold hover:opacity-80 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.555 3.488H21.218V5.385H15.555V3.488ZM7.628 10.995C9.375 10.17 10.29 8.91 10.29 6.968C10.29 3.12 7.403 2.19 3.808 2.19H-5.145V21.488H4.313C7.86 21.488 11.175 19.807 11.175 15.885C11.175 13.463 10.035 11.685 7.628 10.995ZM-0.855 5.483H3.173C4.725 5.483 6.113 5.91 6.113 7.688C6.113 9.323 5.003 9.983 3.498 9.983H-0.855V5.483ZM3.728 18.218H-0.855V12.9H3.818C5.708 12.9 6.9 13.68 6.9 15.653C6.9 17.595 5.475 18.218 3.728 18.218ZM25.058 14.708C25.058 10.568 22.568 7.125 18.188 7.125C13.883 7.125 10.958 10.328 10.958 14.528C10.958 18.878 13.628 21.878 18.188 21.878C22.313 21.878 24.498 20.273 25.545 17.16H22.125C21.75 18.353 20.235 18.983 19.058 18.983C16.808 18.983 15.593 17.663 15.593 15.428H25.035C25.05 15.195 25.058 14.955 25.058 14.708ZM15.593 13.005C15.718 11.168 16.958 10.013 18.563 10.013C20.268 10.013 21.243 11.148 21.413 13.005H15.593Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
