interface TabsProps {
  children: React.ReactNode;
  buttons: React.ReactNode;
  buttonsContainer?: any;
  className?: string;
}
export const Tabs = ({
  children,
  buttons,
  buttonsContainer = "menu",
  ...props
}: TabsProps) => {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer {...props}>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
