import type { IconType } from "react-icons";

interface IButton {
  readonly title: string;
  readonly icon: IconType;
  readonly loadingTitle?: string;
  readonly loadingIcon?: IconType;
  readonly disabled?: boolean;
  readonly isLoading?: boolean;
}

export function Button({
  title,
  icon: Icon,
  loadingTitle,
  loadingIcon,
  disabled = false,
  isLoading = false,
  ...props
}: IButton) {
  const showLoading = isLoading;
  const ButtonIcon = showLoading && loadingIcon ? loadingIcon : Icon;
  const buttonTitle = showLoading && loadingTitle ? loadingTitle : title;
  return (
    <button
      {...props}
      type="submit"
      disabled={disabled || showLoading}
      className="w-full py-3 bg-violet-400 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg shadow-violet-500/40 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
    >
      <span>{buttonTitle}</span>
      <ButtonIcon className="text-lg transition-transform" />
    </button>
  );
}
