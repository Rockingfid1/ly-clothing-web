import { GlobalColors } from "@/lib/constants/theme/globalColors";

export default function HomePage() {
  return (
    <div
      style={{
        height: "100vh",
        background: `linear-gradient(to bottom, ${GlobalColors.app_bg_gradient1}, ${GlobalColors.app_bg_gradient2})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      This is the home page
    </div>
  );
}
