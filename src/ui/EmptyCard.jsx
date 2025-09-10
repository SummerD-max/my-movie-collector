function EmptyCard() {
  return (
    <div className="flex animate-pulse cursor-pointer overflow-hidden rounded-3xl bg-purple-100">
      {/* 图片占位符 */}
      <div className="h-40 flex-1 bg-purple-200"></div>

      {/* 内容占位符 */}
      <div className="flex flex-2 flex-col space-y-3 p-4">
        {/* 标题占位符 */}
        <div className="h-6 w-3/4 rounded bg-purple-200"></div>

        {/* 年份和类型占位符 */}
        <div className="flex gap-2">
          <div className="h-4 w-16 rounded bg-purple-200"></div>
          <div className="h-4 w-20 rounded bg-purple-200"></div>
        </div>

        {/* 描述占位符 */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-purple-200"></div>
          <div className="h-4 w-2/3 rounded bg-purple-200"></div>
          <div className="h-4 w-1/2 rounded bg-purple-200"></div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCard;
