export default function ContentContainer(props: React.PropsWithChildren) {
  return (
    <div className="bg-background pt-4 flex flex-col md:flex-row gap-4">
      <div className="mx-10 flex flex-col md:flex-row flex-1 gap-4">{props.children}</div>
    </div>
  );
}
