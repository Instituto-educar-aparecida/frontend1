interface ICommentCard {
  key: number;
  comment: {
    initials: string;
    name: string;
    time: string;
    text: string;
    avatarBg: string;
    textColor: string;
  };
}

export const Card = ({ key, comment }: ICommentCard) => {
  return (
    <div
      key={key}
      className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] rounded-2xl"
    >
      {key > 0 && (
        <div className="relative self-stretch w-full h-px border-t border-white/14" />
      )}
      <article className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <div
              className={`flex w-6 h-6 items-center justify-center bg-green/20 rounded-full custom-scrollbar`}
            >
              <span className={`text-label font-bold text-green`}>
                {comment.initials}
              </span>
            </div>
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <h4 className="text-sm font-semibold text-white -mt-px leading-tight">
                {comment.name}
              </h4>
            </div>
          </div>
          <time className="text-label text-gray-400 font-normal">
            {comment.time}
          </time>
        </div>
        <div className="flex flex-col items-start pl-3 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto] border-l-2 border-white/14">
          <p className="text-caption text-gray-400 leading-relaxed -mt-0.5">
            {comment.text}
          </p>
        </div>

        <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto] border-b   border-white/8">
          <button className="all-[unset] box-border inline-flex flex-col justify-center flex-[0_0_auto] items-center mb-1 hover:text-violet-400 transition-colors px-3 py-1 rounded-lg hover:bg-white/10">
            <span className="text-label font-bold text-violet-600 tracking-wide uppercase">
              Curtir
            </span>
          </button>
          <button className="all-[unset] box-border inline-flex flex-col justify-center flex-[0_0_auto] items-center hover:text-violet-400 transition-colors px-3 py-1 rounded-lg hover:bg-white/10">
            <span className="text-label font-bold text-violet-600 tracking-wide uppercase">
              Responder
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};
