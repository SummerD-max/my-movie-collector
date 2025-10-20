import { useNavigate } from "react-router";
import { FaFilm } from "react-icons/fa"; // 1. 引入图标

function Logo() {
  const navigate = useNavigate();

  return (
    // 2. 使用 flex 布局来对齐图标和文字
    <div
      className="group flex cursor-pointer items-center gap-3"
      onClick={() => navigate("/")}
    >
      {/* 3. 添加电影图标，并设置 hover 动画 */}
      <img
        src="/logo.svg"
        className="h-8 transition-all duration-300 group-hover:translate-0.5"
      />

      {/* 4. 使用渐变文字效果，并将 Logo 分为两部分 */}
      <h1 className="text-2xl font-black tracking-wider">
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          MyMovie
        </span>
        <span className="text-gray-700">Collector</span>
      </h1>
    </div>
  );
}

export default Logo;
