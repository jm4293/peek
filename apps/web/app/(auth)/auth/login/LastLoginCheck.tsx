export const LastLoginCheck = () => {
  return (
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
      <div
        className="relative text-white px-4 py-1 rounded-full text-sm font-medium shadow-md"
        style={{ backgroundColor: 'var(--main-color)' }}
      >
        마지막 로그인
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent"
          style={{ borderTopColor: 'var(--main-color)' }}
        ></div>
      </div>
    </div>
  );
};
