export default function ContentContainer(props: React.PropsWithChildren) {
    return <div className="bg-background pt-4">
      <div className="mx-10 ">{props.children}</div>; 
      </div>
  }