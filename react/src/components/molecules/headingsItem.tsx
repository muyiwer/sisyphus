interface HeadingItemProps {
  imageSrc: string;
  title: string;
  value: string;
}
export const HeadingsItem = ({ imageSrc, title, value }: HeadingItemProps) => {
  return (
    <div className="headings__item flex-col border-right">
      <div className="flex gap-2">
        <img src={imageSrc} alt="" />
        <span className="text-dark text-sm">{title}</span>
      </div>
      <span className="text-primary">{value}</span>
    </div>
  );
};
