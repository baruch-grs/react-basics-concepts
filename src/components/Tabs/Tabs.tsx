interface TabsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  className?: string;
}
export const Tabs = ({ children, buttons, className }: TabsProps) => {
  return (
    <>
      <menu className={className}>{buttons}</menu>
      {children}
    </>
  );
};
