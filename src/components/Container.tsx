type Props = {
  children?: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="container max-w-7xl mx-auto px-5">{children}</div>;
};