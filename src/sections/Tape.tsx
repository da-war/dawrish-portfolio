import StarIcon from "@/assets/icons/star.svg";
import { div } from "framer-motion/client";
export const TapeSection = () => {
  const words = [
    "Tailwind CSS",
    "TypeScript",
    "GoLang",
    "Docker",
    "React Native",
    "Kubernetes",
    "AWS",
    "Gin",
    "Next.js",
    "Fiber",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Apollo",
    "Prisma",
    "Redis",
    "NestJS",
    "Express",
    "Socket.io",
    "Flutter",
    "Swift",
    "Kotlin",
    "Java",
    "Python",
  ];
  return (
    <div className="py-16 lg:py-24  -mx-1">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 justify-center items-center overflow-x-clip -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
          <div className="flex-none gap-4 py-3">
            {words.map((word, index) => (
              <div key={index} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
