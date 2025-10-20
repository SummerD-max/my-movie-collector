import { useParams } from "react-router";

function MoviePlayground() {
  const { imdbId } = useParams();

  const embedUrl = `https://vsrc.su/embed/movie?imdb=${imdbId}&ds_lang=en`;

  return (
    // 1. 父容器：作为渐变背景，用 padding 控制边框粗细
    <div className="mb-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-2 shadow-lg">
      {/* 2. 子容器：用背景色覆盖掉渐变，形成内容区域 */}
      <div className="aspect-video w-full overflow-hidden rounded-md bg-black">
        <iframe
          src={embedUrl}
          className="h-full w-full"
          title="Movie Player"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default MoviePlayground;
