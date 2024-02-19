export interface ITitlePage {
  title: string;
}

export const TitlePage = ({ title }: ITitlePage) => {
  return (
    <h3 className="text-4xl bg-amhp-dark-100 pl-4 py-5 text-amhp-gray-100 text-center">
      {title}
    </h3>
  );
};
