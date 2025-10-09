import { Gift, Ticket, Diamond } from "lucide-react";
import { Button } from "./Button";
import { useTranslation } from "next-i18next";
import { useTranslations } from "next-intl";

export default function RegistrationRewards() {
    const t = useTranslations('Registration')
  const rewards = [
    {
      icon: Diamond,
      ...t.raw("rewards")[0], // Lấy object từ mảng rewards trong JSON 
    },
    {
      icon: Ticket,
      ...t.raw("rewards")[1], 
    },
    {
      icon: Gift,
      ...t.raw("rewards")[2], 
    },
  ];

  return (
    <section id={'Rew'} className="  text-white flex items-center justify-center min-h-screen p-8 sm:p-16">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column* text*/}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-gray-400">
              {t("newUserMessage")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("title")}<br />
              <span className="text-[#f7a600]">{t("highlightedTitle")}</span>
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {rewards.map((reward, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-amber-500/10 hover:bg-amber-500/30 p-3 rounded-lg">
                  <reward.icon className="w-6 h-6 text-[#f7a600]" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">{reward.title}</p>
                  <p className="text-gray-400 text-sm">{reward.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Button className="font-bold py-3 px-6 rounded-lg w-fit mt-4 hover:scale-105 hover:text-black">
            {t("buttonText")}
          </Button>
        </div>
        
        {/* Right Column: Video/Image Visual */}
        <div className="hidden lg:block relative lg:w-[500px] lg:h-[350px] lg:justify-self-center rounded-2xl overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/coinruntime.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>

      </div>
    </section>
  );
}