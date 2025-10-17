import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import bannerImage from "@assets/image_1760716760817.png";
import profileImage from "@assets/image_1760716763130.png";
import youtubeIcon from "@assets/image_1760716765502.png";
import tiktokIcon from "@assets/image_1760716768446.png";
import tiktokNeonIcon from "@assets/image_1760716772630.png";
import discordIcon from "@assets/image_1760716777870.png";

interface LinkConfig {
  id: string;
  title: string;
  url: string;
  subscribers: string;
  icon: string;
}

interface Config {
  name: string;
  tagline: string;
  links: LinkConfig[];
}

const iconMap: Record<string, string> = {
  youtube: youtubeIcon,
  tiktok: tiktokIcon,
  "tiktok-edit": tiktokNeonIcon,
  discord: discordIcon,
};

const gradientMap: Record<string, string> = {
  youtube: "from-red-600 via-red-700 to-red-800",
  "tiktok-main": "from-cyan-500 via-pink-500 to-purple-900",
  "tiktok-edit": "from-purple-600 via-blue-600 to-blue-700",
  discord: "from-indigo-600 via-indigo-700 to-indigo-800",
};

export default function LinkHub() {
  const { data: config, isLoading } = useQuery<Config>({
    queryKey: ["/config.json"],
  });

  if (isLoading || !config) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-950/20 to-background flex items-center justify-center">
        <div className="text-foreground/60 text-lg" data-testid="text-loading">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950/20 to-background">
      <div className="mx-auto max-w-md">
        {/* Banner Section */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
          <img
            src={bannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
            data-testid="img-banner"
          />
        </div>

        {/* Profile Picture */}
        <div className="relative -mt-[60px] md:-mt-[70px] z-20 flex justify-center px-6">
          <div
            className="rounded-full border-4 border-white shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            style={{ width: "120px", height: "120px" }}
          >
            <img
              src={profileImage}
              alt={config.name}
              className="w-full h-full rounded-full object-cover"
              data-testid="img-profile"
            />
          </div>
        </div>

        {/* Name and Tagline */}
        <div className="text-center mt-4 px-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 50%, #c44569 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-testid="text-name"
          >
            {config.name}
          </h1>
          <p className="text-lg text-foreground/70 mt-2 font-medium" data-testid="text-tagline">
            {config.tagline}
          </p>
        </div>

        {/* Links */}
        <div className="mt-8 px-6 pb-12 space-y-4">
          {config.links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group block relative overflow-visible rounded-2xl
                bg-gradient-to-r ${gradientMap[link.id] || "from-gray-700 to-gray-800"}
                shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                hover:scale-[1.02]
                active:scale-[0.98]
                transition-all duration-200 ease-in-out
                min-h-[68px] md:min-h-[72px]
              `}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`,
              }}
              data-testid={`link-${link.id}`}
            >
              <div className="relative flex items-center justify-between p-4 h-full">
                {/* Icon */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                    <img
                      src={iconMap[link.icon]}
                      alt={`${link.title} icon`}
                      className="w-full h-full object-contain drop-shadow-lg"
                      data-testid={`img-icon-${link.id}`}
                    />
                  </div>

                  {/* Title and Subscribers */}
                  <div className="flex-1">
                    <div className="text-white font-semibold text-lg md:text-xl" data-testid={`text-title-${link.id}`}>
                      {link.title}
                    </div>
                    <div className="text-white/70 text-sm mt-0.5" data-testid={`text-subscribers-${link.id}`}>
                      {link.subscribers}
                    </div>
                  </div>
                </div>

                {/* External Link Icon */}
                <div className="flex-shrink-0 ml-2">
                  <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" data-testid={`icon-external-${link.id}`} />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-2xl transition-colors pointer-events-none" />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
