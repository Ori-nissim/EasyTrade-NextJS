export default function ContentContainer(props: React.PropsWithChildren) {
  return (
    <div className="bg-background flex flex-col justify-center md:flex-row gap-4 px-10 lg:max-w-screen-xl  mt-20 mx-auto">
      <div className="flex flex-col md:flex-row flex-1 gap-4">
        {props.children}
      </div>
    </div>
  );
}
